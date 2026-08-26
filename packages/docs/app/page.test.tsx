import { act, fireEvent, render, screen } from '@testing-library/react';

import LandingPage from './page';

describe('LandingPage', () => {
  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  test('exposes one primary landmark with one page title', () => {
    const { container } = render(<LandingPage />);

    expect(container.querySelectorAll('main')).toHaveLength(1);
    expect(container.querySelector('[aria-labelledby="home-title"] h1')).toHaveTextContent(
      'Editorial components for React.',
    );
  });

  test('makes the public installation command visible', () => {
    render(<LandingPage />);

    expect(screen.getByText('pnpm add newspaperui')).toBeVisible();
  });

  test('renders the seven previews as scrollable live components', () => {
    const { container } = render(<LandingPage />);

    expect(screen.getByRole('heading', { name: 'Editorial components for React.' })).toBeVisible();
    expect(
      screen.getByRole('region', { name: 'NewspaperUI full newspaper demo gallery' }),
    ).toBeVisible();
    expect(container.querySelectorAll('[data-showcase-slide]')).toHaveLength(7);
    expect(container.querySelectorAll('[data-showcase-slide][data-active="true"]')).toHaveLength(1);
    const activeSlide = container.querySelector('[data-showcase-slide][data-active="true"]');
    expect(activeSlide).toContainElement(screen.getByText('历史性贸易协定昨日签署'));
    expect(activeSlide?.querySelector('[data-scrollable="true"]')).toBeInTheDocument();
    expect(
      screen.queryByAltText('人民周报 complete newspaper page preview'),
    ).not.toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /demo/i })).not.toBeInTheDocument();
  });

  test('wraps through previews with arrow and dot controls', () => {
    const { container } = render(<LandingPage />);
    const activeSlide = () => container.querySelector('[data-showcase-slide][data-active="true"]');

    fireEvent.click(screen.getByRole('button', { name: 'Previous preview' }));
    expect(activeSlide()).toHaveAttribute('data-showcase-slide', 'nyt-frontpage');

    fireEvent.click(screen.getByRole('button', { name: 'Next preview' }));
    expect(activeSlide()).toHaveAttribute('data-showcase-slide', 'zh-frontpage');

    fireEvent.click(screen.getByRole('button', { name: 'Show preview 4 of 7: 朝日新聞 横組み' }));
    expect(activeSlide()).toHaveAttribute('data-showcase-slide', 'jp-horizontal');
    expect(activeSlide()).toHaveTextContent(/歴史的通商協定が成立\s+23カ国が署名/u);
    expect(
      screen.getByRole('button', { name: 'Show preview 4 of 7: 朝日新聞 横組み' }),
    ).toHaveAttribute('aria-current', 'true');
  });

  test('advances every 4.5 seconds and pauses while hovered', () => {
    vi.useFakeTimers();
    const { container } = render(<LandingPage />);
    const gallery = screen.getByRole('region', { name: 'NewspaperUI full newspaper demo gallery' });
    const activeSlide = () => container.querySelector('[data-showcase-slide][data-active="true"]');

    act(() => vi.advanceTimersByTime(4_499));
    expect(activeSlide()).toHaveAttribute('data-showcase-slide', 'zh-frontpage');

    act(() => vi.advanceTimersByTime(1));
    expect(activeSlide()).toHaveAttribute('data-showcase-slide', 'zh-feature');

    fireEvent.mouseEnter(gallery);
    act(() => vi.advanceTimersByTime(4_500));
    expect(activeSlide()).toHaveAttribute('data-showcase-slide', 'zh-feature');

    fireEvent.mouseLeave(gallery);
    act(() => vi.advanceTimersByTime(4_500));
    expect(activeSlide()).toHaveAttribute('data-showcase-slide', 'en-feature');
  });

  test('flows every mobile preview through document scrolling', () => {
    vi.useFakeTimers();
    vi.spyOn(window, 'matchMedia').mockImplementation((query) => ({
      matches: query === '(max-width: 767px)',
      media: query,
      onchange: null,
      addEventListener: () => undefined,
      removeEventListener: () => undefined,
      addListener: () => undefined,
      removeListener: () => undefined,
      dispatchEvent: () => false,
    }));
    const { container } = render(<LandingPage />);
    const gallery = screen.getByRole('region', {
      name: 'NewspaperUI full newspaper demo gallery',
    });

    expect(gallery).toHaveAttribute('data-layout', 'list');
    expect(gallery).toHaveAttribute('data-page-flow', 'document');
    expect(gallery).not.toHaveAttribute('aria-roledescription', 'carousel');
    expect(container.querySelectorAll('[data-showcase-slide][aria-hidden="false"]')).toHaveLength(
      7,
    );
    expect(container.querySelectorAll('[data-scrollable="true"]')).toHaveLength(0);
    expect(screen.queryByRole('button', { name: 'Previous preview' })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Next preview' })).not.toBeInTheDocument();

    act(() => vi.advanceTimersByTime(9_000));
    expect(container.querySelector('[data-showcase-slide][data-active="true"]')).toHaveAttribute(
      'data-showcase-slide',
      'zh-frontpage',
    );
  });

  test('does not autoplay when reduced motion is requested', () => {
    vi.useFakeTimers();
    vi.spyOn(window, 'matchMedia').mockImplementation((query) => ({
      matches: query === '(prefers-reduced-motion: reduce)',
      media: query,
      onchange: null,
      addEventListener: () => undefined,
      removeEventListener: () => undefined,
      addListener: () => undefined,
      removeListener: () => undefined,
      dispatchEvent: () => false,
    }));
    const { container } = render(<LandingPage />);

    act(() => vi.advanceTimersByTime(9_000));

    expect(container.querySelector('[data-showcase-slide][data-active="true"]')).toHaveAttribute(
      'data-showcase-slide',
      'zh-frontpage',
    );
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
