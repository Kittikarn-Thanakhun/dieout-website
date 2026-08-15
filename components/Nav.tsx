import Link from 'next/link';
import HomeMenu from './HomeMenu';

type Props = {
  /** 'home' = เมนูเต็ม + hamburger, 'artist' = ปุ่ม BACK อย่างเดียว */
  variant?: 'home' | 'artist';
};

export default function Nav({ variant = 'home' }: Props) {
  const isHome = variant === 'home';

  return (
    <nav>
      <div className="nav-con">
        <div className="nav-left">
          {isHome ? (
            <a href="#home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/dieout.png" className="dieout-img" alt="DIEOUT" />
            </a>
          ) : (
            <Link href="/">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/dieout.png" className="dieout-img" alt="DIEOUT" />
            </Link>
          )}
        </div>

        {isHome ? (
          <HomeMenu />
        ) : (
          <div className="nav-right">
            <Link href="/">BACK</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
