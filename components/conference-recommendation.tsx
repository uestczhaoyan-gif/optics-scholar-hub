export function ConferenceRecommendation({ order }: { order?: number }) {
  if (!order) return null;
  return (
    <a
      className="conference-recommendation"
      href="https://github.com/uestczhaoyan-gif/optics-scholar-hub/blob/main/docs/UESTC_RECOMMENDED_CONFERENCES.md"
      target="_blank"
      rel="noopener noreferrer"
      title={`2026 年光电学院推荐汇总表第 ${order} 项；点击查看来源与收录说明`}
    >
      ☆ 光电学院推荐
    </a>
  );
}
