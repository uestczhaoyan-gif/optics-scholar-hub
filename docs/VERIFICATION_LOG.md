# 官方信息复核记录

## 2026-09-10：期刊索引与合集功能首批上线

目录从 19 本增至 20 本。索引字段、独立核验日期、ISSN、领域标签已迁移；未核实索引显式设为 unverified，未刷新原有期刊的整条 checkedAt。领域为根据已收录主题整理的导航标签，不是数据库学科分类。

| 条目                       | 来源及本轮结果                                                                                                                                                                                                                       | 边界                                                                |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------- |
| Advanced Materials         | [Wiley Overview](https://advanced.onlinelibrary.wiley.com/hub/journal/15214095/productinformation.html)列出 SCIE、COMPENDEX 和印刷/电子 ISSN                                                                                         | 标为出版社声明，非数据库机构入口复核                                |
| Advanced Optical Materials | [Wiley Overview](https://advanced.onlinelibrary.wiley.com/hub/journal/21951071/productinformation.html)列出 SCIE 和电子 ISSN                                                                                                         | 该页未列 EI，本轮 EI 保留待核验；不能据此断言未收录                 |
| Nanophotonics              | [出版社页面检索结果](https://www.degruyterbrill.com/de/journal/key/nanoph/html)列出 SCIE、Ei Compendex 和 ISSN/eISSN                                                                                                                 | 依据公开页面检索快照，正文直连受限；出版社声明待数据库复核          |
| Advanced Photonics         | [Researching 出版页面检索结果](https://m.researching.cn/ap)列出 SCIE、EI 和 ISSN                                                                                                                                                     | 依据公开页面检索快照；正文直连受限，覆盖起止未核实                  |
| 光学 精密工程              | [期刊简介检索结果](https://ope.lightpublishing.cn/zh/about/1416/)声明 EI；[官网](https://ope.lightpublishing.cn/zh/home/)核实 ISSN/eISSN、主办者和出版周期；[伦理规范](https://ope.lightpublishing.cn/zh/info/1455/)核实作者材料要求 | 作为 EI 工程补充加入；SCIE 与分区未核实，不填假值；简介正文直连超时 |
| Optics Express             | [Optica About](https://opg.optica.org/content/journal/about/item/oe/)核实 ISSN                                                                                                                                                       | 页面指标不证明具体索引，本轮 SCIE/EI 均保持待核验                   |

本轮没有宣称已完成所有期刊的索引审核。其余条目待逐刊查数据库或出版社索引列表；Nature、部分 Optica / Researching / Cambridge 页面未获得可确认的索引证据。所有原有分区记录原样保留，不由索引推算分区。索引覆盖起止未知均为 null。

功能验收覆盖 EI 无分区、SCI/EI 双收录、未核验和停收、ESCI 不替代 SCIE、分区年份/学科/大小类/证据匹配，以及索引证据和 ISSN 校验。

## 2026-09-10：首轮重点会议

本轮从公开官方页面复核以下字段。没有登录投稿系统，没有重新核实全目录或期刊分区；为避免把局部复核误认为整条复核，不批量刷新 `checkedAt`。本日志记录本轮的具体范围，页面原有日期仍是该条目的基线日期。

| 条目      | 核验范围与结果                                                                                                                                                                                                                                                | 数据处理                                                       |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| ACP 2026  | [首页](https://www.acpconf.com/)宣布 PDP 开放；[PDP 通知](https://www.acpconf.com/news/465)提供提交链接，截止为北京时间 10 月 15 日 23:59，要求 3 页 PDF；[普通投稿页](https://www.acpconf.com/news/paper-submission)区分 7 月 15 日截止和 7 月 22 日修改窗口 | 删除过时的 Opening Soon 冲突备注，保留正确的截止与不同通道页数 |
| OFC 2027  | [Author Timeline](https://www.ofcconference.org/submit-a-paper/author-timeline/)仍只给普通论文、注册与 PDP 日期；[Demo Zone](https://www.ofcconference.org/submit-a-paper/demo-zone-submission-guidelines/)明确 11 月 17 日 12:00 EST、3 页提案和 35 词摘要   | 新增独立 demo 事件及现场演示条件；未把 demo 时间移植到普通论文 |
| OFC 2027  | [普通作者指南](https://www.ofcconference.org/submit-a-paper/submission-guidelines/)确认 3 页、35 词、预印本限制和报告后的出版条件                                                                                                                             | 原字段保持，不扩大到其他会议或期刊                             |
| CLEO 2027 | [征稿通知](https://cleoconference.org/2027-call-for-papers/)确认 11 月 23 日 23:59 PT、35 词和 2 页；[作者指南](https://cleoconference.org/2027-paper-preparation-and-requirements/)预计 2027 年 3 月初发普通稿通知                                           | 新增通知事件但日期保持 null，文字保留月份范围；未编造某一天    |

## 下一批核验队列

- **近期参会**：COS 2026、ICIP 2026、ECOC 2026 的最终会场、注册入口和现场报告通知。先处理仍影响参会的字段。
- **未来投稿**：OFC 普通论文与 PDP 的精确时区、CLEO 注册日、ODF 注册日。官方只给日期时保持日期精度。
- **覆盖不足**：国内综合/成像会议、SPIE 光学设计与成像系列。需核实当届资料，再新增记录。
- **期刊**：先补已有期刊的官方分区依据与版本覆盖，再扩大数量。第三方分区不能因官网可访问而升级成官方分区。

后续每次事实修改在这里追加日期、条目、字段、来源和变化原因。自动抓取成功不等于完成上述核验。

## 2026-09-10：PhotoniX 与功能材料补充

- 新增 PhotoniX（eISSN 2662-1991）与 Advanced Functional Materials（ISSN 1616-301X、eISSN 1616-3028），目录增至 22 本期刊。
- [PhotoniX 官网](https://link.springer.com/journal/43074) 与 [AFM 概览](https://advanced.onlinelibrary.wiley.com/hub/journal/16163028/productinformation.html) 均成功读取，明确列出 SCIE 和 EI Compendex。按出版社声明记录，收录覆盖年仍留空；未直接查询机构数据库。
- 分别核对官网作者指南，补充文章类型、数据说明或 Free Format/返修要求。未凭影响因子推测分区，二者按已核实 EI 条件加入合集；JCR/CAS 记录待核验。
- Journal of Biophotonics 的当前公开概览未明确写出 SCIE/EI；COL/JOSA/Applied Optics 尚缺符合入选范围的核实证据，继续保留候选。

## 2026-09-10：生物光子学与激光会议

- 新增 Optica Biophotonics 2027（丹佛，4 月 18–21 日）与 Laser Congress 2026（维尔纽斯，10 月 11–15 日），正式目录增至 11 届会议。官网首页、当届征稿页已成功读取；Laser 注册页亦已核实。
- [Biophotonics 征稿](https://www.optica.org/events/congress/biophotonics_congress/submit_papers/)：2026-12-08 12:00 EST，35 词摘要及 2 页 summary；注册日期留空。
- [Laser 征稿](https://www.optica.org/events/congress/laser_congress/submit_papers/)：PDP 为 2026-09-22 12:00 EDT，仅最新成果及口头报告。[注册页](https://www.optica.org/events/congress/laser_congress/registration/)确认早鸟 2026-08-28 23:59 EEST，未沿用该日期作为最终注册截止。
- SPIE Photonics West 官方访问仅返回防护页，镜像跳转后也未取得完整正文；保持候选，不凭搜索片段完成整条审核。

## 2026-09-10：国内光电材料大会

- 新增 [OMTA 2026 官方通知](https://b2b.csoe.org.cn/mobile/meeting/OMTA2026.html)，核实福州 2026-10-30 至 11-01、两轮投稿、提前缴费日期与英文摘要/中文全文/仅交流三条路径；目录增至 12 届会议。
- 未公布具体场馆和英文全文截止，保持待核实。9 月 30 日按日期精度保存，不擅自补 23:59。
- SOC 2026 页面仍存在空白截稿占位，图像科学与工程 2026 第一轮通知未给出报告材料格式，Photonics Asia 当前投稿细则仍需读取；三者保留待补候选。

## 2026-09-11：日历导出功能

- 支持导出筛选列表或单届会议，保留来源与核验日期，不预设通知或自动订阅。
- 按 [RFC 5545](https://www.rfc-editor.org/rfc/rfc5545) 处理 UTC 时间、全天日期、会期结束日的排他边界、文本转义和 UTF-8 75 字节折行。未知日期不生成事件；历史日期明确保留。
- 新增跨时区、跨月跨年、未知日期、中文折行和转义回归测试，15 项测试、类型检查及 lint 通过。未进行第三方日历软件实际导入测试。
