import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import NavBar from './components/NavBar';
import './globals.css';

export const metadata: Metadata = {
  title: 'Маршрут — практика Next.js',
  description: 'Контрольная точка №1: маршрутизация, layouts и templates.',
};

interface RootLayoutProps { children: ReactNode }

export default function RootLayout({ children }: RootLayoutProps) {
  return <html lang="ru"><body>
    <a className="skip" href="#content">К содержимому</a>
    <NavBar />
    <main id="content">{children}</main>
    <footer><span>Маршрут / учебный проект</span><span>Next.js · TypeScript · App Router</span></footer>
  </body></html>;
}
