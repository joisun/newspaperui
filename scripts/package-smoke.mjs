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

  const entries = execFileSync('tar', ['-tf', tarball], { encoding: 'utf8' })
    .trim()
    .split('\n');
  for (const required of [
    'package/dist/index.js',
    'package/dist/index.cjs',
    'package/dist/index.d.ts',
    'package/dist/style.css',
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
  assert.equal(packedManifest.dependencies?.['newspaperui-theme'], undefined);
  assert.equal(packedManifest.dependencies?.['newspaperui-utils'], undefined);

  const consumer = join(scratch, 'consumer');
  execFileSync('mkdir', ['-p', consumer]);
  writeFileSync(
    join(consumer, 'package.json'),
    JSON.stringify({
      private: true,
      type: 'module',
      dependencies: {
        newspaperui: `file:${tarball}`,
        react: '18.3.1',
        'react-dom': '18.3.1',
      },
    }),
  );
  execFileSync('pnpm', ['install', '--ignore-workspace'], {
    cwd: consumer,
    stdio: 'pipe',
  });

  const esm = execFileSync(
    'node',
    ['--input-type=module', '-e', "import { Layout } from 'newspaperui'; if (!Layout) process.exit(1)"],
    { cwd: consumer, encoding: 'utf8' },
  );
  assert.equal(esm, '');
  execFileSync(
    'node',
    ['-e', "const { Layout } = require('newspaperui'); if (!Layout) process.exit(1)"],
    { cwd: consumer, stdio: 'pipe' },
  );

  const installedCss = join(consumer, 'node_modules/newspaperui/dist/style.css');
  assert(readFileSync(installedCss, 'utf8').includes('--nui-bg-page'));
  process.stdout.write(`Package smoke passed: ${basename(tarball)}\n`);
} finally {
  rmSync(scratch, { recursive: true, force: true });
}
