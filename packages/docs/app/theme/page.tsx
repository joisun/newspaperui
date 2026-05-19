import { CodeBlock } from '@/components/CodeBlock';

export default function ThemePage() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1>主题系统</h1>
      <p className="text-xl text-gray-600">
        NewspaperUI 基于 CSS Variables 构建主题系统，支持主题切换和自定义。
      </p>

      <h2>CSS Variables</h2>
      <p>
        主题系统使用 CSS 自定义属性（CSS Variables）定义颜色、字体、间距等设计令牌。
        这使得主题切换和自定义变得简单而灵活。
      </p>

      <h3>核心变量</h3>
      <CodeBlock
        title="CSS Variables"
        language="css"
        code={`:root {
  /* 颜色系统 */
  --color-text-primary: #111;
  --color-text-secondary: #222;
  --color-text-tertiary: #333;
  --color-text-muted: #555;
  --color-background: #ffffff;
  --color-border: #e5e7eb;

  /* 字体系统 */
  --font-family-serif: Georgia, 'Times New Roman', serif;
  --font-family-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-family-mono: 'Courier New', monospace;

  /* 间距系统 */
  --spacing-gutter: 1rem;
  --spacing-section: 2rem;
  --spacing-article: 1.5rem;

  /* 栅格系统 */
  --grid-columns: 24;
  --grid-max-width: 1280px;
}`}
      />

      <h2>Tailwind 集成</h2>
      <p>
        NewspaperUI 的主题系统与 Tailwind CSS 深度集成，可以直接在 Tailwind 配置中使用主题变量。
      </p>

      <CodeBlock
        title="tailwind.config.js"
        language="javascript"
        code={`import { newspaperTheme } from '@newspaperui/theme';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        newspaper: {
          text: {
            primary: 'var(--color-text-primary)',
            secondary: 'var(--color-text-secondary)',
            tertiary: 'var(--color-text-tertiary)',
            muted: 'var(--color-text-muted)',
          },
        },
      },
      fontFamily: {
        serif: 'var(--font-family-serif)',
        sans: 'var(--font-family-sans)',
        mono: 'var(--font-family-mono)',
      },
    },
  },
  plugins: [newspaperTheme],
};`}
      />

      <h2>使用主题变量</h2>
      <p>
        在组件中可以直接使用 CSS Variables 或 Tailwind 工具类。
      </p>

      <CodeBlock
        title="使用示例"
        language="tsx"
        code={`// 使用 CSS Variables
<div style={{ color: 'var(--color-text-primary)' }}>
  主要文本
</div>

// 使用 Tailwind 工具类
<div className="text-newspaper-text-primary">
  主要文本
</div>`}
      />

      <h2>自定义主题</h2>
      <p>
        你可以通过覆盖 CSS Variables 来自定义主题。
      </p>

      <CodeBlock
        title="自定义主题"
        language="css"
        code={`:root {
  /* 覆盖默认颜色 */
  --color-text-primary: #000000;
  --color-text-secondary: #1a1a1a;
  --color-background: #f9f9f9;

  /* 自定义字体 */
  --font-family-serif: 'Merriweather', Georgia, serif;

  /* 调整间距 */
  --spacing-gutter: 1.5rem;
  --grid-max-width: 1440px;
}`}
      />

      <h2>深色模式</h2>
      <p>
        通过定义深色模式的 CSS Variables，可以轻松实现主题切换。
      </p>

      <CodeBlock
        title="深色模式"
        language="css"
        code={`@media (prefers-color-scheme: dark) {
  :root {
    --color-text-primary: #f5f5f5;
    --color-text-secondary: #e0e0e0;
    --color-text-tertiary: #cccccc;
    --color-text-muted: #999999;
    --color-background: #1a1a1a;
    --color-border: #333333;
  }
}

/* 或使用类名切换 */
.dark {
  --color-text-primary: #f5f5f5;
  --color-text-secondary: #e0e0e0;
  --color-background: #1a1a1a;
}`}
      />

      <h2>视觉权重配置</h2>
      <p>
        视觉权重系统的配置也可以通过主题系统进行自定义。
      </p>

      <CodeBlock
        title="自定义视觉权重"
        language="typescript"
        code={`import { visualWeights } from '@newspaperui/theme';

// 查看默认配置
console.log(visualWeights.Headline.High);
// {
//   fontSize: '36px',
//   fontWeight: 700,
//   lineHeight: 1.1,
//   color: '#111',
//   span: [6, 8],
//   margin: '0 0 1rem 0',
// }

// 自定义权重配置
const customWeights = {
  ...visualWeights,
  Headline: {
    ...visualWeights.Headline,
    High: {
      ...visualWeights.Headline.High,
      fontSize: '48px', // 更大的标题
      fontWeight: 800,
    },
  },
};`}
      />

      <h2>响应式主题</h2>
      <p>
        可以根据屏幕尺寸调整主题变量，实现响应式设计。
      </p>

      <CodeBlock
        title="响应式变量"
        language="css"
        code={`:root {
  --grid-columns: 24;
  --spacing-gutter: 1rem;
}

@media (max-width: 768px) {
  :root {
    --grid-columns: 12;
    --spacing-gutter: 0.75rem;
  }
}

@media (max-width: 480px) {
  :root {
    --grid-columns: 6;
    --spacing-gutter: 0.5rem;
  }
}`}
      />

      <h2>主题最佳实践</h2>
      <ul>
        <li>使用语义化的变量名，如 <code>--color-text-primary</code> 而不是 <code>--color-black</code></li>
        <li>保持颜色对比度符合 WCAG 无障碍标准</li>
        <li>使用相对单位（rem、em）而不是绝对单位（px）以支持用户字体大小偏好</li>
        <li>在深色模式下确保所有颜色都有对应的深色版本</li>
        <li>测试主题在不同设备和浏览器上的表现</li>
        <li>提供主题切换的用户界面</li>
      </ul>

      <h2>导入主题</h2>
      <p>
        在你的应用中导入 NewspaperUI 主题：
      </p>

      <CodeBlock
        title="导入主题"
        language="typescript"
        code={`// 在你的主 CSS 文件中
import '@newspaperui/theme/variables.css';

// 或在 Next.js 的 _app.tsx 中
import '@newspaperui/theme/variables.css';
import '@newspaperui/theme/tailwind.css';`}
      />

      <h2>主题工具</h2>
      <p>
        NewspaperUI 提供了一些工具函数来帮助你使用主题系统：
      </p>

      <CodeBlock
        title="主题工具"
        language="typescript"
        code={`import { getVisualWeight, applyTheme } from '@newspaperui/theme';

// 获取特定组件的视觉权重配置
const headlineHighConfig = getVisualWeight('Headline', 'High');

// 应用主题到元素
applyTheme(element, {
  '--color-text-primary': '#000',
  '--font-family-serif': 'Georgia',
});`}
      />

      <h2>主题示例</h2>
      <p>
        以下是一些预设主题示例：
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-3">经典报纸</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>主色调</span>
              <span className="font-mono">#111111</span>
            </div>
            <div className="flex justify-between">
              <span>背景色</span>
              <span className="font-mono">#ffffff</span>
            </div>
            <div className="flex justify-between">
              <span>字体</span>
              <span className="font-mono">Georgia</span>
            </div>
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg p-6 bg-gray-900 text-white">
          <h3 className="text-lg font-semibold mb-3">深色模式</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>主色调</span>
              <span className="font-mono">#f5f5f5</span>
            </div>
            <div className="flex justify-between">
              <span>背景色</span>
              <span className="font-mono">#1a1a1a</span>
            </div>
            <div className="flex justify-between">
              <span>字体</span>
              <span className="font-mono">Georgia</span>
            </div>
          </div>
        </div>
      </div>

      <h2>更多资源</h2>
      <ul>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties">MDN: CSS Custom Properties</a></li>
        <li><a href="https://tailwindcss.com/docs/customizing-colors">Tailwind CSS: Customizing Colors</a></li>
        <li><a href="https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html">WCAG: Contrast Guidelines</a></li>
      </ul>
    </div>
  );
}
