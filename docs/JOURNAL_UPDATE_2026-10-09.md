# 期刊分页与收录范围更新

日期：2026-10-09。状态：已验证并发布，提交 1077290，Actions 37954686575 成功。

## 问题与修改

- 原有 112 本期刊一次性渲染，无分页。现为每页 12 本，可选 24 / 48 本；上下均可翻页或选择页码。搜索、方向、分区、索引与关注筛选先应用于全量目录，再分页；筛选变化回到第一页。末页与空结果不会越界。
- 原始数据已有 19 本期刊带 Q3/Q4 或中科院 3/4 区记录；`rankingMatches` 与 `previewRankings` 却固定排除大于 2 的分区，分享链接也只接受 1/2。现统一支持 1–4，保留版本、学科、大类/小类和证据级别约束。“1/2 区精选”仍为独立可选合集。
- 数据准入从有来源的 Q1/Q2 或 confirmed EI 扩展为有来源的 Q1–Q4 或 confirmed EI。本轮不宣称已收齐全部三区、四区期刊。
- 增加 Nature、Science 母刊；Chemical Reviews 原已存在，未重复添加。现有 114 本期刊、133 届会议，候选 273 项，其中 223 admitted、43 pending、7 deferred。

## 两本新增母刊的依据与边界

用户本轮明确指定收录，三篇近期光学原论文样例改为这两刊的后续补充项。原 V1-G3O pending 决策是旧版准入门槛下的历史记录，不改写历史验收。

- Nature：本轮读取[官方期刊信息检索结果](https://www.nature.com/nature/journal-information)核对范围及 0028-0836 / 1476-4687；[初投稿指南检索结果](https://www.nature.com/nature/for-authors/initial-submission)与[格式指南检索结果](https://www.nature.com/nature/for-authors/formatting-guide)支持初投格式灵活和可投稿前咨询。直接打开出现身份跳转错误，未冒充完整指南正文成功；未写入字数、收费和周期等易变化细节。
- Science：复用 2026-10-06 已记录的 AAAS 官方身份及刊号证据；本轮官网及作者页返回 403，条目 `checkedAt` 保持 2026-10-06，不以访问失败刷新核验日期。稿型篇幅、附件、费用、周期明确待核。
- 两刊 JCR 保存 **JCR 2025 / 指标年 2024 / MULTIDISCIPLINARY SCIENCES / Q1 / secondary**。复用[机构转载来源](https://uefiscdi.gov.ro/resource-865584-JCR_2024.iunie2025.pdf)，本轮重新查看本地缓存的第 521、522 页图像，核对刊名、两刊号和 JIF Quartile 列。此历史分区不能替代当前 MJL、CAS 或 2026 年分区核验。
- 当前 SCIE / EI 独立查询未完成，两刊均显式标记 unverified。历史来源列出的 SCIE 身份不升级为当前数据库核实。
- 原始逐项证据与访问限制见 [V1-G3O 记录](V1_CANDIDATE_REVIEW_2026-10-06.md#v1-g3o)。

## 验证

- 数据校验通过：114 本期刊、133 届会议，刊号及候选关联一致。
- 36 项自动测试通过，新增 Q3/Q4 匹配、预览、准入、分享链接与分页边界覆盖。
- TypeScript、oxlint 通过；按 `/optics-scholar-hub` 子路径生产构建和静态导出通过。构建保留已有大体积 chunk 提示。
- 浏览器实测：默认 12 本 / 10 页；下一页显示 13–24，末页 109–114，Nature / Science 可见；末页搜索 Chemical Review 得到唯一 Chemical Reviews 并回首页；24 本页长正常。JCR Q4 得到 4 本，Q3 得到 13 本且第 2 页有 1 本。
- 390 px 手机视口下翻页及页码可用，无横向溢出。
- 本地目录改名使 1414 个依赖 junction 指向旧位置，已仅在当前 `node_modules` 内修复；依赖版本和锁文件未变。沙箱 realpath 限制造成的构建/类型检查错误通过正常提权重跑解决。

本轮已按用户后续要求推送并部署；后续使用体验改进见 [完整清单](UX_CHECKLIST_2026-10-09.md)。
