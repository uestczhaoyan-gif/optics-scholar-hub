# 维护手册 / Maintenance guide

## 每周维护

1. 运行 `pnpm report:maintenance`，或下载最新 Pages 工作流的 `maintenance-queue` 附件。无需联网即可产生 `source-report/maintenance.md` 和 `.json`。
2. 优先处理 P1 临近 14 天内的事件，再处理 P2 未知日期、注册入口及超过 30 天未复核的活动条目，最后处理 P3 日期精度和分区证据。队列不会把已结束会议排为活动维护任务；历史记录仍保留在目录。
3. 查看每日 `Check official sources` 的 Actions 摘要或 `source-report` 附件。变化与错误靠前，每条 URL 列出 `conferences/条目ID: deadlines.序号.source` 等字段。同一 URL 只请求一次，所有引用都保留。
4. 阅读本届官网并核对年份、通道、时区及适用范围，修改 JSON；在 [复核日志](VERIFICATION_LOG.md) 记下事实变化与实际核验范围。只核实部分字段时不要刷新整条 `checkedAt`；完整复核才更新该日期。
5. 运行 `pnpm validate:data`、`pnpm test`、`pnpm typecheck`、`pnpm lint`、`pnpm build`，提交并推送。确认 `Check and publish` 的 build 和 deploy 都成功。

## 如何解释报告

- `changed`：文字指纹不同，需要阅读原文，可能只是导航变化。
- `baseline`：首次成功抓取或缓存丢失，仅建立比较基线。
- `access-limited`：401/403/429 或可识别的验证页，不据此删除链接。
- `http-error` / `timeout` / `fetch-error`：记录异常，人工检查；失败不会覆盖上一次成功指纹。
- `reachable-nontext`：文件可访问，未做文本指纹比较。
- 维护队列与网络报告互相独立；P3 分区待复核不表示现有记录错误。即使自动访问成功，也不能认定分区或日期已人工核实。

未知日期保留 `null`；“3 月初”等宽泛日期写在 label/note 中，不补造某天。Demo、PDP、普通稿、录用通知、终稿和注册必须分开。存在未来截止日期不代表系统已经开放，显式关闭的投稿不会显示倒计时。

## 仓库与发布

源代码在 `app/`、`components/`、`lib/`，资料在 `data/`，指南在 `docs/`，自动化在 `scripts/`、`.github/`。`work/`、`source-report/`、`source-state/`、`dist/` 与依赖目录均不提交。保留现有 UI 组件与依赖，不在维护过程中随意删改脚手架。

GitHub Pages 使用仓库子路径 `/optics-scholar-hub`。本地模拟构建时，在 PowerShell 运行 `$env:BASE_PATH='/optics-scholar-hub'; pnpm build`。每步用独立提交，不强制推送；回退通过审查后的 `git revert` 产生新提交。

网络巡检每天运行并保留附件 30 天，不自动发送消息、修改数据或创建 Issue。每次 push/PR 也会生成离线维护队列。公开仓库长时间无活动时，请检查 GitHub 是否暂停定时工作流。

## English

Run `pnpm report:maintenance` for an offline task queue. Review imminent events first, then unknown dates, registration links, stale entries and ranking evidence. The daily source report maps each URL to every affected record and field. A changed hash is a review signal, not a verified fact; blocked requests never prove a dead link. Log partial reviews without refreshing the whole record's review date. Validate, test, build and confirm both GitHub Actions build and deployment after pushing. Generated reports and caches are ignored by Git and retained as Actions artifacts for 30 days.
