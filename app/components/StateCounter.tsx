'use client';

import { useEffect, useState } from 'react';

interface StateCounterProps { kind: 'Layout' | 'Template' }

export default function StateCounter({ kind }: StateCounterProps) {
  const [count, setCount] = useState(0);
  useEffect(() => { console.log(`Blog${kind} смонтирован${kind === 'Template' ? ' заново' : ''}`); }, [kind]);
  return <div className="counter"><div><strong>{kind}</strong><p>{kind === 'Layout' ? 'Сохраняется внутри раздела' : 'Сбрасывается при смене страницы'}</p></div>
    <button aria-label={`Увеличить ${kind}`} onClick={() => setCount(value => value + 1)}>{kind}: {count} <span aria-hidden="true">+</span></button>
  </div>;
}
