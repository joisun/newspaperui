/**
 * Responsive utilities for newspaper layout system
 */

/**
 * Breakpoint thresholds for responsive design
 */
export const BREAKPOINTS = {
  sm: 768,
  md: 1024,
  lg: 1440,
} as const;

/**
 * Get recommended grid column count based on screen width
 * @param screenWidth - Current screen width in pixels
 * @returns Recommended number of columns (12, 16, or 24)
 */
export function getResponsiveColumns(screenWidth: number): number {
  if (screenWidth < BREAKPOINTS.sm) {
    return 12; // Small screens: 12 columns
  } else if (screenWidth < BREAKPOINTS.md) {
    return 16; // Medium screens: 16 columns
  } else {
    return 24; // Large screens: 24 columns
  }
}

/**
 * Adjust span value for different screen sizes
 * Proportionally scales span based on available columns
 * @param span - Original span value (based on 24 columns)
 * @param screenWidth - Current screen width in pixels
 * @returns Adjusted span value for current screen size
 */
export function adjustSpanForScreen(
  span: number,
  screenWidth: number
): number {
  const targetColumns = getResponsiveColumns(screenWidth);
  const baseColumns = 24;

  // If already at 24 columns, no adjustment needed
  if (targetColumns === baseColumns) {
    return span;
  }

  // Calculate proportional span
  const adjustedSpan = Math.round((span / baseColumns) * targetColumns);

  // Ensure at least 1 column and not exceeding target columns
  return Math.max(1, Math.min(adjustedSpan, targetColumns));
}

/**
 * Check if current screen width matches a breakpoint
 * @param screenWidth - Current screen width in pixels
 * @param breakpoint - Breakpoint name to check
 * @returns True if screen width is at or above the breakpoint
 */
export function isBreakpoint(
  screenWidth: number,
  breakpoint: keyof typeof BREAKPOINTS
): boolean {
  return screenWidth >= BREAKPOINTS[breakpoint];
}

/**
 * Get current breakpoint name based on screen width
 * @param screenWidth - Current screen width in pixels
 * @returns Current breakpoint name ('sm', 'md', 'lg', or 'xs' for below sm)
 */
export function getCurrentBreakpoint(
  screenWidth: number
): 'xs' | 'sm' | 'md' | 'lg' {
  if (screenWidth >= BREAKPOINTS.lg) {
    return 'lg';
  } else if (screenWidth >= BREAKPOINTS.md) {
    return 'md';
  } else if (screenWidth >= BREAKPOINTS.sm) {
    return 'sm';
  } else {
    return 'xs';
  }
}
