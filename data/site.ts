import type { Social, Track } from '@/types';

/** social ของค่าย DIEOUT — ใช้ทั้ง section CONTACT หน้าแรก และใน footer ทุกหน้า */
export const labelSocials: Social[] = [
  { kind: 'youtube', url: 'https://www.youtube.com/@dieout13' },
  { kind: 'instagram', url: 'https://www.instagram.com/dieout.official/' },
  { kind: 'tiktok', url: 'https://www.tiktok.com/@dieoutfortiktok' },
  { kind: 'facebook', url: 'https://www.facebook.com/dieoutwerunning/?locale=th_TH' },
  { kind: 'spotify', url: 'https://open.spotify.com/artist/7ENuEUiLggNkstJVjD51Za' },
  { kind: 'itunes', url: 'https://music.apple.com/th/artist/dieout/1592288833' },
];

export const aboutText =
  'DIEOUT ก่อตั้งโดย SARAN ผู้ชนะ The Rapper 2020 CIVIL WAR ตอนอายุ 15 ปี แม้ชนะรายการใหญ่แต่ไม่ได้รับโอกาสจากค่ายเพลง จึงรวมเพื่อนในสาย Hiphop Underground สร้างผลงานด้วยตัวเอง ชื่อ DIEOUT หมายถึง “การสูญหาย” สื่อถึงการกลับมาในแบบของตัวเอง กลุ่มนี้ได้รับความนิยมเพราะเป็นเสียงแทนวัยรุ่น กล้าพูดถึงความรัก ความฝัน และการต่อสู้เพื่อสิ่งที่รัก พร้อมความอิสระจากค่ายเพลง และยังช่วยผลักดัน Hiphop Underground เข้าสู่กระแสหลัก ปัจจุบันสมาชิกพัฒนาสไตล์หลากหลาย ทำให้ฐานแฟนขยายไปยังผู้ฟังทุกวัย';

/** 3 เพลงใน section NEWS หน้าแรก */
export const homeNews: Track[] = [
  {
    title: '21',
    credit: 'SARAN',
    cover: 'https://i.scdn.co/image/ab67616d00001e0204fbbd52546af08fc0b84af2',
    links: [
      { kind: 'youtube', url: 'https://www.youtube.com/watch?v=P2MoiMVPXak' },
      { kind: 'spotify', url: 'https://open.spotify.com/album/1VdRr5rBRK4wgCFLFULJM5' },
      { kind: 'itunes', url: 'https://music.apple.com/th/album/saran-21-single/1891092469' },
    ],
  },
  {
    title: 'YSL GIRL',
    credit: 'SEXSKI Feat. MEYOU',
    cover: 'https://i.scdn.co/image/ab67616d00001e0202fd66728e8d6154048a782f',
    links: [
      { kind: 'youtube', url: 'https://youtu.be/bB0sTJeR6-c?si=e3WRej2I5xYrwQmf' },
      { kind: 'spotify', url: 'https://open.spotify.com/track/3VfV03FETvqZ8nlt993mes' },
      { kind: 'itunes', url: 'https://music.apple.com/th/album/ysl-girl-feat-meyou-single/1884636947' },
    ],
  },
  {
    title: 'CODEINE LOVER',
    credit: '1ST Feat. Z9, SEXSKI',
    cover: '/song-img/1st.jpg',
    links: [
      { kind: 'youtube', url: 'https://www.youtube.com/watch?v=CraHrYofH8Q' },
      { kind: 'spotify', url: 'https://open.spotify.com/track/3YlRnuspkjVocc8qlbbyYK' },
      {
        kind: 'itunes',
        url: 'https://music.apple.com/th/album/codeine-lover-feat-sexski-z9/1873911703?i=1873912019',
      },
    ],
  },
];

/**
 * รายชื่อ slug ที่แสดงในแต่ละ grid
 * ARTIST ใช้ลำดับตาม array `artists` ใน data/artists.ts เลย ไม่ต้องประกาศซ้ำ
 */
export const producerGrid = ['sure', 'slowvxnz', 'simon', 'bax'];
export const mixerGrid = ['sure', 'slowvxnz'];

/** ลิงก์เมนูบน navbar หน้าแรก */
export const navLinks = [
  { href: '#home', label: 'HOME' },
  { href: '#about', label: 'ABOUT' },
  { href: '#members', label: 'MEMBERS' },
  { href: '#artist', label: 'ARTIST' },
  { href: '#producer', label: 'PRODUCER' },
  { href: '#mixer', label: 'MIXER' },
];
