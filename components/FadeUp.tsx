'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

type Props = {
  as?: 'div' | 'section';
  id?: string;
  className?: string;
  children: ReactNode;
};

export default function FadeUp({ as: Tag = 'div', id, className, children }: Props) {
  const ref = useRef<HTMLDivElement & HTMLElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (
      !el ||
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          setShown(entry.isIntersecting);
        }
      },
      { rootMargin: '-8% 0px -8% 0px', threshold: 0 }
    );

    const bounds = el.getBoundingClientRect();
    setShown(bounds.bottom > window.innerHeight * 0.08 && bounds.top < window.innerHeight * 0.92);
    setEnabled(true);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const classes = [enabled ? 'fade-up' : '', shown ? 'show' : '', className ?? '']
    .filter(Boolean)
    .join(' ');

  return (
    <Tag ref={ref} id={id} className={classes}>
      {children}
    </Tag>
  );
}
