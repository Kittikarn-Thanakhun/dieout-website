import Link from 'next/link';
import type { Artist } from '@/types';
import styles from './ArtistCard.module.css';

/**
 * FIX: ของเดิมรูปกับป้ายชื่ออยู่คนละที่ — <a> หุ้มแค่รูป ส่วน <p> ชื่ออยู่นอกลิงก์
 * ทำให้คลิกที่ชื่อไม่ไปไหน ตอนนี้ทั้งการ์ดเป็นลิงก์เดียว
 */
export default function ArtistCard({ artist }: { artist: Artist }) {
  return (
    <Link href={`/artist/${artist.slug}`} className={styles.card}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={artist.image} className={styles.cardImg} alt={artist.name} loading="lazy" />
      <p className={styles.cardLabel}>{artist.name}</p>
    </Link>
  );
}
