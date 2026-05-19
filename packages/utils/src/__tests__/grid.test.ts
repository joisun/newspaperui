import { describe, it, expect } from 'vitest';
import { calculateSpanWidth, validateSpan, calculateGutter } from '../grid';

describe('grid utilities', () => {
  describe('calculateSpanWidth', () => {
    it('should calculate correct width percentage for 24-column grid', () => {
      expect(calculateSpanWidth(6, 24)).toBe('25.000%');
      expect(calculateSpanWidth(12, 24)).toBe('50.000%');
      expect(calculateSpanWidth(24, 24)).toBe('100.000%');
      expect(calculateSpanWidth(1, 24)).toBe('4.167%');
    });

    it('should calculate correct width percentage for 12-column grid', () => {
      expect(calculateSpanWidth(6, 12)).toBe('50.000%');
      expect(calculateSpanWidth(3, 12)).toBe('25.000%');
      expect(calculateSpanWidth(12, 12)).toBe('100.000%');
    });

    it('should use 24 columns as default', () => {
      expect(calculateSpanWidth(6)).toBe('25.000%');
      expect(calculateSpanWidth(12)).toBe('50.000%');
    });

    it('should throw error for invalid span', () => {
      expect(() => calculateSpanWidth(0, 24)).toThrow();
      expect(() => calculateSpanWidth(25, 24)).toThrow();
      expect(() => calculateSpanWidth(-1, 24)).toThrow();
    });
  });

  describe('validateSpan', () => {
    it('should return true for valid spans', () => {
      expect(validateSpan(1, 24)).toBe(true);
      expect(validateSpan(12, 24)).toBe(true);
      expect(validateSpan(24, 24)).toBe(true);
    });

    it('should return false for invalid spans', () => {
      expect(validateSpan(0, 24)).toBe(false);
      expect(validateSpan(25, 24)).toBe(false);
      expect(validateSpan(-1, 24)).toBe(false);
      expect(validateSpan(1.5, 24)).toBe(false);
    });
  });

  describe('calculateGutter', () => {
    it('should calculate gutter width correctly', () => {
      const gutter = calculateGutter(1440, 24, 0.05);
      expect(gutter).toBeGreaterThan(0);
      expect(gutter).toBeLessThan(100);
    });

    it('should throw error for invalid inputs', () => {
      expect(() => calculateGutter(0, 24, 0.05)).toThrow();
      expect(() => calculateGutter(1440, 0, 0.05)).toThrow();
      expect(() => calculateGutter(1440, 24, -0.1)).toThrow();
      expect(() => calculateGutter(1440, 24, 1.5)).toThrow();
    });
  });
});
