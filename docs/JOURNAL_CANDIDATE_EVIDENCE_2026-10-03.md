# APS 候选核验与准入证据

## 上午预核验历史快照

核验：2026-10-03 上午。本轮是 F2 的研究准备，六刊仍为 pending，未加入正式79刊，也未写入JCR/CAS或SCIE/ESCI记录。下次接续先完成准入与字段审核；当前正式数量仍为79刊/65届会议/9活动、272候选（152 admitted /116 pending /4 deferred）。

## 身份与 Compendex 来源表

读取[Elsevier 官方源表](https://assets.ctfassets.net/o78em1y1w4i4/1vOKA5ELqWIoXeukEI0KPk/25a74b602fc5149a096bd87bf7d9c5e1/COMPENDEX_Source-list-082026.xlsx)的已校验缓存：SHA256 `5f54be62a89d8fd7c74989b081acba363a0e3e23fa64213c2d1ef6851f0b1d39`，SERIALS 2026-08-07、DISCONTINUED 2026-05-01。每刊标题精确匹配一条SERIALS，无DISCONTINUED同名匹配；再与本轮实际读取的APS About刊号对照。没有订阅平台逐篇检索、覆盖起止核验或分区查询；不能从影响因子推出分区。

| 候选（稳定ID）                                 | 出版社身份来源与刊号                                                                          | SERIALS行与匹配边界                                                                                                      |
| ---------------------------------------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Physical Review A（journal-e8b3796f20）        | [APS About](https://journals.aps.org/pra/about)，印刷2469-9926 / 在线2469-9934                | 4381，两刊号匹配                                                                                                         |
| Physical Review Applied（journal-e6e4373a42）  | [APS About](https://journals.aps.org/prapplied/about)，在线2331-7019；CD-ROM2331-7043单独列出 | 4382，印刷列为“-”，只匹配在线，不把CD-ROM写成印刷                                                                        |
| Physical Review B（journal-c594bd317c）        | [APS About](https://journals.aps.org/prb/about)，印刷2469-9950 / 在线2469-9969                | 4383，两刊号匹配                                                                                                         |
| Physical Review Letters（journal-1f130b1b67）  | [APS About](https://journals.aps.org/prl/about)，印刷0031-9007 / 在线1079-7114                | 4386，两刊号匹配                                                                                                         |
| Physical Review Research（journal-4f36df3adf） | [APS About](https://journals.aps.org/prresearch/about)，在线2643-1564                         | 4388，26431564在表的印刷列、电子列为“-”；标题/号码一致但载体列不一致，正式身份以出版社在线刊号为准，仍须明确这一表格边界 |
| Physical Review X（journal-ffb2a8ae1b）        | [APS About](https://journals.aps.org/prx/about)，在线2160-3308                                | 4389，印刷列为“-”，只匹配在线                                                                                            |

PRA About明确AMO、光子学/非线性/光力学与量子光学；PRApplied明确光学、光电子、光子器件及超材料。PRResearch仍有ESCI出版社声明，其他若干About写Science Citation Index；本轮未MJL直查，不把这些旧/未注明版本声明当作SCIE数据库方证据。后三本交叉方向还须补逐篇适配样例，未凭综合物理定位自动准入。

## 已读作者指南与剩余字段

- [PRL Authors](https://journals.aps.org/prl/authors)：Letters核心3750词、最多两页End Matter不计核心；初投100词重要性说明。PDF足以评审，推荐LaTeX/Word；DAS及实质AI使用披露、补充材料/联合投稿各有边界。未核收费具体版本。
- [PRA Authors](https://journals.aps.org/pra/authors)：Regular无统一篇幅上限，Letters4500词且说明优先处理理由，Perspective仅邀稿；Letter结构摘要链接仅确认，未读取链接内细则。DAS/AI、返修干净稿、逐条回复、改动清单及标改PDF已读取。
- [PRB Authors](https://journals.aps.org/prb/authors)：Regular无统一篇幅上限，Letters4500词，Comment/Reply3500词；不得套用PRA的Perspective仅邀稿。DAS/AI与补充材料/返修规则独立读取。

Applied、Research、X各自完整作者指南/APC尚待核验；六刊MJL与准确索引状态、适配样例及最终准入仍待做。忽略目录work/F2_APS_EI_PRELIMINARY_2026-10-03.json保存原行，work/E17_RESEARCH_2026-10-03.md保存前三指南范围；名称、候选状态和正式JSON均保持。

## 下午 F2：数据库核验、JCR版本及准入

核验：2026-10-03。当前81刊/69会议/10活动、273候选155 admitted /114 pending /4 deferred。六刊均完成下表索引与JCR字段审核；仅PRA、PRApplied完成适配样例和本轮正式准入。上午快照中的“尚待”不代表当前进度。旧79刊没有刷新日期或其他字段，CAS缺口保留。

### 分区与索引逐字段依据

[MJL官方查询](https://mjl.clarivate.com/)在正常浏览器以刊号逐刊检索：六刊各一条Exact Match、标题/刊号对照一致，结果卡明确下列Core Collection。只读公开卡，未登录profile，未核覆盖起止或单篇。逐刊来源可按链接复查。EI依据仍为上表同版数据库方源表及原行，不重复下载当作新版。

JCR来源为[UEFISCDI机构公开转录](https://uefiscdi.gov.ro/resource-865584-JCR_2024.iunie2025.pdf)，785页、标题注明June2025，SHA256 `86f3e2e44be263bcd0e5411b376995d6fe6a1ac3f9b1d9368549ad4870620274`。沿用既有“JCR2025 / 发布年2025 / 指标年2024”标识，证据等级secondary，不冒称直接登录Clarivate。PDF分列JIF与AIS；录入JIF，568/604/612页已渲染目视列位置。

| 刊名       | MJL当日公开卡                                                                                       | JCR2025学科及JIF分区（本轮审核范围）                                                                                                                        | 结论                                |
| ---------- | --------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| PRA        | [2469-9926：SCIE](https://mjl.clarivate.com/search-results?issn=2469-9926&hide_exact_match_fl=true) | [OPTICS Q2，第568页](https://uefiscdi.gov.ro/resource-865584-JCR_2024.iunie2025.pdf#page=568)；AMO Q2第606页文本亦匹配，正式仅录OPTICS                      | 按原Q1/Q2路径入库，EI独立匹配4381行 |
| PRApplied  | [2331-7019：SCIE](https://mjl.clarivate.com/search-results?issn=2331-7019&hide_exact_match_fl=true) | [PHYSICS, APPLIED JIF Q2，第604页](https://uefiscdi.gov.ro/resource-865584-JCR_2024.iunie2025.pdf#page=604)，AIS列Q1不作JCR分区；表重复电子刊号不写印刷身份 | 按原Q1/Q2路径入库，EI独立匹配4382行 |
| PRB        | [2469-9950：SCIE](https://mjl.clarivate.com/search-results?issn=2469-9950&hide_exact_match_fl=true) | 材料综合Q2第454页、应用物理Q2第604页、凝聚态Q2第607页文本匹配；本轮不写正式记录                                                                             | pending，补三篇适配样例及准入       |
| PRL        | [0031-9007：SCIE](https://mjl.clarivate.com/search-results?issn=0031-9007&hide_exact_match_fl=true) | [PHYSICS, MULTIDISCIPLINARY Q1，第612页](https://uefiscdi.gov.ro/resource-865584-JCR_2024.iunie2025.pdf#page=612)                                           | pending，补三篇适配样例及准入       |
| PRResearch | [2643-1564：ESCI](https://mjl.clarivate.com/search-results?issn=2643-1564&hide_exact_match_fl=true) | 同第612页综合物理Q1，表亦列ESCI；有JCR分区不代表SCIE                                                                                                        | pending，保留EI载体列边界，补适配   |
| PRX        | [2160-3308：SCIE](https://mjl.clarivate.com/search-results?issn=2160-3308&hide_exact_match_fl=true) | 同第612页综合物理Q1；表重复电子刊号不当印刷刊号                                                                                                             | pending，补适配及准入               |

### 范围、投稿及费用

[PRA About](https://journals.aps.org/pra/about)明确AMO、光子学、非线性与量子光学；[PRApplied About](https://journals.aps.org/prapplied/about)连接工程/物理并覆盖光电子、光学与光子器件。近两年样例另逐篇核对，不按综合物理刊名自动放行。

[PRA Authors](https://journals.aps.org/pra/authors)：Regular无统一上限、Letters4500词、Perspective仅邀稿、Comments3500词。PDF评审可用、LaTeX优先/Word可选；DAS/实质AI披露和返修材料已读。Letter专门结构摘要链接内容本轮未完整核验，普通摘要上限未知。

[PRApplied Authors](https://journals.aps.org/prapplied/authors)：Regular无统一上限、Letters4500词、Review30000词、Perspective邀稿但可一页提案、Comments3500词；Research/Letter初投100词意义说明，PDF评审/源文件推荐、DAS/AI、附录/补充材料及联合/扩展稿边界已读。模板源码/上传系统登录后细节未核验，不承诺录用速度。

[APS官方2026 APC表](https://journals.aps.org/authors/apcs)：PRA/Applied/B可选Gold各USD2910、PRL可选4140；Research完全OA2910、X完全OA4685。CC BY4.0，以投至实际发表刊时点定价，转刊按目标刊；Editorial/Comment/Correction不适用，机构协议、SCOAP3及低收入地区减免各有资格。税未核实；非OA其他费用未核实，不能把可选APC写成全刊必付或声称其余全免。Research/X独立指南初次已读，正式准入尚需完整细则及适配材料。

### 两刊各三篇近两年正式光学样例

以2026-10-03为核验日，样本窗口2024-10-03起；均出版社正式Published、不同期次，未用Accepted代替发表，不读取收费正文后声称全文验证。题名、实际发表日、卷期和适配边界同步保存在scopeExamples。

| 刊名/题名（官方链接）                                                                                                                                                                                      | 发表日及卷期              | 适配范围                                   |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- | ------------------------------------------ |
| PRA：[Enhanced tunable photon-pair generation from a nonlinear metasurface with a guided-mode cavity](https://journals.aps.org/pra/abstract/10.1103/p1wr-98wx)                                             | 2025-06-20，111(6),063519 | 非线性超表面量子光源理论，增强为预测       |
| PRA：[Angle-insensitive nonlinear enhancement in an all-dielectric metasurface via Brillouin-zone folding](https://journals.aps.org/pra/abstract/10.1103/gw9j-9dxk)                                        | 2025-08-12，112(2),023508 | 角度鲁棒THG超表面，仅据摘要不宣称实验      |
| PRA：[Probing bandwidth and sensitivity in Rydberg atom sensing via optical homodyne and rf heterodyne detection](https://journals.aps.org/pra/abstract/10.1103/jsbl-45t9)                                 | 2026-01-20，113(1),013729 | EIT光学读出/量子传感实验，RF异频部分有边界 |
| Applied：[Simulation of integrated nonlinear quantum optics: From nonlinear interferometer to temporal walk-off compensator](https://journals.aps.org/prapplied/abstract/10.1103/PhysRevApplied.22.064092) | 2024-12-26，22(6),064092  | 集成非线性量子光学数值模型，不称器件已建成 |
| Applied：[Kerker superscattering](https://journals.aps.org/prapplied/abstract/10.1103/PhysRevApplied.23.014001)                                                                                            | 2025-01-02，23(1),014001  | 散射/超表面设计；验证实验为微波            |
| Applied：[Super-Heisenberg-limited sensing via collective subradiance in waveguide quantum electrodynamics](https://journals.aps.org/prapplied/abstract/10.1103/4crz-846z)                                 | 2026-08-05，26(2),024008  | 波导QED集体亚辐射传感理论，尺度律限于模型  |

### 续接

四剩余综合物理刊稳定候选只更新已核范围和nextAction，保持pending。忽略目录work/F2_RESEARCH_2026-10-03.md、MJL结果卡文本、F2-JCR-matches.json与渲染页保存研究检查点；正式文档包含可迁移的来源、版本/行页号和核验边界，不依赖临时文件才可续作。

PRA作者指南收费段另读：在线彩色免费，可选印刷彩色首图USD1090、追加每图595；该表未注明版年，以2026-10-03核验日保存。与可选OA费用独立，税/其他费用仍未知。Applied印刷或其他费用本轮未核实。
