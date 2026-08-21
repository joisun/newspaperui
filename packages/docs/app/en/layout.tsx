import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'NewspaperUI | Editorial React Components',
    template: '%s | NewspaperUI',
  },
  description: 'Production React components for newspaper grids, multilingual typography, and editorial layouts.',
  openGraph: {
    title: 'NewspaperUI | Editorial React Components',
    description: 'Build production newspaper layouts with a 24-column grid and multilingual typography.',
    type: 'website',
    url: '/en',
    siteName: 'NewspaperUI',
  },
};

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return children;
}
