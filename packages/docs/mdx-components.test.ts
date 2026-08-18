import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

describe('MDX component registry', () => {
  test('exposes the shared live demo frame to documentation content', () => {
    const registrySource = readFileSync(resolve(process.cwd(), 'mdx-components.tsx'), 'utf8');

    expect(registrySource).toContain("import { ComponentDemo } from './components/Demo';");
    expect(registrySource).toMatch(/return\s*{[\s\S]*ComponentDemo,[\s\S]*};/);
  });

  test('registers every public component used by live documentation', () => {
    const registrySource = readFileSync(resolve(process.cwd(), 'mdx-components.tsx'), 'utf8');
    const clientSource = readFileSync(resolve(process.cwd(), 'lib/nui-client.tsx'), 'utf8');

    expect(registrySource).toMatch(/import\s*{[\s\S]*NewsSidebar[\s\S]*JumpLine[\s\S]*}\s*from '\.\/lib\/nui-client';/);
    expect(registrySource).toMatch(/return\s*{[\s\S]*NewsSidebar,[\s\S]*JumpLine,[\s\S]*};/);
    expect(clientSource).toMatch(/BreakingNewsBanner,[\s\S]*NewsSidebar,[\s\S]*JumpLine,/);
  });
});
