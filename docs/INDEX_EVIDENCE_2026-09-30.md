# 2026-09-30 Compendex 来源表核验

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
