import type { Artist } from '@/types';

// ข้อมูลศิลปินทั้ง 17 คน ดึงมาจากไฟล์ artist/*.html เดิม
// ลำดับใน array นี้คือลำดับที่แสดงใน grid ARTIST หน้าแรก
export const artists: Artist[] = [
  {
    slug: 'saran',
    name: 'SARAN',
    followName: 'SARAN',
    image: '/img/saran.png',
    bio: [
      'SARAN (ชื่อจริง: โอม สรัล มณีโชติ) เป็นแร็ปเปอร์ไทยสายเลือดใหม่ที่เริ่มสนใจดนตรีตั้งแต่เด็ก จากการเรียนร้องเพลงกับคุณพ่อ และเริ่มทำเพลงด้วยตัวเองตั้งแต่อายุยังน้อย เขาเคยเข้าร่วมการแข่งขันแร็ปต่าง ๆ ก่อนจะไปถึงรายการใหญ่อย่าง The Rapper 2 และคว้าแชมป์ The Rapper 2020: Civil War เมื่ออายุเพียง 15 ปี ซึ่งทำให้เขาเป็นที่รู้จักในวงการฮิปฮอปไทย หลังจากนั้น SARAN ปล่อยผลงานเพลงของตัวเองที่ได้รับความนิยมสูง มีสไตล์การเขียนไรม์ที่คม และสามารถสื่อสารความรู้สึกผ่านเนื้อเพลงได้อย่างลึกซึ้ง ทำให้ช่องและผลงานของเขามียอดชมเป็นล้านวิวทั่วประเทศ',
    ],
    tracks: [
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
      title: 'รัก เศร้า เหงา ซึม',
      credit: 'SARAN Feat. URBOYTJ',
      cover: 'https://i.scdn.co/image/ab67616d0000b2737ad3eb62a076fcbb62d5955a',
      links: [
        { kind: 'youtube', url: 'https://www.youtube.com/watch?v=cn6drb40nhw' },
        { kind: 'spotify', url: 'https://open.spotify.com/album/5AhXNqOUnwEDQ8IBAOAOs0' },
        { kind: 'itunes', url: 'https://music.apple.com/th/album/%E0%B8%A3-%E0%B8%81-%E0%B9%80%E0%B8%A8%E0%B8%A3-%E0%B8%B2-%E0%B9%80%E0%B8%AB%E0%B8%87%E0%B8%B2-%E0%B8%8B-%E0%B8%A1-feat-urboytj-single/1863933162' },
      ],
    },
    {
      title: 'ไม่มีสัญญาณ',
      credit: 'SARAN',
      cover: 'https://i.scdn.co/image/ab67616d0000b273eb8e69d2643dd67783ff2afc',
      links: [
        { kind: 'youtube', url: 'https://www.youtube.com/watch?v=2Nqz1RNoXPo' },
        { kind: 'spotify', url: 'https://open.spotify.com/album/5MLsyK6uAoEyKUuBCkqlBo' },
        { kind: 'itunes', url: 'https://music.apple.com/th/album/%E0%B9%84%E0%B8%A1-%E0%B8%A1-%E0%B8%AA-%E0%B8%8D%E0%B8%8D%E0%B8%B2%E0%B8%93-single/1860002946' },
      ],
    },
    ],
    socials: [
      { kind: 'youtube', url: 'https://www.youtube.com/channel/UCoSmqwN7LYbr-mO8ekglkag' },
      { kind: 'instagram', url: 'https://www.instagram.com/saranbabybigboy/' },
      { kind: 'tiktok', url: 'https://www.tiktok.com/@saranbabybigboy?is_from_webapp=1&sender_device=pc' },
      { kind: 'facebook', url: 'https://www.facebook.com/saranbabybigboy' },
      { kind: 'spotify', url: 'https://open.spotify.com/artist/3moR9d0X97NAtZRhHWOta5' },
      { kind: 'itunes', url: 'https://music.apple.com/th/artist/saran/1133460295' },
    ],
  },
  {
    slug: 'z9',
    name: 'Z9',
    followName: 'Z9',
    image: '/img/z9.png',
    bio: [
      'Z9 (ชื่อจริง: ธนาคาร เอ้งฉ้วน, ชื่อเล่น: นาย) เป็นศิลปินแร็ปเปอร์ไทยจากจังหวัดภูเก็ต และหนึ่งในสมาชิกของกลุ่มฮิปฮอป DIEOUT. เขาเริ่มสนใจดนตรีตั้งแต่เรียนมัธยมต้น และเริ่มแต่งเพลงด้วยตัวเอง Z9 รู้จัก สรัล (SARAN) จากการเล่นเกมด้วยกัน ก่อนเข้าร่วมกับกลุ่ม DIEOUT ทำให้เริ่มเป็นที่รู้จักในวงการฮิปฮอปไทย และมีสไตล์การร้องและเมโลดี้ที่โดดเด่น เขาปล่อยผลงานเพลงที่ได้รับความนิยมหลายเพลง เช่น “ริมหาดทราย”, “แจกันดอกไม้” , “บทสรุปสุดท้าย” และ “CURSE (รักใครไม่เป็น)” ซึ่งมียอดชมรวมมากมายทั่วประเทศ.',
    ],
    tracks: [
    {
      title: 'Rain Zone',
      credit: 'MAIYARAP feat. Z9',
      cover: 'https://i.scdn.co/image/ab67616d0000b27390518e881786f10df122a475',
      links: [
        { kind: 'youtube', url: 'https://youtu.be/j7GbNWS7XUQ?si=YgR5fOS2AI537NLy' },
        { kind: 'spotify', url: 'https://open.spotify.com/track/7nSkSqb1WDtZ7hY2dVEvWY' },
        { kind: 'itunes', url: 'https://music.apple.com/il/album/rain-zone-feat-z9-single/1870748656' },
      ],
    },
    {
      title: 'ครั้งหนึ่ง',
      credit: 'SEA. Feat. Z9',
      cover: 'https://i.scdn.co/image/ab67616d00001e026899aafc5e12a8ed39139bc2',
      links: [
        { kind: 'youtube', url: 'https://youtu.be/YR0NFjHFOA8?si=B6npLATVqJSDnxAL' },
        { kind: 'spotify', url: 'https://open.spotify.com/track/3ImxRQnfrCXFrBFxJIvJuR' },
        { kind: 'itunes', url: 'https://music.apple.com/th/album/ysl-girl-feat-meyou-single/1884636947https://music.apple.com/th/album/%E0%B8%84%E0%B8%A3-%E0%B8%87%E0%B8%AB%E0%B8%99-%E0%B8%87-feat-z9/1884565450?i=1884565575' },
      ],
    },
    {
      title: 'คำเดียวง่ายๆ',
      credit: 'Z9 Ft. 2K , 2TFLOW , 1ST',
      cover: 'https://i.scdn.co/image/ab67616d0000b273f64de0b318460f1399078258',
      links: [
        { kind: 'youtube', url: 'https://youtu.be/KgX3Gr6oAi8?si=uT1WKMisq4QU8po3' },
        { kind: 'spotify', url: 'https://open.spotify.com/track/2ORyDq8ksO5Aj1A90tqQ4I' },
        { kind: 'itunes', url: 'https://music.apple.com/th/album/%E0%B8%84%E0%B8%B3%E0%B9%80%E0%B8%94-%E0%B8%A2%E0%B8%A7%E0%B8%87-%E0%B8%B2%E0%B8%A2-%E0%B9%86-feat-1st-2k-2tflow/1874578153?i=1874578524' },
      ],
    },
    ],
    socials: [
      { kind: 'youtube', url: 'https://www.youtube.com/channel/UCtG4dYsmYm_SkfqUqI89uXg' },
      { kind: 'instagram', url: 'https://www.instagram.com/tanakarn29/' },
      { kind: 'tiktok', url: 'https://www.tiktok.com/@z9righthere' },
      { kind: 'facebook', url: 'https://www.facebook.com/Z9DIEOUT/' },
      { kind: 'spotify', url: 'https://open.spotify.com/artist/4CuVt3p02OaWu4klQuJoDP' },
      { kind: 'itunes', url: 'https://music.apple.com/th/artist/z9/1537796046' },
    ],
  },
  {
    slug: 'p6ick',
    name: 'P6ICK',
    followName: 'P6ICK',
    image: '/img/p6ick.jpg',
    bio: [
      'P6ICK ชื่อเล่น ไนซ์ (ชื่อจริง: ปุณภพ ศรีพนา) เป็นแร็ปเปอร์ไทยสายเลือดใหม่ สมาชิกแก๊ง DIEOUT และศิลปินในสังกัด Sony Music Thailand เขาเริ่มเป็นที่รู้จักจากการเข้าร่วมแข่งขันในรายการ Show Me The Money Thailand SS2 ก่อนจะมีผลงานเพลงทั้งแบบกลุ่มและเดี่ยว ด้วยสไตล์การแร็ปที่มีเอกลักษณ์และโทนเสียงโดดเด่น ทำให้มีผลงานที่มียอดรับชมหลักล้าน และกลายเป็นอีกหนึ่งแร็ปเปอร์รุ่นใหม่ที่น่าจับตามองในวงการฮิปฮอปไทย โดยมีผลงานยอดนิยม เช่น 1 OF 1, BENZ และ SHE IS TOTALLY OUT OF MY LEAGUE',
    ],
    tracks: [
    {
      title: 'STORY',
      credit: 'P6ICK Feat. SURIYA MQT, YUNGTARR',
      cover: '/song-img/1p6ick.jpg',
      links: [
        { kind: 'youtube', url: 'https://www.youtube.com/watch?v=-YOiOhpTb3A' },
        { kind: 'spotify', url: 'https://open.spotify.com/track/5I34mmT2bCukrXK2EwkfC1' },
        { kind: 'itunes', url: 'https://music.apple.com/th/album/story-feat-suriya-mqt-yungtarr/1889091639?i=1889091641' },
      ],
    },
    {
      title: '2 OF 2',
      credit: 'SURIYA MQT X P6ICK',
      cover: 'https://i.scdn.co/image/ab67616d0000b2739add7b8eb92ed15979dfbc1a',
      links: [
        { kind: 'youtube', url: 'https://www.youtube.com/watch?v=gTmPiNnXn-g&list=RDgTmPiNnXn-g&start_radio=1' },
        { kind: 'spotify', url: 'https://open.spotify.com/album/44zR6uRiydNdMtQOhvdPWm' },
        { kind: 'itunes', url: 'https://music.apple.com/us/album/2-of-2/1877385838?i=1877385839' },
      ],
    },
    {
      title: 'หนุ่มเมกา',
      credit: 'P6ICK X SURIYA MQT Feat. SEXSKI',
      cover: 'https://i.scdn.co/image/ab67616d00001e025c73ea1f102da42dae39fcf2',
      links: [
        { kind: 'youtube', url: 'https://www.youtube.com/watch?v=wDVzQw9k3OA' },
        { kind: 'spotify', url: 'https://open.spotify.com/track/5Zfprx7dvrK3oH7U82cTmO' },
        { kind: 'itunes', url: 'https://music.apple.com/th/album/%E0%B8%AB%E0%B8%99-%E0%B8%A1%E0%B9%80%E0%B8%A1%E0%B8%81%E0%B8%B2-feat-sexski/1855833848?i=1855833855' },
      ],
    },
    ],
    socials: [
      { kind: 'youtube', url: 'https://www.youtube.com/@P6ICK' },
      { kind: 'instagram', url: 'https://www.instagram.com/p6ick/' },
      { kind: 'tiktok', url: 'https://www.tiktok.com/@realp6ick' },
      { kind: 'facebook', url: 'https://www.facebook.com/p/P6ICK-100028409933588/?locale=th_TH' },
      { kind: 'spotify', url: 'https://open.spotify.com/artist/52IxFzldfmZmsLcF078dnY' },
      { kind: 'itunes', url: 'https://music.apple.com/th/artist/p6ick/1531281386' },
    ],
  },
  {
    slug: 'thebests',
    name: 'THE BESTS',
    followName: 'THE BESTS',
    image: '/img/thebest.jpg',
    bio: [
      'THE BESTS เป็นศิลปินไทย สมาชิกของแก๊ง DIEOUT ที่อยู่ในกลุ่มฮิปฮอปรุ่นใหม่ของไทย เขามีเอกลักษณ์ด้านเสียงร้องที่ไพเราะ นุ่มลึก และมีเสน่ห์เฉพาะตัว ทำให้ผลงานเพลงสามารถสื่ออารมณ์และเข้าถึงความรู้สึกของผู้ฟังได้อย่างเต็มที่',
      'เขามีผลงานทั้งแบบเดี่ยวและร่วมกับสมาชิกในแก๊ง DIEOUT ซึ่งช่วยสร้างตัวตนในวงการเพลงมากขึ้น ด้วยสไตล์ที่ผสมผสานความเป็นฮิปฮอปและเมโลดี้ฟังง่าย ทำให้เข้าถึงผู้ฟังได้หลายกลุ่ม และเริ่มได้รับความนิยมอย่างต่อเนื่อง ผลงานยอดนิยมของ THE BESTS ได้แก่ “ไม่มีเหมือนเขา”, “อะไรฉันก็ยอม” และ “ฉันยังอยู่” ซึ่งช่วยยืนยันความสามารถและเสน่ห์เฉพาะตัวของเขาในวงการเพลงไทย',
    ],
    tracks: [
    {
      title: 'เมื่อไหร่',
      credit: 'THE BESTS Feat. SIMON',
      cover: 'https://i.scdn.co/image/ab67616d00001e02129870a18edebfd05c7356c9',
      links: [
        { kind: 'youtube', url: 'https://www.youtube.com/watch?v=fwEMmR00X64' },
        { kind: 'spotify', url: 'https://open.spotify.com/album/4YaoLlnTnHiuYcbFO3yg4c' },
        { kind: 'itunes', url: 'https://music.apple.com/th/album/%E0%B9%80%E0%B8%A1-%E0%B8%AD%E0%B9%84%E0%B8%AB%E0%B8%A3-feat-simon/1875833579?i=1875833582' },
      ],
    },
    {
      title: 'ห่างเหิน (Distance)',
      credit: 'THE BESTS Feat. BLVCKHEART',
      cover: 'https://i.scdn.co/image/ab67616d00001e02ee37326664e314a48ade95b5',
      links: [
        { kind: 'youtube', url: 'https://www.youtube.com/watch?v=9hII4eFtI_4' },
        { kind: 'spotify', url: 'https://open.spotify.com/album/3K4FGhG4qYdvaCJwDp0fUE' },
        { kind: 'itunes', url: 'https://music.apple.com/th/music-video/%E0%B8%AB-%E0%B8%B2%E0%B8%87%E0%B9%80%E0%B8%AB-%E0%B8%99-distance-feat-blvckheart-official-mv/1882354456' },
      ],
    },
    {
      title: 'จอมโจรคิด',
      credit: 'THE BESTS Feat. SURE, SARAN, Z9',
      cover: 'https://i.scdn.co/image/ab67616d0000b2735f84017411cefba8488324e5',
      links: [
        { kind: 'youtube', url: 'https://www.youtube.com/watch?v=hWpD3i7g8x4' },
        { kind: 'spotify', url: 'https://open.spotify.com/album/2SeW2rJkrLXSDSbyrAGKRchttps://open.spotify.com/album/3K4FGhG4qYdvaCJwDp0fUE' },
        { kind: 'itunes', url: 'https://music.apple.com/th/album/%E0%B8%88%E0%B8%AD%E0%B8%A1%E0%B9%82%E0%B8%88%E0%B8%A3%E0%B8%84-%E0%B8%94-feat-sure-saran-z9-single/1853850257' },
      ],
    },
    ],
    socials: [
      { kind: 'youtube', url: 'https://www.youtube.com/channel/UC2qzws4CFEmo8e1rSZ0Ovew' },
      { kind: 'instagram', url: 'https://www.instagram.com/thisisthebests/' },
      { kind: 'tiktok', url: 'hthttps://www.tiktok.com/@thisisthebests_' },
      { kind: 'facebook', url: 'https://www.facebook.com/p/The-BESTS-100088319576382/' },
      { kind: 'spotify', url: 'https://open.spotify.com/artist/6e8TDjcAEEGD0yhbhKocWE' },
      { kind: 'itunes', url: 'https://music.apple.com/th/artist/the-bests/1553883707' },
    ],
  },
  {
    slug: 'sexski',
    name: 'SEXSKI',
    followName: 'SEXSKI',
    image: '/img/sexski.jpg',
    bio: [
      'SEXSKI ชื่อจริง ชยพล กวีศักดิ์ ชื่อเล่น อองรี เป็นแร็ปเปอร์ไทย สมาชิกแก๊ง DIEOUT หนึ่งในกลุ่มฮิปฮอปรุ่นใหม่ที่กำลังมาแรงในวงการเพลงไทย เพลงของเขาผสมผสานฮิปฮอปกับเมโลดี้ ทำให้มีเอกลักษณ์เฉพาะตัวและเข้าถึงผู้ฟังได้ง่ายทั้งกลุ่มแฟนเพลงสายฮิปฮอปและสายเพลงร่วมสมัย เขาเริ่มเป็นที่รู้จักจากการร่วมงานกับสมาชิกแก๊งและศิลปินอื่น ๆ เช่น JAONAAY และสร้างสีสันให้กับผลงานด้วยสไตล์ที่หลากหลาย',
      'นอกจากนี้ SEXSKI ยังเคยร่วมทำ อัลบั้ม “2SKI” กับ 2K ซึ่งเป็นการจับคู่สองแร็ปเปอร์จากแก๊ง DIEOUT โดยอัลบั้มนี้ช่วยตอกย้ำความสามารถของทั้งคู่ และได้รับการตอบรับที่ดีจากแฟนเพลงฮิปฮอปไทย',
    ],
    tracks: [
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
      title: 'LET\'S GO (Say she love youngsek)',
      credit: 'SEXSKI Feat. 2K',
      cover: 'https://i.scdn.co/image/ab67616d00001e029ed3d292c5aea3515b4be6d5',
      links: [
        { kind: 'youtube', url: 'https://www.youtube.com/watch?v=e30T28KDI44' },
        { kind: 'spotify', url: 'https://open.spotify.com/album/7hJ2gyWVOGGAWpoKhENmH1' },
        { kind: 'itunes', url: 'https://music.apple.com/th/album/lets-go-feat-2k-single/1874318125' },
      ],
    },
    {
      title: 'ไม่เจตนา',
      credit: 'P-H x SEXSKI Feat. Blue Wave',
      cover: 'https://i.scdn.co/image/ab67616d0000b273b1642473151871b3cfff92c4',
      links: [
        { kind: 'youtube', url: 'https://www.youtube.com/watch?v=_-C5Ea1LQLo&list=RD_-C5Ea1LQLo&start_radio=1' },
        { kind: 'spotify', url: 'https://open.spotify.com/album/0VEuUOTnWE3rwQvFP1Jl9Z' },
        { kind: 'itunes', url: 'https://music.apple.com/th/album/%E0%B9%84%E0%B8%A1-%E0%B9%80%E0%B8%88%E0%B8%95%E0%B8%99%E0%B8%B2-feat-blue-wave/1877840267?i=1877840450' },
      ],
    },
    ],
    socials: [
      { kind: 'youtube', url: 'https://www.youtube.com/channel/UCRG2T4Vx4GD_kva_w5w42Mg' },
      { kind: 'instagram', url: 'https://www.instagram.com/youngs3k/' },
      { kind: 'tiktok', url: 'https://www.tiktok.com/@dieoutfortiktok' },
      { kind: 'spotify', url: 'https://open.spotify.com/artist/6QeYcD1n2YcWygCScfLhRE' },
      { kind: 'itunes', url: 'https://music.apple.com/th/artist/sexski/1677498358?l=th' },
    ],
  },
  {
    slug: '1st',
    name: '1ST',
    followName: '1ST',
    image: '/img/1st.jpg',
    bio: [
      '1ST เป็นแร็ปเปอร์ไทย สมาชิกแก๊ง DIEOUT ที่มีเสียงไพเราะและมีเสน่ห์เฉพาะตัว ทำให้เพลงของเขาโดดเด่นและเข้าถึงผู้ฟังได้ง่ายทั้งในกลุ่มแฟนฮิปฮอปและสายเพลงร่วมสมัย',
      'เขาเคยเข้าร่วมแข่งขันในรายการ Cypherlogy SS2 ซึ่งช่วยสร้างชื่อเสียงและแสดงฝีมือด้านการแร็ปของเขาให้ผู้ฟังได้รู้จัก ผลงานเด่นของเขามีทั้งแบบเดี่ยวและร่วมกับสมาชิกแก๊ง ล่าสุดคือ “CODEINE LOVER” ที่ได้รับความสนใจอย่างมากจากแฟนเพลง ด้วยสไตล์การร้องและการถ่ายทอดอารมณ์ที่โดดเด่น 1ST จึงถือเป็นอีกหนึ่งศิลปินรุ่นใหม่ที่น่าจับตามองในวงการฮิปฮอปไทย',
    ],
    tracks: [
    {
      title: 'CODEINE LOVER',
      credit: '1ST Feat. Z9, SEXSKI',
      cover: '/song-img/1st.jpg',
      links: [
        { kind: 'youtube', url: 'https://www.youtube.com/watch?v=CraHrYofH8Q' },
        { kind: 'spotify', url: 'https://open.spotify.com/track/3YlRnuspkjVocc8qlbbyYK' },
        { kind: 'itunes', url: 'https://music.apple.com/th/album/codeine-lover-feat-sexski-z9/1873911703?i=1873912019' },
      ],
    },
    {
      title: 'WOLF CUB (ALBUMS)',
      credit: '1ST',
      cover: '/song-img/1st.jpg',
      links: [
        { kind: 'youtube', url: 'https://www.youtube.com/watch?v=rmp2a-TIcDE&list=OLAK5uy_nMYPArF7zhiBdM57vYvUtUuT7jfiKakXg' },
        { kind: 'spotify', url: 'https://open.spotify.com/album/63EBlec6e4nDHqkzxQtwSU' },
        { kind: 'itunes', url: 'https://music.apple.com/us/album/wolf-cub/1873911703' },
      ],
    },
    {
      title: 'เหมือนหลงทาง (LOST BOY)',
      credit: '2K',
      cover: '/song-img/1st.jpg',
      links: [
        { kind: 'youtube', url: 'https://www.youtube.com/watch?v=rmp2a-TIcDE' },
        { kind: 'spotify', url: 'https://open.spotify.com/track/6NC4LnP2IjOEHDoTylBmd3' },
        { kind: 'itunes', url: 'https://music.apple.com/th/album/%E0%B9%80%E0%B8%AB%E0%B8%A1-%E0%B8%AD%E0%B8%99%E0%B8%AB%E0%B8%A5%E0%B8%87%E0%B8%97%E0%B8%B2%E0%B8%87-lost-boy/1852708593?i=1852708843' },
      ],
    },
    ],
    socials: [
      { kind: 'youtube', url: 'https://www.youtube.com/@1stdieout' },
      { kind: 'instagram', url: 'https://www.instagram.com/1st_firstz/' },
      { kind: 'tiktok', url: 'https://www.tiktok.com/@1st_firstz' },
      { kind: 'facebook', url: 'https://www.facebook.com/1stwhynot/?locale=th_TH' },
      { kind: 'spotify', url: 'https://open.spotify.com/artist/5p5YOMEbKadO6P7e4YxwKC' },
      { kind: 'itunes', url: 'https://music.apple.com/th/artist/1st/1577002720' },
    ],
  },
  {
    slug: 'blvckheart',
    name: 'BLVCKHEART',
    followName: 'BLVCKHEART',
    image: '/img/blvckheart.jpg',
    bio: [
      'BLVCKHEART หรือ แซม-ชัยพัฒน์ อินทรานุสรณ์ เป็นศิลปินฮิปฮอป/ป๊อปจากนครสวรรค์ ที่เริ่มทำเพลงตั้งแต่อายุ 12 ปี เขาแจ้งเกิดจากการแข่งขัน Thai Rap Audio Battle และต่อมาเป็นสมาชิกของแก๊ง DIEOUT หนึ่งในกลุ่มฮิปฮอปรุ่นใหม่ที่กำลังมาแรงในวงการเพลงไทย',
      'เขาโด่งดังจากเพลงฮิตหลายเพลง เช่น “ฟีโรโมน”, “One Of My Life” และ “อยากจะกอดเธอนาน ๆ” ซึ่งสะท้อนความสามารถในการเขียนเนื้อเพลงเอง พร้อมกับสไตล์ Regional Pop ที่มีเอกลักษณ์ ทำให้เพลงของเขามีทั้งความร่วมสมัยและเข้าถึงผู้ฟังได้ง่าย',
      'ด้วยเสียงร้องที่มีเสน่ห์ การผสมผสานฮิปฮอปและป๊อปอย่างลงตัว และการเล่าเรื่องผ่านเพลงอย่างน่าสนใจ BLVCKHEART จึงถือเป็นศิลปินรุ่นใหม่ที่น่าจับตามอง และมีแนวโน้มเติบโตอย่างต่อเนื่องในวงการเพลงไทย',
    ],
    tracks: [
    {
      title: 'อยากจะกอดเธอนาน ๆ (Bossa Ver.)',
      credit: 'BLVCKHEART Feat. Z9',
      cover: 'https://i.scdn.co/image/ab67616d00001e029f00bcf06262bf30b5c96eee',
      links: [
        { kind: 'youtube', url: 'https://www.youtube.com/watch?v=D8YE4-hTGmo' },
        { kind: 'spotify', url: 'https://open.spotify.com/album/4SA5ar0QMnDgTPrqPvsYt1' },
        { kind: 'itunes', url: 'https://music.apple.com/th/album/%E0%B8%AD%E0%B8%A2%E0%B8%B2%E0%B8%81%E0%B8%88%E0%B8%B0%E0%B8%81%E0%B8%AD%E0%B8%94%E0%B9%80%E0%B8%98%E0%B8%AD%E0%B8%99%E0%B8%B2%E0%B8%99-%E0%B9%86-feat-z9-bossa-ver-single/1881025864' },
      ],
    },
    {
      title: 'โทรมาที่เบอร์นี้ (Phone Number)',
      credit: 'BLVCKHEART',
      cover: 'https://i.scdn.co/image/ab67616d0000b2735a0a4f369973c1e611002d5c',
      links: [
        { kind: 'youtube', url: 'https://www.youtube.com/watch?v=igP0cOlGmDA' },
        { kind: 'spotify', url: 'https://open.spotify.com/track/4XcbpTFSnuADlw3ZgE3sYM' },
        { kind: 'itunes', url: 'https://music.apple.com/th/album/%E0%B9%82%E0%B8%97%E0%B8%A3%E0%B8%A1%E0%B8%B2%E0%B8%97-%E0%B9%80%E0%B8%9A%E0%B8%AD%E0%B8%A3-%E0%B8%99-phone-number/1846032869?i=1846033103' },
      ],
    },
    {
      title: 'BLVCKHEART (EP)',
      credit: 'BLVCKHEART',
      cover: 'https://i.scdn.co/image/ab67616d0000b2735a0a4f369973c1e611002d5c',
      links: [
        { kind: 'youtube', url: 'https://www.youtube.com/watch?v=bGbII_DDtTs&list=OLAK5uy_lVZVB2U_h6oaY75kwHWAVremVfa-jntfQ' },
        { kind: 'spotify', url: 'https://open.spotify.com/album/77umFOUUMlR0gQH7LEU7EM' },
        { kind: 'itunes', url: 'https://music.apple.com/us/album/blvckheart-ep/1846032869' },
      ],
    },
    ],
    socials: [
      { kind: 'youtube', url: 'https://www.youtube.com/@blvckharrt' },
      { kind: 'instagram', url: 'https://www.instagram.com/blvckhartt/' },
      { kind: 'tiktok', url: 'https://www.tiktok.com/@blvckharrt' },
      { kind: 'spotify', url: 'https://open.spotify.com/artist/3Ld1g6LjfR2ILDB6SD8aJV' },
      { kind: 'itunes', url: 'https://music.apple.com/th/artist/blvckheart/1803327367?l=th' },
    ],
  },
  {
    slug: '2k',
    name: '2K',
    followName: '2K',
    image: '/img/2k.PNG',
    bio: [
      '2K เป็นแร็ปเปอร์ไทย สมาชิกแก๊ง DIEOUT และถือเป็น น้องเล็กสุดของแก๊ง หนึ่งในกลุ่มฮิปฮอปรุ่นใหม่ที่กำลังมาแรงในวงการเพลงไทย เพลงของเขามีเอกลักษณ์เฉพาะตัว ผสมผสานฮิปฮอปกับสไตล์สตรีท ทำให้เข้าถึงผู้ฟังได้ง่ายทั้งแฟนเพลงสายฮิปฮอปและสายเพลงร่วมสมัย เขาเริ่มเป็นที่รู้จักจากการร่วมงานกับสมาชิกแก๊งและศิลปินอื่น ๆ เช่น SEXSKI และมีส่วนร่วมในอัลบั้มร่วม “2SKI” กับ SEXSKI ที่ช่วยตอกย้ำความสามารถและสร้างฐานแฟนเพลงให้แข็งแรง',
      'ด้วยเสียง โทน และสไตล์ที่สามารถปรับตัวเข้ากับเพลงได้หลายแนว 2K จึงถือเป็นหนึ่งในศิลปินรุ่นใหม่ที่น่าจับตามอง และมีแนวโน้มเติบโตในวงการฮิปฮอปไทยอย่างต่อเนื่อง',
    ],
    tracks: [
    {
      title: 'ถนนที่ไร้เธอ',
      credit: '2K Feat. RachYO',
      cover: 'https://i.scdn.co/image/ab67616d0000b273c6a693cf31151219a498de8b',
      links: [
        { kind: 'youtube', url: 'https://www.youtube.com/watch?v=w2hjYEu09IE' },
        { kind: 'spotify', url: 'https://open.spotify.com/album/2SeW2rJkrLXSDSbyrAGKRc' },
        { kind: 'itunes', url: 'https://music.apple.com/th/album/%E0%B8%96%E0%B8%99%E0%B8%99%E0%B8%97-%E0%B9%84%E0%B8%A3-%E0%B9%80%E0%B8%98%E0%B8%AD-feat-rachyo/1881240275?i=1881240276' },
      ],
    },
    {
      title: 'Free Will',
      credit: 'MAIMHON x K6Y x 2K x Zol x Prod. BLue',
      cover: 'https://i.scdn.co/image/ab67616d00001e02e21545b1b7f679fa52c74401',
      links: [
        { kind: 'youtube', url: 'https://www.youtube.com/watch?v=whUMkkIstBc' },
        { kind: 'spotify', url: 'https://open.spotify.com/album/5LE8LJnfALEQshFQqdYrRo' },
        { kind: 'itunes', url: 'https://music.apple.com/th/album/free-will-feat-prod-blue-zol-single/1871294797' },
      ],
    },
    {
      title: 'บ้านพัก',
      credit: '2K',
      cover: 'https://i.scdn.co/image/ab67616d0000b273da975158ba7bd215fb8fad05',
      links: [
        { kind: 'youtube', url: 'https://www.youtube.com/watch?v=hXHoOaY3MHw&list=OLAK5uy_nUXOVwE1ta1qe_obD4BOG273A8zjJtCxw' },
        { kind: 'spotify', url: 'https://open.spotify.com/album/5JsXcX6qpZudYGogl55H5B' },
        { kind: 'itunes', url: 'https://music.apple.com/th/album/%E0%B8%9A-%E0%B8%B2%E0%B8%99%E0%B8%9E-%E0%B8%81-2026-single/1864745627' },
      ],
    },
    ],
    socials: [
      { kind: 'youtube', url: 'https://www.youtube.com/channel/UClLPwkV_XQ_ONI7NAyGAKwQ' },
      { kind: 'instagram', url: 'https://www.instagram.com/2000fromdabottom/' },
      { kind: 'tiktok', url: 'https://www.tiktok.com/@lord2000fromdabottom' },
      { kind: 'facebook', url: 'https://www.facebook.com/dieoutwerunning/?locale=th_TH' },
      { kind: 'spotify', url: 'https://open.spotify.com/artist/7w08uJNZmg9HTsS6XeHX9E' },
      { kind: 'itunes', url: 'https://music.apple.com/th/artist/2k/1637401129' },
    ],
  },
  {
    slug: 'sure',
    name: 'SURE',
    followName: 'SURE',
    image: '/img/sure.jpg',
    bio: [
      'SURE เป็นแร็ปเปอร์ไทย สมาชิกแก๊ง DIEOUT และยังเป็นมือ Mix & Mastering รวมถึง producer ของผลงานหลายชิ้นในกลุ่ม เขาเป็นหนึ่งในศิลปินฮิปฮอปรุ่นใหม่ที่กำลังมาแรงในวงการเพลงไทย ด้วยน้ำเสียงที่มีเสน่ห์และสไตล์การแร็ปที่เป็นเอกลักษณ์ ทำให้ผลงานของเขาเข้าถึงผู้ฟังได้ง่าย ทั้งแฟนฮิปฮอปและสายเพลงร่วมสมัย',
      'นอกจากนี้ เขายังเคยเข้าร่วมแข่งขันในรายการ Another World ซึ่งช่วยตอกย้ำศักยภาพและตัวตนในฐานะศิลปินของเขา',
      'ผลงานยอดนิยมอย่าง “ดาวนำทาง” สะท้อนความสามารถรอบด้านของเขา ทั้งการร้อง การแร็ป การแต่งเพลง และการมิกซ์มาสเตอร์ ทำให้ SURE เป็นศิลปินที่น่าจับตามองในวงการฮิปฮอปไทย',
    ],
    tracks: [
    {
      title: 'ผันผ่าน (Changed.)',
      credit: 'SURE Feat. K6Y',
      cover: 'https://i.scdn.co/image/ab67616d00001e02295d99a8f31accbe16cf132c',
      links: [
        { kind: 'youtube', url: 'https://www.youtube.com/watch?v=fVpL8qFF1uM' },
        { kind: 'spotify', url: 'https://open.spotify.com/album/1k1ZhIDBkwYmNLlrjZrBrP' },
        { kind: 'itunes', url: 'https://music.apple.com/th/album/%E0%B8%9C-%E0%B8%99%E0%B8%9C-%E0%B8%B2%E0%B8%99-changed-feat-k6y-single/1885202759' },
      ],
    },
    {
      title: 'ดาวนำทาง 2026',
      credit: 'SURE Feat. DXRIW, JAO YENTED',
      cover: 'https://i.scdn.co/image/ab67616d00001e02a223b0f1b14b545cd5705e45',
      links: [
        { kind: 'youtube', url: 'https://www.youtube.com/watch?v=Q7Plo_SJUnY' },
        { kind: 'spotify', url: 'https://open.spotify.com/album/3OJ8jqeeFZqWfwgolPXyDq' },
        { kind: 'itunes', url: 'https://music.apple.com/th/album/%E0%B8%94%E0%B8%B2%E0%B8%A7%E0%B8%99%E0%B8%B3%E0%B8%97%E0%B8%B2%E0%B8%87-2026-remastered-feat-dxriw-jao-yented-single/1867817667' },
      ],
    },
    {
      title: 'หากตรงนั้นมีดาว',
      credit: 'SURE',
      cover: 'https://i.scdn.co/image/ab67616d00001e0240a5b4c6cf6ecb337a93c840',
      links: [
        { kind: 'youtube', url: 'https://www.youtube.com/watch?v=aQSjAoRQezUq' },
        { kind: 'spotify', url: 'https://open.spotify.com/track/6KFHOcTYdgO7vegEQoi9wX' },
        { kind: 'itunes', url: 'https://music.apple.com/th/album/%E0%B8%AB%E0%B8%B2%E0%B8%81%E0%B8%95%E0%B8%A3%E0%B8%87%E0%B8%99-%E0%B8%99%E0%B8%A1-%E0%B8%94%E0%B8%B2%E0%B8%A7/1858465369?i=1858465374' },
      ],
    },
    ],
    socials: [
      { kind: 'youtube', url: 'https://www.youtube.com/channel/UC8A_Bk6bXt7VwN5FiPkFcpA' },
      { kind: 'instagram', url: 'https://www.instagram.com/666sure/' },
      { kind: 'tiktok', url: 'https://www.tiktok.com/@sureishappyboy' },
      { kind: 'facebook', url: 'https://www.facebook.com/jiramet.thepnarong.7/' },
      { kind: 'spotify', url: 'https://open.spotify.com/artist/4VDgBH42C8INx6Oqw6WuPB' },
      { kind: 'itunes', url: 'https://music.apple.com/th/artist/sure/1466787502?l=th' },
    ],
  },
  {
    slug: '2tflow',
    name: '2T FLOW',
    followName: '2T FLOW',
    image: '/img/2tflow.jpg',
    bio: [
      '2T FLOW เป็นแร็ปเปอร์ไทย สมาชิกแก๊ง DIEOUT — กลุ่มฮิปฮอปรุ่นใหม่ที่กำลังมาแรงในวงการเพลงไทย โดย มุ่งเน้นด้านการร้องเป็นหลัก ทำให้เพลงของเขาเข้าถึงผู้ฟังง่ายทั้งแฟนฮิปฮอปและสายเพลงร่วมสมัย',
      'เขาเริ่มเป็นที่รู้จักจากผลงานเดี่ยว เช่น GOOD BYE, เมื่อคืนฉันฝันว่า, 7 ปีแล้วนะ รวมถึงการร่วมงานกับสมาชิกแก๊งและศิลปินอื่น ๆ เช่น REMEMBER MY NAME กับ 2K และ 1ST ซึ่งช่วยสร้างฐานแฟนเพลงให้แข็งแรงในวงการฮิปฮอปไทย',
      'ด้วยเสียงร้องที่มีเอกลักษณ์และความสามารถในการปรับตัวเข้ากับเพลง 2T FLOW จึงเป็นศิลปินรุ่นใหม่จากแก๊ง DIEOUT ที่น่าจับตามองและมีแนวโน้มเติบโตต่อเนื่องในวงการเพลงไทย',
    ],
    tracks: [
    {
      title: 'รู้ตัวอีกที',
      credit: 'SEXSKI Feat. 2T FLOW',
      cover: 'https://i.scdn.co/image/ab67616d0000b273ee931143f33a710ca40c3236',
      links: [
        { kind: 'youtube', url: 'https://www.youtube.com/watch?v=TrNx67Hmd-0' },
        { kind: 'spotify', url: 'https://open.spotify.com/track/7kiPXq1mQ8yakcIYmqrw6t' },
        { kind: 'itunes', url: 'https://music.apple.com/th/album/%E0%B8%A3-%E0%B8%95-%E0%B8%A7%E0%B8%AD-%E0%B8%81%E0%B8%97-feat-2t-flow/1864891316?i=1864891317' },
      ],
    },
    {
      title: 'คำเดียวง่ายๆ',
      credit: 'Z9 Ft. 2K , 2TFLOW , 1ST',
      cover: 'https://i.scdn.co/image/ab67616d0000b273f64de0b318460f1399078258',
      links: [
        { kind: 'youtube', url: 'https://youtu.be/KgX3Gr6oAi8?si=uT1WKMisq4QU8po3' },
        { kind: 'spotify', url: 'https://open.spotify.com/track/2ORyDq8ksO5Aj1A90tqQ4I' },
        { kind: 'itunes', url: 'https://music.apple.com/th/album/%E0%B8%84%E0%B8%B3%E0%B9%80%E0%B8%94-%E0%B8%A2%E0%B8%A7%E0%B8%87-%E0%B8%B2%E0%B8%A2-%E0%B9%86-feat-1st-2k-2tflow/1874578153?i=1874578524' },
      ],
    },
    {
      title: 'ลีลาวดี',
      credit: '1ST Feat. 2T FLOW, K6Y',
      cover: '/song-img/1st.jpg',
      links: [
        { kind: 'youtube', url: 'https://www.youtube.com/watch?v=21YWRyw0_2Q' },
        { kind: 'spotify', url: 'https://open.spotify.com/track/0WN8X1fEY4Ry9Le5Jp8rDY' },
        { kind: 'itunes', url: 'https://music.apple.com/th/album/%E0%B8%A5-%E0%B8%A5%E0%B8%B2%E0%B8%A7%E0%B8%94-feat-k6y-2t-flow/1873911703?i=1873911720' },
      ],
    },
    ],
    socials: [
      { kind: 'youtube', url: 'https://www.youtube.com/@Chay4MeeGang/videos' },
      { kind: 'instagram', url: 'https://www.instagram.com/2tflow.ch4/' },
      { kind: 'tiktok', url: 'https://www.tiktok.com/@2t_flow' },
      { kind: 'spotify', url: 'https://open.spotify.com/artist/1ymRpNPlxJRVT00kmJk8AZ' },
      { kind: 'itunes', url: 'https://music.apple.com/th/artist/2t-flow/1469798711' },
    ],
  },
  {
    slug: 'thaowan',
    name: 'THAOWAN',
    followName: 'THAOWAN',
    image: '/img/thaowan.jpg',
    bio: [
      'THAOWAN (หรือ เถาวัลย์) เป็นแร็ปเปอร์และศิลปินไทย สมาชิกแก๊ง DIEOUT — กลุ่มฮิปฮอปรุ่นใหม่ที่กำลังมาแรงในวงการเพลงไทย เขามีผลงานเพลงที่ได้รับความนิยมทั้งในฐานะศิลปินเดี่ยวและการร่วมงานกับเพื่อนในแก๊ง เช่น “ค่ำคืนนี้” และ “อยู่กับฉันก่อน” ที่ร่วมกับ SARAN รวมถึง ฤดูเศร้า และ Ending (feat. 2K) ซึ่งช่วยสร้างชื่อเสียงให้เขาในวงการเพลง',
      'THAOWAN มีสไตล์เพลงที่เข้าถึงง่าย เต็มไปด้วยอารมณ์ทั้งด้านเนื้อหาและเมโลดี้ จึงเป็นศิลปินที่แฟนฮิปฮอปและสายเพลงร่วมสมัยติดตามผลงานอย่างต่อเนื่อง',
      'ด้วยการมีส่วนร่วมทั้งในผลงานของแก๊งและเพลงของตัวเอง THAOWAN จึงถือเป็นอีกหนึ่งศิลปินรุ่นใหม่จากแก๊ง DIEOUT ที่น่าจับตามองและยังคงเติบโตในวงการเพลงไทยอย่างต่อเนื่อง',
    ],
    tracks: [
    {
      title: 'Ending',
      credit: 'THAOWAN Feat. 2K',
      cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6CuUq9icmyNR5K2wg2LYsFQ0dHyNHfxnjPQ&s',
      links: [
        { kind: 'youtube', url: 'https://www.youtube.com/watch?v=YsouA2wfew0' },
        { kind: 'spotify', url: 'https://open.spotify.com/album/2WlaJtqHbsN7ww9z2L7cTK' },
        { kind: 'itunes', url: 'https://music.apple.com/th/album/ending-feat-2k/1844353987?i=1844353988' },
      ],
    },
    {
      title: 'ฉันต้องการเวลา',
      credit: 'THAOWAN Feat. SARAN',
      cover: 'https://i.scdn.co/image/ab67616d00001e02909914ed6e4fe7661b110546',
      links: [
        { kind: 'youtube', url: 'https://www.youtube.com/watch?v=1EkpNaALfmI' },
        { kind: 'spotify', url: 'https://open.spotify.com/album/69GGwJjYsW7OERfEFsGFRL' },
        { kind: 'itunes', url: 'https://music.apple.com/th/album/%E0%B8%95-%E0%B8%AD%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%A7%E0%B8%A5%E0%B8%B2-tonight-feat-saran-single/1819005998' },
      ],
    },
    {
      title: 'ชานชา(ลา) (ALBUMS)',
      credit: 'THAOWAN X SARAN',
      cover: 'https://i.scdn.co/image/ab67616d00001e02bf15f9eef6cf2316451002b2',
      links: [
        { kind: 'youtube', url: 'https://www.youtube.com/watch?v=HnWMEH54SDc&list=OLAK5uy_kOqUfcWjImTZLiKYHcZJ-Ibf0NYbboxSs' },
        { kind: 'spotify', url: 'https://open.spotify.com/album/1hjPLRs9m5kEJiTyYQSfiq' },
        { kind: 'itunes', url: 'https://music.apple.com/th/album/%E0%B8%8A%E0%B8%B2%E0%B8%99%E0%B8%8A%E0%B8%B2-%E0%B8%A5%E0%B8%B2/1780575671' },
      ],
    },
    ],
    socials: [
      { kind: 'youtube', url: 'https://www.youtube.com/@THAOWANTRAIPHAK' },
      { kind: 'instagram', url: 'https://www.instagram.com/thaowantraiphak/' },
      { kind: 'tiktok', url: 'https://www.tiktok.com/@thaowantraiphak' },
      { kind: 'facebook', url: 'https://www.facebook.com/p/Thaowan-100075980598742/' },
      { kind: 'spotify', url: 'https://open.spotify.com/artist/2bZps5eDWmWtRwjs54Qtwj' },
      { kind: 'itunes', url: 'https://music.apple.com/th/artist/thaowan/1780575836' },
    ],
  },
  {
    slug: 'slowvxnz',
    name: 'SLOWVXNZ',
    followName: 'SLOWVXNZ',
    image: 'https://i.scdn.co/image/ab6761610000e5eb5920fc23631a2944794471e5',
    bio: [
      'SLOWVXNZ เป็นแร็ปเปอร์ไทย สมาชิกแก๊ง DIEOUT — กลุ่มฮิปฮอปรุ่นใหม่ที่กำลังมาแรงในวงการเพลงไทย เขามีบทบาททั้งในฐานะ producer / mix & mastering engineer ให้กับผลงานของแก๊งหลายชิ้น ทำให้เสียงและคุณภาพเพลงมีเอกลักษณ์และเข้มข้น ผลงานที่เขามีส่วนร่วม เช่น พักพิง และ Feel to Free ที่รวมสมาชิกหลายคนจาก DIEOUT',
      'SLOWVXNZ ยังมีผลงานเดี่ยวและ collaboration กับศิลปินอื่น ๆ ทั้งในแก๊งและวงการฮิปฮอปไทย ซึ่งแสดงให้เห็นถึงความสามารถรอบด้านทั้งด้านการร้อง การแร็ป และการทำเพลงด้วยตัวเอง',
      'ด้วยสไตล์ดนตรีที่เข้มข้นและความสามารถรอบด้าน SLOWVXNZ จึงถือเป็นอีกหนึ่งศิลปินฮิปฮอปรุ่นใหม่จากแก๊ง DIEOUT ที่น่าจับตามองในวงการเพลงไทยยุคปัจจุบัน',
    ],
    tracks: [
    {
      title: 'THE BAD DAY',
      credit: 'SLOWVXNZ',
      cover: 'https://i.scdn.co/image/ab67616d0000b27374382184a34fe1ec4ba9a647',
      links: [
        { kind: 'youtube', url: 'https://www.youtube.com/watch?v=-8NZyJrWH1Q' },
        { kind: 'spotify', url: 'https://open.spotify.com/track/6XK1GW5c7KQj0JiJaz53yP' },
        { kind: 'itunes', url: 'https://music.apple.com/us/album/the-day-bad/1827037364?i=1827037645' },
      ],
    },
    {
      title: 'NO CHILL BRO',
      credit: 'SLOWVXNZ x SARAN x CHUNWEN x JONIN x DXRIW',
      cover: 'https://i.scdn.co/image/ab67616d0000b27374382184a34fe1ec4ba9a647',
      links: [
        { kind: 'youtube', url: 'https://www.youtube.com/watch?v=nFVOTGr7Uwc&pp=0gcJCdoKAYcqIYzv' },
        { kind: 'spotify', url: 'https://open.spotify.com/track/1yEEKbcEngUdkzYNkDuOIz' },
        { kind: 'itunes', url: 'https://music.apple.com/us/album/no-chill-bro-feat-saran-dxriw-jonin-chun-wen/1827037364?i=1827037648' },
      ],
    },
    {
      title: 'เจ้าชู้แค่ในลุคเพลง',
      credit: 'SLOWVXNZ Feat. RachYo, DXRIW',
      cover: 'https://i.scdn.co/image/ab67616d0000b27374382184a34fe1ec4ba9a647',
      links: [
        { kind: 'youtube', url: 'https://www.youtube.com/watch?v=-DHJcDEdO9k' },
        { kind: 'spotify', url: 'https://open.spotify.com/track/5hZTXGVFH270cr3ifaSbOk' },
        { kind: 'itunes', url: 'https://music.apple.com/us/song/%E0%B9%80%E0%B8%88-%E0%B8%B2%E0%B8%8A-%E0%B9%80%E0%B9%80%E0%B8%84-%E0%B8%A5-%E0%B8%84%E0%B9%83%E0%B8%99%E0%B9%80%E0%B8%9E%E0%B8%A5%E0%B8%87-feat-dxriw-rachyo/1827037651' },
      ],
    },
    ],
    socials: [
      { kind: 'youtube', url: 'https://www.youtube.com/channel/UC_ybeav6vJ_4abWt79UbRaQ' },
      { kind: 'instagram', url: 'https://www.instagram.com/slowvxnz/' },
      { kind: 'tiktok', url: 'https://www.tiktok.com/@zlowvxnz' },
      { kind: 'facebook', url: 'https://www.facebook.com/zlowvxnz/' },
      { kind: 'spotify', url: 'https://open.spotify.com/artist/7uClfPNlDOpxugQX1zEjGg' },
      { kind: 'itunes', url: 'https://music.apple.com/th/artist/slowvxnz/1463379067' },
    ],
  },
  {
    slug: 'jeans',
    name: 'JEANS',
    followName: 'JEANS',
    image: '/img/jeans.PNG',
    bio: [
      'JEANS Dieout เป็นกลุ่มศิลปินอินดี้–ฮิปฮอปของไทยที่เกิดจากการรวมตัวของคนรุ่นใหม่ที่มีความสนใจในดนตรี และเผยแพร่ผลงานผ่านแพลตฟอร์มออนไลน์',
      'JEANS Dieout มีสไตล์ดนตรีที่ผสมผสานระหว่างฮิปฮอปและอัลเทอร์เนทีฟ โดดเด่นด้วยซาวด์ที่ดิบและเป็นเอกลักษณ์ พร้อมทั้งถ่ายทอดอารมณ์และตัวตนผ่านเนื้อเพลงอย่างตรงไปตรงมา',
      'JEANS Dieout เริ่มเป็นที่รู้จักในกลุ่มผู้ฟังเพลงใต้ดินจากผลงานที่มีความจริงใจและไม่ยึดติดกับกระแสหลัก ก่อนจะมีฐานผู้ติดตามเพิ่มขึ้นอย่างต่อเนื่องผ่าน YouTube และโซเชียลมีเดีย',
    ],
    tracks: [
    {
      title: 'WEDDING RING',
      credit: 'JEANS Feat. 2K',
      cover: '/song-img/wedding ring.PNG',
      links: [
        { kind: 'youtube', url: 'https://www.youtube.com/watch?v=ie12k_Yil_k&list=RDie12k_Yil_k&start_radio=1' },
        { kind: 'spotify', url: 'https://open.spotify.com/album/5SlJd8kLODN95v926FPvDR' },
        { kind: 'itunes', url: 'https://music.apple.com/us/album/wedding-ring-feat-2k-single/1873917038' },
      ],
    },
    {
      title: 'ยีนส์',
      credit: 'JEANS',
      cover: 'https://i.scdn.co/image/ab67616d00001e02480e77f444587a9597050ce6',
      links: [
        { kind: 'youtube', url: 'https://www.youtube.com/watch?v=3KenwTWS2b8' },
        { kind: 'spotify', url: 'https://open.spotify.com/album/7FO82PYmHu5xd7KXqQhXOI' },
        { kind: 'itunes', url: 'https://music.apple.com/us/album/%E0%B8%A2-%E0%B8%99%E0%B8%AA-single/1853277695' },
      ],
    },
    {
      title: 'HORUS',
      credit: 'JEANS Feat. 2T FLOW, 2K, 1ST',
      cover: 'https://i.ytimg.com/vi/GdnUXFnoEBw/hqdefault.jpg?sqp=-oaymwFBCNACELwBSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGGUgUChNMA8=&rs=AOn4CLD8Yl99_sFmrbe5bBBajB6ZdnlG6w',
      links: [
        { kind: 'youtube', url: 'https://www.youtube.com/watch?v=GdnUXFnoEBw' },
        { kind: 'spotify', url: 'https://open.spotify.com/album/0sBReqRU7sNe8dFqwr8DMk' },
        { kind: 'itunes', url: 'https://music.apple.com/us/album/horus-feat-2tflow-2k-1st-single/1847345257' },
      ],
    },
    ],
    socials: [
      { kind: 'youtube', url: 'https://www.youtube.com/channel/UCCpi4HAsro0NFhjH9uEvXuQ' },
      { kind: 'instagram', url: 'https://www.instagram.com/itsyourboyjeans/' },
      { kind: 'tiktok', url: 'https://www.tiktok.com/@itsyourboyjeans' },
      { kind: 'spotify', url: 'https://open.spotify.com/artist/3Hnqjx7t4LIeNCxVA5YCqM' },
      { kind: 'itunes', url: 'https://music.apple.com/us/artist/jeans/1623359478' },
    ],
  },
  {
    slug: 'simon',
    name: 'SIMON',
    followName: 'SIMON',
    image: '/img/simon.PNG',
    bio: [
      'Simon เป็นศิลปินไทยจากกลุ่ม DIEOUT ที่มีบทบาทโดดเด่นในวงการเพลงอินดี้–ฮิปฮอปรุ่นใหม่ โดยเน้นการร้องเป็นหลักด้วยเสียงที่ไพเราะ นุ่มละมุน และมีเอกลักษณ์ สามารถถ่ายทอดอารมณ์และความรู้สึกผ่านเพลงได้อย่างชัดเจน',
      'นอกจากการเป็นนักร้องแล้ว เขายังเป็น producer ที่มีส่วนร่วมในการสร้างสรรค์ผลงานดนตรีทั้งในเพลงของกลุ่ม DIEOUT และงานฟีเจอริ่งกับศิลปินอื่น ๆ ซึ่งช่วยให้ผลงานของเขามีเอกลักษณ์และมิติทางดนตรีมากยิ่งขึ้น',
      'ด้วยสไตล์การร้องที่อบอุ่นและมีเอกลักษณ์เฉพาะตัว Simon จึงกลายเป็นหนึ่งในสมาชิกที่โดดเด่นของ DIEOUT และมีฐานแฟนเพลงที่ติดตามผลงานอย่างต่อเนื่องผ่านแพลตฟอร์มออนไลน์และสื่อโซเชียลต่าง ๆ',
    ],
    tracks: [
    {
      title: 'Your Love',
      credit: 'SA!NT Feat. SIMON',
      cover: 'https://i.ytimg.com/vi/cx3_s-6m6QA/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDiaen01NrgewPKf_m50QEDJzuJ8A',
      links: [
        { kind: 'youtube', url: 'https://www.youtube.com/watch?v=cx3_s-6m6QA&list=RDcx3_s-6m6QA&start_radio=1&pp=ygUPc2ltb24geW91ciBsb3ZloAcB' },
        { kind: 'spotify', url: 'https://open.spotify.com/album/0C9YaoD5PgqqkmsKLiQfkH' },
        { kind: 'itunes', url: 'hhttps://music.apple.com/au/album/your-love-single/1856854458' },
      ],
    },
    {
      title: 'ฝากไว้ให้ Kiss [SIMON VERSION]',
      credit: 'SEXSKI Feat. MEYOU',
      cover: 'https://i.scdn.co/image/ab67616d0000b27386eb48d2f8f003aef8facb55',
      links: [
        { kind: 'youtube', url: 'https://www.youtube.com/watch?v=7k5k-duOnlE&list=RD7k5k-duOnlE&start_radio=1' },
        { kind: 'spotify', url: 'https://open.spotify.com/album/7kDo73NmivR6sqgDr9NU8I' },
        { kind: 'itunes', url: 'https://music.apple.com/au/album/%E0%B8%9D%E0%B8%B2%E0%B8%81%E0%B9%84%E0%B8%A7-%E0%B9%83%E0%B8%AB-kiss-feat-jayq-blvckheart-simon-version-single/1844297552' },
      ],
    },
    {
      title: 'TU GIRL',
      credit: 'SIMON Feat. 2Ectasy',
      cover: 'https://i.scdn.co/image/ab67616d00001e0220102aae35eaefc92aa24415',
      links: [
        { kind: 'youtube', url: 'https://www.youtube.com/watch?v=7I8bU70-XdY&list=RD7I8bU70-XdY&start_radio=1&pp=ygUHdHUgZ2lybKAHAQ%3D%3D' },
        { kind: 'spotify', url: 'https://open.spotify.com/album/3Kp8RGECCJ4G14wnYIDTnP' },
        { kind: 'itunes', url: 'https://music.apple.com/au/album/tu-girl-feat-2ectasy-single/1831715816' },
      ],
    },
    ],
    socials: [
      { kind: 'youtube', url: 'https://www.youtube.com/@simonnist/featured' },
      { kind: 'instagram', url: 'https://www.instagram.com/s.simonnist/' },
      { kind: 'tiktok', url: 'https://www.tiktok.com/@simonnist' },
      { kind: 'spotify', url: 'https://open.spotify.com/artist/4Dz036NLSs8GPIFaCPJWGU' },
      { kind: 'itunes', url: 'https://music.apple.com/au/artist/simon/1637401480' },
    ],
  },
  {
    slug: 'dxriw',
    name: 'DXRIW',
    followName: 'DXRIW',
    image: '/img/dxriw.PNG',
    bio: [
      'DXRIW เป็นศิลปินไทยจากกลุ่ม DIEOUT ที่มีบทบาทโดดเด่นในวงการเพลงอินดี้–ฮิปฮอปรุ่นใหม่ของไทย เขาเป็นสายร้องเป็นหลักด้วยเสียงที่มีเสน่ห์และโดดเด่น สามารถถ่ายทอดอารมณ์และความรู้สึกผ่านเพลงได้อย่างชัดเจน',
      'DXRIW มีส่วนร่วมทั้งในเพลงของกลุ่ม DIEOUT และงานฟีเจอริ่งกับเพื่อนศิลปิน ซึ่งช่วยทำให้ชื่อของเขาเริ่มเป็นที่รู้จักในวงการเพลงใต้ดินและกลุ่มผู้ฟังที่ชื่นชอบเสียงร้องที่มีเอกลักษณ์',
      'ด้วยสไตล์เสียงที่อบอุ่นและมีเสน่ห์เฉพาะตัว DXRIW จึงกลายเป็นหนึ่งในสมาชิกที่โดดเด่นของ DIEOUT และมีฐานแฟนเพลงที่ติดตามผลงานเขาผ่านแพลตฟอร์มออนไลน์และโซเชียลมีเดียอย่างต่อเนื่อง',
    ],
    tracks: [
    {
      title: 'ไม่ต้องการ',
      credit: 'DXRIW feat. 2K, SURE',
      cover: 'https://i.scdn.co/image/ab67616d00001e021341c7bb42229ac493b970f3',
      links: [
        { kind: 'youtube', url: 'https://www.youtube.com/watch?v=8MsRJh0xUzk&list=RD8MsRJh0xUzk&start_radio=1' },
        { kind: 'spotify', url: 'https://open.spotify.com/album/5gCw6LLxtedAsgHw0co4oH' },
        { kind: 'itunes', url: 'https://music.apple.com/us/album/%E0%B9%84%E0%B8%A1-%E0%B8%95-%E0%B8%AD%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B8%A3-feat-2k-sure-single/1883607981' },
      ],
    },
    {
      title: 'ได้โปรดอย่าจากไปไหน',
      credit: 'K6Y Feat. SURE, DXRIW, 2K',
      cover: 'https://i.scdn.co/image/ab67616d00001e0260369b0b4d176ab50f57401a',
      links: [
        { kind: 'youtube', url: 'https://www.youtube.com/watch?v=773TPAysXAg&list=RD773TPAysXAg&start_radio=1' },
        { kind: 'spotify', url: 'https://open.spotify.com/album/1od84vEfszd1xpZi3tPU00' },
      ],
    },
    {
      title: 'เส้นขอบฟ้า (skyline)',
      credit: 'DXRIW Feat. ARTIST, Z9',
      cover: 'https://i.scdn.co/image/ab67616d0000b273d65de9bd2b33e0545dcd1128',
      links: [
        { kind: 'youtube', url: 'https://www.youtube.com/watch?v=hDJ-4NAYr9s&list=RDhDJ-4NAYr9s&start_radio=1' },
        { kind: 'spotify', url: 'https://open.spotify.com/album/0EJXtbwwRtT6I1yPdQScpB' },
        { kind: 'itunes', url: 'https://music.apple.com/us/album/%E0%B9%80%E0%B8%AA-%E0%B8%99%E0%B8%82%E0%B8%AD%E0%B8%9A%E0%B8%9F-%E0%B8%B2-skyline-feat-artist-z9-single/1848795255' },
      ],
    },
    ],
    socials: [
      { kind: 'youtube', url: 'https://www.youtube.com/channel/UCenxDo4Oa_52NUVVuVTTmuA' },
      { kind: 'instagram', url: 'https://www.instagram.com/dxriw/' },
      { kind: 'tiktok', url: 'https://www.tiktok.com/@dxriwdeww' },
      { kind: 'facebook', url: 'https://www.facebook.com/DXRIWPakawat/' },
      { kind: 'spotify', url: 'https://open.spotify.com/artist/3is2GkO7DUxJ4A1xeBdPGT' },
      { kind: 'itunes', url: 'https://music.apple.com/th/artist/dxriw/1655886007' },
    ],
  },
  {
    slug: 'bax',
    name: 'AYYOBAX! / BAX',
    followName: 'AYYOBAX!',
    image: '/img/bax.PNG',
    bio: [
      'เกิดและเติบโตในเกาะภูเก็ต AYYOBAX เริ่มสร้างเสียงดนตรีในห้องอัดกลางบ้านที่มีทั้งพ่อและแม่อยู่ตั้งแต่อายุ 15 — แค่แล็ปท็อป ไมค์ และบางสิ่งที่ต้องการจะพูด',
      'ดนตรีของเขาผสมผสานความดิบของ Hip-Hop ยุคเก่ากับอารมณ์ของ R&B ร่วมสมัย ส่งผ่านเสียงที่รู้สึกเหมือนคำสารภาพยามเที่ยงคืน ทุกเพลงคือบทหนึ่ง ทุกอัลบั้มคือนิยาย',
      'ด้วย 32 ผลงานและกว่า 300 ล้านสตรีมทั่วทุกแพลตฟอร์ม เขาสร้างฐานแฟนคลับที่ภักดีที่สุดแห่งหนึ่งในวงการฮิปฮอปเอเชียตะวันออกเฉียงใต้ — ด้วยตัวเองทั้งหมด',
    ],
    tracks: [
    {
      title: 'รู้ดี (Know It Well)',
      credit: 'AYYOBAX!',
      cover: 'https://ayyobax.com/uploads/1772559887978-lat40lfhej.png',
      links: [
        { kind: 'youtube', url: 'https://www.youtube.com/watch?v=DCAYfrMMb8w' },
      ],
    },
    {
      title: 'Ride With Me',
      credit: 'AYYOBAX! Feat. JEANS',
      cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg1eCai7k-_QoBiN3D-LonZFsdrYugsCdxNA&s',
      links: [
        { kind: 'youtube', url: 'https://www.youtube.com/watch?v=P0qtiRI_-tk' },
      ],
    },
    {
      title: 'Number 1',
      credit: 'JAOKHUN Prod by BAX',
      cover: 'https://i.scdn.co/image/ab67616d0000b2730a21a0ec631ba85acbfd5533',
      links: [
        { kind: 'youtube', url: 'https://www.youtube.com/watch?v=Ad9zldK8ocI' },
        { kind: 'spotify', url: 'https://open.spotify.com/track/4lTXUyi9nNClTAMziDRIgF' },
        { kind: 'itunes', url: 'https://music.apple.com/us/music-video/number-1/1883677648' },
      ],
    },
    ],
    socials: [
      { kind: 'youtube', url: 'https://www.youtube.com/@ayyobax' },
      { kind: 'instagram', url: 'https://www.instagram.com/ayyobax' },
      { kind: 'tiktok', url: 'https://www.tiktok.com/@dieoutfortiktok' },
      { kind: 'facebook', url: 'https://www.facebook.com/torraninz/' },
    ],
  },
  {
    slug: 'babybigbeng',
    name: 'BABYBIGBENG',
    followName: 'BABYBIGBENG',
    image: 'https://i.scdn.co/image/ab67616d00001e0290afd03f65890ea1d773b366',
    bio: [
      'BABYBIGBENG เป็นศิลปินแร็ปเปอร์ชาวไทย และเป็นหนึ่งในสมาชิกของกลุ่มฮิปฮอป DIEOUT เขาเริ่มเป็นที่รู้จักจากการทำเพลงร่วมกับศิลปินในกลุ่ม และมีผลงานออกมาอย่างต่อเนื่อง',
      'BABYBIGBENG เริ่มปล่อยผลงานเพลงผ่านแพลตฟอร์มออนไลน์ และได้ร่วมงานกับ SARAN รวมถึงศิลปินอื่น ๆ ในกลุ่ม DIEOUT จนทำให้ชื่อของเขาเริ่มเป็นที่รู้จักในกลุ่มผู้ฟังฮิปฮอปไทย ด้วยสไตล์การแร็ปที่มีเอกลักษณ์และเมโลดี้ที่โดดเด่น',
    ],
    tracks: [
    {
      title: 'ไม่เป็นไร (NEVER MIND)',
      credit: 'BABYBIGBENG Feat. SARAN, SURE',
      cover: 'https://i.scdn.co/image/ab67616d0000b2735d6f0c08cd97924dcf96fbd4',
      links: [
        { kind: 'youtube', url: 'https://www.youtube.com/watch?v=mhmhoW1vnlE' },
        { kind: 'spotify', url: 'https://open.spotify.com/album/2wht6csVEUuPIVGgbswMYI' },
        { kind: 'itunes', url: 'https://music.apple.com/th/album/never-mind-feat-saran-sure-single/1806045210' },
      ],
    },
    {
      title: 'ของแท้',
      credit: 'BABYBIGBENG Feat. 1ST, 2K, DXRIW',
      cover: 'https://i.scdn.co/image/ab67616d00001e02be4c27b595f8875d73265269',
      links: [
        // ลิงก์นี้ใน babybigbeng.html เดิมเขียนเป็น <a href="..."></i></a> ไม่มี <i> เปิด
        // ไอคอน YouTube เลยไม่ขึ้นบนเว็บเดิม กลายเป็นลิงก์เปล่าที่มองไม่เห็น
        { kind: 'youtube', url: 'https://www.youtube.com/watch?v=DBOb9TxDdkc' },
        { kind: 'spotify', url: 'https://open.spotify.com/track/7wKFNP6HRmq1DzCBuYg3OP' },
        { kind: 'itunes', url: 'https://music.apple.com/th/song/%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B9%81%E0%B8%97-feat-1st-2k-dxriw/1787179405' },
      ],
    },
    {
      title: 'HELP',
      credit: 'BABYBIGBENG Feat. 2K, SEXSKI',
      cover: 'https://i.scdn.co/image/ab67616d00001e02db4f476abef177b8dba5c302',
      links: [
        // เหมือนเพลง "ของแท้" — <i> เปิดหายไปในไฟล์เดิม ไอคอนเลยไม่ขึ้น
        { kind: 'youtube', url: 'https://www.youtube.com/watch?v=wDJ97nnostA' },
        { kind: 'spotify', url: 'https://open.spotify.com/album/3qE3aPrtjWbrmBRuGUa0ks' },
        { kind: 'itunes', url: 'https://music.apple.com/th/artist/babybigbeng/1603224428' },
      ],
    },
    ],
    socials: [
      { kind: 'youtube', url: 'https://www.youtube.com/@BABYBIGBENG/videos' },
      { kind: 'instagram', url: 'https://www.instagram.com/babybigbeng_?igsh=MXBqOTF0MXd4MzVtZQ%3D%3D' },
      { kind: 'tiktok', url: 'https://www.tiktok.com/@babybigbeng' },
      { kind: 'facebook', url: 'https://www.facebook.com/babybigbeng/' },
      { kind: 'spotify', url: 'https://open.spotify.com/artist/22IixLM0cRjLFGMJT6Zdxi?si=KpfA8m4FRh2yMKOQzMqoqA&nd=1&dlsi=6cd3280b38774257' },
      { kind: 'itunes', url: 'https://music.apple.com/th/artist/babybigbeng/1603224428' },
    ],
  },
];

export const artistBySlug = new Map(artists.map((a) => [a.slug, a]));

export function getArtist(slug: string): Artist | undefined {
  return artistBySlug.get(slug);
}
