import type { MDXComponents } from 'mdx/types';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import {
  Layout, Section, Article, Layer, Masthead, Rule, Footer,
  Headline, Subhead, Kicker, BodyText, Quote, Byline, Dateline, Caption,
  Image, Figure, Video, PullQuote,
  BreakingNewsBanner, Folio, IndexBox, Factbox, RelatedArticles, AuthorCard,
} from './lib/nui-client';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...components,
    Layout, Section, Article, Layer, Masthead, Rule, Footer,
    Headline, Subhead, Kicker, BodyText, Quote, Byline, Dateline, Caption,
    Image, Figure, Video, PullQuote,
    BreakingNewsBanner, Folio, IndexBox, Factbox, RelatedArticles, AuthorCard,
  };
}
