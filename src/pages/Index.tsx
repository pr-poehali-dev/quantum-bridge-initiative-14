import { Leaf, Droplets, Sun, Sprout, Plus, Minus, Mail, ExternalLink } from "lucide-react"

import Icon from "@/components/ui/icon"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface FAQ {
  question: string
  answer: string
}

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs: FAQ[] = [
    {
      question: "Как часто нужно поливать домашние растения?",
      answer:
        "Всё зависит от вида растения. Суккуленты и кактусы достаточно поливать раз в 2–3 недели, тропические растения — 1–2 раза в неделю. Главное правило: проверяйте почву пальцем — если верхний слой (2–3 см) сухой, пора поливать. Лучше недолить, чем перелить.",
    },
    {
      question: "Какие растения подходят для тёмных комнат?",
      answer:
        "Отлично переносят тень: замиокулькас, сансевиерия (тёщин язык), потос, спатифиллум и диффенбахия. Они не требуют прямого солнечного света и прекрасно растут при обычном комнатном освещении.",
    },
    {
      question: "Почему желтеют листья у растений?",
      answer:
        "Самые частые причины: избыточный полив (корни гниют), недостаток света, нехватка питательных веществ или сухой воздух. Для начала проверьте почву на переувлажнение. Если корни здоровы — попробуйте подкормку и переставьте растение ближе к окну.",
    },
    {
      question: "Нужно ли удобрять домашние растения зимой?",
      answer:
        "Зимой большинство растений переходят в период покоя — рост замедляется, и подкормки нужно сократить или полностью прекратить. Возобновляйте удобрение с марта-апреля, когда день становится длиннее и растения начинают активно расти.",
    },
  ]

  const videos = [
    {
      id: "DxJLBKxkuds",
      title: "Уход за фикусом",
      description: "Советы по поливу, освещению и пересадке",
    },
    {
      id: "EWNYvFG44EU",
      title: "Топ растений для дома",
      description: "Самые неприхотливые комнатные растения для начинающих",
    },
  ]

  const usefulLinks = [
    {
      title: "Энциклопедия растений",
      url: "https://www.plantopedia.ru",
      description: "База знаний о 5000+ видах комнатных растений",
    },
    {
      title: "Сообщество цветоводов",
      url: "https://flowerhobby.ru",
      description: "Форум и советы от опытных любителей растений",
    },
    {
      title: "Интернет-магазин растений",
      url: "https://greensad.ua",
      description: "Купить редкие и популярные комнатные растения",
    },
    {
      title: "Приложение для ухода",
      url: "https://planta.app",
      description: "Умный помощник для полива и ухода за растениями",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0B1A0F] text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=1920&q=80)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-[#0B1A0F]/95" />
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between p-6">
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Leaf className="w-5 h-5 text-green-400" />
            <span className="font-medium">Mamedova</span>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {[
              { label: "Растения", href: "#plants" },
              { label: "Видео", href: "#videos" },
              { label: "Советы", href: "#tips" },
              { label: "Вопросы", href: "#faq" },
              { label: "Ссылки", href: "#links" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Button className="bg-green-500 text-white hover:bg-green-400 rounded-full px-6">
              Начать
            </Button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 text-center">
          <div className="mb-6 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <span className="text-sm font-medium text-green-300">Мир домашних растений</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-6 text-balance">
            Живая красота у вас дома.
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mb-12 leading-relaxed text-pretty">
            Откройте мир комнатных растений — от неприхотливых суккулентов до экзотических тропических видов. Советы по уходу, видеоуроки и всё для вашего зелёного уголка.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a href="#plants">
              <Button size="lg" className="bg-green-500 text-white hover:bg-green-400 rounded-full px-8 py-4 text-lg">
                Смотреть растения
              </Button>
            </a>
            <a href="#videos">
              <Button
                size="lg"
                variant="outline"
                className="bg-black/40 ring-1 ring-white/20 backdrop-blur border-0 text-white hover:bg-black/50 rounded-full px-8 py-4 text-lg"
              >
                Видеоуроки
              </Button>
            </a>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Sprout className="w-4 h-4 text-green-400" />
            <span className="text-sm font-medium">Растения делают жизнь лучше</span>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section id="plants" className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Почему стоит завести растения?</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">Комнатные растения — это не просто декор. Они улучшают воздух, настроение и атмосферу в доме.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-green-500/20 ring-1 ring-green-500/30 mb-6">
                <Leaf className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Очищают воздух</h3>
              <p className="text-white/70 leading-relaxed">Поглощают углекислый газ и токсины, насыщая комнату кислородом.</p>
            </div>

            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500/20 ring-1 ring-blue-500/30 mb-6">
                <Droplets className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Увлажняют воздух</h3>
              <p className="text-white/70 leading-relaxed">Испаряют влагу, создавая комфортный микроклимат в помещении.</p>
            </div>

            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-yellow-500/20 ring-1 ring-yellow-500/30 mb-6">
                <Sun className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Улучшают настроение</h3>
              <p className="text-white/70 leading-relaxed">Зелёный цвет снижает стресс и повышает концентрацию на 15%.</p>
            </div>

            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-500/20 ring-1 ring-emerald-500/30 mb-6">
                <Sprout className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Просто уход</h3>
              <p className="text-white/70 leading-relaxed">Многие виды требуют минимального внимания и живут годами.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tips / Journey Section */}
      <section id="tips" className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
                Как начать с нуля
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
                Четыре простых шага от первого горшка до цветущего зелёного уголка.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-green-400/60 mb-4">01.</div>
                  <h3 className="text-xl font-semibold mb-4">Выберите растение</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Начните с неприхотливых видов: сансевиерия, замиокулькас или потос отлично подойдут для первого опыта.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-green-400/60 mb-4">02.</div>
                  <h3 className="text-xl font-semibold mb-4">Подберите горшок</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Горшок должен быть на 2–3 см больше корневой системы. Обязательно с дренажным отверстием на дне.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-green-400/60 mb-4">03.</div>
                  <h3 className="text-xl font-semibold mb-4">Найдите место</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Оцените освещение в комнате: светолюбивые растения — на южные окна, теневыносливые — в глубину комнаты.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-green-400/60 mb-4">04.</div>
                  <h3 className="text-xl font-semibold mb-4">Ухаживайте</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Регулярный полив, периодическая подкормка и протирание листьев — вот и весь уход для большинства растений.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a href="#videos">
                <Button size="lg" className="bg-green-500 text-white hover:bg-green-400 rounded-full px-12 py-4 text-lg font-semibold">
                  Смотреть видеоуроки
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">Видеоуроки</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Смотрите и учитесь — лучшие видео об уходе за комнатными растениями.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {videos.map((video) => (
              <div key={video.id} className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden">
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
                  <p className="text-white/70">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
                  Частые вопросы
                </h2>
                <p className="text-xl text-white/80 leading-relaxed text-pretty">
                  Всё, что нужно знать начинающему любителю растений — от полива до удобрений.
                </p>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                    >
                      <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                      {openFaq === index ? (
                        <Minus className="w-5 h-5 flex-shrink-0 text-green-400" />
                      ) : (
                        <Plus className="w-5 h-5 flex-shrink-0 text-green-400" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Useful Links Section */}
      <section id="links" className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-12">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Полезные ссылки</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Лучшие ресурсы для любителей комнатных растений.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {usefulLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-6 flex items-start gap-4 hover:bg-white/10 transition-colors"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-green-500/20 ring-1 ring-green-500/30 flex-shrink-0">
                    <ExternalLink className="w-5 h-5 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1 group-hover:text-green-300 transition-colors flex items-center gap-2">
                      {link.title}
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">{link.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-12">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Задайте вопрос</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="rounded-2xl bg-white/95 text-black p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Написать нам</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Имя</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Вопрос</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none outline-none"
                      placeholder="Спросите всё об уходе за растениями..."
                    />
                  </div>
                  <Button className="w-full bg-green-600 text-white hover:bg-green-500 rounded-lg py-3 font-normal text-base">
                    Отправить вопрос
                  </Button>
                </form>
              </div>

              <div className="space-y-8">
                <p className="text-xl text-white/90 leading-relaxed text-pretty">
                  Есть вопрос о конкретном растении или нужен совет по уходу? Напишите нам — наши эксперты-ботаники ответят в течение суток.
                </p>

                <div className="rounded-2xl bg-white/95 text-black p-6 shadow-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
                      alt="Анна Петрова"
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-lg font-semibold">Анна Петрова</h4>
                      <p className="text-gray-600">Ботаник-консультант</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    «Помогаю подобрать растения и наладить уход уже 8 лет. Консультирую с радостью!»
                  </p>
                  <Button className="w-full bg-green-600 text-white hover:bg-green-500 rounded-lg flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4" />
                    Написать Анне
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/[0.03] backdrop-blur-2xl ring-1 ring-white/10 p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2 mb-6">
                  <Leaf className="w-6 h-6 text-green-400" />
                  <span className="text-xl font-semibold">Mamedova</span>
                </div>
                <p className="text-white/80 leading-relaxed text-pretty">
                  Всё о комнатных растениях: уход, советы, видео и подборки для начинающих и опытных цветоводов.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">РАСТЕНИЯ</h3>
                <ul className="space-y-3">
                  {[
                    { label: "Суккуленты", href: "https://ru.wikipedia.org/wiki/Суккуленты" },
                    { label: "Тропические", href: "https://ru.wikipedia.org/wiki/Тропические_растения" },
                    { label: "Цветущие", href: "https://ru.wikipedia.org/wiki/Комнатные_растения" },
                    { label: "Папоротники", href: "https://ru.wikipedia.org/wiki/Папоротники" },
                  ].map((item) => (
                    <li key={item.label}>
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-green-300 transition-colors text-sm leading-relaxed">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">СОВЕТЫ</h3>
                <ul className="space-y-3">
                  {["Полив", "Освещение", "Удобрения", "Пересадка"].map((item) => (
                    <li key={item}>
                      <a href="#tips" className="text-white/70 hover:text-green-300 transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">РЕСУРСЫ</h3>
                <ul className="space-y-3">
                  {[
                    { label: "Видеоуроки", href: "#videos" },
                    { label: "Вопросы и ответы", href: "#faq" },
                    { label: "Полезные ссылки", href: "#links" },
                    { label: "Контакты", href: "#" },
                  ].map((item) => (
                    <li key={item.label}>
                      <a href={item.href} className="text-white/70 hover:text-green-300 transition-colors text-sm leading-relaxed">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-white/10 pt-12 mb-12">
              <div className="max-w-md">
                <h3 className="text-lg font-semibold mb-4">Советы по уходу на почту</h3>
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Введите ваш email"
                    className="flex-1 px-4 py-3 rounded-lg bg-white/5 ring-1 ring-white/20 backdrop-blur border-0 text-white placeholder:text-white/50 focus:ring-2 focus:ring-green-500/50 focus:outline-none"
                  />
                  <Button className="bg-green-500 text-white hover:bg-green-400 rounded-lg px-6 h-[50px]">Подписаться</Button>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8">
              <p className="text-white/60 text-sm text-center">© 2025 Mamedova — всё о домашних растениях</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index