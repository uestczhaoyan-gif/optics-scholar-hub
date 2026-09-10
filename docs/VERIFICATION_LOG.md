# 官方信息复核记录

## 2026-09-10：首轮重点会议

本轮从公开官方页面复核以下字段。没有登录投稿系统，没有重新核实全目录或期刊分区；为避免把局部复核误认为整条复核，不批量刷新 `checkedAt`。本日志记录本轮的具体范围，页面原有日期仍是该条目的基线日期。

| 条目 | 核验范围与结果 | 数据处理 |
| --- | --- | --- |
| ACP 2026 | [首页](https://www.acpconf.com/)宣布 PDP 开放；[PDP 通知](https://www.acpconf.com/news/465)提供提交链接，截止为北京时间 10 月 15 日 23:59，要求 3 页 PDF；[普通投稿页](https://www.acpconf.com/news/paper-submission)区分 7 月 15 日截止和 7 月 22 日修改窗口 | 删除过时的 Opening Soon 冲突备注，保留正确的截止与不同通道页数 |
| OFC 2027 | [Author Timeline](https://www.ofcconference.org/submit-a-paper/author-timeline/)仍只给普通论文、注册与 PDP 日期；[Demo Zone](https://www.ofcconference.org/submit-a-paper/demo-zone-submission-guidelines/)明确 11 月 17 日 12:00 EST、3 页提案和 35 词摘要 | 新增独立 demo 事件及现场演示条件；未把 demo 时间移植到普通论文 |
| OFC 2027 | [普通作者指南](https://www.ofcconference.org/submit-a-paper/submission-guidelines/)确认 3 页、35 词、预印本限制和报告后的出版条件 | 原字段保持，不扩大到其他会议或期刊 |
| CLEO 2027 | [征稿通知](https://cleoconference.org/2027-call-for-papers/)确认 11 月 23 日 23:59 PT、35 词和 2 页；[作者指南](https://cleoconference.org/2027-paper-preparation-and-requirements/)预计 2027 年 3 月初发普通稿通知 | 新增通知事件但日期保持 null，文字保留月份范围；未编造某一天 |

## 下一批核验队列

- **近期参会**：COS 2026、ICIP 2026、ECOC 2026 的最终会场、注册入口和现场报告通知。先处理仍影响参会的字段。
- **未来投稿**：OFC 普通论文与 PDP 的精确时区、CLEO 注册日、ODF 注册日。官方只给日期时保持日期精度。
- **覆盖不足**：国内综合/成像会议、SPIE 光学设计与成像系列。需核实当届资料，再新增记录。
- **期刊**：先补已有期刊的官方分区依据与版本覆盖，再扩大数量。第三方分区不能因官网可访问而升级成官方分区。

后续每次事实修改在这里追加日期、条目、字段、来源和变化原因。自动抓取成功不等于完成上述核验。
