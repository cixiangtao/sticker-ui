# 发布 Sticker UI

[English](releasing.md) | 简体中文

GitHub Actions 是 npm 和 GitHub Release 的唯一发布者。Release Please 自动维护发版 PR；维护者不在工作站上升版、创建 tag 或发布。

`package.json` 与 `.release-please-manifest.json` 同步管理公开版本。普通改动通过受保护的 `main`、PR 与必需检查进入。Release Please 从 `release-please--branches--main--...` 维护唯一发版 PR，并根据 Conventional Commit 或 squash merge 标题更新 SemVer 与 `CHANGELOG.md`。准确的发版 PR 合并后，`.github/workflows/publish.yml` 重新验证受限差异，只构建和打包一次，创建 `v<version>`，发布已检查的 npm 产物，并创建 GitHub Release。

当前配置保持 `beta` 预发布渠道。切换稳定版必须先通过普通 PR 明确移除预发布设置。

维护者应检查发版 PR 的版本、Changelog、受限差异与 CI；发布后核对 tag、GitHub Release prerelease 标记、npm `latest`/`beta` dist-tags、公开 tarball、干净消费者导入、Cloudflare 预览与 `/r/registry.json`。

配置 npm trusted publishing 到仓库 `cixiangtao/sticker-ui`、工作流 `publish.yml` 与 `npm` environment，并提供 `RELEASE_APP_CLIENT_ID` 与 `RELEASE_APP_PRIVATE_KEY` 给已安装的 GitHub App。

部分成功时，先检查发版 PR、工作流、tag、Release 与 npm，再从 `main` 手动运行 `publish.yml` 并传入准确的发版 PR 编号。不要假设中断已经回滚，也不得复用已发布版本。
