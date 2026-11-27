import type { Metadata } from 'next';
import { Archivo_Black, Mitr } from 'next/font/google';
import Footer from '@/components/Footer';
import './globals.css';

/* เดิมโหลดผ่าน <link> ของ Google Fonts ตอนนี้ให้ next/font self-host ให้
   Roboto Slab กับ Kanit ที่ของเดิมโหลดไว้ไม่เคยถูกใช้ใน CSS เลย เลยตัดออก */
const archivo = Archivo_Black({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-archivo',
  display: 'swap',
});

const mitr = Mitr({
  weight: ['400'],
  subsets: ['latin', 'thai'],
  variable: '--font-mitr',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'DIEOUT',
  description:
    'DIEOUT — กลุ่มฮิปฮอปไทยที่ก่อตั้งโดย SARAN ผู้ชนะ The Rapper 2020 CIVIL WAR',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="th"
      className={`${archivo.variable} ${mitr.variable}`}
      data-scroll-behavior="smooth"
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
          integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>
        {/* Developed by SEASLATT */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
