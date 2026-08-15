import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // สร้างเป็นไฟล์ static ล้วนในโฟลเดอร์ out/ เอาไปวางบน host ไหนก็ได้เหมือนเว็บเดิม
  output: 'export',
  // static export ไม่มี server มาย่อรูปให้ ต้องปิด optimization
  images: { unoptimized: true },
  // ให้ทุก route ออกมาเป็น out/artist/saran/index.html แทน out/artist/saran.html
  trailingSlash: true,
};

export default nextConfig;
