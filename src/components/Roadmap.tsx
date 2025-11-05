import Icon from '@/components/ui/icon';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const roadmapItems = [
  {
    quarter: 'Q1 2025',
    status: 'current',
    title: 'Запуск банка',
    description: 'Открытие первых отделений и запуск основных банковских продуктов',
    achievements: [
      'Получение банковской лицензии',
      'Открытие 3 отделений в Бишкеке',
      'Запуск дебетовых карт',
      'Мобильное приложение v1.0',
    ],
    icon: 'Rocket',
  },
  {
    quarter: 'Q2 2025',
    status: 'planned',
    title: 'Расширение услуг',
    description: 'Добавление новых продуктов и улучшение сервиса',
    achievements: [
      'Кредитные карты с кэшбэком',
      'Программа лояльности',
      'Онлайн-кредитование',
      'Интеграция с популярными сервисами',
    ],
    icon: 'TrendingUp',
  },
  {
    quarter: 'Q3 2025',
    status: 'planned',
    title: 'Региональное развитие',
    description: 'Открытие отделений в регионах и масштабирование',
    achievements: [
      'Открытие 10 новых отделений',
      'Запуск в Оше и Джалал-Абаде',
      'Партнёрство с торговыми сетями',
      'Расширение команды до 200+ человек',
    ],
    icon: 'Globe',
  },
  {
    quarter: 'Q4 2025',
    status: 'planned',
    title: 'Инновации и технологии',
    description: 'Внедрение передовых технологий и международная экспансия',
    achievements: [
      'Криптовалютные операции',
      'AI-ассистент для клиентов',
      'Международные переводы',
      'Выход на рынок Казахстана',
    ],
    icon: 'Zap',
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-foreground mb-4">План развития</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Мы только начинаем, но уже знаем куда идём. Наша дорожная карта показывает амбициозные цели на 2025 год
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roadmapItems.map((item, index) => (
            <Card
              key={item.quarter}
              className={`relative overflow-hidden hover-scale animate-fade-in-up ${
                item.status === 'current' ? 'border-2 border-secondary' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item.status === 'current' && (
                <div className="absolute top-0 right-0 bg-secondary text-black text-xs font-bold px-3 py-1 rounded-bl-lg">
                  Текущий этап
                </div>
              )}
              
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 rounded-lg flex items-center justify-center ${
                    item.status === 'current' ? 'bg-secondary/20' : 'bg-accent/10'
                  }`}>
                    <Icon 
                      name={item.icon as any} 
                      size={28} 
                      className={item.status === 'current' ? 'text-secondary' : 'text-accent'} 
                    />
                  </div>
                  <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
                    item.status === 'current' 
                      ? 'bg-secondary/20 text-secondary' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {item.quarter}
                  </span>
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
                <CardDescription className="text-sm">{item.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2">
                  {item.achievements.map((achievement) => (
                    <li key={achievement} className="flex items-start gap-2">
                      <Icon 
                        name={item.status === 'current' ? 'CheckCircle2' : 'Circle'} 
                        size={16} 
                        className={`mt-0.5 flex-shrink-0 ${
                          item.status === 'current' ? 'text-secondary' : 'text-muted-foreground'
                        }`} 
                      />
                      <span className="text-sm">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="inline-block bg-gradient-to-r from-gray-900 to-black border-accent/20">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 text-white">
                <Icon name="Target" size={48} className="text-secondary" />
                <div className="text-left">
                  <h3 className="text-2xl font-bold mb-2">Цель 2025</h3>
                  <p className="text-white/80 text-lg">
                    Стать топ-5 банком Кыргызстана по клиентскому сервису и инновациям
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}