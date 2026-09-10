import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  icons: { icon: (process.env.BASE_PATH || '') + '/favicon.svg' },
  title: '光研导航 · 光学期刊与会议截止日期',
  description:
    '面向光学研究生的期刊分区、会议截止日期与投稿要求导航。每条信息注明年份、核验日期及来源。',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
