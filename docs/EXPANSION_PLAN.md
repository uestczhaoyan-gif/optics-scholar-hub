# 光学及交叉领域扩充计划与候选清单

规划日期：2026-09-10；执行状态更新：2026-09-11。规划基线为 19 本期刊、9 届会议；当前正式目录为 65 本期刊、17 届会议，另列 7 项展会/论坛（含母子活动）。

**本文件是持续维护的候选池，不是全部通过审核的目录。** 下方状态表记录已执行批次；其余候选仍需逐项核对存续状态、准确名称、官网、研究范围及当前资料。正式收录以 `data/journals.json` 与 `data/conferences.json` 为准，字段核验范围见 [核验日志](VERIFICATION_LOG.md)。

## 当前执行状态

| 类别                     | 已加入正式目录                                                                                                  | 后续维护重点                                           |
| ------------------------ | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 期刊（相对规划基线新增） | 光学 精密工程、PhotoniX、Advanced Functional Materials、Frontiers of Optoelectronics、Laser & Photonics Reviews | 索引数据库直查；缺失分区继续留空；交叉期刊样例逐步补齐 |
| 会议（相对规划基线新增） | Laser Congress 2026、Biophotonics Congress 2027、OMTA 2026、Quantum 2.0 2027、Photonics Asia 2026               | 未公布的注册/投稿截止保持未知；已过期届次保留历史      |
| 功能                     | SCI/SCIE/EI/ESCI 与分区标签、统一方向筛选、关注列表、分享筛选、日历导出、公开审核统计                           | 持续核验数据；功能可用不代表全部索引已核实             |

以下候选表中的同名系列保留用于后续届次发现，不再重复计入新增数量。

### 下一批审核顺序与退出条件

| 优先级 | 条目/任务                                              | 当前缺口与下一步                                                                           |
| ------ | ------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| P1     | 已收录期刊的 SCI/EI 证据                               | 优先核实仍无依据的主干刊；出版社声明与数据库直查分级，记录刊号与核验日期                   |
| P1     | Laser & Photonics Reviews（已收录）                    | 已保存 SCIE 出版社声明与中科院 2025 分区第三方参考；继续补数据库直查、JCR 逐学科与 EI 依据 |
| P1     | 中国激光、光学学报、中国光学（中英文）、红外与激光工程 | 继续从期刊/主办单位页面核对当前刊名、刊号、索引和作者指南；访问受限不能直接补齐全部字段    |
| P1     | NDTA 2026                                              | 核实地点，并解决官方中英文摘要长度 300–500 与 500–600 词冲突后再收录                       |
| P1     | SPIE Photonics West 2027                               | 获取可核对的当届征稿、稿件要求和各类截止；检索线索不能代替完整审核                         |
| P2     | 现有材料/电子交叉期刊                                  | AFM 已补三篇官方论文样例；其余条目按近两年、不同期次补适配证据                             |
| P2     | 制造、显示、红外、遥感专题会议                         | 从下方系列池逐届核实，优先填覆盖空白；母大会与专题分会不重复计数                           |

## 一、扩充目标与边界

从“光学专业名称”转向“光学研究实际发表与交流的地方”。覆盖光学工程、物理、材料、电子、信息、生医等人群，但不把所有材料、电子、物理期刊会议直接纳入。

| 人群 / 方向                | 应覆盖的内容                                 | 交叉收录边界                            |
| -------------------------- | -------------------------------------------- | --------------------------------------- |
| 光学设计、精密制造与检测   | 系统设计、自由曲面、薄膜、加工、计量、仪器   | 制造/机械类须持续接收光学加工或测量研究 |
| 激光与非线性光学           | 激光器、超快、强场、频率转换、激光加工       | 区分基础光物理与产业设备展              |
| 量子、原子分子与基础光学   | 量子光源、量子信息、冷原子、光与物质相互作用 | 不默认收录所有量子计算算法会议          |
| 纳米光子、超表面与光学材料 | 等离激元、二维材料、发光、钙钛矿、光子晶体   | 要求光学机制、器件或应用直接相关        |
| 集成光子、光电子与半导体   | 硅光、探测器、光电芯片、异质集成             | 纯数字电路/一般电子设计只列条件候选     |
| 光通信、光纤与网络         | 器件、传输、光互连、光网络、光纤传感         | 网络协议类限光网络专题                  |
| 成像、计算光学与视觉       | 波前、重建、显微、全息、反演、视觉           | 计算机会议限成像、反问题与相关专题      |
| 生物医学光学               | OCT、光声、荧光、组织光学、神经光子          | 临床类须接收光学方法/仪器研究           |
| 显示、照明与 AR/VR         | 微显示、衍射光学、色彩、近眼显示             | 区分光学硬件和纯交互设计                |
| 红外、太赫兹与光谱         | 红外探测、太赫兹源、光谱传感                 | 不自动扩展至全部微波通信                |
| 遥感、天文与空间光学       | 光学载荷、自适应光学、高光谱、空间激光       | 限仪器或光学成像相关主题                |
| 光伏、光催化与能源光学     | 光吸收、能量转换、光热、光电化学             | 电池储能或一般催化不因期刊分区高而收录  |

期刊后续分为 **JCR/中科院 1/2 区精选** 与 **EI 工程补充** 两条审核路径，并独立核验 SCI/SCIE 与 EI 索引。EI 补充期刊可以没有分区；不得编造分区。JCR 与中科院、大小类和不同年份独立。合集标签、筛选和审核规则详见 [期刊索引与标签规划](JOURNAL_LABELS_PLAN.md)。会议不套用期刊分区，也不按数量承诺收录。

## 二、审核方法

### 期刊：先判断相关，再核实分区

1. **身份**：准确刊名、ISSN/eISSN、出版社、官网、是否更名/停刊/新刊。按 ISSN 去重，缩写只作别名。
2. **研究匹配**：核对 Aims & Scope，再抽样最近两年不同期次的光学相关文章。交叉期刊保存至少 3 篇题名/DOI作为适配线索，避免只凭单篇偶然文章收录；新刊可用已发表文章并标明样本不足。
3. **分区及索引准入**：记录体系、版本年、指标年、类别、大小类、分区和来源等级。另按 ISSN 独立核实 SCI/SCIE、EI Compendex 的覆盖状态。只查到影响因子、CiteScore 或 SJR 不算核实 JCR 分区；EI 补充走独立准入路径。
4. **投稿可用性**：作者指南、文章类型、是否接收自由投稿、篇幅、模板、投稿入口、费用页面、预印本和会议扩展政策。综述/邀稿刊必须显著标注。
5. **结论**：通过／相关但分区待核实／不满足分区门槛／仅适合特定方向／暂缓。所有候选初始均为“待核验”。

下文 P1/P2/P3 是**建议核验顺序，不是期刊档次、分区或录用难度**。候选名称不意味着已满足 1/2 区要求。

### 会议：宽建候选池，逐届严格核实

1. 从主办学会、大学、研究机构、出版社和系列官网反向找当届通知；聚合平台只作发现线索。
2. 区分会议系列、某年届次、联合大会、专题分会、研讨会、展览和产业论坛。母大会与子会议设关联，不重复计数。
3. 必备：当届官方页面、主办者、主题、会议日期与地点、征稿/投稿说明、出版或报告形式。未找到当届征稿时留在候选池。
4. 分开核验普通稿、摘要、PDP、demo、通知、终稿、作者注册、早鸟注册与举办时间；未知日期保留 null，不能套用往届规律。
5. 记录“只收摘要/有论文集/拟送检索/已实际收录”的差别。展会存在技术会议，不代表普通参展等于学术投稿。
6. 仅有商业邀约、主办身份不明、冒用学会名称、承诺保证录用或保证检索者暂缓；不单凭会议规模小或首次举办排除。

## 三、期刊扩充候选

已有的 Nature Photonics、Light: Science & Applications、Advances in Optics and Photonics、Optica、Photonics Research、Journal of Lightwave Technology、Optica Quantum、Journal of Optical Communications and Networking、Optics Express、Optics Letters、Biomedical Optics Express、Optical Materials Express、Advanced Photonics、Advanced Photonics Nexus、High Power Laser Science and Engineering、Advanced Optical Materials、ACS Photonics、Nanophotonics、Advanced Materials 不作为新增数量；优先维护其证据与版本。

### P1：直接光学及高度相关交叉候选

| 方向           | 新增候选名称                                                                                                                                           | 审核重点                           |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------- |
| 综合光学       | PhotoniX；Light: Advanced Manufacturing；APL Photonics；Laser & Photonics Reviews                                                                      | 新刊或更名状态、当前分区、文章类型 |
| 光学物理与工程 | Optics & Laser Technology；Optics and Lasers in Engineering；Optical Materials；Journal of Optics                                                      | 不凭名称推定符合 1/2 区            |
| 传统光学体系   | Journal of the Optical Society of America A；Journal of the Optical Society of America B；Applied Optics；Chinese Optics Letters                       | 相关性高，但仍必须逐年核实分区门槛 |
| 生医光学       | Journal of Biomedical Optics；Neurophotonics；Journal of Biophotonics；Photoacoustics                                                                  | 成像方法、仪器和临床应用的范围差异 |
| 光电与激光器件 | IEEE Journal of Selected Topics in Quantum Electronics；IEEE Journal of Quantum Electronics；IEEE Photonics Technology Letters；IEEE Photonics Journal | 专题征稿与常规投稿区别，核实分区   |
| 应用光物理     | Applied Physics Letters；Applied Physics Reviews；Physical Review Applied；Physical Review A                                                           | 综述与研究论文、基础与工程方向适配 |

### P2：材料、电子、物理与成像等交叉候选

| 方向             | 新增候选名称                                                                                                                                                                          | 纳入的光学场景                                   |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| 纳米与功能材料   | Nature Materials；Nature Nanotechnology；Advanced Functional Materials；ACS Nano；Nano Letters；Small；Small Methods                                                                  | 超表面、发光、纳米光子、二维光电、探测器         |
| 材料器件与界面   | ACS Applied Materials & Interfaces；ACS Applied Electronic Materials；Advanced Electronic Materials；Materials Horizons；Journal of Materials Chemistry C                             | 光电器件、光学功能材料、发光与探测               |
| 光电子及半导体   | Nature Electronics；IEEE Electron Device Letters；IEEE Transactions on Electron Devices；Journal of Semiconductors                                                                    | 光电芯片、光探测、光电集成；不是全部电子主题     |
| 基础与交叉物理   | Nature Physics；Physical Review Letters；Physical Review X；Physical Review Research；Physical Review B；New Journal of Physics；Reports on Progress in Physics                       | 光与物质、量子、凝聚态光学；综述刊单独标记       |
| 量子技术         | PRX Quantum；Quantum Science and Technology；npj Quantum Information；Advanced Quantum Technologies；Quantum                                                                          | 优先量子光学、光子量子计算和量子通信             |
| 成像与图像处理   | IEEE Transactions on Computational Imaging；IEEE Transactions on Image Processing；IEEE Transactions on Medical Imaging；Medical Image Analysis；Inverse Problems                     | 计算成像、光学反演、医学成像方法                 |
| 显微与生医方法   | Nature Methods；Nature Biomedical Engineering；Biosensors and Bioelectronics                                                                                                          | 只纳入有明确光学方法或仪器适配的期刊             |
| 传感与计量       | Sensors and Actuators B: Chemical；Sensors and Actuators A: Physical；Measurement；IEEE Sensors Journal                                                                               | 光纤、光谱、光学传感与检测                       |
| 红外、光谱与分析 | Infrared Physics & Technology；Journal of Quantitative Spectroscopy and Radiative Transfer；Spectrochimica Acta Part A: Molecular and Biomolecular Spectroscopy；Analytical Chemistry | 红外与光谱机制、光谱仪器及光学分析               |
| 遥感与空间       | Remote Sensing of Environment；ISPRS Journal of Photogrammetry and Remote Sensing；IEEE Transactions on Geoscience and Remote Sensing；Remote Sensing                                 | 光学/高光谱成像及载荷，避免无限扩展地学          |
| 精密制造与仪器   | International Journal of Machine Tools and Manufacture；Precision Engineering；CIRP Annals；International Journal of Extreme Manufacturing                                            | 光学加工、超精密制造、光学测量                   |
| 光能转换         | Nature Energy；Energy & Environmental Science；Advanced Energy Materials；ACS Energy Letters；Solar Energy Materials and Solar Cells                                                  | 光伏、光热、光催化及光电转换，排除无光学关联内容 |

### P3：综合高水平与条件候选

- 综合期刊：Nature、Science、Nature Communications、Science Advances、Proceedings of the National Academy of Sciences、National Science Review、Science Bulletin、Research、The Innovation、Communications Physics、Communications Materials。仅作光学研究可投的综合平台，单独标记“综合交叉”，不与专业光学刊混成一个难度排序。
- 进一步核查：IEEE Transactions on Pattern Analysis and Machine Intelligence、International Journal of Computer Vision、Optical Engineering、Applied Physics B、Journal of Applied Physics、IEEE Journal of Display Technology（先查存续/停刊状态，不作为活跃期刊直接添加）、Journal of the Society for Information Display、Displays。
- 中文与国内主办期刊观察池：《光学学报》《中国激光》《光子学报》《光学精密工程》《红外与激光工程》《激光与光电子学进展》《物理学报》《光谱学与光谱分析》《中国光学》。这是覆盖国内研究生态的候选，**并不宣称符合 JCR/CAS 1/2 区或已核实 EI 收录**。后续分别按分区精选或 EI 工程补充路径审核，不因没有 JCR 分区直接排除。两条路径均不满足时保留在候选文档；是否增加其他中文期刊范围另行决定。

## 四、会议系列扩充候选

现有 ACP、OFC、CLEO、COS 学术大会、ECOC、FiO + LS、IEEE IPC、Optica ODF、IEEE ICIP 保留并持续更新届次。以下为系列候选，**未核实其下一届一定举办、正在征稿或当前正式名称**。

### A. 优先：光学主干及主要学会会议

| 来源线索            | 系列 / 会议候选                                                         | 方向与去重说明                                        |
| ------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------- |
| SPIE                | Photonics West                                                          | 光子学综合母大会；BiOS、LASE、OPTO 作为关联子系列核查 |
| SPIE                | Optics + Photonics                                                      | 光学工程、纳米、材料与系统                            |
| SPIE                | Photonics Europe                                                        | 欧洲光子学综合                                        |
| SPIE / COS          | Photonics Asia                                                          | 境内国际交流，核实当届主办信息                        |
| SPIE                | Optical Systems Design                                                  | 设计、薄膜、制造、检测                                |
| SPIE                | Astronomical Telescopes + Instrumentation                               | 天文光学、仪器、自适应光学                            |
| SPIE                | Medical Imaging                                                         | 医学成像；专题需区分光学与其他成像方式                |
| SPIE                | Advanced Lithography + Patterning                                       | 光刻与纳米制造                                        |
| SPIE                | Optical Metrology                                                       | 光学计量、三维检测                                    |
| SPIE                | Photomask Technology + Extreme Ultraviolet Lithography                  | 掩模、EUV；核对联合大会与子会议                       |
| SPIE                | Defense + Commercial Sensing                                            | 红外、成像、传感；检查当届系列命名                    |
| SPIE                | Remote Sensing；Security + Defence                                      | 两个相关系列，核查当届联合举办与独立征稿              |
| SPIE / IS&T         | Electronic Imaging                                                      | 成像、色彩、显示、计算摄影；专题逐一去重              |
| Optica              | Advanced Photonics Congress                                             | 集成光子、通信、网络与器件                            |
| Optica              | Imaging and Applied Optics Congress                                     | 成像、计算光学；核对当届组成专题                      |
| Optica              | Biophotonics Congress                                                   | 生医光子；核对轮换主题与举办年份                      |
| Optica              | Laser Congress                                                          | 激光器、应用；子会议不能重复统计                      |
| Optica              | Quantum 2.0                                                             | 量子技术、光子平台与应用                              |
| Optica 及相关学会   | International Optical Design Conference（IODC）                         | 光学设计；核查与 ODF 的举办关系                       |
| Optica 及系列主办者 | Optical Interference Coatings（OIC）                                    | 薄膜、镀膜、光学材料                                  |
| IEEE Photonics      | Summer Topicals Meeting Series                                          | 专题轮换，以当届内容为准                              |
| IEEE Photonics      | International Semiconductor Laser Conference（ISLC）                    | 半导体激光                                            |
| IEEE Photonics      | International Conference on Group IV Photonics（GFP）                   | 硅光与 IV 族光子器件                                  |
| IEEE Photonics      | Optical Interconnects Conference（OI）                                  | 光互连                                                |
| 系列主办者          | CLEO/Europe–EQEC；CLEO Pacific Rim（CLEO-PR）                           | 区分各地区系列，不作为 CLEO 同一届次                  |
| 系列主办者          | International Conference on Photonics in Switching and Computing（PSC） | 光交换、光计算；核对正式名称                          |

### B. 优先补齐：中国境内及亚洲光学会议

| 来源线索         | 系列 / 候选                                                                          | 适配方向及注意事项                         |
| ---------------- | ------------------------------------------------------------------------------------ | ------------------------------------------ |
| 中国光学工程学会 | 国际应用光学与光子学技术交流大会（AOPC）                                             | 综合光学工程；与同期展览区分               |
| 中国光学学会     | 全国光子学学术会议                                                                   | 光子学、光纤、器件                         |
| 中国光学学会     | 全国基础光学与光物理学术讨论会                                                       | 基础光学、量子、非线性                     |
| 中国光学工程学会 | 国际先进光学制造技术及应用会议；先进光学制造青年科学家会议                           | 可能联合举办，分别确认层级和独立投稿规则   |
| 学会及系列官网   | International Conference on Information Optics and Photonics（CIOP）                 | 信息光学与光子学                           |
| 学会及系列官网   | Optoelectronics Global Conference（OGC）                                             | 光电子；与 CIOE 展会区分                   |
| 学会及系列官网   | International Conference on Optical Communications and Networks（ICOCN）             | 光通信与网络                               |
| 学会及系列官网   | Optoelectronics and Communications Conference（OECC）                                | 亚太光电与通信                             |
| 学会及系列官网   | Asia Optical Fiber Communication and Optoelectronic Exposition and Conference（AOE） | 核查系列存续与当届官方全称                 |
| 日本相关主办学会 | Optics & Photonics International Congress（OPIC）                                    | 母大会，下属不同专题具有独立要求           |
| 日本相关主办学会 | Optics & Photonics Japan（OPJ）                                                      | 核查当届语言、国际参与和投稿条件           |
| 系列主办者       | International Conference on Fibre Optics and Photonics（PHOTONICS）                  | 通过主办者确认系列身份，防止与同名活动混淆 |

继续从中国光学学会、中国光学工程学会的专委会挖掘：激光、量子光学、光学薄膜、全息、光纤传感、生物医学光子、光学设计、红外光电、显示、光谱、精密检测等专业会议。**这是一份发现任务清单，不编造统一年会名称。** 研究所或高校承办的稳定专题会也应纳入候选，不限于大会议。

### C. 专题覆盖：量子、激光、传感、显示与制造

| 方向           | 系列 / 会议候选                                                                                                                                                            | 审核重点                               |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| 国际综合光学   | International Commission for Optics Congress（ICO Congress）；EOS Annual Meeting（EOSAM）                                                                                  | 学会官网、当届征稿与出版形式           |
| 量子光学与信息 | International Conference on Quantum Communication, Measurement and Computing（QCMC）；Quantum Information Processing（QIP）                                                | QIP 是条件交叉，不等于光学会议         |
| 超快与强场     | International Conference on Ultrafast Phenomena；International Conference on Ultrafast Optics（UFO）；Conference on High Intensity Lasers and Attosecond Science（CHILAS） | 系列准确名称、周期与当前主办方         |
| 非线性         | Nonlinear Optics（NLO）；Nonlinear Photonics                                                                                                                               | 核查是否独立或隶属当届 congress        |
| 光纤传感       | International Conference on Optical Fiber Sensors（OFS）；European Workshop on Optical Fibre Sensors（EWOFS）；Asia-Pacific Optical Sensors Conference（APOS）             | 区分国际会、地区会与 workshop          |
| 红外与太赫兹   | International Conference on Infrared, Millimeter, and Terahertz Waves（IRMMW-THz）                                                                                         | 主题包括毫米波，网站按方向筛选         |
| 光谱           | International Conference on Raman Spectroscopy（ICORS）；International Conference on Laser Spectroscopy（ICOLS）                                                           | 基础与应用光谱的适配                   |
| 显示           | SID Display Week；International Display Workshops（IDW）；International Meeting on Information Display（IMID）                                                             | 学术 symposium 与商业展览分开          |
| AR/VR 光学     | SPIE AR \| VR \| MR                                                                                                                                                        | 核对独立征稿、与 Photonics West 的关系 |
| 全息与衍射     | International Symposium on Display Holography（ISDH）；Digital Holography and Three-Dimensional Imaging（DH）                                                              | 届次、所属大会和出版要求               |
| 激光加工       | International Congress on Applications of Lasers & Electro-Optics（ICALEO）；Lasers in Manufacturing（LiM）；Laser Precision Microfabrication（LPM）                       | 学术交流和工业应用并重，确认稿件形式   |

### D. 条件收录：材料、电子、物理与成像交叉大会

| 候选系列                                                                                            | 只收录的相关内容                                                    |
| --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| MRS Spring Meeting；MRS Fall Meeting；E-MRS Spring Meeting；E-MRS Fall Meeting                      | 光电材料、超表面、发光、光能转换等专题，不能整包导入所有材料方向    |
| APS Global Physics Summit（及历史 March Meeting / April Meeting）                                   | 光学、AMO、量子、光子器件专题；核对历史品牌与当前组织关系           |
| DAMOP Meeting；International Conference on Atomic Physics（ICAP）                                   | 原子分子光物理、冷原子与量子光学                                    |
| IEEE International Electron Devices Meeting（IEDM）；IEEE Symposium on VLSI Technology and Circuits | 光电器件、光子集成与成像传感器专题                                  |
| International Solid-State Circuits Conference（ISSCC）；International Image Sensor Workshop（IISW） | 成像传感器、光电读出与相关芯片，ISSCC 仅条件适配                    |
| IEEE SENSORS；IEEE MEMS；TRANSDUCERS                                                                | 光学传感、光 MEMS、微纳光学器件                                     |
| IEEE CVPR；IEEE ICCV；European Conference on Computer Vision（ECCV）                                | 计算摄影、成像重建、逆问题；不能把整个视觉领域都视为光学            |
| IEEE International Conference on Computational Photography（ICCP）                                  | 计算摄影与成像，优先于一般算法会议                                  |
| IEEE ISBI；MICCAI                                                                                   | 光学/医学成像方法专题，注意不同出版方式                             |
| IEEE IGARSS；ISPRS Congress                                                                         | 光学遥感、高光谱、摄影测量及仪器专题                                |
| IEEE ICC；IEEE GLOBECOM                                                                             | 光通信/光网络相关 symposium 或 workshop；母大会与 workshop DDL 分开 |

### E. 产业活动观察池

CIOE 中国国际光电博览会、慕尼黑上海光博会（LASER World of PHOTONICS CHINA）、LASER World of PHOTONICS、SEMICON China，以及相关产业论坛可作为找团队、设备与合作的资源。

**暂不将纯展览混入论文 DDL 列表。** 如果存在独立技术会议，应按其正式会议名称、征稿与主办信息审核；例如展会与同期学术大会不能合并为一条“可投稿会议”。现已增加独立“展会与论坛”入口；首批 CIOE 与精密工程相关活动不计入论文会议数量，活动类型、母子关系及历史状态分别标注。

## 五、后续执行批次

| 批次          | 工作量建议                                       | 交付和退出条件                                    |
| ------------- | ------------------------------------------------ | ------------------------------------------------- |
| 0：候选规范化 | 整理本文名称、别名、ISSN/系列 ID、方向与来源入口 | 去重，明确候选/正式/历史与母子关系                |
| 1：补光学主干 | P1 期刊每批 8–12 本；A/B 类会议每批 10–15 个系列 | 逐项审查；符合条件才写入正式 JSON，未通过保留原因 |
| 2：补缺失人群 | 生医、制造、显示、量子、红外、遥感各完成至少一批 | 用方向覆盖矩阵发现空白，不只补光通信              |
| 3：交叉拓展   | 材料/电子/物理期刊和 D 类专题会议                | 每项给出具体光学适配理由；避免泛化                |
| 4：发布维护   | 每批校验、检查筛选与来源，再独立提交推送         | 更新双语 README 数量和核验日志；确认 Pages 部署   |

候选池可以持续扩大；正式目录的数量取决于审核结果，不预设“必须凑足”。系列发现与当前届次维护分开；即使一个系列尚无下一届通知，也应保留候选信息，避免以后重新检索。

### 建议的待办记录字段（后续实现）

`candidateId / name / aliases / kind / topics / priority / sourceEntry / reviewStatus / relatedExistingId / decisionReason / nextAction`

期刊另加 `ISSN / scopeEvidence / rankingEvidence / indexes / domains`；会议另加 `seriesId / parentSeriesId / organizer / editionStatus / publicationType`。这些是候选管理建议，不表示上述字段已经全部进入生产数据模型。

## 六、发现入口与本轮证据范围

- [Optica 活动目录](https://www.optica.org/events/)：光学 congress 和会议发现入口。本轮打开目录，不代表核实表中所有子会议。
- [IEEE Photonics Society 会议目录](https://ieeephotonics.org/conferences/)：学会会议与共同主办会议线索。
- [SPIE 会议入口](https://www.spie.org/conferences-and-exhibitions)：本轮网页正文提取不足；SPIE 名称作为候选，后续需进入具体会议页确认。
- [中国光学学会](https://cncos.org.cn/)及[全国光子学学术会议示例](https://meeting.cncos.org.cn/photonics2025/)：用于发现国内专业会议；示例为历史页面，不外推未来日期。
- [中国光学工程学会综合会议](https://www.csoe.org.cn/zh_list/)及[先进光学制造会议通知](https://csoe.org.cn/detail/2167.html)：国内工程与制造会议线索。
- [APS 期刊目录](https://www.aps.org/publications/journals)及[Physical Review Applied 主题目录](https://journals.aps.org/prapplied/subjects)：物理交叉期刊发现入口，主题目录可辅助判断光学相关性，不能代替分区核实。

其余候选来自领域初筛，尚未逐一浏览核实。下一轮应优先查出版社、主办者官网与官方作者指南；本轮节省额度，不批量抓取所有页面，不检索全部 JCR/CAS 记录。

## English summary

This is an expansion backlog, not an approved catalog. It broadens coverage across optical engineering, physics, materials, electronics, imaging, biomedicine, sensing, displays and energy. The Q1/Q2 collection requires verified eligibility in an identified JCR or CAS edition; a separate EI engineering supplement may include relevant verified EI journals without rankings. SCI/SCIE and EI indexing will be independently verified and displayed on cards. Conference candidates require edition-specific official evidence and separation of conferences, tracks, workshops and exhibitions. Priorities reflect review order rather than venue prestige. As of 11 September 2026, the production catalog contains 65 journals, 17 conference editions, and 7 separate exhibition/forum records (including parent and child events). The execution table distinguishes admitted records from pending candidates; remaining names are discovery leads, not verified entries.
