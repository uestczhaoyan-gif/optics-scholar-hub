# 候选清单与方向覆盖

更新：2026-09-13。结构化清单位于 [data/candidates.json](../data/candidates.json)，由原扩充计划和已有正式目录整理；此次整理不等于重新核实了所有候选官网。

初始 262 项：91 项 admitted、169 项 pending、2 项 deferred。数量会随审核变化，请以生成报告为准。未收录候选不进入网站正式期刊数量或论文截止列表，也不自动抓取未知官网。

## 状态与字段

- candidateId：稳定标识，改名不改 ID。
- name / aliases：刊名或系列名及别名。同类型名称/别名归一化后不可重复；同名不同系列需明确限定。
- kind：journal、conference-series、event。会议系列可关联多个年份的正式记录。
- priority / scopeHint：审核顺序及适配线索，不是会议档次或期刊排名。
- sourceEntry：官网发现入口；未核实入口时为 null。
- reviewStatus：pending 待核验；admitted 已有正式条目；deferred 有具体未解决问题。
- relatedExistingIds：指向匹配类型的正式目录 ID。同一正式条目不得重复关联。
- decisionReason / nextAction：收录、暂缓依据及下一项可执行任务。
- reviewedAt：该候选状态的复核日期；由旧清单迁移而未重新审核者为 null，不替代期刊字段级核验日期。

admitted 只表示已有条目，索引、分区、指南和后续届次仍可有缺口。期刊刊号及已核实证据保存在正式 journals JSON，候选不复制一套可能漂移的数据。

## 每批操作

1. 从 pending 中按优先级和薄弱方向选择；查清官网、刊号或系列身份，记录可追溯结论。
2. 审核通过后加入正式目录，并将候选设为 admitted、关联其 ID；已有条目补后续届次时更新同一系列关联。
3. 信息冲突时设为 deferred，写明来源、冲突内容和下一步，不凭推测补事实。
4. 运行 `pnpm validate:data` 与 `pnpm report:coverage`。报告生成于 `source-report/coverage.md` 和 `.json`，Pages CI 随 maintenance-queue 附件提供。
5. 同步核验日志和路线图，每批独立提交上传；报告文件不提交。

覆盖矩阵使用当前 12 个受控方向，分开统计会议系列/届次和未结束记录。活动总数包含母子关系，另列无母活动记录数，各方向可重叠，不能直接相加。跨领域样例不足三篇仅提示审核，不等于期刊不相关；它也不验证样例是否为近两年或是否来自不同期次。显示、红外、遥感等更细方向仍需结合原候选池人工检查，后续按需要细化词表。

## English

The structured backlog distinguishes admitted records, pending leads and deferred conflicts. Admission requires links to existing records of the correct type, with no duplicate names, aliases or formal-record links. Candidate counts are not production catalog counts. Run `pnpm report:coverage` for topic coverage, conference series versus editions, event parent relationships and article-example gaps. The report is included in the CI maintenance artifact; it is a review aid, not a completeness score or a fresh source audit.
