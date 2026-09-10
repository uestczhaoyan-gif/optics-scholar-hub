import { ArrowUpRight } from 'lucide-react';
export function External({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
      <ArrowUpRight size={14} />
    </a>
  );
}
