# 贡献指南 / Contributing

欢迎补充条目、修正时间和完善投稿指南。优先提交一项可独立核实的变更。

1. 新会议使用 `系列-年份` 唯一 ID，旧届次保留，不用下一年覆盖上一年。
2. 日期须来自当届通知。精确时间必须同时有 ISO UTC offset 和 IANA 时区；不能把只写日期的通知补成 23:59。
3. 未知日期设 `date: null`，保留来源与原因。注册入口不明时设 `registration: null`。
4. 分区须包含体系、版本年、学科、大类/小类、四分位和来源等级。请勿用影响因子大小自行判断中科院分区。
5. 手动阅读来源后才能更新 `checkedAt`。监测成功不等于内容已复核。
6. 只写简短原创介绍和规则摘要，不复制完整官网文字，不上传受限资料。
7. 运行 `pnpm validate:data`、`pnpm test`、`pnpm typecheck`、`pnpm lint`；影响页面时运行 `pnpm build`。

原有 `components/ui` 和 `hooks/use-mobile.ts` 为脚手架组件，保留其源码；项目 lint 排除这部分供应代码，TypeScript 仍检查整个项目。请不要仅为消除组件库规则差异修改供应代码。

## English

Contribute one independently verifiable change at a time. Use a unique conference ID per edition and preserve historical records. Cite current official notices; provide both an ISO offset and IANA timezone for exact timestamps. Never invent an end-of-day time. Use explicit nulls for unknown dates and registration links.

Ranking records must identify system, edition year, category, major/minor level, quartile, and evidence. Update `checkedAt` only after manually reviewing the source. Write original summaries; do not upload restricted material, credentials, or copied full pages. Run the validation, tests, type checking, lint, and relevant build checks listed above.

Vendored starter UI files are excluded from project lint but remain within TypeScript checking. Avoid unrelated edits to these components.

## 展会论坛维护 / Exhibition and forum records

展览、产业论坛及没有公开征稿的历史论坛写入 `data/events.json`，使用官方完整名称、举办起止日、地点、来源、参与方式与真实核验日期。子论坛的 `parentId` 指向母展；不能重复统计为独立论文会议。仅从官方检索快照获得信息时，应在参与说明和核验日志披露访问限制。

Use `data/events.json` for exhibitions, industry forums and historical forums without an open paper call. Record the official name, dates, location, sources, participation details and actual review date. Link child forums to their parent exhibition with `parentId`; do not count them as independent paper conferences. Disclose when evidence is limited to an official search snapshot.

版本文件由构建生成，不手工编辑。刷新只加载已发布的本站数据；维护者可通过 Actions 手动触发来源报告，复核后再提交数据。

The version manifest is generated at build time. Refreshing only loads a published catalog; maintainers can manually run the source-report workflow, review findings and then commit data changes.
