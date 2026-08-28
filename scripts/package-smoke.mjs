import { execFileSync } from 'node:child_process';
import { existsSync, mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { basename, join, resolve } from 'node:path';
import assert from 'node:assert/strict';

const root = resolve(import.meta.dirname, '..');
const packageDir = join(root, 'packages/components');
const scratch = mkdtempSync(join(tmpdir(), 'newspaperui-smoke-'));

try {
  execFileSync('pnpm', ['--dir', packageDir, 'pack', '--pack-destination', scratch], {
    cwd: root,
    stdio: 'pipe',
  });

  const tarballs = readdirSync(scratch).filter((entry) => entry.endsWith('.tgz'));
  assert.equal(tarballs.length, 1, 'pnpm pack must create exactly one tarball');
  const tarball = join(scratch, tarballs[0]);
  assert(existsSync(tarball), 'pnpm pack must create the newspaperui tarball');

  const entries = execFileSync('tar', ['-tf', tarball], { encoding: 'utf8' }).trim().split('\n');
  for (const required of [
    'package/dist/index.js',
    'package/dist/index.cjs',
    'package/dist/index.d.ts',
    'package/dist/style.css',
    'package/README.md',
  ]) {
    assert(entries.includes(required), `tarball is missing ${required}`);
  }
  assert(
    entries.every((entry) => !entry.includes('/__tests__/') && !entry.includes('.test.')),
    'tarball must not contain test declarations or test artifacts',
  );

  const packedManifest = JSON.parse(
    execFileSync('tar', ['-xOf', tarball, 'package/package.json'], { encoding: 'utf8' }),
  );
  const packedReadme = execFileSync('tar', ['-xOf', tarball, 'package/README.md'], {
    encoding: 'utf8',
  });
  assert(packedReadme.includes('pnpm add newspaperui'));
  assert.equal(packedManifest.dependencies?.['newspaperui-theme'], undefined);
  assert.equal(packedManifest.dependencies?.['newspaperui-utils'], undefined);

  for (const reactVersion of ['18.0.0', '19.2.8']) {
    const consumer = join(scratch, `consumer-react-${reactVersion.split('.')[0]}`);
    execFileSync('mkdir', ['-p', consumer]);
    writeFileSync(
      join(consumer, 'package.json'),
      JSON.stringify({
        private: true,
        type: 'module',
        dependencies: {
          newspaperui: `file:${tarball}`,
          react: reactVersion,
          'react-dom': reactVersion,
        },
      }),
    );
    execFileSync('pnpm', ['install', '--ignore-workspace', '--strict-peer-dependencies'], {
      cwd: consumer,
      stdio: 'pipe',
    });

    const esm = execFileSync(
      'node',
      [
        '--input-type=module',
        '-e',
        "import { createElement } from 'react'; import { renderToStaticMarkup } from 'react-dom/server'; import { Layout } from 'newspaperui'; const html = renderToStaticMarkup(createElement(Layout, null, 'ok')); if (!html.includes('ok')) process.exit(1)",
      ],
      { cwd: consumer, encoding: 'utf8' },
    );
    assert.equal(esm, '');
    execFileSync(
      'node',
      [
        '-e',
        "const { createElement } = require('react'); const { renderToStaticMarkup } = require('react-dom/server'); const { Layout } = require('newspaperui'); const html = renderToStaticMarkup(createElement(Layout, null, 'ok')); if (!html.includes('ok')) process.exit(1)",
      ],
      { cwd: consumer, stdio: 'pipe' },
    );

    const installedCss = join(consumer, 'node_modules/newspaperui/dist/style.css');
    assert(readFileSync(installedCss, 'utf8').includes('--nui-bg-page'));
  }
  process.stdout.write(`Package smoke passed: ${basename(tarball)}\n`);
} finally {
  rmSync(scratch, { recursive: true, force: true });
}
