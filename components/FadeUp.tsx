'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

type Props = {
  as?: 'div' | 'section';
  id?: string;
  className?: string;
  /** แทน class delay-1/2/3 ที่ HTML เดิมใส่ไว้แต่ CSS ไม่เคยนิยาม */
  delay?: 1 | 2 | 3;
  children: ReactNode;
};

/**
 * แทนที่ js/loading.js เดิม
 *
 * ของเดิมใช้ threshold 0.2 (ต้องเห็น element 20% ถึงจะ fade เข้า) ซึ่งพังกับ
 * section ที่สูงกว่าจอมาก ๆ เพราะอาจไม่มีวันเห็นถึง 20% -> เนื้อหาค้าง opacity 0 ตลอด
 * เลยเปลี่ยนมาใช้ rootMargin แทน: ติดทันทีที่ขอบบนของ element เลย 85% ของความสูงจอ
 * ได้จังหวะใกล้เคียงของเดิมแต่ไม่มีทางค้าง
 */
export default function FadeUp({ as: Tag = 'div', id, className, delay, children }: Props) {
  const ref = useRef<HTMLDivElement & HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          setShown(true);
          obs.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -15% 0px', threshold: 0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const classes = ['fade-up', shown ? 'show' : '', delay ? `delay-${delay}` : '', className ?? '']
    .filter(Boolean)
    .join(' ');

  return (
    <Tag ref={ref} id={id} className={classes}>
      {children}
    </Tag>
  );
}
