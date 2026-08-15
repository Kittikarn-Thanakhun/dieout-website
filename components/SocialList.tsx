import type { Social, SocialKind } from '@/types';

/** ชื่อที่อ่านออกเสียงได้ สำหรับ screen reader (ของเดิมมีแต่ไอคอนเปล่า ๆ) */
const LABEL: Record<SocialKind, string> = {
  youtube: 'YouTube',
  instagram: 'Instagram',
  tiktok: 'TikTok',
  facebook: 'Facebook',
  spotify: 'Spotify',
  itunes: 'Apple Music',
};

type Props = {
  items: Social[];
  /** ใช้ต่อท้ายใน aria-label เช่น "YouTube ของ SARAN" */
  owner?: string;
  className?: string;
};

export default function SocialList({ items, owner, className }: Props) {
  return (
    <ul className={className}>
      {items.map((s) => (
        <li key={s.kind + s.url}>
          <a
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={owner ? `${LABEL[s.kind]} ของ ${owner}` : LABEL[s.kind]}
          >
            <i className={`fa-brands fa-${s.kind}`} aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}
