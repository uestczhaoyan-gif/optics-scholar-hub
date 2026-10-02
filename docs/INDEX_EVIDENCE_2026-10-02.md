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
