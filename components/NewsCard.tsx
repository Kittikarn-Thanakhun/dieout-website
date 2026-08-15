import type { Track } from '@/types';
import SocialList from './SocialList';

/** การ์ดเพลง ใช้ทั้ง section NEWS หน้าแรก และหน้าศิลปิน */
export default function NewsCard({ track }: { track: Track }) {
  return (
    <div className="news-box">
      <div className="news-img-wrap">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={track.cover}
          className="news-img"
          alt={`ปกเพลง ${track.title}`}
          loading="lazy"
        />
      </div>
      <div className="news-info">
        <h2>{track.title}</h2>
        <p>{track.credit}</p>
      </div>
      <div className="news-contact">
        <SocialList items={track.links} owner={track.title} />
      </div>
    </div>
  );
}
