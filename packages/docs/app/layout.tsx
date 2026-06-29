import './globals.css';
import 'fumadocs-ui/style.css';
import type { Metadata } from 'next';
import { RootProvider } from 'fumadocs-ui/provider';
import { Header } from '../components/Header';

export const metadata: Metadata = {
  title: 'NewspaperUI — Production Newspaper Components',
  description: '生产级报纸布局组件库',
};

const themeInitScript = `
(function() {
  try {
    var t = localStorage.getItem('nui-theme');
    if (t === 'dark') document.documentElement.dataset.theme = 'dark';
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="flex flex-col min-h-screen">
        <RootProvider>
          <Header />
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
