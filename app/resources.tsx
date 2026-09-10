import { External } from '@/components/external-link';
import config from '@/data/site.json';
export function Guide() {
  return (
    <section className="resource-page">
      <span className="section-kicker">START HERE</span>
      <h2>光学研究生的第一份投稿指南</h2>
      <p>先确认研究和读者是否匹配，再看分区、时间与发表形式。</p>
      <div className="guide-grid">
        {[
          [
            '01',
            '期刊与会议，各自解决什么问题？',
            '期刊一般接收完整研究，通过编辑初筛、同行评审、返修、录用与出版。会议强调在指定时间交流，可接收短论文或摘要，并要求现场口头或海报报告。光学会议的发表形式差异很大，摘要录用不自动等于 SCI / EI 论文。',
          ],
          [
            '02',
            '先选研究社区，再看分区',
            '读期刊 Aims & Scope 和最近两年同主题论文；会议则看本届 topic categories。JCR 按学科的影响因子排名形成 Q1–Q4，中科院采用独立体系。两者不能互相换算；学校认可的大类、小类、版本年需要分别确认。',
          ],
          [
            '03',
            '期刊没有统一的年度 DDL',
            '常规来稿通常全年受理，专刊、专题和邀稿另有截止日。初次编辑决定可能是不送外审的拒稿，不能视作完整审稿时间。经历几轮返修、录用到上线以及数据库检索的时间都不相同，不要按别人的经历保证毕业节点。',
          ],
          [
            '04',
            '会议至少有四类时间',
            '分别记录摘要 / 论文提交、录用通知、作者注册及终稿、会议报告。PDP（postdeadline paper）面向新近重要成果，通常要求更强的时效性。不要把早鸟注册、展览时间、普通论文和 PDP 的日期混在一起。',
          ],
          [
            '05',
            '模板与投稿系统逐届检查',
            '核对页数是否包含参考文献、摘要词数、单栏 / 双栏、语言、匿名要求、补充文件、版权声明。通过官网进入投稿系统，上传后检查 PDF 和提交回执。IEEE PDF eXpress 通常用于文件认证，不能替代真正的论文提交系统。',
          ],
          [
            '06',
            '注册、报告与最终收录',
            '有的会议要求至少一位作者以指定费率注册并报告，学生价未必能覆盖论文出版。录用后检查 no-show 政策、终稿与版权手续。官网说“提交数据库检索”是计划，实际检索需在数据库核实。',
          ],
          [
            '07',
            '费用与开放获取（OA）',
            '区分投稿费、版面费、超页费、开放获取 APC 与会议注册费。OA 不是分区，也不意味着无需同行评审；有些期刊可在订阅和 OA 模式间选择。费用及机构协议会变化，按官网与学校图书馆当期政策核算。',
          ],
          [
            '08',
            '预印本、会议扩展和重复投稿',
            '不同期刊与会议对 arXiv 等预印本政策不同，不能套用计算机领域习惯。例如本次核实的 OFC 指南限制已经提交预印本的稿件。会议论文扩展为期刊稿须披露前作、引用并满足实质新增要求；不能承诺统一“新增百分比”。',
          ],
        ].map(([n, h, p]) => (
          <article className="guide-card" key={n}>
            <span>{n}</span>
            <h3>{h}</h3>
            <p>{p}</p>
          </article>
        ))}
      </div>
      <div className="guide-sources">
        <h3>实际投稿前，读这几类原文</h3>
        <External href="https://www.ofcconference.org/submit-a-paper/submission-guidelines/">
          OFC 投稿及预印本规则
        </External>
        <External href="https://cleoconference.org/2027-paper-preparation-and-requirements/">
          CLEO 2027 格式要求
        </External>
        <External href="https://www.acpconf.com/news/paper-submission">
          ACP 2026 双盲与出版条件
        </External>
        <External href="https://meeting.cncos.org.cn/cosconf2026/index.htm">
          中国光学学会：报告与期刊录用的区别
        </External>
        <External href="https://opg.optica.org/content/author/portal/">
          Optica 作者资源中心
        </External>
        <External href="https://sp.fenqubiao.com/">中科院分区官方查询</External>
      </div>
    </section>
  );
}
export function DataNotes() {
  return (
    <section className="resource-page">
      <span className="section-kicker">OPEN & TRACEABLE</span>
      <h2>每个日期，都应该有出处。</h2>
      <div className="guide-grid">
        <article className="guide-card">
          <h3>收录范围</h3>
          <p>
            精选光学与相关电子、材料期刊，至少在一种已记录的分区体系中属于 1 / 2
            区。会议按领域相关性收录，不借用 CCF
            等级评价光学会议。本目录持续扩充，并不覆盖全部期刊或会议。
          </p>
        </article>
        <article className="guide-card">
          <h3>分区不是同一回事</h3>
          <p>
            JCR 版本年与影响因子指标年分别保存。中科院同时记录大类、小类；2025
            升级版与任何 2026
            新版本不能仅凭年份视为等价。当前第三方参考须经学校机构入口复核，未核实的版本不补值。
          </p>
        </article>
        <article className="guide-card">
          <h3>证据分级</h3>
          <p>
            “官方披露”指主办方、出版社或所属机构直接发布；“排名推算”指使用官方
            JCR
            排名与期刊总数推算四分位；“第三方参考”保留公开来源但尚未用机构账户核验。期刊分区条目与投稿指南有各自来源。
          </p>
        </article>
        <article className="guide-card">
          <h3>更新如何发生</h3>
          <p>
            仓库每日工作流检查来源的可达性与内容指纹，生成变化报告。网页不会自动把抓取结果认定为新
            DDL；维护者审阅官网、更新 JSON 并通过 PR 校验后发布。超过 30
            天未核实的条目会提示复核。
          </p>
        </article>
        <article className="guide-card">
          <h3>日期与时区</h3>
          <p>
            只有明确给出时刻和时区的事件显示精确倒计时。只有日期或时区不明时，展示“约
            N
            天”并在日期附近提示核实。过去截止会保留，便于了解上一轮与本届流程，不推算明年的时间。
          </p>
        </article>
        <article className="guide-card">
          <h3>参与共建</h3>
          <p>
            通过 GitHub Issue 提供名称、年份、官方通知链接和变动内容；或编辑
            data 下的 JSON 提交
            PR。请提供可公开核实的来源，不提交账号、支付信息、受限分区表或第三方全文。
          </p>
        </article>
      </div>
      <div className="guide-sources">
        <External href="https://github.com/ccfddl/ccf-deadlines">
          参考项目：CCF-Deadlines
        </External>
        <External href={`${config.repository}/blob/main/docs/ROADMAP.md`}>后续建设规划</External>
        <External href={`${config.repository}/blob/main/docs/VERIFICATION_LOG.md`}>近期官方复核记录</External>
        <External href={`${config.repository}/blob/main/docs/MAINTENANCE.md`}>维护与纠错说明</External>
        <External href="https://jcr.clarivate.com/">JCR 官方查询</External>
        <External href="https://sp.fenqubiao.com/">中科院官方查询</External>
      </div>
    </section>
  );
}
