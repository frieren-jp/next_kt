import type { ReactNode } from 'react';
import Link from 'next/link';
import StateCounter from '../components/StateCounter';

interface BlogLayoutProps { children: ReactNode }

export default function BlogLayout({ children }: BlogLayoutProps) {
  return <section><div className="section-head"><div><p className="eyebrow">ЗАМЕТКИ О РАЗРАБОТКЕ</p><h2>Раздел «Блог»</h2></div><Link href="/blog">Все статьи ↗</Link></div>
    <aside className="experiment"><p>Увеличьте оба счётчика и перейдите между списком и статьёй. Этот общий layout сохраняется внутри блога.</p><StateCounter kind="Layout" /></aside>
    {children}
  </section>;
}
