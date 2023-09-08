# vpressdemo

[![npm](https://img.shields.io/npm/v/vpressdemo)](https://www.npmjs.com/package/vpressdemo)

## INTRODUCTION

> This is a lightweight demo to demonstrate `demo import and preview` based on VitePress.

## Usage

```
npm i -D vpressdemo shiki
```

```js
// .vitepress/config.ts / config.js
import vpressdemo from "../node_modules/vpressdemo/dist";
// ...
export default {
  // ...
  markdown: {
    // ...
    config: (md) => {
      md.use(vpressdemo);
    },
  },
};
```

```js
// .vitepress/theme/index.ts / index.js
import DefaultTheme from "vitepress/theme";
import demo from "../../node_modules/vpressdemo/dist/demo.vue";
// ...
export default {
  ...DefaultTheme,
  // ...
  enhanceApp({ app }) {
    app.component("demo", demo);
  },
};
```

```
<demo src="./helloworld.vue" desc="Description: The Hello World Demo"></demo>
```

## Project setup

### How to setup your project

```
npm i
```

### Compiles and hot-reloads for development

```
npm start
```

### Compiles and minifies for production

```
npm run build
```

### Customize configuration

About vite, please check Configuration Reference - [vite](https://vitejs.dev/config/).

## License

<img src="https://nikoni.top/images/niko-mit.png" alt="MIT License" width="396" height="250"/>