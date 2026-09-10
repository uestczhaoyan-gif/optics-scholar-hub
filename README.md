# 光研导航 · Optics Scholar Hub

[中文](#中文) · [English](#english) · [在线使用 / Website](https://uestczhaoyan-gif.github.io/optics-scholar-hub/)

## 中文

为光学研究生打造的开源期刊与会议导航。灵感来自 [CCF-Deadlines](https://github.com/ccfddl/ccf-deadlines)，针对光学领域独立实现；不使用 CCF 等级评价光学会议。

### 当前功能

- **期刊目录**：19 本光学及材料、电子交叉期刊。按 JCR / 中科院、版本年、1 / 2 区、大类 / 小类、来源等级筛选，附介绍、官网和作者指南。
- **会议日历**：9 届国内外会议，包括 ACP、OFC、CLEO、COS、ECOC、FiO + LS、IEEE IPC、Optica ODF 和 ICIP。分别记录投稿、PDP、注册、通知及终稿时间。
- **时间可追溯**：精确时间提供北京时间 / UTC 切换；只有日期时不补造时刻，未知字段明确标注。
- **新生指南**：期刊与会议的区别、投稿流程、模板、预印本、注册、报告及出版要求。
- **共建维护**：JSON 数据、来源链接、核验日期、数据校验、Issue / PR 模板，以及每日来源变化报告。

这是精选目录的首版，**不是完整期刊清单或毕业认定依据**。没有某年记录，表示尚未核实，不能推断分区。

### 分区使用原则

1. **JCR 与中科院独立**，不互相换算。JCR 版本年与指标年分别保存。
2. 中科院同时保存 `major`（大类）与 `minor`（小类）。默认小类筛选按任一符合条件的小类匹配，具体学科见卡片展开内容，不能一概视为“光学小类”。
3. 学校采用当年或前一年版本时，分别选择对应年份。首版保存已找到的 **2025 中科院升级版公开参考**；尚未核实的 2026 中科院记录不以“新锐分区”等其他版本代替。
4. 来源分为官方披露、依据官方排名推算、第三方公开参考。第三方参考必须通过学校图书馆的 [中科院分区入口](https://sp.fenqubiao.com/) 复核。
5. 筛选仅保留当前所选维度的 1 / 2 区，但展开区保留其他学科记录，防止误读。例如大类 2 区不代表光学小类也是 2 区。

JCR 首批主要依据 [Optica 官方 2026 JCR 指标表](https://opg.optica.org/content/author/portal/item/style-metrics/)；所有具体记录的来源在 `data/journals.json`。排名推算使用 `ceil(rank / total × 4)`，并非数据库官方核验结果；并列排名或官方规则差异以 JCR 为准。

### 本地运行

需要 Node.js 24 和 pnpm 11.19.0。

```sh
pnpm install --frozen-lockfile
pnpm dev
```

生产检查及静态预览：

```sh
pnpm validate:data
pnpm test
pnpm typecheck
pnpm lint
pnpm build
pnpm start
```

预览默认 `http://127.0.0.1:3000/`。静态输出位于 `dist/client`。部署在子路径时，构建与预览都设置 `BASE_PATH=/仓库名`；GitHub 工作流自动处理。

使用 React、TypeScript、vinext、Tailwind CSS 与 shadcn 组件，无数据库、站内账号、付费 API 或追踪脚本。源代码为静态导出架构，访问者的搜索与筛选在浏览器内完成。外链会打开相应第三方网站。

### 发布到 GitHub Pages

1. Fork 或创建公开仓库，将项目推送至 `main`。
2. 在 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**。
3. 修改 `data/site.json` 中的仓库地址。
4. `Check and publish` 校验并构建，通过后发布。PR 只运行检查，不部署。

### 更新与贡献

编辑 `data/journals.json` 或 `data/conferences.json`，附上当届官方链接与真实 `checkedAt`，提交 PR。详见 [CONTRIBUTING.md](CONTRIBUTING.md) 和 [数据模型](docs/DATA_MODEL.md)。

`Check official sources` 每日约北京时间 09:23 运行（平台调度可能延迟），在 Actions 的运行摘要及 `source-report` 附件中报告变更。它只对公共网页做低频请求，**不会自动修改 DDL 或认定页面内容真实有效**。首次运行建立基线；缓存丢失时重建基线；403 / 429 标记访问受限，不能当作链接失效。人工复核后更新数据，超过 30 天未核验的条目在页面提示。工作流不会主动创建 Issue 或发送邮件；需维护者定期查看。长期无活动的公开仓库可能需要重新启用定时工作流。

```text
app/                  中文页面、样式、投稿指南
components/           通用外链及现有 UI 组件
data/                 期刊、会议和站点元数据
lib/catalog.ts        截止时间、时区、分区筛选逻辑
scripts/              数据校验、来源检查、静态预览
tests/                时区与分区边界测试
docs/                 项目规划、数据模型
.github/              自动校验、部署、来源监测、贡献模板
```

### 许可与来源

原创代码及原创说明采用 [MIT](LICENSE)。期刊名称、会议名称、第三方网页及其内容的权利归各自所有者；本项目许可不授予第三方内容的再分发权。不收录受限数据库导出、账号信息或整份分区表。官方通知始终优先于本站摘要。

## English

An open-source directory for optics graduate researchers, inspired by [CCF-Deadlines](https://github.com/ccfddl/ccf-deadlines). The interface is in Chinese. This is an independent project and does not assign CCF grades to optics conferences.

### Features and coverage

The initial catalog contains **19 journals and 9 conference editions**, covering optics and selected materials, electronics, and computational imaging topics. Search journals by ranking system, edition year, CAS major/minor category, quartile, and evidence level. Conference cards provide official notices, submission requirements, venues, and separate deadlines for papers, PDPs, registration, notifications, and final manuscripts.

Exact timestamps can be displayed in Beijing time or UTC. Date-only announcements retain their uncertainty. Unknown dates remain unknown. A Chinese beginner guide explains submission, registration, presentation, preprints, publication, and fees.

### Ranking policy

JCR and CAS rankings are independent. JCR edition and metric years are stored separately. CAS major and minor categories are never substituted for each other. A matching minor category may be outside optics; inspect the actual category in each record. Only Q1/Q2 records qualify for the selected filter, while other recorded categories remain visible for context.

The initial CAS coverage consists of publicly available **2025 upgraded-edition references**. Unverified 2026 records are not filled from unrelated ranking products. For institutions accepting the current or preceding year, select and verify each eligible edition through the institution's library. Missing data means unverified, not unranked.

Evidence is labeled as official disclosure, derived from official ranks, or secondary public reference. Derived quartiles use `ceil(rank / total × 4)`; official JCR results prevail where ties or ranking rules differ. This is a curated starter catalog, not an exhaustive directory or an institutional assessment tool.

### Develop and deploy

Use **Node.js 24 and pnpm 11.19.0**. Run the commands in the Chinese setup section: install, dev, data validation, tests, type checking, lint, build, and start. Static files are emitted to `dist/client`. Set `BASE_PATH` for a project subdirectory when building and previewing.

The stack is React, TypeScript, vinext, Tailwind CSS, and shadcn. No application database, user account, paid API, or tracking script is required. Searches and filters run locally in the browser.

For GitHub Pages, push to `main`, select **GitHub Actions** as the Pages source, and update the repository URL in `data/site.json`. The workflow validates and publishes the site; pull requests are checked without deployment.

### Maintenance and contribution

Update the JSON records with public sources and the actual review date. See [CONTRIBUTING.md](CONTRIBUTING.md) and [DATA_MODEL.md](docs/DATA_MODEL.md). A daily workflow compares public source fingerprints and writes a run summary plus a downloadable report. It never automatically changes deadlines. Initial runs or cache loss create new baselines; HTTP 403/429 means access-limited, not broken. Human review is required. Records older than 30 days show a warning. No issues or emails are automatically sent; maintainers should inspect the reports and re-enable schedules if GitHub disables inactive workflows.

Original code and original descriptions are MIT-licensed. Third-party names, pages, and content retain their respective rights. Do not contribute restricted database exports, credentials, or complete ranking tables. Official notices take precedence over directory summaries.
