'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const links = [['/', 'Главная'], ['/about', 'О нас'], ['/blog', 'Блог'], ['/courses', 'Курсы']];

export default function NavBar() {
  const pathname = usePathname();
  const router = useRouter();
  return <header><Link className="brand" href="/">↗ Маршрут</Link>
    <nav aria-label="Основная навигация">{links.map(([href, label]) => {
      const active = pathname === href || (href !== '/' && pathname.startsWith(href + '/'));
      return <Link key={href} href={href} className={active ? 'active' : ''} aria-current={active ? 'page' : undefined}>{label}</Link>;
    })}</nav>
    <button className="secondary" onClick={() => router.push('/about')}>Перейти к «О нас» ↗</button>
  </header>;
}
