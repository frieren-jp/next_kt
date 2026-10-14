import Link from 'next/link';
import { notFound } from 'next/navigation';
import { posts } from '../../lib/data';

interface PostPageProps { params: Promise<{ id: string }> }

export default async function PostPage({ params }: PostPageProps) {
  const { id } = await params;
  const post = posts.find(item => item.id === id);
  if (!post) notFound();
  return <article className="prose"><p className="eyebrow">Пост №{id}</p><h1>{post.title}</h1><p className="lead">{post.description}</p><p>{post.body}</p>
    <h2>Комментарии</h2><p>Вложенный адрес содержит идентификатор поста и номер комментария.</p><Link href={`/blog/${id}/comments/5`}>Открыть комментарий 5 →</Link>
    <div className="actions"><Link href="/blog">← Все статьи</Link>{posts.filter(item => item.id !== id).map(item => <Link href={`/blog/${item.id}`} key={item.id}>Пост №{item.id} →</Link>)}</div>
  </article>;
}
