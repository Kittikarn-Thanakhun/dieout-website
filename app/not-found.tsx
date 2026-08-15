import Link from 'next/link';
import Nav from '@/components/Nav';

export default function NotFound() {
  return (
    <>
      <Nav variant="artist" />
      <section
        style={{
          minHeight: '50vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          padding: '4rem 1rem',
          textAlign: 'center',
        }}
      >
        <h1 style={{ fontSize: '3rem' }}>404</h1>
        <p>ไม่พบหน้าที่คุณกำลังหา</p>
        <Link href="/">กลับหน้าแรก</Link>
      </section>
    </>
  );
}
