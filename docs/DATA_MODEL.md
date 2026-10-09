# 数据模型 / Data model

数据以 UTF-8 JSON 存储；类型定义见 `lib/catalog.ts`，运行时约束见 `scripts/validate-data.mjs`。

## 会议 / Conference

| 字段                               | 含义                                                     |
| ---------------------------------- | -------------------------------------------------------- |
| id / series / year                 | 唯一届次 ID、系列简称、年份                              |
| name / nameEn                      | 中文及英文名称                                           |
| region / location / venue          | 中国境内或海外、城市、会场；未知会场明确标注             |
| start / end                        | 举办日期 YYYY-MM-DD，不与展览日期混用                    |
| topics / description               | 方向及原创简介                                           |
| website / notice / registration    | 官网、核心通知、注册链接或 null                          |
| checkedAt / evidence               | 人工核验日期及证据等级                                   |
| submissionState                    | published（公布过投稿安排）、closed（官方关闭）、unknown |
| requirements / publication / notes | 投稿方法、出版条件、冲突及其他说明                       |
| deadlines                          | 多个独立截止事件                                         |

`published` 只表示日程公开，不表示当前接受投稿。页面结合事件类型、时间和官方关闭状态计算展示状态。

### 截止事件 / Deadline

`type` 可为 paper、abstract、pdp、notification、registration、camera-ready、poster、demo。每项提供 label 和 source。

```json
{
  "type": "paper",
  "label": "论文截止",
  "at": "2026-11-23T23:59:00-08:00",
  "timezone": "America/Los_Angeles",
  "source": "https://cleoconference.org/2027-call-for-papers/"
}
```

`at` 与 `date` 互斥。仅日期使用 `date: "2026-10-20"`；未知为 `date: null`。日期及源时区不确定时，在 UTC 日期前后一天保留“不确定”提示。这是展示策略，不是延长提交时间。

## 期刊 / Journal

已实现 SCI/SCIE、EI 索引、领域标签与 EI 工程补充，规则见 [索引与合集标签说明](JOURNAL_LABELS_PLAN.md)。

期刊包含 id、name、abbr、publisher、topics、description、website、guide、requirements、publishing、schedule、checkedAt 和 rankings。新增 issn/eissn（未知为 null，已知须通过校验位检查）、domains（受控领域词表）、indexes。indexes 必须分别提供 SCIE 和 EI_COMPENDEX 记录，未知也显式保存。ESCI 可单独记录，不能替代 SCIE。

索引包含 database、status（confirmed/unverified/discontinued）、evidence（database/publisher/secondary/null）、source、checkedAt、coverageStart/coverageEnd（年份字符串或 null）、note。confirmed/discontinued 必须有官方数据库或出版社来源、核验日期和至少一个 ISSN；第三方依据不能成为 confirmed。未核验日期允许 null。已结束覆盖不能标记当前 confirmed。

`evidence: database` 可来自数据库方公开的当前来源表或平台查询；note 必须区分具体方式。公开来源表应注明版本、表名/行号及刊号匹配，核对停收清单；清单版本日期不作为覆盖起止年，也不代表单篇已检索。2026-09-30 Compendex 核验记录见 [来源表证据](INDEX_EVIDENCE_2026-09-30.md)。

Clarivate MJL 的公开查询需按刊号核对结果卡中的刊名、刊号与 Core Collection 具体子库；侧栏过滤器勾选、JCR 影响因子或历史分区不能替代结果证据。来源保存刊号查询入口，note 区分公开结果卡与需登录的 profile/单篇检索。卡片未提供的覆盖年份保持 null；SCIE 和 ESCI 分别保存。

自 2026-10-09 起，准入扩展为至少一条有来源的 Q1–Q4 记录或 confirmed EI 记录；1/2 区精选仍是可选子集。用户明确指定的 Nature、Science 母刊按既有身份与版本分区证据收录，三篇光学样例作为后续补充项，不作为这两刊的展示门槛。rankings 可以为空。索引标签的出版社声明不等于数据库核实；组合筛选由 lib/catalog.ts 实现，约束在 scripts/validate-journal.mjs。

每条 ranking 独立保存：system（JCR/CAS）、edition、year、metricYear（JCR 可选）、category、level、quartile、source、evidence。CAS level 必须 major/minor。derived 记录需 rank 和 total；推算值不等于数据库核验结果。secondary 不满足“仅官方/排名推算”筛选。

## English

Types are defined in `lib/catalog.ts`; executable constraints live in `scripts/validate-data.mjs`. Every deadline and ranking retains its own source. Exact timestamps require both an offset and IANA timezone. Date-only and unknown values remain explicit. `submissionState: published` means a schedule was announced, not that submission is currently open.

Journal records store independent ranking dimensions and evidence. CAS major/minor categories and JCR edition/metric years must never be collapsed. Only manually reviewed records receive a new `checkedAt`. Source monitoring stores hashes and reports separately; it does not alter catalog data.

## 方向词表

`data/topics.json` 是期刊与会议共用的中文研究方向词表，并决定筛选菜单顺序。新增记录只能使用词表中的值，禁止重复；新增方向需同时维护词表。领域 domains 表示学科归属，topics 表示研究方向，二者分开。

统一“生物医学光子学”为“生物医学光学”，“光电材料”为“光学材料”；“光子集成与光通信”拆分为“集成光子”和“光通信”，“超表面与材料”拆分为“纳米与超表面”和“光学材料”。

## 交叉期刊的范围样例

可选 `scopeExamples` 数组记录至少 3 篇不同文章：`title`（中文概述）、`source`（官方文章或 DOI 链接）、`publishedAt`（首次发表日期）、`relevance`（光学适配说明）。它解释研究范围，不作为分区或索引证据，也不保证类似论文录用。新增跨学科期刊按扩充计划核对近期不同期次样例，历史存量分批补齐。

## 展会论坛与发布版本

`data/events.json` 独立存储展览、产业论坛、历史学术论坛：id/name/kind/start/end/location/topics/description/website/notice/checkedAt/participation/relation，可选 parentId 指向母展。无公开征稿依据不复用论文截止模型。官方来源检查包含该文件。

构建输出 `catalog-version.json`，含 schema=1、数据 SHA-256 和 publishedAt（构建时间）。摘要对象顺序固定为 journals/conferences/events/topics/site/conferenceSeries，不包含用户关注或访问行为；刷新按钮仅请求本网站该文件，不触发远端主办方抓取。

## 会议系列 / Conference series

新增 data/conference-series.json，类型见 lib/conference-series.ts，约束见 scripts/conference-series.mjs。

| 字段                 | 含义                                                             |
| -------------------- | ---------------------------------------------------------------- |
| id                   | 永久系列 ID；首次创建后保留，更名不得重算                        |
| name / aliases       | 已核实系列名及更名别名；不同地区 CLEO、母会/子会不因缩写相近合并 |
| editionIds           | 引用 conferences.json 的届次 ID；每个正式届次恰好归属一个系列    |
| website / sources    | 后续公告入口与官方来源；每日巡检逐字段保留引用，同 URL 去重请求  |
| nextEditionCheckedAt | 后续公告实际核验日或 null；不等于最新届次完整核验日              |

S1 从现有已核实系列标签和来源建立 64 个身份、关联 65 届；全部 nextEditionCheckedAt 初始为 null，表示尚未专门复查后续公告，不声称 64 系列都已当日完整核验。加入新届次时同步 editionIds；保留旧届次及其独立要求、截止、核验日。更名时保留 id，将旧名放入 aliases，并保存官方继承关系证据。系列关注使用独立存储键，更新目录后新届次沿用原系列关注。

A stable series identity owns references to reviewed conference editions. Renames retain the ID and verified aliases; regional variants and parent/subevents remain distinct. The next-announcement review date is independent of each edition's review date. Historical rules do not automatically apply to a later edition.
