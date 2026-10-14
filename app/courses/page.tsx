import Link from 'next/link';
import { courses } from '../lib/data';

export default function CoursesPage() {
  return <><h1>Курсы</h1><p className="lead">Выберите направление и посмотрите программу.</p><div className="grid">{courses.map(course =>
    <Link className="card" key={course.id} href={`/courses/${course.id}`}><span className="tag">{course.duration}</span><h2>{course.title}</h2><p>{course.description}</p><span>Программа курса →</span></Link>
  )}</div></>;
}
