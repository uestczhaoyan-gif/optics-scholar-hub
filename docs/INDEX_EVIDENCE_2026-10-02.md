# 2026-10-02 索引证据核验

## 批次 A5：IEEE、生医、制造与交叉刊（12 本）

使用 [Clarivate Master Journal List](https://mjl.clarivate.com/home)官方公开浏览器界面，逐刊输入目录 ISSN；保持默认 SCIE、SSCI、AHCI、ESCI 四个子库均开启，读取唯一 Exact Match 结果卡的刊名、刊号及 Core Collection 子库。勾选过滤器不是索引证据，也没有从影响因子或历史分区推断当前子库。

| 期刊                                               | 查询刊号  | 结果卡显示刊号        | 子库 | 来源                                                                                         |
| -------------------------------------------------- | --------- | --------------------- | ---- | -------------------------------------------------------------------------------------------- |
| IEEE Communications Surveys & Tutorials            | 1553-877X | 1553-877X             | SCIE | [MJL 结果](https://mjl.clarivate.com/search-results?issn=1553-877X&hide_exact_match_fl=true) |
| IEEE Transactions on Industrial Electronics        | 0278-0046 | 0278-0046 / 1557-9948 | SCIE | [MJL 结果](https://mjl.clarivate.com/search-results?issn=0278-0046&hide_exact_match_fl=true) |
| IEEE Transactions on Cybernetics                   | 2168-2267 | 2168-2267 / 2168-2275 | SCIE | [MJL 结果](https://mjl.clarivate.com/search-results?issn=2168-2267&hide_exact_match_fl=true) |
| IEEE Transactions on Medical Imaging               | 0278-0062 | 0278-0062 / 1558-254X | SCIE | [MJL 结果](https://mjl.clarivate.com/search-results?issn=0278-0062&hide_exact_match_fl=true) |
| IEEE Transactions on Image Processing              | 1057-7149 | 1057-7149 / 1941-0042 | SCIE | [MJL 结果](https://mjl.clarivate.com/search-results?issn=1057-7149&hide_exact_match_fl=true) |
| IEEE Transactions on Geoscience and Remote Sensing | 0196-2892 | 0196-2892 / 1558-0644 | SCIE | [MJL 结果](https://mjl.clarivate.com/search-results?issn=0196-2892&hide_exact_match_fl=true) |
| Biosensors and Bioelectronics                      | 0956-5663 | 0956-5663 / 1873-4235 | SCIE | [MJL 结果](https://mjl.clarivate.com/search-results?issn=0956-5663&hide_exact_match_fl=true) |
| International Journal of Extreme Manufacturing     | 2631-8644 | 2631-8644 / 2631-7990 | SCIE | [MJL 结果](https://mjl.clarivate.com/search-results?issn=2631-8644&hide_exact_match_fl=true) |
| Journal of Biomedical Optics                       | 1083-3668 | 1083-3668 / 1560-2281 | SCIE | [MJL 结果](https://mjl.clarivate.com/search-results?issn=1083-3668&hide_exact_match_fl=true) |
| Journal of Colloid and Interface Science           | 0021-9797 | 0021-9797 / 1095-7103 | SCIE | [MJL 结果](https://mjl.clarivate.com/search-results?issn=0021-9797&hide_exact_match_fl=true) |
| Dyes and Pigments                                  | 0143-7208 | 0143-7208 / 1873-3743 | SCIE | [MJL 结果](https://mjl.clarivate.com/search-results?issn=0143-7208&hide_exact_match_fl=true) |
| Frontiers of Optoelectronics                       | 2095-2759 | 2095-2759 / 2095-2767 | ESCI | [MJL 结果](https://mjl.clarivate.com/search-results?issn=2095-2759&hide_exact_match_fl=true) |

十一条 SCIE 从 unverified 升级为 confirmed / database；Frontiers of Optoelectronics 的 ESCI 由出版社依据升级为 database，SCIE 字段继续保留未核实。ESCI 肯定数量不变，不转换成 SCIE。

本批仅更新十二本的对应索引字段：checkedAt 为 2026-10-02，覆盖起止年仍 null；不登录 profile，不进行单篇检索，不改变 EI、JCR/CAS、作者指南、费用、样例或整刊日期。Biosensors & Bioelectronics 等数据库卡片刊名的连接符差异按刊号核对身份，不改目录正式名称。

当前 SCIE 肯定记录 52/74、MJL 数据库依据 35 本；ESCI 8/74，其中 1 本数据库依据；EI 42/74，其中 24 本 Compendex 来源表依据。此前二十四本 SCIE 和 Compendex 表版本、行号见 [9/30 证据页](INDEX_EVIDENCE_2026-09-30.md)。未核实不等于未收录；索引与 JCR/CAS 分区继续分开。

前批 B2 提交 bb22892 的 [Pages 37007435125](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37007435125) build/deploy 均成功，线上首页及 catalog-version HTTP 200，版本 6a2a5c8f548ecee0bfcf7e87fdbda4fce0f6d5ce14dfc78ddba2aa819b62d32a 与本地一致。

## 批次 A6：其余核心、量子、物理与生医刊（12 本）

继续按 A5 的官方 MJL 刊号方法，以下十二本均为唯一 Exact Match。十刊新增 SCIE 肯定记录；Advanced Photonics Nexus 新增 ESCI 字段，Light: Advanced Manufacturing 的 ESCI 从出版社声明升级为数据库依据，两者均不转换为 SCIE。

| 期刊                              | 查询刊号  | 结果卡显示刊号        | 子库 | 来源                                                                                         |
| --------------------------------- | --------- | --------------------- | ---- | -------------------------------------------------------------------------------------------- |
| Advanced Photonics Nexus          | 2791-1519 | 2791-1519             | ESCI | [MJL 结果](https://mjl.clarivate.com/search-results?issn=2791-1519&hide_exact_match_fl=true) |
| Opto-Electronic Advances          | 2096-4579 | 2096-4579 / 2097-3993 | SCIE | [MJL 结果](https://mjl.clarivate.com/search-results?issn=2096-4579&hide_exact_match_fl=true) |
| Progress in Quantum Electronics   | 0079-6727 | 0079-6727 / 1873-1627 | SCIE | [MJL 结果](https://mjl.clarivate.com/search-results?issn=0079-6727&hide_exact_match_fl=true) |
| PRX Quantum                       | 2691-3399 | 2691-3399             | SCIE | [MJL 结果](https://mjl.clarivate.com/search-results?issn=2691-3399&hide_exact_match_fl=true) |
| Science Advances                  | 2375-2548 | 2375-2548             | SCIE | [MJL 结果](https://mjl.clarivate.com/search-results?issn=2375-2548&hide_exact_match_fl=true) |
| Chinese Physics Letters           | 0256-307X | 0256-307X / 1741-3540 | SCIE | [MJL 结果](https://mjl.clarivate.com/search-results?issn=0256-307X&hide_exact_match_fl=true) |
| Sensors and Actuators B: Chemical | 0925-4005 | 0925-4005             | SCIE | [MJL 结果](https://mjl.clarivate.com/search-results?issn=0925-4005&hide_exact_match_fl=true) |
| Science Bulletin                  | 2095-9273 | 2095-9273 / 2095-9281 | SCIE | [MJL 结果](https://mjl.clarivate.com/search-results?issn=2095-9273&hide_exact_match_fl=true) |
| Proceedings of the IEEE           | 0018-9219 | 0018-9219 / 1558-2256 | SCIE | [MJL 结果](https://mjl.clarivate.com/search-results?issn=0018-9219&hide_exact_match_fl=true) |
| Neurophotonics                    | 2329-423X | 2329-423X / 2329-4248 | SCIE | [MJL 结果](https://mjl.clarivate.com/search-results?issn=2329-423X&hide_exact_match_fl=true) |
| Photoacoustics                    | 2213-5979 | 2213-5979             | SCIE | [MJL 结果](https://mjl.clarivate.com/search-results?issn=2213-5979&hide_exact_match_fl=true) |
| Light: Advanced Manufacturing     | 2689-9620 | 2689-9620 / 2831-4093 | ESCI | [MJL 结果](https://mjl.clarivate.com/search-results?issn=2689-9620&hide_exact_match_fl=true) |

只更新对应索引字段，APN 新增独立 ESCI 记录；原 SCIE 未核实字段保留。Neurophotonics 原为 secondary / unverified，此次取得当前 SCIE 数据库结果。各覆盖起止年仍 null，不从 JCR 或出版年份推断；其余索引、分区和整刊日期未改。

A6 结束时：SCIE 62/74，其中数据库依据 45 本；ESCI 9/74，其中数据库依据 3 本；EI 42/74（数据库依据 24 本）。剩余十二本没有 SCIE 肯定记录，包含已确认 ESCI 的期刊；不等于官方已宣布未收录或停收。

前批 A5 提交 55afdd0 的 [Pages 37008171496](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37008171496) build/deploy 均成功，线上首页及目录版本 HTTP 200，版本 a5398ce7ea7f71081d084e61dbec3c3e9cc4383dacee7e973d57832db6006da3 与本地一致。

## 批次 A7：十二本出版社依据的 SCIE 数据库复核

以下十二本均按目录刊号在 MJL 得到唯一 Exact Match，当前结果卡列 SCIE。已有肯定状态保持，证据从 publisher 升级为 database；不据检索过滤器或 JCR 推断子库。

| 期刊                          | 查询刊号  | 结果卡显示刊号        | 子库 | 来源                                                                                         |
| ----------------------------- | --------- | --------------------- | ---- | -------------------------------------------------------------------------------------------- |
| Light: Science & Applications | 2047-7538 | 2095-5545 / 2047-7538 | SCIE | [MJL 结果](https://mjl.clarivate.com/search-results?issn=2047-7538&hide_exact_match_fl=true) |
| Advanced Photonics            | 2577-5421 | 2577-5421             | SCIE | [MJL 结果](https://mjl.clarivate.com/search-results?issn=2577-5421&hide_exact_match_fl=true) |
| Advanced Optical Materials    | 2195-1071 | 2195-1071             | SCIE | [MJL 结果](https://mjl.clarivate.com/search-results?issn=2195-1071&hide_exact_match_fl=true) |
| Nanophotonics                 | 2192-8606 | 2192-8606 / 2192-8614 | SCIE | [MJL 结果](https://mjl.clarivate.com/search-results?issn=2192-8606&hide_exact_match_fl=true) |
| PhotoniX                      | 2662-1991 | 2662-1991             | SCIE | [MJL 结果](https://mjl.clarivate.com/search-results?issn=2662-1991&hide_exact_match_fl=true) |
| Photonic Sensors              | 1674-9251 | 1674-9251 / 2190-7439 | SCIE | [MJL 结果](https://mjl.clarivate.com/search-results?issn=1674-9251&hide_exact_match_fl=true) |
| eLight                        | 2097-1710 | 2097-1710 / 2662-8643 | SCIE | [MJL 结果](https://mjl.clarivate.com/search-results?issn=2097-1710&hide_exact_match_fl=true) |
| Nano-Micro Letters            | 2311-6706 | 2311-6706 / 2150-5551 | SCIE | [MJL 结果](https://mjl.clarivate.com/search-results?issn=2311-6706&hide_exact_match_fl=true) |
| npj Quantum Materials         | 2397-4648 | 2397-4648             | SCIE | [MJL 结果](https://mjl.clarivate.com/search-results?issn=2397-4648&hide_exact_match_fl=true) |
| npj Quantum Information       | 2056-6387 | 2056-6387             | SCIE | [MJL 结果](https://mjl.clarivate.com/search-results?issn=2056-6387&hide_exact_match_fl=true) |
| Communications Physics        | 2399-3650 | 2399-3650             | SCIE | [MJL 结果](https://mjl.clarivate.com/search-results?issn=2399-3650&hide_exact_match_fl=true) |
| Science China Materials       | 2095-8226 | 2095-8226 / 2199-4501 | SCIE | [MJL 结果](https://mjl.clarivate.com/search-results?issn=2095-8226&hide_exact_match_fl=true) |

LSA 结果卡另显示 2095-5545，本批保留目录既有 eISSN 2047-7538，未将卡片的合并 ISSN/eISSN 栏用于改写缺失的刊号类型。其余刊号、其他索引、分区、指南、样例与整刊日期均不变；覆盖起止年仍 null。

A7 结束时：SCIE 62/74，其中数据库依据 57 本；ESCI 9/74，其中数据库依据 3 本；EI 42/74（数据库依据 24 本）。余下五条出版社 SCIE 与六条出版社 ESCI 继续核验。

A6 提交 812da14 的 [Pages 37008821255](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37008821255) build/deploy 均成功，线上首页及版本 HTTP 200，目录版本 5b2a8b6c7ebe02537d2c8f69195ad259b939d74269c1180b41a2776ea45308aa 与本地一致。

## 批次 A8：其余出版社 SCIE/ESCI 依据（11 本）

以下十一刊均得到唯一 Exact Match，按结果卡实际子库更新对应索引。五条 SCIE、六条 ESCI 从出版社依据升级为 database，肯定数量不变。

| 期刊                                    | 查询刊号  | 结果卡显示刊号        | 子库 | 来源                                                                                         |
| --------------------------------------- | --------- | --------------------- | ---- | -------------------------------------------------------------------------------------------- |
| Advanced Materials                      | 0935-9648 | 0935-9648 / 1521-4095 | SCIE | [MJL 结果](https://mjl.clarivate.com/search-results?issn=0935-9648&hide_exact_match_fl=true) |
| Advanced Functional Materials           | 1616-301X | 1616-301X / 1616-3028 | SCIE | [MJL 结果](https://mjl.clarivate.com/search-results?issn=1616-301X&hide_exact_match_fl=true) |
| Advanced Science                        | 2198-3844 | 2198-3844             | SCIE | [MJL 结果](https://mjl.clarivate.com/search-results?issn=2198-3844&hide_exact_match_fl=true) |
| InfoMat                                 | 2567-3165 | 2567-3165             | SCIE | [MJL 结果](https://mjl.clarivate.com/search-results?issn=2567-3165&hide_exact_match_fl=true) |
| Angewandte Chemie International Edition | 1521-3773 | 1521-3773             | SCIE | [MJL 结果](https://mjl.clarivate.com/search-results?issn=1521-3773&hide_exact_match_fl=true) |
| Opto-Electronic Science                 | 2097-0382 | 2097-0382 / 2097-4000 | ESCI | [MJL 结果](https://mjl.clarivate.com/search-results?issn=2097-0382&hide_exact_match_fl=true) |
| Ultrafast Science                       | 2097-0331 | 2097-0331 / 2765-8791 | ESCI | [MJL 结果](https://mjl.clarivate.com/search-results?issn=2097-0331&hide_exact_match_fl=true) |
| 中国激光                                | 0258-7025 | 0258-7025             | ESCI | [MJL 结果](https://mjl.clarivate.com/search-results?issn=0258-7025&hide_exact_match_fl=true) |
| 光学学报                                | 0253-2239 | 0253-2239             | ESCI | [MJL 结果](https://mjl.clarivate.com/search-results?issn=0253-2239&hide_exact_match_fl=true) |
| 激光与光电子学进展                      | 1006-4125 | 1006-4125             | ESCI | [MJL 结果](https://mjl.clarivate.com/search-results?issn=1006-4125&hide_exact_match_fl=true) |
| 中国光学（中英文）                      | 2097-1842 | 2097-1842             | ESCI | [MJL 结果](https://mjl.clarivate.com/search-results?issn=2097-1842&hide_exact_match_fl=true) |

Angewandte 初查印刷刊号 1433-7851 没有结果，随后用官方刊名搜索找到匹配卡，再按卡片显示且目录已有的电子刊号 1521-3773 查询，得到唯一 Exact Match。来源使用实际成功的电子刊号查询，不把首次无结果解释为停收。中国光学使用现刊号 2097-1842，未改回历史刊号；三个中文刊的英文或音译名按刊号对应。

A8 结束时：现有 62 条 SCIE 和 9 条 ESCI 肯定记录均有当前 MJL 公开结果卡依据。其余十二刊的 SCIE 未核实字段仍保留，包括 ESCI 刊；EI 42（数据库依据 24）、分区、覆盖年份、刊号、指南、样例与整刊日期均不变。剩余三刊的 Web of Science 身份与其他 EI/分区等继续开放。

A7 提交 5df254f 的 [Pages 37009592247](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37009592247) build/deploy 均成功，线上首页及版本 HTTP 200，目录版本 2a734460399d77d4ee59b4286afeebb6e2db75852ba8261c87ca1b35c38b421f 与本地一致。

## 批次 A9：Optica Quantum 身份与 IEEE/生医/制造 EI（12 本）

Optica Quantum [官网](https://opg.optica.org/opticaq/home.cfm)明确公布 ISSN 2837-6714，补入目录的 issn 字段，eissn 仍未知。[MJL 刊号查询](https://mjl.clarivate.com/search-results?issn=2837-6714&hide_exact_match_fl=true)唯一 Exact Match，结果明确为 ESCI；新增独立 ESCI，SCIE 保留未核实。另对光学 精密工程（1004-924X）及红外与激光工程（1007-2276）查询，四个 Core Collection 默认过滤器开启时无刊号结果，刊名搜索仅得相关他刊，未取得本刊匹配；不宣称官方未收录或停收，不改其 SCIE。

10/2 重新打开 [Elsevier Compendex 页面](https://www.elsevier.com/products/engineering-village/databases/compendex)，当前 View source list 仍指向[八月来源表](https://assets.ctfassets.net/o78em1y1w4i4/1vOKA5ELqWIoXeukEI0KPk/25a74b602fc5149a096bd87bf7d9c5e1/COMPENDEX_Source-list-082026.xlsx)。重新下载 SHA-256 为 5f54be62a89d8fd7c74989b081acba363a0e3e23fa64213c2d1ef6851f0b1d39，与 9/30 相同。SERIALS 2026-08-07、DISCONTINUED 2026-05-01、中文表 2026-07-10 三个版本分别核对；只读提取，不修改原表。

以下十一刊在 SERIALS 各有唯一刊号匹配，刊名、Journal 类型和出版社身份相符，停收表无匹配。IEEE COMST 的 and/& 按刊号对应；Neurophotonics 原二手线索升级为当前来源表依据。

| 期刊                                               | 目录刊号              | SERIALS 行号 | 清单刊名                                           | 中文表行号（Renewed） |
| -------------------------------------------------- | --------------------- | ------------ | -------------------------------------------------- | --------------------- |
| IEEE Communications Surveys & Tutorials            | 1553-877X             | 1816         | IEEE Communications Surveys and Tutorials          | —                     |
| Proceedings of the IEEE                            | 0018-9219 / 1558-2256 | 4724         | Proceedings of the IEEE                            | —                     |
| IEEE Transactions on Industrial Electronics        | 0278-0046 / 1557-9948 | 2092         | IEEE Transactions on Industrial Electronics        | —                     |
| IEEE Transactions on Cybernetics                   | 2168-2267 / 2168-2275 | 2070         | IEEE Transactions on Cybernetics                   | —                     |
| IEEE Transactions on Medical Imaging               | 0278-0062 / 1558-254X | 2105         | IEEE Transactions on Medical Imaging               | —                     |
| IEEE Transactions on Image Processing              | 1057-7149 / 1941-0042 | 2090         | IEEE Transactions on Image Processing              | —                     |
| IEEE Transactions on Geoscience and Remote Sensing | 0196-2892 / 1558-0644 | 2086         | IEEE Transactions on Geoscience and Remote Sensing | —                     |
| Biosensors and Bioelectronics                      | 0956-5663 / 1873-4235 | 592          | Biosensors and Bioelectronics                      | —                     |
| Journal of Biomedical Optics                       | 1083-3668 / 1560-2281 | 3073         | Journal of Biomedical Optics                       | —                     |
| Neurophotonics                                     | 2329-423X / 2329-4248 | 4170         | Neurophotonics                                     | —                     |
| International Journal of Extreme Manufacturing     | 2631-8644 / 2631-7990 | 2621         | International Journal of Extreme Manufacturing     | —                     |

A9 结束时：EI 肯定记录 42→53，其中数据库方依据 24→35；SCIE 62（均数据库）、ESCI 9→10（均数据库）。本批不推断覆盖年份、不替换刊号类型；其他分区、指南、费用、样例和整刊日期不变。Optica Quantum 在该 Compendex 表按新刊号无匹配，EI 继续未核实，空结果不判未收录。

A8 提交 11cce82 的 [Pages 37010047912](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37010047912) build/deploy 均成功，线上目录版本 3e041b4ebe98c5c5a8e1552ef4a0c08c15f57648599df86f6c2f2dd6276c546a 与本地一致。

## 批次 A10：十二本光学与材料刊出版社 EI 依据复核（12 本）

复用 A9 已重新下载核对的 [Elsevier 公开来源表](https://assets.ctfassets.net/o78em1y1w4i4/1vOKA5ELqWIoXeukEI0KPk/25a74b602fc5149a096bd87bf7d9c5e1/COMPENDEX_Source-list-082026.xlsx)，文件哈希与三个表版本见 A9。以下各刊 SERIALS 刊号唯一匹配、刊名/Journal 类型/出版社身份相符，DISCONTINUED 无匹配；存在中文表匹配的刊物另核对 2026 Renewed。

| 期刊                          | 目录刊号              | SERIALS 行号 | 清单刊名                                                   | 中文表行号（Renewed） |
| ----------------------------- | --------------------- | ------------ | ---------------------------------------------------------- | --------------------- |
| Light: Science & Applications | 2047-7538             | 3808         | Light: Science and Applications                            | 294                   |
| Advanced Photonics            | 2577-5421             | 151          | Advanced Photonics                                         | —                     |
| Nanophotonics                 | 2192-8606 / 2192-8614 | 4113         | Nanophotonics                                              | —                     |
| Advanced Materials            | 0935-9648 / 1521-4095 | 143          | Advanced Materials                                         | —                     |
| 光学 精密工程                 | 1004-924X / 2097-3209 | 1706         | Guangxue Jingmi Gongcheng/Optics and Precision Engineering | 313                   |
| PhotoniX                      | 2662-1991             | 4364         | PhotoniX                                                   | 323                   |
| Advanced Functional Materials | 1616-301X / 1616-3028 | 138          | Advanced Functional Materials                              | —                     |
| Frontiers of Optoelectronics  | 2095-2759 / 2095-2767 | 1594         | Frontiers of Optoelectronics                               | 156                   |
| Photonic Sensors              | 1674-9251 / 2190-7439 | 4356         | Photonic Sensors                                           | 322                   |
| eLight                        | 2097-1710 / 2662-8643 | 1263         | eLight                                                     | —                     |
| Nano-Micro Letters            | 2311-6706 / 2150-5551 | 4112         | Nano-Micro Letters                                         | 305                   |
| Opto-Electronic Advances      | 2096-4579 / 2097-3993 | 4276         | Opto-Electronic Advances                                   | 314                   |

光学 精密工程的中文名、音译名和英文名由中文表第 313 行对应，身份同时获官网简介支持。LSA 的 and/&、其他连接符以及来源表列位置差异仅用于身份匹配，不改写目录刊号分类或出版社字段。七刊另有中文表 Renewed 记录，按刊号核对，并未将清单年解释为开始覆盖年。

A10 结束时：EI 53/74，其中数据库方依据 47 本。本批新增 0 条肯定记录、升级 12 条出版社证据。SCIE 62 与 ESCI 10 均有 MJL 依据；各覆盖起止年、其他索引、分区、指南、费用、样例与整刊日期不变，未进行订阅平台单篇检索。

前批提交 7f6b06c 的 [Pages 37010772497](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37010772497) build/deploy 均成功，线上首页与版本 HTTP 200，目录版本 6c76f134748b2a85ebaee4c1c1471bb9ecea17c743957a2981bf86b39a20464d 与本地一致后开始本批数据修改。

## 批次 A11：量子、物理与材料十二刊 EI（12 本）

复用 A9 已重新下载核对的 [Elsevier 公开来源表](https://assets.ctfassets.net/o78em1y1w4i4/1vOKA5ELqWIoXeukEI0KPk/25a74b602fc5149a096bd87bf7d9c5e1/COMPENDEX_Source-list-082026.xlsx)，文件哈希与三个表版本见 A9。以下各刊 SERIALS 刊号唯一匹配、刊名/Journal 类型/出版社身份相符，DISCONTINUED 无匹配；存在中文表匹配的刊物另核对 2026 Renewed。

| 期刊                                    | 目录刊号              | SERIALS 行号 | 清单刊名                                  | 中文表行号（Renewed） |
| --------------------------------------- | --------------------- | ------------ | ----------------------------------------- | --------------------- |
| Ultrafast Science                       | 2097-0331 / 2765-8791 | 5690         | Ultrafast Science                         | —                     |
| npj Quantum Information                 | 2056-6387             | 4213         | npj Quantum Information                   | —                     |
| Communications Physics                  | 2399-3650             | 873          | Communications Physics                    | —                     |
| Advanced Science                        | 2198-3844             | 157          | Advanced Science                          | —                     |
| Angewandte Chemie International Edition | 1433-7851 / 1521-3773 | 278          | Angewandte Chemie - International Edition | —                     |
| Science China Materials                 | 2095-8226 / 2199-4501 | 5197         | Science China Materials                   | 342                   |
| Nature Photonics                        | 1749-4885 / 1749-4893 | 4142         | Nature Photonics                          | —                     |
| Advanced Optical Materials              | 2195-1071             | 150          | Advanced Optical Materials                | —                     |
| Progress in Quantum Electronics         | 0079-6727 / 1873-1627 | 4986         | Progress in Quantum Electronics           | —                     |
| PRX Quantum                             | 2691-3399             | 4999         | PRX Quantum                               | —                     |
| Nature Electronics                      | 2520-1131             | 4137         | Nature Electronics                        | —                     |
| Nature Materials                        | 1476-1122 / 1476-4660 | 4140         | Nature Materials                          | —                     |

Ultrafast Science、npj Quantum Information、Communications Physics、Advanced Science、Angewandte 和 Science China Materials 的出版社 EI 依据升级为数据库方来源表；Nature Photonics、AOM、PQE、PRX Quantum、Nature Electronics、Nature Materials 新增 EI 肯定。AOM 旧出版社页没列 EI 不作为未收录结论。Science China Materials 另匹配中文表第 342 行 Renewed，清单语言列不用于改写目录语言或身份。

A11 结束时：EI 59/74，其中数据库方依据 59 本。本批新增 6 条肯定记录、升级 6 条出版社证据。SCIE 62 与 ESCI 10 均有 MJL 依据；各覆盖起止年、其他索引、分区、指南、费用、样例与整刊日期不变，未进行订阅平台单篇检索。

前批提交 dff0b61 的 [Pages 37011152431](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37011152431) build/deploy 均成功，线上首页与版本 HTTP 200，目录版本 d6cfaaabcaad27b2ce259070025903e893d7d65be369e366f47be90c48728e52 与本地一致后开始本批数据修改。

## 批次 A12：其余八本交叉刊 EI（8 本）

复用 A9 已重新下载核对的 [Elsevier 公开来源表](https://assets.ctfassets.net/o78em1y1w4i4/1vOKA5ELqWIoXeukEI0KPk/25a74b602fc5149a096bd87bf7d9c5e1/COMPENDEX_Source-list-082026.xlsx)，文件哈希与三个表版本见 A9。以下各刊 SERIALS 刊号唯一匹配、刊名/Journal 类型/出版社身份相符，DISCONTINUED 无匹配；存在中文表匹配的刊物另核对 2026 Renewed。

| 期刊                                     | 目录刊号              | SERIALS 行号 | 清单刊名                                 | 中文表行号（Renewed） |
| ---------------------------------------- | --------------------- | ------------ | ---------------------------------------- | --------------------- |
| Nature Nanotechnology                    | 1748-3387 / 1748-3395 | 4141         | Nature Nanotechnology                    | —                     |
| Science Advances                         | 2375-2548             | 5183         | Science Advances                         | —                     |
| Chinese Physics Letters                  | 0256-307X / 1741-3540 | 800          | Chinese Physics Letters                  | —                     |
| Journal of Colloid and Interface Science | 0021-9797 / 1095-7103 | 3123         | Journal of Colloid and Interface Science | —                     |
| Dyes and Pigments                        | 0143-7208 / 1873-3743 | 1177         | Dyes and Pigments                        | —                     |
| Sensors and Actuators B: Chemical        | 0925-4005             | 5231         | Sensors and Actuators B: Chemical        | —                     |
| Science Bulletin                         | 2095-9273 / 2095-9281 | 5193         | Science Bulletin                         | 338                   |
| Photoacoustics                           | 2213-5979             | 4349         | Photoacoustics                           | —                     |

八刊新增当前 EI 来源表依据，Science Bulletin 另匹配中文表第 338 行 Renewed。Photoacoustics 的刊号在来源表印刷列、目录为电子刊号，仅跨两列核对身份，不用清单列位置改写目录。此轮全部 74 刊的 Compendex 身份扫描已完成，剩余七刊按目录刊号及规范化完整刊名均未匹配，具体缺口另列，不由空结果判定未收录或停收。

A12 结束时：EI 67/74，其中数据库方依据 67 本。本批新增 8 条肯定记录、升级 0 条出版社证据。SCIE 62 与 ESCI 10 均有 MJL 依据；各覆盖起止年、其他索引、分区、指南、费用、样例与整刊日期不变，未进行订阅平台单篇检索。

前批提交 630e597 的 [Pages 37011481712](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37011481712) build/deploy 均成功，线上首页与版本 HTTP 200，目录版本 8b4a7076eb4a58fb8364389f394232fdf87ae432d3edaaee9a0942c3f682dd32 与本地一致后开始本批数据修改。

### 未取得 Compendex 肯定匹配的七刊

Optica Quantum（2837-6714）；Advanced Photonics Nexus（2791-1519）；Opto-Electronic Science（2097-0382 / 2097-4000）；Light: Advanced Manufacturing（2689-9620 / 2831-4093）；Nature Communications（2041-1723）；npj Quantum Materials（2397-4648）；InfoMat（2567-3165）。在本版 SERIALS、DISCONTINUED 及中文表均无刊号或规范化完整刊名匹配，EI 维持 unverified；此结果只说明本轮公开表未找到，不是数据库方停收声明，也不否认其他平台或版本可能存在覆盖。后续以新版表、出版社明确清单或机构 Engineering Village 入口为依据，不反复重查同一版文件。
