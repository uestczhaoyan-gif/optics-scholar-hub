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

## 下午 F3：四刊光学适配与正式准入

核验：2026-10-03。F2中的四pending为当批历史快照，本批四刊完成至少三篇不同卷期正式光学样例审核后准入；当前85刊/69会议/10活动、273候选159/110/4。JCR仍为同一2025版secondary，索引为同日F2的数据库方公开卡/源表，不重查同版当新证据。CAS未知保留。

### 分区与索引范围

PRB正式保存三项Q2：[材料综合第454页](https://uefiscdi.gov.ro/resource-865584-JCR_2024.iunie2025.pdf#page=454)、[应用物理第604页](https://uefiscdi.gov.ro/resource-865584-JCR_2024.iunie2025.pdf#page=604)、[凝聚态第607页](https://uefiscdi.gov.ro/resource-865584-JCR_2024.iunie2025.pdf#page=607)，454/607新增目视JIF列，604 F2已核。PRL/PRResearch/PRX正式保存[综合物理Q1第612页](https://uefiscdi.gov.ro/resource-865584-JCR_2024.iunie2025.pdf#page=612)。MJL/Compendex逐刊来源、行号/版本同F2表；Research源表载体列冲突保留，SCIE显式unverified，ESCI/EI confirmed。PRX电子刊号不当印刷身份。

### 官方范围与本刊规则

| 期刊与官方依据                                                                                                          | 本次实际核验范围                                                                                                                                                                                      |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PRB：[About](https://journals.aps.org/prb/about) / [Authors](https://journals.aps.org/prb/authors)                      | 2026-10-03 本刊指南：Regular Article 无统一上限，Letter 最多 4,500 词并说明短稿优先处理理由，Comment/Reply 最多 3,500 词；Perspective 分为前瞻、纪念与社区议题三类，不套用 PRA 的仅邀稿声明。         |
| PRL：[About](https://journals.aps.org/prl/about) / [Authors](https://journals.aps.org/prl/authors)                      | 2026-10-03 本刊指南：Letter 核心最多 3,750 词，另可最多两页 End Matter，不计核心；Comment/Reply 最多 750 词。Essay 为编辑委托、最多 3,750 词；不套用其他 APS 刊的 3,500 词评论上限。                  |
| PRResearch：[About](https://journals.aps.org/prresearch/about) / [Authors](https://journals.aps.org/prresearch/authors) | 2026-10-03 本刊指南：Regular Article 无统一上限，Letter 最多 4,500 词，Comment/Reply 最多 3,500 词；Perspective 邀稿但可一页提案，无统一上限，须包含开放挑战/未来方向，不接收只综述、白皮书或意见稿。 |
| PRX：[About](https://journals.aps.org/prx/about) / [Authors](https://journals.aps.org/prx/authors)                      | 2026-10-03 本刊指南：Research Article 无统一上限，Perspective 邀稿、最多 7,500 词，Comment/Reply 最多 3,500 词；不把其他 APS 刊的 Letter 稿型和上限移用到 PRX。                                       |

四刊各自读到PDF评审、LaTeX/Word源文件、DAS/实质AI披露和相关稿/返修边界。PRL100词初投准入说明与PRX发表前最多150词Popular Summary分别保存；后者不等于内部推广Author Summary。模板源码、普通摘要字数和登录后上传步骤未完全核实，不把指南链接当全部要求已复现。PRB Additional Materials不另列要求，不复制其他刊附件。

[APS2026费用表](https://journals.aps.org/authors/apcs)沿用F2当日核验：PRB/PRL可选Gold与Research/PRX全面OA分别处理。PRB作者指南另核可选印刷彩色1090首图/595追加、在线免费，该费表无版年；其他三刊印刷或其他收费未核实，税/减免须按资格。SCOAP3高能物理资格不自动适用于普通光学稿。

### 十二篇光学样例

样本窗口2024-10-03至核验日；各刊不同卷期，不要求各刊覆盖所有季度。实际Published日与卷期标示分开，不以Accepted日替代。

| 期刊与正式题名/来源                                                                                                                                                                             | 发表日     | 适配及卷期                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| PRB：[Optical coherence storage in dark exciton states using spin-dependent three-pulse photon echo](https://journals.aps.org/prb/abstract/10.1103/PhysRevB.111.045423)                         | 2025-01-16 | 111(4), 045423。InGaAs/GaAs 量子阱中三脉冲光子回波与暗激子相干存储实验，适配半导体光谱与光学量子信息；不称已部署量子存储网络。         |
| PRB：[Tunable exciton polaritons in biased bilayer graphene](https://journals.aps.org/prb/abstract/10.1103/PhysRevB.111.075411)                                                                 | 2025-02-10 | 111(7), 075411。双层石墨烯微腔中电调激子极化激元的半经典/量子模型，适配强光物质耦合；强耦合为给定寿命下的预测，不当已完成实验。        |
| PRB：[Excitonic bound states in the continuum in van der Waals heterostructure metasurfaces](https://journals.aps.org/prb/abstract/10.1103/n2wb-qdhr)                                           | 2025-08-12 | 112(8), L081405。二维激子层与光学共振 vdW 超表面的干涉、准 BIC 和数值模拟，适配纳米光子与量子发光；辐射抑制为理论/模拟结论。           |
| PRL：[Pseudospin Transverse Localization of Light in an Optical Disordered Spin-Glass Phase](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.134.123803)                              | 2025-03-26 | 134(12), 123803。二阶非线性光子晶体中的无序伪自旋局域理论和光学类比实验，适配非线性光学；不当作磁性材料自旋玻璃实验。                  |
| PRL：[Robust Purcell Effect of Quantum Dots Using Nonlocal Plasmonic Metasurfaces](https://journals.aps.org/prl/abstract/10.1103/gt4z-gwdw)                                                     | 2025-06-20 | 134(24), 243804。光子晶体中金纳米结构非局域模与量子点耦合、稳健 Purcell 增强，适配量子发光和等离激元器件；不能扩大成全部无序均无影响。 |
| PRL：[Optical Sensing near the Quantum Limit with Enhanced Dynamic Range by Resolving the Spectra of Interfering Photons](https://journals.aps.org/prl/abstract/10.1103/6xy6-c2yd)              | 2026-02-09 | 136(6), 060803。独立光子对、频率分辨检测与估计的光学测量实验；量子极限结论限于无损条件，生医/纳米成像为潜在应用。                      |
| PRResearch：[Impact of temporal correlations, coherence, and postselection on two-photon interference](https://journals.aps.org/prresearch/abstract/10.1103/PhysRevResearch.7.013190)           | 2025-02-21 | 7(1), 013190。分析级联光子对的时间关联、退相干及后选择对干涉可见度的共同作用，适配量子光源；不据摘要概括为无条件提高干涉。             |
| PRResearch：[Communicating at a record 14.5 bits per received photon through a photon-starved channel](https://journals.aps.org/prresearch/abstract/10.1103/mmth-7tww)                          | 2025-08-01 | 7(3), 033108。1550 nm 光子稀缺接收实验，适配低功率/空间光通信；摘要区分每入射光子与每检测光子效率，实验室衰减链路不称已建成星际通信。  |
| PRResearch：[Observation and measurement of the 1S0–3P0 transition in an optical lattice clock using the 198Hg bosonic isotope](https://journals.aps.org/prresearch/abstract/10.1103/q28c-kb61) | 2026-09-28 | 8(3), 033366。198Hg 光晶格钟中磁场诱导跃迁的实验表征与 87Sr 比较，适配光谱及精密计量；正式题名的上下标用纯文本等价表达。               |
| PRX：[Quantized Hall Drift in a Frequency-Encoded Photonic Chern Insulator](https://journals.aps.org/prx/abstract/10.1103/2dyh-yhrb)                                                            | 2026-02-05 | 16(1), 011020。光纤环中频率合成维度实现光子 Chern 平台并测量驱动耗散 Hall 类比，适配拓扑光子；不是电子带电输运实验。                   |
| PRX：[Stealthy-Hyperuniform Wave Dynamics in Two-Dimensional Photonic Crystals](https://journals.aps.org/prx/abstract/10.1103/8bz9-5g8s)                                                        | 2026-05-07 | 16(2), 021028。实验以光子带线宽分析超均匀光子晶体薄板散射，指出辐射损耗导致残余散射；不把超均匀性写成完全透明或零损耗。                |
| PRX：[Generation of Large Coherent-State Superpositions in Free-Space Optical Pulses](https://journals.aps.org/prx/abstract/10.1103/q2h3-58pz)                                                  | 2026-08-21 | 16(3), 031047。自由空间光脉冲中压缩猫态的实验制备及零差预示，适配量子光源/连续变量光子计算；未来容错架构是应用方向，不称已建成计算机。 |

两篇PRB（075411、n2wb-qdhr）的出版社摘要搜索缓存完整可读、直接打开工具内部错误；Research光钟在[官方主题/最近列表](https://journals.aps.org/prresearch/subjects)中摘要可读，独立页面直开亦工具错误。未声称读取付费全文或绕过安全验证。正常浏览器APS主题页遇安全验证，未操作挑战；其余样例公开页面可读。额外以[Crossref出版方登记接口](https://api.crossref.org/journals/2643-1564/works)发现通信论文，逐DOI核对以上受限样例及缺显示卷期，不以该API推论研究结论。

补充元数据：[PRB075411](https://api.crossref.org/works/10.1103/PhysRevB.111.075411)、[PRB激子BIC](https://api.crossref.org/works/10.1103/n2wb-qdhr)、[PRResearch光钟](https://api.crossref.org/works/10.1103/q28c-kb61)、[PRX Hall](https://api.crossref.org/works/10.1103/2dyh-yhrb)、[PRResearch干涉](https://api.crossref.org/works/10.1103/PhysRevResearch.7.013190)标题/ISSN/发表日/卷期匹配。光钟题名的MathML上下标以1S0–3P0、198Hg纯文本等价表示，不删除物理信息。临时原数据work/F3-crossref-metadata.json和F3_RESEARCH_2026-10-03.md保留；以上链接/范围使正式记录可迁移续作。
