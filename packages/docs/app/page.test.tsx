import { fireEvent, render, screen } from '@testing-library/react';

const carouselMock = vi.hoisted(() => {
  const listeners = new Map<string, (api: { selectedScrollSnap: () => number }) => void>();
  let selectedIndex = 0;

  const api = {
    off: vi.fn((event: string) => {
      listeners.delete(event);
      return api;
    }),
    on: vi.fn((event: string, listener: (instance: { selectedScrollSnap: () => number }) => void) => {
      listeners.set(event, listener);
      return api;
    }),
    scrollNext: vi.fn(() => {
      selectedIndex = (selectedIndex + 1) % 7;
      listeners.get('select')?.(api);
    }),
    scrollPrev: vi.fn(() => {
      selectedIndex = (selectedIndex + 6) % 7;
      listeners.get('select')?.(api);
    }),
    scrollTo: vi.fn((index: number) => {
      selectedIndex = index;
      listeners.get('select')?.(api);
    }),
    selectedScrollSnap: vi.fn(() => selectedIndex),
  };

  return {
    api,
    hook: vi.fn(() => [vi.fn(), api]),
    reset() {
      listeners.clear();
      selectedIndex = 0;
      Object.values(api).forEach((value) => {
        if (typeof value === 'function' && 'mockClear' in value) value.mockClear();
      });
    },
    wheelPlugin: vi.fn((options: unknown) => ({ name: 'wheelGestures', options })),
  };
});

vi.mock('embla-carousel-react', () => ({ default: carouselMock.hook }));
vi.mock('embla-carousel-wheel-gestures', () => ({
  WheelGesturesPlugin: carouselMock.wheelPlugin,
}));

import LandingPage from './page';

describe('LandingPage', () => {
  beforeEach(() => {
    carouselMock.reset();
    carouselMock.hook.mockClear();
    carouselMock.wheelPlugin.mockClear();
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
    expect(screen.getByRole('link', { name: 'Open 人民周报 demo' })).toHaveAttribute('href', '/blocks/zh-frontpage');
    expect(screen.getByRole('button', { name: 'Show 文化副刊 demo' })).toBeVisible();
    expect(screen.getByLabelText('Edition 1 of 7')).toHaveTextContent('01 / 07');
  });

  test('moves the 3D gallery by selecting a neighboring edition', () => {
    render(<LandingPage />);
    const gallery = screen.getByLabelText('NewspaperUI full newspaper demo gallery');
    const neighboringEdition = screen.getByRole('button', { name: 'Show 文化副刊 demo' });

    expect(screen.getByRole('group', { name: /人民周报, current demo/ })).toHaveAttribute('aria-current', 'true');
    expect(screen.queryByRole('button', { name: 'Next' })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Previous' })).not.toBeInTheDocument();
    fireEvent.click(neighboringEdition);
    expect(carouselMock.api.scrollTo).toHaveBeenCalledWith(1);
    expect(screen.getByRole('group', { name: /文化副刊, current demo/ })).toHaveAttribute('aria-current', 'true');
    expect(screen.getByLabelText('Edition 2 of 7')).toHaveTextContent('02 / 07');
    fireEvent.keyDown(gallery, { key: 'ArrowLeft' });
    expect(carouselMock.api.scrollPrev).toHaveBeenCalledOnce();
    expect(screen.getByRole('group', { name: /人民周报, current demo/ })).toHaveAttribute('aria-current', 'true');
  });

  test('keeps the active paper scrollable without making its canvas a link', () => {
    render(<LandingPage />);
    const activePaper = screen.getByRole('group', { name: /人民周报, current demo/ });

    expect(activePaper.querySelector('[data-scrollable="true"]')).toBeInTheDocument();
    expect(activePaper.querySelectorAll('a')).toHaveLength(1);
  });

  test('delegates looped one-snap drag and trackpad gestures to Embla', () => {
    render(<LandingPage />);

    expect(carouselMock.hook).toHaveBeenCalledWith(
      expect.objectContaining({
        align: 'center',
        dragFree: false,
        loop: true,
        skipSnaps: false,
      }),
      [expect.objectContaining({ name: 'wheelGestures' })],
    );
    expect(carouselMock.wheelPlugin).toHaveBeenCalledOnce();
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
