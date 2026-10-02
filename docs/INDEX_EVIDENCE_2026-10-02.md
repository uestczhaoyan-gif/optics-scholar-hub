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
