export const BREAKPOINTS = [480, 768, 1024];

export const MEDIA_QUERIES = BREAKPOINTS.map(
  (breakpoint) => `@media (min-width: ${breakpoint}px)`,
);
