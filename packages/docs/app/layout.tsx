import type { Metadata } from 'next';
import { Sidebar } from '@/components/Sidebar';
import './globals.css';

export const metadata: Metadata = {
  title: 'NewspaperUI - Documentation',
  description: 'A newspaper-style UI component library',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 overflow-x-hidden">
            <div className="max-w-5xl mx-auto px-8 py-12">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
