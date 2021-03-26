export const initSegment = (id: string) => {
  if (process.env.NODE_ENV === "production") {
    window.analytics.load("14PnMn1fbR5AFUMSsSbZTMD2OzE8fy7x");
    window.analytics.page();
    //window.analytics.identify(id, () => {});
  }
};
