export const buildSrcSet = (mobile?: string, desktop?: string) =>
  [mobile && `${mobile} 1344w`, desktop && `${desktop} 2688w`]
    .filter(Boolean)
    .join(", ");
