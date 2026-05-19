import { describe, it, expect } from 'vitest';
import {
  getResponsiveColumns,
  adjustSpanForScreen,
  isBreakpoint,
  getCurrentBreakpoint,
  BREAKPOINTS,
} from '../responsive';

describe('responsive utilities', () => {
  describe('getResponsiveColumns', () => {
    it('should return 12 columns for small screens', () => {
      expect(getResponsiveColumns(320)).toBe(12);
      expect(getResponsiveColumns(767)).toBe(12);
    });

    it('should return 16 columns for medium screens', () => {
      expect(getResponsiveColumns(768)).toBe(16);
      expect(getResponsiveColumns(1023)).toBe(16);
    });

    it('should return 24 columns for large screens', () => {
      expect(getResponsiveColumns(1024)).toBe(24);
      expect(getResponsiveColumns(1440)).toBe(24);
      expect(getResponsiveColumns(1920)).toBe(24);
    });
  });

  describe('adjustSpanForScreen', () => {
    it('should not adjust span for large screens (24 columns)', () => {
      expect(adjustSpanForScreen(12, 1440)).toBe(12);
      expect(adjustSpanForScreen(6, 1920)).toBe(6);
      expect(adjustSpanForScreen(24, 1024)).toBe(24);
    });

    it('should proportionally adjust span for medium screens (16 columns)', () => {
      expect(adjustSpanForScreen(12, 800)).toBe(8); // 12/24 * 16 = 8
      expect(adjustSpanForScreen(6, 900)).toBe(4); // 6/24 * 16 = 4
      expect(adjustSpanForScreen(24, 1000)).toBe(16); // 24/24 * 16 = 16
    });

    it('should proportionally adjust span for small screens (12 columns)', () => {
      expect(adjustSpanForScreen(12, 600)).toBe(6); // 12/24 * 12 = 6
      expect(adjustSpanForScreen(6, 400)).toBe(3); // 6/24 * 12 = 3
      expect(adjustSpanForScreen(24, 700)).toBe(12); // 24/24 * 12 = 12
    });

    it('should ensure minimum span of 1', () => {
      expect(adjustSpanForScreen(1, 600)).toBe(1);
      expect(adjustSpanForScreen(2, 600)).toBeGreaterThanOrEqual(1);
    });

    it('should not exceed target columns', () => {
      expect(adjustSpanForScreen(24, 600)).toBeLessThanOrEqual(12);
      expect(adjustSpanForScreen(24, 800)).toBeLessThanOrEqual(16);
    });
  });

  describe('isBreakpoint', () => {
    it('should correctly identify breakpoints', () => {
      expect(isBreakpoint(768, 'sm')).toBe(true);
      expect(isBreakpoint(767, 'sm')).toBe(false);
      expect(isBreakpoint(1024, 'md')).toBe(true);
      expect(isBreakpoint(1023, 'md')).toBe(false);
      expect(isBreakpoint(1440, 'lg')).toBe(true);
      expect(isBreakpoint(1439, 'lg')).toBe(false);
    });
  });

  describe('getCurrentBreakpoint', () => {
    it('should return correct breakpoint names', () => {
      expect(getCurrentBreakpoint(320)).toBe('xs');
      expect(getCurrentBreakpoint(767)).toBe('xs');
      expect(getCurrentBreakpoint(768)).toBe('sm');
      expect(getCurrentBreakpoint(1023)).toBe('sm');
      expect(getCurrentBreakpoint(1024)).toBe('md');
      expect(getCurrentBreakpoint(1439)).toBe('md');
      expect(getCurrentBreakpoint(1440)).toBe('lg');
      expect(getCurrentBreakpoint(1920)).toBe('lg');
    });
  });

  describe('BREAKPOINTS', () => {
    it('should have correct breakpoint values', () => {
      expect(BREAKPOINTS.sm).toBe(768);
      expect(BREAKPOINTS.md).toBe(1024);
      expect(BREAKPOINTS.lg).toBe(1440);
    });
  });
});
