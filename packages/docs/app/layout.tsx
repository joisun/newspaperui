import 'fumadocs-ui/style.css';
import './globals.css';
import type { Metadata } from 'next';
import { RootProvider } from 'fumadocs-ui/provider';
import { Header } from '../components/Header';
import { LocaleProvider } from '../components/LocaleProvider';
import { rootProviderTheme } from '../lib/theme';

export const metadata: Metadata = {
  metadataBase: new URL('https://joisun.github.io/newspaperui/'),
  title: {
    default: 'NewspaperUI | React 编辑排版组件',
    template: '%s | NewspaperUI',
  },
  description: '用于报纸栅格、多语言排版与编辑布局的生产级 React 组件。',
  applicationName: 'NewspaperUI',
  authors: [{ name: 'NewspaperUI contributors' }],
  openGraph: {
    title: 'NewspaperUI | React 编辑排版组件',
    description: '使用 24 列栅格和多语言排版构建生产级报纸布局。',
    type: 'website',
    url: '/',
    siteName: 'NewspaperUI',
  },
};

const themeInitScript = `
(function() {
  try {
    var t = localStorage.getItem('nui-theme');
    if (t === 'dark') document.documentElement.dataset.theme = 'dark';
  } catch (e) {}
})();
`;

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const localeInitScript = `
(function() {
  var path = window.location.pathname.slice(${JSON.stringify(basePath)}.length) || '/';
  document.documentElement.lang = path === '/en' || path.indexOf('/en/') === 0 ? 'en' : 'zh-CN';
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        {/* CSS imports can land after Fumadocs rules and be ignored by the browser. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,500;8..60,600;8..60,700&family=Inter:wght@400;500;600;700&family=UnifrakturMaguntia&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;500;600;700;900&family=Noto+Serif+JP:wght@400;500;600;700;900&display=swap" />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script dangerouslySetInnerHTML={{ __html: localeInitScript }} />
      </head>
      <body className="flex flex-col min-h-screen">
        <RootProvider theme={rootProviderTheme} search={{ enabled: false }}>
          <LocaleProvider>
            <Header />
            {children}
          </LocaleProvider>
        </RootProvider>
      </body>
    </html>
  );
}
