import { describe, it, expect } from 'vitest';
import { validateSpan, clampSpan } from '../grid';

describe('validateSpan', () => {
  it('returns true for valid integers in [1, max]', () => {
    expect(validateSpan(1, 24)).toBe(true);
    expect(validateSpan(12, 24)).toBe(true);
    expect(validateSpan(24, 24)).toBe(true);
  });

  it('returns false for out-of-range values', () => {
    expect(validateSpan(0, 24)).toBe(false);
    expect(validateSpan(-1, 24)).toBe(false);
    expect(validateSpan(25, 24)).toBe(false);
  });

  it('returns false for non-integers', () => {
    expect(validateSpan(1.5, 24)).toBe(false);
    expect(validateSpan(NaN, 24)).toBe(false);
  });
});

describe('clampSpan', () => {
  it('returns the value when in range', () => {
    expect(clampSpan(8, 24)).toBe(8);
  });

  it('clamps to max when over', () => {
    expect(clampSpan(30, 24)).toBe(24);
  });

  it('clamps to 1 when under', () => {
    expect(clampSpan(0, 24)).toBe(1);
    expect(clampSpan(-5, 24)).toBe(1);
  });

  it('floors fractional input', () => {
    expect(clampSpan(3.9, 24)).toBe(3);
  });

  it('returns 1 for non-finite input', () => {
    expect(clampSpan(NaN, 24)).toBe(1);
    expect(clampSpan(Infinity, 24)).toBe(24);
  });
});
