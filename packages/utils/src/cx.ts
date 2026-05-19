type ClassValue = string | false | null | undefined;

/** Tiny className joiner. Filters out falsy values. */
export function cx(...args: ClassValue[]): string {
  return args.filter(Boolean).join(' ');
}
