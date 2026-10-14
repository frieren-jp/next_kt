import Link from 'next/link';
import { notFound } from 'next/navigation';
import { posts } from '../../../../lib/data';

interface CommentPageProps { params: Promise<{ id: string; commentId: string }> }

export default async function CommentPage({ params }: CommentPageProps) {
  const { id, commentId } = await params;
  if (!posts.some(post => post.id === id) || !/^\d+$/.test(commentId)) notFound();
  return <article className="prose"><p className="eyebrow">ВЛОЖЕННЫЙ ДИНАМИЧЕСКИЙ МАРШРУТ</p><h1>Комментарий {commentId}</h1><p className="lead">К посту №{id}</p>
    <p>Это демонстрационная страница комментария. Оба значения взяты из адреса: <code>/blog/{id}/comments/{commentId}</code>.</p>
    <Link href={`/blog/${id}`}>← Вернуться к посту №{id}</Link>
  </article>;
}
