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

准入为至少一条 Q1/Q2 记录或 confirmed EI 记录。rankings 可以为空。索引标签的出版社声明不等于数据库核实；组合筛选由 lib/catalog.ts 实现，约束在 scripts/validate-journal.mjs。

每条 ranking 独立保存：system（JCR/CAS）、edition、year、metricYear（JCR 可选）、category、level、quartile、source、evidence。CAS level 必须 major/minor。derived 记录需 rank 和 total；推算值不等于数据库核验结果。secondary 不满足“仅官方/排名推算”筛选。

## English

Types are defined in `lib/catalog.ts`; executable constraints live in `scripts/validate-data.mjs`. Every deadline and ranking retains its own source. Exact timestamps require both an offset and IANA timezone. Date-only and unknown values remain explicit. `submissionState: published` means a schedule was announced, not that submission is currently open.

Journal records store independent ranking dimensions and evidence. CAS major/minor categories and JCR edition/metric years must never be collapsed. Only manually reviewed records receive a new `checkedAt`. Source monitoring stores hashes and reports separately; it does not alter catalog data.
