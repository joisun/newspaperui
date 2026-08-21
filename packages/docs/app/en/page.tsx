import type { Metadata } from 'next';
import LandingPage from '../page';

export const metadata: Metadata = {
  title: { absolute: 'NewspaperUI | Editorial React Components' },
  description: 'Production React components for newspaper grids, multilingual typography, and editorial layouts.',
  alternates: {
    languages: {
      'zh-CN': '/',
      en: '/en',
    },
  },
};

export default LandingPage;
