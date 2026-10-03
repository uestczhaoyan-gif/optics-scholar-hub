# APS 候选预核验与续接范围

核验：2026-10-03。本轮是 F2 的研究准备，六刊仍为 pending，未加入正式79刊，也未写入JCR/CAS或SCIE/ESCI记录。下次接续先完成准入与字段审核；当前正式数量仍为79刊/65届会议/9活动、272候选（152 admitted /116 pending /4 deferred）。

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
