# 后续工作规划 / Roadmap

评估日期：2026-09-10。基线提交：`da9d9e6`。面向光学工程初学者，优先帮助判断“适不适合投、准备什么、何时提交、到哪里核实”。

## 现状与缺口

- 已有 19 本期刊、9 届会议、中文界面、双语 README、投稿入门、独立 JCR/CAS 筛选、来源监测和 Pages 工作流；原有 4 项测试及数据校验通过。
- 会议存在状态与倒计时不一致风险：显式关闭仍能返回未来投稿时间；未来截止不能证明系统已开放；未知补充通道不应被既往普通投稿截止掩盖。
- 数据覆盖仍为精选目录，分区部分为第三方参考或排名推算；不能声称已覆盖所有光学 1/2 区期刊。
- 监测报告只有 URL，难以找到受影响条目；需要可执行的补全清单和核验记录。

## 本轮交付顺序

| 步骤 | 交付 | 验收 | 状态 |
| --- | --- | --- | --- |
| 1 | 现状评估、范围、计划 | 文档明确已完成与待完成，独立提交并推送 | 完成 |
| 2 | 投稿状态与倒计时一致性 | 显式关闭不再倒计时；未知通道保持未知；日期精度测试通过 | 完成 |
| 3 | 重点官方来源核验及缺口清单 | 每项结论有来源与核验范围；访问失败不更新整条核验日期 | 完成，见 VERIFICATION_LOG.md |
| 4 | 来源关联、维护队列、发布文档 | 报告定位到条目和字段；测试、类型、lint、生产构建通过；推送并核查 Pages | 实现与本地验证完成，部署结果见 GitHub Actions |

每步使用独立提交并推送至现有 GitHub 仓库 `main`。不重写历史。推送成功与 Pages 部署成功分别核实。

## 后续持续迭代

具体人群覆盖、候选期刊、国内外会议系列和分批审核步骤，见 [扩充计划与候选清单](EXPANSION_PLAN.md)。该清单仅为规划，候选尚未全部审核，不计入网站收录数量。

1. **覆盖补全**：按激光、量子、成像、设计制造、光通信、光电材料整理候选目录；优先补目前薄弱方向的国内会议和 SPIE 系列。候选必须核实当届举办信息、征稿页和投稿要求再进入正式目录，不沿用往届 DDL。
2. **分区年度维护**：逐刊补有权限核验的 JCR 与中科院版本；保存体系、年份、大小类、学科、证据。无可靠依据留在待核验清单，不导入整份受限表。
3. **投稿路径细化**：从作者指南核实文章类型、篇幅、模板、提交入口、费用与开放获取、预印本政策。动态费用只附官方链接或带日期的核实值。
4. **截止日工具**：在数据质量稳定后评估日历导出、筛选链接分享和关注列表；精确时间与日期级事件必须区别处理，未知日期不能导出为伪造时间。
5. **社区维护**：每周处理来源变化与缺失字段；距截止 14 天内优先复核；每年新增届次并保留历史。自动请求仅产生报告，官方内容仍由人工判断。

后续条目是持续维护路线，不代表本轮已经完成，也不代表已创建自动后台任务。

## 参考与取舍

[CCF-Deadlines](https://github.com/ccfddl/ccf-deadlines) 使用结构化会议数据、逐届记录、多轮截止和社区 PR。沿用这些维护思路；光学目录保留期刊分区证据、日期精度以及报告录用与论文出版的区别。

## English

The baseline has 19 journals, 9 conference editions, a Chinese interface, bilingual documentation and CI. This iteration delivers four separately pushed commits: an audit and roadmap, consistent submission status/deadlines, focused official-source verification, and actionable maintenance reports with release validation. Broader coverage, annual ranking verification, richer submission guidance and calendar tools remain subsequent milestones. Source monitoring does not automatically validate or rewrite facts.
