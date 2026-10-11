# 维护者一键核查官方信息

更新：2026-10-11。使用 DeepSeek V4.1 Flash（API 模型名 `deepseek-flash`）读取公开来源并逐字段对比，生成 **待审核报告与字段修改建议**。这与原有“网页指纹变化巡检”和“检查已发布版本”是三个不同操作。

## 首次配置

1. 用仓库维护者账号打开 [新增 Actions Secret](https://github.com/uestczhaoyan-gif/optics-scholar-hub/settings/secrets/actions/new)。
2. Name 填 `DEEPSEEK_API_KEY`，Secret 填 DeepSeek API 密钥，点击 Add secret。密钥只由核查工作流读取，不写入网页、JSON 数据或报告，也不要发到 Issue、聊天或提交到 Git。
3. 在 DeepSeek 平台确认密钥可用及账户额度。调用会使用你的 API 用量；每条可读取的记录最多一次模型请求，没有自动付费重试。模型请求关闭思考模式、输出最多 6000 tokens。

官方接口：[首次调用](https://api-docs.deepseek.com/)、[模型更新日志](https://api-docs.deepseek.com/zh-cn/updates/)。截至本次实现，V4.1 Flash 的调用名为 `deepseek-flash`。

## 每次运行

1. 网站点击 **AI 核查官方信息（维护者）**，进入 [Verify latest information (DeepSeek)](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/workflows/verify-information.yml)。
2. 登录 GitHub 后点击 **Run workflow**，分支选择 `main`，确认输入后运行。网页链接本身不触发核查；GitHub 的 Run workflow 是实际执行按钮，需要仓库写权限。
3. 初次建议 `limit=1`，成功后逐批运行。默认 `scope=stale`、`limit=10`、`offset=0`。
4. 点击新运行记录，在 Summary 阅读逐字段报告；也可在 Artifacts 下载 `verification-运行ID`，解压得到 `report.md` 和 `report.json`。附件保留 30 天，应及时保存需要的报告。

| 输入          | 含义                                                                                |
| ------------- | ----------------------------------------------------------------------------------- |
| scope=stale   | 超过 30 天未完整核验的期刊及未结束会议                                              |
| scope=current | 全部期刊及未结束会议，不限核验时间                                                  |
| scope=all     | 全部期刊、会议，包含历史届次                                                        |
| record_ids    | 可选，填 `journals/条目ID` 或 `conferences/条目ID`，多个用逗号分隔；覆盖 scope 条件 |
| limit         | 每批 1–30 条，默认 10，限制模型调用规模                                             |
| offset        | 从排序后的第几条开始，0 起；报告提供 nextOffset 便于下一批继续                      |

例：只核查 OFC 2027，`record_ids=conferences/ofc-2027`、`limit=1`。ID 也可从卡片纠错链接的预填信息获取。未知 ID 会报错，不会静默检查别的记录。

记录按完整核验日期及 ID 稳定排序。**同一目录版本**可以按 nextOffset 接续；若中途已更新目录或核验日期，排序可能变化，应重新筛选或指定剩余 ID，不能把旧 offset 当永久游标。

## 报告怎样理解

- **与原文一致（待审核）**：AI 找到了支持现有字段的摘录，程序已检查摘录确实出现在读取的正文中。仍需判断引用的年份、对象和语义是否匹配。
- **建议修改**：报告保存原值、建议值、来源和摘录。不是已经修改网站。
- **无法确认**：缺少内容、模型没有覆盖、版本或范围不清，或引用校验失败。不能因此删除现有值。
- **访问受限／无法读取**：没有正文证据，不伪造核验成功；工作流会保留报告。网络或模型错误可能使运行标红，仍可下载已经生成的部分结果。

模型只获得公开目录和抓取的公开正文，不获得 GitHub 凭据、浏览器登录态或其他本地文件。它没有执行命令和写入仓库的工具；工作流只有 `contents: read`，不能自行合并或发布。

## 审核后怎样更新网站

先阅读报告和原文，选择接受哪些修改。把下载的 `report.json` 放进本地忽略目录，例如 `work/verification/report.json`。

仅接受某几个字段的建议：

```sh
node scripts/apply-verification.mjs --report work/verification/report.json --record conferences/ofc-2027 --accept start,end
```

`start,end` 只是操作示例；只有报告中确实标为“建议修改”、且你已核对的字段才能接受。索引或截止事项使用报告中的完整路径，例如 `deadlines.0.date`。没有接受的建议不会应用。

**只有已完成整条记录的复核，才能更新完整核验日期**。包括身份、当届范围、所有相关时间与投稿/出版要求；期刊还需检查索引/分区版本及已明确记录的未知。局部字段的 AI 比对不等于完整复核。

完成整条复核后，可以显式记录实际日期（下例日期仅为本次文档日期，请替换为真实复核日）：

```sh
node scripts/apply-verification.mjs --report work/verification/report.json --record conferences/ofc-2027 --complete-review-date 2026-10-11
```

如需同时接受字段修改，在**同一次命令**中加上 `--accept` 和 `--complete-review-date`。第一次写入后原记录摘要已变化，旧报告不能再次应用，以免覆盖较新改动；应在一次审核中确定操作，或重新核查。

工具会检查记录摘要与原值、防止应用过期报告，只能修改允许的字段；写入后运行全量数据校验，不通过则恢复原文件。期刊索引自己的核验日期与证据不能因整条日期更新而自动刷新，仍按实际核验范围单独维护。

然后执行项目检查，审阅差异，提交并推送：

```sh
pnpm test
pnpm typecheck
pnpm lint
pnpm build
git diff
```

修改经 GitHub Pages 构建部署后，访客才能加载新版。只有完整复核日期已被真实更新，原来的“超过 30 天未完整核验”提示才会消失。AI 核查报告本身不会隐藏这个提示。

## 本版范围与限制

- 覆盖现有期刊和会议，不自动新增下一届、期刊、分区版本或来源链接；系列与展会继续沿用原巡检。
- 每条最多读取 8 个去重来源，每个最多 2 MB、15 秒超时，向模型提供前 8000 字符。超出或截断会在报告标明。
- 本版读取 HTML/纯文本；PDF、图片、需要 JavaScript 才能展示的正文、需登录的分区平台及被拦截的来源不冒充可核验。受限信息需要合法可访问证据补查。
- 既有来源中的第三方参考不能升级为官方证据；同一旧版分区仍存在，也不能证明新版分区没变。模型提示词要求保留这种不确定性。
- 引用逐字匹配只能防止虚构引文，无法证明 AI 的推理正确。报告保留人为审核环节，不自动修改 `checkedAt`，也不自动发布。
- 本版没有增加后台服务器、公众触发端点或新的定时 AI 调用。现有每日来源变化巡检保持不变。

## 常见失败

- `Missing DEEPSEEK_API_KEY`：仓库 Secret 尚未配置或名称不一致。
- `DeepSeek HTTP 401`：密钥无效；在 GitHub Secret 中更换，不把密钥贴到报告中。
- `DeepSeek HTTP 402/429`：按服务商提示检查额度或限流，降低批次并稍后重试。
- `response incomplete`：输出未完成，不能使用截断 JSON；报告保留失败，不更新目录。
- `Record changed since verification`：核查后目录已被修改，重新核查该 ID。
- `Catalog validation failed`：建议值与目录规则不一致，工具恢复原文件，需检查关联字段或重新核查。
