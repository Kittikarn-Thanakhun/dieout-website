'use client';

import { useState } from 'react';
import { navLinks } from '@/data/site';

/**
 * แทนที่ js/ham-menu.js เดิม
 * พฤติกรรมเหมือนเดิมทุกอย่าง: กดปุ่ม = สลับเปิด/ปิด, กดลิงก์ใดก็ได้ = ปิดเมนู
 */
export default function HomeMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="menu">
      <button
        type="button"
        className={`navbar-toggle${open ? ' active' : ''}`}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? 'ปิดเมนู' : 'เปิดเมนู'}
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>

      <ul className={`menu-ul${open ? ' active' : ''}`}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          </li>
        ))}
        <li className="nav-new">
          <a href="#news" onClick={() => setOpen(false)}>
            NEW
          </a>
        </li>
      </ul>
    </div>
  );
}
