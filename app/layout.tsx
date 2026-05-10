import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'TupsArt – студия полиграфии и дизайна',
  description: 'Одностраничный сайт и форма заказа',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const year = new Date().getFullYear();
  return (
    <html lang="ru" className="dark">
      <body className="min-h-screen bg-gray-950 text-white antialiased">
        <header className="bg-gray-900 border-b border-gray-800">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-primary">TupsArt</Link>
            <nav className="space-x-4">
              <Link href="/#services" className="hover:text-primary">Услуги</Link>
              <Link href="/#process" className="hover:text-primary">Как заказать</Link>
              <Link href="/#contacts" className="hover:text-primary">Контакты</Link>
              <Link href="/order" className="bg-primary text-black px-3 py-1 rounded hover:bg-orange-500">Заказать</Link>
            </nav>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">{children}</main>
        <footer className="bg-gray-900 border-t border-gray-800 py-4 text-center">
          © {year} TupsArt. Все права защищены.
        </footer>
      </body>
    </html>
  );
}
