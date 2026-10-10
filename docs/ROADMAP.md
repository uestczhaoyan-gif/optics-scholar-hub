# 后续工作规划 / Roadmap

2026-10-10 用户体验更新：按用户新要求完成分页、1–4 区筛选、综合期刊补充、检索与手机筛选、会议状态修正、三刊对比和条目纠错。正式期刊 114 本，会议 133 届；逐项验证与发布见 [完整清单](UX_CHECKLIST_2026-10-09.md)。下方 V1.0 验收及建设过程为历史记录，不恢复旧建设自动任务。

更新：2026-10-06。项目状态：V1.0_ACCEPTED。验收日期：2026-10-06。G1–G6全部通过；发布SHA：`eda989c36529290a5c89fbf102c62e49fc1244a3`；[Pages 37468868918](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37468868918) build/deploy成功，首页/版本HTTP200，线上目录摘要 `661eb3d51f38bc085a66144e45be03f9d6b884ff802f88261821832f1880781f` 匹配本地（2026-10-06T13:12:46.316Z）。32/32测试、类型/lint/子路径构建及桌面/手机实际回归通过。详见[完整验收和限制交接](V1_ACCEPTANCE_2026-10-06.md)。

有限V1.0建设已结束，原五小时建设任务在结项记录发布验收后删除。下方方向与旧批次仅为历史/后续版本发现池；不自动继续建设。操作入口见[交接说明](RESUME.md)。

## V1.0 的终点与范围

用户于2026-10-05要求明确结项，当前状态为 `V1.0_ACCEPTED`，固定门槛均已验收。执行范围以 [V1.0结项清单](PROJECT_CLOSEOUT.md) 及 [固定ID名单](V1_SCOPE.json) 为准：冻结104刊/133届/98系列/10活动/273候选为基线；初始固定60未收尾候选、6刊样例、12核心系列及正式数据质量与最终验收。下方扩充方向是背景与后续版本发现池，不再自动增长本版必做任务。

六项门槛已全部验收，**`项目状态：V1.0_ACCEPTED`** 及发布SHA、Pages、线上摘要和限制交接已记录；结项记录确认部署后删除五小时建设自动任务。已审查的未知/冲突/受限来源单列限制，不要求无限重试或滚动维护队列为零；日常来源变化转入维护阶段。

当前逐项完成记录见 [V1收尾账本](V1_REVIEW_LEDGER.json)；初始冻结名单不随完成项回写或扩大。

## 当前结果与原规划对照

原始基线为 19 本期刊、9 届会议；现有 **112 本期刊、133 届会议、10 项展会/论坛**。用户指定的 [54 本期刊](REQUESTED_JOURNALS.md) 已全部收录。展会/论坛含母子活动，不计入论文会议数量。

| 原规划                             | 当前状态                                      | 后续工作                                                 |
| ---------------------------------- | --------------------------------------------- | -------------------------------------------------------- |
| 中文网站、双语 README、GitHub 发布 | 已实现并上线                                  | 每批同步数量、记录和部署结果                             |
| 期刊扩充、SCI/EI 与分区标签        | 54 本指定清单完成；标签、领域及组合筛选已实现 | 补证据、年度与学科覆盖，继续审核中文及薄弱方向候选       |
| 国内外会议、核心通知及多类 DDL     | 133 届会议；分开记录投稿、PDP、注册、终稿等   | 逐届扩充，核实未知日期、征稿规则与出版形式               |
| CIOE、精密工程论坛及中国光学大会   | 已有相关正式记录，展会/论坛独立呈现           | 核实后续届次、同名活动身份和官方冲突信息                 |
| JCR/中科院官方查询入口             | 首页已提供两套官方平台链接                    | 入口可用不代表逐刊数据已官方复核                         |
| 刷新与更新机制                     | 已实现已发布目录版本检查；每日来源巡检        | 报告仍需人工判断；展会/论坛维护队列已补齐                |
| 日历、分享筛选、本地关注、审核统计 | 已实现；现有32项自动测试                      | 随新增字段补必要测试，不重复开发                         |
| 广覆盖候选池和审核流程             | 已有 273 项结构化候选及审核规则               | 规范状态、身份、适配证据和待办，不将候选数量算成正式收录 |

## 数据缺口快照

统计自 2026-10-05 当前 `data/journals.json`；统计的是已有记录，不代表全年度、全学科或所有单篇实际数据库覆盖已确认。

| 项目                  | 已有记录的期刊数 | 尚需处理                                                                                                                            |
| --------------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| JCR 分区              | 108 / 112        | 其余 4 本及已有条目的缺失年份/学科；多数新增记录为 JCR 2025 机构转载参考，需官方复核                                                |
| 中科院分区            | 11 / 112         | 其余 101 本；同时核对版本、大类、小类，未知不补造                                                                                   |
| SCIE 肯定记录         | 96 / 112         | 其余 16 本没有肯定记录；不等于未被收录                                                                                              |
| EI Compendex 肯定记录 | 102 / 112        | 其余 10 本没有肯定记录；不等于未被收录                                                                                              |
| ESCI 肯定记录         | 14 / 112         | 独立保存，不换算为 SCIE                                                                                                             |
| 数据库方索引证据      | EI 102 / SCIE 96 | Compendex SERIALS 2026-08-07 版及中文表 2026-07-10 版；未进行订阅平台单篇检索，另有 MJL 当前 SCIE 96 / ESCI 14 查询；两类期刊有重叠 |

JCR 和中科院记录可重叠，索引记录也可重叠。资料存在访问限制时保留来源和待核验状态；EI 工程补充无需强行补分区。固定53刊已完成一次光学适配收尾：48刊三不同正式卷/期、5刊已审查限制，见 [V1样例收尾](V1_SCOPE_REVIEW_2026-10-05.md)。目前五十八刊至少三篇：原九刊及 E4 的 NML、SCM、PRX Quantum、InfoMat、Advanced Science，另有 F2/F3 的 PRA、PRApplied、PRB、PRL、PRResearch、PRX，E20 的 ACS Nano、Science Advances，E21 的 ACS Sensors，E22 的 BIOSBE、SNB，E25 的 JCIS、Dyes and Pigments，E27 的 Nano Letters、Inorganic Chemistry，E28 的 Advanced Materials、Angewandte，E29 的 Chinese Physics Letters、Applied Physics Reviews，E30 的 Chemical Reviews及 F5 的物理学报和 F7 的JSID、E34的IEEE TMI、F10的Applied Physics Letters、E35的IEEE TIE、F11的IEEE Sensors Journal、E36的IEEE TIP、F12的IEEE TCI、E37的IEEE TGRS、E38的IEEE TCYB、F13的IEEE EDL、F14的IEEE TED、E39的Proceedings of the IEEE、E40的IEEE COMST（两个正式卷/期限制保留）、E41的JBO、E42的Neurophotonics、E43/E44的Photoacoustics/Displays及V1-G3C的Quantum与V1-G3G的Nature Methods及V1-G3H的Nature Physics和V1-G3J的Journal of Semiconductors及V1-G3L的Communications Materials和V1-G3N的PNAS；首次上线日期、卷期及在线校正稿状态见 [早期样例依据](JOURNAL_SCOPE_EVIDENCE_2026-10-02.md)和 [E20–E30 依据](JOURNAL_SCOPE_EVIDENCE_2026-10-04.md)。作者指南受限条目也未全部核验格式与收费。

物理学报的三篇原论文及指南范围见 [F5 证据](JOURNAL_CANDIDATE_EVIDENCE_2026-10-05.md#f5物理学报)。

## 下一阶段执行顺序

以小批次独立提交和推送，先保证已收录资料可用，再按固定收尾名单推进。以下分类用于安排本版已锁定事项与后续维护；研究结果可能为补齐、明确限制或暂缓，不承诺每个候选都进入正式目录。发现池不会自动扩大结项范围。

| 批次 / 优先级                          | 要做什么                                                                                                                                                  | 交付与验收条件                                                                                         |
| -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| A / P1：已有索引与分区证据             | 已有肯定索引均有数据库方证据：SCIE 90、ESCI 12、EI 97。下一步补 JCR/CAS 年度与学科、七刊 EI 缺口及中文 EI 补充刊的 SCIE 未核实身份；不重复同版清单        | 每字段保存来源、证据等级、版本或核验日期；无法核实保留缺口，不从历史 JCR 的索引列推断当前收录          |
| B / P1：临近会议与冲突                 | 先处理维护报告中临近 14 天事项，再处理未知日期；NDTA 2026 酒店已有官方依据，继续核实中英文摘要长度冲突、CIOE 纳米压印论坛日期及 OPJ 终日冲突              | 每届使用当届官方通知，分别记录截止与举办时间；冲突未解继续暂缓，不选一个日期充数                       |
| C / P1：会议与活动覆盖                 | 每批审核 5–8 个系列，CIOP 历史届次已收录，继续补原始征稿；Photonics West、AOPC、OGC、OECC、ICOCN 已有届次，继续查后续；向制造、生医、显示、红外、遥感扩展 | 区分系列、届次、母子会议、论文会议和展览；有当届依据才新增正式记录，无下一届通知则保留系列候选         |
| D / 已完成（2026-09-12）：活动维护能力 | 已将 `events` 纳入离线维护队列与报告，显示类型和母活动关联                                                                                                | 覆盖即将举办、日期未知、核验过期与历史活动；保留母子关系、不重复统计；必要边界测试通过                 |
| E / P2：投稿指南与交叉适配             | 每批 5–8 本，补受限作者指南、综述/邀稿提案流程、模板、正式提交入口、篇幅、费用、预印本与会议扩展规则；补交叉期刊样例                                      | 规则注明适用稿型、官方来源与核验范围；动态费用保留日期；样例含题名/DOI和光学适配理由，样本不足明确说明 |
| F / P2：中文及薄弱方向期刊             | 八本中文刊已按 EI 依据收录；继续审核生医、制造、传统光学及器件候选，投稿细则缺口在 E 跟进                                                                 | 按原定 Q1/Q2 或已核实 EI 工程补充路径准入；刊号去重，未满足条件留候选，不暗中扩大分区门槛              |
| G / P2：候选与覆盖管理                 | 将原候选池区分已收录、待核验、暂缓、历史；逐步保存别名、ISSN/系列 ID、方向、下一步和暂缓原因；建立方向覆盖矩阵                                            | 已收录条目指向正式 ID，避免反复检索和重复添加；矩阵分开统计期刊、会议系列/届次与展会/论坛              |
| H / 基线完成：共建与体验回归           | 贡献模板及手机/键盘/分享/关注/刷新基线已完成；后续界面变更复用 UI_REGRESSION.md 的检查场景                                                                | 数据提交能沿模板审核；仅对发现的问题修改与补测，不新增无明确需求的账户、订阅或通知系统                 |

A、B 优先推进；C、E、F 交替补覆盖。D 已完成并通过测试；G 的结构化候选与覆盖报告已落地，继续逐项审核。所有批次都执行发布验收，而不是等 H 才上线。

完整候选系列与研究人群见 [扩充计划](EXPANSION_PLAN.md)；它是发现池，不是已核实的当届日历。

## 更新频率与发布验收

- 现有来源工作流计划每天北京时间 **09:23** 运行，仅生成内容变化/访问异常报告，不自动改写会议日期或期刊事实。
- 建议人工每周整理一次；临近 14 天的会议、投稿与注册优先处理。实际执行不构成固定响应时间承诺。
- 网站“检查更新”读取本站已发布的数据版本；它不会实时抓取会议官网。人工核实、提交并部署后，访问者才会获得新事实。
- 只复核部分字段时记录实际范围，不把整条记录伪装为已全面复核。
- 数据批次运行数据校验并核对差异；功能变更运行相关测试、类型检查、lint 和构建。GitHub CI 继续执行完整检查；每步独立提交推送，确认对应 Pages 构建与部署成功。
- 文档批次检查本地链接、数字和执行状态，不为纯文字修改编写实现镜像测试。更新计划本身不等于已开展待办或创建定时任务。

## English

Updated 5 October 2026. The user authorized continuous work and five-hour usage checks; the existing automation was reactivated and attached to the current conversation. See [the resumption handoff](RESUME.md) before continuing. The catalog contains 112 journals, 133 conference editions and 10 separate exhibition/forum records. All 54 requested journals are included. Filtering, index/ranking labels, calendar export, shareable filters, local favorites, official ranking links and published-version refresh are implemented.

The remaining priorities are evidence quality and broader coverage: verify current indexing and ranking editions, resolve conflicting conference information, add edition-specific official records, maintain the newly implemented exhibition/forum offline queue, complete submission guidance and cross-disciplinary article examples, review Chinese/EI journals, and normalize the candidate backlog. There are JCR records for 108 journals and CAS records for 11. SCIE has 96 and EI has 102 positive records. 102 EI records now have database-provider evidence from Elsevier's public Compendex source list (SERIALS version 7 August 2026); no subscription-platform article search was performed. Ninety-six SCIE records have current Clarivate MJL search-result evidence; fourteen ESCI records also have database evidence. Missing evidence does not mean a journal is not indexed.

Execute the batches above as separate reviewed commits and pushes. Daily source monitoring reports changes; weekly human review is a proposed maintenance practice, not a guaranteed service. The website refresh checks published catalog versions rather than fetching venue websites. V1.0 has a frozen scope and six completion gates in PROJECT_CLOSEOUT.md. Finish its fixed backlog, preserve reviewed limitations, then mark V1.0_ACCEPTED and stop the five-hour construction automation. Daily source monitoring and published-version refresh remain available for maintenance; newly discovered venues belong to a later version.

## 2026-09-12 执行记录

批次 D 已实现：临近 14 天、进行中、未知起止日期和超过 30 天未复核的展会/论坛进入队列；已结束活动退出待办但保留目录。母子活动各自保留字段级任务，任务数不作为独立大会数量。新增两项边界测试，全部 23 项测试及数据、类型和 lint 检查通过。下一批回到 A/B 的期刊证据与当届会议核验。

### 2026-09-12：批次 A 首组完成

为 Ultrafast Science、npj Quantum Information、Communications Physics 补 6 条出版社索引声明；独立记录索引核验日期，整刊核验日期保持原值。后续仍需数据库直查、其他期刊及 JCR/CAS 证据补齐。

### 2026-09-12：批次 A 第二组完成

Wiley 四本期刊逐刊复核：Advanced Science、Angewandte 新增 SCIE/EI 声明，Advanced Materials、AFM 更新已有声明来源。另补 Angewandte 印刷刊号及综述提案限制；访问失败的 Nature/InfoMat 索引不变。下一步继续补数据库证据与剩余期刊，并交替推进会议核验。

### 2026-09-13：批次 B 临近事项

补齐 OPTIC 2026 Poster-Only 的 9 月 14–30 日窗口；复核 FiO PDP 通知、Laser Congress PDP 截止，与目录一致。Photonics West 官方正文读取受限，留待后续核实。

### 2026-09-13：会议覆盖第二批

新增 OECC & IP 2027 联合会议和 OGC 2026 历史届次。两者与展览关系、独立投稿规则及官网待完善信息已分别记录。ICOCN 初期 CFP 与首页会议月份存在差异，待核对最终日程后再收录。

### 2026-09-13：候选管理与覆盖报告已实现

已整理 [结构化候选清单](CANDIDATES.md)，262 项区分已有正式条目、待核验和暂缓；名称/别名、关联类型、状态一致性进入数据校验。新增 `pnpm report:coverage` 并接入 CI 附件，报告以当前受控方向统计，区分系列/届次和母子活动。批次 G 的管理基础完成；候选逐项审核与更细方向覆盖仍需持续推进。全部 25 项测试通过。

### 2026-09-13：中文 EI 补充

新增《中国激光》《光学学报》《激光与光电子学进展》，按主办单位 EI 声明准入，ESCI 单独记录。三刊未补造分区，完整投稿指南继续待核验；候选状态已同步。该批完成时为 68 本期刊。

### 2026-09-13：ICOCN 历史届次补齐

最终日程确认 7 月 20–23 日及西宁会场，解决初期 CFP 的月份冲突，新增 ICOCN 2026。保留超页、模板版本和退款日期的官网问题，后续届次继续跟踪。当前 20 届会议。

### 2026-09-13：共建模板与贡献流程

批次 H 的贡献文档部分完成：Issue 表单覆盖候选、期刊、会议届次、展会/论坛，收集来源、核验范围和冲突；PR 模板要求同步候选关联与实际验证结果。贡献指南补齐准入、交叉适配和部署确认。手机端及键盘体验回归仍待执行。

### 2026-09-13：中文 EI 补充第二组

新增《中国光学（中英文）》《红外与激光工程》，总数 70 本。EI 肯定记录增至 23 本、ESCI 7 本；数据库直查仍为 0。作者指南和分区版本不明之处继续进入核验队列。

### 2026-09-13：ESCI 筛选补齐

目录已有 7 本 ESCI 肯定记录，增加独立 ESCI 筛选，并让分享链接与加载新版保留该筛选。ESCI 不计入 SCI/SCIE 或 SCI+EI 双收录筛选。新增链接恢复回归测试，当前 26 项测试。

### 2026-09-13：候选关联完整性与每日覆盖报告

新增正式条目或会议届次遗漏候选关联会触发数据校验失败，防止维护清单落后于网站。每日来源巡检同步生成 coverage.md/json，与来源异常和维护队列一起提供；不会自动修改事实。补充漏关联回归断言，26 项测试保持通过。

### 2026-09-13：内容锚点不再重置筛选

代码检查发现“跳转到内容”改变 URL hash 后会重新载入 URL 筛选，清空尚未分享的当前筛选。现仅对目录标签的 hash 变化恢复筛选，普通内容锚点保留状态；初次载入仍读取分享参数。此项为代码路径修复，尚未替代完整手机端与键盘交互回归。

### 2026-09-13：标识符与续接检查点

补齐 ACS Photonics 与 Advanced Photonics Nexus 的电子刊号，来源为 ISSN 国际中心；未把本轮身份核验当作整刊复核。当前 70 本期刊、20 届会议、7 项展会/论坛；262 项候选中 97 项已关联正式目录、163 项待核验、2 项冲突暂缓。

下一批先继续 A/B：缺失 SCI/EI 数据库证据、LPR 分区/EI、NDTA 与 CIOE 纳米压印冲突；C/F 按制造、生医、显示、红外等薄弱方向选择候选。五本新增中文 EI 期刊的完整作者指南仍需补齐，E 的交叉论文样例与 H 的实际手机/键盘回归未完成。维护报告中的临近 FiO/Laser Congress 日期本轮已核对，但到期前仍应持续关注官网更改。

### 2026-09-13：已有期刊规则与分区补证

Optica 补充电子刊号、稿型篇幅、投稿信及综述提案流程。LPR 补三个学科的 JCR 2025 Q1 机构转载参考，当前官方分区与 EI 仍待核验，未由影响因子推断分区。JCR 有记录的期刊增至 57 本。

### 2026-09-13：生医与极端制造扩充

新增 JBO、Neurophotonics、Photoacoustics、IJEM，共 74 本期刊。依据官方范围和历史 JCR 2025 Q1/Q2 参考准入；缺失索引不填造，指南读取范围明确。JBIO 的 JIF Q3 与 AIS Q2 已区分，继续留候选而非误收录。

### 2026-09-13：Photonics West 2027 官方正文核验

网页正文通过浏览器成功读取，新增 Photonics West 2027 共同日程、摘要规范、录用通知、海报/全文及提前上传截止，明确分会和同期展览区别。注册具体日期及分会补投安排留待后续核实，当批为 21 届会议。

### 2026-09-14：移动端与键盘回归完成

批次 H 的基线回归完成，实际覆盖 320/390px 窄屏、桌面、键盘标签与索引筛选、分享条件恢复、关注与加载新版。修复导航撑宽页面和内容跳转焦点问题，并消除固定快照日期造成的误解；详细范围见 [界面回归记录](UI_REGRESSION.md)。后续界面变更继续按该基线复核，数据审核与覆盖扩充仍按 A/B/C/E/F/G 推进。

### 2026-09-14：中国光学作者指南补齐

补充官方征稿细则、Word 及签字材料要求、2026 年新旧投稿系统分流、公开版面费标准。五本新增中文 EI 期刊中，本刊的核心投稿流程已补；模板细节、预印本规则和其余四刊仍待核验。

### 2026-09-14：AOPC 2026 历史届次

补 AOPC 2026 会期、会场、摘要及全文截止，会议总数 22。官网早鸟日期 6/20 与 6/30 冲突，保留未知；WPC 与同期展览关系明确，候选关联同步。

### 2026-09-14：葡萄牙应用光学会议

新增 AOP 2026 历史届次，区分 SPOF 的 AOP 与中国 AOPC；23 届会议、263 项候选。摘要最终截止因官网与平台冲突留空；首轮公告日期明确标注适用范围。

### 2026-09-14：AOM 作者指南

Advanced Optical Materials 从通用提醒补为官方稿型篇幅、摘要、综述、预印本与返修要求；SCIE 声明复核，EI 保留待核验。计数不变，索引数据库及分区缺口继续保留。

### 2026-09-14：电子交叉期刊样例

Nature Electronics 补三篇近两年、不同期次的光学研究样例，附题名、DOI 链接、日期和适配理由；其他交叉期刊继续逐刊补证。

### 2026-09-14：材料交叉期刊样例

Nature Materials 补三篇近两年不同期次的发光材料与器件研究样例，明确主题覆盖边界；继续推进其他交叉期刊。

### 2026-09-14：冲突候选追踪

NDTA 已核实苏州市和会期，具体场馆、摘要字数冲突仍待解决；CIOE 纳米压印的总表与详情正文仍不一致。两项已补官方来源入口和具体后续核验条件，保持暂缓，未增加正式目录数量。

### 2026-09-14：红外与近眼显示方向

补充 CIOE 红外探测、AR/VR 光学两项子论坛历史记录；微显示论坛因日期与层级不明确暂缓。现有 9 项活动、266 项候选。继续优先扩充有明确当届资料的独立学术会议，并补薄弱方向的期刊证据。

### 2026-09-14：EOSAM 当届资料

新增 EOSAM 2026 坦佩雷历史届次，会议增至 24 届；核实会场、延期投稿、追加海报和论文集条件，保留指南口径及旧年份问题。候选 266 项中 107 已收录、156 待审核、3 暂缓。

### 2026-09-14：AIP 投稿材料核验

补充 APL Photonics 和 Applied Physics Reviews 的图表替代文本、稿件材料与章节要求，记录 APR 通用指南混入其他刊名字样。两刊 SCIE/EI 清单仍缺明确官方证据，保持待核验；目录数量不变。

### 2026-09-14：LAM 的 ESCI 出版社证据

直接读取 Light: Advanced Manufacturing 官方公告与现页索引栏，新增 ESCI 肯定记录。ESCI 覆盖增至 8/74，SCIE、EI 和数据库直查数量不变；未将公告含混的年份表述填成覆盖起始年。

### 2026-09-14：临近事项与通知完整性

复核 FiO PDP 通知和 Laser Congress PDP 截止，现有日期无需调整；补齐 FiO 普通论文及海报的 7 月 3 日历史录用通知。临近事项仍需持续关注官方更改。

### 2026-09-14：Nature Nanotechnology 光学适配

补充近两年三篇不同期次的红外探测、微显示和电光超表面样例，区分首次上线日期与卷期日期；未改索引、分区或整刊核验日期。其他交叉期刊样例仍待逐刊补充。

### 2026-09-14：红外与太赫兹会议

新增 IRMMW-THz 2026 盐湖城当届资料，会议增至 25 届。区分普通投稿、Late News、终稿、早鸟及后续费率节点，记录晚稿出版资格口径问题。候选 108 已收录、155 待审核、3 暂缓；继续核实其他系列。

### 2026-09-14：2027 年激光光谱与综合光学

新增 ICOLS XXVII 和 ICO-27 的官方预告，会议共 27 届；摘要和注册截止均保留未知，意向登记不作为注册。候选 110 已收录、153 待审核、3 暂缓。同步修正英文现状数字；两会仍需后续正式征稿与出版核验。

### 2026-09-14：ACS 三刊投稿要求

ACS Photonics、Nano Letters、ACS Sensors 补稿型篇幅、摘要、图件、投稿信与邀稿限制；区分 ACS Sensors 清单与正文的篇幅口径。索引、分区、收费和整刊核验日期未改，本批只核验投稿相关字段。

### 2026-09-14：InfoMat 索引与神经光子线索

InfoMat 新增 Wiley 明确 SCIE 声明，肯定记录增至 18/74；EI 不变。Neurophotonics 补 SfNIRS 学会来源，但历史信息与无日期索引声明不足以确认当前覆盖，保留待核验并明确下一步需 SPIE 或数据库证据。

### 2026-09-14：OFS 光纤传感会议

新增 OFS30 罗利当届资料，会议共 28 届。普通投稿、报告人注册已核实；PDP 占位符、出版渠道差异和早鸟边界明确待核验。候选 111 已收录、152 待审核、3 暂缓。

### 2026-09-15：续接上传与 EWOFS 候选

额度恢复后续接 OFS30 上传；EWOFS 2027 补官方入口与已知会期线索。官网部分页面仍未公开，继续核实委员会、会场、征稿及出版后再决定正式收录。

### 2026-09-15：WSOF 特种光纤方向

新增 WSOF 2027 官方预告与耶拿会场，会议共 29 届，候选 267 项（112 已收录、152 待审核、3 暂缓）。投稿及注册计划 2027 年春季开放，具体截止、格式和出版保留待核验。

### 2026-09-15：ACS Nano 与 Chemical Reviews 提案

补两刊非邀稿提案前置条件、材料和摘要/篇幅要求；明确 Focus Review 与普通综述区别，提案批准不等于全文录用。目录数量及索引、分区保持不变。

### 2026-09-15：CIOP 历史届次补齐

联合主办方团队会后记录确认南京会期、会场，新增 CIOP 2026，会议共 30 届；原始征稿仍不可读，格式、截止和出版保持待核验。候选 113 已收录、151 待审核、3 暂缓。

### 2026-09-15：中国光纤传感大会

新增 OFS-China 2026，会议共 31 届；核实 9/15 最终投稿、9/22 早鸟及不同投稿通道，宁波具体会场待核实。候选 268 项（114 已收录、151 待审核、3 暂缓）。

### 2026-09-15：Inorganic Chemistry 投稿边界

补通信稿计词口径、摘要及 TOC 图、综述/Viewpoint 邀稿和预印本规则，强调光学交叉稿需有无机化学贡献。索引、分区及收费仍单独待核验。

### 2026-09-15：QCMC 系列身份

修正 QCMC 候选中混入的 QIP 范围提示，补永久官网与征稿入口。官网下一届仅给 2027 年，暂不加入有精确日期的正式日历；与 ICQCMC、QCNC 区分，目录计数不变。

### 2026-09-15：ICORS 拉曼光谱覆盖

新增 ICORS 2026 历史届次，正式会议目录增至 32 届。以正式日程的开幕/闭幕确定 8/23–27，记录旧预告日期差异、350 词摘要、海报与注册要求，以及独立 JRS 专刊截止；候选转为 admitted。后续继续补其他光谱系列与期刊证据。

### 2026-09-15：Nature Photonics 指南

将通用提示替换为已核实的稿型篇幅、图表、初投格式、咨询限制与系统要求；指南改用现行入口。期刊索引、分区及收费证据仍在原审核队列，不因本批投稿规则核验而标为完成。

### 2026-09-15：UFO 系列身份

补齐 Ultrafast Optics 候选的正式名称、别名、官方入口及 2025 历史证据；下一届日期与征稿尚未核实，继续 pending。后续检查新届公告及历史完整规则，不根据周期推算日历。

### 2026-09-15：USQS 2027 国内覆盖

新增三亚 USQS 2027，正式会议增至 33 届，候选 269 项。补英文摘要及模板、海报规格、12/31 投稿截止；注册页残留 2026 内容，费用和注册截止继续待核实，不沿用历史值。

### 2026-09-15：USQS 模板补核

已检查 2027 DOCX 模板并补齐照片位置和材料字段；篇幅上限及是否必须全文未被模板明确，继续待会务确认。注册和出版缺口保持开放。

### 2026-09-15：PhotoniX 投稿细则

补研究稿结构、数据与声明、图件规格、可编辑文件要求及带日期的 APC 说明。数据库索引直查和分区缺口仍按原计划推进。

### 2026-09-15：eLight Letter 与费用

补 Letter 摘要、关键词和声明规则，明确 Commentary 仅邀稿及独立 APC。当前费用注明核验日期；其他稿型细则、索引数据库覆盖和分区证据继续开放。

### 2026-09-15：CLEO/Europe–EQEC 2027

新增官网明确的慕尼黑 2027-06-21 至 06-25 预告，正式会议共 34 届；候选转 admitted。具体会场及当届征稿未核实，旧 2025 截止与出版信息不复用。

### 2026-09-15：CLEO-PR 2026

新增北京 2026 历史届次，正式会议共 35 届；补摘要/概要、终稿验证、注册日期和分别适用的出版条件。下一届及实际 EI 覆盖继续待核实。

### 2026-09-15：刊号缺口与临近检查

补齐 High Power Laser Science and Engineering 印刷/电子 ISSN，便于后续数据库精确匹配；OFS-China 当日投稿截止复核未变。HPL 索引与分区证据继续待补。

### 2026-09-15：HPL 索引历史线索

为 HPL SCIE 保存 2017 主办机构公告，标清历史证据与当前核验的区别。当前覆盖仍需数据库或现行出版社清单，状态不升级，肯定索引数量不变。

### 2026-09-15：暂停交接

已新增 RESUME.md，保存基线、具体待办、冲突与证据边界、恢复命令、逐批发布验收及可复制的新对话提示。Codex 五小时续接任务已暂停；项目规划尚未全部完成。

### 2026-09-30：人工续作与临近会议批次 B

已同步干净的 main，确认交接提交 Pages 成功，读取今日来源巡检附件并重新生成维护/覆盖报告（初始 325 项字段任务）。OMTA 会期改为 10/29–31，新增 10/15 最终轮投稿、更新 10/15（含）优惠缴费；Photonics West 幻灯片提前上传改为 2027-01-27。ACP 补 PDP 双版本和 PDF eXpress 编号；其他已核对的临近日期无变化。NDTA 已有酒店依据，摘要长度仍冲突，继续暂缓。数量不变，索引/分区及覆盖队列继续开放，旧 Codex 自动化不恢复。

### 2026-09-30：Compendex 批次 A1

按 Elsevier 官网当前公开来源表核对 12 本优先刊的刊号、刊名和出版社，同时检查停收表。新增 12 条数据库方 EI 依据，EI 肯定记录由 23 增至 35 本；并非订阅平台单篇检索。各字段记录 2026-08-07 SERIALS 版本及行号，起止年不推断，SCIE/ESCI 与分区保持独立。完整匹配见 [来源表证据](INDEX_EVIDENCE_2026-09-30.md)。首批 1515ec6 Pages build/deploy 已确认成功；后续继续核心光学/中文 EI、SCIE 与分区。

### 2026-09-30：Compendex 批次 A2

新增 AOP、PR、JLT、JOCN、OL、BOE、OME 七本 EI 来源表证据，并将五本中文刊已有 EI 出版社证据升级为数据库方来源表，中文表明确 2026 Renewed。累计 EI 肯定记录 42 本、数据库方来源表 24 本。各表版本分开保存，起止年继续未知；A1 提交 f77161d Pages 已确认成功。SCIE/JCR/CAS、更多 EI、交叉样例及候选继续按剩余规划处理。

### 2026-09-30：Clarivate SCIE 批次 A3

按刊号在 MJL 公开结果卡核对 HPL、核心光学九刊及 AIP 两刊，新增 12 条当前数据库 SCIE 依据，肯定记录 18→30。保留未知覆盖年份，不混用检索过滤器与结果子库；EI 与分区不变。上批 A2 提交 22cf6ed 的 Pages 构建、部署和线上数据版本已确认。ACS 等当前 SCIE、JCR/CAS、指南与候选继续开放。

### 2026-09-30：Clarivate SCIE 批次 A4

核对 ACS 六刊、Nature 五刊及 LPR 当前 MJL 结果，新增十一条 SCIE 肯定记录并升级 LPR 证据。累计 SCIE 41/74、数据库查询 24 本；EI 与各分区不变。A3 的构建、部署及线上版本已确认后才更新本批数据。IEEE、生医/制造/其他光学刊索引及候选会议继续按规划推进。

### 2026-09-30：会议覆盖批次 C1

审核六个系列，新增 SPIE Advanced Lithography + Patterning 2027、Medical Imaging 2027、Optical Metrology 2027、Astronomical Telescopes + Instrumentation 2028 和 OPIC 2027，正式会议 35→40 届；候选五项转 admitted，APOS 因当届会期缺口仍 pending。前两会有具体投稿和材料规则，后两会仅正式未来会期预告；OPIC 官方检索与 ICNNQ 正文的核验范围单独记录，主站读取超时及稿型/出版缺口保留。详见 [C1 证据页](CONFERENCE_EVIDENCE_2026-09-30.md)。A4 构建、部署与线上版本已确认；本批发布前全部 26 项测试及数据、类型、lint、子路径构建检查通过。当前维护队列 300 项字段任务，继续剩余期刊与未审会议系列，优先补 APOS 会期及新增会议未知字段。

### 2026-10-02：部署收尾与临近检查 B2

C1 线上版本已成功核对，不再保留未验收状态；当日来源巡检已读取，维护报告按当前日期重生成。复核 ACP、IPC、OMTA、OPTIC 与 Photonics West 临近事项，日期未变；补 PW27 官方注册入口，注册截止和费用继续待核实。维护队列 296 项字段任务，数量和候选状态不变。用户明确授权后已复用五小时额度检查任务并接到当前对话，持续按 A/B/C/E/F 处理剩余规划，额度受限时保存进度等后续调度。

### 2026-10-02：Clarivate 索引批次 A5

新增十一条 SCIE 数据库肯定记录，并将 Frontiers of Optoelectronics 的 ESCI 升级为数据库依据，具体十二本及刊号见 [10/2 匹配页](INDEX_EVIDENCE_2026-10-02.md)。SCIE 52/74、数据库 SCIE 35 / ESCI 1；EI、JCR/CAS、其他刊物字段及正式数量不变。维护队列 284 项字段任务。B2 已确认部署与线上版本；后续继续剩余当前索引、分区和会议覆盖，不从 ESCI 或影响因子推断 SCIE。

### 2026-10-02：Clarivate 索引批次 A6

新增 OEA、PQE、PRX Quantum、Science Advances、Chinese Physics Letters、Sensors and Actuators B、Science Bulletin、Proceedings of the IEEE、Neurophotonics、Photoacoustics 十条 SCIE 数据库依据；APN 新增独立 ESCI，LAM 的 ESCI 升级为数据库证据。当前 SCIE 62/74（数据库 45）、ESCI 9/74（数据库 3），其余字段不随索引刷新，维护队列 273 项字段任务。A5 已确认部署与线上版本；继续剩余出版社证据、中文刊及 EI/分区和会议缺口。

### 2026-10-02：Clarivate 索引批次 A7

十二条 SCIE 出版社依据升级为当前 MJL 结果卡依据；SCIE 肯定总数仍 62，数据库依据 45→57，ESCI 9（数据库 3）、EI 42（数据库 24）不变。A6 构建、部署及线上版本已确认。余下出版社 SCIE/ESCI、其他 EI/分区、指南和会议继续开放。

### 2026-10-02：Clarivate 索引批次 A8

五条 SCIE 与六条 ESCI 的出版社证据升级为当前数据库结果，已有 62 条 SCIE、9 条 ESCI 肯定记录全部完成 MJL 公开结果卡复核。Angewandte 以电子刊号匹配，中国光学以现刊号匹配，首次无结果不判停收。A7 部署与线上版本已确认；剩余三刊身份、EI/分区、指南、样例和会议继续开放。

### 2026-10-02：索引批次 A9

Optica Quantum 补官网刊号与 MJL ESCI；两本中文 EI 刊未取得核心合集身份匹配，SCIE 保留未知。重新下载 Elsevier 当前链接来源表，文件与三张表版本仍同 9/30；十一刊新增 EI 数据库依据，累计 EI 53（数据库 35）、SCIE 62、ESCI 10。A8 部署与线上版本已确认，其他 EI/分区、会议及指南样例继续开放。

### 2026-10-02：Compendex 批次 A10

12 本逐刊核对当前来源表，新增 0 条 EI 肯定、升级 12 条出版社依据。当前 EI 53（数据库 47），其他索引、分区及整刊信息不变。前批 7f6b06c 部署与线上版本已确认；剩余 EI 与其他规划继续开放。

### 2026-10-02：Compendex 批次 A11

12 本逐刊核对当前来源表，新增 6 条 EI 肯定、升级 6 条出版社依据。当前 EI 59（数据库 59），其他索引、分区及整刊信息不变。前批 dff0b61 部署与线上版本已确认；剩余 EI 与其他规划继续开放。

### 2026-10-02：Compendex 批次 A12

8 本逐刊核对当前来源表，新增 8 条 EI 肯定、升级 0 条出版社依据。当前 EI 67（数据库 67），其他索引、分区及整刊信息不变。前批 630e597 部署与线上版本已确认；剩余 EI 与其他规划继续开放。

### 2026-10-02：会议核验 C2（六个系列）

新增 APOS 2026 历史届次，按官网 PDF 单独日程 1/31–2/2 收录，IWPFA 与联合总日程不重复计数。OPIC 母会正文复核补证据，稿型/注册仍待公布；另四系列未发现新事实或访问失败，保留缺口。正式会议 41，候选 124 admitted / 142 pending / 3 deferred；已有肯定索引数据库核对完成，下一步转分区版本、指南/样例及未审候选。详见 [C2 依据](CONFERENCE_EVIDENCE_2026-10-02.md)。

### 2026-10-02：作者指南 E1

六本复核中五本补本刊稿型、文件、正式入口或费用：Nature Communications、npj Quantum Materials、npj Quantum Information、Communications Physics、Science Bulletin。Science Advances 正文访问受限，原缺口保留。费用注明核验日与稿型，整刊日期/索引/分区未改；E 的其他指南、完整政策与交叉论文样例仍继续。前批 822489d 部署和线上版本已确认，详见 [E1 依据](JOURNAL_GUIDE_EVIDENCE_2026-10-02.md)。

### 2026-10-02：交叉适配 E2

Nature Communications、npj Quantum Materials、npj Quantum Information、Communications Physics 各补三篇，Science Bulletin 补三篇不同正式期次及一篇在线校正稿。累计九刊达到至少三篇，整体规划仍未完成。逐篇核对官网题名/摘要/首次发表日，理论与实验分开，连续出版不编期号，指南与整刊核验日保持。前批 E1 已确认部署及线上版本；[E2 来源与边界](JOURNAL_SCOPE_EVIDENCE_2026-10-02.md)。

### 2026-10-02：会议核验 C3

七系列审核新增五届（四未来、一历史联合），正式 46 届。GFP 与 SPIE DCS 按官方现名维护同一候选；南京联合届只计一次，AOMATT 独立系列不混同。OSD 2028 城市及 YSAOM 独立层级继续 pending。AOMATT 摘要官方版本冲突留 null，早鸟有精确北京时间。候选 270（129 admitted / 138 pending / 3 deferred）；临近 10/7、10/12 截止已入日历。前批 E2 已验收部署；[逐项依据](CONFERENCE_EVIDENCE_2026-10-02.md)。

### 2026-10-02：指南与收费 E3

Advanced Materials 补本刊指南；五刊补有日期与官方来源的 APC，PRX Quantum 新增分稿型篇幅，NML/SCM 补本刊指向的入口并记录 403。当前正式与候选数量、分区/索引/样例及整刊核验日不变，SCM 页费和 NML 投稿渠道遗留待核实。前批 C3 已验收部署及线上摘要；[E3 来源](JOURNAL_GUIDE_EVIDENCE_2026-10-02.md)。

### 2026-10-02：交叉适配 E4

五刊补十五篇近两年光学样例，累计十四刊至少三篇，其他刊仍需系统核验。首次发表与卷期跨年分别记录，卷期缺显示时核对出版社向 Crossref 登记数据；连续出版不编期号。理论/计算与实验、模拟生医与临床证据分别说明。E3 已确认部署及线上版本；[来源与边界](JOURNAL_SCOPE_EVIDENCE_2026-10-02.md)。

### 2026-10-02：费用 E5

E5 补 Optica、Optica Quantum、Photonics Research、OE、BOE、OME 的官方 APC、CC BY 资格及超页费，并补 AOP 不收发表费用。官方表生效日与核验日分开；只改 publishing，指南其他细则仍待核实。E4 提交 0db3677 已确认 Pages 37021346286、线上首页/版本 HTTP 200，与本地版本 c9fa4cd07471f4ef9f1e69451b34e3078d74403b068a491b1b6c55e403178677 一致。其余分区、指南、样例和候选任务仍开放；[收费来源与边界](JOURNAL_GUIDE_EVIDENCE_2026-10-02.md)。

### 2026-10-02：作者指南 E6

E6 为 OE、BOE、OME、Photonics Research 和 Optica Quantum 补本刊入口、Word/LaTeX 模板、预印本及会议扩展规则；OME Opinion 的四页限制与研究稿分开。只改 guide/requirements，研究稿篇幅与摘要等未核实内容仍开放。E5 提交 e168b1f 已确认 Pages 37021874250、首页/版本 HTTP 200，与本地 24071643c290bda2af127324d0fcac00019e6d68606b8877d6e97ffba70368e1 一致。索引、分区、费用、样例与整刊日期保持，剩余任务继续；[来源与适用范围](JOURNAL_GUIDE_EVIDENCE_2026-10-02.md)。

### 2026-10-02：作者指南及费用 E7

E7 补 JOCN 专用模板、Prism 稿件分类、可选作者简介/照片阶段及超过 15 页需事先批准规则；同时补 JOCN、Optics Letters 的自愿页费与可选 OA，OL 印刷彩色另收费。只改两刊对应 guide/requirements/publishing，索引、分区、样例和整刊日期保持。全部规划仍开放；[来源](JOURNAL_GUIDE_EVIDENCE_2026-10-02.md)。

### 2026-10-03：作者指南与费用 E8

E8 补 LSA、Nanophotonics、HPL、AP、APN 五刊的本刊指南、模板/稿型/公开入口和费用；NANO 当前下载的指南为 2025-03-31 版，LSA 为 2026-01-15 版，版本与核验日分开。AP/APN 逐刊读取，不套费率；HPL 初投/原则录用文件分阶段。只改 guide/requirements/publishing，其他字段保持。现有 74 刊/46 会议/9 活动、270 候选及十四刊至少三篇样例保持；[具体来源](JOURNAL_GUIDE_EVIDENCE_2026-10-03.md)。

### 2026-10-03：IEEE 指南与费用 E9

E9 补 TMI、TIP、TGRS、JLT 四刊投稿/正式页数、文件和费用；TMI 初投 10 页与正式超 8 页收费分开，TGRS 2026 规则与 1/1 边界保留，JLT 当前通用八页与 2026 专题七页差异明确。只改 guide/requirements/publishing。[具体来源与冲突](JOURNAL_GUIDE_EVIDENCE_2026-10-03.md)。74 刊/46 会议/9 活动、270 候选及十四刊至少三篇样例保持，未将未核实 APC 填成零。

### 2026-10-03：生医指南与 AIP 费用 E10

E10 补 JBO/Neurophotonics 独立作者指南与 APC，以及 APL Photonics 的明确 Gold OA 费用和 APR 的通用 Author Select 政策边界。JBO 五段摘要、Neurophotonics 未列结构标题与 Data Paper 数据公开规则分别保留。只改两刊指南/费用和两刊费用；[来源与范围](JOURNAL_GUIDE_EVIDENCE_2026-10-03.md)。其他 70 刊、现有数量和分区/索引/样例保持；其余核心/中文刊指南、分区与候选待继续。

### 2026-10-03：AOP/Optica 作者流程 E11

E11 补 AOP 提案具体材料与非硬性四十页建议，Optica 的公开评审通信、两周转刊窗口及媒体/预印本边界；未发送邮件或请求转刊。AOP 仅 guide/requirements、Optica 仅 requirements 更新，费用等其他字段保持。[逐字段来源](JOURNAL_GUIDE_EVIDENCE_2026-10-03.md)。全体规划保持开放，未知字段没有补猜值。

### 2026-10-03：OEA/OES 投稿政策 E12

E12 修复 OEA 旧指南 404，核对 OEA/OES 当前通用稿型、初投/返修/校样及费用。跨两刊收费表备注经截图确认豁免至 2026 年底，其他刊 2027 推广不套用；正文词数为建议，2027 过渡/税/版本时点保留未知。只改两刊 guide/requirements/publishing；[来源与范围](JOURNAL_GUIDE_EVIDENCE_2026-10-03.md)。其他期刊指南、分区、未审候选和样例仍需继续。

### 2026-10-03：数据与补充材料 E13

E13 补 OEA/OES 数据可用性与补充材料规则：ScienceDB 出版阶段存储、共享范围/例外、禁运和合理请求、DAS 位置及 SI 当前 30 MB 上传限制分别记录。仅 requirements 更新，独立代码规则与模板源码内容仍未知。[适用入口与逐字段来源](JOURNAL_GUIDE_EVIDENCE_2026-10-03.md)。E12 已确认部署和线上版本；后续转未审会议系列，其他规划仍开放。

### 2026-10-03：会议覆盖 C4

C4 审核六个未审系列及新确认的联合母会，新增 Optics + Photonics 2027、Sensors + Imaging 2027、Electronic Imaging 2027 三届。正式 74 刊/49 会议/9 活动；候选 271（132 admitted / 136 pending / 3 deferred）。Photonics Europe 2028 与 Photomask 2027 城市仍未知，保留候选；欧洲遥感/安全子系列不重复计母会。EI 首页延期、旧 CFP 与已关闭系统冲突，摘要截止 null、状态 closed。[逐字段证据与母子关系](CONFERENCE_EVIDENCE_2026-10-03.md)。其他候选及未知字段继续开放。

### 2026-10-03：分区证据范围 A13

A13 针对六刊读取官方指标及相关公告入口，均未取得可直接录入的 JCR 学科分区；CAS 官方入口本轮不可读，未采纳二手停发说法或新锐分区替代。只保存核验范围，全部 JSON 和日期保持，JCR 61/CAS 10 不变。[范围与后续入口](RANKING_EVIDENCE_2026-10-03.md)。C4 ab98d31 已确认 Pages 37074836786 构建/部署成功，线上首页及版本 HTTP 200、2c5e8103… 与本地一致。后续转 NML 收费冲突、其他刊指南和未审候选，不重复这六刊同版指标页。

### 2026-10-03：材料刊与 ACS 数据政策 E14

E14 为 AFM 补研究稿建议/摘要、返修制作、TOC、数据声明及领域清单；ACS Photonics、ACS Nano、Nano Letters 各补本刊 Fast Format、SI 分类和数据政策，鼓励与强制分开。NML 保留出版社现价并显式记录独立刊站免 APC 冲突。仅四刊 requirements 与 NML publishing 改变；[逐字段证据](JOURNAL_GUIDE_EVIDENCE_2026-10-03.md)。A13 bd1b3c1 已确认 Pages 37075731347 和线上原目录版本，首次连接超时只复查同一部署，未重复提交。其他指南/分区及候选仍继续。

### 2026-10-03：光学设计/成像/激光系列 C5

C5 审核六个既有系列及新确认的 ImageSense 母会，新增两届未来预告（IODC 2027、OIC 2028）及四届历史会议（Advanced Photonics 2026、Imaging 2025、ISLC 2026、ImageSense 2026）。正式 74 刊/55 会议/9 活动；候选 272（138 admitted / 131 pending / 3 deferred）。NP 隶属已收母会仍 pending，旧 Imaging 与 ImageSense 的继承关系未证实，不强行合并。[字段来源与层级](CONFERENCE_EVIDENCE_2026-10-03.md)。E14 a21e0a0 已确认 Pages 37076180292 与线上 7769c8aa…；本批必要验证已通过，提交与部署结果见最新日志；其他规划继续。

### 2026-10-03：中文刊作者细则 E15

E15 审核六刊作者细则，更新 OPE/CPL/中国激光/光学学报/进展五刊相应投稿字段；IRLA 访问失败保留原缺口。三刊现主稿及各自长摘要、收费文件逐件核验，建议/硬限、稿型与文件版本分开，CPL 页限及 OPE 审稿/入口冲突保留。[来源与范围](JOURNAL_GUIDE_EVIDENCE_2026-10-03.md)。数量、索引/分区、样例及其他字段不变，其他规划继续。

### 2026-10-03：主办方分区证据 A14

A14 为 Photonic Sensors 补主办方编辑部明确声明的两项 JCR Q1 排名与三项 CAS 一区；发布年2026和指标年2025分开，CAS 2025具体版本仍待核实。当前 JCR 62/CAS 11；六本中文刊未得完整版本/学科证据，不造分区。[逐字段范围](RANKING_EVIDENCE_2026-10-03.md)。E15 8f8cece 已验收 Pages 37088078536 与线上 926500b4…；其余规划继续。

### 2026-10-03：光子学系列 C6

C6 审核 PHOTONICS、PSC、OI/OIP、OPJ、SUM、CHILAS、UP 七系列，新增六届：PHOTONICS 2026、PSC 2026、OIP 2026/2027、SUM 2027、UP 2026。正式74刊/61会议/9活动，候选272（143 admitted / 125 pending / 4 deferred）。OPJ终日官方冲突暂缓，CHILAS与HILAS关系未知；历史/未来规则分开，早鸟和出版冲突保留。[逐字段证据](CONFERENCE_EVIDENCE_2026-10-03.md)。A14 3374738 已验收 Pages 37088948448 与线上861ad4a4…；其他规划继续。

### 2026-10-03：传统光学与器件期刊 F1

F1 按既有 EI 工程补充路径审核并新增 Applied Optics、JOSA A、JOSA B、Optical Engineering、Applied Physics B 五刊，未假定 Q1/Q2；五刊 SCIE/EI 均取得数据库方依据。正式79刊/61会议/9活动，候选272（148 admitted / 120 pending / 4 deferred），JCR62/CAS11、SCIE67/ESCI10/EI72。JOSA B 2026 S2O 与 APB 2026全面OA分别核实，动态费用及旧指南冲突保留。[逐字段证据](JOURNAL_ADMISSION_EVIDENCE_2026-10-03.md)。C6 130b6fe 已确认 Pages 37089602380 与线上 ac05ac43…；其他规划继续。

### 2026-10-03：IEEE 长稿/短稿规则 E16

E16 补 COMST、Proceedings of the IEEE、TCYB 三刊稿件/费用边界。COMST收费上限不放宽投稿页限；Proceedings35页为建议；TCYB摘要和无版年费用与2026通用表冲突保留。仅三刊 requirements/publishing 更新，79刊/61会议/9活动及所有索引分区/样例保持。[来源范围](JOURNAL_GUIDE_EVIDENCE_2026-10-03.md)。F1 4c84a05 已验收 Pages37090491637 与线上ed5fd15d…；TIE现入口与旧PDF访问失败未更新，后续继续。

### 2026-10-03：显示与激光加工系列 C7

C7 审核显示/激光加工五系列，新增 IDW 2026、IMID 2026 历史届次、SID Technical Symposium 2027、ICALEO 2026 四届。正式79刊/65会议/9活动，候选272（152 admitted / 116 pending / 4 deferred）。LPM当届正文/证书受限保持pending；SID整周/研讨会日期、摘要措辞、注册版本与ICALEO价格阶段边界分别保留。[逐字段来源](CONFERENCE_EVIDENCE_2026-10-03.md)。E16 c902a0e 已验收 Pages37090802393 与线上602848d8…；其他规划继续。

E17 为 eLight/PhotoniX 追加 cover letter、软件数据声明、补充文件20MB及各自匿名/公开审稿边界，仅 requirements 改变；现有稿型/费用/索引/分区/日期保持。[逐字段证据](JOURNAL_GUIDE_EVIDENCE_2026-10-03.md)。C7 780ea0a 已验收 Pages37091630582 与线上f28d7a8a…，当前79刊/65会议/9活动、272候选152/116/4。实际97%五小时额度仍允许，其他规划继续开放。

E17 9a95742701a079209da4a807c9da1b592552a5a1 已验收 Pages37091880262：build/deploy成功，首页/版本HTTP200，4ea17d81191c215f562ba7f24a6fbed338d94983f0f6240e2dd0650a9d730990与本地一致（2026-10-03T03:04:36.391Z）。当前79刊/65会议/9活动、272候选152/116/4。下一轮可接续[F2 APS预核验](JOURNAL_CANDIDATE_EVIDENCE_2026-10-03.md)，已核身份/刊号与六条EI源表，仍待MJL、三刊完整指南/费用、交叉样例及正式准入。实际五小时已用99%/周15%；不使用重置券，额度不足时结束本轮，由已有五小时自动任务重新检查，不另建任务。

### 新增优先需求：定期更新与会议时间深度

用户新增明确需求（2026-10-03）：网站需要定期更新，并保留同一会议系列的历史届次及后续官方预告，帮助错过本届的用户准备下一届；广度与时间深度并重。优先检查现有每日来源巡检、同系列关联/时间线、未来届次发现与系列关注的缺口。未经当届公告不推算日期，不把已有版本刷新按钮当作自动采集更新完成；后续实现与验收单独批次推进。

### 2026-10-03：系列时间线与后续公告维护 S1

用户“广度与时间深度”需求已接入：64 个稳定系列关联现有 65 届，OIP 两届共同展示；各届要求/日期保留，系列关注与单届关注分开。每日巡检纳入系列来源；已结束系列每 30 天生成后续公告任务。全部初始 nextEditionCheckedAt 为 null，不冒称已经重新核验未来公告。S1 不改六份既有目录 JSON，不新增推算届次；下一批按 23 个系列任务核实官方后续预告，逐步增加实际跨届深度。现维护 287 项字段任务，79刊/65会议/9活动、272候选152/116/4保持。29项测试、桌面/手机/键盘实际回归见[界面记录](UI_REGRESSION.md)。

先前文档 7d5ae1561d83ea862da00f6cf973ec3840f8f70e 已验收 [Pages37109755475](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37109755475)：build/deploy 成功，首页/版本 HTTP200，4ea17d81191c215f562ba7f24a6fbed338d94983f0f6240e2dd0650a9d730990 与本地一致（2026-10-03T08:29:35.248Z）。S1 必要验证后上传验收同 SHA；剩余分区、指南/样例和候选规划仍继续，现有五小时任务保持。

### 2026-10-03：后续届次核验 C8

优先实施时间深度：复查六系列，新增ECOC/FiO/EOSAM/ICIP 2027四届并关联原稳定系列。正式79刊/69会议/9活动、64系列，272候选152/116/4保持；有至少两届的系列由1增至5。六个后续核验日独立保存，旧65届保持；UP无具体官方后续，ISLC2028新域名官方关联仍待核实，不新增。FiO2027首页与旧征稿/注册页分开；ECOC普通/Demo和展览、ICIP共址注册/独立政策分开。[字段证据](CONFERENCE_EVIDENCE_2026-10-03.md)。

S1 de7a4e248f0fb14c56d29c5410882658d28655c3 已验收 [Pages37111110265](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37111110265)：build/deploy成功、首页/版本HTTP200，14afaed1d674c5f2b9ed8a7556ce583b21b022f4c1f5ee024f2e881f3f762e79与本地一致（2026-10-03T08:53:54.438Z）。首次TLS连接异常只复查同一部署，无重复提交。C8必要验证后上传验收；其余17个已结束系列后续任务及全部原规划仍继续。

## 2026-10-03：国内与亚太后续核验 C9

C9 核查六系列后续范围：五系列主页已读，CIOP证书错误保留原核验日。新增CIOE2027母展，旧2026活动保持；OGC/COS2026不挪用2027母展会期，CLEO-PR2028仅筹备线索。[逐字段来源与边界](CONFERENCE_EVIDENCE_2026-10-03.md)。正式79刊/69会议/10活动、64系列；273候选153/116/4。后续系列任务12项，其他规划继续。

## 2026-10-03：临近事项与参会政策 B3

B3复核ACP/IPC/OMTA/OPTIC/PW临近字段，日期与目录一致；只补IPC、OMTA、OPTIC的已读参会费率及退款边界，住宿、退款与投稿/注册日期分别保存。PHOTONICS印度访问失败保留早鸟冲突。[字段依据](CONFERENCE_EVIDENCE_2026-10-03.md)。C9 7adefc1已确认Pages37112307916、线上8a1dc4ad…；当前79刊/69会议/10活动、273候选153/116/4保持，其他任务继续。

## 2026-10-03：未来预告字段 C10

C10复查五个已有2027预告：USQS报名页已切换2027，补中文官方入口和当前英文发布费率，退款提示无年份仍未知；ICOLS/WSOF仍待正式征稿，欧洲CLEO细则仍2025，ICO主办方已读范围未有新当届征稿。[字段来源](CONFERENCE_EVIDENCE_2026-10-03.md)。B3 637edb5已确认Pages37112615745和线上5f28d208…；当前数量/索引分区/样例保持，其他规划继续。

## 2026-10-03：APS 候选准入 F2（六刊审核，两刊入库）

F2逐刊核对六APS刊MJL、EI与JCR2025，新增PRA/PRApplied及各三篇不同期次光学样例；其余四综合物理刊仍pending，继续补样例和最终准入。Applied录入JIF Q2，不混用AIS Q1；Research仅ESCI。正式81刊/69会议/10活动，273候选155/114/4，JCR64/CAS11、SCIE69/ESCI10/EI74，十六刊至少三篇样例。[逐字段来源、版本与边界](JOURNAL_CANDIDATE_EVIDENCE_2026-10-03.md)。剩余规划继续开放，现有五小时任务保持。

## 2026-10-03：综合物理光学适配 F3（四刊）

F3新增PRB/PRL/PRResearch/PRX，每刊三篇近两年不同卷期光学样例，沿用已核数据库和JCR2025证据；PRResearch ESCI及SCIE未知分别保存，PRL750词评论与PRX150词通俗摘要不混用。正式85刊/69会议/10活动、273候选159/110/4，JCR68/CAS11、SCIE72/ESCI11/EI78，二十刊至少三篇样例。[逐字段依据与访问边界](JOURNAL_CANDIDATE_EVIDENCE_2026-10-03.md)。F2已验收同SHA Pages37114153017和线上1277b981…；其他规划继续。

## 2026-10-03：后续系列核验 C11

六系列复查新增IMID2027（8/24–27，釜山BEXCO），来自官方会后图像感谢信；其余五系列只保存已读后续公告范围，不按周期推算。64系列中6系列现有多届；当前85刊/70会议/10活动、273候选159/110/4，后续系列队列余6项。[来源范围](CONFERENCE_EVIDENCE_2026-10-03.md)。F3 bc96f6c已验收Pages37114963476及线上e7c21ca1…；索引/分区/期刊样例保持，其他规划继续。

## 2026-10-03：后续系列核验 C12

五系列后续公告限定核验完成，无新增日期；当前85/70/10、273候选159/110/4保持。系列队列余CIOP一项，证书问题待实际恢复，已读系列每30天复查；其他规划仍开放。[核验范围](CONFERENCE_EVIDENCE_2026-10-03.md)。C11已验收66562d7、Pages37115667619和线上d82e231e…，继续有价值任务。

## 2026-10-03：公告图片变化巡检 S2

IMID2027官方预告位于图像感谢信，原文字指纹不能发现同URL图片改动；现为目录显式列入的image/*来源保存字节SHA256，报告区分image-bytes/text。仅生成核验信号，不识别或自动发布图中日期；沿用每日来源工作流、同URL去重、15秒/2MB和失败保留基线，没有新增定时任务。新增一项集成测试，覆盖首次/不变/改变、字节差异、共享引用、失败/超限与方法切换。IMID图像真实HTTPS探测首次baseline、随后unchanged；其他非文本仍可达检查。当前85/70/10、273159/110/4及学术事实保持，其他规划继续。

## C13：历史会期与后续发现（2026-10-03）

新增DH2026与UFO2025两历史届次，当前85刊/72会议/10活动、66系列（6个多届）、273候选161/108/4。直接核实UFO历史稿件/注册规则，未知出版/时区保留；DH/ImageSense2027加拿大7月未到具体日，不生成未来届次。QCMC/EWOFS/ARVRMR仍pending，[逐字段范围](CONFERENCE_EVIDENCE_2026-10-03.md)。S2 3326d9e79650568405d3dd889e39fc1d73c5b684已验收[Pages37116311255](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37116311255)：build/deploy成功，首页/版本HTTP200，4d810d2bf24c7d9995a72e1ea98ca6b38bd091931d42a77a2ab357700f4d211f与本地一致（2026-10-03T10:25:39.234Z），同SHA完整30项测试/typecheck/lint等CI成功后编辑。 其他规划继续，现有五小时任务保持。

## E18：传统光学三刊准备细则（2026-10-03）

AO/JOSA A/JOSA B补摘要、通讯作者、图表/资助与补充材料；仅requirements，建议/硬性上限、通用/独立规则及2020页面版本分开，[具体依据](JOURNAL_GUIDE_EVIDENCE_2026-10-03.md)。C13 3998d91aa6037c90beb31b6be4039abd3f794bf5已验收[Pages37117128691](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37117128691)：build/deploy成功，首页/版本HTTP200，3ad612188bff38ad228a6927756ef4b8690337756e31e1b0a7be285bcab87a3d与本地一致（2026-10-03T10:40:12.624Z），同SHA完整CI成功后修改。 当前全部计数保持，剩余规划继续。

## C14：非线性、遥感与显示全息（2026-10-03）

新增NLO2025及IGARSS2027，两新稳定系列。当前85/74/10、68系列、273候选163/105/5；ISDH终日具体冲突暂缓，待大学官方交叉证据，不自行选日。IGARSS已公布4页/400–600词路径与普通日期，模板/注册/出版细化继续，[来源范围](CONFERENCE_EVIDENCE_2026-10-03.md)。E18 6457c1dc18b89729c07a8a953257cdcdd31e8c6a已验收[Pages37117365046](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37117365046)：build/deploy成功，首页/版本HTTP200，88ca2a463d28eb47bde13ef3eb8b3bde225c198a7e6589e66917433bbdb8534f与本地一致（2026-10-03T10:45:11.182Z），同SHA完整CI成功后编辑。 全部剩余规划未完成，保留既有五小时任务。

## C15：ICCP未来会期（2026-10-03）

C15新增ICCP2027，现85刊/75会议/10活动、69系列、273候选164/104/5，双匿名/PAMI与会议路径、17:00太平洋时间已保存，[字段来源](CONFERENCE_EVIDENCE_2026-10-03.md)。C14 01345fc0f084e9ae992451d1a96d89a9cd4bbcfa已验收[Pages37117764585](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37117764585)：build/deploy成功、首页/版本HTTP200，11783a94ce52b4e769ea7043e2c9f86832c0e6854acccb162631c450cc7a7ba5与本地一致（2026-10-03T10:53:44.850Z），完整同SHA CI成功后编辑。 下一批优先ISPRS2026/2029/2030（预核在work/C15_RESEARCH_2026-10-03.md），继续确证范围/场馆/规则；ICCP动态正文的来源端点、ISBI具体当届资料未核实，其他规划开放。已有五小时任务保持，不恢复无关自动化。

## C16：ISPRS时间深度（2026-10-03）

C16新增ISPRS2026历史与2030预告，2029具体日期未知仅线索；当前85刊/77会议/10活动、70稳定系列（7个多届）、273候选165/103/5。[字段证据](CONFERENCE_EVIDENCE_2026-10-03.md)。C15 0720633c066f6f1496cacb5bb009e47ca17a7202已验收[Pages37118113485](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37118113485)：build/deploy及完整CI成功，首页/版本HTTP200，8825712958e671bcd09c48aec8a612a36cc446aa1195429b89e187fe5413f112与本地一致（2026-10-03T13:27:36.417Z）。 新额度窗口允许继续；下一步解决ICCP动态正文巡检来源端点，继续剩余候选、逐刊指南/样例与临近字段。2030规则未知，不复用2026。已有五小时任务保持，其他规划未完成。

## S3：动态正文来源（2026-10-03）

S3将ICCP2027实际公开加载的Home/CFP正文HTML追加到系列sources，现有每日text指纹可以监测已核两页；仅单届notes说明变更，所有学术事实/日期/计数保持。[实测与边界](MAINTENANCE.md)。C16 6839ca0a47cdca5f56e7e047c3f5f8b80551c5ab已验收[Pages37126973432](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37126973432)：build/deploy及完整CI成功，首页/版本HTTP200，685af700e2eeb7c82e774e71a726961fac16b4a5fbdf370a4afb1cbd275817c9与本地一致（2026-10-03T13:42:10.903Z）。 下一批ISBI2027已有实际当届官网线索，须核CFP、光学子集、场馆和EDT跨季节时区歧义；不可凭旧提案准入。继续其他规划，既有五小时任务保持。

## C17：生医成像与图像传感器（2026-10-04）

C17新增ISBI2027与IISW2027，当前85刊/79会议/10活动、72系列/7多届、273候选167/101/5。[字段证据](CONFERENCE_EVIDENCE_2026-10-04.md)。S3 c8fba752d74bb211feed202fd996030794d88aac已验收[Pages37127257725](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37127257725)：build/deploy及完整CI成功，首页/版本HTTP200，86ed484bf56a6cfebdb4b87b00b889858565d187d85b4ff6f0ab9ec903dba34b与本地一致（2026-10-03T13:47:07.575Z）。 PDF下载调用异常延迟后10/4重新核实际额度0%/周33%允许及干净GitHub状态，继续工作。下一步补PDF公告变化信号（现仅可达性）、国内光子学2025/26时间线与其他待核候选；不重复系列功能，已有五小时任务保持，其他规划未完成。

## S4：PDF 公告变化信号（2026-10-04）

C17 a0d9e659dc8d2e9931202db190361df72a1224c7已验收[Pages37181016074](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37181016074)：build/deploy及完整CI成功，首页/版本HTTP200，15aec460873e0fd037776d0930272564fcd97c777506fc4d8c1e6385d027561e与本地一致（2026-10-04T05:51:29.380Z）。 显式官方 PDF 已接入每日来源字节巡检，ISBI/IISW真实文件 baseline/unchanged，31项测试通过；字节信号仍需人工渲染和逐字段核验。[范围与限制](MAINTENANCE.md)。目录85/79/10、72系列/7多届、273候选167/101/5保持。后续国内光子学2025/2026时间线、其余候选/指南/论文样例/索引分区继续；未知后届日期不推算，既有五小时任务保持。

## C18：国内系列时间线（2026-10-04）

S4 ecf3c4adf9a2c11ea7dbb71b1f68af66f300465c已验收[Pages37181592830](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37181592830)：build/deploy及完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，15aec460873e0fd037776d0930272564fcd97c777506fc4d8c1e6385d027561e与本地一致（2026-10-04T06:02:45.871Z）。 全国光子学2025/2026分开收录后同系列展示；实际2027大学承办线索保存，具体日期未知。[证据及出版边界](CONFERENCE_EVIDENCE_2026-10-04.md)。当前85/81/10、73系列/8多届、273候选168/100/5。继续薄弱方向/中文候选、逐刊指南/样例、临近会议及分区；不重复开发时间线，不推算下届或复制往届规则。

## C19：国内基础与临近作者准备（2026-10-04）

C18 6a92ed20a3efd9cf19fccc1df10faa7c85ba4ede已验收[Pages37181983389](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37181983389)：build/deploy及完整CI成功，首页/版本HTTP200，50c64adf6f1d01e2b2272c4d55b2fa3deb62a790237c4ae46809a751a820044c与本地一致（2026-10-04T06:11:12.025Z）。 基础光学2025按主办通知入选，原站证书失败不补造材料；Asia2026全文10/7等临近安排与2027拟10月线索已分开保存。[范围](CONFERENCE_EVIDENCE_2026-10-04.md)。正式85/82/10、74系列/8多届、273候选169/99/5，其他规划仍开放；后续公告队列两项，无需重复开发功能或新增自动任务。

## C20：量子/AMO未来预告（2026-10-04）

C19 f146b13209e44c8ef0b5d0ee286c081f33ed32b2已验收[Pages37182355400](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37182355400)：build/deploy及完整CI成功，首页/版本HTTP200，1598180e6f0d645ba2c50a6499f3687e8f1461b17f843ce18789ec7659f988ba与本地一致（2026-10-04T06:20:08.621Z）。三当届官方2027预告独立入选；QIP偏理论、GPS光学子集为推断、DAMOP征稿未知，[字段证据](CONFERENCE_EVIDENCE_2026-10-04.md)。85/85/10、77系列/8多届、273172/96/5，维护329项。期刊指南/交叉样例、器件材料候选和分区索引仍开放；现有每日变化巡检/五小时额度任务保持，不推算后续届次。

## E19：两本传感作者准备（2026-10-04）

C20 5c0fc68746a0ece6dbd2b0c9b30355e5f345365e已验收[Pages37183109619](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37183109619)：build/deploy及完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，659556a381f6e90c3f913d752268392157ff2af3f592812c831f309b60fb1026与本地一致（2026-10-04T06:34:16.279Z）。 两刊以前受限完整指南现正常浏览器可读；分别核稿型/篇幅、综述、Highlights、数据/文件和当刊APC，[逐字段范围](JOURNAL_GUIDE_EVIDENCE_2026-10-04.md)。只指定字段，核验范围不扩为整刊重核。数量与其他规划保持，下一批补其余交叉期刊光学论文样例。

## E20：纳米及综合科学光学样例（2026-10-04）

E19 631927d8e1e4fb0bf0cd43d0fc0ce344a4757bfe已验收[Pages37183364095](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37183364095)：build/deploy及完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，9f52fa463c37ad08fc9b179819a8404f79fa9eacba11a98137a5719628794601与本地一致（2026-10-04T06:38:59.741Z）。 两刊各三独立期次：超表面生化传感/双层探测器/光谱，光阱/仿生成像/天文偏振，[逐篇范围](JOURNAL_SCOPE_EVIDENCE_2026-10-04.md)。摘要适配不当全篇复现，首次日与期次分开；仅scopeExamples，至少三篇样例现22刊。其余规划继续，已有每日巡检与五小时额度任务保持。

## E21：传感适配和综合刊准备（2026-10-04）

E20 80d6b09d8f599178561b9422d39680ee50dac698已验收[Pages37183642235](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37183642235)：build/deploy及完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，309e859fe34019811b0cb957d098827bf40f2d5cb9b0bb32896c7e74c2deeefd与本地一致（2026-10-04T06:44:52.005Z）。 ACS Sensors三近两年独立期次样例与Science Advances本刊指南/费用分开核验，[样例范围](JOURNAL_SCOPE_EVIDENCE_2026-10-04.md)、[指南范围](JOURNAL_GUIDE_EVIDENCE_2026-10-04.md)。23刊≥3样例，数量和其他学术事实保持；其余材料/器件、临近字段、分区索引规划继续。

## C21 器件与传感会议（2026-10-04）

E21 45c8ee77c9a4039f66051c1ce3e29043c234a990已验收[Pages37183967735](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37183967735)：build/deploy及完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，8a43be02d3bff44c95a96fb80bb3ebcdbc925a7787bf5834b1cdfba2c212f77d与本地一致（2026-10-04T06:51:37.413Z）。 四候选新增六届，IEDM三届共用稳定身份，官方2027/2028未来日程与当前稿规分开。[范围](CONFERENCE_EVIDENCE_2026-10-04.md)。当前85刊/91届/10活动、81系列/9多届、273候选176/92/5；README中此前遗留的会议/系列与索引当前统计一并同步，历史执行数字保持。10/5展示文件、10/16独立海报与MEMS开放海报冲突继续优先维护；未证明的索引/未来规则不填造，其余规划开放。

## C22 材料光学会议时间深度（2026-10-04）

C21 15316fae6cbca5a674d233f9d814afe94f5a8e21已验收[Pages37184918851](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37184918851)：build/deploy及完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，490b7e5d3bc18f4bd1a741b8a4ca501df3ffa7576972dcaf4e04f74477afd7c5与本地一致（2026-10-04T07:11:11.580Z）。 四材料系列九届按当届或正式未来日程准入；MRS Spring至2030明示日期与未知稿规分开，E-MRS2026历史/2027独立未来及组织提案边界保留。[范围](CONFERENCE_EVIDENCE_2026-10-04.md)。当前85刊/100届/10活动、85系列/12多届、273候选180/88/5。MRS10/14摘要临近进入维护，其余指南/样例、候选、分区索引仍未完成；不为消耗额度重复无变化核验。

## E22：生化传感光学适配（2026-10-04）

C22 ef63a86d3f01f8c58b4c440b4d89b595248002e9已验收[Pages37185777328](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37185777328)：build/deploy及完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，153394d1f462d472353f085cdbe90c9c0eb75ed45eb3a100f5d6df9cf8ed7881与本地一致（2026-10-04T07:27:13.423Z）。 BIOSBE/SNB各三不同卷样例覆盖结构色/SERS/荧光手机读出/光纤显微器件，[逐篇范围](JOURNAL_SCOPE_EVIDENCE_2026-10-04.md)。公开摘要适配不当全文实验审计；出版社首次在线与VOR/期次分开，伴生X不混用。仅两字段、25刊至少三篇，其他规划继续。

## B4：欧洲未来征稿日程（2026-10-04）

E22 5a748975a7f3b831007319dc246f272a094b5590已验收[Pages37186160819](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37186160819)：build/deploy及完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，f4932634970e9d14d1fc6d072c5e27b997f17282f427e8ac7a15ad17504ed61b与本地一致（2026-10-04T07:34:27.756Z）。 当届大会公开讲者页填两未知投稿日期、补三子会共同报告准备并列系列巡检源，[字段范围](CONFERENCE_EVIDENCE_2026-10-04.md)。计划开放不当当前系统已开放，月份/中旬不造某日，不把母会/展览跨度替代子会。仍待2027详细稿规、出版/注册，其他规划继续。

## C23：SPIE欧洲及光刻历史/未来（2026-10-04）

B4 64ba2ca557eba428f0f673780451319e536156e0已验收[Pages37186450463](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37186450463)：build/deploy及完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，e997ae29f033da056ae5aed070453e1a5826f9ab1ced1a04634fcb9fa3147a6e与本地一致（2026-10-04T07:40:53.417Z）。 三系列三历史届，两个2028和一个2027直接官网预告，由2026历史建立稳定身份，未来城市确认后新增后续届，[逐字段范围](CONFERENCE_EVIDENCE_2026-10-04.md)。同场独立PE/OSD分别计一次，PUV联合会与子会/展览不重复。103届/88系列12多届、273183/85/5、25刊样例；未来城市/场馆/征稿规则保持unknown。LPM证书异常留候选，其他规划继续，既有每日与五小时任务保持。

## E23：胶体界面当前作者规则（2026-10-04）

C23 2a6036bc3d39f5c2f7f85b49d1f67146562ce731已验收[Pages37187049524](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37187049524)：build/deploy及完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，89b0b4e07aa01bf42e2d7fb65f8221c999c79be2d248bbed1e5a17ad30f8e9a3与本地一致（2026-10-04T07:57:04.469Z）。 JCIS本刊稿型/250词摘要/结构/图形摘要/一面A4附信/通常55引用、Option C数据与USD4820不含税OA及24个月自存档已核，[逐字段范围](JOURNAL_GUIDE_EVIDENCE_2026-10-04.md)。只两字段，原范围/整刊日期/索引分区/样例及其他84刊和其他JSON保护；85/103/10、88系列/12多届、273183/85/5、25刊样例保持。 其余指南/样例、未知分区索引、候选与临近冲突仍开放；不为消耗额度重复核验。既有每日来源和五小时检查保持。

## E24：染料/工业电子当前投稿边界（2026-10-04）

交接8ad95d30bd3e40741f94354f3827b9a74169d543已确认[Pages37187756331](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37187756331)：build/deploy及完整CI成功，首页/版本HTTP200，fce85f64fa7ddd533d6a658c68153f3937ccb3c37b02a91516816a6c903368a8与本地一致（2026-10-04T13:07:37.373Z）。 Dyes and Pigments当前短文/提案、Highlights/图形摘要、化合物/光谱资料、Option C与USD3850不含税已核；TIE当前10/12页与4/6页、机构邮箱/ORCID/硬件实验、2026 US$2800及范围排除已核，旧最终文件页8/10页和超页价冲突明确保留，[逐字段范围](JOURNAL_GUIDE_EVIDENCE_2026-10-04.md)。只指定六字段、原范围条/完整核验日/分区索引/样例与其他83刊及所有其他JSON保持。85/103/10、88系列/12多届、273183/85/5及25刊样例不变。 概览表遗留106修正为实际103，历史执行数不重写。TIE收录是工业电子工程参考，不保证纯光学稿件适配；费用冲突/摘要/模板细节继续开放，其他规划继续。

## E25：胶体与染料实际光学适配（2026-10-04）

E24 ac8c06c1fd0f172d6491638e3c201e6a8f2058f0已验收[Pages37205097390](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37205097390)：build/deploy及完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，74a50336a2631a7205e7d80aae9b6346d66fcdf888b27b15e2740bc15ae362c0与本地一致（2026-10-04T13:18:26.719Z）。 JCIS/DYPI各三篇不同卷近两年原始光学论文，核出版社原题/DOI/公开摘要及首次在线、VOR与期次，[逐篇范围](JOURNAL_SCOPE_EVIDENCE_2026-10-04.md)。结构色自组装/水凝胶/涂层及有机比率/NIR/潜指纹成像分开；未来月份期次已在此前上线，不造月份中的具体日。仅两scopeExamples，其他83刊/旧25刊样例、指南/日期/分区索引及全部其他JSON保持，至少三篇刊数25→27。85/103/10、88系列12多届、273183/85/5保持。 公开摘要适配不当全部全文数据审计，也不从论文推分区或当前索引；其他规划继续。

## C24：计算成像历史与准备（2026-10-04）

E25 5ff50f881bc8aad31a0cbfe74a4efd619c391af5已验收[Pages37205969850](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37205969850)：build/deploy及完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，3bd877043515fffde7a22326dbf3b01e06ab7e4e5f46b9dcd2ce22fcddbf0812与本地一致（2026-10-04T13:36:06.744Z）。 三候选新增CVPR2026/2027、ECCV2026、ICCV2025四届，计算成像/相机/重建与显微子集条件适配；完整活动与主会/Workshop日期分开，往届模板不迁未来。[逐字段来源](CONFERENCE_EVIDENCE_2026-10-04.md)。ICCV2027两官网日期冲突未入正式届，2025通知差异保留null；CVPR2027指南404保留篇幅未知。当前85/107/10、91稳定系列/13多届、273候选186 admitted/82 pending/5 deferred、27刊至少三篇样例；分区索引与其他JSON保持。其他规划继续，既有五小时和每日来源巡检保持。

## C25：ICAP历史与ISSCC准备（2026-10-04）

C24 d5ecd3bdcbc681f227806bb718bab93da1763489已验收[Pages37206875465](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37206875465)：build/deploy及完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，6fe215c9f4ca55c98cdcb93cc35fa96b88d25cc9efaf551ba8962b823dada18f与本地一致（2026-10-04T13:49:18.526Z）。 两候选新增ICAP2024/2026历史与ISSCC2027，共三届/两系列。ICAP保留A0/费率的届次边界；ISSCC普通已关闭，工业LBN10/7意向限2027推出产品/最多4篇，SRP10/21学生展示独立，不当普通稿延期，[逐字段来源](CONFERENCE_EVIDENCE_2026-10-04.md)。当前85/110/10、93系列/14多届、273候选188 admitted/80 pending/5 deferred，27刊样例/分区索引保持。后续ICAP日城和ISSCC注册/LBN模板/SRP出版仍开放；其他规划继续。

## C26：MICCAI时间深度（2026-10-04）

C25 e764b139e28a30c172b066105a4fd1eedd0c9c4d已验收[Pages37207744738](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37207744738)：build/deploy及完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，d57cd321fc0b8007ef4cb1f7502cdf3386dfe256650d7603cce5cd93641bf85c与本地一致（2026-10-04T14:09:09.587Z）。首次push连接超时后补推同提交成功；一次线上TLS重置后只复查原部署，未重复提交。 MICCAI新增2026历史与2028圣保罗官方预告，两届共一稳定系列；2027两个Society页面9/26与9/27起日冲突，未进正式届。2026主会论文目录的光片荧光显微/共聚焦内镜/光声子集已核，未来稿规与注册未知，不套旧8+2页。当前85/112/10、94系列/15多届、273候选189 admitted/79 pending/5 deferred，27刊样例和分区索引保持。[逐字段范围](CONFERENCE_EVIDENCE_2026-10-04.md)。其他规划继续。

## E26：本刊指南与资助出版（2026-10-04）

C26 0a5d150765de54d18a12deb4a688105abb5e58fe已验收[Pages37208657675](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37208657675)：build/deploy及完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，95b25becae39a0c34431c3623b3bcdab2df7280b208637f357ca6678adcaa561与本地一致（2026-10-04T14:19:41.538Z）。 Photoacoustics补本刊Letter8初稿页/2000词/5图表与4印刷页、250词摘要、建议Highlights/图形摘要、Option C及USD4070不含税；IJEM本刊IOP About明确编辑部资助CC BY作者无费，并补本刊Letters/Research Highlights1000词。只两刊requirements/publishing，原首条范围/整刊日期/索引分区/样例及其他83刊、全部其他JSON保护。[字段与范围](JOURNAL_GUIDE_EVIDENCE_2026-10-04.md)。85/112/10、94系列/15多届、189/79/5与27刊样例保持，其余规划继续。

## E27：无机与纳米光学样例（2026-10-04）

E26 0190d244afe22c6169d0ace3c4b80aeb842b0fe7已验收[Pages37209054631](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37209054631)：build/deploy及完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，87ec92bf908f7c01b50792535d6790bf9f7bef082b240f939091d9caf4b203ad与本地一致（2026-10-04T14:24:02.767Z）。 Nano Letters/Inorganic Chemistry各补三篇近两年不同期次原创光学样例：灰度非线性超表面/NIR-II聚合物点/电压可调量子点出射、稀土缺陷发光/Pt蓝光OLED/POM非线性散射。首次上线与较晚卷期分开；量子点合作发射尚未演示。仅两scopeExamples，其他83刊/旧27刊样例与所有其他JSON保持，29刊至少三篇。[逐篇范围](JOURNAL_SCOPE_EVIDENCE_2026-10-04.md)。85/112/10、94系列15多届、273189/79/5、分区索引/指南与整刊日期保持，其余规划继续。

## C27：传感与光通信时间深度（2026-10-04）

E27 d9a3c05fc2747a48ce91d8c6d07f3577b749732a已验收[Pages37209447605](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37209447605)：build/deploy与完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，da86fd815fd61d1789752472168dde87da79353bf027e126863569019511ed08与本地一致（2026-10-04T14:35:54.231Z）。API两次连接超时只复查同部署，未重复提交。 新增TRANSDUCERS2027、GLOBECOM2026、ICC2026历史/2027预告四届共三系列，光学传感与光网络子集条件适配。HST初摘要/接受确认/录用后稿件分开，GLOBECOM普通与Workshop更新后截止分开；ICC2027只官方日城，稿规unknown不复制2026。当前85/116/10、97系列/16多届、273候选192 admitted/76 pending/5 deferred、29刊至少三篇样例，分区索引保持。[逐字段来源与范围](CONFERENCE_EVIDENCE_2026-10-04.md)。其他规划继续。

## E28：材料与发光化学样例（2026-10-04）

C27 127752141e547d633d4522f29f4a3c72b1444c62已验收[Pages37210683598](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37210683598)：build/deploy及完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，e1514cb13cee68d64cd466758e49b5682906e59c5bf5a1a785d4e8f461224811与本地一致（2026-10-04T14:50:42.268Z）。 Advanced Materials/Angewandte各补三篇近两年不同期次原创光学样例：长波红外金属透镜/ENZ极化激元耦合/钙钛矿光电逻辑、银簇光响应磷光/掺杂三芳基硼RTP/铜碘簇X射线闪烁成像。首次在线与卷期分开，封面/旧Perspective排除；逻辑非像素成像、RTP纯晶体旧解释被纠正的边界保留。仅两scopeExamples，其他83刊/旧29刊样例与其他JSON保护，31刊至少三篇。[逐篇范围](JOURNAL_SCOPE_EVIDENCE_2026-10-04.md)。85/116/10、97系列16多届、192/76/5、分区索引/指南与整刊日期保持，其他规划继续。

## C28：沿革与联合身份（2026-10-04）

E28 0b3b74e3354b582c3aa2a5b5b72d63f77e88242d已验收[Pages37211078034](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37211078034)：build/deploy及完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，acc4bb5f82b5accfba34f28c08fed08e157251e61c69585a766f343d7959bfa8与本地一致（2026-10-04T14:58:01.549Z）。一次API超时只复查同部署，未重复提交。 AOE与APOC于2009合并为ACP的前身关系由学会原公告与Optica原档确认，保留ACP稳定ID并加限定前身别名，补AOE2008上海10/30–11/2历史届，不重复造AOE2026。YSAOM2025第五届与APCOM第九届联合，新增长沙7/18–20历史一届；2026与AOMTA联合记录保留，合作系列不永久合并。2025最终摘要6/30与7/8冲突仍null。当前85/118/10、98系列/17多届、273候选194 admitted/74 pending/5 deferred，31刊样例及分区索引保持。[身份与字段范围](CONFERENCE_EVIDENCE_2026-10-04.md)。其他规划继续。

## 2026-10-04：CPL / APR样例 E29

C28 54280b926e6778fa0feec7a5206e67d99bc48b07已验收[Pages37212173896](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37212173896)：build/deploy及同SHA完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，7bb7f16712db46f2894c7d98233938c15f1443b9f4fd93e21db15226e90f61da与本地一致（2026-10-04T15:14:08.773Z）。 Chinese Physics Letters / Applied Physics Reviews各补三篇近两年不同期次光学样例；CPL实验卷积/数值超表面/孤子求解及APR原创深紫外成像/两篇综述路径分开。CPL仅明确Published Date，不称已独立核Early Access；APR首次页头发表与较晚刊月分开。仅两scopeExamples，83其他刊/旧31刊样例、排名索引/指南及整刊日期保持，33刊至少三篇。[逐篇字段与范围](JOURNAL_SCOPE_EVIDENCE_2026-10-04.md)。85/118/10、98系列17多届与194/74/5保持，其他规划继续。

## 2026-10-04：Chemical Reviews综述样例 E30

E29 5e95fb7ffb508e365c3eca378551bdf8b0f6bdee已验收[Pages37212635676](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37212635676)：build/deploy及同SHA完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，180cf9a0dc8adb76236d6ecebf2c597e37b910483f721553b943c525dbc97712与本地一致（2026-10-04T15:22:23.748Z）。 Chemical Reviews补三篇近两年不同期次光学综述样例：仿生结构色、光学胶体组装、生物正交光成像治疗。三篇均Review，仍按邀稿/获批提案路径，不当原创实验或临床证据；首次在线与2025/2026较晚卷期分开。仅一scopeExamples，84其他刊/旧33刊样例及整刊日期、指南费用/索引分区与其他JSON保持，34刊至少三篇。[逐篇范围](JOURNAL_SCOPE_EVIDENCE_2026-10-04.md)。85/118/10、98系列17多届与194/74/5保持，其他规划继续。

## 2026-10-04：ACP当前窗口 B5

E30 ae93dbd30a597d16bb8dc58e2b233c22c021152c已验收[Pages37213012360](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37213012360)：build/deploy及同SHA完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，b29af266af91fa1224a934689c95c9e824b6052720be134462b341b088639766与本地一致（2026-10-04T15:31:26.935Z）。 ACP2026补杭州国际博览中心、当前普通费率/论文覆盖和展示条件；早鸟从日级细化为9/30 23:59北京时间付费截止（已过），核心通知转向当前PDP10/15 23:59，10/25终稿仍仅日期。初步议程待完整公布，酒店10/29不造论文/注册事件；限定范围未见2027公告，保留稳定系列与前身历史。[逐字段范围](CONFERENCE_EVIDENCE_2026-10-04.md)。仅现届核实字段及同系列sources/后续公告日变化，整届日期/117其他届、97其他系列/其他JSON和85/118/10、194/74/5、34样例保持；其他规划继续。

## 2026-10-04：APR本刊费用与周期 E31

B5 ef3fbbf1eba4a3b1cfb25f12d996f773367dc289已验收[Pages37213728476](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37213728476)：build/deploy及同SHA完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，e1eea0f5d788d55277e5cb71df30ad90c811035801c4b037321b07a71dce0b7e与本地一致（2026-10-04T15:40:04.011Z）。 APR本刊原页补确认不收页费、可选OA USD3,800且出版前支付；独立刊价证据取代仅通用政策的缺口。另补2025平均首轮41/录用170/发表195天，保留稿型/样本和起算不详，不作个稿承诺。仅publishing/schedule，整刊日期、指南/样例/排名索引、84其他刊与全部其他JSON保持。[逐字段范围](JOURNAL_GUIDE_EVIDENCE_2026-10-04.md)。85/118/10、98系列17多届、194/74/5及34样例保持，其他规划开放。

## 2026-10-05：中文光子学与休刊状态 F4

E31 1569c8549d7eb6a71793dc9530e24d1b991bf17a已验收[Pages37242801903](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37242801903)：build/deploy及同SHA完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，230bb2131c3dea0927d97a6d348f3485f2eca6ac31518bff5a18f7dfdc8a66a1与本地一致（2026-10-04T23:12:34.234Z）。 光子学报按EI工程补充新增，EI来源表/中文保持收录与MJL ESCI各独立保存，SCIE及完整分区未知；中文版/仅邀综述/基金与数字图像处理边界、2025挂载费率和条件周期保存。光谱学与光谱分析因2026全年休刊停止收稿改deferred，未进入可投稿目录，不推算2027复刊。[逐字段证据](JOURNAL_CANDIDATE_EVIDENCE_2026-10-05.md)。当前86刊/118届/10活动、273候选195 admitted/72 pending/6 deferred、SCIE72/ESCI12/EI79、JCR68/CAS11、34刊样例；旧85刊及其他JSON保持，其他规划继续。

## 2026-10-05：中文物理光学交叉 F5

F4 6669f5c041ef4454e2121492ab9e670f58c9956a已验收[Pages37243731190](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37243731190)：build/deploy及同SHA完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，68f8cb8b323d56ab5d7a93e02233ea07546475695ac90ed2683089e590d644c5与本地一致（2026-10-04T23:27:18.103Z）。 物理学报按EI工程补充新增，SCIE与EI数据库依据独立记录，分区/eISSN未知；2026-06指南及2026单盲流程、版面费未知和周期口径保留。三篇不同期次光学实验的上网日/刊出日与应用边界保存。当前87刊/118届/10活动、273候选196 admitted/71 pending/6 deferred、SCIE73/ESCI12/EI80、JCR68/CAS11、35刊至少三篇样例。旧86刊/34刊样例及其他JSON保护；[逐字段与样例证据](JOURNAL_CANDIDATE_EVIDENCE_2026-10-05.md)。其余规划继续。

## 2026-10-05：直接光学五刊 F6

F5 325862d55c4a82e95df2b01bd4cbc48ab6f9d8b2已验收[Pages37244250870](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37244250870)：build/deploy及同SHA完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，2567f82ade82b4ec5236d4d8951e954ac08c4a89ab06b35cadfb2d665890979b与本地一致（2026-10-04T23:35:27.515Z）。 F6新增COL、IEEE JQE/JSTQE/Photonics Journal/PTL五刊，独立MJL SCIE和EI来源表依据；JCR 2025指标2024的15条JIF学科分区保存为机构转载参考，不取AIS或推2026/CAS。COL/JSTQE/PTL有Q1/Q2；JQE/PJ按EI补充，JIF Q3仍保留。当前92刊/118届/10活动、273候选201 admitted/66 pending/6 deferred、SCIE78/ESCI12/EI85、JCR73/CAS11、35刊样例。旧87刊/35样例和其他JSON保护；[逐字段范围](JOURNAL_CANDIDATE_EVIDENCE_2026-10-05.md#f6五本直接光学期刊)。其他规划继续。

## 2026-10-05：已有刊分区补充 A13

F6 2464e1153f235df02026ae4d330c8c0c47c9439a已验收[Pages37245349358](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37245349358)：build/deploy及同SHA完整31项测试/typecheck/lint等CI成功，首页/版本200，cc0d3ddfa1ae1ab9f690f3dce462fd70bd4e08a881f8be9e3157663632f30c30与本地一致（2026-10-04T23:54:15.156Z）。 A13补17本已有期刊的27条JCR 2025 JIF学科分区（指标2024），机构转载secondary并保留逐页来源。仅rankings和七刊“分区未知”描述作定向修正，不刷新整刊日期/索引/指南/样例。ESCI身份与JCR独立，CAS11不变；光学精密工程和红外与激光工程在此版新目标刊号无匹配，当前分区仍未知，不等于未收录。当前JCR90/92、CAS11/92，92刊/118届/10活动、273候选201/66/6、SCIE78/ESCI12/EI85和35样例保持；其他规划继续。 逐页核验见[JCR证据](JCR_EVIDENCE_2026-10-05.md)。

## 2026-10-05：显示方向与旧刊状态 F7

A13 aaa18cfc9f6cd944cebcb337b90eca7c27f3f777已验收[Pages37245676684](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37245676684)：build/deploy及同SHA完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，bb0613eafa63a4f350527f11b952039195b0613aa97c0a833cc6999eb90d0824与本地一致（2026-10-05T00:01:12.595Z）。 F7新增Displays与JSID两本显示方向期刊，独立MJL SCIE/EI来源表依据；JCR 2025指标2024各四学科JIF分别Q2/Q3，JSID按EI补充而非AIS Q2准入。JSID三篇不同期次近两年光学样例保存首次日期与理论/实验边界。旧JDT因2016停刊改deferred，无自动更名。当前94刊/118届/10活动、273候选203 admitted/63 pending/7 deferred、SCIE80/ESCI12/EI87、JCR92/CAS11、36刊至少三篇样例；旧92刊/35样例和其他JSON保护，其他规划继续。 [逐字段证据](JOURNAL_CANDIDATE_EVIDENCE_2026-10-05.md#f7显示方向与旧刊状态)。

## 2026-10-05：OFC/CLEO时间深度 C29

F7 aa69ccd9236dce97549ae193ba8c703a73ba3d6d已验收[Pages37246798156](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37246798156)：build/deploy及同SHA完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，33d99a90282ac22ea583c38c4b7c43d54414c2cabfc6dc772c2a727cfbd46d44与本地一致（2026-10-05T00:17:02.670Z）。 C29新增OFC2025/2026与CLEO2025/2026四历史届，连到现有2027同系列；94刊/122届/10活动，98稳定系列与19个至少两届系列，273候选203/63/7、分区/索引/36样例保持。原118届/96其他系列及所有期刊/活动JSON保持；只两系列editionIds/sources和两候选关联/审核备注变化，后续公告日未刷新。OFC2026原CFP精确EDT截止与其他日级/通知周分开；CLEO2026跨年通知、时刻语义及海报尺寸冲突保留。 [逐字段来源](CONFERENCE_EVIDENCE_2026-10-05.md)。

## 2026-10-05：传统光学三刊 F8

C29 8012b2bee7f740128f1e95dd2aa870931c13da3d已验收[Pages37247520316](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37247520316)：build/deploy及同SHA完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，5158d5ebb44075da9deaca886345418c1d83255a7d7ab348861a1a7d677abdf8与本地一致（2026-10-05T00:27:25.581Z）。 F8新增Optical Materials、Optics & Laser Technology、Optics and Lasers in Engineering三本直接光学刊，MJL当前SCIE/新EI三行独立依据，五条JCR 2025 JIF为secondary。OM光学Q1/材料Q2，OLT光学Q1/应用物理Q2，OLE光学Q2；不取AIS/CAS或推2026。材料实验验证、工程光学方法与综述流程边界、逐刊APC/四环节指标保留。当前97刊/122届/10活动、273候选206 admitted/60 pending/7 deferred、SCIE83/ESCI12/EI90、JCR95/CAS11、36样例，旧94刊和其他JSON保护。其他规划继续。 [来源](JOURNAL_CANDIDATE_EVIDENCE_2026-10-05.md#f8传统光学三刊)。

## 2026-10-05：ECOC/IPC时间深度 C30

F8 1d6c9a1d69647ec0eb49ff426464c591c52e0aaf已验收[Pages37248491227](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37248491227)：build/deploy及同SHA完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，3250a53312b47e66289ecfe76700139cdc219c30c1c5b2893ef83333798f69dd与本地一致（2026-10-05T00:43:15.509Z）。 C30新增ECOC2025、IEEE IPC2024/2025三个历史届，接入原两稳定系列；ECOC与IPC均有三年记录。97刊/125届/10活动、98系列20多届、273候选206/60/7及全部索引/分区/36样例保持。原122届、96其他系列、271其他候选和其他JSON保护；只两系列editionIds/sources及两候选四审核字段变化，不刷新后续公告日。ECOC原指南所列4/22/25与最终版本分开、注册日期/金额冲突保留；IPC旧公告before9Oct边界不推全天。 [逐字段来源](CONFERENCE_EVIDENCE_2026-10-05.md#c30ecocipc时间深度)。

## 2026-10-05：光谱与红外两刊 F9

C30 8636bfba58432235b0de20bade45da1117963b5b已验收[Pages37249002126](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37249002126)：build/deploy及同SHA完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，a2a90aaa3461b3f9f7282f34136e586f3690824c05122c238b80d65c88946a1c与本地一致（2026-10-05T00:52:36.857Z）。 F9新增JQSRT与Infrared Physics & Technology，MJL当前SCIE与两新EI行独立保存；五条JCR 2025 JIF为secondary。JQSRT光谱Q2/光学Q3（非AIS Q2），红外三学科Q2；理论/实验例外与软篇幅、Option C数据及逐刊价格/指标保留。99刊/125届/10活动、273候选208 admitted/58 pending/7 deferred、SCIE85/ESCI12/EI92、JCR97/CAS11、36样例；旧97刊及其他JSON保持，其他规划继续。 [来源](JOURNAL_CANDIDATE_EVIDENCE_2026-10-05.md#f9光谱与红外两刊)。

## 2026-10-05：ACP/PW时间深度 C31

F9 3e82c9de2be920b0c7c26538a485c110f7971d8a已验收[Pages37249523023](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37249523023)：build/deploy及同SHA完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，74e5b96c11c609117a687eb49144816cbf93d182df8f4f2c432836c64cd7f0e6与本地一致（2026-10-05T00:58:54.197Z）。 C31新增ACP2025与Photonics West2026两个历史届，接原稳定系列。99刊/127届/10活动、98系列21多届、273候选208/58/7、SCIE85/ESCI12/EI92、JCR97/CAS11及36刊样例保持。原125届、96其他系列、271其他候选与全部其他JSON保护；只两系列editionIds/sources及两候选四审核字段变化，不刷新后续公告日。ACP原年格式/四截止/费用与现场条件独立，系统导出不当延期；PW仅核当届日城/场馆，旧CFP未知。 [逐字段来源](CONFERENCE_EVIDENCE_2026-10-05.md#c31acppw时间深度)。

## 2026-10-05：FOE附件指南 E32

C31 e48527f27d3b53f1de49ae7a9289ef2908e7f38c已验收[Pages37250421883](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37250421883)：build/deploy及同SHA完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，3e01e955395ba30c97f6e380a94e2594b871a9d9d742db3b57e775276644d3a7与本地一致（2026-10-05T01:12:40.348Z）。 E32补FOE现官网挂载的2023主指南与2024 Featured Columns：摘要条件例外、可编辑源文件、单盲/数据鼓励及Comment/两种Letter/Research Highlight建议范围分别保存；文件旧Springer页头与2026高教社迁移区分，未当全新2026规则。只requirements/schedule，整刊日期/费用/索引分区/36样例、98其他刊及全部其他JSON保护。99刊/127届/10活动、98系列21多届与273候选208/58/7等数量保持；其他规划继续。 [逐字段范围](JOURNAL_GUIDE_EVIDENCE_2026-10-05.md#e32foe现挂载附件)。

## 2026-10-05：Photonic Sensors费用年界 E33

E32 d112afdcd50c0a85552517237a19beb0b0b489b4已验收[Pages37250786008](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37250786008)：build/deploy及同SHA完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，5e734c1b2d2eb2146480943442c1c4a3b1bb29651c36297be2dd65c6239cd01c与本地一致（2026-10-05T01:17:38.493Z）。 E33补Photonic Sensors作者指南的APC资助年界、摘要及审稿局部字段。只requirements/publishing，整刊日期、既有50稿页建议/Letter四出版页与98其他刊、全索引分区/36样例及其他JSON保护。99刊/127届/10活动、98系列21多届与273候选208/58/7保持；其他规划继续。 [字段来源](JOURNAL_GUIDE_EVIDENCE_2026-10-05.md#e33photonic-sensors资助年界)。2027资助/费用待新公告，不外推。

## 2026-10-05：TMI光学样例 E34

E33 33144f9ad12bb1d06dda600903d00d5bf78b1d6b已验收[Pages37250987837](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37250987837)：build/deploy及同SHA完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，9ebd40745f4524eef913c24e3b7819a3a4bb830fb45cac162092ae96892ddb95与本地一致（2026-10-05T04:10:11.514Z）。 E34为IEEE TMI补三篇近两年不同期次光学样例：机器人OCT、光声微循环、OCT/MRI同动物定量关联。首次发表与较晚卷期分开，数值/鼠在体及相关性边界保留；只有scopeExamples变化，98其他刊、旧36刊样例、全指南/费用/整刊日期/索引分区与其他JSON保护。至少三篇样例刊数36→37，99刊/127届/10活动、98系列21多届、273候选208/58/7及全部索引/分区计数保持；其他规划继续。 [逐篇字段](JOURNAL_SCOPE_EVIDENCE_2026-10-05.md#e34ieee-tmi)。

## 2026-10-05：Applied Physics Letters F10

E34 887a49a22cefa242ed3089f1b071bf42daaff18a已验收[Pages37262559065](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37262559065)：同SHA完整CI/build/deploy成功，首页/版本200，7b2ce29854e784d93a1664339eb1a4e77b26f96573da50ad0ba584788830bd00与本地一致（2026-10-05T04:21:11.104Z）。 F10新增Applied Physics Letters，三篇不同期次近两年原创光学样例与本刊指南、费用/2025均值独立保存；MJL SCIE/EI两证据、JCR 2026出版社披露及2025机构转载Q2分别记录。当前100刊/127届/10活动、273候选209 admitted/57 pending/7 deferred、SCIE86/ESCI12/EI93、JCR98/CAS11、38刊至少三篇样例。旧99刊/37样例、272其他候选及其他JSON保护；其他规划继续。 [逐字段证据](JOURNAL_CANDIDATE_EVIDENCE_2026-10-05.md#f10applied-physics-letters)。

## 2026-10-05：TIE光学装备样例 E35

F10 be3bf570c0a36b9abacc89071625ae7e29ad159b已验收[Pages37263696798](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37263696798)：同SHA完整31项测试/typecheck/lint等CI/build/deploy成功，首页/版本200，dd1b4dde91f06ef14a4bfb926a10e0966fcb271bb656e6412911c23815d0aca9匹配本地（2026-10-05T04:30:42.163Z）。 E35为IEEE TIE补四篇近两年光学装备/显示电子样例：三篇已分配不同期次及一篇VCSEL Early Access；突出硬件控制/驱动贡献，保留通常不收纯光学的指南边界。只有scopeExamples变化，39刊至少三样例，100刊/127届/10活动、273候选209/57/7、98系列21多届及索引86/12/93、JCR98/CAS11保持；99其他刊、旧38样例和其他JSON保护。 [原论文与范围](JOURNAL_SCOPE_EVIDENCE_2026-10-05.md#e35ieee-tie)。

## 2026-10-05：Europe/IRMMW时间深度 C32

E35 37076b4dfc1268e917ddf11fa6613725fccc2cf7已验收[Pages37264177279](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37264177279)：同SHA完整31项测试/typecheck/lint等CI/build/deploy成功，首页/版本200，5dd71ed5c56d51d2a6f8e4517221ed954628c6159fa6fde70e50b35247377f69匹配本地（2026-10-05T04:36:42.786Z）。 C32新增CLEO/Europe2025历史、IRMMW2027/2028官方预告三届，补IR2026海报局部要求；130届/98系列23多届，100刊/10活动、273候选209/57/7、SCIE86/ESCI12/EI93、JCR98/CAS11与39刊样例保持。旧127届仅IR26的requirements追加，96其他系列/271其他候选及其他JSON保护；IR未来公告核验日实核更新，欧洲历史不刷新后续公告日。PDP时区、注册星期/退款年份与IR2025终日冲突保留。 [字段来源](CONFERENCE_EVIDENCE_2026-10-05.md#c32europeirmmw时间深度)。下一步继续剩余会议/期刊证据，不重复已有功能或同版索引扫描。

## 2026-10-05：IEEE Sensors Journal F11

C32 2cf92efa64e8bd4c6a8ddf3221abdd1c0f1ee389已验收[Pages37265119159](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37265119159)：同SHA完整31项测试/typecheck/lint等CI/build/deploy成功，首页/版本200，e424a35f3b93d381a8ad2c0a3f7ecbe63d132e78658a7137b7f1117a11be733c匹配本地（2026-10-05T04:50:46.874Z）。 F11新增IEEE Sensors Journal及三篇不同期次光纤传感实证，保存普通/综述费用阈值、现指南与2021会议扩展附件版本、单盲和统计未知年。101刊/130届/10活动、273候选210 admitted/56 pending/7 deferred、SCIE87/ESCI12/EI94、JCR99/CAS11、40刊至少三篇样例；旧100刊/272其他候选及全部其他JSON保护，其他规划继续。 [字段来源](JOURNAL_CANDIDATE_EVIDENCE_2026-10-05.md#f11ieee-sensors-journal)。

## 2026-10-05：TIP计算成像样例 E36

F11 09e2bf1bcbad666959064545556bea881130dd9d已验收[Pages37265762982](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37265762982)：同SHA完整31项测试/typecheck/lint等CI/build/deploy成功，首页/版本200，0863690b48c76627a69b19cc3e1a68bfa75f637603f78b327390f3d9c06f78d8匹配本地（2026-10-05T05:00:33.487Z）。 E36为IEEE TIP补三篇近两年光学采集/计算成像样例，分别为2024/2025/2026年度卷；首发与卷页分开，无期号不造。只有scopeExamples变化，100其他刊与全部其他JSON、索引排名/指南费用/整刊日期保护；101刊/130届/10活动、273候选210/56/7、98系列23多届、SCIE87/ESCI12/EI94、JCR99/CAS11保持，至少三篇样例刊数40→41。 [原论文与范围](JOURNAL_SCOPE_EVIDENCE_2026-10-05.md#e36ieee-tip)。

## 2026-10-05：IEEE TCI F12

E36 032766bd2a22ad9c7e85f38d414bc43fb02c36ba已验收[Pages37266546787](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37266546787)：同SHA完整31项测试/typecheck/lint等CI/build/deploy成功，首页/版本200，62d79ac3db698829eb320d35aca727b1fad172b5df5ccb9210f1052468b1a0b5匹配本地（2026-10-05T05:11:40.417Z）。 F12新增IEEE TCI，三篇不同年度卷光学计算样例、本刊链接指南与2026 APC独立保存；MJL SCIE/新双号EI、JCR2025电电子Q1/成像Q2实核，成像AIS Q1不作JIF。102刊/130届/10活动、273候选211 admitted/55 pending/7 deferred、SCIE88/ESCI12/EI95、JCR100/CAS11、42刊至少三篇样例；旧101刊、272其他候选与全部其他JSON保护。 [逐字段范围](JOURNAL_CANDIDATE_EVIDENCE_2026-10-05.md#f12ieee-tci)。其他规划继续。

## 2026-10-05：TGRS光学遥感样例 E37

F12 8028d805ed64f3c3bbcf12d598b1b0f4f95da964已验收[Pages37267223228](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37267223228)：同SHA完整31项测试/typecheck/lint等CI/build/deploy成功，首页/版本200，c90fa9459b994003e2b0b852a3865ed23c8bd69f5f304c075e1cae1556e8703d匹配本地（2026-10-05T05:20:27.637Z）。 E37为IEEE TGRS补三篇近两年、三个年度卷的光学样例，区分未来卫星互校准模拟、SI可溯源光学测量/RTM验证与单光子LiDAR现场实验。只有scopeExamples变化，101其他刊及其余全部JSON、原整刊/指南日期、索引分区和费用保护；102刊/130届/10活动及273候选211/55/7、88SCIE/12ESCI/95EI、JCR100/CAS11保持，43刊至少三篇样例。 [逐篇范围](JOURNAL_SCOPE_EVIDENCE_2026-10-05.md#e37ieee-tgrs)。其他规划继续。

## 2026-10-05：IGARSS时间深度 C33

E37 b99ec5d5311628cb16214264351f15befa88a4e7已验收[Pages37267596890](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37267596890)：同SHA完整31项测试/typecheck/lint等CI/build/deploy成功，首页/版本200，5f7300783bc8a4220409ab8dca714b5b10ee63e13f2ab38e5fd651ab7167d295匹配本地（2026-10-05T05:25:56.813Z）。 C33补IGARSS2024/2025/2026历史三届，与原2027预告组成四届时间线；133届/98系列24多届。102刊/10活动、273候选211/55/7、88SCIE/12ESCI/95EI、JCR100/CAS11及43刊样例保持。原130届（含2027）、97其他系列/272其他候选与其他JSON保护，系列只editionIds/sources及单候选四审核字段，不刷新未来公告核验日；逐年稿规、费用与海报上限不同，2025旧年份及2026日期冲突保留。 [字段来源](CONFERENCE_EVIDENCE_2026-10-05.md#c33igarss时间深度)。下一步继续其余会议/期刊证据，既有系列/定期更新机制不重复开发。

## 2026-10-05：TCYB光学计算样例 E38

C33 ef1cbd9d26fa72dffe4b91e582f0d0b50ba0d631已验收[Pages37268896712](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37268896712)：同SHA完整31项测试/typecheck/lint等CI/build/deploy成功，首页/版本200，c2c7cc7b3a152e00ad06edfd0e341ed4eb22c190b6c1da30c737db772b833540匹配本地（2026-10-05T05:43:17.767Z）。 E38为IEEE TCYB补四篇近两年光学视觉/多高光谱计算样例，含三不同正式期次55(2)/56(3)/56(10)及一Early Access；首发与卷期分开。仅scopeExamples变化，101其他刊、原TCYB指南/日期/索引排名/费用及全部其他JSON保护；102刊/133届/10活动、273候选211/55/7、98系列24多届、88SCIE/12ESCI/95EI、JCR100/CAS11保持，44刊至少三篇样例。 [逐篇范围](JOURNAL_SCOPE_EVIDENCE_2026-10-05.md#e38ieee-tcyb)。其他规划继续。

## 2026-10-05：IEEE EDL F13

E38 5857d5287f1d1bcc0e0f9b5e8f35d22f49bc5ded已验收[Pages37269435556](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37269435556)：同SHA完整31项测试/typecheck/lint等CI/build/deploy成功，首页/版本200，1417e406ba398b778fbd817106100644d973dbf28a85c942e88a45d55ec01494匹配本地（2026-10-05T05:50:17.476Z）。首次push返回remote unpack错误，随后ls-remote已为同SHA，重推Everything up-to-date；没有重复提交。 F13新增IEEE EDL和三不同正式期光晶体管/微显示/UV器件实验样例，保存现行短稿限、禁止SI、2026图像独立计数与IEDM例外；MJL SCIE/新EI1840、JCR2025电电子JIF Q2实核。103刊/133届/10活动、273候选212 admitted/54 pending/7 deferred、SCIE89/ESCI12/EI96、JCR101/CAS11、45刊至少三篇样例；原102刊/272其他候选和全部其他JSON保护。自愿页费字形、周期口径/年份、CAS和内部模板未知保留。 [逐字段范围](JOURNAL_CANDIDATE_EVIDENCE_2026-10-05.md#f13ieee-edl)。其他规划继续。

## 2026-10-05：IEEE TED F14

F13 06db7c9f07d7b327d5d10a07deaf8c5b57900d7d已验收[Pages37270266496](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37270266496)：同SHA完整31项测试/typecheck/lint等CI/build/deploy成功，首页/版本200，eb9893bb84d0d94e2e6632781c5ce4d5d8539562506bcfb986a6ce154ebf35a1匹配本地（2026-10-05T06:04:32.725Z）。API一次连接超时只复查同SHA，未重复提交。 F14新增IEEE TED和三不同正式期近红外/量子点/日盲UV光电样例，区分器件实测与阵列模拟；保存普通7/必要8/综述12初稿、DataPort初投供审和费用版年未知。MJL当前SCIE/新EI2076、JCR2025两学科JIF Q2实核。104刊/133届/10活动、273候选213 admitted/53 pending/7 deferred、SCIE90/ESCI12/EI97、JCR102/CAS11、46刊至少三篇样例；旧103刊/272其他候选与全部其他JSON保护。 [逐字段范围](JOURNAL_CANDIDATE_EVIDENCE_2026-10-05.md#f14ieee-ted)。其他规划继续。

## 2026-10-05：Proceedings光学综述样例 E39

F14 f3220424342c19800a6cf2945e09892d52eee21b已验收[Pages37271152109](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37271152109)：同SHA完整31项测试/typecheck/lint及build/deploy成功；首页/版本200，4d7f0481c60244024f598b02f0a6d920ac9e852a2a676d48f9a68f8bd5289f21匹配本地（2026-10-05T06:17:43.684Z）。 E39为已有Proceedings of the IEEE补三不同正式期次的近两年热红外遥感、含光学方法的形变传感与空间光通信样例；综述/系统介绍和单项实验分开，首次与名义卷期日期冲突按原元数据保留。仅scopeExamples变化，103其他刊、整刊/指南日期、索引分区费用及其他JSON保护；104刊/133届/10活动、273候选213/53/7、98系列24多届、90SCIE/12ESCI/97EI、JCR102/CAS11保持，47刊至少三篇样例。 [逐篇范围](JOURNAL_SCOPE_EVIDENCE_2026-10-05.md#e39proceedings-of-the-ieee)。下一轮先查实际额度与本批部署，继续IEEE COMST/IJEM或制造候选及历史/未来会议，五小时任务不另建或恢复旧任务。

## 2026-10-05：COMST样例与有限收尾 E40

有限结项定义3c43b17d4044e16b318d3ee126376fb441e52d9e已验收[Pages37320203658](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37320203658)，同SHA完整CI/build/deploy成功、首页/版本200、671fed44b5e94685eeebaa061da3089673bba642565abbe285e74047ac69f202与本地一致（2026-10-05T13:54:31.963Z）。 E40补COMST三篇近两年光学综述样例，保存仅两个正式卷/期的样本限制；不把三篇数量当三不同期次。104刊/133届/10活动、273候选213/53/7、90SCIE/12ESCI/97EI及JCR102/CAS11不变，48刊至少三篇样例。固定G4新增待审六刊中COMST已审查并保留限制，剩余五刊；其余门槛未完成。 [原论文及排除范围](JOURNAL_SCOPE_EVIDENCE_2026-10-05.md#e40ieee-comst)，[逐项收尾账本](V1_REVIEW_LEDGER.json)。V1_SCOPE为初始冻结名单，当前完成项按账本及PROJECT_CLOSEOUT跟踪，不回写/扩大冻结ID。

## 2026-10-05：JBO样例与IJEM访问收尾 E41

E40 56a1d453514da4f355baec0a78f75425686eb682已验收[Pages37323422250](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37323422250)，同SHA完整CI/build/deploy成功，首页/版本200，摘要433ed778a7742f04221794a7229e5227adb40f7cee119f024a37538620cc8c24匹配本地（2026-10-05T14:25:06.239Z）。 E41为JBO补三不同正式期次近两年原论文样例，49刊至少三篇；IJEM实际证书限制已审查，0新增样例，不用检索片段代替原摘要。104刊/133届/10活动、273候选213/53/7、90SCIE/12ESCI/97EI、JCR102/CAS11及98系列24多届保持。固定6新增样例名单已审COMST/IJEM/JBO，剩Neurophotonics/Photoacoustics/Displays；其余门槛未完成。 [JBO证据](JOURNAL_SCOPE_EVIDENCE_2026-10-05.md#e41jbo)、[IJEM限制](JOURNAL_SCOPE_EVIDENCE_2026-10-05.md#e41ijem访问限制)、[逐项账本](V1_REVIEW_LEDGER.json)。冻结名单保持，未审查项不标完成。

## 2026-10-05：Neurophotonics样例 E42

E41 2762f986007203e116a5adee8be838d18f9527f6已验收[Pages37325613664](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37325613664)，同SHA完整CI/build/deploy成功，首页/版本200，摘要2465b0b11c23b1433846f9748cc00c5c5dee53128dd67f09afcc6d34c0a6e1eb匹配本地（2026-10-05T14:36:12.591Z）。 E42补Neurophotonics三篇近两年三个正式期次原摘要/出版史样例，50刊至少三篇；名义期刊月份与Published冲突逐篇保留。104刊/133届/10活动、273候选213/53/7、90SCIE/12ESCI/97EI、JCR102/CAS11及98系列24多届保持。固定6新增名单4刊已审，剩Photoacoustics/Displays；旧47刊收尾及其他门槛待完成。 [逐篇范围](JOURNAL_SCOPE_EVIDENCE_2026-10-05.md#e42neurophotonics)，[逐项账本](V1_REVIEW_LEDGER.json)。固定范围保持，未审查项不标完成。

## 2026-10-05：Photoacoustics/Displays样例 E43/E44

E42 c4930ab92265c440a7abc2aecad95eaae62d70f5已验收[Pages37326604278](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37326604278)，同SHA完整CI/build/deploy成功，首页/版本200，摘要9c96934a2b5c529aa0ef8c2fb5396e787f00457726eb198c6a288b559acf9757匹配本地（2026-10-05T14:43:11.646Z）。 E43/E44补Photoacoustics/Displays各三近两年不同正式卷原摘要/出版史样例，52刊至少三篇；原Available online/Version of Record/名义卷月分别保存。固定6新增名单均已实际审查，COMST两个正式期次及IJEM证书访问限制保留，旧47刊仍待一次收尾审查；G4及项目未最终验收。104刊/133届/10活动、273候选213/53/7、90SCIE/12ESCI/97EI、JCR102/CAS11及98系列24多届保持。 [Photoacoustics](JOURNAL_SCOPE_EVIDENCE_2026-10-05.md#e43photoacoustics)/[Displays](JOURNAL_SCOPE_EVIDENCE_2026-10-05.md#e44displays)，[逐项账本](V1_REVIEW_LEDGER.json)。冻结名单不变；下一步旧47样例一次收尾和G2/G3/G5，最后功能/发布验收。

## 2026-10-05：固定样例收尾 V1-G4

E43/E44 4ca615e9a9f67f8a564adef05ab52dfdf2c9a87e已验收[Pages37328348755](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37328348755)，同SHA完整CI/build/deploy成功，首页/版本200，摘要bf869e6c1378eb9d2de2e859243aa8b837ea48ce07dc364348fdfce337c0619b匹配本地（2026-10-05T15:01:42.510Z）。 V1-G4完成固定53刊逐项样例收尾，48刊三个不同正式期次/年度卷证据，5刊实际已审查限制明确保留；52刊有至少三篇样例不等于52刊均三期。AFM现原页安全验证停止，未补造卷期或英文原题；NML仅两个年度卷，CPL更早Early Access未知。其他门槛仍未完成。目录全部保持104刊/133届/10活动、98系列24多届、273候选213/53/7、90SCIE/12ESCI/97EI及JCR102/CAS11。 [逐刊范围](V1_SCOPE_REVIEW_2026-10-05.md)。下一步固定60候选、12核心系列与正式数据一次收尾及最终功能/发布验收，原五小时任务保持，不新增工作范围。

## 2026-10-05：核心系列收尾 V1-G5

V1-G4 72f3b7ab3369e62a4110c45530d3af95127f349a已验收[Pages37330142798](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37330142798)，同SHA完整CI/build/deploy成功，首页/版本200，摘要bf869e6c1378eb9d2de2e859243aa8b837ea48ce07dc364348fdfce337c0619b匹配本地（2026-10-05T15:08:47.411Z）。一次连接超时仅复查同SHA，无新提交。 V1-G5完成固定12核心系列/29届历史与未来关联、独立当届规则的一次收尾；9系列多届，三单届后续未知/受限留有触发条件，不推算或凑数。G4/G5完成，G1最终回归/G2正式质量/G3固定60候选/G6验收交接仍待完成，整个项目IN_PROGRESS。目录与冻结范围全部保持。 [逐届审查](V1_SERIES_REVIEW_2026-10-05.md)。下一步固定60候选及正式字段质量，五小时调度继续至额度限制或V1.0真正验收后停止。

## 2026-10-05：候选收尾 V1-G3A

V1-G5 fdf32bb9641e4780dd95fa974faad1c1faaa65db已验收[Pages37330930498](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37330930498)，同SHA完整CI/build/deploy成功，首页/版本200，摘要bf869e6c1378eb9d2de2e859243aa8b837ea48ce07dc364348fdfce337c0619b匹配本地（2026-10-05T15:14:05.130Z）。 V1-G3A收尾固定15候选（13会议/论坛、2停收期刊）：7 deferred均有真实官方暂停/冲突依据，8 pending保留独立身份/CFP/访问缺口；原状态、数据与reviewedAt全部不变。45期刊未本次收尾，G3未完成；G4/G5已完成，整体IN_PROGRESS。 [逐项范围](V1_CANDIDATE_REVIEW_2026-10-05.md)。继续固定45期刊及G2正式质量，完成后最终功能/发布验收；不扩充范围，原五小时检查保持。

## 2026-10-05：候选五刊 V1-G3B

V1-G3A 176cb3661d101caa84de493300856f48f40b1949已验收[Pages37331759844](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37331759844)，同SHA完整CI/build/deploy成功，首页/版本200，摘要bf869e6c1378eb9d2de2e859243aa8b837ea48ce07dc364348fdfce337c0619b匹配本地（2026-10-05T15:20:59.885Z）。 V1-G3B核实五期刊候选：Journal of Optics与Journal of Biophotonics两直接专刊准入（后者保留JIF Q3、通过新EI证据）；三ACS交叉刊保留三原论文/访问限制。固定60已有20实核结论、剩40未审；106刊/133届/10活动、273候选215 admitted/51 pending/7 deferred、SCIE92/ESCI12/EI99、JCR104/CAS11，52刊至少三篇样例。G4/G5已完成，G3/G2等尚未完成，整体IN_PROGRESS。 [原来源/实际范围](V1_CANDIDATE_REVIEW_2026-10-05.md#v1-g3b五个期刊候选)。继续固定剩40期刊及正式质量/最终验收；原五小时检查保持，不另扩范围。

## 2026-10-05：量子三候选 V1-G3C

V1-G3B 9bf186d7cb8e668dd45b115d2ac6af42f4c4f506已验收[Pages37334264145](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37334264145)，同SHA完整CI/build/deploy成功，首页/版本200，摘要887ac4824854ae74b5c24def44530cd0bcb61f35cae78f2ecda98d576f0407fb匹配本地（2026-10-05T15:39:04.648Z）。 V1-G3C实核Quantum/NJP/QST三候选：Quantum三近年不同年度卷原摘要及Q1/SCIE准入，NJP/QST保留原入口限制；固定60已审23、剩37。107刊/133届/10活动、273候选216 admitted/50 pending/7 deferred、SCIE93/ESCI12/EI99、JCR105/CAS11、53刊至少三篇样例。G4/G5完成，G2/G3/最终回归验收仍待，整体IN_PROGRESS。 [逐字段范围](V1_CANDIDATE_REVIEW_2026-10-05.md#v1-g3cquantum逐字段来源)。原五小时检查保持，继续固定37候选/G2质量及最后验收；不重试受限域。

## 2026-10-05：七刊质量收尾 V1-G2A

V1-G3C 0bb6b9f25263ea03bf2a5b01193bd634ad97acd1已验收[Pages37335706839](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37335706839)，同SHA完整CI/build/deploy成功，首页/版本200，摘要96b55c4dedb0db9d1088ce3ec6a01db85e384b91349150ef72c92cb3e09971ab匹配本地（2026-10-05T15:50:04.639Z）。 V1-G2A完成七刊正式字段质量收尾（四旧专刊、三个固定候选新准入）；逐项身份/关联、来源与核验范围、分区版本/等级、独立索引、指南出版阶段及明确未知已审核。全部目录保持107刊/133届/10活动、候选216/50/7及23已审37未审；G2目标当前250条，仅7已审/余243，未完成。G4/G5已完成，整体IN_PROGRESS。 [逐项正式审核](V1_FORMAL_REVIEW_2026-10-05.md)。继续固定37候选及余243正式质量项，然后执行最终功能/发布验收；原五小时检查保持，已安全受限源不重复。

## 2026-10-05：Optica四刊质量 V1-G2B

V1-G2A 7ecf131c9e122e3f6466167ec771f920f3c73bc9已验收[Pages37336704029](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37336704029)，同SHA完整CI/build/deploy成功，首页/版本200，摘要96b55c4dedb0db9d1088ce3ec6a01db85e384b91349150ef72c92cb3e09971ab匹配本地（2026-10-05T15:57:38.831Z）。 V1-G2B收尾OL/AO/JOSA A/B四刊身份关联、索引分区版本、投稿与出版条件；自愿/可选OA/超页/彩图分开，JOSA B2026 S2O不外推2027。正式质量累计11刊/250条，余239；固定候选23已审37未审，G4/G5完成，G2/G3及最终验收未完成。全部目录保持，整体IN_PROGRESS。 [逐项质量范围](V1_FORMAL_REVIEW_2026-10-05.md#v1-g2b四刊)。下一批继续固定37候选/余239质量条目，保留原五小时额度检查，确认G1–G6才结束。

## 2026-10-06：七刊质量 V1-G2C

0a9ed6ec17c1d2dc09d444a7f29c249f99b376bd已验收[Pages 37338575669](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37338575669)；同SHA build/deploy成功、首页/版本200、线上摘要96b55c4dedb0db9d1088ce3ec6a01db85e384b91349150ef72c92cb3e09971ab匹配本地（2026-10-05T20:44:21.548Z）。 V1-G2C完成7刊逐字段质量收尾，累计18/250条、余232未审；固定候选23/60，G4/G5完成，G2/G3/最终功能验收仍待，整体IN_PROGRESS。全部data及冻结范围保持，不刷新原核验日期。 [逐字段范围](V1_FORMAL_REVIEW_2026-10-06.md)。原五小时额度检查保持；下一批继续固定剩余事项，不新增必做范围。

## 2026-10-06：六固定候选 V1-G3D

857d6c9fb697d9fd371de7ecbbf95f8c4b92fe91已验收[Pages 37372105871](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37372105871)，同SHA build/deploy成功，首页/版本200，摘要96b55c4dedb0db9d1088ce3ec6a01db85e384b91349150ef72c92cb3e09971ab与本地一致（2026-10-05T21:14:29.266Z）。 V1-G3D实审IP/ROP/MH/JMCC/EES/Analytical Chemistry六交叉刊，均保留pending及缺三原光学摘要/准入字段的限制；固定60已审29（3准入、26限制）、剩31。正式质量18/250、余232，G4/G5完成，G1/G2/G3/G6仍待，整体IN_PROGRESS。目录107刊/133届/10活动、273候选216 admitted/50 pending/7 deferred保持。 [逐项来源范围](V1_CANDIDATE_REVIEW_2026-10-06.md)。原五小时额度检查与每日来源巡检保持，不重试受限域；继续有限剩余范围。

## 2026-10-06：正式质量 V1-G2D

7ffb3e25605d9b94c3f8e2cea9c2fee8657a6ec5已验收[Pages 37374848723](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37374848723)；同SHA build/deploy成功、首页/版本200，摘要96b55c4dedb0db9d1088ce3ec6a01db85e384b91349150ef72c92cb3e09971ab匹配本地（2026-10-05T21:33:27.056Z）。 V1-G2D实审6刊正式字段质量，累计24/250、余226；固定候选29/60，G4/G5完成，G1/G2/G3/G6仍待、整体IN_PROGRESS。全部目录保持。 [逐项字段/版本/未知及触发](V1_FORMAL_REVIEW_2026-10-06.md#v1-g2d)。原五小时额度检查保持，继续固定剩余与最终验收，不扩大必做。

## 2026-10-06：固定候选 V1-G3E

1c89ae8a3f7048fb672f6a89b45df36ecb7065b5已验收[Pages 37376755207](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37376755207)，同SHA build/deploy成功、首页/版本200，摘要96b55c4dedb0db9d1088ce3ec6a01db85e384b91349150ef72c92cb3e09971ab与本地匹配（2026-10-05T21:35:59.349Z）。 V1-G3E实审6固定候选，保留pending及实际范围/限制；固定60已审35（3准入、32限制）、余25。正式质量24/250未完成，G4/G5完成，G1/G2/G3/G6仍待、整体IN_PROGRESS，目录及状态计数保持。 [逐项实读证据](V1_CANDIDATE_REVIEW_2026-10-06.md#v1-g3e)。原五小时额度检查保持；继续固定剩余事项，不重试未变化受限源、不扩大范围。

## 2026-10-06：正式质量 V1-G2E

77adb3b8a9b4f9343be5aaca0bfcf3ead72d88aa已验收[Pages 37377055407](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37377055407)；同SHA build/deploy成功、首页/版本200，摘要96b55c4dedb0db9d1088ce3ec6a01db85e384b91349150ef72c92cb3e09971ab匹配本地（2026-10-05T21:39:05.287Z）。 V1-G2E实审7刊正式字段质量，累计31/250、余219；固定候选35/60，G4/G5完成，G1/G2/G3/G6仍待、整体IN_PROGRESS。全部目录保持。 [逐项字段/版本/未知及触发](V1_FORMAL_REVIEW_2026-10-06.md#v1-g2e)。原五小时额度检查保持，继续固定剩余与最终验收，不扩大必做。

## 2026-10-06：正式会议质量 V1-G2F

c94b3c81f08544db8582ae86ce0bb29697b0ea8b已验收[Pages 37377396666](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37377396666)；同SHA build/deploy成功、首页/版本200，摘要96b55c4dedb0db9d1088ce3ec6a01db85e384b91349150ef72c92cb3e09971ab匹配本地（2026-10-05T21:41:45.426Z）。 V1-G2F实审13届会议全部字段，正式质量累计44/250（31刊/13届/0活动）、余206；固定候选35/60，G4/G5完成，G1/G2/G3/G6仍待、整体IN_PROGRESS，全部目录保持。 [逐届规则与实际未知](V1_CONFERENCE_FORMAL_REVIEW_2026-10-06.md#v1-g2f)。原五小时检查和每日巡检保持，不把未审或其他届规则当完成。

## 2026-10-06：正式会议质量 V1-G2G

a9c3711efd63a86cc48e55b63083093b837d3c13已验收[Pages 37377686327](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37377686327)；同SHA build/deploy成功、首页/版本200，摘要96b55c4dedb0db9d1088ce3ec6a01db85e384b91349150ef72c92cb3e09971ab匹配本地（2026-10-05T21:44:46.145Z）。 V1-G2G实审8届会议全部字段，正式质量累计52/250（31刊/21届/0活动）、余198；固定候选35/60，G4/G5完成，G1/G2/G3/G6仍待、整体IN_PROGRESS，全部目录保持。 [逐届规则与实际未知](V1_CONFERENCE_FORMAL_REVIEW_2026-10-06.md#v1-g2g)。原五小时检查和每日巡检保持，不把未审或其他届规则当完成。

## 2026-10-06：正式会议质量 V1-G2H

46735afbc1b2b37f4d781e4c3b70d154c603cd17已验收[Pages 37378027386](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37378027386)；同SHA build/deploy成功、首页/版本200，摘要96b55c4dedb0db9d1088ce3ec6a01db85e384b91349150ef72c92cb3e09971ab匹配本地（2026-10-05T21:47:35.823Z）。 V1-G2H实审8届会议全部字段，正式质量累计60/250（31刊/29届/0活动）、余190；固定候选35/60，G4/G5完成，G1/G2/G3/G6仍待、整体IN_PROGRESS，全部目录保持。 [逐届规则与实际未知](V1_CONFERENCE_FORMAL_REVIEW_2026-10-06.md#v1-g2h)。原五小时检查和每日巡检保持，不把未审或其他届规则当完成。

## 2026-10-06：固定候选 V1-G3F

cdd0f743f88a019ec64d1db38209a57180ab506b已验收[Pages 37378347488](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37378347488)，同SHA build/deploy成功、首页/版本200，摘要96b55c4dedb0db9d1088ce3ec6a01db85e384b91349150ef72c92cb3e09971ab与本地匹配（2026-10-05T21:52:14.651Z）。 V1-G3F实审5固定候选，保留pending及实际范围/限制；固定60已审40（3准入、37限制）、余20。正式质量60/250未完成，G4/G5完成，G1/G2/G3/G6仍待、整体IN_PROGRESS，目录及状态计数保持。 [逐项实读证据](V1_CANDIDATE_REVIEW_2026-10-06.md#v1-g3f)。原五小时额度检查保持；继续固定剩余事项，不重试未变化受限源、不扩大范围。

## 2026-10-06：正式质量 V1-G2I

2cf6c96d2aabf8970da7f30a58819bf960bbf8fe已验收[Pages 37379061180](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37379061180)；同SHA build/deploy成功、首页/版本200，摘要96b55c4dedb0db9d1088ce3ec6a01db85e384b91349150ef72c92cb3e09971ab匹配本地（2026-10-05T21:56:43.690Z）。 V1-G2I实审7刊正式字段质量，累计67/250、余183；固定候选40/60，G4/G5完成，G1/G2/G3/G6仍待、整体IN_PROGRESS。仅PRXQ的EI载体注记修正，身份、分区与索引计数保持。 [逐项字段/版本/未知及触发](V1_FORMAL_REVIEW_2026-10-06.md#v1-g2i)。原五小时额度检查保持，继续固定剩余与最终验收，不扩大必做。

## 2026-10-06：正式质量 V1-G2J

42363f718f9272cbf2627014ad1787d868232c83已验收[Pages 37379663409](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37379663409)；同SHA build/deploy成功、首页/版本200，摘要0dce3304728980b8619acf9377e9a0eb8fdb3d3823fb5f1e2f0ebda8ca3c0eae匹配本地（2026-10-05T22:01:52.721Z）。 V1-G2J实审8刊正式字段质量，累计75/250、余175；固定候选40/60，G4/G5完成，G1/G2/G3/G6仍待、整体IN_PROGRESS。全部目录保持。 [逐项字段/版本/未知及触发](V1_FORMAL_REVIEW_2026-10-06.md#v1-g2j)。原五小时额度检查保持，继续固定剩余与最终验收，不扩大必做。

## 2026-10-06：活动质量 V1-G2K

868652bf27be7e5cfc5a8684a64e5fdcc6a6eea6已验收[Pages 37380107505](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37380107505)，同SHA build/deploy成功、首页/版本200，摘要0dce3304728980b8619acf9377e9a0eb8fdb3d3823fb5f1e2f0ebda8ca3c0eae匹配本地（2026-10-05T22:07:34.317Z）。 V1-G2K实审10活动全部字段，正式质量85/250（46刊/29届/10活动），余165；固定候选40/60，G4/G5完成，G1/G2/G3/G6仍待，整体IN_PROGRESS。 [逐项参与/未来独立来源及未知](V1_EVENT_FORMAL_REVIEW_2026-10-06.md#v1-g2k)。原五小时检查与每日巡检保持，不扩展版本范围。

## 2026-10-06：固定Nature Methods准入 V1-G3G

5e71f0e54ea7cd42b96dc9c6c0d2bb0bb7f28fe1已验收[Pages 37380539643](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37380539643)；同SHA build/deploy成功，首页/版本200，摘要0dce3304728980b8619acf9377e9a0eb8fdb3d3823fb5f1e2f0ebda8ca3c0eae匹配本地（2026-10-05T22:10:09.390Z）。 V1-G3G准入固定候选Nature Methods并完成新增正式质量：108刊/133届/98系列/10活动，273候选217 admitted/49 pending/7 deferred，SCIE94/ESCI12/EI99，JCR106/CAS11，54刊至少三篇样例；固定候选41/60（4准入37限制）、余19，正式86/251（47刊29届10活动）、余165。G4/G5完成、G1/G2/G3/G6未验收，整体IN_PROGRESS。 [逐字段证据](V1_CANDIDATE_REVIEW_2026-10-06.md#journal-4603f2941d)。只固定候选准入，新刊已同批实审；原五小时检查保持，不扩大G4与候选冻结范围。

## 2026-10-06：正式质量 V1-G2L

7baa565f2dd045363c9ebd20b01214474b6fc8cb已验收[Pages 37381967558](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37381967558)；同SHA build/deploy成功、首页/版本200，摘要5c048f2c150aa784bba8f01e022a925fa406d305b964c5378f7a16febce3bcbf匹配本地（2026-10-05T22:22:57.534Z）。 V1-G2L实审6刊正式字段质量，累计92/251、余159；固定候选41/60，G4/G5完成，G1/G2/G3/G6仍待、整体IN_PROGRESS。仅计划明确的来源/载体注记修正，身份、分区与索引计数保持。 [逐项字段/版本/未知及触发](V1_FORMAL_REVIEW_2026-10-06.md#v1-g2l)。原五小时额度检查保持，继续固定剩余与最终验收，不扩大必做。

## 2026-10-06：正式质量 V1-G2M

325e690ccf231a9dd8e64bc9f1111c85e9e96ce4已验收[Pages 37382521419](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37382521419)；同SHA build/deploy成功、首页/版本200，摘要d623841a40c374a244fa23d25938161abd9142760fc6008ffbf169eb6d542908匹配本地（2026-10-05T22:27:51.464Z）。 V1-G2M实审4刊正式字段质量，累计96/251、余155；固定候选41/60，G4/G5完成，G1/G2/G3/G6仍待、整体IN_PROGRESS。全部目录保持。 [逐项字段/版本/未知及触发](V1_FORMAL_REVIEW_2026-10-06.md#v1-g2m)。原五小时额度检查保持，继续固定剩余与最终验收，不扩大必做。

## 2026-10-06：正式质量 V1-G2N

1125cadd1e18e19ac03e0c6b9062aa10e0f9bb50已验收[Pages 37382707163](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37382707163)；同SHA build/deploy成功、首页/版本200，摘要d623841a40c374a244fa23d25938161abd9142760fc6008ffbf169eb6d542908匹配本地（2026-10-05T22:33:02.361Z）。 V1-G2N实审3刊正式字段质量，累计99/251、余152；固定候选41/60，G4/G5完成，G1/G2/G3/G6仍待、整体IN_PROGRESS。全部目录保持。 [逐项字段/版本/未知及触发](V1_FORMAL_REVIEW_2026-10-06.md#v1-g2n)。原五小时额度检查保持，继续固定剩余与最终验收，不扩大必做。

## 2026-10-06：本轮额度与续接

V1-G2N 6cabe77aa14a65fe45126280a877abe37fe5c04e已验收[Pages 37383408590](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37383408590)，CI数据校验/31测试/typecheck/lint/build及部署成功，首页/版本200，摘要d623841a40c374a244fa23d25938161abd9142760fc6008ffbf169eb6d542908匹配本地（2026-10-05T22:36:49.309Z）。正式质量99/251（60刊/29届/10活动），余48刊及104届；固定候选41/60，余19。G4/G5完成，G1/G2/G3/G6待验收，整体IN_PROGRESS。最新实际五小时额度已用97%、周30%，普通使用仍允许，但余额不足安全完成下一完整研究/审查/上传/部署批次，保留用于本次验收与续接保存；不使用重置券、不购买额度。原automation仍ACTIVE每五小时检查，未恢复旧任务或另建任务；每日来源巡检保留。剩余ID和下一步保存在work/V1-CONTINUATION-20261006.json；先检查额度/实际仓库及同SHA回执，COMST只预读尚未正式收尾，不冒充已完成。仅G1–G6全部真实验收、标记V1.0_ACCEPTED并确认最终部署后删除automation。

## 2026-10-06：正式质量 V1-G2O

6f7ff0dc68e7f8db0cdd428cdd1648fd1e97836f已验收[Pages 37383683007](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37383683007)；同SHA build/deploy成功、首页/版本200，摘要d623841a40c374a244fa23d25938161abd9142760fc6008ffbf169eb6d542908匹配本地（2026-10-06T06:43:42.462Z）。 V1-G2O实审7刊正式字段质量，累计106/251、余145；固定候选41/60，G4/G5完成，G1/G2/G3/G6仍待、整体IN_PROGRESS。仅计划明确的来源/载体注记修正，身份、分区与索引计数保持。 [逐项字段/版本/未知及触发](V1_FORMAL_REVIEW_2026-10-06.md#v1-g2o)。原五小时额度检查保持，继续固定剩余与最终验收，不扩大必做。

## 2026-10-06：正式质量 V1-G2P

d3b3909658dbda6da4134b2c3c229c187e055136已验收[Pages 37425737194](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37425737194)；同SHA build/deploy成功、首页/版本200，摘要f2c3fa7b84306d4636daee2fd4e5b1ebe9dfaf83ad9e9d9baf6819412ce59b56匹配本地（2026-10-06T06:50:08.001Z）。 V1-G2P实审4刊正式字段质量，累计110/251、余141；固定候选41/60，G4/G5完成，G1/G2/G3/G6仍待、整体IN_PROGRESS。全部目录保持。 [逐项字段/版本/未知及触发](V1_FORMAL_REVIEW_2026-10-06.md#v1-g2p)。原五小时额度检查保持，继续固定剩余与最终验收，不扩大必做。

## 2026-10-06：固定候选准入 V1-G3H

f1a428b732c91ee409acb25add4ad4925d22addb已验收[Pages 37426079933](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37426079933)；同SHA build/deploy成功，首页/版本200，摘要f2c3fa7b84306d4636daee2fd4e5b1ebe9dfaf83ad9e9d9baf6819412ce59b56匹配本地（2026-10-06T06:53:53.185Z）。 V1-G3H准入固定候选Nature Physics并完成新增正式质量；109刊/133届/98系列/10活动，273候选218 admitted/48 pending/7 deferred，SCIE95/ESCI12/EI100，JCR107/CAS11，55刊至少三篇样例。固定候选42/60（5准入37实际已审查限制）、余18；正式111/252（72刊/29届/10活动）、余141。G4/G5完成，G1/G2/G3/G6待验收，整体IN_PROGRESS。 [独立原依据及限制](V1_CANDIDATE_REVIEW_2026-10-06.md#journal-8247293c00)。既有五小时调度保持，继续固定剩余及最终验收，不扩大本版。

## 2026-10-06：正式质量 V1-G2Q

4c9901c600209b19b6a9c9fb3f683a0916dc3c51已验收[Pages 37427470343](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37427470343)；同SHA build/deploy成功、首页/版本200，摘要b5b1af494030c88bd299f30b182ea6c10cf17844c1266d4123b0feda556ddf13匹配本地（2026-10-06T07:06:37.709Z）。 V1-G2Q实审7刊正式字段质量，累计118/252、余134；固定候选42/60，G4/G5完成，G1/G2/G3/G6仍待、整体IN_PROGRESS。仅三刊EI电子载体注记精确化，身份、肯定索引与原核验日保持。 [逐项字段/版本/未知及触发](V1_FORMAL_REVIEW_2026-10-06.md#v1-g2q)。原五小时额度检查保持，继续固定剩余与最终验收，不扩大必做。

## 2026-10-06：正式质量 V1-G2R

4261a2d659792bf7e9d36b34febe01bdeb83ddfb已验收[Pages 37428074351](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37428074351)；同SHA build/deploy成功、首页/版本200，摘要c75c6cf6e8d99df408b5976688e1afbe41020e23d885403a70da8db58afe242d匹配本地（2026-10-06T07:11:51.547Z）。 V1-G2R实审5刊正式字段质量，累计123/252、余129；固定候选42/60，G4/G5完成，G1/G2/G3/G6仍待、整体IN_PROGRESS。全部目录保持。 [逐项字段/版本/未知及触发](V1_FORMAL_REVIEW_2026-10-06.md#v1-g2r)。原五小时额度检查保持，继续固定剩余与最终验收，不扩大必做。

## 2026-10-06：正式质量 V1-G2S

95a4e7fb99f7c82fd1afd2e5fc52395bfa48555d已验收[Pages 37428355264](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37428355264)；同SHA build/deploy成功、首页/版本200，摘要c75c6cf6e8d99df408b5976688e1afbe41020e23d885403a70da8db58afe242d匹配本地（2026-10-06T07:14:46.355Z）。 V1-G2S实审5刊正式字段质量，累计128/252、余124；固定候选42/60，G4/G5完成，G1/G2/G3/G6仍待、整体IN_PROGRESS。仅计划明确的来源/载体注记修正，身份、分区与索引计数保持。 [逐项字段/版本/未知及触发](V1_FORMAL_REVIEW_2026-10-06.md#v1-g2s)。原五小时额度检查保持，继续固定剩余与最终验收，不扩大必做。

## 2026-10-06：正式质量 V1-G2T

98d29648567a504d48800f2a44a3b17b13d119df已验收[Pages 37429078633](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37429078633)；同SHA build/deploy成功、首页/版本200，摘要1883f75aa38468d2ce58bd254dc5d17a6c8c8347a39c3b9c7eef1a685618d566匹配本地（2026-10-06T07:22:36.528Z）。 V1-G2T实审4刊正式字段质量，累计132/252、余120；固定候选42/60，G4/G5完成，G1/G2/G3/G6仍待、整体IN_PROGRESS。仅计划明确的来源/载体注记修正，身份、分区与索引计数保持。 [逐项字段/版本/未知及触发](V1_FORMAL_REVIEW_2026-10-06.md#v1-g2t)。原五小时额度检查保持，继续固定剩余与最终验收，不扩大必做。

## 2026-10-06：正式质量 V1-G2U

ed6195dcef1e3a31303ae938fdd7639673957679已验收[Pages 37429363598](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37429363598)；同SHA build/deploy成功、首页/版本200，摘要bf4bfd9e0edfeb0a86c533173a0202dbc59ad63bc8a9839bd0cceaf7c8b4ab6e匹配本地（2026-10-06T07:25:25.025Z）。 V1-G2U实审5刊正式字段质量，累计137/252、余115；固定候选42/60，G4/G5完成，G1/G2/G3/G6仍待、整体IN_PROGRESS。全部目录保持。 [逐项字段/版本/未知及触发](V1_FORMAL_REVIEW_2026-10-06.md#v1-g2u)。原五小时额度检查保持，继续固定剩余与最终验收，不扩大必做。

## 2026-10-06：正式质量 V1-G2V

7125c8dab8eb582e4f1131e993b4e5eb55e98ef0已验收[Pages 37429625756](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37429625756)；同SHA build/deploy成功、首页/版本200，摘要bf4bfd9e0edfeb0a86c533173a0202dbc59ad63bc8a9839bd0cceaf7c8b4ab6e匹配本地（2026-10-06T07:27:04.203Z）。 V1-G2V实审6刊正式字段质量，累计143/252、余109；固定候选42/60，G4/G5完成，G1/G2/G3/G6仍待、整体IN_PROGRESS。仅计划明确的本刊作者/出版字段更新，其他目录保持。 [逐项字段/版本/未知及触发](V1_FORMAL_REVIEW_2026-10-06.md#v1-g2v)。原五小时额度检查保持，继续固定剩余与最终验收，不扩大必做。

## 2026-10-06：正式质量 V1-G2W

15a6fe1577ccbfdc1a2c969ca8b33a5ebe32c00a已验收[Pages 37430182629](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37430182629)；同SHA build/deploy成功、首页/版本200，摘要48ba55aefd23e8145bb584289dff5ad250179e0aa885dab77d56219c675f351f匹配本地（2026-10-06T07:32:45.026Z）。 V1-G2W实审5刊正式字段质量，累计148/252、余104；固定候选42/60，G4/G5完成，G1/G2/G3/G6仍待、整体IN_PROGRESS。全部目录保持。 [逐项字段/版本/未知及触发](V1_FORMAL_REVIEW_2026-10-06.md#v1-g2w)。原五小时额度检查保持，继续固定剩余与最终验收，不扩大必做。

## 2026-10-06：正式会议质量 V1-G2X

83608e65e976afa2db5777c2eec8f415c1935684已验收[Pages 37430387484](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37430387484)；同SHA build/deploy成功、首页/版本200，摘要48ba55aefd23e8145bb584289dff5ad250179e0aa885dab77d56219c675f351f匹配本地（2026-10-06T07:38:27.719Z）。 V1-G2X实审6届会议全部字段，正式质量累计154/252（109刊/35届/10活动）、余98；固定候选42/60，G4/G5完成，G1/G2/G3/G6仍待、整体IN_PROGRESS，全部目录保持。 [逐届规则与实际未知](V1_CONFERENCE_FORMAL_REVIEW_2026-10-06.md#v1-g2x)。原五小时检查和每日巡检保持，不把未审或其他届规则当完成。

## 2026-10-06：正式会议质量 V1-G2Y

e7bc07d223a7217e31e6039c478c27c2de29bbd6已验收[Pages 37431370591](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37431370591)；同SHA build/deploy成功、首页/版本200，摘要48ba55aefd23e8145bb584289dff5ad250179e0aa885dab77d56219c675f351f匹配本地（2026-10-06T07:44:50.298Z）。 V1-G2Y实审6届会议全部字段，正式质量累计160/252（109刊/41届/10活动）、余92；固定候选42/60，G4/G5完成，G1/G2/G3/G6仍待、整体IN_PROGRESS，全部目录保持。 [逐届规则与实际未知](V1_CONFERENCE_FORMAL_REVIEW_2026-10-06.md#v1-g2y)。原五小时检查和每日巡检保持，不把未审或其他届规则当完成。

## 2026-10-06：正式会议质量 V1-G2Z

341992e56441cdb9669ac33e16b1a8ccf3252129已验收[Pages 37431714148](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37431714148)；同SHA build/deploy成功、首页/版本200，摘要48ba55aefd23e8145bb584289dff5ad250179e0aa885dab77d56219c675f351f匹配本地（2026-10-06T07:46:44.743Z）。 V1-G2Z实审6届会议全部字段，正式质量累计166/252（109刊/47届/10活动）、余86；固定候选42/60，G4/G5完成，G1/G2/G3/G6仍待、整体IN_PROGRESS，全部目录保持。 [逐届规则与实际未知](V1_CONFERENCE_FORMAL_REVIEW_2026-10-06.md#v1-g2z)。原五小时检查和每日巡检保持，不把未审或其他届规则当完成。

## 2026-10-06：正式会议质量 V1-G2AA

3654e4824899ed166f2ce2f91273ba034cead244已验收[Pages 37432033875](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37432033875)；同SHA build/deploy成功、首页/版本200，摘要48ba55aefd23e8145bb584289dff5ad250179e0aa885dab77d56219c675f351f匹配本地（2026-10-06T07:50:22.451Z）。 V1-G2AA实审6届会议全部字段，正式质量累计172/252（109刊/53届/10活动）、余80；固定候选42/60，G4/G5完成，G1/G2/G3/G6仍待、整体IN_PROGRESS，全部目录保持。 [逐届规则与实际未知](V1_CONFERENCE_FORMAL_REVIEW_2026-10-06.md#v1-g2aa)。原五小时检查和每日巡检保持，不把未审或其他届规则当完成。

## 2026-10-06：正式会议质量 V1-G2AB

f7454950529e15e1347c08087e7bb99ac76199a9已验收[Pages 37432443371](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37432443371)；同SHA build/deploy成功、首页/版本200，摘要48ba55aefd23e8145bb584289dff5ad250179e0aa885dab77d56219c675f351f匹配本地（2026-10-06T07:55:25.713Z）。 V1-G2AB实审6届会议全部字段，正式质量累计178/252（109刊/59届/10活动）、余74；固定候选42/60，G4/G5完成，G1/G2/G3/G6仍待、整体IN_PROGRESS，全部目录保持。 [逐届规则与实际未知](V1_CONFERENCE_FORMAL_REVIEW_2026-10-06.md#v1-g2ab)。原五小时检查和每日巡检保持，不把未审或其他届规则当完成。

## 2026-10-06：正式会议质量 V1-G2AC

bf531987b6443260796f190715d4b5a4a97e05ad已验收[Pages 37432815183](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37432815183)；同SHA build/deploy成功、首页/版本200，摘要48ba55aefd23e8145bb584289dff5ad250179e0aa885dab77d56219c675f351f匹配本地（2026-10-06T08:00:54.811Z）。 V1-G2AC实审6届会议全部字段，正式质量累计184/252（109刊/65届/10活动）、余68；固定候选42/60，G4/G5完成，G1/G2/G3/G6仍待、整体IN_PROGRESS，全部目录保持。 [逐届规则与实际未知](V1_CONFERENCE_FORMAL_REVIEW_2026-10-06.md#v1-g2ac)。原五小时检查和每日巡检保持，不把未审或其他届规则当完成。

## 2026-10-06：正式会议质量 V1-G2AD

86aec50818a4145f3b51abbda6c1e7aa3b7a4bce已验收[Pages 37433592773](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37433592773)；同SHA build/deploy成功、首页/版本200，摘要48ba55aefd23e8145bb584289dff5ad250179e0aa885dab77d56219c675f351f匹配本地（2026-10-06T08:05:14.802Z）。 V1-G2AD实审6届会议全部字段，正式质量累计190/252（109刊/71届/10活动）、余62；固定候选42/60，G4/G5完成，G1/G2/G3/G6仍待、整体IN_PROGRESS，全部目录保持。 [逐届规则与实际未知](V1_CONFERENCE_FORMAL_REVIEW_2026-10-06.md#v1-g2ad)。原五小时检查和每日巡检保持，不把未审或其他届规则当完成。

## 2026-10-06：正式会议质量 V1-G2AE

4a91af1aa023b0954ac30b4a9cf7a44dadcdef04已验收[Pages 37433870656](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37433870656)；同SHA build/deploy成功、首页/版本200，摘要48ba55aefd23e8145bb584289dff5ad250179e0aa885dab77d56219c675f351f匹配本地（2026-10-06T08:07:23.476Z）。 V1-G2AE实审7届会议全部字段，正式质量累计197/252（109刊/78届/10活动）、余55；固定候选42/60，G4/G5完成，G1/G2/G3/G6仍待、整体IN_PROGRESS，仅指定当届字段修订，其他目录保持。 [逐届规则与实际未知](V1_CONFERENCE_FORMAL_REVIEW_2026-10-06.md#v1-g2ae)。原五小时检查和每日巡检保持，不把未审或其他届规则当完成。

## 2026-10-06：正式会议质量 V1-G2AF

b65fc4c8ab1c0cb232e2dc1b342d467f999dfae1已验收[Pages 37434355860](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37434355860)；同SHA build/deploy成功、首页/版本200，摘要c39af5d7ca175c6ad4ebfa1ce1a2f37747f46d569b186ad4282fc0fd48ce1dcf匹配本地（2026-10-06T08:12:35.306Z）。 V1-G2AF实审6届会议全部字段，正式质量累计203/252（109刊/84届/10活动）、余49；固定候选42/60，G4/G5完成，G1/G2/G3/G6仍待、整体IN_PROGRESS，仅指定当届字段修订，其他目录保持。 [逐届规则与实际未知](V1_CONFERENCE_FORMAL_REVIEW_2026-10-06.md#v1-g2af)。原五小时检查和每日巡检保持，不把未审或其他届规则当完成。

## 2026-10-06：正式会议质量 V1-G2AG

4fcc10e47a7a583805c757e002876adf1c0e5174已验收[Pages 37434699558](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37434699558)；同SHA build/deploy成功、首页/版本200，摘要89af4b5d0767cadd266ef252c77c58a9930385e12e820c220ea8a6a436e56bbe匹配本地（2026-10-06T08:15:27.120Z）。 V1-G2AG实审7届会议全部字段，正式质量累计210/252（109刊/91届/10活动）、余42；固定候选42/60，G4/G5完成，G1/G2/G3/G6仍待、整体IN_PROGRESS，全部目录保持。 [逐届规则与实际未知](V1_CONFERENCE_FORMAL_REVIEW_2026-10-06.md#v1-g2ag)。原五小时检查和每日巡检保持，不把未审或其他届规则当完成。

## 2026-10-06：正式会议质量 V1-G2AH

ffa9b0d3975c56cda03d8185beab437298a1f1f9已验收[Pages 37435003959](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37435003959)；同SHA build/deploy成功、首页/版本200，摘要89af4b5d0767cadd266ef252c77c58a9930385e12e820c220ea8a6a436e56bbe匹配本地（2026-10-06T08:20:56.391Z）。 V1-G2AH实审6届会议全部字段，正式质量累计216/252（109刊/97届/10活动）、余36；固定候选42/60，G4/G5完成，G1/G2/G3/G6仍待、整体IN_PROGRESS，全部目录保持。 [逐届规则与实际未知](V1_CONFERENCE_FORMAL_REVIEW_2026-10-06.md#v1-g2ah)。原五小时检查和每日巡检保持，不把未审或其他届规则当完成。

## 2026-10-06：正式会议质量 V1-G2AI

976025828bf45903e3ba5c267fe6cf498c97e6ce已验收[Pages 37435747851](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37435747851)；同SHA build/deploy成功、首页/版本200，摘要89af4b5d0767cadd266ef252c77c58a9930385e12e820c220ea8a6a436e56bbe匹配本地（2026-10-06T08:25:13.143Z）。 V1-G2AI实审6届会议全部字段，正式质量累计222/252（109刊/103届/10活动）、余30；固定候选42/60，G4/G5完成，G1/G2/G3/G6仍待、整体IN_PROGRESS，全部目录保持。 [逐届规则与实际未知](V1_CONFERENCE_FORMAL_REVIEW_2026-10-06.md#v1-g2ai)。原五小时检查和每日巡检保持，不把未审或其他届规则当完成。

## 2026-10-06：正式会议质量 V1-G2AJ

70b76ac0d175a77a7b4a07b2c9c4dfe2ac9458eb已验收[Pages 37436056174](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37436056174)；同SHA build/deploy成功、首页/版本200，摘要89af4b5d0767cadd266ef252c77c58a9930385e12e820c220ea8a6a436e56bbe匹配本地（2026-10-06T08:28:30.298Z）。 V1-G2AJ实审7届会议全部字段，正式质量累计229/252（109刊/110届/10活动）、余23；固定候选42/60，G4/G5完成，G1/G2/G3/G6仍待、整体IN_PROGRESS，仅指定当届字段修订，其他目录保持。 [逐届规则与实际未知](V1_CONFERENCE_FORMAL_REVIEW_2026-10-06.md#v1-g2aj)。原五小时检查和每日巡检保持，不把未审或其他届规则当完成。

## 2026-10-06：正式会议质量 V1-G2AK

8c037d8363abbb759a0d6ae5845858f32953e729已验收[Pages 37436451888](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37436451888)；同SHA build/deploy成功、首页/版本200，摘要7b4426a7864e2c91452cf01ca83f4cbac9c9870f9c65e210b3c1b8f963ffef0e匹配本地（2026-10-06T08:31:01.069Z）。 V1-G2AK实审5届会议全部字段，正式质量累计234/252（109刊/115届/10活动）、余18；固定候选42/60，G4/G5完成，G1/G2/G3/G6仍待、整体IN_PROGRESS，全部目录保持。 [逐届规则与实际未知](V1_CONFERENCE_FORMAL_REVIEW_2026-10-06.md#v1-g2ak)。原五小时检查和每日巡检保持，不把未审或其他届规则当完成。

## 2026-10-06：正式会议质量 V1-G2AL

0680f4c5c74b8cd3292c97d57c8a6bf0981c5071已验收[Pages 37436716864](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37436716864)；同SHA build/deploy成功、首页/版本200，摘要7b4426a7864e2c91452cf01ca83f4cbac9c9870f9c65e210b3c1b8f963ffef0e匹配本地（2026-10-06T08:33:10.215Z）。 V1-G2AL实审4届会议全部字段，正式质量累计238/252（109刊/119届/10活动）、余14；固定候选42/60，G4/G5完成，G1/G2/G3/G6仍待、整体IN_PROGRESS，全部目录保持。 [逐届规则与实际未知](V1_CONFERENCE_FORMAL_REVIEW_2026-10-06.md#v1-g2al)。原五小时检查和每日巡检保持，不把未审或其他届规则当完成。

## 2026-10-06：正式会议质量 V1-G2AM

72f90cf27fe75b4d6928517549facc4a45c5f72a已验收[Pages 37436952909](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37436952909)；同SHA build/deploy成功、首页/版本200，摘要7b4426a7864e2c91452cf01ca83f4cbac9c9870f9c65e210b3c1b8f963ffef0e匹配本地（2026-10-06T11:45:21.420Z）。 V1-G2AM实审4届会议全部字段，正式质量累计242/252（109刊/123届/10活动）、余10；固定候选42/60，G4/G5完成，G1/G2/G3/G6仍待、整体IN_PROGRESS，全部目录保持。 [逐届规则与实际未知](V1_CONFERENCE_FORMAL_REVIEW_2026-10-06.md#v1-g2am)。原五小时检查和每日巡检保持，不把未审或其他届规则当完成。

## 2026-10-06：正式会议质量 V1-G2AN

62b6423e80b7990063e80fb1894f0585dbffdaf1已验收[Pages 37458722395](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37458722395)；同SHA build/deploy成功、首页/版本200，摘要7b4426a7864e2c91452cf01ca83f4cbac9c9870f9c65e210b3c1b8f963ffef0e匹配本地（2026-10-06T11:51:00.206Z）。 V1-G2AN实审4届会议全部字段，正式质量累计246/252（109刊/127届/10活动）、余6；固定候选42/60，G4/G5完成，G1/G2/G3/G6仍待、整体IN_PROGRESS，全部目录保持。 [逐届规则与实际未知](V1_CONFERENCE_FORMAL_REVIEW_2026-10-06.md#v1-g2an)。原五小时检查和每日巡检保持，不把未审或其他届规则当完成。

## 2026-10-06：正式会议质量 V1-G2AO

d08b3be64aedf86727877c962cf170be3eaf98f5已验收[Pages 37459327889](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37459327889)；同SHA build/deploy成功、首页/版本200，摘要7b4426a7864e2c91452cf01ca83f4cbac9c9870f9c65e210b3c1b8f963ffef0e匹配本地（2026-10-06T11:54:27.095Z）。 V1-G2AO实审6届会议全部字段，正式质量累计252/252（109刊/133届/10活动）、余0；固定候选42/60，G4/G5完成，G2当前正式目录已审清，G1/G3/G6仍待、整体IN_PROGRESS，全部目录保持。 [逐届规则与实际未知](V1_CONFERENCE_FORMAL_REVIEW_2026-10-06.md#v1-g2ao)。原五小时检查和每日巡检保持，不把未审或其他届规则当完成。

## 2026-10-06：固定候选 V1-G3I

16091a4d1f4cf5ea7f8cc6d23f1c60032c93e65e已验收[Pages 37459632064](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37459632064)，同SHA build/deploy成功、首页/版本200，摘要7b4426a7864e2c91452cf01ca83f4cbac9c9870f9c65e210b3c1b8f963ffef0e与本地匹配（2026-10-06T11:57:41.853Z）。 V1-G3I实审4固定候选，保留pending及实际范围/限制；固定60已审46（5准入、41限制）、余14。正式质量252/252，当前正式目录已审清，G4/G5完成，G1/G3/G6仍待、整体IN_PROGRESS，目录及状态计数保持。 [逐项实读证据](V1_CANDIDATE_REVIEW_2026-10-06.md#v1-g3i)。原五小时额度检查保持；继续固定剩余事项，不重试未变化受限源、不扩大范围。

## 2026-10-06：固定候选准入 V1-G3J

fb0229ea11b98ee909cdbdd8fd97f32232d5ec0d已验收[Pages 37460180099](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37460180099)；同SHA build/deploy成功，首页/版本200，摘要7b4426a7864e2c91452cf01ca83f4cbac9c9870f9c65e210b3c1b8f963ffef0e匹配本地（2026-10-06T12:02:50.386Z）。 V1-G3J准入固定候选Journal of Semiconductors并同批完成新增正式质量；110刊/133届/98系列/10活动，273候选219 admitted/47 pending/7 deferred；SCIE95/ESCI13/EI101，JCR107/CAS11，56刊至少三篇样例。固定候选47/60（6准入、41实际限制）、余13；正式253/253（110刊/133届/10活动）、余0；G2当前正式审清、G4/G5完成，G1/G3/G6待，整体IN_PROGRESS。 [逐字段依据与限制](V1_CANDIDATE_REVIEW_2026-10-06.md#journal-357da7987c)。保留既有五小时额度检查及每日巡检，不扩大本版。

## 2026-10-06：固定候选 V1-G3K

33c48910a26ac4abd5ee4db8b5b080186609bd0a已验收[Pages 37461442202](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37461442202)，同SHA build/deploy成功、首页/版本200，摘要73bd56804f30b96696d2d95bfc250f2f3cd2e2feae4a7cedc5853e0306d52eb5与本地匹配（2026-10-06T12:12:20.540Z）。 V1-G3K实审3固定候选，保留pending及实际范围/限制；固定60已审50（6准入、44限制）、余10。正式质量253/253，当前正式目录已审清，G4/G5完成，G1/G3/G6仍待、整体IN_PROGRESS，目录及状态计数保持。 [逐项实读证据](V1_CANDIDATE_REVIEW_2026-10-06.md#v1-g3k)。原五小时额度检查保持；继续固定剩余事项，不重试未变化受限源、不扩大范围。

## 2026-10-06：固定候选准入 V1-G3L

99690c24df2f3a9ecb3177c04b9dd34e07642c01已验收[Pages 37462076408](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37462076408)；同SHA build/deploy成功，首页/版本200，摘要73bd56804f30b96696d2d95bfc250f2f3cd2e2feae4a7cedc5853e0306d52eb5匹配本地（2026-10-06T12:18:04.065Z）。 V1-G3L准入固定候选Communications Materials并同批完成新增正式质量；111刊/133届/98系列/10活动，273候选220 admitted/46 pending/7 deferred；SCIE95/ESCI14/EI102，JCR107/CAS11，57刊至少三篇样例。固定候选51/60（7准入、44实际限制）、余9；正式254/254（111刊/133届/10活动）、余0；G2当前正式审清、G4/G5完成，G1/G3/G6待，整体IN_PROGRESS。 [逐字段依据与限制](V1_CANDIDATE_REVIEW_2026-10-06.md#journal-3b99fda9e6)。保留既有五小时额度检查及每日巡检，不扩大本版。

## 2026-10-06：固定候选 V1-G3M

a65caccd5c02c8777b7e6f55d4c14925f565904b已验收[Pages 37462718166](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37462718166)，同SHA build/deploy成功、首页/版本200，摘要74a5dd63ffdfcbf49dcbf0463523a648ffbf70b3c4b669274941511b16fecfeb与本地匹配（2026-10-06T12:25:08.532Z）。 V1-G3M实审3固定候选，保留pending及实际范围/限制；固定60已审54（7准入、47限制）、余6。正式质量254/254，当前正式目录已审清，G4/G5完成，G1/G3/G6仍待、整体IN_PROGRESS，目录及状态计数保持。 [逐项实读证据](V1_CANDIDATE_REVIEW_2026-10-06.md#v1-g3m)。原五小时额度检查保持；继续固定剩余事项，不重试未变化受限源、不扩大范围。

## 2026-10-06：固定候选准入 V1-G3N

07de5d3e88f1e71a0c14f793fa010d90b74b01b8已验收[Pages 37463834938](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37463834938)；同SHA build/deploy成功，首页/版本200，摘要74a5dd63ffdfcbf49dcbf0463523a648ffbf70b3c4b669274941511b16fecfeb匹配本地（2026-10-06T12:33:31.766Z）。 V1-G3N准入固定候选Proceedings of the National Academy of Sciences并同批完成新增正式质量；112刊/133届/98系列/10活动，273候选221 admitted/45 pending/7 deferred；SCIE96/ESCI14/EI102，JCR108/CAS11，58刊至少三篇样例。固定候选55/60（8准入、47实际限制）、余5；正式255/255（112刊/133届/10活动）、余0；G2当前正式审清、G4/G5完成，G1/G3/G6待，整体IN_PROGRESS。 [逐字段依据与限制](V1_CANDIDATE_REVIEW_2026-10-06.md#journal-de8b7d21e8)。保留既有五小时额度检查及每日巡检，不扩大本版。

## 2026-10-06：固定候选 V1-G3O

39fb62e96079f856854c0d7542549443c8af9b52已验收[Pages 37465387770](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37465387770)，同SHA build/deploy成功、首页/版本200，摘要661eb3d51f38bc085a66144e45be03f9d6b884ff802f88261821832f1880781f与本地匹配（2026-10-06T12:45:26.438Z）。 V1-G3O实审5固定候选，保留pending及实际范围/限制；固定60已审60（8准入、52限制）、余0。正式质量255/255，当前正式目录已审清，G4/G5完成，G3固定候选已全部实审，G1/G6仍待、整体IN_PROGRESS，目录及状态计数保持。 [逐项实读证据](V1_CANDIDATE_REVIEW_2026-10-06.md#v1-g3o)。原五小时额度检查保持；继续固定剩余事项，不重试未变化受限源、不扩大范围。

## 2026-10-06：V1.0_ACCEPTED

项目状态：V1.0_ACCEPTED。验收日期：2026-10-06。G1–G6全部通过；发布SHA：`eda989c36529290a5c89fbf102c62e49fc1244a3`；[Pages 37468868918](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37468868918) build/deploy成功，首页/版本HTTP200，线上目录摘要 `661eb3d51f38bc085a66144e45be03f9d6b884ff802f88261821832f1880781f` 匹配本地（2026-10-06T13:12:46.316Z）。32/32测试、类型/lint/子路径构建及桌面/手机实际回归通过。详见[完整验收和限制交接](V1_ACCEPTANCE_2026-10-06.md)。

建设剩余任务为0；不将52候选已审查限制、5样例限制或464滚动字段任务伪装成已知事实，也不自动重开V1.0。后续只按[维护手册](MAINTENANCE.md)处理真实新公告/变化，扩大范围或V1.1须用户另行要求。
