# 作者指南与费用核验：2026-10-02

仅记录实际读取的字段，不把指南可读解释为整刊、分区或索引复核。动态价格为核验日页面值；适用税费、稿型、录用日期、资助/机构协议和减免资格分别核对。

## E1：六本交叉期刊

前批 C2 提交 `822489d` 的 [Pages 37013068648](https://github.com/uestczhaoyan-gif/optics-scholar-hub/actions/runs/37013068648) build/deploy 成功，线上首页/版本 HTTP 200，版本 `e88e9eef9e668ab6a982aa4a56fb89905d54c8b4a2c26353e185b322709118cc` 与本地一致。

| 本刊                    | 官方页与实际核对                                                                                                                                                                                                                                                                                                                        | 结果/边界                                                                                                                                                                          |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Nature Communications   | 浏览器从菜单 For authors 定位[作者入口](https://www.nature.com/ncomms/submit)，读取 [Article](https://www.nature.com/ncomms/submit/article)、[How to submit](https://www.nature.com/ncomms/submit/how-to-submit)；另读取[透明评审](https://www.nature.com/ncomms/submit/tpr-faq)及[收费页](https://www.nature.com/ncomms/open-access)。 | Article 正文 5,000 词是建议，初投较灵活；摘要 200 词、标题 15 词、首次合并文件 30 MB。补披露相关稿件、代码和透明评审适用范围。未将摘要/预印本例外泛化到会议全文。                  |
| npj Quantum Materials   | [作者入口](https://www.nature.com/npjquantmats/for-authors-and-referees)、[Submission guidelines](https://www.nature.com/npjquantmats/for-authors-and-referees/submission-guidelines)、[Content types](https://www.nature.com/npjquantmats/content-types)、[APC](https://www.nature.com/npjquantmats/apc)均在本刊界面核对。             | Article 摘要 150 词、标题 15 词；正文/页数无统一严格上限。初投建议 PDF/Word，录用阶段可交 LaTeX；数据/代码声明和通讯作者最终稿前 ORCID。不同稿型 APC 分档。                        |
| npj Quantum Information | [作者入口](https://www.nature.com/npjqi/for-authors-and-referees)、[Submission guidelines](https://www.nature.com/npjqi/for-authors-and-referees/submission-guidelines)、[Content types](https://www.nature.com/npjqi/content-types)、[APC](https://www.nature.com/npjqi/apc)逐刊读取。                                                 | Article 与 Brief Communication 的摘要及篇幅分开；本刊初投、声明、ORCID 与提交入口已核对，不因同属 npj 就套用另一刊费用。                                                           |
| Communications Physics  | [作者入口](https://www.nature.com/commsphys/submit)、[Content types](https://www.nature.com/commsphys/submit/content-types)、[Formatting Guidelines](https://www.nature.com/commsphys/submit/formatting-guidelines)、[收费页](https://www.nature.com/commsphys/open-access)逐项读取。                                                   | 原始研究约 5,000 词为建议，方法不计入；推荐表摘要 150–250 词。Word/LaTeX ZIP、两种章节顺序、统计和适用激光/光伏清单已核对。完整附信与数据代码政策留给 Policy Guide，未标全部完成。 |
| Science Bulletin        | 网页工具 403 后，浏览器成功读取[Guide for authors](https://www.sciencedirect.com/journal/science-bulletin/publish/guide-for-authors)及[OA options](https://www.sciencedirect.com/journal/science-bulletin/publish/open-access-options)。                                                                                                | Article、Review 和 Short Communication 独立长度，正式 ScholarOne 入口、附信/返修与图像材料要求已补。订阅页费和 OA APC 分开记录，不由“无 OA 费”推断免费发表；彩页价继续待核实。     |
| Science Advances        | [Information for authors](https://www.science.org/content/page/science-advances-information-authors)网页工具 403；浏览器持续为安全验证页。                                                                                                                                                                                              | 本轮没有正文依据，不改变原有要求或费用，不以 Science 或 Science Partner Journals 替代，也未操作验证控件。                                                                          |

### 核验日价格

| 期刊/稿型                                                                                   |   GBP |   USD |   EUR | 适用范围                                                                                                |
| ------------------------------------------------------------------------------------------- | ----: | ----: | ----: | ------------------------------------------------------------------------------------------------------- |
| Nature Communications                                                                       | 5,490 | 7,350 | 6,150 | APC；价格由录用日期确定，适用税费另计。指南另明确无投稿费或页费。                                       |
| npj Quantum Materials / Original Research                                                   | 2,290 | 2,990 | 2,590 | APC；税费另计，按录用日期确定。                                                                         |
| npj Quantum Materials / Comment、Perspective、Review                                        | 1,155 | 1,535 | 1,295 | 与 Original Research 区分。                                                                             |
| npj Quantum Information / Original Research                                                 | 3,090 | 4,390 | 3,690 | APC；税费另计，按录用日期确定。                                                                         |
| npj Quantum Information / Brief Communication、Perspective、Review、Comment、Meeting Report | 1,510 | 2,040 | 1,710 | 不将原始研究价格用于所有稿型。                                                                          |
| Communications Physics                                                                      | 3,150 | 4,190 | 3,590 | APC；税费另计，按录用日期确定。                                                                         |
| Science Bulletin / OA 全部稿型                                                              |     — | 3,880 |     — | 不含税；按个体协议核对。订阅路径作者指南另列黑白页 RMB 1,000（亦标 USD 150）/页，彩页规则待编辑部核实。 |

五本正式条目只改 `guide`、`requirements` 和/或 `publishing`，整刊核验日、分区、索引、论文样例及候选状态保留。费用和规则的精确出处见表内链接；E 的其他作者指南与交叉样例仍开放。

## E3：六刊指南或收费补充

仅更改六刊 guide、requirements 和/或 publishing；整刊日期、索引、分区与样例保持。2026-10-02 当前报价与其定价时点分别记录，货币不是汇率换算，未知税费不当作含税报价。

| 期刊                    | 官方来源与核验结果                                                                                                                                                                                                                                                                                                                                               |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Nano-Micro Letters      | [本刊/出版社收费页](https://link.springer.com/journal/40820/how-to-publish-with-us)：完全开放获取、CC BY。2026-10-02 收费页列当前 APC GBP 1,890 / USD 2,690 / EUR 2,190，适用 VAT/地方税另计，价格按录用日确定；不使用指南遗留的 2023 报价。机构协议及减免依资格核对，自主减免应在投稿时申请。                                                                   |
| Science China Materials | [本刊/出版社收费页](https://link.springer.com/journal/40843/how-to-publish-with-us)：混合出版。2026-10-02 收费页列可选 OA APC GBP 3,090 / USD 4,990 / EUR 3,990，适用 VAT/地方税另计，按录用日定价；订阅出版不收此 APC。编辑部版面费与出版社 OA APC 独立，版面费当前金额仍待核实；机构 OA 协议不自动涵盖编辑部版面费，不把无 APC 解释成总费用为零。              |
| Advanced Science        | [本刊/出版社收费页](https://advanced.onlinelibrary.wiley.com/hub/journal/21983844/open-access)：完全开放获取。2026-10-02 本刊页列 APC USD 6,730 / GBP 4,480 / EUR 5,640（税费另计）；Comment 稿型免此 APC，不收投稿费或页费。国家/地区减免和 Wiley Open Access Account 覆盖按资格核对，账户覆盖与投稿日及发表时有效安排有关；不能把 Comment 免收套用于原始研究。 |
| InfoMat                 | [本刊/出版社收费页](https://onlinelibrary.wiley.com/page/journal/25673165/homepage/open-access)：完全开放获取、CC BY。2026-10-02 本刊页列 APC USD 3,000 / GBP 2,300 / EUR 2,550（税费另计），Society Members 列全额 APC 的 10% 优惠，具体会员资格须核实；不收投稿费或页费。国家/地区减免、机构账户覆盖按资格处理，不能沿用创刊前三年免 APC 的历史介绍。          |
| PRX Quantum             | [本刊/出版社收费页](https://journals.aps.org/authors/apcs)：完全开放获取、CC BY 4.0。2026-10-02 APS 官方 2026 APC 表列 PRX Quantum USD 3,590；价格在投至实际发表期刊时确定，转投也按该刊提交时点处理。Editorial、Comment、Correction 不适用 APC；机构协议及低收入地区减免按资格核实。税费处理本轮未核实，不将此数额称为含税总价。                                |
| Advanced Materials      | [本刊作者指南](https://advanced.onlinelibrary.wiley.com/hub/journal/15214095/author-guidelines)：研究稿建议长度与摘要硬限分开，支持 Free Format，Wiley Authors ADMA 为现入口；模板/TOC 和返修材料按本刊说明。收费未新增报价。                                                                                                                                    |

Nano-Micro Letters 与 Science China Materials 本刊收费页的 Submit 链接分别为 [nmlett](https://mc03.manuscriptcentral.com/nmlett) 和 [scms](https://mc03.manuscriptcentral.com/scms)，本轮请求 403；仅核实官方所指向的渠道，不称已完成登录验证。NML 双盲、摘要与 TOC 的既有条款未重新全核，邮件方式遗留仍须编辑部澄清。SCM 最新版面费金额及全文模板细则继续待核实。

[PRX Quantum 本刊指南](https://journals.aps.org/prxquantum/authors)同时列 Research Article 无统一上限、Perspective 7,500、Tutorial 37,500、Comment/Reply 3,500 词，单独更新类型表。其他既有条款仍保留，不刷新整刊 checkedAt。InfoMat 创刊免 APC 的旧 overview 与当前收费页区分；Wiley Comment 免收规则只来自 Advanced Science 本刊，不能泛化到 InfoMat。

## E5：Optica 出版集团七刊费用

2026-10-02 读取 [官方收费表](https://opg.optica.org/content/author/portal/item/review-pub-charge?section=apcs/) 及 [版权和许可说明](https://opg.optica.org/content/author/portal/item/review-copyright-permissions/)。下列为本刊基础金额，超页费另计，不能将收费范围当作允许超过稿型篇幅。

| 期刊                             | USD 基础价与超页规则                                                                                                                                                                | 官方生效日                        |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| Biomedical Optics Express        | 15 页内 USD 1,775；第 16 页起每页 USD 145；符合条件的 CC BY 基础价 USD 2,025                                                                                                        | 2026-01-01                        |
| Optical Materials Express        | 15 页内 USD 1,760；第 16 页起每页 USD 145；符合条件的 CC BY 基础价 USD 2,010                                                                                                        | 2026-01-01                        |
| Optics Express                   | 15 页内 USD 2,300；第 16 页起每页 USD 145；符合条件的 CC BY 基础价 USD 2,550                                                                                                        | 2026-01-01                        |
| Optica                           | Letter（至多 4 页）/memorandum（至多 2 页）USD 2,910；Research Article（至多 8 页）USD 3,460；超过 8 页每页 USD 145；符合条件的 CC BY 基础价分别 USD 3,160（≤4 页）/3,710（5–8 页） | 2026-01-01                        |
| Optica Quantum                   | Research Article 8 页内 USD 2,265；超过 8 页每页 USD 145；符合条件的 CC BY 基础价 USD 2,515                                                                                         | 2026-01-01                        |
| Photonics Research               | 10 页内 USD 2,500；第 11 页起每页 USD 145；符合条件的 CC BY 基础价 USD 2,750                                                                                                        | 2024-01-01                        |
| Advances in Optics and Photonics | 官方明确不收发表费用                                                                                                                                                                | 核验日 2026-10-02；页面未列生效日 |

六本开放获取刊录用后付款，无投稿费。默认开放获取协议与 CC BY 不同；CC BY 按经确认的资助方要求在投稿中确定，不把此价格当作人人必付。机构协议及符合条件国家的减免需逐案确认，税费及收费版本适用时点未明确；Photonics Research 的当前表仍保留 2024-01-01 生效日。

本批仅更新七刊 publishing。模板、稿型、会议扩展和其他指南缺口仍开放；索引、分区、样例与整刊日期未刷新。

## E6：Optica 五刊模板与政策

逐刊读取 About/Submission 与公共模板、许可和会议扩展政策；模板表明确列出这五刊，适用范围不是从同出版社推断。仅核对公开 Prism 链接，没有登录提交。

| 期刊                                                                                | 本刊依据及范围                                                                                                                                                 |
| ----------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Optics Express](https://opg.optica.org/content/journal/about/item/oe/)             | 本刊接收原创研究、专题稿、邀稿综述及已发表文章的评论；研究稿具体篇幅和摘要限制仍待核实。                                                                       |
| [Biomedical Optics Express](https://opg.optica.org/content/journal/about/item/boe/) | 本刊接收原创研究、专题稿、邀稿综述及评论；动物/人体研究须注明伦理审批，人体研究须说明知情同意。研究稿具体篇幅和摘要限制仍待核实。                              |
| [Optical Materials Express](https://opg.optica.org/content/journal/about/item/ome/) | 本刊接收原创研究、专题稿、邀稿综述及评论；Opinion 通常邀稿，可先向主编提出选题，至多四页（不计参考文献），此限制不套用到研究稿。研究稿篇幅和摘要限制仍待核实。 |
| [Photonics Research](https://opg.optica.org/content/journal/about/item/prj/)        | 本刊接收原创研究、专题稿、邀稿综述及评论；研究稿具体篇幅和摘要限制仍待核实。                                                                                   |
| [Optica Quantum](https://opg.optica.org/content/journal/about/item/opticaq/)        | 本刊强调由光学/光子学支持的量子信息科技高影响结果，包括理论、实验及技术研究；具体稿型篇幅、摘要和综述提案流程仍待核实。                                        |

- [模板表](https://opg.optica.org/content/author/portal/item/templates-default)：Word/LaTeX、PDF 和源文件提交路径；LaTeX 标准命令与文件名大小写。模板页标注 2024-10-24，不将本次核验日当模板版本。
- [许可和预印本政策](https://opg.optica.org/content/author/portal/item/review-copyright-permissions/)：投稿前/审稿中可发预印本，录用后可更新版本按版权/许可区分，链接正式版本。
- [会议扩展政策](https://opg.optica.org/content/author/portal/item/review-general-policies/)：新增内容、会议归属、复用版权、修改题名及正常评审，无统一新增百分比。动物/人体研究另有伦理声明要求。

只改五刊 guide/requirements；E5 publishing、索引、分区、样例和整刊日期保留。研究稿长度/摘要等未知细则明确开放，不能把模板或收费页的页数门槛当作研究稿硬上限。
