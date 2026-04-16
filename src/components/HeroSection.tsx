import { Leaf, Sprout } from "lucide-react"
import { Button } from "@/components/ui/button"

const HeroSection = () => {
  return (
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

      <nav className="relative z-10 flex items-center justify-between p-6">
        <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
          <Leaf className="w-5 h-5 text-green-400" />
          <span className="font-medium">Зелёный дом</span>
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
  )
}

export default HeroSection
