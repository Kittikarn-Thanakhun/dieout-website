export type SocialKind =
  | 'youtube'
  | 'instagram'
  | 'tiktok'
  | 'facebook'
  | 'spotify'
  | 'itunes';

export type Social = {
  kind: SocialKind;
  url: string;
};

export type Track = {
  title: string;
  credit: string;
  cover: string;
  /** ไม่ใช่ทุกเพลงจะมีครบ 3 แพลตฟอร์ม บางเพลงมีแค่ YouTube หรือแค่ Spotify + iTunes */
  links: Social[];
};

export type Artist = {
  /** ใช้เป็น URL: 'saran' -> /artist/saran/ */
  slug: string;
  /** ชื่อที่โชว์เป็นหัวข้อในหน้าศิลปิน และเป็นป้ายใต้การ์ดหน้าแรก */
  name: string;
  /** ชื่อในหัวข้อ "FOLLOW : ..." — ต่างจาก name ในกรณีของ BAX */
  followName: string;
  image: string;
  /** 1 element = 1 ย่อหน้า */
  bio: string[];
  tracks: Track[];
  socials: Social[];
};
