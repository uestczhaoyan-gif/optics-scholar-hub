# 新对话续接说明

更新：2026-10-02。用户已明确要求持续续作，并开启每五小时检查额度后重新开始；已复用原 Codex 自动化并将目标改为当前对话。本文是操作入口，完整批次计划见 [ROADMAP](ROADMAP.md)。

## 项目与当前基线

- 仓库：https://github.com/uestczhaoyan-gif/optics-scholar-hub ，默认分支 main。
- 网站：https://uestczhaoyan-gif.github.io/optics-scholar-hub/ 。本地项目文件夹为 D:/ZYphd/开源项目1-光学期刊&会议汇总。
- 9/15 交接提交为 7b3e27c；9/30 会议维护提交 1515ec6（Pages 36704905503）与 Compendex A1 提交 f77161d（Pages 36705869178）已确认 build/deploy 成功。本次后续提交与部署以 git log、Actions 和最新核验日志为准，不回退到历史提交。
- 正式目录：74 本期刊、40 届会议、9 项展会/论坛；用户指定 54 本期刊全部收录。会议含历史届次与未来预告，数量不代表全是可投稿活动。
- 候选：269 项，123 admitted、143 pending、3 deferred。与正式条目通过 relatedExistingIds 关联。
- JCR 有记录 61/74、中科院 10/74；SCIE 肯定记录 62、ESCI 10、EI 53。35 本已取得 Compendex 数据库方公开来源表证据（SERIALS 2026-08-07 版；五本中文刊另核对 2026-07-10 中文表），另有 62 本 SCIE 与 10 本 ESCI 已经 Clarivate MJL 公开结果卡查询确认，其他肯定证据为出版社声明；未进行订阅平台单篇检索。缺证据不等于未收录，详见 [最新匹配记录](INDEX_EVIDENCE_2026-10-02.md)。
- 交叉适配样例仅 AFM、Nature Electronics、Nature Materials、Nature Nanotechnology 完成至少 3 篇；其余仍需系统补充。
- 已具备中文界面、双语 README、分区/索引/领域筛选、官方分区平台入口、日历导出、关注、筛选分享、版本刷新、维护和覆盖报告。已有 26 项测试；不重建这些功能。

## 恢复时先做

1. 先读取本文件、ROADMAP、[维护手册](MAINTENANCE.md)、[数据模型](DATA_MODEL.md)、[候选规则](CANDIDATES.md)和 [核验日志](VERIFICATION_LOG.md)最新记录。检查当前 AGENTS.md（如存在）。
2. 检查 git status、分支、remote 和最新提交，保护未提交改动；如有未推送或部署未确认的批次先收尾。工作区干净时再同步远端，不强制重置。
3. 使用当日日期重新运行 pnpm report:maintenance 和 pnpm report:coverage，查看 source-report 输出；旧报告中的“临近”事项会随时间失效。报告是字段任务数，不是新会议数量。
4. 查看 GitHub Actions 的最新构建与 source 巡检报告。查询超时只重查原任务，不重做提交。本文的成功部署不能证明未来提交成功。
5. 按下面优先级核验，逐批更新 JSON、核验日志和 ROADMAP；没有新事实时不为凑提交反复刷新日期。

## 下一批具体任务

| 优先级 | 任务与可执行入口                                                                                          | 保留的边界                                                                                                         |
| ------ | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| P1     | 按新生成维护队列查 ACP、IPC、IRMMW-THz、OMTA、OPTIC、Photonics West；关注 FiO 进行中及 OFS-China 后续通知 | 9/30 首批已更新 OMTA 会期/最终轮/缴费和 Photonics West 幻灯片截止。旧 OFS-China 与 Laser Congress 截止不当未来提醒 |
| P1     | 补 SCIE/ESCI/EI 与分区：继续 IEEE、生医、制造及其他光学刊；按 ISSN 查询官方平台和出版社索引清单           | 核心光学、HPL/AIP、ACS 六刊、LPR 与 Nature 五刊的 SCIE 已核对；ESCI 独立保存，不由影响因子推断子库                 |
| P1     | 补已收录的未来会议：USQS 2027、CLEO/Europe–EQEC 2027、ICOLS 2027、ICO 2027、WSOF 2027                     | USQS 英文注册页仍是 2026；欧洲 CLEO 征稿页仍为 2025；会期已知不代表投稿开放                                        |
| P1     | 解决 deferred：NDTA 2026、CIOE 纳米压印论坛、CIOE 微显示论坛                                              | NDTA 酒店已有官方依据，中英文摘要长度仍冲突；两个 CIOE 活动日期/母子层级有冲突，未解决继续暂缓                     |
| P1/P2  | 继续每批审核 5–8 个系列：先进光学制造及其他未审候选；跟进 APOS 会期与新入选 SPIE/OPIC 的字段缺口          | 从 data/candidates.json 取真实当前状态；区分母会、分会、展览以及不同地区的 CLEO                                    |
| P2     | 跟踪候选 QCMC、UFO、EWOFS                                                                                 | QCMC 下一届 2027 但具体日城未核实；UFO 只核实 2025 身份；EWOFS 2027 页面仍不完整。不要按周期推算                   |
| P2     | 继续逐刊补作者指南与费用，补材料/电子/物理交叉期刊近两年不同期次至少 3 篇光学论文样例                     | 已完成的细则见日志；只核实部分字段时不刷新整刊日期。样例需要真实题名、链接、发表日和适配理由                       |
| P2     | 审核更多中文 EI、生医、制造、器件期刊                                                                     | Q1/Q2 主合集按明确版本准入；EI 工程补充需确证 EI，不暗中改变收录门槛                                               |

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

请接续 optics-scholar-hub 项目。先阅读 docs/RESUME.md、docs/ROADMAP.md、docs/VERIFICATION_LOG.md 和当前仓库状态，检查实际账户额度并重新生成维护与覆盖报告，再按计划持续推进。已有 74 本期刊、40 届会议、9 项活动是 2026-10-02 当前基线，以实际 JSON 为准。优先补临近会议、索引分区证据及待审核候选，未知或冲突保留。每批验证后提交推送 GitHub，按提交 SHA 确认 Pages 部署及线上版本。用户已授权本对话每五小时检查额度并续作，不另建重复自动化；直到额度受限或剩余规划确实完成，不重复已完成的功能。
