import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <section className="bg-gradient-to-r from-orange-600 to-orange-500 text-black py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">TupsArt - студия полиграфии и дизайна</h1>
          <p className="mb-8 text-lg">Мы воплощаем креатив в реальные проекты: печать, дизайн, реставрация.</p>
          <Link href="/order" className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800">
            Сделать заказ
          </Link>
        </div>
      </section>

      <section id="services" className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Наши услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-900 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Полиграфия</h3>
              <p>Печать форматов 10×15, А4, А3, ламинация, копирование.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Работа с фото</h3>
              <p>Профессиональная реставрация и ретушь старых снимков.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Дизайн</h3>
              <p>Разработка уникальных логотипов и создание современных сайтов.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Сувениры/ Документы</h3>
              <p>Изготовление грамот, сертификатов и печатной продукции.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Как заказать</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-primary text-4xl font-bold mb-2">1</div>
              <p>Напишите нам в мессенджер.</p>
            </div>
            <div>
              <div className="text-primary text-4xl font-bold mb-2">2</div>
              <p>Пришлите файлы или техническое задание.</p>
            </div>
            <div>
              <div className="text-primary text-4xl font-bold mb-2">3</div>
              <p>Заберите готовый заказ удобным способом.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Контакты</h2>
          <p className="mb-4">Телефон: <a href="tel:+79148233021" className="text-primary">8 (914) 823-30-21</a>, <a href="tel:+79247649992" className="text-primary">8 (924) 764-99-92</a></p>
          <p className="mb-4">Почта: <a href="mailto:nikolaevmichil651@gmail.com" className="text-primary">nikolaevmichil651@gmail.com</a>, <a href="mailto:proksargy@mail.ru" className="text-primary">proksargy@mail.ru</a></p>
          <div className="space-x-4">
            <a href="https://wa.me/79148233021" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">В WhatsApp</a>
            <a href="https://t.me/+79247649992" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">В Telegram</a>
          </div>
        </div>
      </section>
    </div>
  );
}
