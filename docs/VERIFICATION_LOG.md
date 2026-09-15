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
