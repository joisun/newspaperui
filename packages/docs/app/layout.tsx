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
