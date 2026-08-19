'use client';

import { useState } from 'react';
import { ArrowUpRight } from '@phosphor-icons/react';
import Image from 'next/image';
import Link from 'next/link';
import {
  EffectCoverflow,
  Keyboard,
  Mousewheel,
} from 'swiper/modules';
import type { Swiper as SwiperInstance } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { InstallCommand } from '../components/InstallCommand';
import styles from './page.module.css';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const galleryItems = [
  {
    id: 'zh-frontpage',
    title: '人民周报',
    href: '/blocks/zh-frontpage',
    preview: `${basePath}/gallery/zh-frontpage.jpg`,
    width: 1280,
    height: 2394,
  },
  {
    id: 'zh-feature',
    title: '文化副刊',
    href: '/blocks/zh-feature',
    preview: `${basePath}/gallery/zh-feature.jpg`,
    width: 1200,
    height: 1679,
  },
  {
    id: 'en-feature',
    title: 'Daily Chronicle',
    href: '/blocks/en-feature',
    preview: `${basePath}/gallery/en-feature.jpg`,
    width: 750,
    height: 3134,
  },
  {
    id: 'jp-horizontal',
    title: '朝日新聞 横組み',
    href: '/blocks/jp-horizontal',
    preview: `${basePath}/gallery/jp-horizontal.jpg`,
    width: 1280,
    height: 2044,
  },
  {
    id: 'jp-vertical',
    title: '朝日新聞 縦組み',
    href: '/blocks/jp-vertical',
    preview: `${basePath}/gallery/jp-vertical.jpg`,
    width: 1440,
    height: 1000,
  },
  {
    id: 'zh-editorial',
    title: '社论',
    href: '/blocks/zh-editorial',
    preview: `${basePath}/gallery/zh-editorial.jpg`,
    width: 1200,
    height: 1327,
  },
  {
    id: 'nyt-frontpage',
    title: 'New York Times',
    href: '/examples/nyt-frontpage',
    preview: `${basePath}/gallery/nyt-frontpage.jpg`,
    width: 1440,
    height: 5203,
  },
] as const;

const deckLength = galleryItems.length;
const middleDeckStart = deckLength;
const gallerySlides = [-1, 0, 1].flatMap((cycle) => galleryItems.map((item, logicalIndex) => ({
  ...item,
  cycle,
  key: `${cycle}:${item.id}`,
  logicalIndex,
})));

function getLogicalIndex(index: number) {
  return ((index % deckLength) + deckLength) % deckLength;
}

function normalizeDeck(swiper: SwiperInstance) {
  if (swiper.activeIndex < middleDeckStart) {
    swiper.slideTo(swiper.activeIndex + deckLength, 0, false);
  } else if (swiper.activeIndex >= middleDeckStart + deckLength) {
    swiper.slideTo(swiper.activeIndex - deckLength, 0, false);
  }
}

export default function LandingPage() {
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(middleDeckStart);
  const activeIndex = getLogicalIndex(activeSlideIndex);

  return (
    <main className={styles.page}>
      <section className={styles.intro} aria-labelledby="home-title">
        <h1 id="home-title">Editorial components for React.</h1>
        <InstallCommand />
      </section>

      <section className={styles.gallery}>
        <Swiper
          className={styles.galleryViewport}
          aria-label="NewspaperUI full newspaper demo gallery"
          aria-roledescription="carousel"
          modules={[EffectCoverflow, Keyboard, Mousewheel]}
          effect="coverflow"
          centeredSlides
          slidesPerView="auto"
          slidesPerGroup={1}
          initialSlide={middleDeckStart}
          slideToClickedSlide
          grabCursor
          speed={120}
          threshold={8}
          touchAngle={35}
          watchSlidesProgress
          keyboard={{
            enabled: true,
            onlyInViewport: true,
          }}
          mousewheel={{
            forceToAxis: true,
            releaseOnEdges: false,
            thresholdDelta: 4,
          }}
          coverflowEffect={{
            rotate: -8,
            stretch: '20%',
            depth: 80,
            scale: 0.94,
            modifier: 1,
            slideShadows: false,
          }}
          breakpoints={{
            768: {
              coverflowEffect: {
                rotate: -4,
                stretch: '60%',
                depth: 140,
                scale: 0.94,
                modifier: 1,
                slideShadows: false,
              },
            },
          }}
          onSlideChange={(swiper) => setActiveSlideIndex(swiper.activeIndex)}
          onTransitionEnd={normalizeDeck}
        >
          {gallerySlides.map((item, slideIndex) => {
            const isActive = slideIndex === activeSlideIndex;
            const isCanonical = item.cycle === 0;

            return (
              <SwiperSlide
                key={item.key}
                className={styles.gallerySlide}
                aria-hidden={isActive ? undefined : true}
                data-gallery-index={item.logicalIndex}
              >
                <article
                  className={styles.galleryCard}
                  data-active={isActive ? 'true' : undefined}
                  data-gallery-slide={item.id}
                  data-home-demo={isCanonical ? item.id : undefined}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${item.logicalIndex + 1} of ${galleryItems.length}: ${item.title}${isActive ? ', current demo' : ''}`}
                  aria-current={isActive ? 'true' : undefined}
                >
                  <header className={styles.cardBar}>
                    <span>{item.title}</span>
                    {isActive ? (
                      <Link
                        href={item.href}
                        className={styles.openEdition}
                        aria-label={`Open ${item.title} demo`}
                      >
                        <ArrowUpRight size={14} weight="bold" aria-hidden="true" />
                      </Link>
                    ) : (
                      <span className={styles.openEditionVisual} aria-hidden="true">
                        <ArrowUpRight size={14} weight="bold" />
                      </span>
                    )}
                  </header>
                  <div
                    className={styles.cardCanvas}
                    data-scrollable={isActive ? 'true' : undefined}
                  >
                    <Image
                      src={item.preview}
                      alt={`${item.title} complete newspaper page preview`}
                      width={item.width}
                      height={item.height}
                      sizes="(max-width: 767px) calc(100vw - 4rem), 48rem"
                      priority={item.logicalIndex === 0}
                      draggable={false}
                      className={styles.editionPreview}
                    />
                  </div>
                </article>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <p
          className={styles.galleryPosition}
          aria-label={`Edition ${activeIndex + 1} of ${galleryItems.length}`}
          aria-live="polite"
        >
          {String(activeIndex + 1).padStart(2, '0')}
          <span aria-hidden="true"> / </span>
          {String(galleryItems.length).padStart(2, '0')}
        </p>
        <p className={styles.srOnly} aria-live="polite">{galleryItems[activeIndex].title}</p>
      </section>
    </main>
  );
}
