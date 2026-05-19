/**
 * @newspaperui/theme
 * Theme tokens and CSS variables for newspaperui
 */

// Import CSS variables
import './variables.css';

// Export visual weight types and configuration
export type {
  VisualWeight,
  ComponentType,
  VisualWeightConfig,
} from './visual-weights';

export { visualWeights, resolveFontSize } from './visual-weights';

// Export Tailwind config for consumers
export { default as tailwindConfig } from './tailwind.config.js';

export const version = '0.0.0';
