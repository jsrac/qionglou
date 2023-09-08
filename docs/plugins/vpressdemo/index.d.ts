declare module "*.vue" {
  const component: import("vue").DefineComponent<{}, {}, any>;
  export default component;
}

declare module "vpressdemo" {
  const vpressdemo: (md: any) => void;
  export default vpressdemo;
}
