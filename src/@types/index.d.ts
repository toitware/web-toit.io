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
    id: string;
    title: string;
  }
  export interface MenuItem {
    id: string;
    title: string;
    to?: string;
    subpages?: SubmenuItem[];
  }
  const content: {
    items: MenuItem[];
  };
  export default content;
}
