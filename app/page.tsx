import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import FadeUp from '@/components/FadeUp';
import ArtistCard from '@/components/ArtistCard';
import NewsCard from '@/components/NewsCard';
import SocialList from '@/components/SocialList';
import { artists, getArtist } from '@/data/artists';
import { aboutText, homeNews, labelSocials, mixerGrid, producerGrid } from '@/data/site';
import styles from './page.module.css';
import type { Artist } from '@/types';

export const metadata: Metadata = {
  title: 'HOME',
};

/** แปลงรายชื่อ slug -> ข้อมูลศิลปิน แล้วตัดตัวที่หาไม่เจอทิ้ง */
function bySlugs(slugs: string[]): Artist[] {
  return slugs.map(getArtist).filter((a): a is Artist => Boolean(a));
}

export default function Home() {
  return (
    <>
      <Nav variant="home" />

      {/* HEADER */}
      <section className={styles.header} id="home">
        <div className={styles.hero}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/dieoutimg.jpg" alt="" />
          <h1>DIEOUT</h1>
        </div>
      </section>

      {/* CONTACT */}
      <section className={styles.contact}>
        <SocialList items={labelSocials} owner="DIEOUT" />
      </section>

      {/* ABOUT */}
      <section id="about" className={styles.about}>
        <div className={styles.aboutCon}>
          <FadeUp className={styles.aboutText}>
            <h1 className={styles.aboutTitle}>DIEOUT</h1>
            <p className={styles.aboutDesc}>{aboutText}</p>
          </FadeUp>
          <FadeUp className={styles.aboutImg}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/all-dieout.jpg" alt="สมาชิกวง DIEOUT" />
          </FadeUp>
        </div>
      </section>

      {/* MEMBERS */}
      <section id="members" className={styles.members}>
        <div className={styles.membersCon}>
          <FadeUp>
            <p>MEMBERS</p>
          </FadeUp>
        </div>
      </section>

      {/* ARTIST */}
      <section id="artist" className={`${styles.section} ${styles.sectionLight}`}>
        <div className={styles.grid}>
          <FadeUp className={`${styles.heading} ${styles.headingLight}`}>
            <h3>ARTIST</h3>
          </FadeUp>
          {artists.map((artist) => (
            <FadeUp key={artist.slug}>
              <ArtistCard artist={artist} />
            </FadeUp>
          ))}
        </div>
      </section>

      {/* PRODUCER */}
      <section id="producer" className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.grid}>
          <FadeUp className={`${styles.heading} ${styles.headingDark}`}>
            <h3>PRODUCER</h3>
          </FadeUp>
          {bySlugs(producerGrid).map((artist) => (
            <FadeUp key={artist.slug}>
              <ArtistCard artist={artist} />
            </FadeUp>
          ))}
        </div>
      </section>

      {/* MIXER */}
      <section id="mixer" className={`${styles.section} ${styles.sectionLight}`}>
        <div className={styles.grid}>
          <FadeUp className={`${styles.heading} ${styles.headingLight}`}>
            {/* FIX: ของเดิมเขียนว่า "MIXER >" มีเครื่องหมาย > เกินมา */}
            <h3>MIXER</h3>
          </FadeUp>
          {bySlugs(mixerGrid).map((artist) => (
            <FadeUp key={artist.slug}>
              <ArtistCard artist={artist} />
            </FadeUp>
          ))}
        </div>
      </section>

      {/* NEWS */}
      <section id="news" className="news">
        <div className="news-con">
          <FadeUp className="news-text">
            <h2>NEWS</h2>
          </FadeUp>
          <div className="news-table">
            {homeNews.map((track) => (
              <FadeUp key={track.title}>
                <NewsCard track={track} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
