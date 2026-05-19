/**
 * Span and layout utilities for newspaper column system
 */

/**
 * Check if an object's span is valid within a section's column count
 * @param objectSpan - Number of columns the object spans
 * @param sectionColumns - Total number of columns in the section
 * @returns True if the span is valid, false otherwise
 */
export function isSpanValid(
  objectSpan: number,
  sectionColumns: number
): boolean {
  return (
    Number.isInteger(objectSpan) &&
    Number.isInteger(sectionColumns) &&
    objectSpan >= 1 &&
    objectSpan <= sectionColumns
  );
}

/**
 * Layout item interface for grid positioning
 */
export interface LayoutItem {
  span: number;
  id: string;
}

/**
 * Positioned layout item with row and column information
 */
export interface PositionedLayoutItem {
  item: LayoutItem;
  row: number;
  col: number;
}

/**
 * Calculate simple flow layout for items in a section
 * Items are placed left-to-right, wrapping to new rows when needed
 * @param items - Array of items to layout
 * @param sectionColumns - Total number of columns in the section
 * @returns Array of positioned items with row and column information
 */
export function calculateLayout(
  items: LayoutItem[],
  sectionColumns: number
): PositionedLayoutItem[] {
  if (sectionColumns <= 0) {
    throw new Error('Section columns must be a positive number');
  }

  const positioned: PositionedLayoutItem[] = [];
  let currentRow = 0;
  let currentCol = 0;

  for (const item of items) {
    // Validate item span
    if (!isSpanValid(item.span, sectionColumns)) {
      throw new Error(
        `Invalid span ${item.span} for item ${item.id}. Must be between 1 and ${sectionColumns}`
      );
    }

    // Check if item fits in current row
    if (currentCol + item.span > sectionColumns) {
      // Move to next row
      currentRow++;
      currentCol = 0;
    }

    // Position the item
    positioned.push({
      item,
      row: currentRow,
      col: currentCol,
    });

    // Update current column position
    currentCol += item.span;

    // If we've filled the row exactly, move to next row
    if (currentCol === sectionColumns) {
      currentRow++;
      currentCol = 0;
    }
  }

  return positioned;
}
