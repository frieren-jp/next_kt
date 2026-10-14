import type { ReactNode } from 'react';
import Link from 'next/link';

interface CoursesLayoutProps { children: ReactNode }

export default function CoursesLayout({ children }: CoursesLayoutProps) {
  return <section><div className="section-head"><div><p className="eyebrow">УЧИТЬСЯ ШАГ ЗА ШАГОМ</p><h2>Раздел «Курсы»</h2></div><Link href="/courses">Каталог курсов ↗</Link></div>
    <aside className="notice">Общий layout курсов: эта панель остаётся на странице каталога и на странице каждого курса.</aside>
    <div className="page-content">{children}</div>
  </section>;
}
