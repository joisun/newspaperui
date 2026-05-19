import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NewspaperUI — Production Newspaper Components',
  description: '生产级报纸布局组件库，参考 InDesign 与经典严肃风排版传统，24 列栅格、跨栏、视觉权重和主题系统',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  );
}
