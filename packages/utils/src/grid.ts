/**
 * Grid calculation utilities for 24-column newspaper layout system
 */

/**
 * Calculate element width percentage in a grid system
 * @param span - Number of columns the element spans
 * @param totalColumns - Total number of columns in the grid (default: 24)
 * @returns Width as a percentage string (e.g., "33.333%")
 */
export function calculateSpanWidth(
  span: number,
  totalColumns: number = 24
): string {
  if (!validateSpan(span, totalColumns)) {
    throw new Error(
      `Invalid span: ${span}. Must be between 1 and ${totalColumns}`
    );
  }
  const percentage = (span / totalColumns) * 100;
  return `${percentage.toFixed(3)}%`;
}

/**
 * Validate if a span value is within valid range
 * @param span - Number of columns to validate
 * @param maxColumns - Maximum number of columns allowed
 * @returns True if span is valid, false otherwise
 */
export function validateSpan(span: number, maxColumns: number): boolean {
  return Number.isInteger(span) && span >= 1 && span <= maxColumns;
}

/**
 * Calculate gutter width based on container width and column count
 * @param containerWidth - Total width of the container in pixels
 * @param columns - Number of columns in the grid
 * @param gutterRatio - Ratio of gutter to column width (default: 0.05)
 * @returns Gutter width in pixels
 */
export function calculateGutter(
  containerWidth: number,
  columns: number,
  gutterRatio: number = 0.05
): number {
  if (containerWidth <= 0 || columns <= 0) {
    throw new Error('Container width and columns must be positive numbers');
  }
  if (gutterRatio < 0 || gutterRatio > 1) {
    throw new Error('Gutter ratio must be between 0 and 1');
  }

  // Calculate column width considering gutters
  // Formula: containerWidth = (columns * columnWidth) + ((columns - 1) * gutter)
  // Where gutter = columnWidth * gutterRatio
  const totalGutterRatio = (columns - 1) * gutterRatio;
  const columnWidth = containerWidth / (columns + totalGutterRatio);
  const gutterWidth = columnWidth * gutterRatio;

  return Math.round(gutterWidth * 100) / 100;
}
