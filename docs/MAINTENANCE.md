# 维护手册 / Maintenance guide

建设阶段以 [V1.0结项清单](PROJECT_CLOSEOUT.md) 为终点；标记 `V1.0_ACCEPTED` 并确认部署后停止五小时建设任务。现有每日来源巡检继续提供变化信号；下面的滚动队列用于上线后维护，不是结项必须清零的无限任务。新范围或新版本建设由用户另行要求。

展会/论坛维护队列已于 2026-09-12 接入：临近 14 天或进行中的活动列为 P1，未知起止日期及超过 30 天未复核列为 P2。报告显示活动类型和母活动 ID；同一活动可有多项字段待办，任务数不等于会议数量。不为展览生成论文截止或强制要求征稿入口。日期级比较沿用维护队列的 UTC 日历日，日期仍不代表精确截止时刻。

## 每周维护

1. 运行 `pnpm report:maintenance`，或下载最新 Pages 工作流的 `maintenance-queue` 附件。无需联网即可产生 `source-report/maintenance.md` 和 `.json`。
2. 优先处理 P1 临近 14 天内的事件，再处理 P2 未知日期、注册入口及超过 30 天未复核的活动条目，最后处理 P3 日期精度和分区证据。队列不会把已结束会议、展会或论坛排为活动维护任务；历史记录仍保留在目录。
3. 查看每日 `Check official sources` 的 Actions 摘要或 `source-report` 附件。变化与错误靠前，每条 URL 列出 `conferences/条目ID: deadlines.序号.source` 等字段。同一 URL 只请求一次，所有引用都保留。
4. 阅读本届官网并核对年份、通道、时区及适用范围，修改 JSON；在 [复核日志](VERIFICATION_LOG.md) 记下事实变化与实际核验范围。只核实部分字段时不要刷新整条 `checkedAt`；完整复核才更新该日期。
5. 运行 `pnpm validate:data`、`pnpm test`、`pnpm typecheck`、`pnpm lint`、`pnpm build`，提交并推送。确认 `Check and publish` 的 build 和 deploy 都成功。

## 如何解释报告

期刊维护队列现包括索引待核验、索引超过 30 天未复核，以及出版社声明待数据库复核。编辑 `indexes` 中对应索引的 `checkedAt`，不要因更新一个索引而刷新整本期刊日期。新增 EI 工程补充时可令 `rankings` 为空，但必须提供可靠 EI 声明与期刊身份，且不得把 ESCI 当作 SCIE。

- `changed`：文字指纹不同，需要阅读原文，可能只是导航变化。
- `baseline`：首次成功抓取或缓存丢失，仅建立比较基线。
- `access-limited`：401/403/429 或可识别的验证页，不据此删除链接。
- `http-error` / `timeout` / `fetch-error`：记录异常，人工检查；失败不会覆盖上一次成功指纹。
- `reachable-nontext`：其他非文本文件可访问，未做内容指纹比较；显式图片和 PDF 使用下面的字节指纹。
- 维护队列与网络报告互相独立；P3 分区待复核不表示现有记录错误。即使自动访问成功，也不能认定分区或日期已人工核实。

未知日期保留 `null`；“3 月初”等宽泛日期写在 label/note 中，不补造某天。Demo、PDP、普通稿、录用通知、终稿和注册必须分开。存在未来截止日期不代表系统已经开放，显式关闭的投稿不会显示倒计时。

## 仓库与发布

源代码在 `app/`、`components/`、`lib/`，资料在 `data/`，指南在 `docs/`，自动化在 `scripts/`、`.github/`。`work/`、`source-report/`、`source-state/`、`dist/` 与依赖目录均不提交。保留现有 UI 组件与依赖，不在维护过程中随意删改脚手架。

GitHub Pages 使用仓库子路径 `/optics-scholar-hub`。本地模拟构建时，在 PowerShell 运行 `$env:BASE_PATH='/optics-scholar-hub'; pnpm build`。每步用独立提交，不强制推送；回退通过审查后的 `git revert` 产生新提交。

网络巡检每天运行并保留附件 30 天，不自动发送消息、修改数据或创建 Issue。每次 push/PR 也会生成离线维护队列。公开仓库长时间无活动时，请检查 GitHub 是否暂停定时工作流。

## English

Run `pnpm report:maintenance` for an offline task queue. Review imminent events first, then unknown dates, registration links, stale entries and ranking evidence. The daily source report maps each URL to every affected record and field. A changed hash is a review signal, not a verified fact; blocked requests never prove a dead link. Log partial reviews without refreshing the whole record's review date. Validate, test, build and confirm both GitHub Actions build and deployment after pushing. Generated reports and caches are ignored by Git and retained as Actions artifacts for 30 days.

## 候选与方向覆盖

运行 `pnpm report:coverage` 生成覆盖报告与候选待办，或查看 CI 的 maintenance-queue 附件；维护规则见 [候选说明](CANDIDATES.md)。正式条目新增或改名时同步候选关联。`pnpm validate:data` 同时检查候选身份、类型和状态一致性。

## 系列后续公告与时间深度

每日来源检查已包含 data/conference-series.json 的 website/sources，沿用现有每日约 09:23 北京时间工作流，无新增重复调度。同 URL 仍只请求一次，报告保留 conferenceSeries/系列ID: sources.序号 等字段。自动文字指纹只提出核验信号；事实需人工阅读当届官方公告、验证、提交并验收部署。

离线维护队列增加 P2 系列任务：最新已收录届次已结束且 nextEditionCheckedAt 为 null 或距实际核验至少 30 天，查找后续官方公告。没有新公告时记录读到的来源和范围后仅更新该系列核验日；访问失败不刷新日期。已知未结束届次继续使用原临近/缺口任务。历史截止不重新排为未来提醒。

新增后续届次时保留旧条目；按官方身份/会期创建独立 ID，同步稳定系列 editionIds、候选关联及文档数量。不能复用旧届投稿要求、APC、城市或推算日期。系列更名须有官方继承依据，保留稳定 ID。来源范围写入核验日志，必要验证后按提交 SHA 确认 Pages build/deploy 与线上目录版本。系列数据已纳入版本摘要，单独增加关联也会触发“加载新版”。

The daily source workflow includes series announcement sources. Ended series without a reviewed future edition enter a 30-day review queue. A successful manual review updates only nextEditionCheckedAt; failed requests do not. Add officially evidenced editions without removing history, preserve stable series IDs and validate deployment before publishing facts.

## 公告图片巡检

目录中明确保存为官网/通知/系列sources的image/*来源支持image-bytes指纹；普通文本仍用text指纹；PDF见下节，其余非文本保持reachable-nontext。报告新增Comparison列。不会自动发现或下载HTML中的所有图片，也不会OCR/解析或自动改写会议事实。图片字节变化可能来自版式/压缩/元数据，须人工目视对应官方公告再逐字段编辑。

同URL去重，访问仍顺序、15秒超时及2MB上限；失败、受限或超限不覆盖上次成功基线。文本旧缓存可继续比较，比较方法切换建立新baseline。只有显式追踪来源的变化可产生信号，不能声称覆盖整站所有图像。IMID已列入2026官方感谢信引用的图像，用于跟踪后续更新，保留其2027字段原始出处。

## 动态正文的显式来源

动态标签页可能只在首页HTML中留下外壳，首页指纹无变化不能证明征稿正文无变化。人工读取正常页面后，可以把实际观察并核实的公开HTML正文端点追加到该系列sources。不得猜路径、盲爬整站或把成功抓取当事实核验。

ICCP2027已保存[Home正文](https://iccp2027.iccp-conference.org/pages/home.html)与[CFP正文](https://iccp2027.iccp-conference.org/pages/callforpapers.html)。来源取自已渲染页面的资源清单；删除请求时间戳前后实际HTTP200且正文逐字节一致。现有text指纹即可检查两页，无新调度或抓取执行器。隔离实测baseline/unchanged及同URL多引用通过，正式缓存未改。

Explicit, reviewed public HTML endpoints can monitor dynamically loaded text with the existing source checker. A wrapper page alone does not cover its loaded content. Only ICCP's observed Home and CFP endpoints were added; changes remain manual-review signals, not automatic catalog edits.

## PDF 公告巡检

明确保存到目录来源的 application/pdf 响应现在使用 pdf-bytes SHA256；必须具有 %PDF- 文件头。首次成功与比较方法切换建立 baseline，之后报告 unchanged/changed。同 URL 去重并保留全部字段引用，失败、受限、无效 PDF 或超限保留上次成功基线。其他 MIME 即使文件名以 .pdf 结尾，也仅检查可达性。

PDF 上限为 5,000,000 字节，文字/图片仍为 2,000,000 字节，均沿用 15 秒超时与顺序访问。只检查显式来源，不自动爬取页面中的附件。ISBI2027 的实际 2,108,834 字节 CFP 与 IISW2027 约 1.2MB CFP 已隔离实测 baseline/unchanged；ISBI 的两处引用只请求一次，正式巡检缓存未动。超限只表示本次未比较，不能据此断定链接失效。

字节变化可能来自排版、元数据或隐藏文字层，不能直接当日期变化。巡检不提取 PDF 正文、不 OCR、不改写学术事实；维护者仍需渲染并目视当届官方文件，逐字段保存出处，校验、推送并按 SHA 验收部署。

Explicit application/pdf sources with a valid PDF header use pdf-bytes SHA256. PDF downloads are capped at 5MB; text and images retain 2MB, with the same 15-second timeout. A byte change is a manual-review signal. Invalid, oversized or failed responses retain the last successful baseline; no PDF text extraction or automatic fact edits occur.
