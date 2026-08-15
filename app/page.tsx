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
      <FadeUp as="section" id="about" className={styles.about}>
        <div className={styles.aboutCon}>
          <FadeUp className={styles.aboutText} delay={2}>
            <h1 className={styles.aboutTitle}>DIEOUT</h1>
            <p className={styles.aboutDesc}>{aboutText}</p>
          </FadeUp>
          <FadeUp className={styles.aboutImg} delay={1}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/all-dieout.jpg" alt="สมาชิกวง DIEOUT" />
          </FadeUp>
        </div>
      </FadeUp>

      {/* MEMBERS */}
      <FadeUp as="section" id="members" className={styles.members}>
        <div className={styles.membersCon}>
          <p>MEMBERS</p>
        </div>
      </FadeUp>

      {/* ARTIST */}
      <FadeUp as="section" id="artist" className={`${styles.section} ${styles.sectionLight}`}>
        <div className={styles.grid}>
          <FadeUp className={`${styles.heading} ${styles.headingLight}`} delay={3}>
            <h3>ARTIST</h3>
          </FadeUp>
          {artists.map((artist) => (
            <ArtistCard key={artist.slug} artist={artist} />
          ))}
        </div>
      </FadeUp>

      {/* PRODUCER */}
      <FadeUp as="section" id="producer" className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.grid}>
          <FadeUp className={`${styles.heading} ${styles.headingDark}`} delay={3}>
            <h3>PRODUCER</h3>
          </FadeUp>
          {bySlugs(producerGrid).map((artist) => (
            <ArtistCard key={artist.slug} artist={artist} />
          ))}
        </div>
      </FadeUp>

      {/* MIXER */}
      <FadeUp as="section" id="mixer" className={`${styles.section} ${styles.sectionLight}`}>
        <div className={styles.grid}>
          <FadeUp className={`${styles.heading} ${styles.headingLight}`} delay={3}>
            {/* FIX: ของเดิมเขียนว่า "MIXER >" มีเครื่องหมาย > เกินมา */}
            <h3>MIXER</h3>
          </FadeUp>
          {bySlugs(mixerGrid).map((artist) => (
            <ArtistCard key={artist.slug} artist={artist} />
          ))}
        </div>
      </FadeUp>

      {/* NEWS */}
      <FadeUp as="section" id="news" className="news">
        <div className="news-con">
          <FadeUp className="news-text" delay={3}>
            <h2>NEWS</h2>
          </FadeUp>
          <div className="news-table">
            {homeNews.map((track) => (
              <NewsCard key={track.title} track={track} />
            ))}
          </div>
        </div>
      </FadeUp>
    </>
  );
}
