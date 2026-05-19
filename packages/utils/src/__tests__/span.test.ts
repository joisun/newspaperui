import { describe, it, expect } from 'vitest';
import { isSpanValid, calculateLayout, type LayoutItem } from '../span';

describe('span utilities', () => {
  describe('isSpanValid', () => {
    it('should return true for valid spans', () => {
      expect(isSpanValid(1, 24)).toBe(true);
      expect(isSpanValid(12, 24)).toBe(true);
      expect(isSpanValid(24, 24)).toBe(true);
      expect(isSpanValid(6, 12)).toBe(true);
    });

    it('should return false for invalid spans', () => {
      expect(isSpanValid(0, 24)).toBe(false);
      expect(isSpanValid(25, 24)).toBe(false);
      expect(isSpanValid(-1, 24)).toBe(false);
      expect(isSpanValid(1.5, 24)).toBe(false);
      expect(isSpanValid(13, 12)).toBe(false);
    });
  });

  describe('calculateLayout', () => {
    it('should layout items in a single row when they fit', () => {
      const items: LayoutItem[] = [
        { id: 'a', span: 6 },
        { id: 'b', span: 6 },
        { id: 'c', span: 6 },
      ];
      const layout = calculateLayout(items, 24);

      expect(layout).toHaveLength(3);
      expect(layout[0]).toEqual({ item: items[0], row: 0, col: 0 });
      expect(layout[1]).toEqual({ item: items[1], row: 0, col: 6 });
      expect(layout[2]).toEqual({ item: items[2], row: 0, col: 12 });
    });

    it('should wrap to next row when items do not fit', () => {
      const items: LayoutItem[] = [
        { id: 'a', span: 16 },
        { id: 'b', span: 12 },
      ];
      const layout = calculateLayout(items, 24);

      expect(layout).toHaveLength(2);
      expect(layout[0]).toEqual({ item: items[0], row: 0, col: 0 });
      expect(layout[1]).toEqual({ item: items[1], row: 1, col: 0 });
    });

    it('should handle exact row fills', () => {
      const items: LayoutItem[] = [
        { id: 'a', span: 12 },
        { id: 'b', span: 12 },
        { id: 'c', span: 24 },
      ];
      const layout = calculateLayout(items, 24);

      expect(layout).toHaveLength(3);
      expect(layout[0]).toEqual({ item: items[0], row: 0, col: 0 });
      expect(layout[1]).toEqual({ item: items[1], row: 0, col: 12 });
      expect(layout[2]).toEqual({ item: items[2], row: 1, col: 0 });
    });

    it('should throw error for invalid section columns', () => {
      const items: LayoutItem[] = [{ id: 'a', span: 6 }];
      expect(() => calculateLayout(items, 0)).toThrow();
      expect(() => calculateLayout(items, -1)).toThrow();
    });

    it('should throw error for invalid item span', () => {
      const items: LayoutItem[] = [{ id: 'a', span: 25 }];
      expect(() => calculateLayout(items, 24)).toThrow();
    });
  });
});
