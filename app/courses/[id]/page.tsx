import Link from 'next/link';
import { notFound } from 'next/navigation';
import { courses } from '../../lib/data';

interface CoursePageProps { params: Promise<{ id: string }> }

export default async function CoursePage({ params }: CoursePageProps) {
  const { id } = await params;
  const course = courses.find(item => item.id === id);
  if (!course) notFound();
  return <article className="prose"><p className="eyebrow">{course.duration} / {id}</p><h1>{course.title}</h1><p className="lead">{course.description}</p><h2>Программа</h2><ol className="lessons">{course.lessons.map(lesson => <li key={lesson}>{lesson}</li>)}</ol><Link href="/courses">← Все курсы</Link></article>;
}
