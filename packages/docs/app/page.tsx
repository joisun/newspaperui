'use client';

import { useEffect, useState } from 'react';
import { InstallCommand } from '../components/InstallCommand';
import { useLocale } from '../components/LocaleContext';
import EnFeature from './blocks/en-feature/page';
import JpHorizontal from './blocks/jp-horizontal/page';
import JpVertical from './blocks/jp-vertical/page';
import ZhEditorial from './blocks/zh-editorial/page';
import ZhFeature from './blocks/zh-feature/page';
import ZhFrontPage from './blocks/zh-frontpage/page';
import NytFrontPage from './examples/nyt-frontpage/page';
import styles from './page.module.css';

const autoplayDelay = 4_500;
const mobileListQuery = '(max-width: 767px)';

const galleryItems = [
  {
    id: 'zh-frontpage',
    title: '人民周报',
    Preview: ZhFrontPage,
  },
  {
    id: 'zh-feature',
    title: '文化副刊',
    Preview: ZhFeature,
  },
  {
    id: 'en-feature',
    title: 'Daily Chronicle',
    Preview: EnFeature,
  },
  {
    id: 'jp-horizontal',
    title: '朝日新聞 横組み',
    Preview: JpHorizontal,
  },
  {
    id: 'jp-vertical',
    title: '朝日新聞 縦組み',
    Preview: JpVertical,
  },
  {
    id: 'zh-editorial',
    title: '社论',
    Preview: ZhEditorial,
  },
  {
    id: 'nyt-frontpage',
    title: 'New York Times',
    Preview: NytFrontPage,
  },
] as const;

function wrapIndex(index: number) {
  return (index + galleryItems.length) % galleryItems.length;
}

export default function LandingPage() {
  const { messages } = useLocale();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileList, setIsMobileList] = useState(false);
  const [autoplayRevision, setAutoplayRevision] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia(mobileListQuery);
    const updateLayout = () => setIsMobileList(mediaQuery.matches);

    updateLayout();
    mediaQuery.addEventListener('change', updateLayout);

    return () => mediaQuery.removeEventListener('change', updateLayout);
  }, []);

  useEffect(() => {
    if (isMobileList || isHovered || window.matchMedia('(prefers-reduced-motion: reduce)').matches)
      return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex((index) => wrapIndex(index + 1));
    }, autoplayDelay);

    return () => window.clearInterval(timer);
  }, [autoplayRevision, isHovered, isMobileList]);

  function showPreview(index: number) {
    setActiveIndex(wrapIndex(index));
    setAutoplayRevision((revision) => revision + 1);
  }

  return (
    <main className={styles.page}>
      {/* 安装命令区 */}
      <section className={styles.install}>
        <InstallCommand />
      </section>

      {/* 版面预览区 */}
      <section className={styles.galleryWrap}>
        <div
          className={styles.gallery}
          role="region"
          aria-label={messages.home.galleryLabel}
          aria-roledescription={isMobileList ? undefined : 'carousel'}
          data-layout={isMobileList ? 'list' : 'carousel'}
          data-page-flow={isMobileList ? 'document' : undefined}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className={styles.galleryTrack}>
            {galleryItems.map((item, index) => {
              const isActive = index === activeIndex;
              const Preview = item.Preview;

              return (
                <article
                  key={item.id}
                  aria-hidden={isMobileList ? false : !isActive}
                  className={styles.gallerySlide}
                  data-active={isActive ? 'true' : undefined}
                  data-showcase-slide={item.id}
                >
                  <h2 className={styles.galleryItemTitle}>{item.title}</h2>
                  <div
                    className={styles.galleryPage}
                    role="document"
                    aria-label={messages.home.previewLabel(item.title)}
                    data-scrollable={!isMobileList && isActive ? 'true' : undefined}
                    tabIndex={isMobileList ? undefined : isActive ? 0 : -1}
                  >
                    <Preview />
                  </div>
                </article>
              );
            })}
          </div>

          {!isMobileList && (
            <>
              <button
                type="button"
                className={`${styles.galleryNav} ${styles.galleryPrevious}`}
                aria-label={messages.home.previousPreview}
                onClick={() => showPreview(activeIndex - 1)}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M15 6l-6 6 6 6" />
                </svg>
              </button>
              <button
                type="button"
                className={`${styles.galleryNav} ${styles.galleryNext}`}
                aria-label={messages.home.nextPreview}
                onClick={() => showPreview(activeIndex + 1)}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>

              <div className={styles.galleryDots} aria-label={messages.home.choosePreview}>
                {galleryItems.map((item, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      className={styles.galleryDot}
                      data-active={isActive ? 'true' : undefined}
                      aria-current={isActive ? 'true' : undefined}
                      aria-label={messages.home.showPreview(
                        index + 1,
                        galleryItems.length,
                        item.title,
                      )}
                      onClick={() => showPreview(index)}
                    />
                  );
                })}
              </div>
            </>
          )}
        </div>
      </section>

    </main>
  );
}
