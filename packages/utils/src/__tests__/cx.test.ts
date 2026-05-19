import { describe, it, expect } from 'vitest';
import { cx } from '../cx';

describe('cx', () => {
  it('joins truthy strings', () => {
    expect(cx('a', 'b', 'c')).toBe('a b c');
  });

  it('filters out falsy values', () => {
    expect(cx('a', false, 'b', null, undefined, 'c')).toBe('a b c');
  });

  it('returns empty string when all falsy', () => {
    expect(cx(false, null, undefined)).toBe('');
  });
});
