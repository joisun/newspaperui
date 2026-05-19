import { describe, it, expect } from 'vitest';
import {
  calculateSpanWidth,
  calculateLayout,
  getResponsiveColumns,
  adjustSpanForScreen,
} from '../index';

describe('integration tests', () => {
  it('should work together for responsive layout calculation', () => {
    // Scenario: Layout 3 items on different screen sizes
    const items = [
      { id: 'headline', span: 12 },
      { id: 'image', span: 8 },
      { id: 'text', span: 4 },
    ];

    // Large screen (24 columns)
    const largeScreenColumns = getResponsiveColumns(1440);
    expect(largeScreenColumns).toBe(24);
    const largeLayout = calculateLayout(items, largeScreenColumns);
    expect(largeLayout).toHaveLength(3);
    // All items fit in one row: 12 + 8 + 4 = 24
    expect(largeLayout[0].row).toBe(0);
    expect(largeLayout[1].row).toBe(0);
    expect(largeLayout[2].row).toBe(0);

    // Medium screen (16 columns) - adjust spans
    const mediumScreenColumns = getResponsiveColumns(900);
    expect(mediumScreenColumns).toBe(16);
    const adjustedItems = items.map((item) => ({
      ...item,
      span: adjustSpanForScreen(item.span, 900),
    }));
    const mediumLayout = calculateLayout(adjustedItems, mediumScreenColumns);
    expect(mediumLayout).toHaveLength(3);

    // Small screen (12 columns) - adjust spans
    const smallScreenColumns = getResponsiveColumns(600);
    expect(smallScreenColumns).toBe(12);
    const smallAdjustedItems = items.map((item) => ({
      ...item,
      span: adjustSpanForScreen(item.span, 600),
    }));
    const smallLayout = calculateLayout(smallAdjustedItems, smallScreenColumns);
    expect(smallLayout).toHaveLength(3);
  });

  it('should calculate correct widths for newspaper layout', () => {
    // 6-column headline in 24-column grid
    const headlineWidth = calculateSpanWidth(6, 24);
    expect(headlineWidth).toBe('25.000%');

    // 8-column image in 24-column grid
    const imageWidth = calculateSpanWidth(8, 24);
    expect(imageWidth).toBe('33.333%');

    // Full-width article
    const fullWidth = calculateSpanWidth(24, 24);
    expect(fullWidth).toBe('100.000%');
  });
});
