import './globals.css';
import 'fumadocs-ui/style.css';
import type { Metadata } from 'next';
import { RootProvider } from 'fumadocs-ui/provider';
import { Header } from '../components/Header';

export const metadata: Metadata = {
  metadataBase: new URL('https://joisun.github.io/newspaperui/'),
  title: {
    default: 'NewspaperUI | Editorial React Components',
    template: '%s | NewspaperUI',
  },
  description: 'Production React components for newspaper grids, multilingual typography, and editorial layouts.',
  applicationName: 'NewspaperUI',
  authors: [{ name: 'NewspaperUI contributors' }],
  openGraph: {
    title: 'NewspaperUI | Editorial React Components',
    description: 'Build production newspaper layouts with a 24-column grid and multilingual typography.',
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
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
