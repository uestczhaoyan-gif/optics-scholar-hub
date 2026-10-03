# 新对话续接说明

更新：2026-10-03。用户已明确要求持续续作，并开启每五小时检查额度后重新开始；已复用原 Codex 自动化并将目标改为当前对话。本文是操作入口，完整批次计划见 [ROADMAP](ROADMAP.md)。

## 项目与当前基线

- 仓库：https://github.com/uestczhaoyan-gif/optics-scholar-hub ，默认分支 main。
- 网站：https://uestczhaoyan-gif.github.io/optics-scholar-hub/ 。本地项目文件夹为 D:/ZYphd/开源项目1-光学期刊&会议汇总。
- 9/15 交接提交为 7b3e27c；9/30 会议维护提交 1515ec6（Pages 36704905503）与 Compendex A1 提交 f77161d（Pages 36705869178）已确认 build/deploy 成功。本次后续提交与部署以 git log、Actions 和最新核验日志为准，不回退到历史提交。
- 正式目录：85 本期刊、74 届会议、10 项展会/论坛；用户指定 54 本期刊全部收录。会议含历史届次与未来预告，数量不代表全是可投稿活动。
- 候选：273 项，163 admitted、105 pending、5 deferred。与正式条目通过 relatedExistingIds 关联。
- JCR 有记录 68/85、中科院 11/85；SCIE 肯定记录 72、ESCI 11、EI 78。78 本已取得 Compendex 数据库方公开来源表证据（SERIALS 2026-08-07 版；相关刊物另核对 2026-07-10 中文表），另有 72 本 SCIE 与 11 本 ESCI 已经 Clarivate MJL 公开结果卡查询确认，当前肯定索引均为数据库方依据；未进行订阅平台单篇检索。缺证据不等于未收录，详见 [最新匹配记录](INDEX_EVIDENCE_2026-10-02.md)及 [APS 六刊新增证据](JOURNAL_CANDIDATE_EVIDENCE_2026-10-03.md)。
- 交叉适配样例已有二十刊至少 3 篇：原九刊及 Nano-Micro Letters、Science China Materials、PRX Quantum、InfoMat、Advanced Science，另有 PRA、PRApplied、PRB、PRL、PRResearch、PRX。其余仍需系统补充；首次发表、卷期及理论/实验边界见 [E2/E4 证据](JOURNAL_SCOPE_EVIDENCE_2026-10-02.md)。
- 已具备中文界面、双语 README、分区/索引/领域筛选、官方分区平台入口、日历导出、关注、筛选分享、版本刷新、维护和覆盖报告。已有 30 项测试；系列时间线、系列关注和后续公告维护已接入，不重建这些功能。

## 恢复时先做

1. 先读取本文件、ROADMAP、[维护手册](MAINTENANCE.md)、[数据模型](DATA_MODEL.md)、[候选规则](CANDIDATES.md)和 [核验日志](VERIFICATION_LOG.md)最新记录。检查当前 AGENTS.md（如存在）。
2. 检查 git status、分支、remote 和最新提交，保护未提交改动；如有未推送或部署未确认的批次先收尾。工作区干净时再同步远端，不强制重置。
3. 使用当日日期重新运行 pnpm report:maintenance 和 pnpm report:coverage，查看 source-report 输出；旧报告中的“临近”事项会随时间失效。报告是字段任务数，不是新会议数量。
4. 查看 GitHub Actions 的最新构建与 source 巡检报告。查询超时只重查原任务，不重做提交。本文的成功部署不能证明未来提交成功。
5. 按下面优先级核验，逐批更新 JSON、核验日志和 ROADMAP；没有新事实时不为凑提交反复刷新日期。

## 下一批具体任务

| 优先级 | 任务与可执行入口                                                                                                                                                       | 保留的边界                                                                                                         |
| ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| P1     | 系列首轮后续公告已核验，余 CIOP 证书异常一项；转回临近/未知字段及候选覆盖，并查 ACP、IPC、IRMMW-THz、OMTA、OPTIC、Photonics West；关注 FiO 进行中及 OFS-China 后续通知 | 9/30 首批已更新 OMTA 会期/最终轮/缴费和 Photonics West 幻灯片截止。旧 OFS-China 与 Laser Congress 截止不当未来提醒 |
| P1     | 补 JCR/CAS 版本与学科；跟进七刊 EI 缺口及两本中文刊的 Web of Science 身份                                                                                              | 已有 SCIE 72、ESCI 11、EI 78 均为数据库依据；同一版公开表不重复扫描，缺匹配不等于未收录                            |
| P1     | 补已收录的未来会议：USQS 2027、CLEO/Europe–EQEC 2027、ICOLS 2027、ICO 2027、WSOF 2027                                                                                  | USQS 注册入口/现发布费率已补，退款年度待核实；欧洲 CLEO 征稿页仍为 2025；会期已知不代表投稿开放                    |
| P1     | 解决 deferred：NDTA 2026、CIOE 纳米压印论坛、CIOE 微显示论坛、OPJ 2026                                                                                                 | NDTA 酒店已有官方依据，中英文摘要长度仍冲突；两个 CIOE 活动日期/母子层级及 OPJ 终日有冲突，未解决继续暂缓          |
| P1/P2  | 继续每批审核 5–8 个系列：先进光学制造及其他未审候选；跟进新入选 SPIE/OPIC 的字段缺口；APOS 2026 历史届次已入选                                                         | 从 data/candidates.json 取真实当前状态；区分母会、分会、展览以及不同地区的 CLEO                                    |
| P2     | 跟踪候选 QCMC、UFO、EWOFS                                                                                                                                              | QCMC 2027具体日城未知；UFO2025已收历史届，后续未知；EWOFS2027页面不完整，DH/ImageSense2027仅加拿大7月线索          |
| P2     | 继续逐刊补作者指南与费用，补材料/电子/物理交叉期刊近两年不同期次至少 3 篇光学论文样例                                                                                  | 已完成的细则见日志；只核实部分字段时不刷新整刊日期。样例需要真实题名、链接、发表日和适配理由                       |
| P2     | 审核更多中文 EI、生医、制造、器件期刊                                                                                                                                  | Q1/Q2 主合集按明确版本准入；EI 工程补充需确证 EI，不暗中改变收录门槛                                               |

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

请接续 optics-scholar-hub 项目。先阅读 docs/RESUME.md、docs/ROADMAP.md、docs/VERIFICATION_LOG.md 和当前仓库状态，检查实际账户额度并重新生成维护与覆盖报告，再按计划持续推进。已有 85 本期刊、74 届会议、10 项活动是 2026-10-03 当前基线，以实际 JSON 为准。优先补临近会议、索引分区证据及待审核候选，未知或冲突保留。每批验证后提交推送 GitHub，按提交 SHA 确认 Pages 部署及线上版本。用户已授权本对话每五小时检查额度并续作，不另建重复自动化；直到额度受限或剩余规划确实完成，不重复已完成的功能。

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
