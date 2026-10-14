import Link from 'next/link';

export default function AboutPage() {
  return <article className="prose"><p className="eyebrow">О ПРОЕКТЕ</p><h1>О нас</h1>
    <p className="lead">Мы изучаем маршрутизацию в Next.js и превращаем структуру папок в удобный многостраничный сайт.</p>
    <h2>Что можно попробовать</h2><p>В блоге каждая статья получает собственный адрес. Вложенные комментарии используют сразу два параметра URL. В разделе курсов работает отдельный общий layout.</p>
    <h2>Маленький эксперимент</h2><p>Измените два счётчика в блоге, затем перейдите к статье. Счётчик layout сохранится, а счётчик template начнёт с нуля.</p>
    <Link className="button" href="/blog">Начать эксперимент →</Link>
  </article>;
}
