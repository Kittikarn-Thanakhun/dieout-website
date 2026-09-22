import Link from 'next/link';
import Nav from '@/components/Nav';

export default function NotFound() {
  return (
    <>
      <Nav variant="artist" />
      <section
        style={{
          minHeight: 'calc(75vh - var(--nav-h))',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.2rem',
          padding: '4rem 1rem',
          textAlign: 'center',
        }}
      >
        <h1 style={{ fontSize: '4rem', letterSpacing: '2px' }}>404</h1>
        <p
          style={{
            fontFamily: 'var(--font-mitr), sans-serif',
            fontSize: '1.2rem',
            color: '#333',
          }}
        >
          ไม่พบหน้าที่คุณกำลังหา
        </p>
        <Link
          href="/"
          style={{
            fontFamily: 'var(--font-mitr), sans-serif',
            fontSize: '1rem',
            padding: '0.8rem 1.8rem',
            background: '#222',
            color: '#eee',
            borderRadius: '8px',
            border: '2px solid #555',
            textDecoration: 'none',
            display: 'inline-block',
            marginTop: '0.5rem',
            transition: 'all 0.3s ease',
          }}
        >
          กลับหน้าแรก
        </Link>
      </section>
    </>
  );
}
