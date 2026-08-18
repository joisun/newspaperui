'use client';

import type {
  CSSProperties,
  KeyboardEvent,
} from 'react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { ArrowUpRight } from '@phosphor-icons/react';
import type { EmblaCarouselType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
import Image from 'next/image';
import Link from 'next/link';
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

function getCircularOffset(index: number, activeIndex: number) {
  const length = galleryItems.length;
  let offset = index - activeIndex;

  if (offset > length / 2) offset -= length;
  if (offset < -length / 2) offset += length;

  return offset;
}

export default function LandingPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const wheelPlugin = useMemo(
    () => WheelGesturesPlugin({ wheelDraggingClass: styles.wheelDragging }),
    [],
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: 'center',
      containScroll: false,
      dragFree: false,
      duration: 28,
      loop: true,
      skipSnaps: false,
    },
    [wheelPlugin],
  );

  const syncSelection = useCallback((api: EmblaCarouselType) => {
    setActiveIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    syncSelection(emblaApi);
    emblaApi.on('select', syncSelection);
    emblaApi.on('reInit', syncSelection);

    return () => {
      emblaApi.off('select', syncSelection);
      emblaApi.off('reInit', syncSelection);
    };
  }, [emblaApi, syncSelection]);

  function handleGalleryKeys(event: KeyboardEvent<HTMLElement>) {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      emblaApi?.scrollPrev();
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      emblaApi?.scrollNext();
    }
  }

  return (
    <main className={styles.page}>
      <section className={styles.intro} aria-labelledby="home-title">
        <h1 id="home-title">Editorial components for React.</h1>
        <InstallCommand />
      </section>

      <section
        className={styles.gallery}
        aria-label="NewspaperUI full newspaper demo gallery"
        aria-roledescription="carousel"
        onKeyDown={handleGalleryKeys}
      >
        <div className={styles.galleryViewport} ref={emblaRef}>
          <div className={styles.galleryStage}>
            {galleryItems.map((item, index) => {
              const offset = getCircularOffset(index, activeIndex);
              const distance = Math.abs(offset);
              const style = {
                '--gallery-offset': offset,
                '--gallery-distance': distance,
                '--gallery-layer': galleryItems.length - distance,
              } as CSSProperties;

              const preview = (
                <Image
                  src={item.preview}
                  alt={`${item.title} complete newspaper page preview`}
                  width={item.width}
                  height={item.height}
                  sizes="(max-width: 767px) calc(100vw - 2rem), 48rem"
                  priority={index === 0}
                  draggable={false}
                  className={styles.editionPreview}
                />
              );

              return (
                <div
                  key={item.id}
                  className={styles.gallerySlide}
                  style={style}
                  data-distance={distance}
                  aria-hidden={distance > 2 ? true : undefined}
                >
                  <article
                    className={styles.galleryCard}
                    data-distance={distance}
                    data-home-demo={item.id}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${index + 1} of ${galleryItems.length}: ${item.title}${distance === 0 ? ', current demo' : ''}`}
                    aria-current={distance === 0 ? 'true' : undefined}
                  >
                    <header className={styles.cardBar}>
                      <span>{item.title}</span>
                      {distance === 0 ? (
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
                    <div className={styles.cardCanvas} data-scrollable={distance === 0 ? 'true' : undefined}>
                      {preview}
                    </div>
                    {distance !== 0 ? (
                      <button
                        type="button"
                        className={styles.selectEdition}
                        aria-label={`Show ${item.title} demo`}
                        aria-hidden={distance > 2 ? true : undefined}
                        tabIndex={distance > 2 ? -1 : 0}
                        onClick={() => emblaApi?.scrollTo(index)}
                      />
                    ) : null}
                  </article>
                </div>
              );
            })}
          </div>
        </div>
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
