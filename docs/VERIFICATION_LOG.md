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

## 2026-09-11：研究方向筛选一致性

- 新增共用方向词表，合并同义标签、拆分混合方向标签，统一期刊与会议筛选顺序。数据校验拒绝未知及重复方向。
- 此批仅调整分类标签，不更改来源核验日期、索引结论或会议截止。

## 2026-09-11：筛选链接分享

- 生成带查询参数与页签锚点的分享链接，支持 GitHub Pages 子路径、中文关键词和联合筛选；失效/未知枚举回退默认值。
- 提供剪贴板失败后的手动复制入口。新增链接往返与无效参数测试；当前 17 项测试通过。

## 2026-09-11：Frontiers of Optoelectronics 出版迁移与索引

- [旧 Springer 页面](https://link.springer.com/journal/12200) 明示 2026-01-01 起不再出版本刊，转至高教社；新增条目使用[现官网](https://journal.hep.com.cn/foe/EN)。期刊总数为 23。
- [现索引页](https://journal.hep.com.cn/foe/EN/indexing) 列出 ESCI 与 Ei Compendex，ISSN 2095-2759 / 2095-2767，分别记录出版社声明。SCIE 留待核实，不从影响因子推断；按 EI 路径加入。
- [作者指南](https://journal.hep.com.cn/foe/EN/guidelines) 成功读取，但附件正文未解析，篇幅暂不写入；[费用页](https://journal.hep.com.cn/foe/EN/processingcharge) 声明 Diamond OA、免作者 APC。
- Laser & Photonics Reviews 的 Wiley 概览核实 SCIE 和身份，但 EI 未列出、分区页受限；保留候选等待符合准入条件的分区证据。

## 2026-09-11：交叉期刊研究范围样例

- 为 AFM 补齐 2025–2026 年三篇官方文章样例：10.1002/adfm.202529188（液晶超表面综述）、10.1002/adfm.202517441（偏振光探测）、10.1002/adfm.202506504（锡基钙钛矿 LED）。三篇 Wiley 页面均可读取。
- 保存首次上线日，而非将 DOI 年份或卷期年份当上线日期；详情显示中文概述、相关性与原文入口。新增可选 scopeExamples 数据校验，至少三条且链接去重。
- 其他历史交叉期刊样例仍待补全，本批不改变索引和分区结论。

## 2026-09-11：本地关注列表

- 期刊和会议均支持关注/取消关注，可筛选关注项并导出其会议日历。关注 ID 存在当前浏览器，不传入分享 URL。
- 本地存储失败时提示临时状态；读取时忽略损坏结构、重复或已移除 ID。新增存储解析回归测试。

## 2026-09-11：量子技术与亚洲光电子会议

- 新增 [Quantum 2.0 2027](https://www.optica.org/events/topical_meetings/quantum/)，哥本哈根 Bella Center，2027-06-07 至 10；当届标头的投稿页提供摘要与 summary 说明，但无截止日期，保存 null，状态待公布。首页仍混有 2026 主席/论文集，不沿用为新届信息。
- 新增 [Photonics Asia 2026 本届官网](https://meeting.cncos.org.cn/pa2026/)，南通 10-24 至 26；已明确摘要截止，延期日期为 6 月 30 日。官方 COS 征稿页提供 SPIE 投稿路径，细节模板仍待核查，条目明确标注该缺口。注册从本届官网最新动态进入。会议总数为 14。
- NDTA 2026 官方页面的中英文摘要长度分别为 300–500 与 500–600 词，且本轮未确认地点；暂不加入，待解决冲突。
- 中国激光/光学学报官方页面本轮访问受限；未新增索引声明，检索摘要只作为后续线索。

## 2026-09-11：公开数据审核统计

- 数据说明页按当前 JSON 自动统计期刊/会议数量、SCI/EI 单项及双索引依据、数据库直查、待核验与无分区条目，明确重叠计数不能相加。
- 统计不把出版社声明等同数据库核实，也不把未知当未收录。修正维护说明，使其涵盖通过校验的直接提交与 PR。

## 2026-09-11：LSA 双索引依据

- [Nature 官方期刊信息页](https://www.nature.com/lsa/journal-information) 的本轮检索快照明确列出 EI Compendex 与 Science Citation Index Expanded；直达页面受访问限制，记录为出版社声明并在索引备注披露获取方式，不称为数据库直查。
- [官网](https://www.nature.com/lsa/) 标注 online ISSN 2047-7538，补齐电子刊号。只更新索引核验日期，不刷新尚未重新核验的作者指南或分区日期；覆盖起止年保留未知。

## 2026-09-11：维护队列补齐身份与分区缺口

- 维护队列新增缺少 ISSN/eISSN 的身份核验任务，以及无分区记录的补全任务；后者为 P3，不改变 EI 补充准入，不把未知当作低分区。
- [Nature Photonics 官网](https://www.nature.com/nphoton/) 的本轮检索结果明确显示 print 1749-4885、online 1749-4893，补齐身份字段。未取得新的索引依据，SCI/EI 状态及整条核验日期保持原记录。
- 新增回归测试：仅有电子刊号不报缺少身份、无分区的已确认 EI 条目保持原索引状态。

## 2026-09-11：Optica 主干期刊身份核验

- 成功读取 [Optica 官方出版目录](https://opg.optica.org/about.cfm)，补齐 AOP、BOE、OME、OL、JLT、JOCN、Photonics Research 七本期刊明确列出的纸刊/电子刊号；未标明纸刊的条目保留原值。
- 目录明确 AOP 的长篇综述、tutorial、roadmap 为邀稿，补充投稿要求。未将出版频率当作审稿周期，也未根据目录中的影响因子推断分区或 SCI/EI。
- 本批为字段级核验，不刷新整刊作者指南和索引核验日期。

## 2026-09-11：LPR 收录

- 新增 Laser & Photonics Reviews：Wiley 官方概览核实研究范围、现电子刊号/原纸刊号、SCIE 声明；作者指南核实稿件类型、Free Format、声明及返修要求。EI 未核实。
- 爱科学期刊页明确列出 2025 年 3 月中科院升级版大小类，按第三方参考展示；未混用新锐分区，未把未分学科的 JCR 概括值写成逐学科记录。正式期刊数为 24。

## 2026-09-11：展会与论坛补充

- 新增独立活动目录，收录 CIOE 2026、其超精微/纳米光学制造论坛及 2026 Light 光学精密工程青年科学家论坛（历史）。各条保存当届官方来源，注明母子关系与未核实的征稿/报名限制，不计入 14 届论文会议。长春光机所报道直达受限，本轮使用官方检索快照并在卡片披露。
- 中国光学学会学术大会已有条目，补充常用称呼以便检索，不重复新增。
- 活动数据纳入结构校验和每日官方来源监测；回归测试确认共享来源关联到活动字段。

## 2026-09-11：可检查的发布版本

- 新增数据版本检查按钮、无更新/错误状态以及新版加载入口。构建生成版本摘要；缓存绕过和超时控制用于减少旧缓存干扰。
- 每日来源监测仍为报告模式，人工确认后提交部署。页面区分构建时间、来源核验日期和本次版本检查，不把刷新当成官方复核。
- 添加版本摘要一致性、Pages 子路径、新旧版本、失败与损坏响应测试。未做浏览器交互或第三方实时源自动更新测试。

## 2026-09-11：长春光学与全国精密工程会议

- 新增中国光学学会长春学术大会 2026，官方页面核实会期、会场、摘要模板入口、5 月 10 日摘要截止与 5 月 31 日优惠截止。与深圳年会分开，保留历史。
- 新增全国第十九届精密工程研讨会，CIS 通知核实 8 月 14–16 日西安交通大学、原创征文与专刊路径；仅将 5 月 31 日记作回执日期，不当作论文截止。专刊细节保留待核实。会议总数为 16。

## 2026-09-11：成像、检测与薄膜活动扩充

- 逐页读取 CIOE 官方通知，新增 AI+计算光学成像、光学半导体检测、医疗内窥成像、光学真空镀膜四项论坛；活动总数 7，均保留母展关系和日期级精度。
- 纳米压印制造论坛页面标头为 9 月 9 日，介绍正文为 9 月 10 日；本轮保留候选，等待核实冲突，不自行选定其中一个日期。

## 2026-09-11：Photonic Sensors 出版迁移与收录

- 旧 Springer 首页明示 2026 年起转清华大学出版社；新条目使用现 SciOpen 官网、作者指南和提交系统，不沿用旧站缺失的指南。
- 现 SciOpen 索引页明确 SCIE 与 Ei Compendex，记录出版社声明；未核实分区，按 EI 路径收录。现站明确 APC 由电子科技大学承担。
- 指南的上传文章类型清单与正文类型段落表述不完全一致，条目要求按提交系统/编辑部确认；仅摘录已明确的文件与篇幅要求。期刊总数 25。

## 2026-09-11：OPTIC 2026

- 官方首页核实 12 月 4–6 日新竹清华大学举办；投稿指南核实 100-word abstract、两页单栏 A4 PDF、版权协议和最终延期截止 9 月 6 日 23:59 台北时间。
- 注册页核实早鸟 10 月 31 日和在线注册 11 月 13 日，仅记日期，不借用退款截止的 23:59。录用通知 10 月 9 日前。
- 指南提到 Poster-Only 阶段但未给日期，保留未知通道；CD/USB、无 ISBN 的交流材料不包装为 SCI/EI 论文出版。会议数 17。

## 2026-09-11：APL Photonics

- 直接打开 AIP 官方 About 页，现正文明确 2025 指标年、Clarivate 2026 发布，OPTICS 与 PHYSICS, APPLIED 均为 Q1；保存为 JCR 2026，不沿用搜索缓存中的上一年数据。
- 官方作者指南核实初投 PDF、补充材料分开及 Letter 3500 词、Comment / Response 1000 词的口径；其他类型无统一长度限制。
- SCI/SCIE 与 EI 均保留待核验，分区证据不替代索引证据。正式目录为 26 本期刊、17 届会议、7 项展会与论坛。

## 2026-09-11：指定期刊清单与主页官方入口

- 将用户指定的 54 本期刊按四类保存到 REQUESTED_JOURNALS.md，已有名称去重，其余逐项待补。
- 首页各栏目上方增加中科院分区表与 JCR 官方平台入口。中科院官网正文确认统一入口及 CARSI 等登录方式；JCR 自动抓取返回 403，未据此声称平台失效或读取授权数据。

## 2026-09-11：eLight 与 Nano-Micro Letters

- 两刊现 Springer Nature 主页直接列出 SCIE 和 EI Compendex、纸质与电子 ISSN；按已核实 EI 路径收录，分区仍待逐年核实。
- eLight 作者指南明确作者本人投稿、可编辑文件、双行距及数据声明；Nano-Micro Letters 核实双盲、独立标题页、TOC 图和摘要要求。
- Nano-Micro Letters 指南仍含邮件投稿旧描述及 2023 年 APC，条目明确以现官网入口和收费页核实，不将旧数值当作当前规则。总期刊数 28。

## 2026-09-11：光学核心清单及应用物理扩充

- 新增 Opto-Electronic Advances、Opto-Electronic Science、Progress in Quantum Electronics、PRX Quantum、Ultrafast Science、Light: Advanced Manufacturing、Applied Physics Reviews。当前 35 本期刊。
- JCR 2025 使用公开机构转载表逐刊逐学科核对 JIF Quartile（不使用 AIS Quartile），属于二手证据，附 PDF 页码；不是当前索引证明。其余版本或官方证据在条目内单独注明。

## 2026-09-11：Nature Portfolio 交叉期刊

- 新增 Nature Electronics、Nature Materials、Nature Nanotechnology、Nature Communications、npj Quantum Materials、npj Quantum Information、Communications Physics。当前 42 本期刊。
- JCR 2025 使用公开机构转载表逐刊逐学科核对 JIF Quartile（不使用 AIS Quartile），属于二手证据，附 PDF 页码；不是当前索引证明。其余版本或官方证据在条目内单独注明。

## 2026-09-11：ACS 化学、纳米与传感交叉期刊

- 新增 Chemical Reviews、ACS Nano、Nano Letters、Inorganic Chemistry、ACS Sensors。当前 47 本期刊。
- JCR 2025 使用公开机构转载表逐刊逐学科核对 JIF Quartile（不使用 AIS Quartile），属于二手证据，附 PDF 页码；不是当前索引证明。其余版本或官方证据在条目内单独注明。

## 2026-09-11：综合材料与物理期刊

- 新增 Science Advances、Advanced Science、InfoMat、Angewandte Chemie International Edition、Science China Materials、Chinese Physics Letters。当前 53 本期刊。
- JCR 2025 使用公开机构转载表逐刊逐学科核对 JIF Quartile（不使用 AIS Quartile），属于二手证据，附 PDF 页码；不是当前索引证明。其余版本或官方证据在条目内单独注明。

## 2026-09-11：界面、染料、生物传感与综合科学

- 新增 Journal of Colloid and Interface Science、Dyes and Pigments、Biosensors and Bioelectronics、Sensors and Actuators B: Chemical、Science Bulletin。当前 58 本期刊。
- JCR 2025 使用公开机构转载表逐刊逐学科核对 JIF Quartile（不使用 AIS Quartile），属于二手证据，附 PDF 页码；不是当前索引证明。其余版本或官方证据在条目内单独注明。

## 2026-09-11：补齐用户指定的七本 IEEE 工程与信息期刊

- 新增 IEEE Communications Surveys & Tutorials、Proceedings of the IEEE、IEEE Transactions on Industrial Electronics、IEEE Transactions on Cybernetics、IEEE Transactions on Medical Imaging、IEEE Transactions on Image Processing、IEEE Transactions on Geoscience and Remote Sensing。当前 65 本期刊。
- JCR 2025 使用公开机构转载表逐刊逐学科核对 JIF Quartile（不使用 AIS Quartile），属于二手证据，附 PDF 页码；不是当前索引证明。其余版本或官方证据在条目内单独注明。

## 2026-09-11：用户清单闭环与证据边界

- 用户指定 54 / 54 本已收录（名称按 REQUESTED_JOURNALS.md 对照）；当前目录 65 本期刊、17 届论文会议、7 项展会/论坛，未重复计算母子活动为论文会议。
- 官网或作者指南受访问限制的期刊，在 requirements 中说明尚未确认的投稿细则；收录不是全字段核验通过。当前 SCI/SCIE、EI 缺乏明确证据时继续标为待核验，不从 JCR 表中的历史索引列推断当前状态。
- 本轮大部分 JCR 记录来自公开机构转载的 2025 JCR 表（指标年 2024，逐条附 PDF 页码），属于二手参考，不宣称是最新年度。Opto-Electronic Science 的 2026 记录单独标注第三方来源；不把新锐分区写成中科院分区。
- 首页已加入中科院期刊分区表和 JCR 官方平台入口，提示按年度和学科查询，并可能需要机构授权登录。
- IEEE ComST 与 Proceedings 按综述/教程选刊；TMI 保留会议扩展说明要求；TGRS 保留 2026 年超页政策的生效日期。TIE 版本化 PDF 及 TIP 范围说明未作为完整的当前投稿指南核验。
- 范围核验补充来源：Elsevier 官方商店的 [JCIS](https://shop.elsevier.com/journals/journal-of-colloid-and-interface-science/0021-9797)、[Dyes and Pigments](https://shop.elsevier.com/journals/dyes-and-pigments/0143-7208)、[Biosensors and Bioelectronics](https://shop.elsevier.com/journals/biosensors-and-bioelectronics/0956-5663)、[Sensors and Actuators B](https://shop.elsevier.com/journals/sensors-and-actuators-b-chemical/0925-4005)、[Science Bulletin](https://shop.elsevier.com/journals/science-bulletin/2095-9273)。前述期刊的 ScienceDirect 完整作者指南读取受限，不能据此宣称篇幅和收费已完整确认。
- 验证：清单逐项匹配 JSON，54 项均存在；数据校验通过，21 项自动测试通过，TypeScript 检查、lint 与生产构建通过。

## 2026-09-12：批次 A 首组索引证据

本批只复核索引字段，不更新整刊 checkedAt、分区、费用或作者指南。新增 6 条肯定索引记录，证据均为出版社声明，数据库直查仍待完成。

| 期刊                    | 新增索引声明       | 来源与读取范围                                                                                                                                                               |
| ----------------------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ultrafast Science       | EI Compendex、ESCI | [出版社索引页](https://spj.science.org/page/ultrafastscience/abstracting-indexing)公开检索快照明确列出；直接打开失败，按快照范围记录。SCIE 保持待核验，不把 ESCI 换算为 SCIE |
| npj Quantum Information | SCIE、EI Compendex | [Journal Information](https://www.nature.com/npjqi/journal-information)正文索引列表，核对在线 ISSN 2056-6387                                                                 |
| Communications Physics  | SCIE、EI Compendex | [Journal Information](https://www.nature.com/commsphys/journal-information)正文索引列表，核对在线 ISSN 2399-3650                                                             |

本批查阅 APL Photonics 的 About 页、HPLSE 的 Cambridge 索引入口，未取得足以填写的明确索引正文；Advanced Photonics 的 SPIE 页面直接读取失败。它们保持原状态，未把访问失败当作未收录，也未用第三方索引标签代替官网声明。

更新后全目录 SCIE 肯定记录 15 本、EI 16 本、ESCI 3 本；肯定证据仍均为出版社声明。期刊数量仍为 65 本。

## 2026-09-12：Wiley 材料与化学期刊索引复核

- [Advanced Materials](https://advanced.onlinelibrary.wiley.com/hub/journal/15214095/productinformation.html)：官网正文明确列出 SCIE 与 COMPENDEX。
- [Advanced Functional Materials](https://advanced.onlinelibrary.wiley.com/hub/journal/16163028/productinformation.html)：官网正文明确列出 SCIE 与 COMPENDEX。
- [Advanced Science](https://advanced.onlinelibrary.wiley.com/hub/journal/21983844/productinformation.html)：官网正文明确列出 SCIE 与 COMPENDEX。
- [Angewandte Chemie International Edition](https://onlinelibrary.wiley.com/page/journal/15213773/homepage/productinformation.html)：官网正文明确列出 SCIE 与 COMPENDEX。

Advanced Science、Angewandte 新增 4 条肯定索引；Advanced Materials、AFM 复核既有 4 条声明并更新来源及索引核验日期。全部为出版社证据，覆盖年份仍未知，未更新整刊 checkedAt。Angewandte 补官方印刷 ISSN 1433-7851，以及综述类先联系编辑部评估提案的要求；不将此要求推广至研究论文。

Nature Materials、Nature Nanotechnology、Nature Electronics 的入口读取失败；Nature Communications 的 Journal Information 指向范围页，但本次未读到明确索引列表；InfoMat 的 Overview 读取失败。相关索引继续待核验，未使用期刊声誉、影响因子或同一出版社其他期刊的索引作推断。

当前目录 65 本不变；SCIE 肯定记录 17 本、EI 18 本、ESCI 3 本，均仍为出版社声明。

## 2026-09-13：会议临近事项及 OPTIC 补充通道

- [OPTIC 作者指南](https://optic2026.conf.tw/site/page.aspx?lang=en&pid=16&sid=1696)的 Important Dates 明确 Poster-Only 为 2026/09/14–09/30；补日期级截止 9 月 30 日，窗口起点写入标签与备注。未挪用普通稿精确时间；保留学生奖限制。仅局部核验，整条 checkedAt 不变。
- [FiO 时间线](https://www.frontiersinoptics.com/submissions/author-timeline)确认 PDP 通知为 9 月 18 日；[Laser Congress 征稿页](https://www.optica.org/events/congress/laser_congress/submit_papers/)确认 PDP 为 9 月 22 日 12:00 EDT（UTC−04:00）、35 词摘要与 2 页 summary，均与已有记录一致。
- Photonics West 2027 官方主页及征稿指南本次仅返回 iframe，仍需取得可读的当届官方正文；不使用第三方检索摘要直接填日期。

## 2026-09-13：OECC & IP 2027、OGC 2026

- OECC & IP：核对[时间线](https://oeccip2027.org/pages/38)、[普通稿](https://www.oeccip2027.org/pages/39)、[PDP](https://oeccip2027.org/pages/40)、[注册](https://oeccip2027.org/pages/42)和[举办信息](https://oeccip2027.org/pages/15)。联合会议只计一条；日期级不补时刻。模板和系统按钮尚有占位，注册页旧 2025 活动不迁入；作者注册早于早鸟，分别记录。
- OGC：核对[首页](https://ipsogc.org/)、[投稿](https://ipsogc.org/sub.html)、[注册](https://ipsogc.org/reg.html)。首页与旧日期页不一致，备注保留差异；当前日期记录依首页。仅按日程作历史记录，不声称已实查论文集上线。
- 当前 65 本期刊、19 届会议、7 项展会/论坛。

## 2026-09-13：三本中文 EI 工程补充

- [上海光机所杂志社介绍](https://www.siom.cas.cn/xscbw_1/jj/201904/t20190417_5276174.html)公开检索快照逐刊列明 EI、ESCI；正文直接读取超时，因此仅保存出版社声明，不冒充数据库直查。页面路径年份不作为当前收录覆盖起点。
- [中国激光](https://hpl.opticsjournal.net/J/zgjg/Issues.html)、[光学学报](https://f.opticsjournal.net/J/gxxb/Issues.html)、[激光与光电子学进展](https://prj.opticsjournal.net/j/lop/issues.html)刊号、出版单位及作者服务导航已读取。正式主页及指南深链接直读受限，guide 暂指向带作者服务导航的官方刊物页面。
- 不照搬旧稿约或代投网站要求；SCIE 未确认，rankings 为空，走 EI 补充准入。光学学报与网络版区分；定价不是版面费。当前期刊 68 本，EI 21 本、SCIE 17 本、ESCI 6 本具有出版社肯定声明。

## 2026-09-13 — ICOCN 2026 历史届次

- [首页](https://www.icocn.org.cn/)：延期投稿 5/24、通知 5/31、早鸟 6/15、PDP 6/30；日期未附时刻，均按日期保存。
- [最终日程](https://icocn.org.cn/static/upload/file/20260716/1784181294166799.pdf)：成功下载并读取第 1–3 页；第 1 页明确 2026/7/20–23、Xining Sapphire Hotel，与首页一致，优先于 1 月初期 CFP 的 6 月写法。
- [作者指南](https://www.icocn.org.cn/?pages_18/=)：PDF、3 页、摘要/全文和参奖区别。模板链接实际指向 2024 子站，未冒充当届模板已核实。
- [注册页](https://icocn.org.cn/?pages_34/=)：早鸟 6/15；超页收费与指南 3 页上限表述不同，退款 June 31 非有效日期，均明确披露、不推断更正。
- 官网送交 IEEE/EI 的声明不等于本轮核实了实际收录；只收录历史届次，没有据此生成 2027 日期。候选状态同步。

## 2026-09-13 — 中文 EI 补充第二组

- [中国光学学会介绍](https://www.cncos.org.cn/Content/view/id/110.html)：当前刊名、ISSN 2097-1842、2022 年更名、范围、双月刊及 EI/ESCI 声明均可读。网页的旧发布时间与正文新内容不同，未推断索引覆盖年份；其 JCR Q3 表述未明确发行版本，本批不生成分区记录，按 EI 路径收录。
- [光学工程学会介绍](https://b2b.csoe.org.cn/special/show-4.html)及[期刊网](https://prj.opticsjournal.net/J/irla/Issues.html)：核对《红外与激光工程》ISSN 1007-2276、主办单位、月刊及范围。[SciEngine 期刊介绍](https://www.sciengine.com/IRLA/journal-introduction)检索快照明确 EI，直读 403；irla 官网及其收录栏目 502，保留出版社证据等级及限制。
- 两刊官网当前作者指南未完整读取；不采用第三方转载的字数、审稿周期、版面费。未核实数据库当前覆盖，不虚构 SCIE 或分区。候选关联已同步。

## 2026-09-13 — 两本期刊电子刊号

从 ISSN 国际中心公开确认记录补 ACS Photonics 的 eISSN [2330-4022](https://portal.issn.org/resource/ISSN/2330-4022) 与 Advanced Photonics Nexus 的 eISSN [2791-1519](https://portal.issn.org/resource/ISSN/2791-1519)。两条记录的 Medium 均为 Online，不填入印刷 ISSN 字段。只核验标识符，整刊 checkedAt、索引和分区不变；ISSN 注册记录不是 SCIE/EI 数据库直查证据。ACS about 页检索快照相符，正文 403，以 ISSN 中心可读记录为主。

## 2026-09-13 — Optica 投稿规则与 LPR 历史 JCR 参考

- [Optica 官方介绍及投稿说明](https://opg.optica.org/content/journal/about/item/optica/)：补电子刊号 2334-2536，区分三类稿型篇幅、研究稿 250 词投稿信和 mini-review 先联系主编流程；仅复核身份与本刊规则，未把整刊 checkedAt 或索引证据刷新。
- [LPR 官方索引页](https://onlinelibrary.wiley.com/page/journal/18638899/homepage/productinformation.html)：SCIE 声明仍在，更新该索引核验日期；未列 EI，不能推断未收录。[官方 metrics](https://onlinelibrary.wiley.com/journal/18638899/journal-metrics)提供 JIF，未提供学科分区，不由 JIF 数值推断 Q1。
- 读取已下载的 [UEFISCDI 公开 JCR 2025 转载表](https://uefiscdi.gov.ro/resource-865584-JCR_2024.iunie2025.pdf)第 567、603、607 页，以两刊号匹配 LPR，光学、应用物理、凝聚态物理的 JIF Quartile 均为 Q1。保存为 2025 版本、2024 指标年的 secondary 参考；不是最新 2026 分区，也不是 SCI/EI 直查。本轮在线 PDF 工具超时，使用此前下载文件重新逐行读取。

## 2026-09-13 — 生物医学与极端制造四刊

- [SPIE 作者总览](https://nanophotonics.spiedigitallibrary.org/journals/journal-authors)直接读取 JBO、Neurophotonics 的范围及 Gold OA；JBO 专门范围页搜索快照可读，指南正文访问受限，未补造篇幅。
- [Elsevier 光学物理 OA 总览](https://www.elsevier.com/subject/physics-and-astronomy/journals/open-access-for-physics-journals)核实 Photoacoustics 的光声/热声研究与综述范围；本刊指南 403。[ISSN 中心](https://portal.issn.org/resource/ISSN/2213-5979)确认电子刊号 2213-5979，未使用已撤销的 2213-5987。
- [IOP IJEM 范围](https://publishingsupport.iopscience.iop.org/journals/international-journal-of-extreme-manufacturing/about-international-journal-extreme-manufacturing/)包含超快激光制造、光学结构和精密计量；[本刊作者支持页](https://publishingsupport.iopscience.iop.org/journals/international-journal-of-extreme-manufacturing/)核实英文、图表、模板和摘要建议。[ISSN 中心](https://portal.issn.org/resource/ISSN/2631-7990)核实电子版身份。
- 2025 JCR 机构转载表：JBO p566 OPTICS Q2；Neurophotonics p567 OPTICS Q2（AIS Q1 不替代）；Photoacoustics p226 ENGINEERING, BIOMEDICAL Q1；IJEM p250 ENGINEERING, MANUFACTURING Q1。均读取此前下载的同一公开 PDF，使用 JIF Quartile，未据此确认当前 SCIE/EI。
- JBIO p41、55、566 的 JIF 均 Q3；[Wiley 官方范围与索引](https://onlinelibrary.wiley.com/page/journal/18640648/homepage/productinformation.html)显示适配，但未明确 EI；更新候选审核结论，未永久排除。

## 2026-09-13 — SPIE Photonics West 2027

- 通过内置浏览器实际读取 [大会首页](https://spie.org/conferences-and-exhibitions/photonics-west)、[当届摘要指南](https://spie.org/conferences-and-exhibitions/photonics-west/presenters/abstract-submission-guidelines)及[参会页](https://spie.org/conferences-and-exhibitions/photonics-west/attend)，解决此前网页工具仅返回 iframe 的读取限制。
- 会期 2027/1/30–2/4、Moscone Center；共同摘要 2026/7/22、通知 10/12、海报 2027/1/6、全文 1/13、口头幻灯片提前上传 1/29。均为日期精度，未推定截止时刻。
- 技术摘要 200–300 词、日程简介 50–150 词、报告人简介最多 1000 字符含空格。分会特殊要求另外核验；共同日程不是每个分会的最终报告安排。
- 注册仅公布 2026 年 10 月，上传开放 11/30；注册截止未知，实际注册入口未确认。官方仍显示征稿开放字样，但原共同截止已过，不推定所有分会接受补投或全部关闭。
- BiOS Expo 与 Photonics West Exhibition 分别为 1/30–31 和 2/2–4，仅作关系说明；本批未增加展览记录或把会议群拆成数百个条目。出版与数据库合作声明不等于具体稿件已检索。

## 2026-09-14 — 中国光学投稿指南与系统迁移

通过浏览器读取[征稿细则](https://www.chineseoptics.net.cn/news/tougaoxuzhi.htm)、[2026-06-25 系统迁移通知](https://www.chineseoptics.net.cn/news/index_tabliod/d1332564-e72b-414d-9451-9e3a0a05d662.htm)及[版面费通知](https://www.chineseoptics.net.cn/news/xinxidongtai/c4aae910-5943-4b15-8d03-5d2bbb240f2a.htm)。补 Word、签字版权/保密材料、三审及新旧稿分流；500 元/页明确为 2024-03-01 生效的公开通知，未保证当前账单。摘要字数、篇幅及预印本政策未核实。仅更新投稿说明，保留整刊与索引核验日期。

## 2026-09-14 — AOPC 2026

[主办学会当届官网](https://b2b.csoe.org.cn/meeting/WPC2026.html)确认 7/17–19 北京国家会议中心二期，300–500 词英文摘要，最后一轮 6/20、全文 7/31。顶部早鸟 6/30 与费用表 6/20 不一致，未选一个作为确定日期。会议通知 PDF 本轮无法读取，以网页明确正文为依据；合作出版列表不作为单篇检索或录用证明。

## 2026-09-14 — 葡萄牙 AOP 2026

[大会官网](https://aop2026.org/)与[Indico](https://indico.fccn.pt/event/55/)确认 7/7–10、ISEL 校区。[投稿页](https://aop2026.org/submissions.html)明确 2500 字符摘要、全文评审与分开的出版渠道；[首轮公告](https://aop2026.org/docs/AOP2026_1st_announcement_v5.pdf)保留通知、早鸟和全文日期。摘要三处日期不一致（首轮 4/30、投稿页 5/15、平台会后 8/1 且有占位文案），最终截止留空。合作期刊宣传的 Q 值未写入期刊分区。

## 2026-09-14 — Advanced Optical Materials 投稿规则

[本刊官方指南](https://advanced.onlinelibrary.wiley.com/hub/journal/21951071/author-guidelines)补稿型常见篇幅与摘要要求、非邀稿综述、Free Format、预印本及返修材料，未将典型字数当作硬上限。[索引页](https://advanced.onlinelibrary.wiley.com/hub/journal/21951071/productinformation.html)仍明确 SCIE，更新该字段日期；未列 EI，保留待核验。此次不刷新整刊核验日期、收费或分区。InfoMat 索引页仍无法读取，无新增肯定记录。

## 2026-09-14 — Nature Electronics 交叉适配样例

新增三篇 2025 年 Article，分别位于第 8 卷第 4、7、11 期，符合本轮近两年且不同期次的样例要求。出版社公开摘要/文章目录支持微梳光电同步、CMOS 量子光源控制、Stokes 偏振探测三类光学关联；Crossref 出版社登记元数据核对刊名、题名、DOI、在线日期及期次。后两篇全文页面重定向失败，未声称读取受限全文；证据只用于选题适配，不更新分区或索引。元数据入口：`https://api.crossref.org/works/` 加各篇 DOI，论文直达链接见正式条目。

## 2026-09-14 — Nature Materials 发光器件样例

三篇 2025 年 Article 对应第 24 卷第 5、6、11 期，分别涉及钙钛矿 LED、微腔有机发光晶体管和纯蓝单层 OLED。出版社公开论文页面/检索正文用于主题确认，Crossref 登记元数据核对刊名、题名、DOI、在线日期和期次；仅作光学适配样例，不据此判定录用概率或索引状态。第一篇正文重定向受限，关联理由仅取题名明确范围；其余两篇有公开摘要或正文片段。该组覆盖发光方向，不代表本刊所有光学子领域。

## 2026-09-14：两项暂缓候选再次复核

- [NDTA 当届官方页面](https://b2b.csoe.org.cn/mobile/meeting/NDTA2026.html)已读到苏州市、11 月 13–15 日，地址和场馆仍为空。原待办中的“地点未核实”缩小为“具体场馆待核实”。中文投稿段要求英文摘要 300–500 词，英文段仍为 500–600 词；第二轮截稿为 9 月 30 日。注册费按 9 月 15 日前后区分，但当天档位未明确。本轮只补候选来源与审核结论，继续暂缓。
- [CIOE 纳米压印详情](https://conference.cioe.cn/2026namiyayin.html)标头写 9 月 9 日、5 号馆二楼 5C，介绍正文仍写 9 月 10 日；[当届会议总表](https://conference.cioe.cn/ConferenceList.html)写 9 月 9 日下午。总表与标头一致不能证明冲突已获官方更正，继续等待最终通知或会后证据。搜索命中的 Conference-Guide.pdf 属于 2025 届，未用于确认 2026 日期。
- 两项候选 sourceEntry 从空值补为可追溯的官方详情入口，reviewedAt 更新为本轮日期；正式目录仍为 74 本期刊、23 届会议和 7 项活动，候选状态数量不变。

## 2026-09-14：红外探测与 AR/VR 光学活动

- 新增 [红外探测技术及应用论坛](https://conference.cioe.cn/2026hongwaitance.html)，9 月 10 日，深圳国际会展中心 6 号馆二楼 6C；新增 [AR/VR 光学技术应用高峰论坛](https://conference.cioe.cn/guangjia-AR&VR-2026.html)，9 月 9 日，2 号馆二楼 2B。[当届总表](https://conference.cioe.cn/ConferenceList.html)与详情一致，且详情均有议程、主办者及免费报名入口。以历史产业论坛收录，不生成论文 DDL；正式目录为 74 本期刊、23 届会议、9 项活动。
- [微显示论坛详情](https://conference.cioe.cn/guangjia-weixianshi-2026.html)标头写 9 月 10 日，正文将第二届全球微显示产业发展论坛暨 XR 生态大会写为 9 月 9–10 日。无法据此确认层级关系与完整会期，新增暂缓候选，等待最终日程或会后证据。
- 候选新增 3 项，总计 266 项：106 已收录、157 待审核、3 暂缓。同步当前文档统计，并修正扩充计划状态表遗留的 19 届会议为 23 届；历史批次数量不回写。

## 2026-09-14：EOSAM 2026 欧洲综合光学年会

- [EOS 当届官网](https://www.europeanoptics.org/events/eos/eosam2026.html)与[会场页](https://www.europeanoptics.org/pages/events/eosam-2026/venue/)明确 8 月 24–28 日芬兰坦佩雷 Scandic Rosendahl，未沿用搜索 PDF 片段中混入的 Delft。正式会议增至 24 届。
- [重要日期](https://www.europeanoptics.org/pages/events/eosam-2026/about/important-dates.html)：普通投稿 4 月 28 日（原 4 月 14 日）、通知不晚于 6 月 5 日、早鸟及普通报告人注册 6 月 15 日、追加海报 7 月 15 日；均仅日期精度。追加海报注册不套用更早的普通报告人截止。
- [投稿指南](https://www.europeanoptics.org/pages/events/eosam-2026/paper-submission/submission-guidelines.html)明确出版稿 2 页单栏、英文 PDF、170×250 mm 和事先选择出版意愿；模板总述 1–2 页与上传步骤 2 页存在口径差异，非出版一页稿保留待确认。录用、现场报告与论文集出版条件分开，Crossref 不等于 SCI/EI。
- [报告指南](https://www.europeanoptics.org/pages/events/eosam-2026/paper-submission/information-for-presenters.html)用于确认口头 12+3 分钟及 A0 竖版要求，但海报场次行仍写 2025，未复制具体日期。候选变为 107 已收录、156 待审核、3 暂缓，总数 266 不变。同步扩充计划英文摘要此前遗漏的活动数量。

## 2026-09-14：AIP 两刊作者指南补充

- [APL Photonics About](https://pubs.aip.org/aip/app/pages/about)及[APR About](https://pubs.aip.org/aip/apr/pages/about)可读取，现有 JCR 2026 分区与网页一致，但未见明确 SCIE/EI 索引清单。未以影响因子或 Scopus 指标推断索引，索引记录和整刊 checkedAt 保持原值。
- [AIP 作者指南](https://publishing.aip.org/resources/researchers/author-instructions/)核实初投正文 PDF、单独补充 PDF、图表 alt text 及声明；APP 除 Letters 和 Comments 外使用章节标题。补入相关期刊要求。
- APR 专属段明确原创研究需 cover letter，但夹有 CPR/chemical physics 字样；保留明确的知识缺口、新颖性、意义和作者相关工作要求，并提示选题范围以 APR About 为准。未把通用页文字错误解释为本刊范围变更，也未复制其他 AIP 期刊篇幅规则。

## 2026-09-14：Light: Advanced Manufacturing 的 ESCI 索引

- [LAM 官方公告](https://www.light-am.com/news/index_tabliod_en/ba599c15-15da-47e9-81aa-81ae2d0e146d_en.htm)已直接读取，正文及现页索引栏均明确 ESCI；新增出版社证据，ESCI 肯定记录由 7 本增至 8 本。SCIE/EI 待核验记录保持独立。
- 公告将追溯起点写为第 1 卷第 1 期，但年份用 after 2020 表述；不自行决定纳入或排除 2020，coverageStart 留空并记录原因。未核实数据库实际覆盖，未更新整刊 checkedAt 或分区。
- Ultrafast Science 索引页仍直连 403，官方检索快照与已有 EI/ESCI 记录一致，本轮不重复修改。HPL 与 IJEM 未取得足够新增索引证据，不改其状态。

## 2026-09-14：临近截止与 FiO 历史通知补齐

- [FiO 作者时间表](https://www.frontiersinoptics.com/submissions/author-timeline)仍列 PDP 通知 9 月 18 日；补入原目录缺少的普通论文及海报录用通知 7 月 3 日，仅日期精度，保留历史。
- [Laser Congress 征稿页](https://www.optica.org/events/congress/laser_congress/submit_papers/)仍列 PDP 截止 9 月 22 日 12:00 EDT，与现有数据一致。35 词摘要、2 页 summary、PDP 仅口头的要求未变；本轮未复核注册或全条目，不刷新整条 checkedAt。

## 2026-09-14：Nature Nanotechnology 研究范围样例

- [量子点红外雪崩探测器](https://www.nature.com/articles/s41565-024-01831-x)：2024-12-18 首次上线，20 卷 237–245 页、2025 年 2 月刊。直连跳转失败，依据官方检索返回的题名、摘要和出版信息；未声称阅读全文。
- [外延钙钛矿 micro-LED 显示](https://www.nature.com/articles/s41565-024-01841-9)：2025-01-15 上线，20 卷 381–387 页、3 月刊。官方页面摘要及 About this article 可读。
- [电光超表面自由空间调制器](https://www.nature.com/articles/s41565-025-02000-4)：2025-09-10 上线，20 卷 1625–1632 页、11 月刊。官方文章信息可读，摘要确认器件及应用方向。
- 三篇用于说明纳米材料/器件与光学的选题关联，不能据此保证投稿录用或代表全部光学方向。目录与索引数量不变，整刊 checkedAt 不刷新。

## 2026-09-14：IRMMW-THz 2026 当届核验

- [学会当届主页](https://www.irmmw-thz.org/conference/)与[会场页](https://www.irmmw-thz.org/venue/)确认 10/11–16、盐湖城犹他大学校友楼；未采用第三方旧截止。
- [重要日期](https://www.irmmw-thz.org/key-dates/)区分普通摘要 5/1、通知 7/6、Late News 8/15。仅保存日期精度；签证预审和提前通知属于特殊通道，未混入普通截止。
- [投稿指南](https://www.irmmw-thz.org/abstract-submission/)确认模板、PDF eXpress、Whova、两页终稿及原 paper ID；正文将终稿资格限于 5/1 前投稿且录用者，因此没有对晚新闻稿保证出版。
- [注册规则](https://www.irmmw-thz.org/register/)明确后续费率、每位注册者最多三篇及现场报告归档条件；不把 Key dates 的 8/15 当作所有人的最终注册截止，不从 IEEE Xplore 推断 EI。

## 2026-09-14：ICOLS XXVII 与 ICO-27 预告

- [ICOLS 2027 官网](https://icols2027.com/)直接读取，确认 2027-07-12 至 07-16、K’gari 的 Kingfisher Bay Resort。页面明确摘要、注册和完整日程待公布；只开放意向登记，故 registration 留空，submissionState 为 unknown。未读取模板或声称已核实出版。
- [中国光学学会主办权公告](https://www.cncos.org.cn/Content/view/id/1851.html)直接读取，确认 ICO-27 为 2027-08-22 至 08-26、北京。公告发布日期 2024-10-29，与本轮读取日期分开说明；不将其当作 CFP。具体场馆、投稿、注册及出版保留待核验。
- ICOLS 的相同缩写搜索结果包含其他会议，ICO 也有眼科学等同名组织，均未混入本系列。正式会议由 25 增至 27，候选数量不变，仅同步两项收录关联。

## 2026-09-14：ACS 三刊现行作者指南

- [ACS Photonics](https://researcher-resources.acs.org/publish/author_guidelines?coden=apchd5)现行 HTML 标注 2026-08-27，核实 Articles/Letters/Reviews/Perspectives/Roadmaps 长度与邀稿要求、预印本披露；更新 guide 入口。未套用搜索中的旧版 checklist 摘要规则。
- [Nano Letters](https://researcher-resources.acs.org/publish/author_guidelines?coden=nalefd)现行 HTML 标注 2026-08-27，核实通信稿长度、连续行文、补充材料、投稿信和邀稿稿型。
- [ACS Sensors](https://researcher-resources.acs.org/publish/author_guidelines?coden=ascefj)核实分析验证、摘要结构、投稿材料和综述要求；清单 <8/<4 页与稿型段建议 8/4 页不完全相同，显式保留差异，未误写为投稿 Word 文件页数。
- 三刊来源均直接读取；仅变更 requirements 和一项 guide，不刷新整刊 checkedAt，也不由作者指南推断当前 SCIE/EI 或分区。

## 2026-09-14：InfoMat 与 Neurophotonics 索引证据

- [Wiley InfoMat Overview](https://onlinelibrary.wiley.com/page/journal/25673165/homepage/overview)直接读取，ISSN 2567-3165 与目录一致，Indexing Information 明列 Science Citation Index Expanded；据此新增出版社肯定记录。未列 Compendex 不作为未收录证明，EI 继续待核验。页面创刊前三年免费属于历史优惠，未复制为当前费用。
- [SfNIRS 的 Neurophotonics 页面](https://fnirs.org/resources/neurophotonics/)直接读取，确认合作学会将其作为官方期刊，声明 SCIE 与 Ei Compendex。不过索引段无日期，页面混有 2019 发文和 2022 指标，故仅保存 secondary 线索，当前索引仍 unverified；未冒充 SPIE 出版社直接声明，旧 APC 亦未采用。
- 本批未核实整刊内容或分区，仅更新相应索引字段；整体 checkedAt 保持原值。

## 2026-09-14：OFS30 官方资料

- [首页](https://ofs30.org/)与[会场页](https://ofs30.org/venue-location/)确认 11/30–12/4、美国罗利会议中心；NC State Continuing and Lifelong Education 管理会议。
- [普通投稿页](https://ofs30.org/submission-information/)确认 35 词摘要、4 页全文、匿名审稿版、IOP 模板、Morressier、7/2 延期及 11/22 报告人注册。通知为 8 月上旬，保留日期未知。
- [PDP 页](https://ofs30.org/post-deadline-papers/)仍有 TBD 与邮箱占位符，并称 SPIE 出版，与普通页 Journal of Physics 口径不同。没有宣称通道开放或统一出版渠道。
- 首页 before Sept. 15 未明确包含哪一天及截止时区，早鸟截止留空并保留原意；未把首页 CFP coming soon 当成普通征稿尚未公布。

## 2026-09-15：EWOFS 2027 候选入口

- [首页](https://www.ewofs2027.org/)直接读取，第九届、阿威罗、2027-09-07 至 09-10 已预告。
- [重要日期](https://www.ewofs2027.org/abstracts/important-dates)仍为 Available soon；[投稿指南](https://www.ewofs2027.org/abstracts/submission-guidelines)和[会场](https://www.ewofs2027.org/venue)返回开发登录页，未尝试登录。委员会读取失败，出版未核实。
- 保存候选官方入口、当前已知信息和下一步核验条件，暂不新增正式会议。候选与正式目录数量不变。

## 2026-09-15：WSOF 2027 当届预告

- [官网](https://www.wsof2027.org/)和[General Information](https://www.wsof2027.org/index.php/general-information/)直接读取，确认第九届、2027-09-26 至 09-30、耶拿 Volkshaus 会场，Leibniz IPHT 团队与研究方向。主办地址和实际会场分别辨认。
- [摘要页](https://www.wsof2027.org/index.php/abstracts/)说明短报告/海报及 2027 年春季开放；[时间表](https://www.wsof2027.org/index.php/important-dates/)注册亦仅给季节。未填具体日，不将登录框当成投稿已开放。出版、篇幅及截止未核实，明确留空。

## 2026-09-15：两刊综述提案与材料

- [ACS Nano 作者指南](https://researcher-resources.acs.org/publish/author_guidelines?coden=ancac3)直接读取，核实非邀稿 Review/Perspective 先提案、1–2 页内容清单，以及研究稿引言、摘要、关键词和章节要求。提案近期综述比较一项原文存在未完句，未自行补写其要求。
- [Chemical Reviews 作者指南](https://researcher-resources.acs.org/publish/author_guidelines?coden=chreay)直接读取，核实官方模板、提案总计最多 5 页/提纲 2–3 页、至少 5 名推荐审稿人及 Focus Review 出版页限制。没有把编辑常见处理时间作为时限承诺。
- 仅补 requirements；未全量核验期刊，不刷新 checkedAt，不修改索引、分区或费用。

## 2026-09-15：CIOP 2026 会后官方证据

- [东南大学 PICAS 团队记录](https://www.seu-picas.com/team_activities/107.html)直接读取，确认 7/24–27、南京国际青年会议酒店、三方主办和 18 专题；7/25 是开幕日。团队域名可由[东南大学教师页](https://electronic.seu.edu.cn/lt/list.htm)核对，后者本轮通过官方搜索返回。
- [南京大学团队动态](https://quantum.nju.edu.cn/44880/list.htm)官方检索返回参会记录，交叉支持会期。
- ciop.com.cn 仍读取失败，[Researching 当届入口](https://www.researching.cn/conference/CIOP2026)返回 502。第三方转载有摘要字数和不同注册日期，本批不采作核实值；会后记录不能支持投稿规则或索引保证。

## 2026-09-15：OFS-China 2026

- [学会当届主页](https://b2b.csoe.org.cn/meeting/ofsc2026.html)直接读取，会期 10/22–25、最终投稿 9/15、早鸟 9/22，论文集英文摘要 500–600 词、仅交流中文摘要 400–500 字及全文投稿通道已区分。
- [学会会议检索](https://b2b.csoe.org.cn/mobile/meeting/search.php?areaid=0&catid=8&elite=1)官方搜索返回宁波市；具体会场不由主办单位所在地推定，仍待查。注册页返回 403，未声称完成平台验证。
- 只记录日期精度；通知相对时限不换算为具体日。期刊推荐不等于录用，会议页支持期刊的索引标签不用于改写期刊目录。

## 2026-09-15：Inorganic Chemistry 作者指南

- [现行指南](https://researcher-resources.acs.org/publish/author_guidelines?coden=inocaj)直接读取，页面标注更新 2026-08-27。核实 Articles 无固定长度、Communications 2200 词及计数范围、摘要 200 词、TOC 图和实验支持材料。
- 核实 Reviews 邀稿/可先提案与 10000 词上限、Viewpoints 5–10 出版页；未将可提案描述为可直接提交非邀稿综述。预印本须披露、链接、正文引用；审理期间“不鼓励更新”未写成禁止。
- 仅更新投稿要求，不刷新整刊 checkedAt；具体表征规则仍按研究对象查 Data Requirements，索引与分区不由指南推断。

## 2026-09-15：QCMC 候选核验

- [永久官网](https://www.qcmc-conference.org/)直接读取：系列始于 1990 年，下一届明确为 2027，范围包含量子通信、计量、计算、网络及信息理论。
- [征稿页](https://www.qcmc-conference.org/call-abstracts.html)尚未发布当届征稿；[新闻页](https://www.qcmc-conference.org/news)仍有通常偶数年举办的旧描述，不用周期推导出 2026 届次或具体日期。
- 修正候选原有 QIP 文本，保存稳定入口和身份边界；同名近似缩写 ICQCMC、QCNC 搜索结果不作为本系列当届依据。状态保持 pending，不新增会议数量。

## 2026-09-15：ICORS 2026

- [正式日程](https://icors2026.org/scientific-programme/)直接读取，8/23 开幕、8/27 闭幕；与[现行首页](https://icors2026.org/)一致。旧 General Information、学校预告和出版社专刊简介的 8/28 不覆盖实际日程，差异保留在条目。
- [场馆](https://icors2026.org/venue/)确认 ITU SDKM Ayazağa 校区；[摘要规则](https://icors2026.org/abstract-submission/)明确 350 词、AbstractAgent、英文和竖版海报要求。与[注册页](https://icors2026.org/registration/)的报告数量口径不一致，未自行合并为额外资格。
- [JRS 专刊](https://analyticalsciencejournals.onlinelibrary.wiley.com/hub/journal/10974555/call-for-papers/si-2026-000428)直接读取，截止 2027-02-01；会后期刊稿独立评审，不作为会议摘要截止，不推断 SCI/EI 保证。未将残留投稿按钮认作仍开放。

## 2026-09-15：Nature Photonics 投稿要求

- [现行指南](https://www.nature.com/nphoton/submission-guidelines)及[稿型页](https://www.nature.com/nphoton/content)直接读取，补 Article 3000 词/200 词摘要/6 图表、章节与指导性参考文献数；Review/Perspective 另列适用限制。
- [初投格式](https://www.nature.com/nphoton/submission-guidelines/initial-formatting)确认无需特定套版、TeX 提交编译 PDF；[投稿前咨询](https://www.nature.com/nphoton/submission-guidelines/presubmission-enquiries)明确不接受。News & Views 的选题提议不推广为普通研究稿咨询通道。
- 原 for-authors 读取失败，guide 改为已验证入口。仅核验投稿字段，整刊 checkedAt、索引、分区和费用保持原值。

## 2026-09-15：UFO 系列候选

- 官方域名 [About](https://ufo2025.fc.up.pt/about/)、[委员会](https://ufo2025.fc.up.pt/committee/)和[最终日程公告](https://ufo2025.fc.up.pt/news/post-04/)的检索结果确认正式名称 Ultrafast Optics、第十四届、2025-10-05 至 10-10、Furnas 与组织团队；本轮主页和日程 PDF 直接读取失败，证据方式明确为官方检索返回。
- [新闻](https://ufo2025.fc.up.pt/news/)中延期通知写 2025-04-16 23:59:59 CET，未擅改成 CEST。未查得可验证的下一届通知，不根据周期造出 2027 会期，也不将 USQS/Ultrafast Phenomena 合并。候选继续 pending，正式目录数量不变。

## 2026-09-15：USQS 2027

- [中文首页](https://www.usqs.com.cn/)与[英文首页](https://www.usqs.com.cn/en/)直接读取，确认第四届、2027-01-17 至 01-22、三亚崖州湾科技城创新研学谷和主办单位。投稿截止 2026-12-31 仅日期精度。
- [英文投稿页](https://www.usqs.com.cn/en/h-col-126.html)直接读取，2027 模板名、PDF、英文题目摘要、照片和 1.2 m × 0.9 m 海报明确；模板内部未读取，不虚构篇幅限制。中文投稿入口本轮 cache miss。
- [英文注册页](https://www.usqs.com.cn/en/h-col-122.html)仍为 USQS2026，旧付款图片和退款日期不能支持本届费用；中文注册页 cache miss。保留注册未知，未提交任何表单。合作期刊待招募，不能推定正式出版或索引。

## 2026-09-15：USQS 2027 模板内部核验

- 从[官方投稿页](https://www.usqs.com.cn/en/h-col-126.html)的下载链接获取 USQS2027_Submission_Form.docx 到临时目录，只读提取 OOXML 段落及表格文字。文件标题标明 USQS 2027；英文序数原文为 4rd，目录仍使用官网正文确认的第四届。
- 模板明确照片放在 Speaker’s Biography 之后，补中英文姓名、单位、专题、邮箱、电话字段。Full Paper / Abstract 栏未写明篇幅限制，不将预留空白推断为页数上限，也不认定必须全文。未创建或修改官方 DOCX，仅更新目录的事实说明。

## 2026-09-15：PhotoniX 投稿与费用

- [官方指南](https://link.springer.com/journal/43074/submission-guidelines)直接读取，核实作者提交、可编辑格式、双倍行距、行页号、图题 15 词/图注 300 词和单图 10 MB。
- [Research 细则](https://link.springer.com/journal/43074/submission-guidelines/research)核实摘要无引文、3–10 关键词、章节可合并/调整及 Declarations；不将未公开数据等同于无需可用性声明。
- 同一指南当前 APC 为 GBP 1850 / USD 2317 / EUR 2050，录用日期定价，适用税费另计；酌情减免须投稿时申请。费用文本带核验日期，未承诺个人减免资格。只更新 requirements/publishing，整刊日期、索引分区不变。

## 2026-09-15：eLight 分稿型说明

- [官方总指南](https://link.springer.com/journal/43593/submission-guidelines)直接读取，核实可编辑文件、图件规格、当前常规 APC 与仅邀稿 Commentary 的独立价格。费用以录用日定价并可能另加税费，酌情减免须投稿时申请。
- [Letter](https://link.springer.com/journal/43593/submission-guidelines/letter)直接读取，摘要 150–250 词、关键词 3–10 个、正文分节和 Declarations 已补齐。该摘要限制未外推到其他稿型。
- 只更新 requirements/publishing，保留原索引、分区与整刊核验日期。其他稿型细则及数据库覆盖仍需后续逐项核验。

## 2026-09-15：CLEO/Europe–EQEC 2027

- [官网首页](https://www.cleoeurope.org/)直接读取，明确两处 2027-06-21 至 06-25 预告及再次相聚慕尼黑；只采当届预告，不把 2025 页眉或讲者名单当作 2027。
- [截止页](https://www.cleoeurope.org/deadlines/)直接读取仍为 2025，[征稿页](https://www.cleoeurope.org/submission/)官方检索亦标 2025。当届投稿、注册、具体场馆及出版保留未知；IEEE/Optica 出版说明属于上届会后总结。

## 2026-09-15：CLEO-PR 2026

- [官方域名](https://cleopr2026.org.cn/)直接返回指向[百格当届站](https://www.bagevent.com/event/9077151)的链接，确认 8/2–6、北京国际会议中心及主办方；学会[会后报道](https://cncos.org.cn/Content/view/id/2068.html)官方检索支持，直接读取 cache miss。
- [投稿指南](https://www.bagevent.com/event/9077151/p/566129)直接读取，核实 35 词/2 页、PDF eXpress 70283X、6/26 终稿及版权条件；Optica 现场报告与 IEEE 选择出版通道分别记录。
- [注册公告](https://www.cncos.org.cn/Content/view/id/2043.html)官方检索返回优惠截止 7/8；只存日期，不补时刻。学会 EI 声明作为主办方说法注明，未核实实际数据库条目，不视为保证。

## 2026-09-15：维护复核与 HPL 刊号

- 重新生成本地维护队列，331 项为字段任务而非会议数量；[OFS-China 官方页](https://b2b.csoe.org.cn/meeting/ofsc2026.html)直接读取仍为 9/15 最终投稿，与目录一致，未发现可据以延长截止的公告。
- Cambridge [期刊介绍](https://www.cambridge.org/core/journals/high-power-laser-science-and-engineering/information/about-this-journal)及[主页](https://www.cambridge.org/core/journals/high-power-laser-science-and-engineering)官方检索返回明确 Print 2095-4719、Online 2052-3289；补 HPL 两个刊号。仅核实刊号，不由 ISSN 存在推定 SCIE/EI，也不刷新整刊 checkedAt。

## 2026-09-15：HPL 历史索引证据

- [上海光机所 2017 公告](https://siom.cas.cn/xwzx/tpxw/201704/t20170414_4776092.html)直接读取，确认其当时宣布 SCIE 收录并追溯创刊论文。主办机构消息按非数据库证据保存，状态仍 unverified，不以历史公告证明当前覆盖。
- [Cambridge 索引页](https://www.cambridge.org/core/journals/high-power-laser-science-and-engineering/information/about-this-journal/abstracting-and-indexing)直接读取只有栏目标题，没有可见索引清单；未解读为未收录，也未据此确认 SCIE/EI。未填覆盖起止年，未修改分区及整刊日期。

## 2026-09-30：恢复检查与临近会议批次 B

- 阅读 RESUME、ROADMAP、最新日志及维护/数据/候选规则；工作区干净，`main` 与远端均为 `7b3e27c`。交接提交 [Pages 34964248809](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/34964248809)已成功。[今日来源巡检 36680522616](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/36680522616)成功生成附件，但其中仍有 32 个变化、72 个访问受限、7 个抓取异常、4 个 HTTP 错误；工作流成功不代表全部来源可访问。附件下载至忽略的 `work/source-20260930/`。本地报告初始为 325 项字段任务、269 项候选。未恢复或新建 Codex 自动化。
- [OMTA 移动页](https://b2b.csoe.org.cn/mobile/meeting/OMTA2026.html)与[桌面页](https://b2b.csoe.org.cn/meeting/OMTA2026.html)正文一致：会期由 10/30–11/1 改为 **10/29–31**；保留 9/30 第二轮，新增 **10/15 最终轮投稿**，提前缴费优惠改为 **10/15（含）**。投稿类型仍分英文摘要、中文全文与仅交流摘要；场馆、英文全文截止和系统实际开放未核实，不刷新整条 checkedAt。
- 浏览器直接读取 [Photonics West 当届指南](https://spie.org/conferences-and-exhibitions/photonics-west/presenters/abstract-submission-guidelines)，重要日期表将幻灯片提前上传截止列为 **2027-01-27**，替换原 1/29。10/12 通知、1/6 海报、1/13 全文与 11/30 上传开启保持一致；注册仍只给 2026 年 10 月，未补造某一天。只修改已变化的日期和相关说明。
- [ACP 首页](https://www.acpconf.com/)早鸟仍为 9/30；[现行 PDP 页](https://www.acpconf.com/news/post-deadline)明确 10/15 23:59 北京时间、3 页、完整/匿名双版本及 PDF eXpress 70761X，补双版本和编号，更新 PDP 来源入口。注册入口进入登录页，未登录或提交。
- [IPC 注册页](https://ieee-ipc.org/attendees/registration/)仍为 10/8 之前优惠，保持日期边界说明；[IRMMW-THz 注册页](https://www.irmmw-thz.org/register/)仍为 9/30 结束 Late fee、10/1 起现场费率；[OPTIC 征稿页](https://optic2026.conf.tw/site/page.aspx?lang=en&pid=577&sid=1696)及[投稿指南](https://optic2026.conf.tw/site/page.aspx?lang=en&pid=16&sid=1696)仍为 Poster-Only 9/14–30、10/9 前通知，未给海报截止时刻。无新事实的条目不修改 JSON 或刷新日期。[FiO 时间表](https://www.frontiersinoptics.com/submissions/author-timeline)仍为 9/27–10/1 技术会议及已过的 9/9 PDP、9/18 PDP 通知。
- [NDTA 桌面页](https://b2b.csoe.org.cn/meeting/NDTA2026.html) Hotel & Travel 已列苏州宝带桥国际大酒店、吴中区太湖东路 1 号，更新候选范围与下一步。中英文投稿段仍分别为 300–500 / 500–600 词，继续 deferred，待统一规则；未将 9/30 第二轮当作后续未来截止。移动页本轮读取失败，不据此宣称失效。
- 正式数量保持 74 本期刊、35 届会议、9 项活动；候选保持 118 admitted / 148 pending / 3 deferred。[OFS-China 页首](https://b2b.csoe.org.cn/meeting/ofsc2026.html)仍列 9/15 最终投稿，未发现延长依据；9/22 早鸟及 Laser Congress 9/22 PDP 不恢复为未来提醒。[Laser Congress 现页](https://www.optica.org/events/congress/laser_congress/submit_papers/)仍列 10/11–15 会期、35 词/2 页规则，但正文提取未保留 PDP 日期，不据此更改历史截止或刷新全条目。
- 发布前通过数据校验、26 项测试、typecheck、lint、Pages 子路径构建及静态资源验证、`git diff --check`。首次受限 Windows 构建在退出阶段报错，获得环境执行授权后的完整重试成功；未修改构建代码。

## 2026-09-30：Compendex 数据库方证据批次 A1（12 本）

- 上批提交 `1515ec6` 的 [Pages 36704905503](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/36704905503) build 与 deploy 均成功；线上首页 HTTP 200 并含修改后的日期。首次线上 catalog-version 请求超时，未将空响应解释为版本不一致，也未重做提交。
- 从 [Elsevier 官方 Compendex 产品页](https://www.elsevier.com/products/engineering-village/databases/compendex)的 View source list 下载当前链接的 `COMPENDEX_Source-list-082026.xlsx`，只读检查 SERIALS（2026-08-07）与 DISCONTINUED（2026-05-01），保留下载摘要和逐刊行号，详见 [证据记录](INDEX_EVIDENCE_2026-09-30.md)。各表版本不同，核验日与源版本分别保存；不由文件名或更新日推断覆盖起点。
- 12 本按印刷/电子 ISSN 任一精确匹配并核对刊名、Journal 类型和出版社：HPL、Laser & Photonics Reviews、ACS Photonics、ACS Nano、ACS Sensors、Nano Letters、Chemical Reviews、Inorganic Chemistry、APL Photonics、Applied Physics Reviews、Optica、Optics Express。SERIALS 均有唯一记录，DISCONTINUED 无匹配，EI 由 unverified 改为 confirmed / database。Optica/OE 的清单刊号列位置与目录类型不同，仅匹配身份，不改写刊号类型。
- evidence=database 表示数据库方公开来源表依据，未登录 Engineering Village 或逐篇搜索；每个 note 明确方式、版本和行号，起止年继续 null。SCIE、ESCI、JCR/CAS、整刊日期、指南和费用未改，特别是 HPL 的 SCIE 历史线索不随 EI 升级。Wiley LPR 现页仍支持已有 SCIE 声明，不为无变化重复刷新日期。
- EI 肯定记录增至 35/74，其中 12 本为数据库方来源表；SCIE 18、ESCI 8、JCR 61、中科院 10 不变。正式目录与候选数量不变；下一批可复用同一公开版本核对核心光学和中文 EI，其他当前子库及分区仍待独立核验。
- 发布前通过数据校验、26 项测试、typecheck、lint、Pages 子路径构建/静态资源验证与差异检查；维护队列为 314 项字段任务。新证据页保存 12 本行号与来源版本，未提交整份来源表。

## 2026-09-30：Compendex 核心光学与中文 EI 批次 A2（12 本）

- 上批提交 `f77161d` 的 [Pages 36705869178](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/36705869178) build/deploy 均成功。Node 请求线上 catalog-version.json 返回 HTTP 200，版本为 `75df70c8b786a430d27e7b8ceed6152bbdab590398c0963c39f3b51f2a40cd09`；此前 PowerShell 超时为访问问题，不重新提交同批数据。
- 复用 [Elsevier 官网链接来源表](https://www.elsevier.com/products/engineering-village/databases/compendex)，另核对中文表版本 2026-07-10；SERIALS 与 DISCONTINUED 仍分别为 2026-08-07 / 2026-05-01。12 本身份、行号与状态追加至 [证据页 A2](INDEX_EVIDENCE_2026-09-30.md)。表格只读，不保存或修改原表。
- 新增七本 EI 肯定记录：Advances in Optics and Photonics、Photonics Research、Journal of Lightwave Technology、Journal of Optical Communications and Networking、Optics Letters、Biomedical Optics Express、Optical Materials Express。SERIALS 唯一刊号匹配、Journal 类型及英文刊名核对通过，停收表无匹配。
- 中国激光、光学学报、激光与光电子学进展、中国光学（中英文）、红外与激光工程已有 EI 肯定值，升级 evidence 为 database，未增加重复计数。中文表按刊号/中文名/英文或音译名对应，五本均列 2026 Renewed。中国光学使用现刊号 2097-1842；Photonics Research 刊号类型列位置差异不用于改写目录。
- 累计 EI 42/74、数据库方来源表 24/74；SCIE 18、ESCI 8、JCR 61、中科院 10 不变。coverageStart/End 未推断，其他索引及整刊日期未改。候选与正式目录数量不变；核心刊 SCIE 和分区、其他 EI 来源记录、指南/样例及会议候选继续开放。
- 发布前通过数据校验、26 项测试、typecheck、lint、Pages 子路径构建与静态资源验证、`git diff --check`；维护队列为 302 项字段任务，覆盖报告仍为 12 个主题、269 项候选。逐批提交推送，部署按对应 SHA 再确认。

## 2026-09-30：Clarivate SCIE 批次 A3（12 本）

- 恢复检查：main 与 origin/main 均为 22cf6ed、工作区干净；[上一批 Pages 36707140446](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/36707140446)成功，线上 catalog-version 与本地 4f423d… 相同。本地维护报告 302 项字段任务、覆盖报告 12 主题/269 候选。旧自动化保持暂停。
- Cambridge HPL 索引正文仍没有可见清单；Optica 当届指标表及 PR 介绍只说明 JCR/影响因子，不据此确认 SCIE。改用 [Clarivate MJL 官方搜索](https://mjl.clarivate.com/home)，浏览器按 ISSN 查询十二本，逐一核对唯一 Exact Match、刊名/刊号及结果卡 Core Collection 中的 Science Citation Index Expanded。未登录 profile、未做单篇检索；各记录来源为可按刊号重现的查询入口。
- HPL、AOP、Optica、PR、JLT、JOCN、OE、OL、BOE、OME、APL Photonics、Applied Physics Reviews 的 SCIE 由 unverified 改为 confirmed / database，checkedAt 仅该字段设为 2026-09-30；当前肯定记录 30/74，SCIE 数据库查询依据 12 本。匹配表及查询方式见 [证据页 A3](INDEX_EVIDENCE_2026-09-30.md)。HPL 2017 历史声明仍保留在原日志，不把历史覆盖作为当前起点。
- EI 42/74（数据库方来源表 24 本）、ESCI 8、JCR 61、中科院 10 不变；期刊 74、会议 35、活动 9，候选状态与数量不变。覆盖起止年和整刊日期不改。
- 发布前通过数据校验、26 项测试、typecheck、lint、Pages 子路径构建与六个入口资源验证；差异核对仅十二本 SCIE 字段变化，EI 和其他期刊信息无变化。维护队列为 290 项字段任务；差异检查通过。

## 2026-09-30：Clarivate SCIE 批次 A4（12 本）

- A3 提交 3a71eb8 的 [Pages 36713812373](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/36713812373) build/deploy 均成功，线上版本 9dae79… 与本地一致。构建完成但部署排队时仍返回上一批版本，仅等待原部署再查，不重做提交。
- 在 [MJL 官方界面](https://mjl.clarivate.com/home)按目录刊号逐一核对 ACS Photonics、ACS Nano、ACS Sensors、Nano Letters、Chemical Reviews、Inorganic Chemistry、LPR、Nature Photonics、Nature Electronics、Nature Materials、Nature Nanotechnology、Nature Communications 的唯一 Exact Match 及结果卡 SCIE。来源与结果刊号追加至 [A4 证据页](INDEX_EVIDENCE_2026-09-30.md)。
- ACS 六刊与 Nature 五刊新增 confirmed / database；LPR 保持 confirmed，evidence 由 publisher 改为 database。SCIE 肯定记录 30→41，当前 MJL 查询依据 12→24。本批不修改 EI、ESCI、分区、指南、样例或整刊日期，不推断覆盖年份。正式目录和候选数量不变。
- 发布前通过数据校验、26 项测试、typecheck、lint、Pages 子路径构建与静态资源验证；逐项差异核对仅十二本 SCIE 字段变化，`git diff --check` 通过。维护队列 278 项字段任务，覆盖报告 12 主题/269 候选。

## 2026-09-30：会议覆盖批次 C1（六个系列）

- A4 提交 c9c2516 的 [Pages 36714730230](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/36714730230) build/deploy 均成功；线上 catalog-version 返回 HTTP 200，`5be94a24e02c30d362d9ef7793f3d084026496f49dbcbb6dd21aaf5729b37c7d` 与本地一致，再开始本批数据修改。
- 通过 SPIE 官方浏览器正文核对 Advanced Lithography + Patterning 2027、Medical Imaging 2027、Optical Metrology 2027、Astronomical Telescopes + Instrumentation 2028 的当届身份、城市和会期。前两会补摘要、评审补充材料与出版材料分别适用的规则及日期；普通摘要截止已过，不据首页征稿文案声称仍开放。后两会为明确的未来预告，投稿/注册未知；不挪用页面残留的 2025/2026 资料。
- OPIC 2027 母会官方检索快照确认横滨 PACIFICO、2027-04-19–23 和十五个专题及主要日程；主站直接读取与浏览器导航超时，数据与[证据页](CONFERENCE_EVIDENCE_2026-09-30.md)均注明。东京大学 ICNNQ 官方正文交叉支持母子关系、投稿 10/20 计划开启、12/11 截止和 1/20 注册计划开启；稿型、模板、系统实际可用性与出版继续待核实。按一个母会计数，不重复创建十五条子会。
- APOS 官网确认第 11 届 APOS 包含第 7 届 IWPFA、悉尼新南威尔士大学；可读正文未列举办起止日，征稿 PDF 读取超时，继续 pending。不用 2025 投稿/注册日期推算会期，不将期刊专刊截止混作会议 DDL。
- 正式目录为 74 本期刊、40 届会议、9 项展会/论坛；269 项候选为 123 admitted、143 pending、3 deferred，五个新正式 ID 已回链候选。原有 35 届会议及其他正式数据未改，差异审核确认仅新增五届、更新六个候选和同步文档。未来预告带来未知字段，维护队列 278→300 项字段任务；覆盖仍为 12 主题/269 候选。
- 发布前通过数据校验、26 项测试、typecheck、lint、Pages 子路径构建与六个入口资源验证、`git diff --check`。仅有日期的截止不补时刻/时区；注册网址和未核实字段保持未知。剩余索引/分区、会议、指南与样例继续开放，旧 Codex 自动化保持暂停。

## 2026-10-02：部署收尾、定时续作与临近检查 B2

- main 与 origin/main 同为 5c8b8cb、工作区干净；9/30 C1 的 [Pages 36717496113](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/36717496113)此前 build/deploy 成功，线上连接超时尚未验收。本轮首页与 catalog-version 均返回 HTTP 200，版本 `ea10274c7bf99ee05bb1c8d7bfbc0e557d746b935a1f48f9eb088dff862e06fe` 与本地一致，未重复提交 C1。
- 用户明确要求每五小时检查额度后重新开始，并持续推进直到额度受限。复用原 heartbeat `automation`，从 PAUSED 改为 ACTIVE，目标由旧对话改为当前对话；没有创建重复任务或改变其他项目自动化。初始实际额度为五小时 0% 已用、周额度 79% 已用，额度恢复只检查，不使用重置券或购买额度。此授权取代此前不自动恢复的限制；历史暂停记录保留。
- 读取 [10/2 来源巡检 36976757481](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/36976757481)的 source-report 附件：339 个来源，27 changed、195 unchanged、33 reachable-nontext、70 access-limited、7 fetch-error、6 http-error、1 timeout。变化指纹不直接改写学术事实；27 处仍需按实际字段复核。重新生成维护队列 297 项、覆盖报告 12 主题/269 候选。
- [ACP PDP 页](https://www.acpconf.com/news/post-deadline)仍为 10/15 23:59 北京时间，[IPC 注册](https://ieee-ipc.org/attendees/registration/)仍为 Before 8 October，[OMTA](https://b2b.csoe.org.cn/mobile/meeting/OMTA2026.html)仍为 10/29–31 会期、10/15 最终轮及含当日优惠支付，[OPTIC 投稿指南](https://www.conf.tw/site/page.aspx?lang=en&pid=16&sid=1696)仍为 10/9 前通知与已过的 9/30 Poster-Only；本批不刷新无变化字段或整条日期。IPC 酒店页只确认参会房间预订，不由酒店推断论文会场。
- 在官方浏览器核对 [Photonics West 指南](https://spie.org/conferences-and-exhibitions/photonics-west/presenters/abstract-submission-guidelines)，通知及材料日期与现目录一致；点击 Register 后到达 [PW27 官方注册入口](https://spie.org/registration/online/PW27)，正文明确当届注册并提示登录或创建账号。补 registration 链接及本轮核验范围；未登录、未核对费用或注册截止，不把入口可达作为完成注册或所有稿件仍可提交的证据。维护队列降为 296 项，正式数量及候选状态不变。
- 发布前数据校验、26 项测试、typecheck、lint、Pages 子路径构建与六个入口资源检查均通过；差异仅 PW27 registration/notes 和三份续接记录，`git diff --check` 通过。后续按对应提交 SHA 验收部署。

## 2026-10-02：Clarivate 索引批次 A5（12 本）

- B2 提交 bb22892 的 [Pages 37007435125](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37007435125) build/deploy 均成功，线上首页及 catalog-version HTTP 200，版本 6a2a5c… 与本地一致后再修改本批数据。
- 在 [MJL 官方界面](https://mjl.clarivate.com/home)按刊号核对唯一 Exact Match、刊名和具体 Core Collection 子库。IEEE Communications Surveys & Tutorials、TIE、TCYB、TMI、TIP、TGRS，以及 Biosensors and Bioelectronics、IJEM、JBO、JCIS、Dyes and Pigments 共十一刊的结果卡明确列 SCIE；此前 unverified 升级为 confirmed / database。匹配刊号与来源见 [A5 证据页](INDEX_EVIDENCE_2026-10-02.md)。
- Frontiers of Optoelectronics 结果明确为 ESCI，已有肯定值保持，evidence 由 publisher 改为 database；其 SCIE 字段未改。SCIE 肯定记录 41→52、数据库依据 24→35；ESCI 肯定仍 8，其中数据库依据 1。EI 42（数据库 24）、JCR 61、中科院 10 不变，公开卡未给覆盖年，继续 null。
- 逐项审核确认仅十二本对应索引字段改变，其他索引、整刊日期、指南、费用、分区和样例未改；正式目录和候选数量不变。维护队列 296→284 项字段任务，覆盖报告仍为 12 主题/269 候选；未登录 profile 或做单篇检索。
- 发布前数据校验、26 项测试、typecheck、lint、Pages 子路径构建与静态入口资源检查均通过，`git diff --check` 通过。当前自动化设置保持用户授权的五小时续作。

## 2026-10-02：Clarivate 索引批次 A6（12 本）

- A5 提交 55afdd0 的 [Pages 37008171496](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37008171496) build/deploy 均成功，线上版本 a5398c… 与本地一致。随后才录入本批数据。
- 同一官方 MJL 方法核对十二本的唯一 Exact Match 和结果卡子库。OEA、PQE、PRX Quantum、Science Advances、Chinese Physics Letters、Sensors and Actuators B: Chemical、Science Bulletin、Proceedings of the IEEE、Neurophotonics、Photoacoustics 十条 SCIE 从 unverified 升级为 confirmed / database；Neurophotonics 原二手线索改为当前数据库依据。各查询刊号和结果刊号见 [A6 证据页](INDEX_EVIDENCE_2026-10-02.md)。
- APN 结果仅列 ESCI，新增独立 ESCI 记录；LAM 结果也为 ESCI，将已有 publisher 依据升级为 database。两刊 SCIE 字段继续未核实，不由影响因子或 ESCI 卡推断 SCIE。SCIE 肯定 52→62、数据库 35→45；ESCI 肯定 8→9、数据库 1→3。
- 逐项差异审核仅十条 SCIE、一条新增 ESCI 及一条 ESCI 证据改变，其他索引、指南、费用、分区、样例与整刊日期不变，覆盖年份仍 null。正式数量及候选状态不变，维护队列 284→273 项字段任务，覆盖报告仍 12 主题/269 候选。
- 发布前数据校验、26 项测试、typecheck、lint、Pages 子路径构建与六个入口资源检查均通过，`git diff --check` 通过。

## 2026-10-02：Clarivate 索引批次 A7（12 本）

- A6 提交 812da14 的 [Pages 37008821255](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37008821255) build/deploy 均成功，线上首页及版本 HTTP 200，版本 5b2a8b… 与本地一致后开始本批修改。
- 按官方 MJL 刊号方法核对 LSA、AP、AOM、Nanophotonics、PhotoniX、Photonic Sensors、eLight、Nano-Micro Letters、npj Quantum Materials、npj Quantum Information、Communications Physics、Science China Materials；十二本均唯一 Exact Match 并明确列 SCIE。对应来源与结果刊号见 [A7 证据页](INDEX_EVIDENCE_2026-10-02.md)。
- SCIE 肯定仍 62 本，十二条 publisher 升级为 database，数据库依据 45→57；ESCI 9（数据库 3）、EI 42（数据库 24）、JCR 61、中科院 10 不变。LSA 结果另有刊号，本批未改目录刊号。未登录 profile，未做单篇检索，覆盖年份仍未知。
- 逐项差异核对确认仅对应 SCIE 字段变化，其他索引、整刊日期、分区、指南、费用和样例不变，正式数量与候选状态不变。
- 发布前数据校验、26 项测试、typecheck、lint、Pages 子路径构建与六个入口资源检查均通过；维护队列 261 项字段任务，覆盖报告 12 主题/269 候选，`git diff --check` 通过。

## 2026-10-02：Clarivate 索引批次 A8（11 本）

- A7 提交 5df254f 的 [Pages 37009592247](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37009592247) build/deploy 均成功，线上首页及版本 HTTP 200，目录版本 2a7344… 与本地一致后开始修改。
- 按官方 MJL 实际结果核对 Advanced Materials、AFM、Advanced Science、InfoMat、Angewandte 的 SCIE，以及 OES、Ultrafast Science、中国激光、光学学报、激光与光电子学进展、中国光学的 ESCI。十一刊唯一 Exact Match、刊名/刊号身份和子库均已核对，来源见 [A8 证据页](INDEX_EVIDENCE_2026-10-02.md)。
- Angewandte 印刷刊号初查无结果，改用官方刊名搜索，再以结果显示的既有电子刊号 1521-3773 得到唯一匹配；没有将空结果当作停收。中国光学现刊号 2097-1842 匹配，不用历史刊号覆盖现刊。
- 五条 SCIE、六条 ESCI 由 publisher 升级为 database，肯定数量仍为 SCIE 62、ESCI 9，现全部有 MJL 结果依据。EI、分区、覆盖年份、指南、费用、样例、整刊日期和正式/候选数量均不变；未登录 profile 或做单篇检索。
- 发布前数据校验、26 项测试、typecheck、lint、Pages 子路径构建与六个入口资源检查通过；维护队列 250 项字段任务、覆盖 12 主题/269 候选，差异审核与 `git diff --check` 通过。

## 2026-10-02：索引批次 A9（12 本）

- A8 提交 11cce82 的 [Pages 37010047912](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37010047912) build/deploy 均成功，线上首页及版本 HTTP 200，版本 3e041b… 与本地一致。
- Optica Quantum 官网明确 ISSN 2837-6714，补身份字段；MJL 唯一 Exact Match 为 ESCI，新增独立记录，SCIE/EI 保留未知。光学 精密工程与红外与激光工程的刊号查询无结果、刊名查询未得对应卡片，不据此标停收。
- Elsevier 当前页面来源表链接与 9/30 相同；重新下载 SHA-256 和 SERIALS/停收/中文表的版本均相同。按刊号、刊名、Journal 类型、出版社核对 IEEE 六刊和 Proceedings of the IEEE、Biosensors and Bioelectronics、JBO、Neurophotonics、IJEM，十一刊 SERIALS 唯一匹配、DISCONTINUED 无匹配，新增 EI confirmed/database。具体行号见 [A9 证据页](INDEX_EVIDENCE_2026-10-02.md)。
- EI 肯定 42→53、数据库方依据 24→35；ESCI 9→10（均数据库）、SCIE 62 不变。仅更新对应索引和 Optica Quantum 刊号，覆盖年份、分区、指南、费用、样例、整刊日期及正式/候选数量不变。
- 发布前数据校验、26 项测试、typecheck、lint、Pages 子路径构建与六个入口资源检查通过；维护队列 238 项字段任务、覆盖 12 主题/269 候选，差异审核与 `git diff --check` 通过。

## 2026-10-02：Compendex 批次 A10（12 本）

- 前批提交 7f6b06c 的 [Pages 37010772497](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37010772497) build/deploy 均成功，线上首页与版本 HTTP 200，目录版本 6c76f134748b2a85ebaee4c1c1471bb9ecea17c743957a2981bf86b39a20464d 与本地一致后开始本批数据修改。
- 十二本光学与材料刊出版社 EI 依据复核逐刊核对来源表 SERIALS，刊号唯一匹配，刊名、Journal 类型和出版社身份相符；DISCONTINUED 无匹配，中文表有匹配的条目为 2026 Renewed。具体表版本与行号见 [A10 证据页](INDEX_EVIDENCE_2026-10-02.md)。
- 光学 精密工程的中文名、音译名和英文名由中文表第 313 行对应，身份同时获官网简介支持。LSA 的 and/&、其他连接符以及来源表列位置差异仅用于身份匹配，不改写目录刊号分类或出版社字段。七刊另有中文表 Renewed 记录，按刊号核对，并未将清单年解释为开始覆盖年。
- 新增 0 条肯定、升级 12 条出版社证据，当前 EI 53（数据库 47），SCIE 62、ESCI 10 均为数据库依据。逐项差异核对仅对应 EI 字段改变，覆盖年份、其他索引、分区、指南、费用、样例、整刊日期及正式/候选数量不变。
- 发布前数据校验、26 项测试、typecheck、lint、Pages 子路径构建与六个入口资源检查通过；维护队列 226 项、覆盖 12 主题/269 候选，`git diff --check` 通过。构建有单块压缩后超过 500 kB 的体积提示，静态输出及资源验证仍通过，未为此改动功能。

## 2026-10-02：Compendex 批次 A11（12 本）

- 前批提交 dff0b61 的 [Pages 37011152431](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37011152431) build/deploy 均成功，线上首页与版本 HTTP 200，目录版本 d6cfaaabcaad27b2ce259070025903e893d7d65be369e366f47be90c48728e52 与本地一致后开始本批数据修改。
- 量子、物理与材料十二刊 EI逐刊核对来源表 SERIALS，刊号唯一匹配，刊名、Journal 类型和出版社身份相符；DISCONTINUED 无匹配，中文表有匹配的条目为 2026 Renewed。具体表版本与行号见 [A11 证据页](INDEX_EVIDENCE_2026-10-02.md)。
- Ultrafast Science、npj Quantum Information、Communications Physics、Advanced Science、Angewandte 和 Science China Materials 的出版社 EI 依据升级为数据库方来源表；Nature Photonics、AOM、PQE、PRX Quantum、Nature Electronics、Nature Materials 新增 EI 肯定。AOM 旧出版社页没列 EI 不作为未收录结论。Science China Materials 另匹配中文表第 342 行 Renewed，清单语言列不用于改写目录语言或身份。
- 新增 6 条肯定、升级 6 条出版社证据，当前 EI 59（数据库 59），SCIE 62、ESCI 10 均为数据库依据。逐项差异核对仅对应 EI 字段改变，覆盖年份、其他索引、分区、指南、费用、样例、整刊日期及正式/候选数量不变。
- 发布前数据校验、26 项测试、typecheck、lint、Pages 子路径构建与六个入口资源检查通过；维护队列 214 项、覆盖 12 主题/269 候选，`git diff --check` 通过。单块体积提示与 A10 相同，构建仍成功。

## 2026-10-02：Compendex 批次 A12（8 本）

- 前批提交 630e597 的 [Pages 37011481712](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37011481712) build/deploy 均成功，线上首页与版本 HTTP 200，目录版本 8b4a7076eb4a58fb8364389f394232fdf87ae432d3edaaee9a0942c3f682dd32 与本地一致后开始本批数据修改。
- 其余八本交叉刊 EI逐刊核对来源表 SERIALS，刊号唯一匹配，刊名、Journal 类型和出版社身份相符；DISCONTINUED 无匹配，中文表有匹配的条目为 2026 Renewed。具体表版本与行号见 [A12 证据页](INDEX_EVIDENCE_2026-10-02.md)。
- 八刊新增当前 EI 来源表依据，Science Bulletin 另匹配中文表第 338 行 Renewed。Photoacoustics 的刊号在来源表印刷列、目录为电子刊号，仅跨两列核对身份，不用清单列位置改写目录。此轮全部 74 刊的 Compendex 身份扫描已完成，剩余七刊按目录刊号及规范化完整刊名均未匹配，具体缺口另列，不由空结果判定未收录或停收。
- 新增 8 条肯定、升级 0 条出版社证据，当前 EI 67（数据库 67），SCIE 62、ESCI 10 均为数据库依据。逐项差异核对仅对应 EI 字段改变，覆盖年份、其他索引、分区、指南、费用、样例、整刊日期及正式/候选数量不变。
- 发布前数据校验、26 项测试、typecheck、lint、Pages 子路径构建与六个入口资源检查通过；维护队列 206 项、覆盖 12 主题/269 候选，`git diff --check` 通过。七刊公开来源表无匹配已列具体缺口，不标未收录或停收；本版不重复核查。

## 2026-10-02：会议核验 C2（六个系列）

- A12 提交 3ae979c 的 Pages 37011899176 build/deploy 成功；线上首页和版本 HTTP 200，版本 5006980e… 与本地一致后开始本批。具体来源与范围见 [C2 证据页](CONFERENCE_EVIDENCE_2026-10-02.md)。
- 官网征稿 PDF 已下载、抽取并视觉核对两页，新增 APOS 2026 历史届次 1/31–2/2；联合活动页首 1/31–2/4 不作为 APOS 会期。IWPFA 2/3–4 仅作关联说明，不重复计数。历史投稿最终截止版本冲突留 null，早鸟 2025-12-05 两源一致；专刊不作为会议论文集/索引保证。
- OPIC 母会主页、投稿、注册和会场正文现可读，日程一致；补字段级证据及对应截止来源。Submission/Registration 正文仍待公布，不填实际入口、费用或模板，不刷新整条日期。ICOLS 和欧洲 CLEO 公开信息无变化、ICO 无新征稿，USQS 本轮访问失败；这些记录不改。
- 正式目录为 74 刊、41 届会议、9 项活动；候选 269 项，124 admitted / 142 pending / 3 deferred。同步当前数量及后续索引任务，历史批次记录保留。
- 发布前数据校验、26 项测试、typecheck、lint、Pages 子路径构建与六个入口资源检查通过；维护队列仍 206 项，覆盖 12 主题/269 候选，差异审核及 git diff --check 通过。

## 2026-10-02：作者指南 E1（六本）

- C2 提交 822489d 的 Pages 37013068648 build/deploy 成功，首页及版本 HTTP 200、e88e9eef… 与本地一致后修改本批。
- 浏览器核对 Nature Communications、npj Quantum Materials、npj Quantum Information、Communications Physics 和 Science Bulletin 的本刊稿型、文件、入口及收费页。修正泛化要求，区分正文建议/硬性限制、Article/短稿、初投/录用阶段和 npj 分稿型 APC。逐页来源与价格见 [E1 证据](JOURNAL_GUIDE_EVIDENCE_2026-10-02.md)。
- Science Bulletin 订阅黑白页费与可选 OA APC 分开，彩页收费未核实；Science Advances 网页 403、浏览器为安全验证页，没有改数据。未以同出版社他刊替代，未操作安全验证。
- 逐刊差异检查仅五本 guide、requirements 和/或 publishing 改变；整刊日期、索引、分区、样例、会议和候选未改，正式数量仍 74 刊/41 届会议/9 项活动。
- 发布前数据校验、26 项测试、typecheck、lint、Pages 子路径构建及六个入口资源检查通过；维护队列 206 项、覆盖 12 主题/269 候选，git diff --check 通过。实际额度仍允许续作，本批后继续其他规划。

## 2026-10-02：交叉适配 E2（五刊）

- E1 提交 09a2bcf 的 [Pages 37014294734](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37014294734) build/deploy 成功，线上首页/版本 HTTP 200，版本 34526693627cebbe7e02ca2147d6b15b448c14cac1e1146e871d5b1a283deabe 与本地一致后修改本批。
- 五刊新增十六篇近两年光学样例；Nature 系按本刊 Published 日期，Science Bulletin 三篇从出版社 PDF 确认首次上线，与第 6/10/22 期日期分开。在线校正稿明确无正式卷期，连续出版刊不编期号；理论与数值结果不描述成新实验。原题及每篇适配见 [E2 证据](JOURNAL_SCOPE_EVIDENCE_2026-10-02.md)。
- 逐刊断言只新增 scopeExamples，原四刊样例、索引、分区、指南/费用与整刊日期均保持；正式 74 刊/41 届会议/9 项活动及候选 269 项不变。九刊现有至少三篇，其他交叉刊仍开放。
- 发布前数据校验、26 项测试、typecheck、lint、Pages 子路径构建与六个入口资源检查均通过；维护队列 206 项、覆盖 12 主题/269 候选，差异审查和 git diff --check 通过。单块体积提示与前批一致，构建成功。

## 2026-10-02：会议核验 C3（七系列）

- E2 提交 a3c6406 的 [Pages 37016214730](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37016214730) build/deploy 成功，线上首页及版本 HTTP 200，6008ec6c5b59cb364d47be0f136b345a05e11eec5930733e5183de915eb4c929 与本地一致后开始本批。
- 七系列审核新增五届，逐项来源见 [C3 证据](CONFERENCE_EVIDENCE_2026-10-02.md)。LiM 两页 PDF、AOMATT 第 1–4 页已抽取及视觉核对；SPIE 更名、规则/会场及 IEEE 现名/投稿直接读当届页面。四届未来、一届历史联合，正式 74 刊/46 届会议/9 项活动；候选 270（129 admitted / 138 pending / 3 deferred）。
- 原 GFP/DCS 按现名更名，不增同义系列；南京 AOMTA/YSAOM 联合届只关联主系列，YSAOM 保持 pending 待独立层级核实。OSD 2028 当届城市未知，旧 2026 页首不套用。AOMATT 与南京制造会为不同系列，摘要截止两官方版本冲突留 null，其他一致日程与真实注册入口独立记录。
- 断言所有旧正式会议及无关候选深度相同；期刊/活动未改。只有注册页明确时刻的 AOMATT 早鸟使用 at/Asia/Shanghai，其他截止只写 date。各出版/索引声明与录用条件分开。
- 发布前数据校验、26 项测试、typecheck、lint、Pages 子路径构建及六个入口资源检查通过；维护队列 223 项字段任务、覆盖 12 主题/270 候选，差异审查和 git diff --check 通过。
- 本地 Node 24.19.0 在预渲染完成后触发 Windows libuv 退出断言。按 [Node 官方 24.20.0 发布说明](https://nodejs.org/en/blog/release/v24.20.0)使用临时便携二进制（官方 SHA-256 校验通过）重建成功，未改全局运行时、依赖锁文件或 CI。不能把前两次非零退出记为构建成功；最终验证采用 24.20.0，构建仍仅有既有单块体积提示。

## 2026-10-02：指南与收费 E3（六刊）

- C3 提交 56d1d9c 的 [Pages 37018974566](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37018974566) build/deploy 成功，线上首页和版本 HTTP 200，87c29984b3637fdbd9cf374507eee005974a6364b1eb6b7e7015a6e54a601ac5 与本地一致后开始本批。
- Advanced Materials 泛化描述换成本刊作者指南，长度建议与硬限、Free Format 初投与返修分别记录。五刊新增官方 APC，保留定价时点、税/机构减免边界；InfoMat 历史免收不当作当前费用，SCM 无 OA APC 不等于无版面费。具体来源见 [E3 证据](JOURNAL_GUIDE_EVIDENCE_2026-10-02.md)。
- PRX Quantum 本刊篇幅按四类分开；NML/SCM 官方 Submit 链接已核对，但入口 403，未宣称登录流程已验证。逐刊断言只变 guide/requirements/publishing，索引、分区、样例、整刊日期及会议/候选未改，正式 74 刊/46 届会议/9 活动，候选 270（129 admitted / 138 pending / 3 deferred）。
- 发布前数据校验、26 项测试、typecheck、lint、Pages 子路径构建与六个入口资源检查通过。维护队列 223 项、覆盖 12 主题/270 候选，git diff --check 通过；本地构建使用已校验的官方 Node 24.20.0 便携运行时，未改依赖。

## 2026-10-02：交叉适配 E4（五刊）

- E3 提交 3fcbeeb 的 [Pages 37019694610](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37019694610) build/deploy 成功，线上首页/版本 HTTP 200，0780d3ccc4cec636cee248e7827f541e905c71d43968cb36d76707ade1f2fe55 与本地一致后修改本批。
- 五刊各补三篇近两年光学论文，逐篇核对题名、首次发表与摘要；另以出版社 Crossref 登记核对四刊卷期。NML 连续出版列卷/文章号，首次发表与归入卷期跨年分开；具体原题、卷期和适配见 [E4 证据](JOURNAL_SCOPE_EVIDENCE_2026-10-02.md)。
- 逐刊断言只新增五刊 scopeExamples，其余 69 刊、索引、分区、指南/费用和整刊核验日期不变；累计十四刊至少三篇。正式 74 刊/46 届会议/9 项活动，候选 270（129 admitted / 138 pending / 3 deferred）保持。
- 发布前数据校验、26 项测试、typecheck、lint、Pages 子路径构建与六个入口资源检查通过。维护队列 223 项、覆盖 12 主题/270 候选；与 HEAD 的逐字段差异检查及 git diff --check 通过。构建采用已校验的 Node 24.20.0 便携运行时，仍只有既有单块体积提示。

## 2026-10-02：出版费用 E5（七刊）

- E5 补 Optica、Optica Quantum、Photonics Research、OE、BOE、OME 的官方 APC、CC BY 资格及超页费，并补 AOP 不收发表费用。官方表生效日与核验日分开；只改 publishing，指南其他细则仍待核实。E4 提交 0db3677 已确认 Pages 37021346286、线上首页/版本 HTTP 200，与本地版本 c9fa4cd07471f4ef9f1e69451b34e3078d74403b068a491b1b6c55e403178677 一致。
- 官方费用表逐刊核对页数与对应列，区分基础/超页及条件性 CC BY；PRJ 的 2024 生效版本不改成年份推测。AOP 不收发表费用来自明确声明。与更新前逐字段断言仅七刊 publishing 改变，正式/候选数量保持，十四刊样例保持。
- 发布前数据校验、26 项测试、typecheck、lint、Pages 子路径构建及六个入口资源检查均通过。维护队列 223 项、覆盖 12 主题/270 候选；差异审核和 git diff --check 通过。构建仍采用已校验的 Node 24.20.0 便携运行时，依赖未变。

## 2026-10-02：作者指南 E6（五刊）

- E6 为 OE、BOE、OME、Photonics Research 和 Optica Quantum 补本刊入口、Word/LaTeX 模板、预印本及会议扩展规则；OME Opinion 的四页限制与研究稿分开。只改 guide/requirements，研究稿篇幅与摘要等未核实内容仍开放。E5 提交 e168b1f 已确认 Pages 37021874250、首页/版本 HTTP 200，与本地 24071643c290bda2af127324d0fcac00019e6d68606b8877d6e97ffba70368e1 一致。
- 公共模板明确列出五刊，模板/许可和扩展规则有独立官方来源；没有按收费页推算硬性研究稿长度，也没有编造统一扩展比例。与修改前断言仅五刊 guide/requirements 改变；其余字段和数量保持。
- 发布前数据校验、26 项测试、typecheck、lint、Pages 子路径构建和六个入口资源检查通过。维护队列 223 项、覆盖 12 主题/270 候选，git diff --check 通过；Node 24.20.0 便携构建仅有既有单块体积提示。

## 2026-10-02：指南及费用 E7（两刊）

- E6 提交 86a4845 的 Pages 37022396021 build/deploy 成功；首页/版本 HTTP 200，e9a543eeae66385afd78d90f8016cf3c8faf83c498097a7c52421e1179a0ccda 与本地一致后开始本批。
- E7 补 JOCN 专用模板、Prism 稿件分类、可选作者简介/照片阶段及超过 15 页需事先批准规则；同时补 JOCN、Optics Letters 的自愿页费与可选 OA，OL 印刷彩色另收费。只改两刊对应 guide/requirements/publishing，索引、分区、样例和整刊日期保持。
- 10/2 发布前数据校验、26 项测试、typecheck、lint、Pages 子路径构建与六个入口资源检查通过。随后额度限制使自动审批无法完成，最后的日志补记及提交未执行；未将中断当作已发布。10/3 五小时额度恢复后核对工作区仍是这五个文件、远端 main 仍为 E6；逐字段复核仅 JOCN/OL 对应字段变化，本地构建版本为 6377eeeba2acf17d1dc40852701b0b82d21bd374d702c34a7dd22cacc3cbb875。
- 本轮维护队列重生成为 223 项、覆盖 12 主题/270 候选，整体规划保持开放。正式数量、十四刊样例及既有索引记录未变，额度检查任务沿用既有五小时配置。

## 2026-10-03：作者指南与费用 E8（五刊）

- E7 提交 1442598 的 [Pages 37040892020](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37040892020) build/deploy 成功；首页/版本 HTTP 200，6377eeeba2acf17d1dc40852701b0b82d21bd374d702c34a7dd22cacc3cbb875 与本地一致后开始本批。额度五小时窗口已恢复，周窗口仍允许工作，未使用重置券或购买额度。
- E8 补 LSA、Nanophotonics、HPL、AP、APN 五刊的本刊指南、模板/稿型/公开入口和费用；NANO 当前下载的指南为 2025-03-31 版，LSA 为 2026-01-15 版，版本与核验日分开。AP/APN 逐刊读取，不套费率；HPL 初投/原则录用文件分阶段。只改 guide/requirements/publishing，其他字段保持。PDF 下载、抽取及稿型表/费用页视觉核对，SPIE 浏览器逐刊读取三页签；[来源与版本](JOURNAL_GUIDE_EVIDENCE_2026-10-03.md)。
- 四个 P1 页面复核：ACP PDP 10/15 23:59 北京时间、IPC 注册 Before 10/8、OMTA 最终轮/缴费含 10/15、OPTIC 通知 10/9 前均与现值一致。未为无变化刷新正式日期；sources.yml 最新仍为 10/2 的成功运行 36976757481，没有更晚巡检可读。
- 与修改前逐刊断言仅五刊 guide/requirements/publishing 改变，正式/候选数量、索引、分区、样例及整刊核验日期保持。
- 发布前数据校验、26 项测试、typecheck、lint、Pages 子路径构建及六个入口资源检查全部通过；维护队列 223 项、覆盖 12 主题/270 候选，差异审核与 git diff --check 通过。便携 Node 24.20.0 构建成功，仅保留既有单块体积提示。

## 2026-10-03：IEEE 指南与费用 E9（四刊）

- E8 提交 60e68cb299bc0160fb46406a1467bc67ef200601 的 [Pages 37042440728](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37042440728) build/deploy 成功；首页/版本 HTTP 200，bd15d286943f3164742d95e14525d3a68364330d0b6d810c3d24dd2b545f2fa8 与本地一致后开始本批。
- E9 补 TMI、TIP、TGRS、JLT 四刊投稿/正式页数、文件和费用；TMI 初投 10 页与正式超 8 页收费分开，TGRS 2026 规则与 1/1 边界保留，JLT 当前通用八页与 2026 专题七页差异明确。只改 guide/requirements/publishing。[逐字段证据](JOURNAL_GUIDE_EVIDENCE_2026-10-03.md)。TMI/TGRS/SPS 主指南直接读取，TIP 从本刊实际作者链接确认适用；JLT 浏览器展开本刊四个区块，网页 title 错标不混入其他刊。
- 修改前及与 HEAD 的逐字段断言通过：仅四刊对应 guide/requirements/publishing 变化，其余 70 刊、分区、索引、样例和整刊日期保持。
- 发布前数据校验、26 项测试、typecheck、lint、Pages 子路径构建和六个入口资源检查全部通过；维护队列 223 项、覆盖 12 主题/270 候选，差异审核与 git diff --check 通过。首次 pnpm exec 未找到 oxfmt，改用仓库 pnpm format 后成功，不能把首次格式化失败记为通过；便携 Node 24.20.0 构建成功，仅有既有单块体积提示。

## 2026-10-03：生医指南与 AIP 费用 E10（四刊）

- E9 提交 10850ae5294681292200c61e2be2580079388a96 的 [Pages 37043688668](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37043688668) build/deploy 成功；首页/版本 HTTP 200，15900bb9e55ec5b1c54b191188028c8d763d5d6090bd5f23b29777d97a6a6a4b 与本地一致后开始本批。
- E10 补 JBO/Neurophotonics 独立作者指南与 APC，以及 APL Photonics 的明确 Gold OA 费用和 APR 的通用 Author Select 政策边界。JBO 五段摘要、Neurophotonics 未列结构标题与 Data Paper 数据公开规则分别保留。SPIE 浏览器逐刊读三页签，AIP OA 当前页面直接读取；两个独立 AIP Publication Charges 页不可读，未宣称本刊独立费用核验成功。[具体来源](JOURNAL_GUIDE_EVIDENCE_2026-10-03.md)。
- 修改前及与 HEAD 的逐字段断言通过：两刊仅 guide/requirements/publishing，AIP 两刊仅 publishing 改变；其他 70 刊及分区/索引/样例/整刊日期保持。
- 发布前数据校验、26 项测试、typecheck、lint、Pages 子路径构建及六个入口资源检查通过；维护队列 223 项、覆盖 12 主题/270 候选，差异审核和 git diff --check 通过。便携 Node 24.20.0 构建仅有既有单块体积提示。

## 2026-10-03：AOP/Optica 作者流程 E11（两刊）

- E10 提交 58ac01a9b7c4740eefd2e0fc03f5ebc238d7093f 的 [Pages 37044291954](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37044291954) build/deploy 成功；首页/版本 HTTP 200，60d8a99be91d109c804eab01077270b21c0f9b48a888b0d012be9e49fec56103 与本地一致后开始本批。
- E11 补 AOP 提案具体材料与非硬性四十页建议，Optica 的公开评审通信、两周转刊窗口及媒体/预印本边界；未发送邮件或请求转刊。AOP 仅 guide/requirements、Optica 仅 requirements 更新，费用等其他字段保持。AOP PDF 三页文字读取、第 1 页视觉核对，Optica 详细页三节直接读取；[来源/范围](JOURNAL_GUIDE_EVIDENCE_2026-10-03.md)。
- 修改前及与 HEAD 的逐字段断言通过；其余 72 刊和正式/候选数量保持。
- 发布前数据校验、26 项测试、typecheck、lint、Pages 子路径构建及六个入口资源检查通过；维护队列 223 项、覆盖 12 主题/270 候选，差异审核和 git diff --check 通过。便携 Node 24.20.0 构建成功，仅有既有单块体积提示。

## 2026-10-03：OEA/OES 投稿政策 E12（两刊）

- E11 提交 cf87ba54de5dca7e8ed64b924f600845cf1984f3 的 [Pages 37044727487](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37044727487) build/deploy 成功；首页/版本 HTTP 200，862791a5562d7d750f00f663f903a1c4a5133e2d0229fd773a903e2420b57098 与本地一致后开始本批。
- E12 修复 OEA 旧指南 404，核对 OEA/OES 当前通用稿型、初投/返修/校样及费用。跨两刊收费表备注经截图确认豁免至 2026 年底，其他刊 2027 推广不套用；正文词数为建议，2027 过渡/税/版本时点保留未知。浏览器沿旧 OEA 页尾和 OES For Authors 的真实导航读取三份官方政策，跨行费用备注视觉核对；[字段/边界](JOURNAL_GUIDE_EVIDENCE_2026-10-03.md)。
- 修改前及与 HEAD 的逐字段断言通过，仅两刊对应三字段变化；其他 72 刊和正式/候选数量保持。
- 发布前数据校验、26 项测试、typecheck、lint、Pages 子路径构建及六个入口资源检查通过；维护队列 223 项、覆盖 12 主题/270 候选，差异审核和 git diff --check 通过。便携 Node 24.20.0 构建仅有既有单块体积提示。
- 批次验证后额度接口周窗口显示已用 100%，仍返回 ordinaryUsageAllowed=true；先按授权尝试收尾提交与部署，实际限制出现即保护当前进度，下一次五小时任务先补推/验收同一提交，不重置或购买额度。

## 2026-10-03：数据与补充材料 E13（两刊）

- 06:25 五小时调度后先查实际额度，五小时/周均已用 0%、允许工作。上一轮 E12 已推送但读取 OEA 首页的自动审批因实际额度限制失败，未执行该浏览器动作；本轮额度恢复后正常读取，没有绕过限制。
- 本地/远端 main 均为 f4166f87097d74bf7bde417d9543158af85e32e7，工作区干净。补验收同一 [Pages 37045266202](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37045266202) build/deploy 成功；首页/版本 HTTP 200，b762d13f101b703c8b84576adc05676d30c50ba328ef0d63a51e0b5cf477870f 与本地一致。未重复提交/推送。
- sources.yml 最新仍为 10/2 成功运行 36976757481，未发现新报告，不能称其覆盖 E12 SHA。重生成当日报告：维护 223 项字段任务、覆盖 12 主题/270 候选。
- E13 补 OEA/OES 数据可用性与补充材料规则：ScienceDB 出版阶段存储、共享范围/例外、禁运和合理请求、DAS 位置及 SI 当前 30 MB 上传限制分别记录。仅 requirements 更新，独立代码规则与模板源码内容仍未知。逐刊实际导航确认两份政策的适用入口，浏览器全文读取；[证据与边界](JOURNAL_GUIDE_EVIDENCE_2026-10-03.md)。
- 修改前及与 HEAD 的逐字段断言通过，仅两刊 requirements 改变；其他 72 刊、正式/候选数量及无关字段保持。
- 发布前数据校验、26 项测试、typecheck、lint、Pages 子路径构建及六个入口资源检查通过；维护队列 223 项、覆盖 12 主题/270 候选，差异审核和 git diff --check 通过。便携 Node 24.20.0 构建仅有既有单块体积提示。

## 2026-10-03：会议覆盖 C4（七个系列层级）

- E13 bdffcf8d7a2083dc3d9e629182eac587dcee5d4d 的 [Pages 37073169839](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37073169839) build/deploy 成功，首页/版本 HTTP 200，77b6ae8d5c37bbfd70150bbe376fd712bfd1b34057769fcc1c46350da9b58385 与本地一致后开始本批。
- C4 审核六个未审系列及新确认的联合母会，新增 Optics + Photonics 2027、Sensors + Imaging 2027、Electronic Imaging 2027 三届。正式 74 刊/49 会议/9 活动；候选 271（132 admitted / 136 pending / 3 deferred）。Photonics Europe 2028 与 Photomask 2027 城市仍未知，保留候选；欧洲遥感/安全子系列不重复计母会。EI 首页延期、旧 CFP 与已关闭系统冲突，摘要截止 null、状态 closed。SPIE 当前官方页面和两个子系列逐页读取，IS&T 旧官网 2027 Save the Date 与当届首页/CFP/实际提交页交叉核对；[具体来源](CONFERENCE_EVIDENCE_2026-10-03.md)。未登录/提交稿件或发送邮件。
- 修改前及与 HEAD 的断言保持全部 46 届旧正式会议和其他候选，仅追加三届、审核六候选并增加一个母会候选；期刊、活动、索引/分区/样例未改。
- 发布前数据校验、26 项测试、typecheck、lint、Pages 子路径构建及六个入口资源检查通过；维护队列 234 项字段任务、覆盖 12 主题/271 候选，差异审查、当前数量/文档链接和 git diff --check 通过。便携 Node 24.20.0 构建仍仅有既有单块体积提示。

## 2026-10-03：分区公开证据 A13（六刊）

- C4 ab98d31fe187ac1d5f6c9e7e9e1eda0cec9720b5 的 [Pages 37074836786](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37074836786) build/deploy 成功；线上首页/版本 HTTP 200，2c5e8103bd3a2c53dc3c4eaa8326e8611101585cd942688a760eb81e42cdbf8c 与本地一致后开始本批。
- 六刊公开指标页及有针对性的公告入口已读；没有学科分区/完整排名的影响因子不换算 Q 值，JCI、CiteScore、SJR 不替代 JCR。CAS 入口访问失败与停发传言分开，未使用学校共享凭据或机构接口；[逐刊范围](RANKING_EVIDENCE_2026-10-03.md)。
- 本批为文档证据记录，全部 JSON 字节及目录版本保持，正式 74 刊/49 会议/9 活动，候选 271（132 admitted / 136 pending / 3 deferred）、JCR 61/CAS 10、十四刊至少三篇样例保持。当日报告 234 项字段任务、12 主题。
- 文档批次验证：四份目录 JSON 与 HEAD 字节一致，当前数量/分区/样例计数及 65 个本地 Markdown 链接通过，格式化、差异审查与 git diff --check 通过。未修改程序或目录数据，未重复运行功能测试与本地构建；GitHub 发布仍需验收对应 SHA 的完整 CI 与线上原目录版本。

## 2026-10-03：材料与 ACS 投稿政策 E14（五刊）

- A13 bd1b3c1a838b535f8e608de0c1d4279622de7b33 的 [Pages 37075731347](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37075731347) build/deploy 成功，首页/版本 HTTP 200，2c5e8103bd3a2c53dc3c4eaa8326e8611101585cd942688a760eb81e42cdbf8c 与本地一致后编辑本批。首次线上连接超时只重查同一 SHA，没有重复提交/推送。
- E14 内容与范围见[证据页](JOURNAL_GUIDE_EVIDENCE_2026-10-03.md)。AFM 建议长度与摘要硬限分开、初投/返修分开；三刊 ACS 各读对应三节与版本；NML 两个官方页面政策冲突保留，不臆断旧版。未上传稿件、登录或联系编辑部。
- 长操作前检查点保存在忽略目录 work/E14_RESEARCH_2026-10-03.md；下一步执行逐字段断言、必要数据/功能/构建验证、差异审查，验证通过后提交推送并验收同一 SHA。
- 发布前逐字段断言通过：仅 AFM/ACS Photonics/ACS Nano/Nano Letters 的 requirements 与 NML publishing 更新；其余 69 刊及其他目录完全保持。74 刊/49 会议/9 活动、271 候选、JCR 61/CAS 10、十四刊至少三篇样例保持。数据校验、26 项测试、typecheck、lint、Pages 子路径构建和六个入口资源检查通过；维护队列 234 项、覆盖 12 主题，68 个本地文档链接及差异审查、git diff --check 通过。构建使用已校验 Node 24.20.0，仅有既有单块体积提示。

## 2026-10-03：设计/成像/激光会议 C5（七个系列层级）

- E14 a21e0a0fead857d45f0f2368c320b7c1a8953cf8 的 [Pages 37076180292](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37076180292) build/deploy 成功；首页/版本 HTTP 200，7769c8aa25c00a7f02de4b6a0cc71743a04f50927d886633c4326d549d5726ca 与本地一致。首次 push 因 GitHub 连接失败未上传，随后补推同一本地提交成功，没有重复提交。
- C5 审核六个既有系列及新确认的 ImageSense 母会，新增两届未来预告（IODC 2027、OIC 2028）及四届历史会议（Advanced Photonics 2026、Imaging 2025、ISLC 2026、ImageSense 2026）。正式 74 刊/55 会议/9 活动；候选 272（138 admitted / 131 pending / 3 deferred）。NP 隶属已收母会仍 pending，旧 Imaging 与 ImageSense 的继承关系未证实，不强行合并。[字段来源与层级](CONFERENCE_EVIDENCE_2026-10-03.md)。E14 a21e0a0 已确认 Pages 37076180292 与线上 7769c8aa…；本批必要验证已通过，提交与部署结果见最新日志；其他规划继续。
- IODC 主页面浏览器读取，SPIE 日历使用本轮此前已读的会场依据；其他 Optica/OPG 与坦佩雷大学官方页面直接读取。受限论文集只确认登录入口，未登录、订阅更新或联系主办方；详细记录与检查点已保存。

- 发布前精确断言：全部 49 届旧会议、期刊/活动/其他基础数据保持，仅追加六届并更新六个旧候选及一个新母会候选。数据校验、26 项测试、typecheck、lint、Pages 子路径构建和六个入口资源检查通过；维护队列 240 项字段任务、覆盖 12 主题/272 候选，102 个本地 Markdown 链接、当前数量、JCR 61/CAS 10、十四刊至少三篇样例、差异审查与 git diff --check 通过。构建用已校验 Node 24.20.0，仅有既有单块体积提示。

## 2026-10-03：中文刊作者细则 E15（六刊）

- C5 ccf934c3b5a3e9679c9c3079e4b914f9961ff423 的 [Pages 37077462163](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37077462163) build/deploy 成功；首页/版本 HTTP 200，e82b4febf214744749c121978ae6d763f433faaa644f07db6889afb1661c13cb 与本地一致后开始正式编辑本批。
- E15 审核六刊作者细则，更新 OPE/CPL/中国激光/光学学报/进展五刊相应投稿字段；IRLA 访问失败保留原缺口。三刊现主稿及各自长摘要、收费文件逐件核验，建议/硬限、稿型与文件版本分开，CPL 页限及 OPE 审稿/入口冲突保留。[来源与范围](JOURNAL_GUIDE_EVIDENCE_2026-10-03.md)。数量、索引/分区、样例及其他字段不变，其他规划继续。
- 官方收费附件下载耗时较长，已在长操作前保护 C5 发布状态和 E15 研究检查点。恢复后 09:47 额度接口仍允许工作、五小时已用 46%；未动用重置券或购买额度。后续附件使用有时限且正常验证 TLS 的公开下载，没有降低安全验证。
- 三刊当前菜单逐页读取，收费单页及中国激光长摘要第 1 页视觉核对，DOCX 只读取有关段落；未执行模板内容、登录或付款。必要验证与差异审查已通过；提交与部署结果见后续记录。

- 发布前精确断言通过：OPE 及三刊 guide/requirements/publishing、CPL requirements 改变，其余 69 刊和所有其他目录数据/字段保持。74 刊/55 会议/9 活动、272 候选（138/131/3）、JCR 61/CAS 10、十四刊至少三篇样例保持。数据校验、26 项测试、typecheck、lint、Pages 子路径构建和六个入口资源检查通过；当日报告维护 240 项、覆盖 12 主题，74 个本地文档链接、差异审查与 git diff --check 通过。已校验 Node 24.20.0 构建仅有既有单块体积提示。

## 2026-10-03：主办方分区证据 A14

- E15 8f8cece5b68812a4574b12e9f0e1470d70c649af 的 [Pages 37088078536](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37088078536) build/deploy 成功，首页/版本 HTTP 200，926500b487a7ce5dc7ce27a4e1a2b652d464305f01d273a3bb6bf7b98fbb4498 与本地一致；2026-10-03T01:59:32.452Z 验收后开始本批正式修改。
- A14 仅 Photonic Sensors rankings 增加五条主办方编辑部明确声明：两 JCR Q1，三 CAS 一区；2026 发布/2025 指标与 CAS 2025 具体版本未知分别保存。[逐字段来源和六刊保留范围](RANKING_EVIDENCE_2026-10-03.md)。其他刊、索引/指南/样例/整刊日期及其余目录不变。
- 长操作前检查点 work/A14_RESEARCH_2026-10-03.md 保存 E15 验收和核验范围；实际额度五小时58%/周9%，接口仍允许工作，未使用重置券。必要验证与差异审查后提交推送，验收同一 SHA 的 Pages 与线上目录。
- 发布前精确断言通过：仅 Photonic Sensors 五条 rankings 新增，其余 73 刊、该刊其他字段及其他五份目录 JSON 保持。数据校验、26 项测试、typecheck、lint、Pages 子路径构建及六个入口资源检查通过；维护队列 239 项字段任务、12 主题/272 候选，78 个本地 Markdown 链接和当前计数通过。74 刊/55 会议/9 活动、138/131/3 候选状态、十四刊至少三篇样例保持；差异审查和 git diff --check 通过。

## 2026-10-03：光子学系列 C6（七系列）

- A14 33747387db72cf0c15cbaab46edd8d95d6eac258 的 [Pages 37088948448](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37088948448) build/deploy成功；首页/版本 HTTP200，861ad4a47c8923f8401220420400302282db3d33df64f111c2faad67487b4ad5 与本地一致，2026-10-03T02:12:55.095Z验收后正式编辑本批。
- C6 审核七系列、新增六届，OI更名OIP由官方明确确认；OPJ终日冲突暂缓，CHILAS/HILAS关系未知。截止精度、普通/PDP、母会/专题、旧届/2027分别保存；早鸟和UP出版表述冲突保留。[逐字段来源与范围](CONFERENCE_EVIDENCE_2026-10-03.md)。
- 长操作前已保存 work/C6_RESEARCH_2026-10-03.md，实际五小时67%/周10%且允许工作；未用重置券。只有追加六会议及七候选审核，其他期刊、索引分区、样例与目录保持；必要验证和差异审查后推送，同SHA验收部署。
- 发布前精确断言通过：55届旧会议及全部期刊/活动/主题/站点JSON保持，只追加六届并更新七个候选（稳定ID不变）。数据校验、26项测试、typecheck、lint、Pages子路径构建及六入口资源检查通过；维护249项字段任务、12主题/272候选，112个本地Markdown链接与当前数量核对通过。JCR62/CAS11、十四刊至少三篇样例保持；差异审查和git diff --check通过。下一轮优先四项deferred及新预告缺口。

## 2026-10-03：传统光学与器件期刊 F1（五刊）

- C6 130b6fedb1e9bd16ed9aecc4070b4ae91825ddb8 的 [Pages 37089602380](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37089602380) build/deploy 成功；首页/版本 HTTP 200，ac05ac43c08ec5257be29aa4fc742f87585d83303d57071ee8e506c2d4f7bc0d 与本地一致，2026-10-03T02:28:51.548Z 验收后开始正式修改。
- F1 追加 AO、JOSA A/B、OE、APB 五刊并关联五个稳定候选；全部通过已有确证 EI 的补充路径，没有新增或推算分区。每刊独立 MJL SCIE 卡和 Compendex 来源表记录保存，APB 只匹配表中印刷刊号。具体准入、逐字段来源、2026 S2O/OA 与旧指南冲突见 [F1 证据](JOURNAL_ADMISSION_EVIDENCE_2026-10-03.md)。
- 长操作前保存 work/F1_RESEARCH_2026-10-03.md，实际五小时 77% / 周 12%、ordinaryUsageAllowed=true；没有使用重置券。只读公开材料，未登录、投稿或付款。必要验证与差异审查后提交推送并验收同一 SHA。

- 发布前精确断言通过：旧74刊及其他四份目录数据完全保持，只追加五刊、更新五候选，稳定ID/名称/别名/优先级保持。数据校验、26项测试、typecheck、lint、Pages子路径构建及六入口资源检查通过；维护254项字段任务、12主题/272候选，118个本地Markdown链接和当前数量通过。JCR62/CAS11、十四刊至少三篇样例保持；差异审查及git diff --check通过。83%五小时/13%周，仍允许工作；继续规划，未用重置券。

## 2026-10-03：IEEE 长稿/短稿规则 E16（三刊）

- F1 4c84a05b38ac4b1aa1c0812287221560da60f0dc 的 [Pages 37090491637](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37090491637) build/deploy 成功；首页/版本 HTTP200，ed5fd15dc56049ec01af3d9d941376524013638a1bf04b8ab9591b092e89de9f 与本地一致，2026-10-03T02:40:10.386Z 验收后开始正式编辑。
- E16 三刊规则及动态费用逐字段见 [作者证据](JOURNAL_GUIDE_EVIDENCE_2026-10-03.md)：COMST 计费示例不放宽页限、Proceedings 建议与硬限分开，TCYB 官方摘要及无版年费用冲突保留。TIE 当前入口与旧PDF访问失败未改；没有声称读到正文，未登录投稿或付款。
- 长操作前保存 work/E16_RESEARCH_2026-10-03.md，实际五小时85%/周13%允许工作；只修改三刊 requirements/publishing，其他76刊与所有其他字段和目录保持。必要验证与差异审查后提交推送并验收同SHA，继续其余规划，不用重置券。

- 发布前精确断言通过：仅三刊 requirements/publishing 改变，其余76刊及所有分区/索引/样例/整刊日期和其他五份目录JSON保持。数据校验、26项测试、typecheck、lint、Pages子路径构建及六入口资源检查通过；维护254项字段任务、12主题/272候选，86个本地Markdown链接及当前计数通过。差异审查与git diff --check通过；已校验Node24.20.0仅有既有块体积提示。

## 2026-10-03：显示与激光加工系列 C7（五系列）

- E16 c902a0ea81f2200dd95b1924789fd43a6854253d 的 [Pages 37090802393](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37090802393) build/deploy成功；首页/版本HTTP200，602848d800f66dbddb0d48bf4279e5ea637dde1f14f3f6bae3aef8b4deba9dce与本地一致，2026-10-03T02:48:00.973Z验收后编辑本批。
- C7只新增四届及审核五稳定候选，79刊/65会议/9活动，272候选（152/116/4）。[逐字段证据](CONFERENCE_EVIDENCE_2026-10-03.md)保存官网日期精度、SID层级/摘要措辞、ICALEO价格阶段及LPM证书限制；未登录、付款或联系主办方。
- 长操作前保存work/C7_RESEARCH_2026-10-03.md；实际五小时91%/周14%允许工作，未用重置券。其余规划开放，必要验证及差异审查后推送并按同SHA验收。

- 发布前精确断言通过：61届旧会议、79刊及活动/主题/站点数据保持，只追加四届并更新五稳定候选。数据校验、26项测试、typecheck、lint、Pages子路径构建和六入口资源检查通过；维护264项字段任务、12主题/272候选，123个本地Markdown链接及当前数量通过。JCR62/CAS11、十四刊至少三篇样例保持，差异审查与git diff --check通过。构建使用已校验Node24.20.0，仅有既有块体积提示。

## 2026-10-03：补充材料及审稿政策 E17（两刊）

- C7 780ea0aa994158931ce68774a23e0e31e3aca947 的 [Pages37091630582](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37091630582) build/deploy成功，首页/版本HTTP200，f28d7a8a9240f57500131a7ae2df15660f9dc3257599bb7a66e074108648e335与本地一致，2026-10-03T02:59:40.783Z验收后编辑本批。
- E17 为 eLight/PhotoniX 追加 cover letter、软件数据声明、补充文件20MB及各自匿名/公开审稿边界，仅 requirements 改变；现有稿型/费用/索引/分区/日期保持。[逐字段证据](JOURNAL_GUIDE_EVIDENCE_2026-10-03.md)。C7 780ea0a 已验收 Pages37091630582 与线上f28d7a8a…，当前79刊/65会议/9活动、272候选152/116/4。实际97%五小时额度仍允许，其他规划继续开放。
- 长操作前work/E17_RESEARCH_2026-10-03.md已保存；只改两刊requirements，原五条要求及其余77刊、所有其他字段/目录保持。必要验证后提交推送，按同SHA验收；实际额度不足时保存接续，不使用重置券。

- 发布前精确断言通过：仅两刊requirements追加，原要求/其他77刊及其他五份JSON保持。数据校验、26项测试、typecheck、lint、Pages子路径构建及六入口资源检查通过；维护264项、12主题/272候选、92个本地Markdown链接及当前计数通过。JCR62/CAS11、十四刊至少三篇样例不变；差异审查及git diff --check通过，Node24.20.0构建只有既有块体积提示。

## 2026-10-03：E17部署验收与F2研究检查点

- E17 9a95742701a079209da4a807c9da1b592552a5a1 已验收 Pages37091880262：build/deploy成功，首页/版本HTTP200，4ea17d81191c215f562ba7f24a6fbed338d94983f0f6240e2dd0650a9d730990与本地一致（2026-10-03T03:04:36.391Z）。当前79刊/65会议/9活动、272候选152/116/4。下一轮可接续[F2 APS预核验](JOURNAL_CANDIDATE_EVIDENCE_2026-10-03.md)，已核身份/刊号与六条EI源表，仍待MJL、三刊完整指南/费用、交叉样例及正式准入。实际五小时已用99%/周15%；不使用重置券，额度不足时结束本轮，由已有五小时自动任务重新检查，不另建任务。
- 本批只保存候选研究证据和续接状态；全部六份JSON与HEAD字节一致，无正式新增或分区/索引变更。文档验证及部署以本批实际结果收尾；剩余规划未完成。

- 本批文档验证：六份JSON与HEAD字节一致，95个本地Markdown链接、当前数量/状态、JCR62/CAS11和十四刊样例计数通过；格式化、差异审查及git diff --check通过。未重复功能测试或构建，待同SHA完整Pages CI与原目录版本验收。

- 前次上述文档提交/推送因自动审批检查无法完成而未执行，原因是账户额度耗尽，不是安全否决。2026-10-03 16:25恢复检查实际五小时0%/周16%且允许工作，未使用重置券。远端与本地9a95742一致，待补上传四份已保存文档；最新每日来源工作流37103760237在同SHA成功（06:39:08Z，schedule）。
- 用户新增明确需求（2026-10-03）：网站需要定期更新，并保留同一会议系列的历史届次及后续官方预告，帮助错过本届的用户准备下一届；广度与时间深度并重。优先检查现有每日来源巡检、同系列关联/时间线、未来届次发现与系列关注的缺口。未经当届公告不推算日期，不把已有版本刷新按钮当作自动采集更新完成；后续实现与验收单独批次推进。

## 2026-10-03：系列时间线与后续公告维护 S1

- 7d5ae1561d83ea862da00f6cf973ec3840f8f70e 已验收 [Pages37109755475](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37109755475)，build/deploy 成功；首页/版本 HTTP200，4ea17d81191c215f562ba7f24a6fbed338d94983f0f6240e2dd0650a9d730990 与本地一致（2026-10-03T08:29:35.248Z）后正式实现本批。
- 新增 64 个稳定会议系列身份，关联全部 65 届。只依据现有已核实名称与官方来源建立关系；OIP 2026/2027 同系列，区域 CLEO/母子会保持独立。全部后续核验日初始 null，无未来日期推算。六份既有 JSON 字节保持，79刊/65会议/9活动、272候选152/116/4、JCR62/CAS11、十四刊样例计数保持。
- 实现独立“系列与往届”入口、系列关注持久化、会议卡片跳转、各届准备要求与官方链接、未结束届次日历。每日巡检接入系列来源，已结束系列每 30 天列入后续公告任务；摘要纳入系列数据。定时来源发现与人工事实审核/部署分别记录，不声称自动采集日期已经完成。
- 新增三项有意义边界测试，29项测试通过；数据/typecheck/lint通过。实际桌面/375手机/键盘、刷新关注、空搜索、OFC单系列入口、版本检查均通过，手机 body/document/viewport均375px。测试关注取消、视口恢复；[界面记录](UI_REGRESSION.md)。长操作前 work/S1_CHECKPOINT_2026-10-03.md 保存部署/范围，实际五小时13%/周18%允许工作，未用重置券。最终构建/文档范围验证和同SHA部署随后验收。

- 最终发布前数据校验、29项测试、typecheck、lint、Pages子路径构建与六入口资源检查均通过（exit 0）；现维护287项字段任务、12主题/272候选，127个本地Markdown链接/当前计数通过。六份旧JSON字节断言、64系列/65归属/空后续核验日断言及差异审查通过。已校验Node24.20.0构建只含既有块体积提示；随后提交推送验收同SHA。

## 2026-10-03：后续届次核验 C8（六系列）

- S1 de7a4e248f0fb14c56d29c5410882658d28655c3 [Pages37111110265](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37111110265)已成功build/deploy，首页/版本HTTP200；摘要14afaed1d674c5f2b9ed8a7556ce583b21b022f4c1f5ee024f2e881f3f762e79与本地一致（2026-10-03T08:53:54.438Z）后正式编辑。TLS首次失败只重查同SHA。
- C8按新系列队列复查六系列，追加四个已核实2027届次，五系列现有跨届时间线；[逐字段来源/范围](CONFERENCE_EVIDENCE_2026-10-03.md)。UP周期不推算，ISLC预告新域名关联未充分核实保留线索，FiO旧稿件规则不移用；所有date-only未补时刻/时区。未登录、订阅、投稿或联系主办方。
- 长操作前work/C8_RESEARCH_2026-10-03.md已保存S1验收和来源范围；只追加四届、修改六稳定系列和六候选指定字段，旧65届与所有其他目录保持。79刊/69会议/9活动、64系列、272候选152/116/4；必要验证、范围断言/差异审查后提交推送并验收同SHA。其他规划继续。

- 发布前精确断言通过：旧65届、期刊/活动/词表/站点字节保持，仅追加四届及六系列/六候选指定字段，稳定ID与状态保持。数据校验、29项测试、typecheck、lint、Pages子路径构建及六入口资源检查通过；维护300项字段任务（17个后续系列任务）、12主题/272候选，136个本地Markdown链接和当前计数通过。JCR62/CAS11、十四刊样例保持；差异审查与git diff --check通过。

## 2026-10-03：国内与亚太后续核验 C9

- C8 83a7adcb318cbc98291828d243fcd9c8e59b13b1 已验收 [Pages37111596440](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37111596440)：build/deploy成功，首页/版本HTTP200，905bb5df6b7777b6ab5dbe83e5b918b6f2584e466baf1729a07f849c94de8ca7与本地一致（2026-10-03T09:02:33.310Z）后正式修改。
- 新增CIOE2027母展及独立当届候选；六系列核验范围、五个成功后续核验日与CIOP证书失败见[字段证据](CONFERENCE_EVIDENCE_2026-10-03.md)。CIOE当前2027标头不证明OGC/COS2027子会议，CLEO-PR2028招聘线索不当完整公告，APOS周期不推算。未绕过证书、登录或联系主办方。
- 长操作前work/C9_RESEARCH_2026-10-03.md保存C8验收及范围；79刊/69会议/10活动、64系列，273候选153/116/4。只追加母展/候选及五系列与对应五候选指定字段；必要范围验证和差异审查后提交推送，按同SHA验收。其他规划继续，未用重置券。

- 发布前精确范围断言通过：旧79刊/69会议/9活动与基础词表保持，只追加一活动/候选及五系列与五候选白名单字段。数据校验、29项测试、typecheck/lint、Pages子路径构建与六入口资源检查通过；维护295项（12后续系列任务）、12主题/273候选，140个本地Markdown链接和当前计数通过。JCR62/CAS11、十四刊样例保持；差异审查/git diff --check通过。

## 2026-10-03：临近事项与参会政策 B3

- C9 7adefc10c79208b093d250ffecb1b9a6c727192c已验收[Pages37112307916](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37112307916)：build/deploy成功，首页/版本HTTP200，8a1dc4ad6f46cf95fda2ed9b9374132b8b4157977c2ce3f7d123fb5ac48f1b17与本地一致（2026-10-03T09:14:47.376Z）后正式编辑。查询助手在旧Node24.19退出出现libuv断言，随后用已校验24.20查询同一部署成功，没有重复提交。
- [B3字段来源及范围](CONFERENCE_EVIDENCE_2026-10-03.md)：ACP/IPC/OMTA/OPTIC/PW临近日期与目录一致，只补三届实际参会政策。住宿/退款不当投稿或最终注册截止，未知费用及早鸟冲突继续保留；整条核验日不刷新。长操作前work/B3_RESEARCH_2026-10-03.md保存C9验收与精确范围，数量和候选状态保持。必要验证后提交推送同SHA验收；未登录、注册或付款。

- 发布前数据校验、三届字段白名单/所有截止及整条日期保持断言、107个本地Markdown链接、维护295项/覆盖12主题与当前计数通过；Pages子路径构建及六入口资源exit0，差异审查/git diff --check通过。数据批次不新增或重复功能测试，本次完整29项测试/typecheck/lint由同SHA Pages CI验收，未在本地再跑无关功能回归。

## 2026-10-03：已有未来预告 C10

- B3 637edb59aa19691915ce2e4afc0eaa40b61d0434已验收[Pages37112615745](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37112615745)：build/deploy成功，首页/版本HTTP200，5f28d208ef0801ad52e7a23538d74e45df3bbc1519e8f29f8690158b7465652a与本地一致（2026-10-03T09:20:00.231Z）后正式修改。本SHA完整CI检查成功。
- [C10字段证据](CONFERENCE_EVIDENCE_2026-10-03.md)：USQS旧年度注册异常已变，正常浏览器确认2027横幅和表单，登记链接/发布费率可补；无年份退款继续未知，不造日历截止。其他四预告限定范围未取得新征稿字段，不为凑提交更新日期。长操作前work/C10_RESEARCH_2026-10-03.md保存B3验收/修改范围；全部数量/索引分区保持，验证后推送同SHA验收。

- 发布前精确断言：只USQS登记/追加要求/notes及未知注册来源说明、该系列新增来源和对应候选nextAction/reviewedAt改变；其余68会议及全部日期/checkedAt保持。数据校验、110个本地Markdown链接、维护294项/覆盖12主题与当前计数通过；Pages子路径构建/六入口资源exit0，差异审查/git diff --check通过。数量79/69/10、候选273（153/116/4）、JCR62/CAS11、十四刊样例保持；完整功能检查在同SHA CI验收。

## 2026-10-03：APS候选核验 F2

- C10 dbb9d3884f0f578987ed37ebb7c0f70200fdbc7b已验收[Pages37112980212](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37112980212)：build/deploy成功，首页/版本HTTP200，716fb085adb43fc3ac876c8ba8ae47a646b8cc67db1601aac39c4cc3469fce0e与本地一致（2026-10-03T09:27:59.378Z）。同SHA完整CI成功后正式修改本批。
- 六刊MJL/同版EI及二手JCR2025按字段核验；新增PRA/PRApplied，三篇样例分别核对不同期次/发表日与研究边界，其余四刊仍pending。[来源及范围](JOURNAL_CANDIDATE_EVIDENCE_2026-10-03.md)。Applied JIF Q2/AIS Q1分开，Research仅ESCI，CAS及摘要细则未知不编造。
- 长操作前work/F2_RESEARCH_2026-10-03.md已保存C10验收、各字段和剩余任务；实际额度五小时48%/周23%允许。只追加两刊及六稳定候选指定字段，旧79刊和会议/系列/活动/基础词表保持；验证和差异审查后推送同SHA验收。其他规划开放，不使用重置券。

- 发布前旧79刊/其他目录/267候选保持及六候选白名单断言通过；数据校验、151个本地Markdown链接/当前计数、维护296项（12后续系列任务）/12主题覆盖通过。Pages子路径构建/六入口资源exit0，差异审查/git diff --check通过；完整29项测试/typecheck/lint待同SHA CI验收。PRA追加已读可选印刷彩色费用，分开核验日与未注明版年；最终摘要按实际构建验收。

## 2026-10-03：综合物理光学适配 F3

- F2 34940b4233d521155e058a20b281f0646338409d已验收[Pages37114153017](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37114153017)：build/deploy成功，首页/版本HTTP200，1277b981f6338bb4a358a43418e348ebc23006b68c2ad859666fe7e73094aab0与本地一致（2026-10-03T09:47:30.951Z）。同SHA完整29项测试/typecheck/lint等检查成功后正式修改本批。
- [F3逐字段依据](JOURNAL_CANDIDATE_EVIDENCE_2026-10-03.md)：新增四刊及十二篇不同卷期光学样例，独立稿型/费用和SCIE/ESCI边界保存。几页直开工具错误保留访问范围，摘要缓存/官方列表与Crossref登记元数据分开记录；未绕过安全验证或读收费全文。
- 长操作前work/F3_RESEARCH_2026-10-03.md保存F2验收及准入范围；只追加四刊及四稳定候选指定字段，旧81刊和其他目录保持。初轮索引参数缺失被数据校验发现，已修正，并显式保存Research SCIE未知；修正后数据校验通过，维护303项、12主题/273候选。必要验证及差异审查后推送同SHA验收，其他规划开放，未用重置券。

- 最终发布前数据校验、旧81刊/其他目录/269候选保持和四候选白名单断言通过；Research显式SCIE未知/ESCI肯定、所有新分区2025版secondary断言通过。155个本地Markdown链接/当前计数、维护303项（12后续系列任务）/12主题覆盖通过；Pages子路径构建/六入口资源exit0，差异审查/git diff --check通过。85/69/10、候选273（159/110/4）、JCR68/CAS11、SCIE72/ESCI11/EI78、二十刊样例保持；完整功能检查在同SHA CI验收。

## 2026-10-03：后续系列核验 C11

- F3 bc96f6c4332f4f890267fc49307e0edfdb08f7c2已验收[Pages37114963476](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37114963476)：build/deploy成功，首页/版本HTTP200，e7c21ca1d4c48eac93757972d3dd5bebcafcfd06af7bb7f9ff9f0ca69aea3333与本地一致（2026-10-03T10:05:07.490Z）；同SHA完整CI成功后正式编辑。
- 六系列实际核验，追加IMID2027预告；[逐字段出处/范围](CONFERENCE_EVIDENCE_2026-10-03.md)。官网图像感谢信实际目视后确认日期场馆，其他五系列仅声明已读范围，没有日期推算或旧规则复用；CIOP失败不重复查。
- 长操作前work/C11_RESEARCH_2026-10-03.md已保存验收、来源与拟改范围。只追加一届、六系列核验日/实际来源及六对应候选nextAction/reviewedAt/IMID关联；旧69届及其他目录保持。修正CANDIDATES当前数量和DATA_MODEL旧摘要顺序说明，其他规划开放。必要校验、范围断言、差异审查和构建后提交推送验收同SHA。

- 发布前数据校验、旧69届/其他目录及267候选保持/六系列与六候选白名单断言通过；162个本地Markdown链接及当前计数通过。维护300项（6个后续系列任务）、12主题/273候选；85/70/10、JCR68/CAS11、二十刊样例保持。Pages子路径构建与六入口资源exit0，差异审查/git diff --check通过；同SHA完整CI和部署随后验收。文档脚本首轮因已更新表格断言停止，已检查局部结果后完成剩余步骤，无重复证据条目。

## 2026-10-03：后续系列核验 C12

- C11 66562d74bb4c4b61ba95ae5b58a37ba247e141df已验收[Pages37115667619](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37115667619)：build/deploy成功，首页/版本HTTP200，d82e231ece1db7e564c881fbf7f6bd1f25c274fbed5d5c9167e2d1934b139044与本地一致（2026-10-03T10:14:39.179Z）；完整同SHA CI成功后修改。
- 五系列[官方来源与实际范围](CONFERENCE_EVIDENCE_2026-10-03.md)已记录；只系列核验日/新来源及对应候选nextAction/reviewedAt，没有未来日期推算或历史规则修改。长操作前work/C12_RESEARCH_2026-10-03.md保存验收和边界。当前目录/状态/分区索引保持，其他规划继续，未用重置券。

- 发布前数据校验、所有事实目录字节保持及五系列/五候选字段白名单断言通过；123个本地Markdown链接与当前计数通过。维护295项（唯一CIOP后续任务）、12主题/273候选；Pages子路径构建/六入口资源exit0，差异审查/git diff --check通过。没有重复功能测试；同SHA完整CI及线上版本随后验收。

## 2026-10-03：公告图片巡检 S2

- C12 471b70c71a2c1f49cc1f3d7f3e57943bd7222755已验收[Pages37115972022](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37115972022)：build/deploy成功，首页/版本HTTP200，b158cad6526a16857d2de4fe53c160efbfab4680f4ce072768960bf9554dbc7d与本地一致（2026-10-03T10:19:26.031Z），同SHA完整CI成功后修改。
- 修复显式公告图片缺少变化指纹：image-bytes与text分别记录，旧文字缓存兼容、方法切换重建基线；沿用同URL去重、顺序访问/15秒/2MB及失败保留。只追加IMID已读官方图像到该系列sources，所有学术事实不改。未自动爬图、OCR或解析新日期，其他非文本保持可达检查；每日工作流调度不改。
- 长操作前work/S2_RESEARCH_2026-10-03.md保存范围和C12验收。一项新集成测试初轮误将首次成功时间当失败前基线，修正为最近成功快照后两项来源测试通过；真实IMID图像HTTPS探测baseline/unchanged成功，孤立于正式缓存，结果work/S2-live-probe/source-report。完整功能检查随后完成，再推送验收同SHA。

- 最终数据/范围校验、30项测试、typecheck、修正const后的lint全部通过；125个本地Markdown链接、维护295项/唯一CIOP后续任务、12主题覆盖通过。Pages子路径构建与六入口资源exit0，差异审查/git diff --check通过；目录学术事实保持，仅IMID图像来源追加。实际五小时79%/周28%允许，继续其余有价值规划，无重置券。

## 2026-10-03：历史届次与未完整候选 C13

- S2 3326d9e79650568405d3dd889e39fc1d73c5b684已验收[Pages37116311255](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37116311255)：build/deploy成功，首页/版本HTTP200，4d810d2bf24c7d9995a72e1ea98ca6b38bd091931d42a77a2ab357700f4d211f与本地一致（2026-10-03T10:25:39.234Z），同SHA完整30项测试/typecheck/lint等CI成功后编辑。
- 五候选逐项读官方正文，新增DH2026/UFO2025历史届次；QCMC/EWOFS/ARVRMR保持pending。[逐字段范围](CONFERENCE_EVIDENCE_2026-10-03.md)。DH/ImageSense2027加拿大7月只留线索，UFO CET时刻解释未知仅date；历史费用不迁入未来，母会/展览不作子会具体日。
- 长操作前work/C13_RESEARCH_2026-10-03.md保存S2验收和修改边界。旧70届/85刊及其余目录保持，两个新稳定系列、六候选白名单及ImageSense来源追加断言通过；实际额度五小时85%/周29%允许，未用重置券。必要验证/差异审查后提交推送验收同SHA；其他规划继续。

- 发布前数据校验、旧70届/其余目录与候选字段白名单/66稳定系列归属和当前计数断言通过；166个本地Markdown链接、维护295项（唯一CIOP后续任务）及12主题/273候选覆盖通过。85/72/10、JCR68/CAS11、SCIE72/ESCI11/EI78及二十刊样例保持。Pages子路径构建与六入口资源exit0，差异审查/git diff --check通过；完整功能检查由同SHA CI验收。

## 2026-10-03：传统光学三刊准备细则 E18

- C13 3998d91aa6037c90beb31b6be4039abd3f794bf5已验收[Pages37117128691](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37117128691)：build/deploy成功，首页/版本HTTP200，3ad612188bff38ad228a6927756ef4b8690337756e31e1b0a7be285bcab87a3d与本地一致（2026-10-03T10:40:12.624Z），同SHA完整CI成功后修改。
- AO/JOSA A/JOSA B补摘要建议、通讯作者、资助/图表和补充文件的适用细则；[逐字段出处/版本边界](JOURNAL_GUIDE_EVIDENCE_2026-10-03.md)。约100词/视频15MB的建议与硬性上限分开，旧费用/索引/分区/完整核验日保持。
- 长操作前work/E18_RESEARCH_2026-10-03.md保存C13验收与精确范围。实际五小时90%/周30%允许；只三requirements改变，旧条目其他字段及其余目录保持。必要验证/范围审查后推送同SHA验收，未用重置券，其他规划继续。

- 发布前数据校验、三刊仅requirements/原要求保持与其余82刊/其他全部JSON保持断言通过；129个本地Markdown链接、维护295项/唯一CIOP后续任务、12主题覆盖及当前全部计数通过。Pages子路径构建与六入口资源exit0，差异审查/git diff --check通过；本数据批次完整30项测试/typecheck/lint由同SHA CI验收。

## 2026-10-03：非线性与遥感覆盖 C14

- E18 6457c1dc18b89729c07a8a953257cdcdd31e8c6a已验收[Pages37117365046](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37117365046)：build/deploy成功，首页/版本HTTP200，88ca2a463d28eb47bde13ef3eb8b3bde225c198a7e6589e66917433bbdb8534f与本地一致（2026-10-03T10:45:11.182Z），同SHA完整CI成功后编辑。
- 三新候选审核：新增NLO2025历史与IGARSS2027未来，ISDH具体终日冲突暂缓。[字段来源及范围](CONFERENCE_EVIDENCE_2026-10-03.md)。IGARSS完整论文/摘要/近期文章出版路径和Q1未知体系分开；没有系统登录、投稿或日期推算。
- 长操作前work/C14_RESEARCH_2026-10-03.md保存验收与范围，实际五小时92%/周30%仍允许。旧72届/66系列及其他目录保持，新增两届/两系列、三个候选白名单断言通过；必要校验、差异审查和构建后推送同SHA验收。OSD本轮未获新字段不刷新，已核PhotonicsEurope不重复，其他规划继续。

- 发布前数据校验、旧72届/66系列/85刊与其他JSON保持、三候选字段白名单和当前计数断言通过；172个本地Markdown链接、维护301项（唯一CIOP后续任务）及12主题覆盖通过。85/74/10、68系列、273163/105/5、分区索引/二十刊样例保持；Pages子路径构建及六入口资源exit0，差异审查/git diff --check通过，完整功能检查待同SHA CI。

## 2026-10-03：计算成像未来会期 C15

- C14 01345fc0f084e9ae992451d1a96d89a9cd4bbcfa已验收[Pages37117764585](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37117764585)：build/deploy成功、首页/版本HTTP200，11783a94ce52b4e769ea7043e2c9f86832c0e6854acccb162631c450cc7a7ba5与本地一致（2026-10-03T10:53:44.850Z），完整同SHA CI成功后编辑。
- 新增ICCP2027，动态主页/CFP实际读取、双路径/页限建议/费用币种/模板旧文件名及太平洋时间边界已记录，[依据](CONFERENCE_EVIDENCE_2026-10-03.md)。只新增一届/一个稳定系列及一个候选指定字段，旧74届/68系列及其余目录保持；当前85/75/10、69系列、273164/104/5。
- 长操作前work/C15_RESEARCH_2026-10-03.md保存验收、实际97%/周31%允许额度及ISPRS/ISBI下一步。精确范围/计数断言通过，必要校验、差异审查及构建后提交推送验收同SHA。动态CFP来源端点仍待查，未冒称现静态巡检已全覆盖，不用重置券；其他规划继续。

- 发布前数据校验、旧74届/68系列/期刊等其他JSON保持和单候选白名单/当前计数断言通过；175个本地Markdown链接、维护304项（唯一CIOP后续任务）及12主题覆盖通过。85/75/10、69系列、273164/104/5、JCR68/CAS11、二十刊样例保持。Pages子路径构建/六入口资源exit0，差异审查/git diff --check通过；完整30项测试/typecheck/lint等同SHA CI随后验收。

## 2026-10-03：ISPRS时间深度 C16

- C15 0720633c066f6f1496cacb5bb009e47ca17a7202已验收[Pages37118113485](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37118113485)：build/deploy及完整CI成功，首页/版本HTTP200，8825712958e671bcd09c48aec8a612a36cc446aa1195429b89e187fe5413f112与本地一致（2026-10-03T13:27:36.417Z）。 新额度窗口已恢复；先核实际1%/周31%，读取续接/规划/最新日志，确认HEAD与GitHub相同、工作区干净。旧窗口100%为历史续接，不使用重置券。
- 两届独立准入与一个稳定系列，2029缺日期仅线索；[逐字段证据](CONFERENCE_EVIDENCE_2026-10-03.md)。2030场馆HTTP来源正常浏览器实际成功，目录保留HTTPS学会入口，边界明确。历史准备/出版不迁入后届。
- 长操作前work/C16_RESEARCH_2026-10-03.md保存新额度、C15验收及精确范围；只追加两届/一系列与单候选六字段，其他JSON保持。必要验证/差异审查/构建后推送并验收同SHA，其他规划继续。

- 发布前数据校验、旧75届/69系列及其他目录保持/单候选六字段白名单和当前计数断言通过；179个本地Markdown链接、维护307项（唯一CIOP后续任务）及12主题覆盖通过。85/77/10、70系列/7多届、273165/103/5、JCR68/CAS11、索引和二十刊样例保持。Pages子路径构建及六入口资源exit0，差异审查/git diff --check通过；完整30项测试/typecheck/lint等由同SHA CI验收。

## 2026-10-03：动态正文来源 S3

- C16 6839ca0a47cdca5f56e7e047c3f5f8b80551c5ab已验收[Pages37126973432](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37126973432)：build/deploy及完整CI成功，首页/版本HTTP200，685af700e2eeb7c82e774e71a726961fac16b4a5fbdf370a4afb1cbd275817c9与本地一致（2026-10-03T13:42:10.903Z）。 成功后正式修改。
- 正常浏览器实际CFP状态的资源清单提供pages/home.html与pages/callforpapers.html，并实际核无时间戳端点200、text/html、与观察到的原请求内容逐字节一致；不猜URL、不读取隐藏应用状态。[维护范围](MAINTENANCE.md)。两来源追加ICCP系列sources，只更新单届notes的巡检说明，学术事实/日期/其他数据保持。
- 长操作前work/S3_RESEARCH_2026-10-03.md保存验收及范围；隔离实际现有checker两URL baseline/unchanged、同URL双引用去重通过，正式缓存未动。没有功能代码或调度修改，不新增镜像实现的测试。必要数据/范围校验、报告/文档/构建与差异审查后推送验收同SHA；其他规划继续。

- 发布前数据校验、sources/notes精确白名单及所有学术字段保持断言通过；143个本地Markdown链接、维护307项/覆盖12主题及当前计数保持。Pages子路径构建/六入口资源exit0、差异审查/git diff --check通过；同SHA完整CI与部署随后验收。

## 2026-10-04：生医成像与图像传感器 C17

- S3 c8fba752d74bb211feed202fd996030794d88aac已验收[Pages37127257725](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37127257725)：build/deploy及完整CI成功，首页/版本HTTP200，86ed484bf56a6cfebdb4b87b00b889858565d187d85b4ff6f0ab9ec903dba34b与本地一致（2026-10-03T13:47:07.575Z）。 下载调用异常延迟跨日，10/4先查实际额度0%/周33%允许、HEAD与GitHub相同且干净、重生成307维护项/12主题覆盖，再接续。没有重复提交或恢复其他调度。
- [C17逐字段证据](CONFERENCE_EVIDENCE_2026-10-04.md)：ISBI单盲/4+1页、一页摘要非出版及EDT歧义；IISW实际可见2027两页/PST时区歧义与未知出版分开。保留冲突届号/旧模板链接边界。
- 长操作前work/C17_RESEARCH_2026-10-04.md保存跨日范围、S3验收与精确白名单。两PDF实际渲染目视；IISW沙箱WindowsTLS凭据失败后同URL授权只读curl成功，证书验证不变。必要校验/范围/差异审查/构建后推送验收同SHA；其他规划继续。

- 首轮时区校验发现IISW的旧冬季映射不符当前Intl规则，尚未提交。查BC政府2026公开公告确认全年UTC−07；修正为日期级并保留原PST歧义，没有更改校验器或套美国城市以通过。修正后再完成必要检查。

- 最终数据校验、旧77届/70系列/其他目录保持及双候选六字段白名单/日期级歧义断言通过；186个本地Markdown链接、维护319项（唯一CIOP后续任务）和12主题覆盖通过。85/79/10、72系列/7多届、273167/101/5、分区索引及二十刊样例保持；Pages子路径构建/六入口资源exit0，差异审查/git diff --check通过，完整30项测试/typecheck/lint等由同SHA CI验收。

## 2026-10-04：PDF 公告巡检 S4

- C17 a0d9e659dc8d2e9931202db190361df72a1224c7已验收[Pages37181016074](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37181016074)：build/deploy及完整CI成功，首页/版本HTTP200，15aec460873e0fd037776d0930272564fcd97c777506fc4d8c1e6385d027561e与本地一致（2026-10-04T05:51:29.380Z）。 长操作前work/S4_RESEARCH_2026-10-04.md保存验收和精确范围，实际8%/周35%允许，未使用重置券。
- 显式 application/pdf 加 pdf-bytes/文件头验证及5,000,000字节上限；text/image维持2MB、15秒/去重/顺序/失败保留。其余非文本可达检查，不自动发现附件、提取正文、OCR或改写事实，调度保持。[维护边界](MAINTENANCE.md)。
- 新CLI集成覆盖2,108,834字节有效PDF首次/不变/改变、共享引用去重、方法切换、无效头/5MB超限/403保留最近成功基线；既有普通二进制案例继续保留。31项完整测试、typecheck、lint、数据校验均exit0。
- 正常TLS授权只读隔离探测ISBI/IISW两实际官方PDF：首次baseline、随后unchanged，ISBI双引用去重；SHA256分别0aed86f4a6cc6bf37fd867f869ca01e8c0c4e88c3e30eb83ad2f4dd771538a14与5a3eec2c273dc594eee9ea352e2592d30d04b9446b54a5d5b69e902fd6739f9f（2026-10-04T05:53:57.817Z/05:53:59.787Z）。work/S4-live-probe保存结果，正式缓存未动。

- 发布前所有目录JSON/每日来源调度字节保持断言、149个本地Markdown链接及当前计数通过；维护319字段任务/唯一CIOP后续任务，12主题覆盖。Pages子路径构建与六入口资源exit0，功能/文档差异审查和git diff --check通过，按同SHA验收完整CI、部署和线上版本后再改正式数据。其他规划继续。

## 2026-10-04：全国光子学时间深度 C18

- S4 ecf3c4adf9a2c11ea7dbb71b1f68af66f300465c已验收[Pages37181592830](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37181592830)：build/deploy及完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，15aec460873e0fd037776d0930272564fcd97c777506fc4d8c1e6385d027561e与本地一致（2026-10-04T06:02:45.871Z）。 完整验收后修改。长操作前work/C18_RESEARCH_2026-10-04.md保存范围与续接，未用重置券。
- 两历史届次与一个稳定系列，[字段来源](CONFERENCE_EVIDENCE_2026-10-04.md)。2027大学承办线索已知而日期/城市未知，未造正式条目；2026大PDF超过巡检5MB明确人工边界，8/16返程不是终日。各届出版/费用独立，2025送检声明未当实际索引。
- 旧79届/72系列及全部其他JSON保持、单候选六字段白名单/8多届与当前计数断言；必要校验、文档/报告/构建和差异审查后推送并验收同SHA。其他规划继续，既有自动任务保持。

- 发布前数据校验、精确范围断言、151个本地Markdown链接和当前计数通过；维护319项（唯一CIOP后续任务）及12主题覆盖，85/81/10、73系列/8多届、273候选168/100/5、分区索引/二十刊样例保持。Pages子路径构建与六入口资源exit0，差异审查/git diff --check通过；本数据批次完整31项测试等由同SHA CI验收。

## 2026-10-04：基础光学历史与Asia临近维护 C19

- C18 6a92ed20a3efd9cf19fccc1df10faa7c85ba4ede已验收[Pages37181983389](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37181983389)：build/deploy及完整CI成功，首页/版本HTTP200，50c64adf6f1d01e2b2272c4d55b2fa3deb62a790237c4ae46809a751a820044c与本地一致（2026-10-04T06:11:12.025Z）。 完整验收后修改；长操作前work/C19_RESEARCH_2026-10-04.md保存实际20%/周36%允许额度及范围。
- [逐字段来源](CONFERENCE_EVIDENCE_2026-10-04.md)：新基础光学2025/稳定系列；Asia2026只五字段、现有系列仅来源/后续日，两候选白名单。全文10/7与海报PDF/现场交流分开，早鸟/报名支付界限与版本16/17专题保留；2027无日期不建正式届。
- 原基础光学站证书过期未绕过，主办方通知与举办报道可读支持历史准入；未成功查后续不写核验日。其他JSON及旧记录保护，必要数据/范围/文档/报告/构建与差异审查后推送验收同SHA，其他规划继续，未用重置券。

- 发布前数据校验、精确范围/当前计数及154个本地Markdown链接通过；维护321项含Asia全文P1、后续公告CIOP/基础光学两项，12主题覆盖。85/82/10、74系列/8多届、273169/99/5、分区索引/二十刊样例保持。Pages子路径构建与六入口资源exit0，差异审查/git diff --check通过；完整31项测试等由同SHA CI验收。

## 2026-10-04：QIP/DAMOP/GPS未来准备 C20

- C19 f146b13209e44c8ef0b5d0ee286c081f33ed32b2已验收[Pages37182355400](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37182355400)：build/deploy及完整CI成功，首页/版本HTTP200，1598180e6f0d645ba2c50a6499f3687e8f1461b17f843ce18789ec7659f988ba与本地一致（2026-10-04T06:20:08.621Z）。验收后正式编辑；长操作前work/C20_RESEARCH_2026-10-04.md保存范围与续接。实际五小时31%/周38%允许，未用重置券。
- [逐字段来源](CONFERENCE_EVIDENCE_2026-10-04.md)：三2027独立系列/届次；IAQI所链qip2027.org实际重定向当届官网已核。QIP登记前提、独立海报/教程主会边界与终年错误保留；APS摘要约1300字符/互惠会员及无时区日期保持，不套旧届规则。
- 旧82届/74系列及其他JSON保持，三候选仅六审核字段；必要数据/范围/文档/报告/构建及差异审查后推送验收同SHA，其他规划继续，未登录、投稿、邮件或支付。

- 发布前数据校验、旧82届/74系列及其他JSON保持/三候选六字段白名单与当前计数断言通过；174个本地Markdown链接、维护329项/后续两项及12主题覆盖通过。85/85/10、77系列/8多届、273172/96/5、分区索引及二十刊样例保持。Pages子路径构建/六入口资源exit0，差异审查/git diff --check通过；完整31项测试/typecheck/lint等由同SHA CI验收。

## 2026-10-04：生化传感指南与费用 E19

- C20 5c0fc68746a0ece6dbd2b0c9b30355e5f345365e已验收[Pages37183109619](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37183109619)：build/deploy及完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，659556a381f6e90c3f913d752268392157ff2af3f592812c831f309b60fb1026与本地一致（2026-10-04T06:34:16.279Z）。 长操作前work/E19_RESEARCH_2026-10-04.md保存验收与精确范围。
- 自动请求403但普通浏览器同URL成功，逐刊实际读稿型、文件/摘要/关键词/Highlights、评审、数据/补充及所链费用页，[逐字段范围](JOURNAL_GUIDE_EVIDENCE_2026-10-04.md)。两刊综述/Highlights区别、Option B鼓励共享与强制声明、APC/订阅边界分开，不登录/提交/付款。
- 只两requirements/publishing，原范围/其他字段及其他83刊与所有其他JSON保持；必要数据/范围/文档/报告/构建及差异审查后推送验收同SHA，其他规划继续，未用重置券。

- 发布前数据校验、两刊仅requirements/publishing/原范围保留及其他83刊/全部其他JSON保持断言通过；159个本地Markdown链接、维护329项/后续两项、12主题覆盖与当前计数通过。Pages子路径构建/六入口资源exit0，差异审查/git diff --check通过；完整31项测试/typecheck/lint由同SHA CI验收。

## 2026-10-04：交叉六篇样例 E20

- E19 631927d8e1e4fb0bf0cd43d0fc0ce344a4757bfe已验收[Pages37183364095](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37183364095)：build/deploy及完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，9f52fa463c37ad08fc9b179819a8404f79fa9eacba11a98137a5719628794601与本地一致（2026-10-04T06:38:59.741Z）。 长操作前work/E20_RESEARCH_2026-10-04.md保存允许额度39%/周39%、来源访问及待验收记录，正式编辑前补成功凭据。
- 六出版社实际浏览器页头/摘要均读，[逐篇范围](JOURNAL_SCOPE_EVIDENCE_2026-10-04.md)。ACS DOI实际重定向公开摘要，Science自动验证自行完成，无挑战解题/登录/付费绕过；题名/日期与期次/光学实验范围独立记录。
- 只两scopeExamples，其他83刊及旧20刊样例和全部其他JSON保持，22刊至少三篇。必要验证/范围/文档/报告/构建/差异审查后上传验收同SHA，未用重置券，其他规划继续。

- 发布前数据校验、两scopeExamples字段/全部其他学术数据保持与22刊样例计数断言通过；162个本地Markdown链接、维护329项/后续两项和12主题覆盖通过。Pages子路径构建/六入口资源exit0，差异审查/git diff --check通过；完整31项测试/typecheck/lint由同SHA CI验收。

## 2026-10-04：传感三篇及AAAS指南 E21

- E20 80d6b09d8f599178561b9422d39680ee50dac698已验收[Pages37183642235](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37183642235)：build/deploy及完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，309e859fe34019811b0cb957d098827bf40f2d5cb9b0bb32896c7e74c2deeefd与本地一致（2026-10-04T06:44:52.005Z）。 work/E21_RESEARCH_2026-10-04.md保存长操作前范围与验收；正式编辑前接受成功，实际五小时46%/周40%允许，未用重置券。
- [三篇样例](JOURNAL_SCOPE_EVIDENCE_2026-10-04.md)/[当刊指南费用](JOURNAL_GUIDE_EVIDENCE_2026-10-04.md)实际正常浏览器读取；收费页超时只复查同页，未造重复提交。15000/10000稿型、150词摘要、SI/辅助限制与USD5450/大陆附加/减免范围分开。
- ACS Sensors仅scopeExamples；Science Advances仅requirements/publishing；其他83刊/旧22刊样例/全部其他JSON与整刊日期保护。必要验证/文档/报告/构建和差异审查后推送验收同SHA，其他规划继续。

- 发布前数据校验、指定三字段白名单/旧22刊样例/其他83刊及全部其他JSON保持与23刊计数断言通过；170个本地Markdown链接、维护329项/后续两项和12主题覆盖通过。Pages子路径构建/六入口资源exit0，差异审查/git diff --check通过；同SHA CI验收完整31项测试/typecheck/lint。

## 2026-10-04：器件传感六届 C21

- E21 45c8ee77c9a4039f66051c1ce3e29043c234a990已验收[Pages37183967735](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37183967735)：build/deploy及完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，8a43be02d3bff44c95a96fb80bb3ebcdbc925a7787bf5834b1cdfba2c212f77d与本地一致（2026-10-04T06:51:37.413Z）。 验收后正式编辑。work/C21_RESEARCH_2026-10-04.md长操作前保护续接，实际五小时51%/周41%允许，未用重置券。
- [逐字段官方来源](CONFERENCE_EVIDENCE_2026-10-04.md)：四系列六届，两个已观测官网PDF经正常TLS只读下载、抽取并渲染核图；不绕过证书、登录或提交。IEDM后两届仅明示会期，MEMS系统旧提示与SENSORS通知冲突保留，开放海报不当出版轨道。
- 旧85届/77系列及其他JSON保持、四候选六字段白名单；必要数据/范围/文档/报告/构建和差异审查后推送验收同SHA。README/扩充计划英文遗留旧计数同步，历史数字保持；其余规划继续。

- 发布前数据校验、旧85届/77系列保持/四候选六字段白名单/日期与未知路径计数断言通过；217个本地Markdown链接、维护349项及12主题覆盖通过。85/91/10、81系列/9多届、273候选176/92/5、分区索引与23刊样例保持；Pages子路径构建/六入口资源exit0，差异审查/git diff --check通过。完整31项测试/typecheck/lint由同SHA CI验收。

## 2026-10-04：材料会议九届 C22

- C21 15316fae6cbca5a674d233f9d814afe94f5a8e21已验收[Pages37184918851](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37184918851)：build/deploy及完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，490b7e5d3bc18f4bd1a741b8a4ca501df3ffa7576972dcaf4e04f74477afd7c5与本地一致（2026-10-04T07:11:11.580Z）。 验收后编辑。work/C22_RESEARCH_2026-10-04.md长操作前保存允许额度60%/周43%、后续65%/44%及范围，未用重置券。
- [逐字段来源](CONFERENCE_EVIDENCE_2026-10-04.md)：MRS自动请求520但正常浏览器原URL可读；两页Spring指南全文/核图，68页Fall CFP仅第一页图像日期及第13页范围，不声称通读。E-MRS两历史与两未来规则分别读取/未知，夏季CET歧义与提案边界保留。
- 只九新届/四系列/四候选六审核字段，旧91届/81系列及全部其他JSON保护；必要校验/范围/文档/报告/构建与差异审查后上传、验收同SHA。其他规划继续。

- 发布前数据校验、旧91届/81系列保持、四候选六字段白名单及未来未知/提案/时区边界断言通过；221个本地Markdown链接、维护369项/后续两项、12主题覆盖及当前计数通过。85/100/10、85系列/12多届、273候选180/88/5，分区索引与23刊样例保持。Pages子路径构建及六入口资源exit0、差异审查/git diff --check通过；完整31项测试/typecheck/lint由同SHA CI验收。发布前实际五小时70%/周44%允许，未用重置券。

## 2026-10-04：生化传感六篇 E22

- C22 ef63a86d3f01f8c58b4c440b4d89b595248002e9已验收[Pages37185777328](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37185777328)：build/deploy及完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，153394d1f462d472353f085cdbe90c9c0eb75ed45eb3a100f5d6df9cf8ed7881与本地一致（2026-10-04T07:27:13.423Z）。 正式编辑前已验收；work/E22_RESEARCH_2026-10-04.md保存长操作前实际70%/周44%允许及后续74%/45%、来源范围，不用重置券。
- 六出版社页实际正常浏览器读取页头/公开摘要/Show more历史，[逐篇范围](JOURNAL_SCOPE_EVIDENCE_2026-10-04.md)。Available online不是Accepted/VOR/卷期；光子皮肤二手02-27不覆盖原页02-26，X伴生刊排除。
- 只两scopeExamples，其他83刊/旧23刊样例及全部其他JSON保护；必要数据/精确范围/文档/报告/构建及差异审查后推送，同SHA验收CI/部署/线上版本，其他规划继续。

- 发布前数据校验、两字段白名单/旧23刊样例与其他83刊/全部其他JSON保持、25刊样例首次日/不同卷断言通过；180个本地Markdown链接、维护369项和12主题覆盖通过。Pages子路径构建及六入口资源exit0，差异审查/git diff --check通过；完整31项测试/typecheck/lint由同SHA CI验收。

## 2026-10-04：慕尼黑2027提交准备 B4

- E22 5a748975a7f3b831007319dc246f272a094b5590已验收[Pages37186160819](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37186160819)：build/deploy及完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，f4932634970e9d14d1fc6d072c5e27b997f17282f427e8ac7a15ad17504ed61b与本地一致（2026-10-04T07:34:27.756Z）。 work/B4_RESEARCH_2026-10-04.md在正式编辑前保存验收、来源和部分范围，最近实际74%/周45%允许，不用重置券。
- 大会2027官方讲者页直接可读、实际链接CLEO Submission明确2025；SPIE当页正常浏览器仍2025节目/主席，[字段范围](CONFERENCE_EVIDENCE_2026-10-04.md)。只当届明确日程/共用报告准备，未套旧稿规、登录、提交或注册。
- 三已有会严格字段白名单、两日期级/旧注册和出版保持，三系列只sources；97其他届、85刊/25样例及其他JSON保护，必要校验/报告/文档/构建/差异审查后上传验收同SHA，其他规划继续。

- 发布前数据校验、精确部分字段/整条日期/其他JSON保持及日级/LiM精确日期断言通过；183个本地Markdown链接、维护369项和12主题覆盖通过。Pages子路径构建六资源exit0、差异审查/git diff --check通过；完整31项测试/typecheck/lint由同SHA CI验收。实际五小时80%/周46%允许，继续有价值任务。

## 2026-10-04：SPIE欧洲/光刻三历史届 C23

- B4 64ba2ca557eba428f0f673780451319e536156e0已验收[Pages37186450463](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37186450463)：build/deploy及完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，e997ae29f033da056ae5aed070453e1a5826f9ab1ced1a04634fcb9fa3147a6e与本地一致（2026-10-04T07:40:53.417Z）。 正式编辑前验收；work/C23_RESEARCH_2026-10-04.md长操作前保存实际84%/周46%允许、来源与未知范围。最新每日来源37184564015 scheduled/head45c8ee7 success，2026-10-04T07:01:51Z，只已读元数据未审附件；旧自动任务未恢复。
- 三SPIE官网实际普通浏览器读取；PUV实际链接EUV2026节目核光源/高NA/光学表面与计量子集，[逐字段范围](CONFERENCE_EVIDENCE_2026-10-04.md)。三历史正式届与未来线索分开；三个未来城市未明确当届，沿用原准入边界不建未来正式届、不套旧页眉/CFP。
- 只新增三历史届/三系列（后续实际已核日期），三候选六审核字段、LPM仅nextAction，旧100届/85系列及全部其他JSON保护；CANDIDATES遗留当前计数同步，历史日志不重写。必要校验/文档/报告/构建/差异审查后推送验收同SHA，其他规划继续，未用重置券。

- 最终发布前103届/88系列/12多届、候选183/85/5与原100届/85系列/其他JSON保持断言及数据校验通过；只三历史届，缺城市的三未来预告仍非正式线索。234个本地Markdown链接、维护369项和12主题覆盖通过；最终范围Pages子路径构建及六资源exit0、差异审查/git diff --check通过。完整31项测试/typecheck/lint由同SHA CI验收。

## 2026-10-04：JCIS指南与费用 E23

- C23 2a6036bc3d39f5c2f7f85b49d1f67146562ce731已验收[Pages37187049524](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37187049524)：build/deploy及完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，89b0b4e07aa01bf42e2d7fb65f8221c999c79be2d248bbed1e5a17ad30f8e9a3与本地一致（2026-10-04T07:57:04.469Z）。 正式编辑前验收；work/E23_RESEARCH_2026-10-04.md长操作前保存实际95%/周48%允许、精确范围和待办，未用重置券。
- JCIS本刊稿型/250词摘要/结构/图形摘要/一面A4附信/通常55引用、Option C数据与USD4820不含税OA及24个月自存档已核，[逐字段范围](JOURNAL_GUIDE_EVIDENCE_2026-10-04.md)。只两字段，原范围/整刊日期/索引分区/样例及其他84刊和其他JSON保护；85/103/10、88系列/12多届、273183/85/5、25刊样例保持。 实际正常浏览器读取指定段落及指南所链OA页，旧ISSN路径正常重定向；不声称完整伦理/模板/协议逐条审查。
- 必要数据/字段白名单/文档/报告/构建和差异审查后上传，同SHA验收CI/部署/线上版本；尚未完成的规划在续接中保留。

- 发布前数据校验、只两字段/原范围/其他84刊及全部其他JSON保持与25刊样例计数断言通过；189个本地Markdown链接、维护369项和12主题覆盖通过。Pages子路径构建及六入口资源exit0、差异审查/git diff --check通过；完整31项测试/typecheck/lint由同SHA CI验收。最新实际五小时97%/周48%仍允许，优先完成本批上传验收并保存续接，不开启超出余额的新长批次。

- E23 a5e2fc2c38ff7412fe7a5ca680c020787244e197已验收[Pages37187612957](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37187612957)：build/deploy及完整CI成功，首页/版本HTTP200，fce85f64fa7ddd533d6a658c68153f3937ccb3c37b02a91516816a6c903368a8与本地一致（2026-10-04T08:03:36.912Z）。最新实际五小时99%/周49%、ordinaryUsageAllowed=true，余额不足以可靠完成新批次，结束本轮；不是系统已拒绝使用。保护已上传成果，既有五小时调度重新检查，不用重置券/购买额度/恢复旧任务。此次只保存交接文档，目录摘要保持；交接提交也按自身SHA验收部署。

## 2026-10-04：Dyes and Pigments / TIE指南 E24

- 交接8ad95d30bd3e40741f94354f3827b9a74169d543已确认[Pages37187756331](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37187756331)：build/deploy及完整CI成功，首页/版本HTTP200，fce85f64fa7ddd533d6a658c68153f3937ccb3c37b02a91516816a6c903368a8与本地一致（2026-10-04T13:07:37.373Z）。 新窗口实际0%/周49%允许；先读三续接文档及实际GitHub状态，无未上传提交，work/E24_RESEARCH_2026-10-04.md在长操作前保存范围；未用重置券。
- 两官网自动读取403/418，普通浏览器实际成功。Dyes and Pigments当前短文/提案、Highlights/图形摘要、化合物/光谱资料、Option C与USD3850不含税已核；TIE当前10/12页与4/6页、机构邮箱/ORCID/硬件实验、2026 US$2800及范围排除已核，旧最终文件页8/10页和超页价冲突明确保留，[逐字段范围](JOURNAL_GUIDE_EVIDENCE_2026-10-04.md)。只指定六字段、原范围条/完整核验日/分区索引/样例与其他83刊及所有其他JSON保持。85/103/10、88系列/12多届、273183/85/5及25刊样例不变。 DYPI提案仅核入口，不发送邮件/提交；TIE旧模板/摘要PDF内部未读，最新网站与旧最终页差异逐项保存，未登入或上传。
- 只六字段及文档当前概览修正，必要校验/范围断言/文档/报告/构建/差异审查后逐批上传，并验收同SHA CI/Pages/线上版本；未改既有调度，其他规划继续。
- 发布前数据校验、六字段白名单/原首条范围/其他83刊及所有其他JSON保持、25刊样例计数断言通过；192个本地Markdown链接、维护369项与12主题覆盖通过。Pages子路径构建和六入口资源exit0、差异审查/git diff --check通过；完整31项测试/typecheck/lint等由同SHA CI验收。

## 2026-10-04：JCIS / DYPI六篇光学样例 E25

- E24 ac8c06c1fd0f172d6491638e3c201e6a8f2058f0已验收[Pages37205097390](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37205097390)：build/deploy及完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，74a50336a2631a7205e7d80aae9b6346d66fcdf888b27b15e2740bc15ae362c0与本地一致（2026-10-04T13:18:26.719Z）。 正式编辑前验收；work/E25_RESEARCH_2026-10-04.md长操作前保存8%/周50%允许、来源与精确边界，未用重置券。
- JCIS/DYPI各三篇不同卷近两年原始光学论文，核出版社原题/DOI/公开摘要及首次在线、VOR与期次，[逐篇范围](JOURNAL_SCOPE_EVIDENCE_2026-10-04.md)。结构色自组装/水凝胶/涂层及有机比率/NIR/潜指纹成像分开；未来月份期次已在此前上线，不造月份中的具体日。仅两scopeExamples，其他83刊/旧25刊样例、指南/日期/分区索引及全部其他JSON保持，至少三篇刊数25→27。85/103/10、88系列12多届、273183/85/5保持。 普通浏览器实际读取六篇原页；Cookie遮挡先按必要Cookie选项正常关闭后再展开历史，未绕过安全警告/登录/付费。G4 DOI实际重定向S0143720825008836，其他期刊/综述发现项未用于本刊原创样例。
- 必要数据/范围/文档/报告/构建与差异审查后推送，验收同SHA CI/Pages/线上版本；其他规划继续。
- 发布前数据校验、两scopeExamples字段/其他83刊与旧25刊样例/所有其他JSON保持及27刊计数断言通过，六篇首次日近两年/三独立卷检查通过；195个本地Markdown链接、维护369项及12主题覆盖通过。Pages子路径构建与六入口资源exit0，差异审查/git diff --check通过；完整31项测试/typecheck/lint等由同SHA CI验收。

## 2026-10-04：计算成像三系列四届 C24

- E25 5ff50f881bc8aad31a0cbfe74a4efd619c391af5已验收[Pages37205969850](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37205969850)：build/deploy及完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，3bd877043515fffde7a22326dbf3b01e06ab7e4e5f46b9dcd2ce22fcddbf0812与本地一致（2026-10-04T13:36:06.744Z）。 正式编辑前验收；work/C24_RESEARCH_2026-10-04.md长操作前保存实际20%/周52%允许及来源/冲突，后续24%/53%允许，未用重置券。P1ACP/ICALEO已在Oct3核过，无新事实不重复改日期。
- 三候选新增CVPR2026/2027、ECCV2026、ICCV2025四届，计算成像/相机/重建与显微子集条件适配；完整活动与主会/Workshop日期分开，往届模板不迁未来。[逐字段来源](CONFERENCE_EVIDENCE_2026-10-04.md)。ICCV2027两官网日期冲突未入正式届，2025通知差异保留null；CVPR2027指南404保留篇幅未知。当前85/107/10、91稳定系列/13多届、273候选186 admitted/82 pending/5 deferred、27刊至少三篇样例；分区索引与其他JSON保持。其他规划继续，既有五小时和每日来源巡检保持。 三官方站CFP/Dates/历史指南与注册页实际读取；正常浏览器读CVPR2027CFP、ICCV2027冲突Dates、2026/2025篇幅匿名细则，未登录、联系或提交。
- 只四新增届/三新系列与三候选六审核字段；旧103届/88系列、85刊27样例及全部其他JSON保护。RESUME当前样例数/续接句与EXPANSION当前表遗留数字同步，历史记录不改。必要校验/范围/文档/报告/构建与差异审查后上传验收同SHA，剩余规划持续。

- 发布前数据校验、旧103届/88系列及所有其他JSON保持、三候选六字段白名单、107/91/13与186/82/5计数断言通过；CVPR2027稿规/费率unknown、日级AoE和ICCV2027暂不准入/2025通知null明确检查。247个本地Markdown链接、维护376项/12主题覆盖通过。Pages子路径构建与六入口资源exit0、差异审查/git diff --check通过；完整31项测试/typecheck/lint等由同SHA CI验收。

## 2026-10-04：原子物理/芯片三届 C25

- C24 d5ecd3bdcbc681f227806bb718bab93da1763489已验收[Pages37206875465](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37206875465)：build/deploy及完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，6fe215c9f4ca55c98cdcb93cc35fa96b88d25cc9efaf551ba8962b823dada18f与本地一致（2026-10-04T13:49:18.526Z）。 正式编辑前验收；work/C25_RESEARCH_2026-10-04.md长操作前保护来源与范围，后续实际32%/周54%允许，不用重置券。
- 两候选新增ICAP2024/2026历史与ISSCC2027，共三届/两系列。ICAP保留A0/费率的届次边界；ISSCC普通已关闭，工业LBN10/7意向限2027推出产品/最多4篇，SRP10/21学生展示独立，不当普通稿延期，[逐字段来源](CONFERENCE_EVIDENCE_2026-10-04.md)。当前85/110/10、93系列/14多届、273候选188 admitted/80 pending/5 deferred，27刊样例/分区索引保持。后续ICAP日城和ISSCC注册/LBN模板/SRP出版仍开放；其他规划继续。 正常浏览器读ICAP29主页/日期/注册/所链ICAP28原页与ISSCC2027LBN/普通稿；已观测PDF经正常TLS下载6709920字节、五页，抽取前3页并渲染核第1/3页，内部其他页未读。未登录、付款、提交或联系主办方。
- 只三新增届/两新系列、两候选六审核字段；旧107届/91系列、85刊/27样例与全部其他JSON保持。必要验证、范围/报告/文档、构建和差异审查后上传验收同SHA，其余规划继续。

- 发布前数据校验、旧107届/91系列及所有其他JSON保持、两候选六字段白名单、110/93/14与188/80/5计数断言通过；工业LBN限定与学生SRP、未知模板/费用和ICAP届次尺寸边界通过。251个本地Markdown链接、维护383项/12主题覆盖通过；Pages子路径构建/六入口资源exit0、差异审查/git diff --check通过，完整31项测试/typecheck/lint等由同SHA CI验收。

## 2026-10-04：MICCAI历史/未来两届 C26

- C25 e764b139e28a30c172b066105a4fd1eedd0c9c4d已验收[Pages37207744738](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37207744738)：build/deploy及完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，d57cd321fc0b8007ef4cb1f7502cdf3386dfe256650d7603cce5cd93641bf85c与本地一致（2026-10-04T14:09:09.587Z）。首次push连接超时后补推同提交成功；一次线上TLS重置后只复查原部署，未重复提交。 正式编辑前已验收；work/C26_RESEARCH_2026-10-04.md在长操作前保护来源/冲突，实际五小时40%/周55%允许，不用重置券。
- MICCAI新增2026历史与2028圣保罗官方预告，两届共一稳定系列；2027两个Society页面9/26与9/27起日冲突，未进正式届。2026主会论文目录的光片荧光显微/共聚焦内镜/光声子集已核，未来稿规与注册未知，不套旧8+2页。当前85/112/10、94系列/15多届、273候选189 admitted/79 pending/5 deferred，27刊样例和分区索引保持。[逐字段范围](CONFERENCE_EVIDENCE_2026-10-04.md)。其他规划继续。 Society Upcoming/公告及2026主页、指南、Dates、注册/出版/主会公开目录和卫星入口实际普通浏览器读取；只相关目录题名和页面已核段落，不声称论文全文、19卷、模板ZIP或全书PDF已读。未登录/注册/联系/提交。
- 仅两新增届/一系列/一候选六审核字段；旧110届/93系列、85刊/27样例及全部其他JSON保护。EOD通知日级，未来未知、2027起日/2026公开时段与退款年度差异保留。必要验证/文档/报告/构建/差异审查后推送验收同SHA，其余规划继续。

- 发布前数据校验、旧110届/93系列与所有其他JSON保持、一候选六字段白名单、112/94/15和189/79/5计数断言通过；2027未入正式/2028全部截止未知/通知EOD日级边界通过。255个本地Markdown链接、维护386项与12主题覆盖通过。Pages子路径构建和六入口资源exit0、差异审查/git diff --check通过；完整31项测试/typecheck/lint等由同SHA CI验收。最新实际五小时44%/周56%允许，继续其余规划。

## 2026-10-04：Photoacoustics与IJEM指南 E26

- C26 0a5d150765de54d18a12deb4a688105abb5e58fe已验收[Pages37208657675](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37208657675)：build/deploy及完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，95b25becae39a0c34431c3623b3bcdab2df7280b208637f357ca6678adcaa561与本地一致（2026-10-04T14:19:41.538Z）。 正式编辑前已验收；work/E26_RESEARCH_2026-10-04.md长操作前保存实际44%/周56%允许及来源，后续47%/56%允许，不用重置券。
- Photoacoustics补本刊Letter8初稿页/2000词/5图表与4印刷页、250词摘要、建议Highlights/图形摘要、Option C及USD4070不含税；IJEM本刊IOP About明确编辑部资助CC BY作者无费，并补本刊Letters/Research Highlights1000词。只两刊requirements/publishing，原首条范围/整刊日期/索引分区/样例及其他83刊、全部其他JSON保护。[字段与范围](JOURNAL_GUIDE_EVIDENCE_2026-10-04.md)。85/112/10、94系列/15多届、189/79/5与27刊样例保持，其余规划继续。 Photoacoustics自动403但普通浏览器指南/OA页实际可读；旧ISSN OA路径正常重定向。只读已核稿型/摘要/文件/数据/费用段，不声称完整伦理/临床试验/模板文件已核。
- IJEM Support/所链About/IOP本刊About已读；收费子页跳第三方validate.perfdrive.com反机器人验证被自动审批拒绝，理由是可能涉及访问控制，未访问验证域名、未转用其他工具绕过。费用依据是此前可读IOP本刊About的明确编辑部资助声明，收费子页/peer-review policy未读，匿名模式未定。无需该受限跳转即可完成本批已核字段。
- 必要校验/四字段范围/文档/报告/子路径构建与差异审查后推送，验收同SHA CI/部署/线上版本，其他规划继续。

- 发布前数据校验、四字段白名单/原首条范围/83其他刊及全部其他JSON保护、27样例计数与建议材料/费率/匿名未知边界断言通过；207个本地Markdown链接、维护386项/12主题覆盖通过。Pages子路径构建六入口资源exit0，差异审查/git diff --check通过。完整31项测试/typecheck/lint等由同SHA CI验收。

## 2026-10-04：Nano Letters / Inorganic Chemistry六样例 E27

- E26 0190d244afe22c6169d0ace3c4b80aeb842b0fe7已验收[Pages37209054631](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37209054631)：build/deploy及完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，87ec92bf908f7c01b50792535d6790bf9f7bef082b240f939091d9caf4b203ad与本地一致（2026-10-04T14:24:02.767Z）。 正式编辑前验收；work/E27_RESEARCH_2026-10-04.md长操作前保存来源线索与范围，最新实际五小时52%/周57%允许，未用重置券。
- Nano Letters/Inorganic Chemistry各补三篇近两年不同期次原创光学样例：灰度非线性超表面/NIR-II聚合物点/电压可调量子点出射、稀土缺陷发光/Pt蓝光OLED/POM非线性散射。首次上线与较晚卷期分开；量子点合作发射尚未演示。仅两scopeExamples，其他83刊/旧27刊样例与所有其他JSON保持，29刊至少三篇。[逐篇范围](JOURNAL_SCOPE_EVIDENCE_2026-10-04.md)。85/112/10、94系列15多届、273189/79/5、分区索引/指南与整刊日期保持，其余规划继续。 六原页普通浏览器读页头/公开摘要、正常点击Article history展开出版历史；最初自动安全加载随后原页正常显示，没有点击验证/CAPTCHA、绕过登录或下载收费全文。OA全文虽可见，仅按页头/摘要/历史范围核验。
- 必要数据/两字段范围/文档/报告/子路径构建与差异审查后提交推送，同SHA验收部署及线上目录；其余规划继续。

- 发布前数据校验、仅两scopeExamples/83其他刊与旧27刊样例/其他JSON保持、29刊计数与近两年不同论文/合作发射未知断言通过；210个本地Markdown链接、维护386项及12主题覆盖通过。Pages子路径构建及六资源exit0、差异审查/git diff --check通过，完整31项测试/typecheck/lint由同SHA CI验收。

## 2026-10-04：传感/光通信四届 C27

- E27 d9a3c05fc2747a48ce91d8c6d07f3577b749732a已验收[Pages37209447605](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37209447605)：build/deploy与完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，da86fd815fd61d1789752472168dde87da79353bf027e126863569019511ed08与本地一致（2026-10-04T14:35:54.231Z）。API两次连接超时只复查同部署，未重复提交。 正式编辑前验收；work/C27_RESEARCH_2026-10-04.md保存来源与未知，实际五小时61%/周59%允许，不用重置券。
- 新增TRANSDUCERS2027、GLOBECOM2026、ICC2026历史/2027预告四届共三系列，光学传感与光网络子集条件适配。HST初摘要/接受确认/录用后稿件分开，GLOBECOM普通与Workshop更新后截止分开；ICC2027只官方日城，稿规unknown不复制2026。当前85/116/10、97系列/16多届、273候选192 admitted/76 pending/5 deferred、29刊至少三篇样例，分区索引保持。[逐字段来源与范围](CONFERENCE_EVIDENCE_2026-10-04.md)。其他规划继续。 普通浏览器实际读Transducers主页/About/Dates/空白Registration、GLOBECOM主页/CFP/Authors与ICC2026主页/CFP/Venue；ComSoc官方表读2027 ICC行。只页内已核段落，模板/ONS PDF/论文集内部未读，不声称实际索引。未登录/注册/联系/提交。
- GLOBECOM Guidelines普通访问超时，浏览器内部错误页又被URL策略阻止读取，未改安全/网络设置、未绕过；篇幅/匿名/费率/场馆未知。ICC2026作者说明混含Workshop注册段，保留各轨道边界；2027仅预告。旧日志三处换行字面量修正为真实换行。
- 仅四新增届/三新系列、三候选六审核字段；旧112届/94系列、85刊/29样例与其他JSON保护。必要数据/范围/文档/报告/子路径构建与差异审查后上传验收同SHA，剩余规划继续。

- 发布前数据校验、旧112届/94系列与全部其他JSON保持、三候选六字段白名单、116/97/16及192/76/5计数断言通过；HST、接受确认不当注册、未来全部截止未知与普通/Workshop边界通过。265个本地Markdown链接、维护392项/12主题覆盖通过。Pages子路径构建与六资源exit0、差异审查/git diff --check通过；完整31项测试/typecheck/lint等由同SHA CI验收。

## 2026-10-04：Advanced Materials / Angewandte六样例 E28

- C27 127752141e547d633d4522f29f4a3c72b1444c62已验收[Pages37210683598](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37210683598)：build/deploy及完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，e1514cb13cee68d64cd466758e49b5682906e59c5bf5a1a785d4e8f461224811与本地一致（2026-10-04T14:50:42.268Z）。 正式编辑前验收；work/E28_RESEARCH_2026-10-04.md长操作前保存来源与边界，最近实际五小时66%/周59%允许，不用重置券。
- Advanced Materials/Angewandte各补三篇近两年不同期次原创光学样例：长波红外金属透镜/ENZ极化激元耦合/钙钛矿光电逻辑、银簇光响应磷光/掺杂三芳基硼RTP/铜碘簇X射线闪烁成像。首次在线与卷期分开，封面/旧Perspective排除；逻辑非像素成像、RTP纯晶体旧解释被纠正的边界保留。仅两scopeExamples，其他83刊/旧29刊样例与其他JSON保护，31刊至少三篇。[逐篇范围](JOURNAL_SCOPE_EVIDENCE_2026-10-04.md)。85/116/10、97系列16多届、192/76/5、分区索引/指南与整刊日期保持，其他规划继续。 Web工具实际打开六Wiley原始论文页并定位稿型/公开摘要/Firstpublished/卷期；不只用搜索片段。DOI普通跳出版社；未登录、买全文、触发Sharefull-text条款或下载SI/PDF。工具有可见OA全文时，仅按摘要/元数据范围判断，不声称整篇实验审计。
- 必要数据/白名单/文档/报告/子路径构建和差异审查后上传验收同SHA，其余规划继续。

- 发布前数据校验、仅两scopeExamples/83其他刊与旧29刊样例/其他JSON保持、31刊计数/近两年首次日期/不同期次以及纯晶体/逻辑边界断言通过；216个本地Markdown链接、维护392项/12主题覆盖通过。Pages子路径构建与六资源exit0、差异审查/git diff --check通过，完整31项测试/typecheck/lint等由同SHA CI验收。

## 2026-10-04：AOE前身与YSAOM联合届次 C28

- E28 0b3b74e3354b582c3aa2a5b5b72d63f77e88242d已验收[Pages37211078034](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37211078034)：build/deploy及完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，acc4bb5f82b5accfba34f28c08fed08e157251e61c69585a766f343d7959bfa8与本地一致（2026-10-04T14:58:01.549Z）。一次API超时只复查同部署，未重复提交。 正式编辑前已验收；work/C28_RESEARCH_2026-10-04.md长操作前保护官方身份、冲突和范围，最新实际五小时70%/周60%允许，不用重置券。
- AOE与APOC于2009合并为ACP的前身关系由学会原公告与Optica原档确认，保留ACP稳定ID并加限定前身别名，补AOE2008上海10/30–11/2历史届，不重复造AOE2026。YSAOM2025第五届与APCOM第九届联合，新增长沙7/18–20历史一届；2026与AOMTA联合记录保留，合作系列不永久合并。2025最终摘要6/30与7/8冲突仍null。当前85/118/10、98系列/17多届、273候选194 admitted/74 pending/5 deferred，31刊样例及分区索引保持。[身份与字段范围](CONFERENCE_EVIDENCE_2026-10-04.md)。其他规划继续。 COS2016原公告/Optica2009ACP存档首1页文本与CSOE2025原页身份/投稿/注册/青年主席团/完整日程实际读取。113页原档只首1页文本，截图生成内部失败，未声称全书/截图已核；2025模板/非涉密证明/全书/合同内部未读，不声称当前索引。未登录、联系、支付、提交。
- 新增两历史届/一组合系列、ACPnotes与原ACP系列aliases/sources/editionIds、两候选六审核字段。旧116届除ACPnotes、旧97系列除ACP三个字段保持，ACP整届日期与后续核验日null不刷新；AOMTA/YSAOM无永久青年/合作别名。85刊/31样例及其他JSON保护。必要验证/文档/报告/构建/差异审查后上传验收同SHA，其他规划继续。

- 初次验证发现候选全局一对一冲突，失败初稿未发布；修为AOE候选仅关联新AOE2008、YSAOM候选仅关联新2025，原ACP/AOMTA候选及2026关联保持。AOE2008存档54页只第1–3页文本，技术会期10/30–11/2和展览10/31–11/2分开；注册10/21日级，初稿/模板/实际索引未知。重新验证后发布。

- 修后数据校验、全局一对一关联、旧116届除ACPnotes/旧97系列除ACP三个字段与两候选六字段白名单、118/98/17及194/74/5计数断言通过；85刊/31样例和所有其他JSON保持。272个本地Markdown链接、维护392项/12主题覆盖通过；正确CLI入口的Pages子路径构建及六资源exit0、差异审查/git diff --check通过。完整31项测试/typecheck/lint等由同SHA CI验收。最新实际五小时79%/周61%允许，其他规划继续。

## 2026-10-04：CPL / APR不同稿型样例 E29

- C28 54280b926e6778fa0feec7a5206e67d99bc48b07已验收[Pages37212173896](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37212173896)：build/deploy及同SHA完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，7bb7f16712db46f2894c7d98233938c15f1443b9f4fd93e21db15226e90f61da与本地一致（2026-10-04T15:14:08.773Z）。正式编辑前验收；work/E29_RESEARCH_2026-10-04.md长操作前记录线索、元数据与理论/实验边界。不使用重置券。
- Chinese Physics Letters / Applied Physics Reviews各补三篇近两年不同期次光学样例；CPL实验卷积/数值超表面/孤子求解及APR原创深紫外成像/两篇综述路径分开。CPL仅明确Published Date，不称已独立核Early Access；APR首次页头发表与较晚刊月分开。仅两scopeExamples，83其他刊/旧31刊样例、排名索引/指南及整刊日期保持，33刊至少三篇。[逐篇字段与范围](JOURNAL_SCOPE_EVIDENCE_2026-10-04.md)。85/118/10、98系列17多届与194/74/5保持，其他规划继续。 六原页普通浏览器实际核标题/刊名卷期/公开摘要，CPL点击More Information读日期，APR页头Research/Review Article与发表日；UV另展开历史读Received/Accepted，不混当发表。只摘要/元数据范围，未通读OA全文/内嵌SI、未下载PDF、未买全文或登录。
- APR自动Web open内部错误；普通浏览器最初安全检查自行完成，未点击验证/CAPTCHA或改变安全设置；随后三原页正常可读。数值聚焦不当实验隔离器、PINN不当实制激光器；APR两综述不当原创实验。必要验证/差异审查/构建后上传并按同SHA验收，其他规划继续。

- 发布前数据校验、仅两scopeExamples/83其他刊与旧31刊样例/其他JSON保持、33刊样例计数和近两年不同论文、日期标签/数值及综述边界断言通过；222个本地Markdown链接、维护392项/12主题覆盖通过。Pages子路径构建及六资源exit0、差异审查/git diff --check通过，完整31项测试/typecheck/lint由同SHA CI验收。正式编辑前实际五小时85%/周62%允许，剩余规划继续。

## 2026-10-04：Chemical Reviews三篇综述 E30

- E29 5e95fb7ffb508e365c3eca378551bdf8b0f6bdee已验收[Pages37212635676](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37212635676)：build/deploy及同SHA完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，180cf9a0dc8adb76236d6ecebf2c597e37b910483f721553b943c525dbc97712与本地一致（2026-10-04T15:22:23.748Z）。正式编辑前已验收；work/E30_RESEARCH_2026-10-04.md长操作前保存范围与来源，实际五小时87%/周63%允许，不用重置券。
- Chemical Reviews补三篇近两年不同期次光学综述样例：仿生结构色、光学胶体组装、生物正交光成像治疗。三篇均Review，仍按邀稿/获批提案路径，不当原创实验或临床证据；首次在线与2025/2026较晚卷期分开。仅一scopeExamples，84其他刊/旧33刊样例及整刊日期、指南费用/索引分区与其他JSON保持，34刊至少三篇。[逐篇范围](JOURNAL_SCOPE_EVIDENCE_2026-10-04.md)。85/118/10、98系列17多届与194/74/5保持，其他规划继续。 三原页普通浏览器读刊名/Review/题名/公开摘要并点击Article history核两出版日，未通读全文/SI或下载/购买，未登录/联系/提交。Web自动403，普通浏览器自动安全加载自行完成，未点击验证或绕过。
- 近两年且不同期次，12月2025首次的胶体组装2026卷期不逆改发表日。必要数据/范围/文档/报告/子路径构建及差异审查后上传，按同SHA验收，剩余规划开放。

- 发布前数据校验、仅一scopeExamples/84其他刊与旧33样例及其他JSON保持、34刊计数/近两年三不同论文与Review/首次日/非临床边界断言通过；225个本地Markdown链接、维护392项/12主题覆盖通过。Pages子路径构建六资源exit0、差异审查/git diff --check通过，完整31项测试/typecheck/lint由同SHA CI验收。

## 2026-10-04：ACP2026当前窗口 B5

- E30 ae93dbd30a597d16bb8dc58e2b233c22c021152c已验收[Pages37213012360](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37213012360)：build/deploy及同SHA完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，b29af266af91fa1224a934689c95c9e824b6052720be134462b341b088639766与本地一致（2026-10-04T15:31:26.935Z）。正式编辑前已验收，work/B5_RESEARCH_2026-10-04.md长操作前已保存。实际五小时94%/周64%仍允许，不使用重置券或购买。
- ACP2026补杭州国际博览中心、当前普通费率/论文覆盖和展示条件；早鸟从日级细化为9/30 23:59北京时间付费截止（已过），核心通知转向当前PDP10/15 23:59，10/25终稿仍仅日期。初步议程待完整公布，酒店10/29不造论文/注册事件；限定范围未见2027公告，保留稳定系列与前身历史。[逐字段范围](CONFERENCE_EVIDENCE_2026-10-04.md)。仅现届核实字段及同系列sources/后续公告日变化，整届日期/117其他届、97其他系列/其他JSON和85/118/10、194/74/5、34样例保持；其他规划继续。
- 实读官网六公共页与普通投稿页，LearningConf注册仅抵登录页，未登录/填写/上传/支付/联系。内部模板、各session PDF全文、2026论文实际入库未核；未知仍留。必要数据/范围/文档/报告/构建及差异审查后上传，按同SHA验收。

- 发布前数据校验、固定ae93dbd基线的部分字段白名单及117其他届/97其他系列/其他JSON保持、四截止的时间精度和不混入酒店事件断言通过；228个本地Markdown链接、维护392项/12主题覆盖通过。Pages子路径构建六资源exit0，数据/文档差异审查及git diff --check通过；同SHA完整31项测试/typecheck/lint由CI验收。

## 2026-10-04：APR本刊费用/历史周期 E31

- B5 ef3fbbf1eba4a3b1cfb25f12d996f773367dc289已验收[Pages37213728476](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37213728476)：build/deploy及同SHA完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，e1eea0f5d788d55277e5cb71df30ad90c811035801c4b037321b07a71dce0b7e与本地一致（2026-10-04T15:40:04.011Z）。正式编辑前已验收；work/E31_RESEARCH_2026-10-04.md已保存来源和范围。实际五小时99%/周64%仍允许，选择小批收尾，不用重置券。
- APR本刊原页补确认不收页费、可选OA USD3,800且出版前支付；独立刊价证据取代仅通用政策的缺口。另补2025平均首轮41/录用170/发表195天，保留稿型/样本和起算不详，不作个稿承诺。仅publishing/schedule，整刊日期、指南/样例/排名索引、84其他刊与全部其他JSON保持。[逐字段范围](JOURNAL_GUIDE_EVIDENCE_2026-10-04.md)。85/118/10、98系列17多届、194/74/5及34样例保持，其他规划开放。 普通浏览器自动安全加载自行完成后读About、实际菜单点击费用链接；无验证操作/登录/购买，非必要Cookie正常拒绝。只原页公开段，未访问收费正文或提交。

- 2026-10-05续接：上一轮已完成数据/固定ef3fbbf两字段范围断言、231个文档链接、维护392项/12主题和Pages子路径六资源构建；随后工具自动审批因实际用量限制无法完成，整个提交脚本未执行，并非安全性否决。五个未提交文件已保留；本轮先查实际五小时0%/周65%、允许普通使用，远端仍ef3fbbf。未购买或用重置券；恢复同一批的验证、差异审查和提交部署，不另造重复批次。

- 本轮中断恢复验证：数据/固定基线白名单、231本地文档链接、维护392项/12主题、Pages子路径六资源构建exit0和数据/文档差异审查均通过；git diff --check通过。来源核验日仍10/4，不为续接改成10/5；同SHA完整31项测试/typecheck/lint由CI验收。

## 2026-10-05：光子学报与休刊筛查 F4

- E31 1569c8549d7eb6a71793dc9530e24d1b991bf17a已验收[Pages37242801903](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37242801903)：build/deploy及同SHA完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，230bb2131c3dea0927d97a6d348f3485f2eca6ac31518bff5a18f7dfdc8a66a1与本地一致（2026-10-04T23:12:34.234Z）。正式编辑前已验收；work/F4_RESEARCH_2026-10-05.md保存长操作和字段范围，实际五小时8%/周66%允许。
- 光子学报按EI工程补充新增，EI来源表/中文保持收录与MJL ESCI各独立保存，SCIE及完整分区未知；中文版/仅邀综述/基金与数字图像处理边界、2025挂载费率和条件周期保存。光谱学与光谱分析因2026全年休刊停止收稿改deferred，未进入可投稿目录，不推算2027复刊。[逐字段证据](JOURNAL_CANDIDATE_EVIDENCE_2026-10-05.md)。当前86刊/118届/10活动、273候选195 admitted/72 pending/6 deferred、SCIE72/ESCI12/EI79、JCR68/CAS11、34刊样例；旧85刊及其他JSON保持，其他规划继续。
- 普通浏览器实际读光子学报JS官网简介/当前挂载简则与MJL唯一卡，光谱刊实际原公告。没有登录投稿、下载模板/协议或购买；索引来源表仅新1004-4213匹配，不重复78旧刊。分区宣传版年不详且CAS矛盾，未生成排名。

- 发布前数据校验、固定1569c85基线的旧85刊/34刊样例与其他JSON保持、两候选六审核字段白名单和86/118/10、195/72/6、72/12/79计数断言通过。基金省部级及以上、数字图像处理限制、未知SCIE/分区和五页计费边界通过；290本地Markdown链接、维护394项/12主题覆盖通过。Pages子路径构建与六资源exit0、差异审查/git diff --check通过；完整31项测试/typecheck/lint由同SHA CI验收。

## 2026-10-05：物理学报与光学交叉 F5

- F4 6669f5c041ef4454e2121492ab9e670f58c9956a已验收[Pages37243731190](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37243731190)：build/deploy及同SHA完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，68f8cb8b323d56ab5d7a93e02233ea07546475695ac90ed2683089e590d644c5与本地一致（2026-10-04T23:27:18.103Z）。正式编辑前已验收；work/F5_RESEARCH_2026-10-05.md保存长操作前来源和未知，实际五小时19%/周67%允许。
- 物理学报按EI工程补充新增，SCIE与EI数据库依据独立记录，分区/eISSN未知；2026-06指南及2026单盲流程、版面费未知和周期口径保留。三篇不同期次光学实验的上网日/刊出日与应用边界保存。当前87刊/118届/10活动、273候选196 admitted/71 pending/6 deferred、SCIE73/ESCI12/EI80、JCR68/CAS11、35刊至少三篇样例。旧86刊/34刊样例及其他JSON保护；[逐字段与样例证据](JOURNAL_CANDIDATE_EVIDENCE_2026-10-05.md)。其余规划继续。
- 浏览器实读官方简介/2026审稿政策、MJL唯一卡和三篇原页摘要/元数据；Web实读2026-06完整指南。未登录/联系/支付/投稿；模板/协议/全文SI未读。稿型软/硬限、平均周期/专家邀请时限与应用前景均保留边界。必要验证和差异审查后上传，按同SHA验收，其他规划继续。

- 发布前数据校验、固定6669f5c基线的旧86刊/34样例、272其他候选及全部其他JSON保持、一候选六审核字段白名单与87/196-71-6、73/12/80计数断言通过；三篇日期/卷期与未知费用/分区边界通过。297本地Markdown链接、维护395项/12主题覆盖、Pages子路径六资源构建exit0和数据/文档差异审查通过；git diff --check通过。同SHA完整31项测试/typecheck/lint由CI验收。

## 2026-10-05：直接光学五刊 F6

- F5 325862d55c4a82e95df2b01bd4cbc48ab6f9d8b2已验收[Pages37244250870](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37244250870)：build/deploy及同SHA完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，2567f82ade82b4ec5236d4d8951e954ac08c4a89ab06b35cadfb2d665890979b与本地一致（2026-10-04T23:35:27.515Z）。正式编辑前已验收。work/F6_RESEARCH_2026-10-05.md保存来源/未知；最近实际五小时30%/周69%允许，不用重置券。
- F6新增COL、IEEE JQE/JSTQE/Photonics Journal/PTL五刊，独立MJL SCIE和EI来源表依据；JCR 2025指标2024的15条JIF学科分区保存为机构转载参考，不取AIS或推2026/CAS。COL/JSTQE/PTL有Q1/Q2；JQE/PJ按EI补充，JIF Q3仍保留。当前92刊/118届/10活动、273候选201 admitted/66 pending/6 deferred、SCIE78/ESCI12/EI85、JCR73/CAS11、35刊样例。旧87刊/35样例和其他JSON保护；[逐字段范围](JOURNAL_CANDIDATE_EVIDENCE_2026-10-05.md#f6五本直接光学期刊)。其他规划继续。
- 五MJL唯一SCIE卡、EI新号、学会四刊与COL原指南、IEEE2026费用表实读；JCR七页渲染核JIF列，COL四页许可全文与修订日核实。JQE/PJ AIS Q2不能误用；COL Green词语/许可及5/6页差异保留。只指南当前挂载段，专题CFP/模板内部/系统清单/现版COL价表未核。必要验证、差异审查和子路径构建后上传，按同SHA验收。其他规划继续。
- 发布前数据校验、固定325862d的旧87刊/35样例、268其他候选与其他JSON保护通过；五候选六字段白名单、92/201-66-6、78/12/85及73/11计数、15条JIF学科和COL/PJ/PTL未知/冲突边界断言通过。302本地Markdown链接、维护410项/12主题覆盖、Pages子路径构建六资源exit0与数据/文档差异审查通过，git diff --check通过；完整31项测试/typecheck/lint由同SHA CI验收。

## 2026-10-05：已有刊JCR分区补充 A13

- F6 2464e1153f235df02026ae4d330c8c0c47c9439a已验收[Pages37245349358](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37245349358)：build/deploy及同SHA完整31项测试/typecheck/lint等CI成功，首页/版本200，cc0d3ddfa1ae1ab9f690f3dce462fd70bd4e08a881f8be9e3157663632f30c30与本地一致（2026-10-04T23:54:15.156Z）。正式编辑前已验收；work/A13_RESEARCH_2026-10-05.md长操作前保存。实际五小时36%/周70%允许，不用重置券。
- A13补17本已有期刊的27条JCR 2025 JIF学科分区（指标2024），机构转载secondary并保留逐页来源。仅rankings和七刊“分区未知”描述作定向修正，不刷新整刊日期/索引/指南/样例。ESCI身份与JCR独立，CAS11不变；光学精密工程和红外与激光工程在此版新目标刊号无匹配，当前分区仍未知，不等于未收录。当前JCR90/92、CAS11/92，92刊/118届/10活动、273候选201/66/6、SCIE78/ESCI12/EI85和35样例保持；其他规划继续。 [逐页字段与范围](JCR_EVIDENCE_2026-10-05.md)。
- 缓存原PDF hash保持，仅19新目标刊号定位，17匹配行/16页原图和JIF/AIS表头实际核；27条学科保存secondary，不宣称2026官方平台或CAS。两未匹配继续未知、ESCI不升级SCIE，七描述修正保留准入历史，其余75刊与其他JSON保持。必要验证和差异审查后上传并按同SHA验收，其他规划继续。
- 发布前数据校验、固定2464e11的17rankings/七description字段白名单、75其他刊/全部索引日期/35样例/CAS与所有其他JSON保护通过；27条JIF、90/92和两未匹配未知、ESCI保持断言通过。305本地Markdown链接、维护421项/12主题、Pages子路径构建六资源exit0、数据及文档差异审查/git diff --check通过；完整31项测试/typecheck/lint由同SHA CI验收。

## 2026-10-05：显示方向与旧刊状态 F7

- A13 aaa18cfc9f6cd944cebcb337b90eca7c27f3f777已验收[Pages37245676684](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37245676684)：build/deploy及同SHA完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，bb0613eafa63a4f350527f11b952039195b0613aa97c0a833cc6999eb90d0824与本地一致（2026-10-05T00:01:12.595Z）。正式编辑前已验收。work/F7_RESEARCH_2026-10-05.md保存长操作检查点；实际五小时49%/周72%仍允许，不用重置券。
- F7新增Displays与JSID两本显示方向期刊，独立MJL SCIE/EI来源表依据；JCR 2025指标2024各四学科JIF分别Q2/Q3，JSID按EI补充而非AIS Q2准入。JSID三篇不同期次近两年光学样例保存首次日期与理论/实验边界。旧JDT因2016停刊改deferred，无自动更名。当前94刊/118届/10活动、273候选203 admitted/63 pending/7 deferred、SCIE80/ESCI12/EI87、JCR92/CAS11、36刊至少三篇样例；旧92刊/35样例和其他JSON保护，其他规划继续。 [逐字段证据](JOURNAL_CANDIDATE_EVIDENCE_2026-10-05.md#f7显示方向与旧刊状态)。
- 两MJL唯一卡与两新EI行、JCR八页JIF/AIS表头和换行标题实核；两刊稿规分别保存硬/软限、图文要求、费用版年/统计口径。JSID三篇不同期首次日期与研究类型保留，旧JDT停止生产原公告实读，未当自动更名。其他JSON/旧刊全保护；必要验证与差异审查后上传，按同SHA验收。其他规划继续。
- 发布前数据校验、固定aaa18cf的92旧刊/35样例/270其他候选及全部其他JSON保护、三候选六审核字段白名单通过；八条JIF/三首次日期、94/203-63-7和80/12/87、92/11、36样例计数与软硬限/未知边界断言通过。314本地Markdown链接、维护428项/12主题覆盖、Pages子路径构建六资源exit0及差异审查/git diff --check通过；完整31项测试/typecheck/lint由同SHA CI验收。

## 2026-10-05：OFC/CLEO时间深度 C29

- F7 aa69ccd9236dce97549ae193ba8c703a73ba3d6d已验收[Pages37246798156](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37246798156)：build/deploy及同SHA完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，33d99a90282ac22ea583c38c4b7c43d54414c2cabfc6dc772c2a727cfbd46d44与本地一致（2026-10-05T00:17:02.670Z）。正式编辑前已验收。work/C29_RESEARCH_2026-10-05.md已保存来源/冲突与长操作前检查点，实际五小时56%/周73%仍允许。
- C29新增OFC2025/2026与CLEO2025/2026四历史届，连到现有2027同系列；94刊/122届/10活动，98稳定系列与19个至少两届系列，273候选203/63/7、分区/索引/36样例保持。原118届/96其他系列及所有期刊/活动JSON保持；只两系列editionIds/sources和两候选关联/审核备注变化，后续公告日未刷新。OFC2026原CFP精确EDT截止与其他日级/通知周分开；CLEO2026跨年通知、时刻语义及海报尺寸冲突保留。 [逐字段范围](CONFERENCE_EVIDENCE_2026-10-05.md)。
- 档案原表、OFC原CFP第1–3页与p1/p3图、旧新闻正文、CLEO2026指南/现场/日程及2025程序首页面向场次实读；未登录、下付费正文、接触登录视频、上传或联系。历史页年份、周通知、海报宽度和精确时刻语义保留，未知不抄新届。必要验证与差异审查后上传同SHA验收，其他规划继续。
- 发布前数据校验、固定aa69ccd的118旧届/96其他系列/271其他候选及全部其他JSON保持、两系列两字段/两候选四字段白名单、四日城/时区与未知通知/尺寸冲突断言通过。新届按现数据模型将未知场馆写明待核，Dataset独立路径仅保留原CFP同日说明，未增造事件类型。317本地Markdown链接、维护428项/12主题、31项测试、修正数据后的Pages子路径六资源构建exit0及差异审查/git diff --check通过；typecheck/lint由同SHA CI验收。

## 2026-10-05：传统光学三刊 F8

- C29 8012b2bee7f740128f1e95dd2aa870931c13da3d已验收[Pages37247520316](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37247520316)：build/deploy及同SHA完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，5158d5ebb44075da9deaca886345418c1d83255a7d7ab348861a1a7d677abdf8与本地一致（2026-10-05T00:27:25.581Z）。正式编辑前已验收。work/F8_RESEARCH_2026-10-05.md保存原页/字段/未知与长操作前检查点。
- F8新增Optical Materials、Optics & Laser Technology、Optics and Lasers in Engineering三本直接光学刊，MJL当前SCIE/新EI三行独立依据，五条JCR 2025 JIF为secondary。OM光学Q1/材料Q2，OLT光学Q1/应用物理Q2，OLE光学Q2；不取AIS/CAS或推2026。材料实验验证、工程光学方法与综述流程边界、逐刊APC/四环节指标保留。当前97刊/122届/10活动、273候选206 admitted/60 pending/7 deferred、SCIE83/ESCI12/EI90、JCR95/CAS11、36样例，旧94刊和其他JSON保护。其他规划继续。 [逐字段证据](JOURNAL_CANDIDATE_EVIDENCE_2026-10-05.md#f8传统光学三刊)。
- 三MJL唯一卡和三新EI行、三页原图五JIF学科记录实核；三指南/首页/Shop范围分别读，材料实验验证与工程方法创新限制保留，综述适用未知不选某段强行统一；OLT正式JOLT链接实核。未登录/支付/上传或访问内部模板；原94刊与其他JSON保护，必要验证/差异审查后上传同SHA验收，其他规划继续。

- 发布前数据校验、固定8012b2b的94旧刊/36样例与270其他候选/全部其他JSON保护、三候选六审核字段白名单通过；五条JIF/六索引/97及206-60-7、83-12-90、95-11计数与范围/未知边界断言通过。326本地Markdown链接、维护433项/12主题覆盖、Pages子路径构建六资源exit0和数据/文档差异审查通过；git diff --check通过，完整31项测试/typecheck/lint由同SHA CI验收。

## 2026-10-05：ECOC/IPC时间深度 C30

- F8 1d6c9a1d69647ec0eb49ff426464c591c52e0aaf已验收[Pages37248491227](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37248491227)：build/deploy及同SHA完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，3250a53312b47e66289ecfe76700139cdc219c30c1c5b2893ef83333798f69dd与本地一致（2026-10-05T00:43:15.509Z）。正式编辑前已验收。work/C30_RESEARCH_2026-10-05.md长操作前保存原页/范围/冲突；实际五小时72%/周76%允许。
- C30新增ECOC2025、IEEE IPC2024/2025三个历史届，接入原两稳定系列；ECOC与IPC均有三年记录。97刊/125届/10活动、98系列20多届、273候选206/60/7及全部索引/分区/36样例保持。原122届、96其他系列、271其他候选和其他JSON保护；只两系列editionIds/sources及两候选四审核字段变化，不刷新后续公告日。ECOC原指南所列4/22/25与最终版本分开、注册日期/金额冲突保留；IPC旧公告before9Oct边界不推全天。 [逐字段范围](CONFERENCE_EVIDENCE_2026-10-05.md#c30ecocipc时间深度)。
- 三页ECOC原指南全文与原图核、旧网站稿规/现场/价格表，IPC学会旧活动/公告/回顾实读；日城及原年规则独立保存，注册冲突/最终延期未知明确。原122届与其他JSON保护；必要验证和差异审查后上传，按同SHA验收，其他规划继续。

- 发布前数据校验、固定1d6c9a1的122旧届/96其他系列/271其他候选及全部其他JSON保持、两系列两字段和两候选四字段白名单通过；125/98/20及三日城、日级/冲突边界断言通过。329本地Markdown链接、维护433项/12主题覆盖、Pages子路径构建六资源exit0、数据/文档差异审查和git diff --check通过，完整31项测试/typecheck/lint由同SHA CI验收。

## 2026-10-05：光谱与红外两刊 F9

- C30 8636bfba58432235b0de20bade45da1117963b5b已验收[Pages37249002126](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37249002126)：build/deploy及同SHA完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，a2a90aaa3461b3f9f7282f34136e586f3690824c05122c238b80d65c88946a1c与本地一致（2026-10-05T00:52:36.857Z）。正式编辑前已验收；一次API连接超时只复查同SHA，无重复提交。work/F9_RESEARCH_2026-10-05.md长操作前保存原页/字段/未知，实际五小时79%/周77%允许。
- F9新增JQSRT与Infrared Physics & Technology，MJL当前SCIE与两新EI行独立保存；五条JCR 2025 JIF为secondary。JQSRT光谱Q2/光学Q3（非AIS Q2），红外三学科Q2；理论/实验例外与软篇幅、Option C数据及逐刊价格/指标保留。99刊/125届/10活动、273候选208 admitted/58 pending/7 deferred、SCIE85/ESCI12/EI92、JCR97/CAS11、36样例；旧97刊及其他JSON保持，其他规划继续。 [逐字段证据](JOURNAL_CANDIDATE_EVIDENCE_2026-10-05.md#f9光谱与红外两刊)。
- 两MJL唯一SCIE卡、新四号EI两行及JCR五行/四原图实核；各自指南与首页读，软篇幅、纯计算例外、Option C及费用版年/周期未知保留。完整模板许可/系统清单未核，未登录/上传/联系/支付。必要验证和差异审查后上传，按同SHA验收，其他规划继续。

- 发布前数据校验、固定8636bfb的97旧刊/36样例、271其他候选与全部其他JSON保持、两候选六审核字段白名单通过；99/208-58-7、85-12-92、97-11、五JIF/四索引及软限/例外/Option C断言通过。338本地Markdown链接、维护438项/12主题覆盖、Pages子路径构建六资源exit0和数据/文档差异审查、git diff --check通过，完整31项测试/typecheck/lint由同SHA CI验收。

## 2026-10-05：ACP/PW时间深度 C31

- F9 3e82c9de2be920b0c7c26538a485c110f7971d8a已验收[Pages37249523023](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37249523023)：build/deploy及同SHA完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，74e5b96c11c609117a687eb49144816cbf93d182df8f4f2c432836c64cd7f0e6与本地一致（2026-10-05T00:58:54.197Z）。正式编辑前已验收。work/C31_RESEARCH_2026-10-05.md长操作前保存原页/范围/未知，实际五小时87%/周78%允许。
- C31新增ACP2025与Photonics West2026两个历史届，接原稳定系列。99刊/127届/10活动、98系列21多届、273候选208/58/7、SCIE85/ESCI12/EI92、JCR97/CAS11及36刊样例保持。原125届、96其他系列、271其他候选与全部其他JSON保护；只两系列editionIds/sources及两候选四审核字段变化，不刷新后续公告日。ACP原年格式/四截止/费用与现场条件独立，系统导出不当延期；PW仅核当届日城/场馆，旧CFP未知。 [逐字段范围](CONFERENCE_EVIDENCE_2026-10-05.md#c31acppw时间深度)。
- ACP档案/原年公开指南与PW场馆正文实际核，未将2026/2027规则相互移植；ACP手册404、PW旧CFP浏览器阻断未绕过，相关未知保留。必要验证、差异审查后上传并按同SHA验收；其他规划继续。

- 发布前数据校验、固定3e82c9d的125旧届/96其他系列/271其他候选及全部其他JSON保持、两系列两字段/两候选四字段白名单通过；127/98/21、2025四截止时区/费用与场馆未知边界断言通过。341本地Markdown链接、维护438项/12主题覆盖、修正初稿建议认证和终稿必须认证区别后的Pages子路径六资源构建exit0、数据/文档差异审查和git diff --check通过；完整31项测试/typecheck/lint由同SHA CI验收。

## 2026-10-05：FOE附件指南 E32

- C31 e48527f27d3b53f1de49ae7a9289ef2908e7f38c已验收[Pages37250421883](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37250421883)：build/deploy及同SHA完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，3e01e955395ba30c97f6e380a94e2594b871a9d9d742db3b57e775276644d3a7与本地一致（2026-10-05T01:12:40.348Z）。正式编辑前已验收。work/E32_RESEARCH_2026-10-05.md长操作前保存来源/范围，实际五小时93%/周79%允许；不用重置券。
- E32补FOE现官网挂载的2023主指南与2024 Featured Columns：摘要条件例外、可编辑源文件、单盲/数据鼓励及Comment/两种Letter/Research Highlight建议范围分别保存；文件旧Springer页头与2026高教社迁移区分，未当全新2026规则。只requirements/schedule，整刊日期/费用/索引分区/36样例、98其他刊及全部其他JSON保护。99刊/127届/10活动、98系列21多届与273候选208/58/7等数量保持；其他规划继续。 [逐字段范围](JOURNAL_GUIDE_EVIDENCE_2026-10-05.md#e32foe现挂载附件)。
- 实际下载两原Word文件、按章节读主指南和全部Columns文字，原文件hash保存；不将旧Springer版权/费用套到高教社，硬/软限与稿型区分。只读没有账户/投稿/联系/支付/签署。必要验证/差异审查和构建后上传，按同SHA验收；其他规划继续。

- 发布前数据校验、固定e48527f的FOE两字段白名单、98其他刊与全日期/索引分区/36样例及所有其他JSON保持断言通过；旧版/450条件/关键词/Type1鼓励/单盲与各软字数边界通过。266本地Markdown链接、维护438项/12主题覆盖、Pages子路径六资源构建exit0、数据/文档差异审查与git diff --check通过；完整31项测试/typecheck/lint由同SHA CI验收。

## 2026-10-05：Photonic Sensors费用年界 E33

- E32 d112afdcd50c0a85552517237a19beb0b0b489b4已验收[Pages37250786008](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37250786008)：build/deploy及同SHA完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，5e734c1b2d2eb2146480943442c1c4a3b1bb29651c36297be2dd65c6239cd01c与本地一致（2026-10-05T01:17:38.493Z）。正式编辑前已验收；work/E33_RESEARCH_2026-10-05.md已保存长操作前范围。实际五小时94%/周79%仍允许，不用重置券。
- E33补Photonic Sensors作者指南的APC资助年界、摘要及审稿局部字段。只requirements/publishing，整刊日期、既有50稿页建议/Letter四出版页与98其他刊、全索引分区/36样例及其他JSON保护。99刊/127届/10活动、98系列21多届与273候选208/58/7保持；其他规划继续。 [原来源与范围](JOURNAL_GUIDE_EVIDENCE_2026-10-05.md#e33photonic-sensors资助年界)。未知2027政策保留，必要验证/差异审查与构建后上传，按同SHA验收。

- 发布前数据校验、固定d112afd的PhS两字段白名单、旧三指南条/98其他刊/全日期索引分区/36样例及其他JSON保护断言通过；摘要词数/单盲报告数/资助年界和2027未知通过。269本地Markdown链接、维护438项/12主题覆盖、Pages子路径六资源构建exit0和数据/文档差异审查、git diff --check通过；完整31项测试/typecheck/lint由同SHA CI验收。

## 2026-10-05：TMI光学样例 E34

- E33 33144f9ad12bb1d06dda600903d00d5bf78b1d6b已验收[Pages37250987837](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37250987837)：build/deploy及同SHA完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，9ebd40745f4524eef913c24e3b7819a3a4bb830fb45cac162092ae96892ddb95与本地一致（2026-10-05T04:10:11.514Z）。正式编辑前已验收，原99刊/127届工作树干净。work/E34_RESEARCH_2026-10-05.md及三篇种子长操作前保存；上窗口98%继续有价值研究，新五小时调度到达时实际1%/周80%允许，自然恢复未用重置券，未创建重复执行任务。
- E34为IEEE TMI补三篇近两年不同期次光学样例：机器人OCT、光声微循环、OCT/MRI同动物定量关联。首次发表与较晚卷期分开，数值/鼠在体及相关性边界保留；只有scopeExamples变化，98其他刊、旧36刊样例、全指南/费用/整刊日期/索引分区与其他JSON保护。至少三篇样例刊数36→37，99刊/127届/10活动、98系列21多届、273候选208/58/7及全部索引/分区计数保持；其他规划继续。 [逐篇范围](JOURNAL_SCOPE_EVIDENCE_2026-10-05.md#e34ieee-tmi)。
- 三IEEE实际原公开摘要/出版字段、NIH辅助身份读，错误刊名和PMC可读日期剔除，第三篇相关/不相关结果都保留；未访问付费PDF/系统。必要验证与差异审查后上传，按同SHA验收；其他规划继续。

- 发布前数据校验、固定33144f9的TMI仅scopeExamples白名单、98其他刊/旧36样例/全日期指南费用排名索引及全部其他JSON保护断言通过；三近两年首次日/不同卷期/鼠和相关性边界、37刊样例计数通过。317本地Markdown链接、维护438项/12主题覆盖、Pages子路径六资源构建exit0与数据/文档差异审查、git diff --check通过；完整31项测试/typecheck/lint由同SHA CI验收。

## 2026-10-05：Applied Physics Letters F10

- E34 887a49a22cefa242ed3089f1b071bf42daaff18a已验收[Pages37262559065](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37262559065)：同SHA完整CI/build/deploy成功，首页/版本200，7b2ce29854e784d93a1664339eb1a4e77b26f96573da50ad0ba584788830bd00与本地一致（2026-10-05T04:21:11.104Z）。正式修改前完成验收；API超时只同SHA复查。work/F10_RESEARCH_2026-10-05.md长操作前保存来源/边界，实际五小时7%/周81%允许，不用重置券。
- F10新增Applied Physics Letters，三篇不同期次近两年原创光学样例与本刊指南、费用/2025均值独立保存；MJL SCIE/EI两证据、JCR 2026出版社披露及2025机构转载Q2分别记录。当前100刊/127届/10活动、273候选209 admitted/57 pending/7 deferred、SCIE86/ESCI12/EI93、JCR98/CAS11、38刊至少三篇样例。旧99刊/37样例、272其他候选及其他JSON保护；其他规划继续。 [逐字段范围](JOURNAL_CANDIDATE_EVIDENCE_2026-10-05.md#f10applied-physics-letters)。
- 三原论文公开页、独立MJL卡、新EI两号/一行、JCR原p601图、原指南/政策/费用/About及Clarivate年定义实际读。3000/3500边界、邀稿与普通稿/软建议分开；匿名模式、CAS、税/生效和统计细项未知。不泛化同社政策。必要验证与差异审查后上传并按同SHA验收，其他规划继续。

- 发布前数据校验、固定887a49a的99旧刊/37样例、272其他候选及所有其他JSON保护与单候选六审核字段白名单通过；100/209-57-7、86-12-93、98-11、38样例与双版JIF/三首次日/篇幅边界断言通过。360本地Markdown链接、维护439项/12主题覆盖、Pages子路径六资源构建exit0、数据/文档差异审查及git diff --check通过；完整31项测试/typecheck/lint由同SHA CI验收。

## 2026-10-05：TIE光学装备样例 E35

- F10 be3bf570c0a36b9abacc89071625ae7e29ad159b已验收[Pages37263696798](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37263696798)：同SHA完整31项测试/typecheck/lint等CI/build/deploy成功，首页/版本200，dd1b4dde91f06ef14a4bfb926a10e0966fcb271bb656e6412911c23815d0aca9匹配本地（2026-10-05T04:30:42.163Z）。正式编辑前验收，main本地/远端相同，最新来源巡检10/4成功；未人为重触发或恢复旧自动化。work/E35_RESEARCH_2026-10-05.md长操作前保存来源/范围；实际五小时14%/周82%允许，不用重置券。
- E35为IEEE TIE补四篇近两年光学装备/显示电子样例：三篇已分配不同期次及一篇VCSEL Early Access；突出硬件控制/驱动贡献，保留通常不收纯光学的指南边界。只有scopeExamples变化，39刊至少三样例，100刊/127届/10活动、273候选209/57/7、98系列21多届及索引86/12/93、JCR98/CAS11保持；99其他刊、旧38样例和其他JSON保护。 [逐篇范围](JOURNAL_SCOPE_EVIDENCE_2026-10-05.md#e35ieee-tie)。
- 四原公开页首发/卷期/DOI与硬件实验边界核实，第四EA单列，不用检索线索的错误日期或泛化本刊。必要验证与差异审查后上传并按同SHA验收；其他规划继续。

- 发布前数据校验、固定be3bf57的99其他刊/旧38样例、TIE除scopeExamples全部字段及所有其他JSON保持断言通过；四近两年首次日/三不同正式期次加一EA、硬件及显示电子边界和39刊样例计数通过。325本地Markdown链接、维护439项/12主题覆盖、Pages子路径六资源构建exit0与数据/文档差异审查/git diff --check通过；完整31项测试/typecheck/lint由同SHA CI验收。

## 2026-10-05：Europe/IRMMW时间深度 C32

- E35 37076b4dfc1268e917ddf11fa6613725fccc2cf7已验收[Pages37264177279](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37264177279)：同SHA完整31项测试/typecheck/lint等CI/build/deploy成功，首页/版本200，5dd71ed5c56d51d2a6f8e4517221ed954628c6159fa6fde70e50b35247377f69匹配本地（2026-10-05T04:36:42.786Z）。正式编辑前已验收。work/C32_RESEARCH_2026-10-05.md长操作前保存来源/范围与冲突；实际五小时24%/周84%允许，不用重置券。
- C32新增CLEO/Europe2025历史、IRMMW2027/2028官方预告三届，补IR2026海报局部要求；130届/98系列23多届，100刊/10活动、273候选209/57/7、SCIE86/ESCI12/EI93、JCR98/CAS11与39刊样例保持。旧127届仅IR26的requirements追加，96其他系列/271其他候选及其他JSON保护；IR未来公告核验日实核更新，欧洲历史不刷新后续公告日。PDP时区、注册星期/退款年份与IR2025终日冲突保留。 [字段来源](CONFERENCE_EVIDENCE_2026-10-05.md#c32europeirmmw时间深度)。
- 两原PDF文字/三页图、原日程双列截图及原年正文实际核。必要验证/差异审查和构建后上传并按同SHA验收；剩余规划继续，既有定期更新/系列机制不重复开发。

- 发布前数据校验、固定37076b4的127旧届（仅IR26 requirements追加）、96其他系列/271其他候选及全部其他JSON保护、两系列/两候选白名单断言通过；130/98/23、历史精确CET/含疑义PDP日级与最终注册null、两个未来预告unknown边界通过。367本地Markdown链接、维护445项/12主题覆盖、Pages子路径六资源构建exit0、数据/文档差异审查和git diff --check通过；完整31项测试/typecheck/lint由同SHA CI验收。

## 2026-10-05：IEEE Sensors Journal F11

- C32 2cf92efa64e8bd4c6a8ddf3221abdd1c0f1ee389已验收[Pages37265119159](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37265119159)：同SHA完整31项测试/typecheck/lint等CI/build/deploy成功，首页/版本200，e424a35f3b93d381a8ad2c0a3f7ecbe63d132e78658a7137b7f1117a11be733c匹配本地（2026-10-05T04:50:46.874Z）。正式编辑前验收，work/F11_RESEARCH_2026-10-05.md长操作前保存来源/范围；实际五小时31%/周85%允许，不用重置券。
- F11新增IEEE Sensors Journal及三篇不同期次光纤传感实证，保存普通/综述费用阈值、现指南与2021会议扩展附件版本、单盲和统计未知年。101刊/130届/10活动、273候选210 admitted/56 pending/7 deferred、SCIE87/ESCI12/EI94、JCR99/CAS11、40刊至少三篇样例；旧100刊/272其他候选及全部其他JSON保护，其他规划继续。 [字段来源](JOURNAL_CANDIDATE_EVIDENCE_2026-10-05.md#f11ieee-sensors-journal)。
- 实际MJL卡、新双号EI行、三JIF原图、指南/主页和June2021附件全页、三原IEEE摘要/首发元数据核实。必需/建议/自愿和稿型/旧入口分别保留，未造统计年或病例效能。必要验证/差异审查及构建后上传并按同SHA验收；其余规划继续。

- 发布前数据校验、固定2cf92ef的100旧刊/旧39样例、272其他候选与全部其他JSON保护、单候选六字段白名单断言通过；101/210-56-7、87-12-94、99-11及40样例、三首次日/原JIF三学科/费用稿型/未知统计年边界通过。375本地Markdown链接、维护448项/12主题覆盖、Pages子路径六资源构建exit0、数据/文档差异审查与git diff --check通过；续接示例旧数字已同步101/130。完整31项测试/typecheck/lint由同SHA CI验收。
