import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Nav from '@/components/Nav';
import NewsCard from '@/components/NewsCard';
import SocialList from '@/components/SocialList';
import { artists, getArtist } from '@/data/artists';
import styles from './page.module.css';

type Params = { params: Promise<{ slug: string }> };

/** สร้างหน้า static ครบทั้ง 17 คนตอน build */
export function generateStaticParams() {
  return artists.map((artist) => ({ slug: artist.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const artist = getArtist(slug);
  if (!artist) return { title: 'ไม่พบศิลปิน' };

  return {
    title: artist.name,
    description: artist.bio[0]?.slice(0, 160),
  };
}

export default async function ArtistPage({ params }: Params) {
  const { slug } = await params;
  const artist = getArtist(slug);
  if (!artist) notFound();

  return (
    <>
      <Nav variant="artist" />

      {/* ABOUT */}
      <section className={styles.about}>
        <div className={styles.aboutCon}>
          <div className={styles.aboutText}>
            <h1>{artist.name}</h1>
            {artist.bio.map((paragraph, i) => (
              <p key={i} className={styles.aboutDesc}>
                {paragraph}
              </p>
            ))}
          </div>
          <div className={styles.aboutImg}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={artist.image} alt={artist.name} />
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="news">
        <div className="news-con">
          <div className="news-text">
            <h2>NEWS</h2>
          </div>
          <div className="news-table">
            {artist.tracks.map((track) => (
              <NewsCard key={track.title} track={track} />
            ))}
          </div>
        </div>
      </section>

      {/* FOLLOW */}
      <section className={styles.contact}>
        <div className={styles.contactCon}>
          <div className={styles.contactText}>
            <h2>FOLLOW : {artist.followName}</h2>
          </div>
          <div className={styles.contactLogo}>
            <SocialList items={artist.socials} owner={artist.name} />
          </div>
        </div>
      </section>
    </>
  );
}
