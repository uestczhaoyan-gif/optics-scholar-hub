# 新对话续接说明

更新：2026-10-05。用户已明确要求持续续作，并开启每五小时检查额度后重新开始；已复用原 Codex 自动化并将目标改为当前对话。本文是操作入口，完整批次计划见 [ROADMAP](ROADMAP.md)。

## 项目与当前基线

- 仓库：https://github.com/uestczhaoyan-gif/optics-scholar-hub ，默认分支 main。
- 网站：https://uestczhaoyan-gif.github.io/optics-scholar-hub/ 。本地项目文件夹为 D:/ZYphd/开源项目1-光学期刊&会议汇总。
- 9/15 交接提交为 7b3e27c；9/30 会议维护提交 1515ec6（Pages 36704905503）与 Compendex A1 提交 f77161d（Pages 36705869178）已确认 build/deploy 成功。本次后续提交与部署以 git log、Actions 和最新核验日志为准，不回退到历史提交。
- 正式目录：101 本期刊、130 届会议、10 项展会/论坛；用户指定 54 本期刊全部收录。会议含历史届次与未来预告，数量不代表全是可投稿活动。
- 候选：273 项，210 admitted、56 pending、7 deferred。与正式条目通过 relatedExistingIds 关联。
- JCR 有记录 99/101、中科院 11/101；SCIE 肯定记录 87、ESCI 12、EI 94。94 本已取得 Compendex 数据库方公开来源表证据（SERIALS 2026-08-07 版；相关刊物另核对 2026-07-10 中文表），另有 87 本 SCIE 与 12 本 ESCI 已经 Clarivate MJL 公开结果卡查询确认，当前肯定索引均为数据库方依据；未进行订阅平台单篇检索。缺证据不等于未收录，详见 [最新匹配记录](INDEX_EVIDENCE_2026-10-02.md)、[APS 六刊新增证据](JOURNAL_CANDIDATE_EVIDENCE_2026-10-03.md)及 [中文光学候选新证据](JOURNAL_CANDIDATE_EVIDENCE_2026-10-05.md)。
- 交叉适配样例已有四十一刊至少 3 篇：原九刊及 Nano-Micro Letters、Science China Materials、PRX Quantum、InfoMat、Advanced Science，另有 PRA、PRApplied、PRB、PRL、PRResearch、PRX，以及 ACS Nano、Science Advances、ACS Sensors、Biosensors and Bioelectronics、Sensors and Actuators B、Journal of Colloid and Interface Science、Dyes and Pigments、Nano Letters、Inorganic Chemistry、Advanced Materials、Angewandte Chemie、Chinese Physics Letters、Applied Physics Reviews、Chemical Reviews及物理学报、JSID、IEEE TMI、Applied Physics Letters、IEEE TIE、IEEE Sensors Journal、IEEE TIP。其余仍需系统补充；首次发表、卷期及理论/实验边界见 [E2/E4 证据](JOURNAL_SCOPE_EVIDENCE_2026-10-02.md)和 [E20–E30 证据](JOURNAL_SCOPE_EVIDENCE_2026-10-04.md)。
- 物理学报的三篇样例及2026指南见 [F5 证据](JOURNAL_CANDIDATE_EVIDENCE_2026-10-05.md#f5物理学报)。
- 已具备中文界面、双语 README、分区/索引/领域筛选、官方分区平台入口、日历导出、关注、筛选分享、版本刷新、维护和覆盖报告。已有 31 项测试；系列时间线、系列关注和后续公告维护已接入，不重建这些功能。

## 恢复时先做

1. 先读取本文件、ROADMAP、[维护手册](MAINTENANCE.md)、[数据模型](DATA_MODEL.md)、[候选规则](CANDIDATES.md)和 [核验日志](VERIFICATION_LOG.md)最新记录。检查当前 AGENTS.md（如存在）。
2. 检查 git status、分支、remote 和最新提交，保护未提交改动；如有未推送或部署未确认的批次先收尾。工作区干净时再同步远端，不强制重置。
3. 使用当日日期重新运行 pnpm report:maintenance 和 pnpm report:coverage，查看 source-report 输出；旧报告中的“临近”事项会随时间失效。报告是字段任务数，不是新会议数量。
4. 查看 GitHub Actions 的最新构建与 source 巡检报告。查询超时只重查原任务，不重做提交。本文的成功部署不能证明未来提交成功。
5. 按下面优先级核验，逐批更新 JSON、核验日志和 ROADMAP；没有新事实时不为凑提交反复刷新日期。

## 下一批具体任务

| 优先级 | 任务与可执行入口                                                                                                                                                                  | 保留的边界                                                                                                         |
| ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| P1     | 系列首轮后续公告已核验，余 CIOP 证书异常一项；优先 ISSCC2027 工业LBN10/7（非普通稿），并查 ACP、IPC、IRMMW-THz、OMTA、OPTIC、Photonics West；关注 FiO 进行中及 OFS-China 后续通知 | 9/30 首批已更新 OMTA 会期/最终轮/缴费和 Photonics West 幻灯片截止。旧 OFS-China 与 Laser Congress 截止不当未来提醒 |
| P1     | 补 JCR/CAS 版本与学科；跟进七刊 EI 缺口及中文 EI 补充刊的 SCIE 未核实身份                                                                                                       | 已有 SCIE 87、ESCI 12、EI 94 均为数据库依据；同一版公开表不重复扫描，缺匹配不等于未收录                            |
| P1     | 补已收录的未来会议：USQS 2027、CLEO/Europe–EQEC 2027、ICOLS 2027、ICO 2027、WSOF 2027                                                                                             | USQS 注册入口/现发布费率已补，退款年度待核实；欧洲 CLEO 征稿页仍为 2025；会期已知不代表投稿开放                    |
| P1     | 解决 deferred：NDTA 2026、CIOE 纳米压印论坛、CIOE 微显示论坛、OPJ 2026                                                                                                            | NDTA 酒店已有官方依据，中英文摘要长度仍冲突；两个 CIOE 活动日期/母子层级及 OPJ 终日有冲突，未解决继续暂缓          |
| P1/P2  | 继续每批审核 5–8 个系列：剩余 SPIE/Optica 专题与其他未审候选；跟进新入选 SPIE/OPIC 的字段缺口；APOS 2026 历史届次已入选                                                                    | 从 data/candidates.json 取真实当前状态；区分母会、分会、展览以及不同地区的 CLEO                                    |
| P2     | 跟踪候选 QCMC、UFO、EWOFS                                                                                                                                                         | QCMC 2027具体日城未知；UFO2025已收历史届，后续未知；EWOFS2027页面不完整，DH/ImageSense2027仅加拿大7月线索          |
| P2     | 继续逐刊补作者指南与费用，补材料/电子/物理交叉期刊近两年不同期次至少 3 篇光学论文样例                                                                                             | 已完成的细则见日志；只核实部分字段时不刷新整刊日期。样例需要真实题名、链接、发表日和适配理由                       |
| P2     | 审核更多中文 EI、生医、制造、器件期刊                                                                                                                                             | Q1/Q2 主合集按明确版本准入；EI 工程补充需确证 EI，不暗中改变收录门槛                                               |

## 已完成的近期批次

已新增/核实 ICORS 2026、USQS 2027、CLEO/Europe–EQEC 2027、CLEO-PR 2026；补 Nature Photonics、PhotoniX、eLight 投稿细则及后两刊带核验日期的 APC；核实 USQS DOCX 材料字段；补 HPL 两个刊号和历史 SCIE 线索。更多早期成果以日志为准，避免重新从零检索。

9/30 已完成临近会议批次 B 及 Compendex A1/A2 共 24 本的来源表核验。上表优先刊的 EI 部分已处理，下一批重点核对 SCIE/ESCI、分区及其他 EI；当日维护队列为 302 项字段任务，临近日期仍需按后续实际日期重生成报告。旧自动化保持暂停。

随后 A3 已补十二本当前 SCIE 的 MJL 数据库查询依据；维护队列降为 290 项字段任务。核心九刊、HPL 与 AIP 两刊的 SCIE 不需从零重复核验；继续 ACS 等剩余索引与分区、会议候选。

A4 再核对 ACS 六刊、Nature 五刊与 LPR，当前 SCIE 数据库查询依据累计 24 本，维护队列为 278 项字段任务。上述两批的当前 SCIE 已处理；继续剩余 IEEE、生医/制造/其他光学刊和会议系列审核。

C1 已审核六个会议系列，新增五届未来会议：SPIE Advanced Lithography + Patterning 2027、Medical Imaging 2027、Optical Metrology 2027、Astronomical Telescopes + Instrumentation 2028 和 OPIC 2027。APOS 因当届会期未核实仍为 pending。当前正式会议 40 届、候选 123 admitted / 143 pending / 3 deferred，维护队列 300 项字段任务；新增预告的征稿和注册缺口继续开放，详见 [会议证据页](CONFERENCE_EVIDENCE_2026-09-30.md)。A4 提交 c9c2516 的 Pages 构建、部署和线上版本已确认。

10/2 已补验收 C1 线上版本（与本地一致），读取当日来源巡检并重生成报告；临近日期复核无变化，补 Photonics West 官方 PW27 注册入口，费用与截止仍待核实。当前维护队列 296 项字段任务。用户已授权恢复五小时额度检查与持续续作，配置详情见下方；继续 IEEE、生医/制造等刊数据库证据及剩余会议任务。

A5 已核对 IEEE 六刊、Biosensors and Bioelectronics、IJEM、JBO、JCIS、Dyes and Pigments 的当前 SCIE，并将 Frontiers of Optoelectronics 的 ESCI 升级为数据库依据。SCIE 累计 52 本，其中 35 本 MJL 依据；ESCI 8 本，其中 1 本 MJL 依据。维护队列现为 284 项字段任务；继续其他核心、中文和交叉刊及出版社证据的数据库复核，EI/JCR/CAS 仍独立开放。B2 提交 bb22892 的部署与线上版本已确认。

A6 再核对十二刊，新增十条 SCIE、APN 的独立 ESCI，并升级 LAM 的 ESCI 证据。当前 SCIE 62 本（数据库 45）、ESCI 9 本（数据库 3），维护队列 273 项字段任务。APN/LAM 未转换为 SCIE；继续余下出版社依据的当前数据库核验、中文刊及 EI/分区与会议。A5 提交 55afdd0 的部署与线上版本已确认。

A7 将十二条已有 SCIE 出版社证据升级为 MJL 数据库依据，累计 SCIE 62 本（数据库 57）、ESCI 9 本（数据库 3）。A6 提交 812da14 已确认部署与线上版本。继续余下五条出版社 SCIE、六条出版社 ESCI、其他 EI/分区与会议任务。

A8 完成余下五条出版社 SCIE 和六条出版社 ESCI 的当前 MJL 核验，62 条 SCIE 与 9 条 ESCI 肯定记录现均为数据库依据。A7 提交 5df254f 已确认部署与线上版本；继续三刊的 Web of Science 身份、其他 EI/分区、会议、指南和样例缺口。

A9 补 Optica Quantum 的官方刊号与独立 ESCI，并确认十一条 IEEE/生医/制造 EI 来源表记录。当前 EI 53（数据库 35）、SCIE 62（数据库 62）、ESCI 10（数据库 10）。A8 提交 11cce82 已确认部署与线上版本；继续其余 EI 出版社/未核实记录及分区、会议与指南样例。

A10 核对 12 本 EI 来源表记录，新增 0 条肯定、升级 12 条出版社证据。当前 EI 53（数据库 47）、SCIE 62（数据库 62）、ESCI 10（数据库 10）；前批 7f6b06c 已验收部署与线上版本。继续其余 EI、分区、会议、指南和样例。

A11 核对 12 本 EI 来源表记录，新增 6 条肯定、升级 6 条出版社证据。当前 EI 59（数据库 59）、SCIE 62（数据库 62）、ESCI 10（数据库 10）；前批 dff0b61 已验收部署与线上版本。继续其余 EI、分区、会议、指南和样例。

A12 核对 8 本 EI 来源表记录，新增 8 条肯定、升级 0 条出版社证据。当前 EI 67（数据库 67）、SCIE 62（数据库 62）、ESCI 10（数据库 10）；前批 630e597 已验收部署与线上版本。继续其余 EI、分区、会议、指南和样例。

本轮现有 74 刊的公开索引身份核对已完成：SCIE 62、ESCI 10、EI 67 均有数据库方依据；两本中文 EI 刊的 SCIE 与七刊 EI 缺口仍保留。七刊公开表无匹配，后续查新版或出版社/机构平台，不重复同一版来源表。分区、会议、指南和样例仍是剩余任务，不能标整个规划完成。

## 数据与发布要求

- 官方当届通知优先；保留出处、核验日、证据等级、年度和适用稿型。旧届网页、历史索引、期刊推荐不证明当前录用/收录。
- SCIE 与 ESCI 分开；Scopus/SJR 不作 JCR；AIS 分区不作 JIF 分区；CAS 大类/小类与版本分别记录。不编造分区、覆盖年份和日期。
- 只有日期就用 date；确有时刻才用 at/timezone，未知为 null。期刊会后专刊截止不混入会议摘要 DDL。
- 正式会议须有当届官方身份及会期依据；暂无征稿的未来预告可收录，但须明确 unknown、待补规则。只有系列线索保留 candidate。
- 新正式条目要同步候选关联、README/ROADMAP/扩充计划的当前数量；历史执行记录中的数量不要全局替换。
- 数据批次：pnpm format 指定修改文件、pnpm validate:data、git diff --check；审查差异后提交并推送。功能批次另执行 pnpm test、pnpm typecheck、pnpm lint、pnpm build，必要界面回归见 UI_REGRESSION.md。
- 每批确认 pages.yml 对应提交 SHA 的构建和 deploy 成功，不能只凭 push 成功声称网站已发布。推送失败保留本地提交，下次优先补推。
- 不用额度重置券、不购买额度、不绕过审批；用户未要求多代理时不启动子代理。不要为达到“额度用完”重复无意义核验。

## 定时续作与额度

2026-09-15 暂停的 Codex 五小时续接任务已在 2026-10-02 按用户明确授权恢复。复用 automation ID `automation`，名称“光研导航额度恢复后继续”，状态 ACTIVE，目标为当前对话 `01a0f1e4-cf1c-7b92-bd55-665b4a9c0468`；未创建重复任务，未恢复其他项目自动化。调度设置属于本地应用，不随 Git 仓库迁移。

每次先检查实际账户额度，允许时持续推进剩余规划并逐批验证、推送、确认部署；本轮额度耗尽或系统限制时保存续接进度，等待下一次五小时调度重新检查。五小时检查不保证周额度同时恢复；不使用重置券或购买额度，不为消耗额度重复无意义核验。全部剩余规划确实完成后停用该任务；状态不变且无可执行进展时保持安静。

GitHub 仓库原有每日来源巡检仍保留：只报告变化/访问异常，不自动改写学术信息；网站检查更新按钮只读取已发布目录版本。暂停 Codex 续接不等于停用该 GitHub 工作流。

## 可复制的新对话提示

请接续 optics-scholar-hub 项目。先阅读 docs/RESUME.md、docs/ROADMAP.md、docs/VERIFICATION_LOG.md 和当前仓库状态，检查实际账户额度并重新生成维护与覆盖报告，再按计划持续推进。已有 101 本期刊、130 届会议、10 项活动是 2026-10-05 当前基线，以实际 JSON 为准。优先补临近会议、索引分区证据及待审核候选，未知或冲突保留。每批验证后提交推送 GitHub，按提交 SHA 确认 Pages 部署及线上版本。用户已授权本对话每五小时检查额度并续作，不另建重复自动化；直到额度受限或剩余规划确实完成，不重复已完成的功能。

C2 已复核六个会议系列，新增 APOS 2026 历史届次（1/31–2/2），补 OPIC 可读母会正文依据及下一步。正式目录 74 刊、41 届会议、9 项活动，候选 124 admitted / 142 pending / 3 deferred；前批 A12 已验收。APOS 历史截止版本冲突仍留空；ICOLS、ICO、欧洲 CLEO 无新事实，USQS 本轮访问失败。下一批继续分区、指南/样例和未审会议，不重复现有 67 条 EI / 62 条 SCIE / 10 条 ESCI 的同版数据库核对。

E1 已复核六本作者指南，五本补稿型、文件、入口或费用，Science Advances 安全验证限制保留。NC、两本 npj、Communications Physics、Science Bulletin 的已核实字段见 [E1 证据](JOURNAL_GUIDE_EVIDENCE_2026-10-02.md)，不从零重复这些字段；整刊日期、分区和索引不刷新，其他政策及交叉样例仍需补。C2 提交 822489d 已确认部署与线上版本，当前正式数量不变。

E2 为五本交叉刊补十六篇近两年光学样例，累计九刊至少三篇。三篇 Science Bulletin 正式论文来自不同期次，另有一篇在线校正稿；首次上线日期与卷期日分开。仅 scopeExamples 更新，前批 E1 提交 09a2bcf 已验收 Pages 37014294734 与线上版本。剩余指南、分区和候选仍继续。

C3 已审核七系列，新增南京 AOMTA/YSAOM 历史联合届、LiM 2027、SiPhotonics 2027（原 GFP）、SPIE Defense + Security 2027（原 DCS）及成都 AOMATT 2026。正式 46 届、候选 270（129 admitted / 138 pending / 3 deferred）。优先跟踪 10/7 SPIE 与 10/12 SiPhotonics 截止；AOMATT 摘要 9/30 与 10/25 官方冲突保留 null，早鸟明确 10/20 23:59 北京时间。YSAOM 独立层级及 OSD 2028 城市仍待核实。E2 提交 a3c6406 已确认 Pages 37016214730 和线上版本。

本地构建恢复说明：捆绑 Node 24.19.0 在 C3 构建完成后出现 Windows libuv 退出断言；官方 24.20.0 已含修复，本轮经官方 SHA-256 校验的便携二进制位于忽略目录 work/node24.20/node.exe，直接运行 vinext CLI 与 prepare-static.mjs 已通过。全局运行时及锁文件未改；恢复时若该临时文件不在，按官方发布页获取并校验，不把崩溃退出标成功。

E3 补六刊指南或收费：Advanced Materials 本刊稿型/材料，NML、SCM、Advanced Science、InfoMat、PRX Quantum 的官方 APC（区分录用/投稿日、税及减免）。ScholarOne 两入口被 403，仅确认官方链接，不声称登录后流程已核验；NML 邮件遗留与 SCM 版面费仍待补。C3 提交 56d1d9c 已验收 Pages 37018974566 和线上版本。索引、分区、样例及整刊日期保持，继续剩余任务。

E4 为 NML、SCM、PRX Quantum、InfoMat、Advanced Science 各补三篇近两年光学论文，累计十四刊至少三篇；SCM/Wiley/APS 另核对 Crossref 出版社登记卷期，NML 连续出版不造期号。仅改样例，索引、分区、指南和整刊日期保持。E3 提交 3fcbeeb 已确认 Pages 37019694610 和线上版本。其余规划继续开放。

E5 补 Optica、Optica Quantum、Photonics Research、OE、BOE、OME 的官方 APC、CC BY 资格及超页费，并补 AOP 不收发表费用。官方表生效日与核验日分开；只改 publishing，指南其他细则仍待核实。E4 提交 0db3677 已确认 Pages 37021346286、线上首页/版本 HTTP 200，与本地版本 c9fa4cd07471f4ef9f1e69451b34e3078d74403b068a491b1b6c55e403178677 一致。

E6 为 OE、BOE、OME、Photonics Research 和 Optica Quantum 补本刊入口、Word/LaTeX 模板、预印本及会议扩展规则；OME Opinion 的四页限制与研究稿分开。只改 guide/requirements，研究稿篇幅与摘要等未核实内容仍开放。E5 提交 e168b1f 已确认 Pages 37021874250、首页/版本 HTTP 200，与本地 24071643c290bda2af127324d0fcac00019e6d68606b8877d6e97ffba70368e1 一致。

E7 补 JOCN 专用模板、Prism 稿件分类、可选作者简介/照片阶段及超过 15 页需事先批准规则；同时补 JOCN、Optics Letters 的自愿页费与可选 OA，OL 印刷彩色另收费。只改两刊对应 guide/requirements/publishing，索引、分区、样例和整刊日期保持。下一批继续其他核心刊指南、分区版本和未审候选；已核实同版索引不重复扫描。额度实际不足时保留此检查点，五小时自动化按现有配置检查实际账户额度后续作。

E8 补 LSA、Nanophotonics、HPL、AP、APN 五刊的本刊指南、模板/稿型/公开入口和费用；NANO 当前下载的指南为 2025-03-31 版，LSA 为 2026-01-15 版，版本与核验日分开。AP/APN 逐刊读取，不套费率；HPL 初投/原则录用文件分阶段。只改 guide/requirements/publishing，其他字段保持。E7 提交 1442598 已确认 Pages 37040892020 与线上 6377eeeb…，当前维护队列 223 项，剩余任务保持开放；[E8 来源与边界](JOURNAL_GUIDE_EVIDENCE_2026-10-03.md)。

E9 补 TMI、TIP、TGRS、JLT 四刊投稿/正式页数、文件和费用；TMI 初投 10 页与正式超 8 页收费分开，TGRS 2026 规则与 1/1 边界保留，JLT 当前通用八页与 2026 专题七页差异明确。只改 guide/requirements/publishing。E8 提交 60e68cb 已验收 Pages 37042440728 与线上 bd15d286…；验证/提交/部署仍按最新日志收尾。其他 IEEE、生医/制造、中文刊、分区/会议候选继续开放。

E10 补 JBO/Neurophotonics 独立作者指南与 APC，以及 APL Photonics 的明确 Gold OA 费用和 APR 的通用 Author Select 政策边界。JBO 五段摘要、Neurophotonics 未列结构标题与 Data Paper 数据公开规则分别保留。E9 提交 10850ae 已确认 Pages 37043688668 和线上 15900bb9…；验证与新提交的部署收尾看最新日志，未将全部规划标完成。

E11 补 AOP 提案具体材料与非硬性四十页建议，Optica 的公开评审通信、两周转刊窗口及媒体/预印本边界；未发送邮件或请求转刊。AOP 仅 guide/requirements、Optica 仅 requirements 更新，费用等其他字段保持。E10 提交 58ac01a 已确认 Pages 37044291954、线上 60d8a99b…；下一批仍可继续其他刊指南、分区/会议候选与样例，按实际额度保存续接。

E12 修复 OEA 旧指南 404，核对 OEA/OES 当前通用稿型、初投/返修/校样及费用。跨两刊收费表备注经截图确认豁免至 2026 年底，其他刊 2027 推广不套用；正文词数为建议，2027 过渡/税/版本时点保留未知。E11 提交 cf87ba5 已验收 Pages 37044727487 和线上 862791a5…；当前草稿验证/提交/部署进度见最新日志。实际额度限制时保护未提交文件，不使用重置券；其余计划继续开放。

E13 补 OEA/OES 数据可用性与补充材料规则：ScienceDB 出版阶段存储、共享范围/例外、禁运和合理请求、DAS 位置及 SI 当前 30 MB 上传限制分别记录。仅 requirements 更新，独立代码规则与模板源码内容仍未知。E12 提交 f4166f8 已补验收 Pages 37045266202 和线上 b762d13f…；本轮实际额度五小时/周均恢复允许，未使用重置券或购买。当前批次验证及部署状态见最新日志；其余规划保持开放。

C4 审核六个未审系列及新确认的联合母会，新增 Optics + Photonics 2027、Sensors + Imaging 2027、Electronic Imaging 2027 三届。正式 74 刊/49 会议/9 活动；候选 271（132 admitted / 136 pending / 3 deferred）。Photonics Europe 2028 与 Photomask 2027 城市仍未知，保留候选；欧洲遥感/安全子系列不重复计母会。EI 首页延期、旧 CFP 与已关闭系统冲突，摘要截止 null、状态 closed。E13 bdffcf8 已确认 Pages 37073169839 与线上 77b6ae8d…；本批验证/提交/部署见最新日志。下一批继续薄弱方向候选、分区及期刊指南/样例。

A13 针对六刊读取官方指标及相关公告入口，均未取得可直接录入的 JCR 学科分区；CAS 官方入口本轮不可读，未采纳二手停发说法或新锐分区替代。只保存核验范围，全部 JSON 和日期保持，JCR 61/CAS 10 不变。[范围与后续入口](RANKING_EVIDENCE_2026-10-03.md)。C4 ab98d31 已确认 Pages 37074836786 构建/部署成功，线上首页及版本 HTTP 200、2c5e8103… 与本地一致。后续转 NML 收费冲突、其他刊指南和未审候选，不重复这六刊同版指标页。

E14 为 AFM 补研究稿建议/摘要、返修制作、TOC、数据声明及领域清单；ACS Photonics、ACS Nano、Nano Letters 各补本刊 Fast Format、SI 分类和数据政策，鼓励与强制分开。NML 保留出版社现价并显式记录独立刊站免 APC 冲突。仅四刊 requirements 与 NML publishing 改变；[逐字段证据](JOURNAL_GUIDE_EVIDENCE_2026-10-03.md)。A13 bd1b3c1 已确认 Pages 37075731347 和线上原目录版本，首次连接超时只复查同一部署，未重复提交。其他指南/分区及候选仍继续。

C5 审核六个既有系列及新确认的 ImageSense 母会，新增两届未来预告（IODC 2027、OIC 2028）及四届历史会议（Advanced Photonics 2026、Imaging 2025、ISLC 2026、ImageSense 2026）。正式 74 刊/55 会议/9 活动；候选 272（138 admitted / 131 pending / 3 deferred）。NP 隶属已收母会仍 pending，旧 Imaging 与 ImageSense 的继承关系未证实，不强行合并。[字段来源与层级](CONFERENCE_EVIDENCE_2026-10-03.md)。E14 a21e0a0 已确认 Pages 37076180292 与线上 7769c8aa…；本批必要验证已通过，提交与部署结果见最新日志；其他规划继续。

E15 审核六刊作者细则，更新 OPE/CPL/中国激光/光学学报/进展五刊相应投稿字段；IRLA 访问失败保留原缺口。三刊现主稿及各自长摘要、收费文件逐件核验，建议/硬限、稿型与文件版本分开，CPL 页限及 OPE 审稿/入口冲突保留。[来源与范围](JOURNAL_GUIDE_EVIDENCE_2026-10-03.md)。数量、索引/分区、样例及其他字段不变，其他规划继续。

A14 为 Photonic Sensors 补主办方编辑部明确声明的两项 JCR Q1 排名与三项 CAS 一区；发布年2026和指标年2025分开，CAS 2025具体版本仍待核实。当前 JCR 62/CAS 11；六本中文刊未得完整版本/学科证据，不造分区。[逐字段范围](RANKING_EVIDENCE_2026-10-03.md)。E15 8f8cece 已验收 Pages 37088078536 与线上 926500b4…；其余规划继续。

C6 审核 PHOTONICS、PSC、OI/OIP、OPJ、SUM、CHILAS、UP 七系列，新增六届：PHOTONICS 2026、PSC 2026、OIP 2026/2027、SUM 2027、UP 2026。正式74刊/61会议/9活动，候选272（143 admitted / 125 pending / 4 deferred）。OPJ终日官方冲突暂缓，CHILAS与HILAS关系未知；历史/未来规则分开，早鸟和出版冲突保留。[逐字段证据](CONFERENCE_EVIDENCE_2026-10-03.md)。A14 3374738 已验收 Pages 37088948448 与线上861ad4a4…；其他规划继续。

F1 按既有 EI 工程补充路径审核并新增 Applied Optics、JOSA A、JOSA B、Optical Engineering、Applied Physics B 五刊，未假定 Q1/Q2；五刊 SCIE/EI 均取得数据库方依据。正式79刊/61会议/9活动，候选272（148 admitted / 120 pending / 4 deferred），JCR62/CAS11、SCIE67/ESCI10/EI72。JOSA B 2026 S2O 与 APB 2026全面OA分别核实，动态费用及旧指南冲突保留。[逐字段证据](JOURNAL_ADMISSION_EVIDENCE_2026-10-03.md)。C6 130b6fe 已确认 Pages 37089602380 与线上 ac05ac43…；其他规划继续。

E16 补 COMST、Proceedings of the IEEE、TCYB 三刊稿件/费用边界。COMST收费上限不放宽投稿页限；Proceedings35页为建议；TCYB摘要和无版年费用与2026通用表冲突保留。仅三刊 requirements/publishing 更新，79刊/61会议/9活动及所有索引分区/样例保持。[来源范围](JOURNAL_GUIDE_EVIDENCE_2026-10-03.md)。F1 4c84a05 已验收 Pages37090491637 与线上ed5fd15d…；TIE现入口与旧PDF访问失败未更新，后续继续。

C7 审核显示/激光加工五系列，新增 IDW 2026、IMID 2026 历史届次、SID Technical Symposium 2027、ICALEO 2026 四届。正式79刊/65会议/9活动，候选272（152 admitted / 116 pending / 4 deferred）。LPM当届正文/证书受限保持pending；SID整周/研讨会日期、摘要措辞、注册版本与ICALEO价格阶段边界分别保留。[逐字段来源](CONFERENCE_EVIDENCE_2026-10-03.md)。E16 c902a0e 已验收 Pages37090802393 与线上602848d8…；其他规划继续。

E17 为 eLight/PhotoniX 追加 cover letter、软件数据声明、补充文件20MB及各自匿名/公开审稿边界，仅 requirements 改变；现有稿型/费用/索引/分区/日期保持。[逐字段证据](JOURNAL_GUIDE_EVIDENCE_2026-10-03.md)。C7 780ea0a 已验收 Pages37091630582 与线上f28d7a8a…，当前79刊/65会议/9活动、272候选152/116/4。实际97%五小时额度仍允许，其他规划继续开放。

E17 9a95742701a079209da4a807c9da1b592552a5a1 已验收 Pages37091880262：build/deploy成功，首页/版本HTTP200，4ea17d81191c215f562ba7f24a6fbed338d94983f0f6240e2dd0650a9d730990与本地一致（2026-10-03T03:04:36.391Z）。当前79刊/65会议/9活动、272候选152/116/4。下一轮可接续[F2 APS预核验](JOURNAL_CANDIDATE_EVIDENCE_2026-10-03.md)，已核身份/刊号与六条EI源表，仍待MJL、三刊完整指南/费用、交叉样例及正式准入。实际五小时已用99%/周15%；不使用重置券，额度不足时结束本轮，由已有五小时自动任务重新检查，不另建任务。

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

C13新增DH2026和UFO2025两历史届次，正式85刊/72会议/10活动、66稳定系列、273候选161/108/4。UFO完整历史材料/费用及延期日期已读，CET解释待核仅date；DH/ImageSense2027只加拿大7月线索。QCMC/EWOFS/ARVRMR仍pending，[逐字段范围](CONFERENCE_EVIDENCE_2026-10-03.md)。S2 3326d9e79650568405d3dd889e39fc1d73c5b684已验收[Pages37116311255](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37116311255)：build/deploy成功，首页/版本HTTP200，4d810d2bf24c7d9995a72e1ea98ca6b38bd091931d42a77a2ab357700f4d211f与本地一致（2026-10-03T10:25:39.234Z），同SHA完整30项测试/typecheck/lint等CI成功后编辑。 下一批继续制造、生医、红外/遥感候选及现有指南、分区/样例；不重复本批相同页面。

E18为AO/JOSA A/JOSA B补通用样式和补充材料细则，约100词摘要/视频15MB建议不写硬上限；仅requirements，费用/日期/索引分区保持，[证据](JOURNAL_GUIDE_EVIDENCE_2026-10-03.md)。C13 3998d91aa6037c90beb31b6be4039abd3f794bf5已验收[Pages37117128691](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37117128691)：build/deploy成功，首页/版本HTTP200，3ad612188bff38ad228a6927756ef4b8690337756e31e1b0a7be285bcab87a3d与本地一致（2026-10-03T10:40:12.624Z），同SHA完整CI成功后修改。 数量85/72/10、66系列、273161/108/4保持；继续剩余制造、生医、红外/遥感候选及指南、分区/样例。

C14新增NLO2025历史与IGARSS2027未来，当前85刊/74会议/10活动、68系列、273候选163/105/5。ISDH2026终日/星期冲突为新增deferred，需大学公告/准确日程核对，未生成正式记录；IGARSS模板/注册入口及费用待补，[字段证据](CONFERENCE_EVIDENCE_2026-10-03.md)。E18 6457c1dc18b89729c07a8a953257cdcdd31e8c6a已验收[Pages37117365046](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37117365046)：build/deploy成功，首页/版本HTTP200，88ca2a463d28eb47bde13ef3eb8b3bde225c198a7e6589e66917433bbdb8534f与本地一致（2026-10-03T10:45:11.182Z），同SHA完整CI成功后编辑。 其他规划开放，继续原五小时任务，不恢复无关旧自动化。

C15新增ICCP2027，现85刊/75会议/10活动、69系列、273候选164/104/5，双匿名/PAMI与会议路径、17:00太平洋时间已保存，[字段来源](CONFERENCE_EVIDENCE_2026-10-03.md)。C14 01345fc0f084e9ae992451d1a96d89a9cd4bbcfa已验收[Pages37117764585](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37117764585)：build/deploy成功、首页/版本HTTP200，11783a94ce52b4e769ea7043e2c9f86832c0e6854acccb162631c450cc7a7ba5与本地一致（2026-10-03T10:53:44.850Z），完整同SHA CI成功后编辑。 下一批优先ISPRS2026/2029/2030（预核在work/C15_RESEARCH_2026-10-03.md），继续确证范围/场馆/规则；ICCP动态正文的来源端点、ISBI具体当届资料未核实，其他规划开放。已有五小时任务保持，不恢复无关自动化。

C16新增ISPRS2026历史与2030预告，2029具体日期未知仅线索；当前85刊/77会议/10活动、70稳定系列（7个多届）、273候选165/103/5。[字段证据](CONFERENCE_EVIDENCE_2026-10-03.md)。C15 0720633c066f6f1496cacb5bb009e47ca17a7202已验收[Pages37118113485](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37118113485)：build/deploy及完整CI成功，首页/版本HTTP200，8825712958e671bcd09c48aec8a612a36cc446aa1195429b89e187fe5413f112与本地一致（2026-10-03T13:27:36.417Z）。 新额度窗口允许继续；下一步解决ICCP动态正文巡检来源端点，继续剩余候选、逐刊指南/样例与临近字段。2030规则未知，不复用2026。已有五小时任务保持，其他规划未完成。

S3将ICCP2027实际公开加载的Home/CFP正文HTML追加到系列sources，现有每日text指纹可以监测已核两页；仅单届notes说明变更，所有学术事实/日期/计数保持。[实测与边界](MAINTENANCE.md)。C16 6839ca0a47cdca5f56e7e047c3f5f8b80551c5ab已验收[Pages37126973432](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37126973432)：build/deploy及完整CI成功，首页/版本HTTP200，685af700e2eeb7c82e774e71a726961fac16b4a5fbdf370a4afb1cbd275817c9与本地一致（2026-10-03T13:42:10.903Z）。 下一批ISBI2027已有实际当届官网线索，须核CFP、光学子集、场馆和EDT跨季节时区歧义；不可凭旧提案准入。继续其他规划，既有五小时任务保持。

C17新增ISBI2027与IISW2027，当前85刊/79会议/10活动、72系列/7多届、273候选167/101/5。[字段证据](CONFERENCE_EVIDENCE_2026-10-04.md)。S3 c8fba752d74bb211feed202fd996030794d88aac已验收[Pages37127257725](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37127257725)：build/deploy及完整CI成功，首页/版本HTTP200，86ed484bf56a6cfebdb4b87b00b889858565d187d85b4ff6f0ab9ec903dba34b与本地一致（2026-10-03T13:47:07.575Z）。 PDF下载调用异常延迟后10/4重新核实际额度0%/周33%允许及干净GitHub状态，继续工作。下一步补PDF公告变化信号（现仅可达性）、国内光子学2025/26时间线与其他待核候选；不重复系列功能，已有五小时任务保持，其他规划未完成。

## 2026-10-04：PDF 公告变化巡检 S4

C17 a0d9e659dc8d2e9931202db190361df72a1224c7已验收[Pages37181016074](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37181016074)：build/deploy及完整CI成功，首页/版本HTTP200，15aec460873e0fd037776d0930272564fcd97c777506fc4d8c1e6385d027561e与本地一致（2026-10-04T05:51:29.380Z）。 S4 为显式 PDF 增加字节变化信号及文件头验证；PDF 5MB，文字/图片仍 2MB/15秒，失败保留基线。[维护边界](MAINTENANCE.md)。31项测试、typecheck/lint/数据校验及真实两官方PDF隔离 baseline/unchanged 已通过；只监测变化，不提取或自动发布事实。所有目录 JSON、数量和既有调度保持。下一批国内光子学2025/2026同系列往届核验，先确认当届日期/场馆，不推算2027，不将2025 SPIE路径迁入2026。其他规划继续，额度允许，不用重置券。

## 2026-10-04：全国光子学时间线 C18

S4 ecf3c4adf9a2c11ea7dbb71b1f68af66f300465c已验收[Pages37181592830](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37181592830)：build/deploy及完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，15aec460873e0fd037776d0930272564fcd97c777506fc4d8c1e6385d027561e与本地一致（2026-10-04T06:02:45.871Z）。 新增2025/2026两历史届次与一个稳定系列；当前85/81/10、73系列/8多届、273候选168/100/5。[逐字段范围](CONFERENCE_EVIDENCE_2026-10-04.md)。实际2027承办单位南昌大学已知，日期/城市仍未知只留线索；8/16返程不作会期。2026大PDF需人工读取，2025SPIE/历史费用不迁入后届。下一批Photonics Asia2027官方拟10月3天线索待维护，其他候选/指南/样例继续；五小时任务保持，未用重置券。

## 2026-10-04：基础光学与Asia维护 C19

C18 6a92ed20a3efd9cf19fccc1df10faa7c85ba4ede已验收[Pages37181983389](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37181983389)：build/deploy及完整CI成功，首页/版本HTTP200，50c64adf6f1d01e2b2272c4d55b2fa3deb62a790237c4ae46809a751a820044c与本地一致（2026-10-04T06:11:12.025Z）。 新基础光学2025历史届；Asia2026补全文10/7、海报PDF9/30、报告与注册/收费退款边界，旧closed摘要/整条核验日保持。[逐字段出处](CONFERENCE_EVIDENCE_2026-10-04.md)。2027只拟10月3天线索，无具体日城；当前85/82/10、74系列/8多届、273169/99/5，维护321项/后续两项。基础光学原站证书问题未绕过，材料/后续日期未造；继续量子/材料/器件候选、逐刊指南样例与分区索引，额度允许，既有五小时任务保持。

## 2026-10-04：量子与AMO未来准备 C20

C19 f146b13209e44c8ef0b5d0ee286c081f33ed32b2已验收[Pages37182355400](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37182355400)：build/deploy及完整CI成功，首页/版本HTTP200，1598180e6f0d645ba2c50a6499f3687e8f1461b17f843ce18789ec7659f988ba与本地一致（2026-10-04T06:20:08.621Z）。新增QIP/DAMOP/GPS 2027与三个稳定系列，[逐字段范围](CONFERENCE_EVIDENCE_2026-10-04.md)。QIP登记前提/独立海报与IAQI终年错误、APS日期时区未知和会员不同页面边界均保留。当前85/85/10、77系列/8多届、273172/96/5，维护329项。下一批回期刊指南/交叉样例及器件材料候选，其他规划未完成；实际五小时31%/周38%允许，未用重置券。

## 2026-10-04：生化传感作者指南 E19

C20 5c0fc68746a0ece6dbd2b0c9b30355e5f345365e已验收[Pages37183109619](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37183109619)：build/deploy及完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，659556a381f6e90c3f913d752268392157ff2af3f592812c831f309b60fb1026与本地一致（2026-10-04T06:34:16.279Z）。 BIOSBE/SNB当前指南普通浏览器读取成功，补稿型篇幅、综述提案/仅邀请区别、Highlights鼓励/必需、数据可用性和源文件；APC分别USD5440/4890不含税，订阅无OA费不等于全免费，[逐字段范围](JOURNAL_GUIDE_EVIDENCE_2026-10-04.md)。仅两刊requirements/publishing，整刊日期与其他目录保持。当前85/85/10、77系列/8多届、273172/96/5保持；继续交叉论文样例、其余候选与索引分区。

## 2026-10-04：ACS Nano / Science Advances适配 E20

E19 631927d8e1e4fb0bf0cd43d0fc0ce344a4757bfe已验收[Pages37183364095](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37183364095)：build/deploy及完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，9f52fa463c37ad08fc9b179819a8404f79fa9eacba11a98137a5719628794601与本地一致（2026-10-04T06:38:59.741Z）。 两刊各三篇近两年独立期次样例，保存出版社原题/DOI、首次日及光学适配，[逐篇范围](JOURNAL_SCOPE_EVIDENCE_2026-10-04.md)。两scopeExamples字段变化，整刊日期/指南费用/索引分区及其他数据保持；至少三篇样例刊数现22。85/85/10、77系列/8多届、273172/96/5保持，继续传感/生医及器件交叉刊样例、其他规划。

## 2026-10-04：传感样例与Science Advances准备 E21

E20 80d6b09d8f599178561b9422d39680ee50dac698已验收[Pages37183642235](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37183642235)：build/deploy及完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，309e859fe34019811b0cb957d098827bf40f2d5cb9b0bb32896c7e74c2deeefd与本地一致（2026-10-04T06:44:52.005Z）。 ACS Sensors三独立期次光谱/生物/便携样例使至少三篇刊数23；Science Advances当刊篇幅、150词摘要、文件/ORCID/评审资料、USD5450基础APC与减免边界已核，分别见[样例](JOURNAL_SCOPE_EVIDENCE_2026-10-04.md)/[指南](JOURNAL_GUIDE_EVIDENCE_2026-10-04.md)。只指定字段，完整核验日/索引分区/其他JSON保持。实际五小时46%/周40%允许；85/85/10、77系列、273172/96/5保持，继续材料/器件候选及其余期刊、临近/冲突规划。

## C21 器件/传感广度与未来深度（2026-10-04）

E21 45c8ee77c9a4039f66051c1ce3e29043c234a990已验收[Pages37183967735](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37183967735)：build/deploy及完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，8a43be02d3bff44c95a96fb80bb3ebcdbc925a7787bf5834b1cdfba2c212f77d与本地一致（2026-10-04T06:51:37.413Z）。 新增MEMS2027、SENSORS2026、IEDM2026/27/28及VLSI2027，四个稳定系列；正式85/91/10、81系列/9多届、273候选176/92/5，23刊样例与分区索引保持。[逐字段范围](CONFERENCE_EVIDENCE_2026-10-04.md)。两开放海报不出版，SENSORS10/5已录用展示文件与10/16新海报分开；MEMS10/27与系统12/4、SENSORS通知8/23–24等冲突保留。未来IEDM稿规/费用未知，VLSI详细指南尚待发布；其他材料/中文候选、期刊指南样例与索引分区继续。实际五小时51%/周41%允许，未用重置券；既有五小时任务保持。

## C22 材料系列与2030未来深度（2026-10-04）

C21 15316fae6cbca5a674d233f9d814afe94f5a8e21已验收[Pages37184918851](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37184918851)：build/deploy及完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，490b7e5d3bc18f4bd1a741b8a4ca501df3ffa7576972dcaf4e04f74477afd7c5与本地一致（2026-10-04T07:11:11.580Z）。 新增MRS Spring2027–2030/Fall2026及E-MRS春秋2026/2027共九届、四系列；当前85/100/10、85系列/12多届、273候选180/88/5，23刊样例及分区索引保持。[逐字段范围](CONFERENCE_EVIDENCE_2026-10-04.md)。MRS2027摘要10/14精确ET、4000字符/无图/SUBMIT及12月中旬通知已核；远期城市会期明示但场馆/规则未知。E-MRS历史3000字符/各届海报和费用分别保存，2027组织提案不是普通摘要；CET歧义留日级。下一批回逐刊指南/材料交叉样例、其他候选与临近维护；实际五小时65%/周44%允许，未用重置券，既有任务保持。

## 2026-10-04：生化传感六篇光学样例 E22

C22 ef63a86d3f01f8c58b4c440b4d89b595248002e9已验收[Pages37185777328](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37185777328)：build/deploy及完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，153394d1f462d472353f085cdbe90c9c0eb75ed45eb3a100f5d6df9cf8ed7881与本地一致（2026-10-04T07:27:13.423Z）。 两生化传感刊各三独立卷、近两年原始论文，核出版社页头/摘要及Available online、Version of Record、期次日期，[逐篇范围](JOURNAL_SCOPE_EVIDENCE_2026-10-04.md)。只两scopeExamples，整刊日期/索引分区/指南费用和其他目录保持；25刊≥3样例。85/100/10、85系列/12多届、273180/88/5保持，继续器件/材料及其他交叉刊样例、指南/候选和分区。

## 2026-10-04：欧洲2027开稿准备 B4

E22 5a748975a7f3b831007319dc246f272a094b5590已验收[Pages37186160819](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37186160819)：build/deploy及完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，f4932634970e9d14d1fc6d072c5e27b997f17282f427e8ac7a15ad17504ed61b与本地一致（2026-10-04T07:34:27.756Z）。 已补CLEO/Europe–EQEC2027大会表10/5计划开启/2/15关闭，SPIE光学计量2027十月中旬/2/17关闭，均日级；详细子会指南仍2025。三既有会共用报告准备/六月初上传凭据预告及对应系列每日追踪源，[字段范围](CONFERENCE_EVIDENCE_2026-10-04.md)。LiM原精确1/31保持。只部分字段、不刷新整条核验日，85/100/10及25刊样例/其他计数保持；继续本届细则与费用、其他指南/候选和索引分区。

## 2026-10-04：SPIE制造/欧洲时间深度 C23

B4 64ba2ca557eba428f0f673780451319e536156e0已验收[Pages37186450463](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37186450463)：build/deploy及完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，e997ae29f033da056ae5aed070453e1a5826f9ab1ced1a04634fcb9fa3147a6e与本地一致（2026-10-04T07:40:53.417Z）。 新增三系列三历史届：Photonics Europe、Optical Systems Design与Photomask+EUV各2026历史；2027/2028只有日期的预告保留后续线索，[逐字段范围](CONFERENCE_EVIDENCE_2026-10-04.md)。未来只明示日期，城市未当届确认，沿用原准入口径只保存线索，不建正式未来届。当前85/103/10、88系列/12多届、273候选183/85/5；25刊样例/分区索引保持。LPM原站证书不匹配未绕过，保留pending及已观测线索。每日巡检最新37184564015（Oct4 07:01:51Z scheduled）success，仅已读元数据，未声称读完附件。继续本届稿规/未知字段、中文/薄弱候选、交叉样例及分区。

## 2026-10-04：胶体界面作者准备 E23

### 本轮交接：余额不足以再开完整批次

E23 a5e2fc2c38ff7412fe7a5ca680c020787244e197已验收[Pages37187612957](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37187612957)：build/deploy及同SHA完整CI成功，首页和版本HTTP200，fce85f64fa7ddd533d6a658c68153f3937ccb3c37b02a91516816a6c903368a8与本地一致（2026-10-04T08:03:36.912Z）。最新实际额度五小时99%/周49%，普通使用仍允许；剩余额度不足以可靠完成下一完整核验批次，本轮保存交接后结束。下次既有五小时调度先重新查实际额度、GitHub HEAD及交接文档提交部署，再继续下方待办。不用重置券、不买额度、不绕过限制；规划仍未完成，不停用已有检查、不恢复旧任务。此交接只文档，不改变线上目录摘要。

发布前最新额度：五小时97%/周48%，普通使用仍允许；本批本地必要验证已通过。先确认该次推送SHA的Pages和线上目录版本，再按实际剩余额度判断是否足以完成下一批；不足时结束本轮，既有五小时检查重新核额度。不可把已接近限制写成系统已拒绝使用，不能用重置券或购买额度。

C23 2a6036bc3d39f5c2f7f85b49d1f67146562ce731已验收[Pages37187049524](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37187049524)：build/deploy及完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，89b0b4e07aa01bf42e2d7fb65f8221c999c79be2d248bbed1e5a17ad30f8e9a3与本地一致（2026-10-04T07:57:04.469Z）。 JCIS本刊稿型/250词摘要/结构/图形摘要/一面A4附信/通常55引用、Option C数据与USD4820不含税OA及24个月自存档已核，[逐字段范围](JOURNAL_GUIDE_EVIDENCE_2026-10-04.md)。只两字段，原范围/整刊日期/索引分区/样例及其他84刊和其他JSON保护；85/103/10、88系列/12多届、273183/85/5、25刊样例保持。 下一轮优先Dyes and Pigments当前指南、TIE当前投稿入口、材料交叉样例及剩余候选/临近维护；SPIE未来城市待官宣后再建届，欧洲2027稿规待本届发布。实际五小时95%/周48%仍允许，剩余额度先保障本批推送和部署验收；接近限制时保存进度，既有五小时检查继续，不恢复旧任务、不用重置券。

## 2026-10-04：新窗口两刊指南 E24

交接8ad95d30bd3e40741f94354f3827b9a74169d543已确认[Pages37187756331](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37187756331)：build/deploy及完整CI成功，首页/版本HTTP200，fce85f64fa7ddd533d6a658c68153f3937ccb3c37b02a91516816a6c903368a8与本地一致（2026-10-04T13:07:37.373Z）。 实际额度0%/周49%允许，干净GitHub HEAD一致；最新每日37184564015成功，仅元数据已读。Dyes and Pigments当前短文/提案、Highlights/图形摘要、化合物/光谱资料、Option C与USD3850不含税已核；TIE当前10/12页与4/6页、机构邮箱/ORCID/硬件实验、2026 US$2800及范围排除已核，旧最终文件页8/10页和超页价冲突明确保留，[逐字段范围](JOURNAL_GUIDE_EVIDENCE_2026-10-04.md)。只指定六字段、原范围条/完整核验日/分区索引/样例与其他83刊及所有其他JSON保持。85/103/10、88系列/12多届、273183/85/5及25刊样例不变。 继续材料交叉样例、剩余会议/中文候选、临近字段和未知分区；TIE摘要PDF/模板内部及当前超页单价仍待核，不以旧页面补造。既有五小时和每日来源任务保持，不用重置券、不恢复旧任务。

## 2026-10-04：胶体/有机荧光六样例 E25

E24 ac8c06c1fd0f172d6491638e3c201e6a8f2058f0已验收[Pages37205097390](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37205097390)：build/deploy及完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，74a50336a2631a7205e7d80aae9b6346d66fcdf888b27b15e2740bc15ae362c0与本地一致（2026-10-04T13:18:26.719Z）。 JCIS/DYPI各三篇不同卷近两年原始光学论文，核出版社原题/DOI/公开摘要及首次在线、VOR与期次，[逐篇范围](JOURNAL_SCOPE_EVIDENCE_2026-10-04.md)。结构色自组装/水凝胶/涂层及有机比率/NIR/潜指纹成像分开；未来月份期次已在此前上线，不造月份中的具体日。仅两scopeExamples，其他83刊/旧25刊样例、指南/日期/分区索引及全部其他JSON保持，至少三篇刊数25→27。85/103/10、88系列12多届、273183/85/5保持。 实际新窗口8%/周50%仍允许，继续材料/工程/生医交叉样例及剩余会议候选，临近DDL/分区/指南缺口仍开放；TIE光学范围边界保留，不混用另刊/综述。既有每日与五小时任务保持。

## 2026-10-04：计算成像三系列四届 C24

E25 5ff50f881bc8aad31a0cbfe74a4efd619c391af5已验收[Pages37205969850](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37205969850)：build/deploy及完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，3bd877043515fffde7a22326dbf3b01e06ab7e4e5f46b9dcd2ce22fcddbf0812与本地一致（2026-10-04T13:36:06.744Z）。 三候选新增CVPR2026/2027、ECCV2026、ICCV2025四届，计算成像/相机/重建与显微子集条件适配；完整活动与主会/Workshop日期分开，往届模板不迁未来。[逐字段来源](CONFERENCE_EVIDENCE_2026-10-04.md)。ICCV2027两官网日期冲突未入正式届，2025通知差异保留null；CVPR2027指南404保留篇幅未知。当前85/107/10、91稳定系列/13多届、273候选186 admitted/82 pending/5 deferred、27刊至少三篇样例；分区索引与其他JSON保持。其他规划继续，既有五小时和每日来源巡检保持。

## 2026-10-04：原子物理时间线与芯片稿轨道 C25

C24 d5ecd3bdcbc681f227806bb718bab93da1763489已验收[Pages37206875465](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37206875465)：build/deploy及完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，6fe215c9f4ca55c98cdcb93cc35fa96b88d25cc9efaf551ba8962b823dada18f与本地一致（2026-10-04T13:49:18.526Z）。 两候选新增ICAP2024/2026历史与ISSCC2027，共三届/两系列。ICAP保留A0/费率的届次边界；ISSCC普通已关闭，工业LBN10/7意向限2027推出产品/最多4篇，SRP10/21学生展示独立，不当普通稿延期，[逐字段来源](CONFERENCE_EVIDENCE_2026-10-04.md)。当前85/110/10、93系列/14多届、273候选188 admitted/80 pending/5 deferred，27刊样例/分区索引保持。后续ICAP日城和ISSCC注册/LBN模板/SRP出版仍开放；其他规划继续。

## 2026-10-04：医学光学历史与未来 C26

C25 e764b139e28a30c172b066105a4fd1eedd0c9c4d已验收[Pages37207744738](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37207744738)：build/deploy及完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，d57cd321fc0b8007ef4cb1f7502cdf3386dfe256650d7603cce5cd93641bf85c与本地一致（2026-10-04T14:09:09.587Z）。首次push连接超时后补推同提交成功；一次线上TLS重置后只复查原部署，未重复提交。 MICCAI新增2026历史与2028圣保罗官方预告，两届共一稳定系列；2027两个Society页面9/26与9/27起日冲突，未进正式届。2026主会论文目录的光片荧光显微/共聚焦内镜/光声子集已核，未来稿规与注册未知，不套旧8+2页。当前85/112/10、94系列/15多届、273候选189 admitted/79 pending/5 deferred，27刊样例和分区索引保持。[逐字段范围](CONFERENCE_EVIDENCE_2026-10-04.md)。其他规划继续。

## 2026-10-04：光声/制造指南与出版 E26

C26 0a5d150765de54d18a12deb4a688105abb5e58fe已验收[Pages37208657675](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37208657675)：build/deploy及完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，95b25becae39a0c34431c3623b3bcdab2df7280b208637f357ca6678adcaa561与本地一致（2026-10-04T14:19:41.538Z）。 Photoacoustics补本刊Letter8初稿页/2000词/5图表与4印刷页、250词摘要、建议Highlights/图形摘要、Option C及USD4070不含税；IJEM本刊IOP About明确编辑部资助CC BY作者无费，并补本刊Letters/Research Highlights1000词。只两刊requirements/publishing，原首条范围/整刊日期/索引分区/样例及其他83刊、全部其他JSON保护。[字段与范围](JOURNAL_GUIDE_EVIDENCE_2026-10-04.md)。85/112/10、94系列/15多届、189/79/5与27刊样例保持，其余规划继续。

## E27：无机与纳米光学样例（2026-10-04）

E26 0190d244afe22c6169d0ace3c4b80aeb842b0fe7已验收[Pages37209054631](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37209054631)：build/deploy及完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，87ec92bf908f7c01b50792535d6790bf9f7bef082b240f939091d9caf4b203ad与本地一致（2026-10-04T14:24:02.767Z）。 Nano Letters/Inorganic Chemistry各补三篇近两年不同期次原创光学样例：灰度非线性超表面/NIR-II聚合物点/电压可调量子点出射、稀土缺陷发光/Pt蓝光OLED/POM非线性散射。首次上线与较晚卷期分开；量子点合作发射尚未演示。仅两scopeExamples，其他83刊/旧27刊样例与所有其他JSON保持，29刊至少三篇。[逐篇范围](JOURNAL_SCOPE_EVIDENCE_2026-10-04.md)。85/112/10、94系列15多届、273189/79/5、分区索引/指南与整刊日期保持，其余规划继续。

## 2026-10-04：传感与光网络 C27

E27 d9a3c05fc2747a48ce91d8c6d07f3577b749732a已验收[Pages37209447605](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37209447605)：build/deploy与完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，da86fd815fd61d1789752472168dde87da79353bf027e126863569019511ed08与本地一致（2026-10-04T14:35:54.231Z）。API两次连接超时只复查同部署，未重复提交。 新增TRANSDUCERS2027、GLOBECOM2026、ICC2026历史/2027预告四届共三系列，光学传感与光网络子集条件适配。HST初摘要/接受确认/录用后稿件分开，GLOBECOM普通与Workshop更新后截止分开；ICC2027只官方日城，稿规unknown不复制2026。当前85/116/10、97系列/16多届、273候选192 admitted/76 pending/5 deferred、29刊至少三篇样例，分区索引保持。[逐字段来源与范围](CONFERENCE_EVIDENCE_2026-10-04.md)。其他规划继续。

## E28：材料与发光化学样例（2026-10-04）

C27 127752141e547d633d4522f29f4a3c72b1444c62已验收[Pages37210683598](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37210683598)：build/deploy及完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，e1514cb13cee68d64cd466758e49b5682906e59c5bf5a1a785d4e8f461224811与本地一致（2026-10-04T14:50:42.268Z）。 Advanced Materials/Angewandte各补三篇近两年不同期次原创光学样例：长波红外金属透镜/ENZ极化激元耦合/钙钛矿光电逻辑、银簇光响应磷光/掺杂三芳基硼RTP/铜碘簇X射线闪烁成像。首次在线与卷期分开，封面/旧Perspective排除；逻辑非像素成像、RTP纯晶体旧解释被纠正的边界保留。仅两scopeExamples，其他83刊/旧29刊样例与其他JSON保护，31刊至少三篇。[逐篇范围](JOURNAL_SCOPE_EVIDENCE_2026-10-04.md)。85/116/10、97系列16多届、192/76/5、分区索引/指南与整刊日期保持，其他规划继续。

## 2026-10-04：前身与联合届次 C28

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

E33 33144f9ad12bb1d06dda600903d00d5bf78b1d6b已验收[Pages37250987837](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37250987837)：build/deploy及同SHA完整31项测试/typecheck/lint等CI成功，首页/版本HTTP200，9ebd40745f4524eef913c24e3b7819a3a4bb830fb45cac162092ae96892ddb95与本地一致（2026-10-05T04:10:11.514Z）。 E34为IEEE TMI补三篇近两年不同期次光学样例：机器人OCT、光声微循环、OCT/MRI同动物定量关联。首次发表与较晚卷期分开，数值/鼠在体及相关性边界保留；只有scopeExamples变化，98其他刊、旧36刊样例、全指南/费用/整刊日期/索引分区与其他JSON保护。至少三篇样例刊数36→37，99刊/127届/10活动、98系列21多届、273候选208/58/7及全部索引/分区计数保持；其他规划继续。 [逐篇范围](JOURNAL_SCOPE_EVIDENCE_2026-10-05.md#e34ieee-tmi)。五小时自然恢复后普通使用允许，保持原调度，不启动重复任务或使用重置券。

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
