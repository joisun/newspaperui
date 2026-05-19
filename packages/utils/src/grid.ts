/** Validate span is within [1, max]. */
export function validateSpan(span: number, max: number): boolean {
  return Number.isInteger(span) && span >= 1 && span <= max;
}

/** Clamp span into [1, max]. Used by Section/Article to recover from invalid input. */
export function clampSpan(span: number, max: number): number {
  if (Number.isNaN(span)) return 1;
  if (span < 1) return 1;
  if (span > max) return max;
  return Math.floor(span);
}
