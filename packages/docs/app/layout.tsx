import './globals.css';
import type { Metadata } from 'next';
import { Header } from '../components/Header';

export const metadata: Metadata = {
  title: 'NewspaperUI — Production Newspaper Components',
  description: '生产级报纸布局组件库',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
