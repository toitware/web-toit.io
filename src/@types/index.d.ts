declare module "*.png";
declare module "*.jpg";

declare module "*.svg?inline" {
  const content: any;
  export default content;
}

declare module "*.svg" {
  const content: any;
  export default content;
}
