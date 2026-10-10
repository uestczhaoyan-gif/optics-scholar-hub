import config from '@/data/site.json';
import { correctionLink } from '@/lib/correction-link';
import { External } from '@/components/external-link';
export function CorrectionLink({
  record,
}: {
  record: {
    id: string;
    name: string;
    source: string;
    issn?: string | null;
    year?: number;
  };
}) {
  if (!config.repository) return null;
  return (
    <span className="correction-link">
      <External href={correctionLink(config.repository, record)}>
        反馈此条信息（GitHub）
      </External>
    </span>
  );
}
