# 贡献指南

首先，感谢您对 QiongLou 的支持，目前该组件库任在飞速的构建中，我们欢迎任何形式的贡献。

当然 如果您觉得文档中有任何不妥的地方，欢迎您提交 issue 或者 pr。

那么，如果您想要为 QiongLou 贡献代码，您可以按照以下步骤进行：

1. fork 本仓库
2. clone 到本地
3. 安装依赖
 ```bash
pnpm i
```
该命令会帮助您安装所有的依赖，如果您没有安装 pnpm，可以通过以下命令安装：
```bash
npm i -g pnpm
```
4. 启动文档预览
```bash
pnpm run start:docs
```
该命令会帮助您启动文档预览所有组件。
5. 在本地进行开发
```bash
pnpm run start
```
该命令会帮助您启动本地开发环境， 您可以将组件 添加到 `packages/qionglou` 目录下，然后在 `packages/qionglou/components.ts` 中导出。
在 `start/src/App.vue` 中导入您开发的组件进行测试预览。

6. 提交代码

当您完成开发后，您可以提交代码到您 fork 的仓库，然后提交 pr 到本仓库，我们会尽快进行审核。

**我们希望在您提交代码前检查自己的仓库是否是最新的**

在此之前您需要阅读我们的提交规范。
