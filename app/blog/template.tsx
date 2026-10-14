import type { ReactNode } from 'react';
import StateCounter from '../components/StateCounter';

interface BlogTemplateProps { children: ReactNode }

// Next.js меняет ключ template при смене дочернего сегмента.
// Вложенный клиентский компонент позволяет наблюдать сброс состояния и useEffect.
export default function BlogTemplate({ children }: BlogTemplateProps) {
  return <div><StateCounter kind="Template" /><div className="page-content">{children}</div></div>;
}
