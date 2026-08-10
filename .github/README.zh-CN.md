# Sticker UI

[English](README.md) | 简体中文

一套使用 React 与 Tailwind CSS 构建的组件库：温暖纸张表面、粗墨线轮廓、硬边偏移阴影，以及具有触感的交互反馈。

**[浏览在线预览与组件文档](https://sticker-ui.cixiangtao.workers.dev/)**

Sticker UI 同时支持 npm 包与源码优先的 shadcn 兼容 Registry。需要集中升级时安装 npm 包；需要完全掌控与修改组件源码时复制单个 Registry 项目。

> Sticker UI 当前处于 beta。首个稳定版前公开 API 可能变化，请显式使用 `beta` 渠道获取可预测的预发布更新。

## 特点

- 基于共享 Tailwind token 的手册贴纸视觉语言。
- 复杂交互由 Radix 提供可访问性基础。
- `Card.Header`、`Dialog.Content`、`Select.Item` 等复合 API。
- Registry 安装后仍清晰、实用的组件源码。
- 无需修改组件即可覆盖的 Tailwind CSS v4 token。
- 交互预览、使用示例、源码视图与生成的 API 文档。

## 环境要求

- React 18 或 19
- React DOM 18 或 19
- Tailwind CSS 4
- 支持从 npm 包导入 CSS 的构建工具，例如 Vite 或 Next.js

## 两种安装方式

|            | npm 包                     | 源码 Registry               |
| ---------- | -------------------------- | --------------------------- |
| 适用场景   | 集中升级                   | 本地定制                    |
| 安装       | `pnpm add sticker-ui@beta` | `npx shadcn@latest add ...` |
| 导入来源   | `sticker-ui`               | 项目本地组件路径            |
| 源码所有权 | 包维护                     | 应用维护                    |

## npm 包

```bash
pnpm add sticker-ui@beta
```

在应用样式入口中加入 Tailwind 与 Sticker UI token：

```css
@import "tailwindcss";
@import "sticker-ui/tokens.css";
@source "../node_modules/sticker-ui";
```

Sticker UI 发布 React 组件与 Tailwind token，而不是预编译组件样式。`@source` 让 Tailwind 生成组件使用的工具类。

```tsx
import { Button, Card } from "sticker-ui"

function ReleaseCard() {
  return (
    <Card>
      <Card.Header decoration>
        <Card.Title>准备发布</Card.Title>
      </Card.Header>
      <Card.Content>
        <Button>发布版本</Button>
      </Card.Content>
    </Card>
  )
}
```

复合子组件通过主命名空间公开。请使用 `Dialog.Content`、`Select.Item` 或 `Checkbox.Group`，不要从包内部路径导入。

## 源码 Registry

```bash
npx shadcn@latest add https://sticker-ui.cixiangtao.workers.dev/r/button.json --dry-run
npx shadcn@latest add https://sticker-ui.cixiangtao.workers.dev/r/button.json
```

从[组件预览](https://sticker-ui.cixiangtao.workers.dev/)查找组件名，替换 URL 中的 `button`。完整索引位于 [`/r/registry.json`](https://sticker-ui.cixiangtao.workers.dev/r/registry.json)。正式安装时不要传 `--overwrite`，让 shadcn 在覆盖文件前询问；冲突可以先用 `--diff` 查看。

## 动画

Dialog、Popover、Select 与 Tooltip 等浮层使用 `tailwindcss-animate`：

```bash
pnpm add tailwindcss-animate
```

```css
@plugin "tailwindcss-animate";
```

## 主题定制

在导入 `sticker-ui/tokens.css` 后覆盖 `su` 主题变量：

```css
@theme inline {
  --color-su-ink: #202331;
  --color-su-paper: #fffaf0;
  --color-su-fill-default: #ffd166;
  --radius-su-lg: 18px;
  --shadow-su-md: 4px 4px 0 var(--color-su-ink);
}
```

`--color-su-*` 控制纸张、墨线、强调与语义色；`--radius-su-*` 控制圆角；`--shadow-su-*` 控制硬边阴影。优先复用现有名称，仅在应用确实需要新工具类时增加 token。

## 本地开发

```bash
pnpm install
pnpm dev
```

预览地址为 <http://localhost:7777>。`pnpm lint:fix` 执行格式、lint 和类型检查；`pnpm build:registry` 生成 Registry；`pnpm build:preview` 生成 API 文档与站点；`pnpm run ci` 执行完整 PR/发布门禁；`pnpm release:check` 只验证包表面而不发布。

规范源码位于 `src/components/ui`，`public/r` 是生成的交付产物，不应手工编辑。保持命名导出、复合 API、TSDoc 与可访问性语义，并将依赖声明在确实使用它的 Registry 项目上。

Release Please 自动维护 beta 发版 PR。必需检查通过并合并后，GitHub Actions 创建 tag、发布 npm 包与 GitHub Release。

## 项目资源

- [npm 包](https://www.npmjs.com/package/sticker-ui)
- [变更记录](https://github.com/cixiangtao/sticker-ui/blob/main/CHANGELOG.md)
- [贡献指南](../CONTRIBUTING.zh-CN.md)
- [支持说明](../SUPPORT.zh-CN.md)
- [安全政策](../SECURITY.zh-CN.md)
- [Release 历史](https://github.com/cixiangtao/sticker-ui/releases)

## 许可证

[MIT](../LICENSE)
