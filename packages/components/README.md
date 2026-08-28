# NewspaperUI

Editorial React components for production newspaper layouts.

- [中文文档](https://joisun.github.io/newspaperui/)
- [English documentation](https://joisun.github.io/newspaperui/en/)
- [Browse blocks](https://joisun.github.io/newspaperui/blocks/)
- [Create a theme](https://joisun.github.io/newspaperui/create/)

## Installation

```bash
pnpm add newspaperui
```

NewspaperUI supports React 18 and later. React and React DOM are supplied by your application.

## Quick start

```tsx
import 'newspaperui/style.css';
import { Article, BodyText, Headline, Layout, Section } from 'newspaperui';

export function FrontPage() {
  return (
    <Layout columns={24}>
      <Section columns={24}>
        <Article span={16}>
          <Headline as="h1" weight="High">
            The morning edition
          </Headline>
          <BodyText columns={2} dropCap>
            <p>Compose the story with a real editorial reading flow.</p>
          </BodyText>
        </Article>
      </Section>
    </Layout>
  );
}
```

## Highlights

- Responsive composition on a 24-column editorial grid.
- Multi-column text, drop caps, rules, captions, quotes, and publication metadata.
- Typography presets for English, Chinese, Japanese, and German layouts.
- Light and dark themes, complete example editions, and a visual theme creator.

## License

MIT
