export interface Post { id: string; title: string; description: string; body: string }
export const posts: Post[] = [
  { id: '1', title: 'Как папки становятся страницами', description: 'Знакомимся с файловой маршрутизацией.', body: 'В App Router папки задают сегменты URL, а файл page.tsx делает маршрут публичным. Например, app/about/page.tsx отвечает за адрес /about. Общие элементы страницы удобно размещать в layout.tsx.' },
  { id: '2', title: 'Один шаблон — много адресов', description: 'Разбираемся с динамическими параметрами.', body: 'Папка [id] описывает динамический сегмент. Одна страница обрабатывает разные идентификаторы. В современных версиях Next.js params — Promise: серверный компонент сначала ожидает его через await, а затем использует id.' },
  { id: '3', title: 'Что помнит layout', description: 'Состояние, переходы и повторное монтирование.', body: 'Общий layout сохраняется при переходах между дочерними маршрутами. Template создаёт новый экземпляр при смене соответствующего сегмента: локальное состояние сбрасывается, а эффекты запускаются снова. Это полезно для форм и анимаций появления.' },
];

export interface Course { id: string; title: string; duration: string; description: string; lessons: string[] }
export const courses: Course[] = [
  { id: 'nextjs', title: 'Основы Next.js', duration: '4 занятия', description: 'От первой страницы до вложенных маршрутов.', lessons: ['Структура App Router', 'Link и навигация', 'Динамические сегменты', 'Layouts и Templates'] },
  { id: 'typescript', title: 'TypeScript в React', duration: '3 занятия', description: 'Понятные типы для компонентов и данных.', lessons: ['Типы и интерфейсы', 'Типизация props и children', 'Асинхронные параметры'] },
  { id: 'react', title: 'Состояние в React', duration: '3 занятия', description: 'Интерактивные компоненты и их жизненный цикл.', lessons: ['useState', 'Обработчики событий', 'useEffect и монтирование'] },
];
