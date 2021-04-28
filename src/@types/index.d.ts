declare module "*.png";
declare module "*.jpg";

declare module "*.svg?inline" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module "*/content/menu.yaml" {
  export interface SubmenuItem {
    path: string;
    title: string;
  }
  export interface MenuItem {
    path: string;
    title: string;
    to?: string;
    subpages?: SubmenuItem[];
  }
  const content: {
    items: MenuItem[];
  };
  export default content;
}

namespace Reddit {
  export interface RedditPixelAnalytics {
    use(plugin: (reddit: RedditPixelAnalytics) => void): this;

    rdt(type: string, ...args: any): void;
  }
}

declare let reddit: Reddit.RedditPixelAnalytics;

declare module "@reddit/analytics" {
  let reddit: Reddit.RedditPixelAnalytics;
  export default reddit;
}

declare global {
  interface Window {
    analytics: SegmentAnalytics.AnalyticsJS;
    reddit: Reddit.RedditPixel;
  }
}
