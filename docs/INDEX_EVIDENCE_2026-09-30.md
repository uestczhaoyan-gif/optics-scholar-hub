# 2026-09-30 索引证据核验

## 批次 A1：Compendex 优先刊（12 本）

来源：[Elsevier Compendex 官方产品页](https://www.elsevier.com/products/engineering-village/databases/compendex)的 View source list 链接指向[公开 XLSX](https://assets.ctfassets.net/o78em1y1w4i4/1vOKA5ELqWIoXeukEI0KPk/25a74b602fc5149a096bd87bf7d9c5e1/COMPENDEX_Source-list-082026.xlsx)。核验日 2026-09-30；SERIALS 表首注明 2026-08-07，DISCONTINUED 表首注明 2026-05-01。

下载文件 SHA-256：`5f54be62a89d8fd7c74989b081acba363a0e3e23fa64213c2d1ef6851f0b1d39`。原文件与只读提取中间记录位于忽略的 work/indexes-20260930；公开仓库只保存核验结论与必要的身份字段。

逐刊去除 ISSN 连字符，以印刷/电子刊号任一精确匹配并核对刊名、Journal 类型与出版社。以下 12 本在 SERIALS 各有唯一匹配，在 DISCONTINUED 无匹配。Optica 与 Optics Express 的清单 ISSN 列位置和目录印刷/电子分类不同；本批跨两列匹配身份，不据此改写刊号类型。

| 期刊                                     | 目录刊号              | SERIALS Excel 行号 | 清单刊名                                 |
| ---------------------------------------- | --------------------- | ------------------ | ---------------------------------------- |
| High Power Laser Science and Engineering | 2095-4719 / 2052-3289 | 1732               | High Power Laser Science and Engineering |
| Laser & Photonics Reviews                | 1863-8880 / 1863-8899 | 3772               | Laser and Photonics Reviews              |
| ACS Photonics                            | 2330-4022             | 89                 | ACS Photonics                            |
| ACS Nano                                 | 1936-0851 / 1936-086X | 88                 | ACS Nano                                 |
| ACS Sensors                              | 2379-3694             | 90                 | ACS Sensors                              |
| Nano Letters                             | 1530-6984 / 1530-6992 | 4099               | Nano Letters                             |
| Chemical Reviews                         | 0009-2665 / 1520-6890 | 753                | Chemical Reviews                         |
| Inorganic Chemistry                      | 0020-1669 / 1520-510X | 2301               | Inorganic Chemistry                      |
| APL Photonics                            | 2378-0967             | 330                | APL Photonics                            |
| Applied Physics Reviews                  | 1931-9401             | 377                | Applied Physics Reviews                  |
| Optica                                   | 2334-2536             | 4253               | Optica                                   |
| Optics Express                           | 1094-4087             | 4269               | Optics Express                           |

对应 EI 字段设为 confirmed / database，表示获得数据库方公开来源表依据，并非已登录 Engineering Village 或已验证每篇文章。覆盖起止年保持 null；列表更新日期不代表开始/终止覆盖日，DEFINITIONS 的英文说明明确区分二者。SCIE、ESCI、JCR/CAS、费用、作者指南及整刊核验日期未变。

第一批确认：提交 1515ec6 的 [Pages 36704905503](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/36704905503) build/deploy 均成功；线上首页 HTTP 200，包含更新后的 OMTA 会期与 Photonics West 幻灯片日期。

## 批次 A2：核心光学与中文 EI（12 本）

复用同一下载文件；中文表 CHINESE JRS on SERIALS LIST 的版本单独为 2026-07-10。七本新增 EI 肯定记录，五本中文刊将已有出版社证据升级为数据库方来源表，累计数据库方依据 24 本、EI 肯定记录 42 本。

| 期刊                                             | 目录刊号              | SERIALS 行号 | 清单刊名                                         | 中文表行号 / 2026 状态 |
| ------------------------------------------------ | --------------------- | ------------ | ------------------------------------------------ | ---------------------- |
| Advances in Optics and Photonics                 | 1943-8206             | 196          | Advances in Optics and Photonics                 | —                      |
| Photonics Research                               | 2327-9125             | 4361         | Photonics Research                               | —                      |
| Journal of Lightwave Technology                  | 0733-8724 / 1558-2213 | 3362         | Journal of Lightwave Technology                  | —                      |
| Journal of Optical Communications and Networking | 1943-0620 / 1943-0639 | 3477         | Journal of Optical Communications and Networking | —                      |
| Optics Letters                                   | 0146-9592 / 1539-4794 | 4270         | Optics Letters                                   | —                      |
| Biomedical Optics Express                        | 2156-7085             | 570          | Biomedical Optics Express                        | —                      |
| Optical Materials Express                        | 2159-3930             | 4259         | Optical Materials Express                        | —                      |
| 中国激光                                         | 0258-7025             | 5842         | Zhongguo Jiguang/Chinese Journal of Lasers       | 86 / Renewed           |
| 光学学报                                         | 0253-2239             | 1707         | Guangxue Xuebao/Acta Optica Sinica               | 18 / Renewed           |
| 激光与光电子学进展                               | 1006-4125             | 3770         | Laser and Optoelectronics Progress               | 292 / Renewed          |
| 中国光学（中英文）                               | 2097-1842             | 797          | Chinese Optics                                   | 98 / Renewed           |
| 红外与激光工程                                   | 1007-2276             | 2291         | Infrared and Laser Engineering                   | 170 / Renewed          |

五本中文刊同时按刊号、中文名和英文/音译名核对。中国光学（中英文）匹配现刊号 2097-1842，未借用历史刊号替代。中文表列出的 Renewed 是源表 2026 状态，并非覆盖开始年。Photonics Research 的刊号列位置与目录电子刊号分类不同，保留目录刊号类型。未改变其他索引、分区和整刊日期。

批次 A1 提交 f77161d 的 [Pages 36705869178](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/36705869178) build/deploy 均成功；线上 catalog-version.json HTTP 200。

## 批次 A3：Clarivate 当前 SCIE 查询（12 本）

2026-09-30 使用 [Clarivate Master Journal List](https://mjl.clarivate.com/home)公开搜索界面，保持默认四个 Core Collection 子库过滤均开启，逐刊输入目录刊号，等待结果卡载入后核对唯一 Exact Match、刊名、刊号和具体子库。以下 12 本结果卡均明确列 SCIE；不是根据侧栏已勾选的 SCIE 过滤器或影响因子推断。

| 期刊                                             | 查询刊号  | 结果卡显示刊号        | 来源                                                                                         |
| ------------------------------------------------ | --------- | --------------------- | -------------------------------------------------------------------------------------------- |
| High Power Laser Science and Engineering         | 2052-3289 | 2095-4719 / 2052-3289 | [MJL 结果](https://mjl.clarivate.com/search-results?issn=2052-3289&hide_exact_match_fl=true) |
| Advances in Optics and Photonics                 | 1943-8206 | 1943-8206             | [MJL 结果](https://mjl.clarivate.com/search-results?issn=1943-8206&hide_exact_match_fl=true) |
| Optica                                           | 2334-2536 | 2334-2536             | [MJL 结果](https://mjl.clarivate.com/search-results?issn=2334-2536&hide_exact_match_fl=true) |
| Photonics Research                               | 2327-9125 | 2327-9125             | [MJL 结果](https://mjl.clarivate.com/search-results?issn=2327-9125&hide_exact_match_fl=true) |
| Journal of Lightwave Technology                  | 0733-8724 | 0733-8724 / 1558-2213 | [MJL 结果](https://mjl.clarivate.com/search-results?issn=0733-8724&hide_exact_match_fl=true) |
| Journal of Optical Communications and Networking | 1943-0620 | 1943-0620 / 1943-0639 | [MJL 结果](https://mjl.clarivate.com/search-results?issn=1943-0620&hide_exact_match_fl=true) |
| Optics Express                                   | 1094-4087 | 1094-4087             | [MJL 结果](https://mjl.clarivate.com/search-results?issn=1094-4087&hide_exact_match_fl=true) |
| Optics Letters                                   | 0146-9592 | 0146-9592 / 1539-4794 | [MJL 结果](https://mjl.clarivate.com/search-results?issn=0146-9592&hide_exact_match_fl=true) |
| Biomedical Optics Express                        | 2156-7085 | 2156-7085             | [MJL 结果](https://mjl.clarivate.com/search-results?issn=2156-7085&hide_exact_match_fl=true) |
| Optical Materials Express                        | 2159-3930 | 2159-3930             | [MJL 结果](https://mjl.clarivate.com/search-results?issn=2159-3930&hide_exact_match_fl=true) |
| APL Photonics                                    | 2378-0967 | 2378-0967             | [MJL 结果](https://mjl.clarivate.com/search-results?issn=2378-0967&hide_exact_match_fl=true) |
| Applied Physics Reviews                          | 1931-9401 | 1931-9401             | [MJL 结果](https://mjl.clarivate.com/search-results?issn=1931-9401&hide_exact_match_fl=true) |

source 保存按刊号的查询入口。官方 Share This Journal 生成的 HPL 地址在域名后多了 ://，删除这段后用浏览器验证可重现；页面载入后自动移除参数，重新查询可用表内刊号。未登录需免费账号的 profile 页面，未获取覆盖起止年或单篇记录。各 SCIE 字段设为 confirmed / database，覆盖起止年继续 null；EI、ESCI、分区和整刊日期未改。HPL 当前依据替代未核实的历史声明，2017 公告仍保留在历史日志。

批次 A2 提交 22cf6ed 的 [Pages 36707140446](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/36707140446) build/deploy 成功；线上版本 4f423d0109b7052bb953174de00622a54987249ace305b2c34adc67bdab5d7e8 与本地一致。
