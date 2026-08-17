'use client';

import Link from 'next/link';
import { Headline, Kicker, Layout, Subhead } from 'newspaperui';
import styles from './blocks.module.css';

const blocks = [
  { href: '/blocks/zh-frontpage', lang: 'CHINESE · 中文', title: '人民周报 · 头版', description: '思源宋体、克制朱红与高密度头版结构。', color: '#CC2929' },
  { href: '/blocks/zh-feature', lang: 'CHINESE · 中文', title: '副刊 · 文化专题', description: '人物访谈、文化评论与多层引用排版。', color: '#CC2929' },
  { href: '/blocks/en-feature', lang: 'ENGLISH', title: 'The Daily Chronicle · Feature', description: 'Measured long-form reading with pull quotes and a quiet story rhythm.', color: '#8F271F' },
  { href: '/blocks/jp-horizontal', lang: 'JAPANESE · 日本語', title: '朝日新聞 · 横組み', description: '24-column horizontal Japanese editorial layout.', color: '#1B2A4A' },
  { href: '/blocks/jp-vertical', lang: 'JAPANESE · 日本語', title: '朝日新聞 · 縦組み', description: 'Traditional vertical-rl composition with responsive framing.', color: '#1B2A4A' },
  { href: '/blocks/zh-editorial', lang: 'CHINESE · 中文', title: '社论 · 时事评论', description: '双栏评论、专家观点与读者来信的完整结构。', color: '#CC2929' },
];

export default function BlocksIndex() {
  return (
    <main className={styles.page}>
      <Layout columns={24} maxWidth="1400px" padding="clamp(3rem, 7vw, 7rem) clamp(1.25rem, 5vw, 4rem)">
        <header className={styles.hero}>
          <Kicker>Production blocks · Copy, adapt, publish</Kicker>
          <Headline as="h1" weight="High">Newspaper Blocks</Headline>
          <Subhead weight="Medium">Six complete editorial layouts across Chinese, English, and Japanese typography.</Subhead>
        </header>

        <div className={styles.list}>
          {blocks.map((block, index) => (
            <Link className={styles.block} href={block.href} key={block.href}>
              <div className={styles.meta}>
                <span style={{ color: block.color }}>{block.lang}</span>
                <span>Block {String(index + 1).padStart(2, '0')}</span>
              </div>
              <div className={styles.copy}>
                <h2>{block.title}</h2>
                <p>{block.description}</p>
              </div>
              <span className={styles.action}>View block</span>
            </Link>
          ))}
        </div>
      </Layout>
    </main>
  );
}
