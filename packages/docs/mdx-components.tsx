import type { MDXComponents } from 'mdx/types';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { ComponentDemo } from './components/Demo';
import {
  Layout, Section, Article, Layer, Masthead, Rule, Footer,
  Headline, Subhead, Kicker, BodyText, Quote, Byline, Dateline, Caption,
  Image, Figure, Video, PullQuote,
  BreakingNewsBanner, NewsSidebar, Folio, IndexBox, Factbox, RelatedArticles,
  AuthorCard, JumpLine,
} from './lib/nui-client';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...components,
    ComponentDemo,
    // Restore native img to avoid Next.js Image hydration mismatch in static export
    img: (props) => <img {...props} />,
    Layout, Section, Article, Layer, Masthead, Rule, Footer,
    Headline, Subhead, Kicker, BodyText, Quote, Byline, Dateline, Caption,
    Image, Figure, Video, PullQuote,
    BreakingNewsBanner, NewsSidebar, Folio, IndexBox, Factbox, RelatedArticles,
    AuthorCard, JumpLine,
  };
}
