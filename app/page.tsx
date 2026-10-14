import Link from 'next/link';

export default function HomePage() {
  return <>
    <p className="eyebrow">КОНТРОЛЬНАЯ ТОЧКА №1 / NEXT.JS</p>
    <h1>У каждой идеи<br /><span>есть свой маршрут.</span></h1>
    <p className="lead">Небольшой учебный сайт о том, как страницы связаны между собой. Исследуйте блог, откройте курсы и проверьте, что сохраняется при переходах.</p>
    <Link className="button" href="/blog">Исследовать блог ↗</Link>
    <div className="grid home-grid">
      <Link className="card" href="/about"><span className="tag">01 / СТАТИЧЕСКИЙ МАРШРУТ</span><h2>О проекте</h2><p>Страница, общая навигация и программный переход.</p><span>Открыть /about →</span></Link>
      <Link className="card" href="/blog"><span className="tag">02 / ДИНАМИЧЕСКИЕ СЕГМЕНТЫ</span><h2>Блог</h2><p>Статьи, вложенные комментарии и эксперимент с состоянием.</p><span>Открыть /blog →</span></Link>
      <Link className="card" href="/courses"><span className="tag">03 / ВЛОЖЕННЫЙ LAYOUT</span><h2>Курсы</h2><p>Каталог учебных программ с отдельными страницами.</p><span>Открыть /courses →</span></Link>
    </div>
  </>;
}
