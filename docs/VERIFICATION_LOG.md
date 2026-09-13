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
