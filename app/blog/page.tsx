import Link from 'next/link';
import { posts } from '../lib/data';

export default function BlogPage() {
  return <><h1>Блог</h1><p className="lead">Три короткие заметки о страницах, адресах и состоянии.</p><div className="grid">{posts.map(post =>
    <Link className="card" key={post.id} href={`/blog/${post.id}`}><span className="tag">СТАТЬЯ / 0{post.id}</span><h2>{post.title}</h2><p>{post.description}</p><span>Читать статью →</span></Link>
  )}</div></>;
}
