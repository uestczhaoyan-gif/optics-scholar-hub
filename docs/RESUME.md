# 新对话续接说明

更新：2026-09-30。已按用户要求恢复本次人工续作；旧 Codex 定时任务继续暂停，不自动恢复或重建。本文是操作入口，完整批次计划见 [ROADMAP](ROADMAP.md)。

## 项目与当前基线

- 仓库：https://github.com/uestczhaoyan-gif/optics-scholar-hub ，默认分支 main。
- 网站：https://uestczhaoyan-gif.github.io/optics-scholar-hub/ 。本地项目文件夹为 D:/ZYphd/开源项目1-光学期刊&会议汇总。
- 9/15 交接提交为 7b3e27c；9/30 会议维护提交 1515ec6（Pages 36704905503）与 Compendex A1 提交 f77161d（Pages 36705869178）已确认 build/deploy 成功。本次后续提交与部署以 git log、Actions 和最新核验日志为准，不回退到历史提交。
- 正式目录：74 本期刊、35 届会议、9 项展会/论坛；用户指定 54 本期刊全部收录。会议含历史届次与未来预告，数量不代表全是可投稿活动。
- 候选：269 项，118 admitted、148 pending、3 deferred。与正式条目通过 relatedExistingIds 关联。
- JCR 有记录 61/74、中科院 10/74；SCIE 肯定记录 41、ESCI 8、EI 42。24 本已取得 Compendex 数据库方公开来源表证据（SERIALS 2026-08-07 版；五本中文刊另核对 2026-07-10 中文表），另有 24 本 SCIE 已经 Clarivate MJL 公开结果卡查询确认，其他肯定证据为出版社声明；未进行订阅平台单篇检索。缺证据不等于未收录，详见 [匹配记录](INDEX_EVIDENCE_2026-09-30.md)。
- 交叉适配样例仅 AFM、Nature Electronics、Nature Materials、Nature Nanotechnology 完成至少 3 篇；其余仍需系统补充。
- 已具备中文界面、双语 README、分区/索引/领域筛选、官方分区平台入口、日历导出、关注、筛选分享、版本刷新、维护和覆盖报告。已有 26 项测试；不重建这些功能。

## 恢复时先做

1. 先读取本文件、ROADMAP、[维护手册](MAINTENANCE.md)、[数据模型](DATA_MODEL.md)、[候选规则](CANDIDATES.md)和 [核验日志](VERIFICATION_LOG.md)最新记录。检查当前 AGENTS.md（如存在）。
2. 检查 git status、分支、remote 和最新提交，保护未提交改动；如有未推送或部署未确认的批次先收尾。工作区干净时再同步远端，不强制重置。
3. 使用当日日期重新运行 pnpm report:maintenance 和 pnpm report:coverage，查看 source-report 输出；旧报告中的“临近”事项会随时间失效。报告是字段任务数，不是新会议数量。
4. 查看 GitHub Actions 的最新构建与 source 巡检报告。查询超时只重查原任务，不重做提交。本文的成功部署不能证明未来提交成功。
5. 按下面优先级核验，逐批更新 JSON、核验日志和 ROADMAP；没有新事实时不为凑提交反复刷新日期。

## 下一批具体任务

| 优先级 | 任务与可执行入口                                                                                                                        | 保留的边界                                                                                                         |
| ------ | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| P1     | 按新生成维护队列查 ACP、IPC、IRMMW-THz、OMTA、OPTIC、Photonics West；关注 FiO 进行中及 OFS-China 后续通知                               | 9/30 首批已更新 OMTA 会期/最终轮/缴费和 Photonics West 幻灯片截止。旧 OFS-China 与 Laser Congress 截止不当未来提醒 |
| P1     | 补 SCIE/ESCI/EI 与分区：继续 IEEE、生医、制造及其他光学刊；按 ISSN 查询官方平台和出版社索引清单                                         | 核心光学、HPL/AIP、ACS 六刊、LPR 与 Nature 五刊的 SCIE 已核对；ESCI 独立保存，不由影响因子推断子库                 |
| P1     | 补已收录的未来会议：USQS 2027、CLEO/Europe–EQEC 2027、ICOLS 2027、ICO 2027、WSOF 2027                                                   | USQS 英文注册页仍是 2026；欧洲 CLEO 征稿页仍为 2025；会期已知不代表投稿开放                                        |
| P1     | 解决 deferred：NDTA 2026、CIOE 纳米压印论坛、CIOE 微显示论坛                                                                            | NDTA 酒店已有官方依据，中英文摘要长度仍冲突；两个 CIOE 活动日期/母子层级有冲突，未解决继续暂缓                     |
| P1/P2  | 每批审核 5–8 个会议系列：先进光学制造、Advanced Lithography、Astronomical Telescopes、Medical Imaging、Optical Metrology、OPIC、APOS 等 | 从 data/candidates.json 取真实当前状态；区分母会、分会、展览以及不同地区的 CLEO                                    |
| P2     | 跟踪候选 QCMC、UFO、EWOFS                                                                                                               | QCMC 下一届 2027 但具体日城未核实；UFO 只核实 2025 身份；EWOFS 2027 页面仍不完整。不要按周期推算                   |
| P2     | 继续逐刊补作者指南与费用，补材料/电子/物理交叉期刊近两年不同期次至少 3 篇光学论文样例                                                   | 已完成的细则见日志；只核实部分字段时不刷新整刊日期。样例需要真实题名、链接、发表日和适配理由                       |
| P2     | 审核更多中文 EI、生医、制造、器件期刊                                                                                                   | Q1/Q2 主合集按明确版本准入；EI 工程补充需确证 EI，不暗中改变收录门槛                                               |

## 已完成的近期批次

已新增/核实 ICORS 2026、USQS 2027、CLEO/Europe–EQEC 2027、CLEO-PR 2026；补 Nature Photonics、PhotoniX、eLight 投稿细则及后两刊带核验日期的 APC；核实 USQS DOCX 材料字段；补 HPL 两个刊号和历史 SCIE 线索。更多早期成果以日志为准，避免重新从零检索。

9/30 已完成临近会议批次 B 及 Compendex A1/A2 共 24 本的来源表核验。上表优先刊的 EI 部分已处理，下一批重点核对 SCIE/ESCI、分区及其他 EI；当日维护队列为 302 项字段任务，临近日期仍需按后续实际日期重生成报告。旧自动化保持暂停。

随后 A3 已补十二本当前 SCIE 的 MJL 数据库查询依据；维护队列降为 290 项字段任务。核心九刊、HPL 与 AIP 两刊的 SCIE 不需从零重复核验；继续 ACS 等剩余索引与分区、会议候选。

A4 再核对 ACS 六刊、Nature 五刊与 LPR，当前 SCIE 数据库查询依据累计 24 本，维护队列为 278 项字段任务。上述两批的当前 SCIE 已处理；继续剩余 IEEE、生医/制造/其他光学刊和会议系列审核。

## 数据与发布要求

- 官方当届通知优先；保留出处、核验日、证据等级、年度和适用稿型。旧届网页、历史索引、期刊推荐不证明当前录用/收录。
- SCIE 与 ESCI 分开；Scopus/SJR 不作 JCR；AIS 分区不作 JIF 分区；CAS 大类/小类与版本分别记录。不编造分区、覆盖年份和日期。
- 只有日期就用 date；确有时刻才用 at/timezone，未知为 null。期刊会后专刊截止不混入会议摘要 DDL。
- 正式会议须有当届官方身份及会期依据；暂无征稿的未来预告可收录，但须明确 unknown、待补规则。只有系列线索保留 candidate。
- 新正式条目要同步候选关联、README/ROADMAP/扩充计划的当前数量；历史执行记录中的数量不要全局替换。
- 数据批次：pnpm format 指定修改文件、pnpm validate:data、git diff --check；审查差异后提交并推送。功能批次另执行 pnpm test、pnpm typecheck、pnpm lint、pnpm build，必要界面回归见 UI_REGRESSION.md。
- 每批确认 pages.yml 对应提交 SHA 的构建和 deploy 成功，不能只凭 push 成功声称网站已发布。推送失败保留本地提交，下次优先补推。
- 不用额度重置券、不购买额度、不绕过审批；用户未要求多代理时不启动子代理。不要为达到“额度用完”重复无意义核验。

## 暂停与自动化

2026-09-15 已暂停 Codex 每 5 小时续接任务（本地 automation），不会由此任务继续消耗额度。该任务属于旧对话，不随 Git 仓库迁移；新对话须由用户明确要求后再恢复或重建，避免重复调度。

GitHub 仓库原有每日来源巡检仍保留：只报告变化/访问异常，不自动改写学术信息；网站检查更新按钮只读取已发布目录版本。暂停 Codex 续接不等于停用该 GitHub 工作流。

## 可复制的新对话提示

请接续 optics-scholar-hub 项目。先阅读 docs/RESUME.md、docs/ROADMAP.md、docs/VERIFICATION_LOG.md 和当前仓库状态，重新生成维护与覆盖报告，再按计划推进。已有 74 本期刊、35 届会议、9 项活动是 2026-09-15 基线，以实际 JSON 为准。优先补临近会议、索引分区证据及待审核候选，未知或冲突保留。每批验证后提交推送 GitHub 并确认 Pages 部署。不要重复已完成的功能，不自动恢复旧对话的定时任务。
