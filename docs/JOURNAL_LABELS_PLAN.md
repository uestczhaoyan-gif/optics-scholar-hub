# 期刊索引与合集标签规划

更新：2026-09-10。核心模型、卡片标签、组合筛选及校验规则已实现；索引证据仍在分批补全，未核实者保持待核验。

## 收录范围

- **1/2 区精选**：延续现有 JCR / 中科院分区筛选，并逐刊独立核验 SCI/SCIE、EI 索引。
- **EI 工程补充**：纳入与光学工程、仪器、制造、光电子等直接相关且已核实 EI Compendex 收录的期刊；没有 JCR/中科院分区也可进入这一范围，不强行赋予分区。
- 两种范围可重叠，同一本期刊只保留一个条目。新增 EI 范围旨在落实“也包括 EI 期刊”，不意味着把所有 EI 刊无条件收录。
- SCI/SCIE 中不符合原 1/2 区门槛的期刊暂留候选池；本次不自动扩成所有分区。中文期刊可按分区或 EI 路径审核，不再仅因没有 JCR 分区排除。

## 合集卡片必须可见的标签

| 维度 | 展示示例（虚构格式示意） | 规则 |
| --- | --- | --- |
| 索引 | `SCI（SCIE）`、`EI（Compendex）` | 核实后分别显示，可同时出现；来源返回什么子库就记录什么 |
| JCR | `JCR Q1 · 2026 · OPTICS` | 年份与学科不能省略到让人误以为是全刊统一分区 |
| 中科院 | `中科院大类 2 区 · 2025 · 物理与天体物理` | 大类、小类分开；小类标签带实际学科 |
| 研究领域 | `光学`、`材料`、`电子`、`物理` | 允许多选，统一受控词表 |
| 细分方向 | `超表面`、`光电探测`、`量子光学` | 使用现有 topics 并逐步规范，不把领域与主题混为一个字段 |
| 数据状态 | `EI 待核验`、`分区待核验`、`第三方分区参考` | 不确定信息不得显示为肯定标签 |
| 收录范围 | `1/2 区精选`、`EI 工程补充` | 用于解释条目为何被纳入，可同时符合两者 |

卡片顺序建议：**刊名与简介 → 索引 → 当前所选年份的分区 → 领域和方向 → 官网/作者指南**。索引和分区标签直接显示在合集卡片，不要求先展开详情。

同刊多个学科分区全部保存。卡片优先显示与筛选匹配的学科，其余用“另有 N 条分区”展开；不默认挑最好看的分区，也不拼接不同年份冒充同一版本。来源等级直接标注，颜色只作辅助，不能只靠颜色区分 SCI/EI 或分区。

## 筛选要求

- 收录范围：全部／1–2 区精选／EI 工程补充。
- 索引：全部／SCI（SCIE）／EI（Compendex）／SCI 与 EI 双收录／索引待核验。
- 分区：JCR、中科院大类、中科院小类，独立选择版本年及区间。
- 领域：光学、材料、电子、物理、信息与计算、生物医学、机械与制造、能源、地学与空间，支持交叉主题。
- 切到纯 EI 范围时，清楚提示分区筛选可能排除未记录分区的期刊；不能继续隐式强制 Q1/Q2，使 EI 补充条目永远不可见。
- 索引是否收录与分区筛选独立。只找到 JCR 指标，不能自动标记 SCI；被 Engineering Village 的其他数据库收录，也不能自动标记 EI Compendex。

## 索引核验与建议字段

已新增 `issn`、`eissn`、`domains`、`indexes`；现有 `rankings` 和 `topics` 保留。

每条 `indexes` 记录建议包括：

| 字段 | 用途 |
| --- | --- |
| database | 精确索引名称，如 SCIE、EI_COMPENDEX；ESCI 等单独存储，不能当作 SCIE |
| status | confirmed / unverified / discontinued；未核验不等于未收录 |
| source | 可追溯来源链接 |
| checkedAt | 此索引实际人工核验日期，不沿用整条期刊日期冒充核验 |
| coverageStart / coverageEnd | 官方提供的覆盖起止范围；没有则 null |
| evidence | 官方数据库／出版社声明／其他参考；出版社声明未获数据库复核时在页面说明 |
| note | 名称变化、覆盖限制、停收等备注 |

按 ISSN 匹配官方数据库；刊名更改、曾收录后停收、覆盖范围有限必须单独处理。期刊被数据库收录不保证每篇文章均已检索。不得用某届会议论文被 EI 检索来证明同名期刊属于 EI 源刊。

## 实现批次与验收记录

完成：字段与校验、默认全部范围、SCI/EI/双收录/待核验筛选、领域筛选、分区组合、直接可见标签、官网入口与边界测试。新增首本无已核实分区的中文 EI 补充条目。现有 19 本期刊均已迁移字段，只有取得明确来源的索引填写肯定值；全面核验仍待逐批推进。

1. 建立索引字段、领域词表及相应校验；允许 EI 补充条目无分区，修改当前“必须存在 Q1/Q2”的全局约束为按收录路径校验。
2. 先核验已有 19 本期刊索引，再从扩充候选中选择直接相关 SCI/SCIE 与 EI 刊；中文工程期刊也进入 EI 审核队列。未核验的不填肯定值。
3. 实现合集卡片标签和组合筛选；无需展开即可看到索引、分区、领域。
4. 验证 SCI-only、EI-only、双收录、未核验、停收、多学科分区、不同版本年等情形；EI-only 无分区时仍能出现在正确范围。
5. 同步中英文 README、数据模型和审核日志；独立提交推送并验证部署。

## 官方核验入口

- [Clarivate：Web of Science 核心合集与子库说明](https://webofscience.help.clarivate.com/Content/wos-core-collection/wos-core-collection.htm)：区分 SCIE 与其他子库，并指向 [Master Journal List](https://mjl.clarivate.com/)。
- [Elsevier：Engineering Village 内容来源说明](https://www.elsevier.support/engineering-village/answer/what-are-engineering-villages-content-sources)：平台包含不同数据库，EI 标签须针对 Compendex 核验。

本轮已核对部分出版社声明并新增《光学 精密工程》，实际证据见 VERIFICATION_LOG.md；没有全面完成数据库机构入口复核。

## English

Planned journal cards will show independently verified SCI/SCIE and EI Compendex indexing, year- and category-specific JCR/CAS rankings, broad fields and research topics. An EI engineering supplement may contain relevant verified EI journals without rankings; the existing Q1/Q2 collection remains available separately. Indexing and rankings are independent, and dual-indexed journals are not duplicated. The schema, filters and card labels are implemented. Indexing evidence remains incomplete and is explicitly marked; see the verification log.
