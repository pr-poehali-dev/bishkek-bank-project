import Icon from '@/components/ui/icon';

const values = [
  {
    icon: 'Shield',
    title: 'Безопасность',
    description: 'Многоуровневая система защиты средств и персональных данных клиентов',
  },
  {
    icon: 'Eye',
    title: 'Конфиденциальность',
    description: 'Строгая политика защиты персональных данных в соответствии с международными стандартами',
  },
  {
    icon: 'TrendingUp',
    title: 'Надёжность',
    description: 'Стабильная работа с 1996 года, член системы гарантирования депозитов',
  },
  {
    icon: 'Award',
    title: 'Качество',
    description: 'Высокие стандарты обслуживания и индивидуальный подход к каждому клиенту',
  },
];

const stats = [
  { value: '28+', label: 'лет на рынке' },
  { value: '500K+', label: 'клиентов' },
  { value: '50+', label: 'отделений' },
  { value: '99.9%', label: 'аптайм систем' },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-foreground mb-4">О Bishkek Bank</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Мы создаём безопасное банковское пространство, где каждый клиент может быть уверен в сохранности своих средств и конфиденциальности личных данных
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className="text-center p-6 bg-muted/30 rounded-xl animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <p className="text-4xl font-bold text-secondary mb-2">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {values.map((value, index) => (
            <div 
              key={value.title} 
              className="flex gap-4 p-6 bg-muted/30 rounded-xl hover-scale animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Icon name={value.icon as any} size={28} className="text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-gray-900 to-black text-white rounded-2xl p-8 md:p-12 border border-accent/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Технологии безопасности</h3>
              <p className="text-white/90 mb-6">
                Мы используем передовые технологии для защиты ваших финансов: многофакторную аутентификацию, биометрическую идентификацию и шифрование данных по стандарту AES-256
              </p>
              <div className="space-y-3">
                {['Сертификация PCI DSS', 'Мониторинг 24/7', 'Антифрод системы'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Icon name="CheckCircle2" size={20} className="text-secondary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-white/80">Защита средств</span>
                  <span className="font-semibold">100%</span>
                </div>
                <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-secondary rounded-full" style={{ width: '100%' }}></div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/80">Конфиденциальность</span>
                  <span className="font-semibold">100%</span>
                </div>
                <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-secondary rounded-full" style={{ width: '100%' }}></div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/80">Доступность</span>
                  <span className="font-semibold">99.9%</span>
                </div>
                <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-secondary rounded-full" style={{ width: '99.9%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}