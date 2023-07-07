# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## 项目强制使用 pnpm 包管理器

1. `npm i -g pnpm`
2. `pnpm i`

## 项目做了 git 提交限制

1. `commit时的message必须带有下述前缀，例如：feat: 新增xxx功能`
   1. 'feat',//新特性、新功能
   2. 'fix',//修改 bug
   3. 'docs',//文档修改
   4. 'style',//代码格式修改, 注意不是 css 修改
   5. 'refactor',//代码重构
   6. 'perf',//优化相关，比如提升性能、体验
   7. 'test',//测试用例修改
   8. 'chore',//其他修改, 比如改变构建流程、或者增加依赖库、工具等
   9. 'revert',//回滚到上一个版本
   10. 'build',//编译相关的修改，例如发布版本、对项目构建或者依赖的改动
2. `当commit时，会进行对项目格式化，格式化后需要重新commit提交`
