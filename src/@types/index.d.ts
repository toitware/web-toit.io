declare module "*.jpg";
declare module "*.webp";

declare module "*.svg?inline" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module "*.inline.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "*.png" {
  const content: string;
  export default content;
}

declare module "*.mp4" {
  const content: string;
  export default content;
}

declare module "*/content/menu.yaml" {
  export interface SubmenuItem {
    title: string;
    description?: string;
    path?: string;
    href?: string;
  }
  export interface MenuItem {
    title: string;
    description?: string;
    href?: string;
    path?: string;
    subpages?: SubmenuItem[];
  }
  const content: {
    items: MenuItem[];
  };
  export default content;
}
