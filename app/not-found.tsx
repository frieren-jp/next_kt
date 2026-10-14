import Link from 'next/link';

export default function NotFound() {
  return <><p className="eyebrow">404 / МАРШРУТ НЕ НАЙДЕН</p><h1>Здесь пока пусто.</h1><p className="lead">Такой страницы, статьи или курса нет в учебном проекте.</p><Link className="button" href="/">На главную →</Link></>;
}
