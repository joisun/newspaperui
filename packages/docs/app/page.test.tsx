import type { ReactNode } from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';

const carouselMock = vi.hoisted(() => {
  type MockApi = {
    activeIndex: number;
    slideTo: (index: number, speed?: number, runCallbacks?: boolean) => void;
  };

  let onSlideChange: ((api: MockApi) => void) | undefined;
  let onTransitionEnd: ((api: MockApi) => void) | undefined;
  let swiperProps: Record<string, unknown> | undefined;
  const api = {
    activeIndex: 7,
    slideTo: vi.fn((index: number) => {
      api.activeIndex = index;
      onSlideChange?.(api);
    }),
  };

  return {
    api,
    capture(props: Record<string, unknown>) {
      swiperProps = props;
      onSlideChange = props.onSlideChange as typeof onSlideChange;
      onTransitionEnd = props.onTransitionEnd as typeof onTransitionEnd;
    },
    get props() {
      return swiperProps;
    },
    select(index: number) {
      api.activeIndex = index;
      onSlideChange?.(api);
    },
    settle() {
      onTransitionEnd?.(api);
    },
    reset() {
      api.activeIndex = 7;
      api.slideTo.mockClear();
      onSlideChange = undefined;
      onTransitionEnd = undefined;
      swiperProps = undefined;
    },
  };
});

vi.mock('swiper/modules', () => ({
  A11y: 'A11y',
  EffectCoverflow: 'EffectCoverflow',
  Keyboard: 'Keyboard',
  Mousewheel: 'Mousewheel',
}));

vi.mock('swiper/react', async () => {
  const React = await import('react');

  return {
    Swiper: ({
      children,
      className,
      'aria-label': ariaLabel,
      'aria-roledescription': ariaRoleDescription,
      ...props
    }: Record<string, unknown>) => {
      carouselMock.capture(props);
      return React.createElement(
        'div',
        {
          className,
          'aria-label': ariaLabel,
          'aria-roledescription': ariaRoleDescription,
        },
        children as ReactNode,
      );
    },
    SwiperSlide: ({
      children,
      className,
    }: Record<string, unknown>) => React.createElement(
      'div',
      { className },
      children as ReactNode,
    ),
  };
});

import LandingPage from './page';

describe('LandingPage', () => {
  beforeEach(() => {
    carouselMock.reset();
  });

  test('exposes one primary landmark with one page title', () => {
    const { container } = render(<LandingPage />);

    expect(container.querySelectorAll('main')).toHaveLength(1);
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
  });

  test('makes the public installation command visible', () => {
    render(<LandingPage />);

    expect(screen.getByText('pnpm add newspaperui')).toBeVisible();
  });

  test('shows a demo-first overview of the component system', () => {
    const { container } = render(<LandingPage />);

    expect(screen.getByRole('heading', { name: 'Editorial components for React.' })).toBeVisible();
    expect(container.querySelectorAll('[data-home-demo]')).toHaveLength(7);
    expect(container.querySelectorAll('[data-gallery-slide]')).toHaveLength(21);
    expect(screen.getByRole('link', { name: 'Open 人民周报 demo' })).toHaveAttribute('href', '/blocks/zh-frontpage');
    expect(screen.queryByRole('button', { name: /^Show / })).not.toBeInTheDocument();
    expect(screen.getByLabelText('Edition 1 of 7')).toHaveTextContent('01 / 07');
  });

  test('lets Swiper own the coverflow geometry, loop and one-slide navigation', () => {
    render(<LandingPage />);

    expect(carouselMock.props).toEqual(expect.objectContaining({
      centeredSlides: true,
      effect: 'coverflow',
      initialSlide: 7,
      slideToClickedSlide: true,
      slidesPerGroup: 1,
      slidesPerView: 'auto',
      speed: 120,
    }));
    expect(carouselMock.props).not.toHaveProperty('loop');
    expect(carouselMock.props?.coverflowEffect).toEqual(expect.objectContaining({
      depth: 80,
      rotate: -8,
      scale: 0.94,
      stretch: '20%',
      slideShadows: false,
    }));
    expect(carouselMock.props?.breakpoints).toEqual(expect.objectContaining({
      768: expect.objectContaining({
        coverflowEffect: expect.objectContaining({
          depth: 140,
          rotate: -4,
          stretch: '60%',
        }),
      }),
    }));
    expect(carouselMock.props?.mousewheel).toEqual(expect.objectContaining({
      forceToAxis: true,
      thresholdDelta: 4,
    }));
    expect(carouselMock.props?.mousewheel).not.toHaveProperty('thresholdTime');

    act(() => carouselMock.select(8));
    expect(screen.getByRole('group', { name: /文化副刊, current demo/ })).toHaveAttribute('aria-current', 'true');
    expect(screen.getByRole('link', { name: 'Open 文化副刊 demo' })).toHaveAttribute('href', '/blocks/zh-feature');
    expect(screen.getByLabelText('Edition 2 of 7')).toHaveTextContent('02 / 07');
  });

  test('normalizes an identical outer deck without reordering slides', () => {
    const { container } = render(<LandingPage />);

    act(() => carouselMock.select(14));
    act(() => carouselMock.settle());

    expect(carouselMock.api.slideTo).toHaveBeenCalledWith(7, 0, false);
    expect(container.querySelectorAll('[data-gallery-slide]')).toHaveLength(21);
    expect(screen.getByLabelText('Edition 1 of 7')).toHaveTextContent('01 / 07');
  });

  test('keeps the active paper scrollable without making its canvas a link', () => {
    render(<LandingPage />);
    const activePaper = screen.getByRole('group', { name: /人民周报, current demo/ });

    expect(activePaper.querySelector('[data-scrollable="true"]')).toBeInTheDocument();
    expect(activePaper.querySelectorAll('a')).toHaveLength(1);
  });

  test('confirms when the installation command is copied', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: { writeText },
    });
    render(<LandingPage />);

    fireEvent.click(screen.getByRole('button', { name: 'Copy install command' }));

    expect(await screen.findByRole('status')).toHaveTextContent('Copied');
    expect(writeText).toHaveBeenCalledWith('pnpm add newspaperui');
  });
});
