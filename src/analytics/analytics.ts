export const initSegment = (id: string) => {
  try {
    window.analytics.load("14PnMn1fbR5AFUMSsSbZTMD2OzE8fy7x");
    window.analytics.page();
  } catch (error) {}
};

export const track = (values: any, event: string, properties: []) => {
  try {
    window.analytics.trackForm(values, event, properties);
  } catch (error) {}
};
