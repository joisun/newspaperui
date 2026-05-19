/**
 * @newspaperui/utils
 * Utility functions for newspaperui component library
 */

// Grid utilities
export {
  calculateSpanWidth,
  validateSpan,
  calculateGutter,
} from './grid';

// Span and layout utilities
export {
  isSpanValid,
  calculateLayout,
  type LayoutItem,
  type PositionedLayoutItem,
} from './span';

// Responsive utilities
export {
  getResponsiveColumns,
  adjustSpanForScreen,
  isBreakpoint,
  getCurrentBreakpoint,
  BREAKPOINTS,
} from './responsive';

export const version = '0.0.0';
