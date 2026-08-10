# 参与 Sticker UI 开发

[English](CONTRIBUTING.md) | 简体中文

贡献应保留源码优先的 Registry 模型、可访问性行为和手册贴纸视觉语言。开始前搜索现有 Issue/PR；大型 API 或依赖变化先用 Issue 讨论；保持改动聚焦；安全问题按[安全政策](SECURITY.zh-CN.md)私密报告。

使用 Node.js 22 与 `package.json` 固定的 pnpm：

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm dev
pnpm lint:fix
pnpm test
pnpm build:registry
pnpm build:preview
pnpm run ci
```

组件规范源码放在 `src/components/ui/<name>.tsx`，Registry 指向这些文件，不要手工编辑 `public/r`。组件变化应同步演示、路由、API 文档和翻译；公开 API 使用 TSDoc；保留命名导出与 `Dialog.Content` 形式的复合 API。

提交使用 Conventional Commits。PR 说明用户可见结果、测试，并为可见交互提供截图或录屏。提交内容按 [MIT License](LICENSE) 授权。
