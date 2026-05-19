'use client';

import { Demo } from '@/components/Demo';
import { PropsTable } from '@/components/PropsTable';
import { Layout, Section, Article, Headline, BodyText } from '@newspaperui/components';
import { Image, Figure } from '@newspaperui/components';

export default function MediaPage() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1>媒体组件</h1>
      <p className="text-xl text-gray-600">
        NewspaperUI 提供了 Image、Figure 和 Video 组件用于展示媒体内容。
      </p>

      <h2>Image 组件</h2>
      <p>
        <code>Image</code> 组件用于显示图片，支持响应式和跨栏布局。
      </p>

      <PropsTable
        data={[
          {
            name: 'src',
            type: 'string',
            required: true,
            description: '图片 URL',
          },
          {
            name: 'alt',
            type: 'string',
            required: true,
            description: '图片替代文本（无障碍）',
          },
          {
            name: 'span',
            type: 'number',
            description: '图片占据的列数',
          },
          {
            name: 'aspectRatio',
            type: 'string',
            default: '"16/9"',
            description: '图片宽高比',
          },
          {
            name: 'objectFit',
            type: '"cover" | "contain" | "fill"',
            default: '"cover"',
            description: '图片填充方式',
          },
          {
            name: 'className',
            type: 'string',
            description: '自定义 CSS 类名',
          },
        ]}
      />

      <Demo
        title="基础图片"
        description="在文章中插入图片"
        code={`<Article span={12}>
  <Headline weight="High">带图片的文章</Headline>
  <Image
    src="https://via.placeholder.com/800x600"
    alt="示例图片"
    span={12}
  />
  <BodyText>图片下方的文字说明</BodyText>
</Article>`}
      >
        <Layout columns={24}>
          <Section columns={24}>
            <Article span={12}>
              <Headline weight="High">带图片的文章</Headline>
              <Image
                src="https://via.placeholder.com/800x600"
                alt="示例图片"
                span={12}
              />
              <BodyText>图片下方的文字说明</BodyText>
            </Article>
          </Section>
        </Layout>
      </Demo>

      <h2>Figure 组件</h2>
      <p>
        <code>Figure</code> 组件是带标题的图片容器，包含图片和图注。
      </p>

      <PropsTable
        data={[
          {
            name: 'src',
            type: 'string',
            required: true,
            description: '图片 URL',
          },
          {
            name: 'alt',
            type: 'string',
            required: true,
            description: '图片替代文本',
          },
          {
            name: 'caption',
            type: 'string',
            required: true,
            description: '图注文字',
          },
          {
            name: 'span',
            type: 'number',
            description: 'Figure 占据的列数',
          },
          {
            name: 'aspectRatio',
            type: 'string',
            default: '"16/9"',
            description: '图片宽高比',
          },
          {
            name: 'className',
            type: 'string',
            description: '自定义 CSS 类名',
          },
        ]}
      />

      <Demo
        title="带图注的图片"
        description="使用 Figure 组件添加图注"
        code={`<Article span={12}>
  <Headline weight="High">新闻标题</Headline>
  <Figure
    src="https://via.placeholder.com/800x600"
    alt="新闻配图"
    caption="这是图片的说明文字，描述图片内容"
    span={12}
  />
  <BodyText>新闻正文内容...</BodyText>
</Article>`}
      >
        <Layout columns={24}>
          <Section columns={24}>
            <Article span={12}>
              <Headline weight="High">新闻标题</Headline>
              <Figure
                src="https://via.placeholder.com/800x600"
                alt="新闻配图"
                caption="这是图片的说明文字，描述图片内容"
                span={12}
              />
              <BodyText>新闻正文内容...</BodyText>
            </Article>
          </Section>
        </Layout>
      </Demo>

      <h2>Video 组件</h2>
      <p>
        <code>Video</code> 组件用于嵌入视频内容。
      </p>

      <PropsTable
        data={[
          {
            name: 'src',
            type: 'string',
            required: true,
            description: '视频 URL',
          },
          {
            name: 'poster',
            type: 'string',
            description: '视频封面图片 URL',
          },
          {
            name: 'span',
            type: 'number',
            description: '视频占据的列数',
          },
          {
            name: 'controls',
            type: 'boolean',
            default: 'true',
            description: '是否显示控制条',
          },
          {
            name: 'autoPlay',
            type: 'boolean',
            default: 'false',
            description: '是否自动播放',
          },
          {
            name: 'loop',
            type: 'boolean',
            default: 'false',
            description: '是否循环播放',
          },
          {
            name: 'muted',
            type: 'boolean',
            default: 'false',
            description: '是否静音',
          },
          {
            name: 'className',
            type: 'string',
            description: '自定义 CSS 类名',
          },
        ]}
      />

      <Demo
        title="嵌入视频"
        description="在文章中嵌入视频内容"
        code={`<Article span={16}>
  <Headline weight="High">视频新闻</Headline>
  <Video
    src="https://example.com/video.mp4"
    poster="https://via.placeholder.com/800x450"
    span={16}
    controls
  />
  <BodyText>视频相关的文字说明...</BodyText>
</Article>`}
      >
        <Layout columns={24}>
          <Section columns={24}>
            <Article span={16}>
              <Headline weight="High">视频新闻</Headline>
              <div className="bg-gray-200 aspect-video flex items-center justify-center">
                <p className="text-gray-600">视频播放器占位</p>
              </div>
              <BodyText>视频相关的文字说明...</BodyText>
            </Article>
          </Section>
        </Layout>
      </Demo>

      <h2>使用建议</h2>
      <ul>
        <li>使用 Image 组件展示简单图片</li>
        <li>使用 Figure 组件为图片添加说明文字</li>
        <li>使用 Video 组件嵌入视频内容</li>
        <li>通过 span 属性控制媒体元素的宽度</li>
        <li>设置合适的 aspectRatio 保持图片比例</li>
        <li>始终提供 alt 文本以提高无障碍性</li>
        <li>考虑图片和视频的加载性能</li>
      </ul>

      <h2>响应式媒体</h2>
      <p>
        媒体组件会根据容器宽度自动调整大小。在小屏设备上，
        媒体元素会自动适应屏幕宽度，保持良好的显示效果。
      </p>

      <h2>性能优化</h2>
      <ul>
        <li>使用适当的图片格式（WebP、AVIF）</li>
        <li>提供多种尺寸的图片用于响应式加载</li>
        <li>使用懒加载（lazy loading）优化页面性能</li>
        <li>压缩图片和视频文件大小</li>
        <li>考虑使用 CDN 加速媒体资源加载</li>
      </ul>
    </div>
  );
}
