import Icon from '@/components/ui/icon';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const roadmapItems = [
  {
    quarter: 'Q1 2025',
    status: 'current',
    title: 'Запуск в России',
    description: 'Открытие первых отделений и запуск основных банковских продуктов',
    achievements: [
      'Получение банковской лицензии ЦБ РФ',
      'Открытие 3 отделений в Москве',
      'Запуск дебетовых карт МИР',
      'Мобильное приложение v1.0',
    ],
    icon: 'Rocket',
  },
  {
    quarter: 'Q2 2025',
    status: 'planned',
    title: 'Расширение в регионах РФ',
    description: 'Развитие сети отделений по России',
    achievements: [
      'Открытие в Санкт-Петербурге',
      'Запуск в Казани и Екатеринбурге',
      'Кредитные карты с кэшбэком',
      'Интеграция с российскими сервисами',
    ],
    icon: 'TrendingUp',
  },
  {
    quarter: 'Q3 2025',
    status: 'planned',
    title: 'Дубай и Ближний Восток',
    description: 'Первая международная экспансия',
    achievements: [
      'Открытие офиса в Дубае (DIFC)',
      'Лицензия финансовых услуг ОАЭ',
      'Многовалютные счета (AED, USD, RUB)',
      'Исламский банкинг',
    ],
    icon: 'Globe',
  },
  {
    quarter: 'Q4 2025',
    status: 'planned',
    title: 'Америка и Европа',
    description: 'Глобальная экспансия на западные рынки',
    achievements: [
      'Лицензия в США (FinCEN)',
      'Открытие офиса в Нью-Йорке',
      'EMI лицензия в Евросоюзе',
      'Офис в Лондоне или Берлине',
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
            От России до мира. Наша дорожная карта показывает путь к глобальному присутствию
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
                    Стать международным банком с присутствием на 4 континентах
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
