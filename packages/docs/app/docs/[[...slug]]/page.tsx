import { source } from '@/lib/source';
import { DocsPage, DocsBody } from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import { useMDXComponents } from '../../../mdx-components';
import type { Metadata } from 'next';

type PageProps = { params: Promise<{ slug?: string[] }> };

export default async function Page(props: PageProps) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  const components = useMDXComponents({});
  return (
    <DocsPage toc={page.data.toc}>
      <DocsBody>
        <header className="nui-doc-header">
          <h1>{page.data.title}</h1>
          {page.data.description && <p>{page.data.description}</p>}
        </header>
        <MDX components={components} />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}

export function generateStaticParams() {
  return source.generateParams();
}
