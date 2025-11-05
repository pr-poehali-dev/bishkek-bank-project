import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const cardTypes = [
  {
    name: 'Platinum',
    description: 'Премиум карта с максимальными привилегиями',
    cashback: '5%',
    limit: '1 000 000',
    features: ['Приоритетная поддержка', 'Доступ в VIP-залы', 'Страхование путешествий'],
    gradient: 'from-gray-800 to-gray-600',
  },
  {
    name: 'Gold',
    description: 'Золотая карта для активных клиентов',
    cashback: '3%',
    limit: '500 000',
    features: ['Кэшбэк на все покупки', 'Бесплатное обслуживание', 'SMS-уведомления'],
    gradient: 'from-yellow-600 to-yellow-400',
  },
  {
    name: 'Classic',
    description: 'Классическая карта для повседневных расходов',
    cashback: '1%',
    limit: '200 000',
    features: ['Онлайн-банкинг', 'Бесконтактные платежи', 'Мобильное приложение'],
    gradient: 'from-blue-600 to-blue-400',
  },
];

export default function Cards() {
  return (
    <section id="cards" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-foreground mb-4">Банковские карты</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Выберите карту, которая соответствует вашему образу жизни. Все карты защищены современными технологиями шифрования
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cardTypes.map((card, index) => (
            <Card 
              key={card.name} 
              className="hover-scale border-2 hover:shadow-xl transition-all animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className={`h-48 bg-gradient-to-br ${card.gradient} rounded-lg mb-4 p-6 text-white relative overflow-hidden`}>
                  <div className="absolute top-4 right-4">
                    <Icon name="Shield" size={24} className="text-white/80" />
                  </div>
                  <div className="absolute bottom-6 left-6">
                    <p className="text-sm opacity-80 mb-1">Кредитный лимит</p>
                    <p className="text-2xl font-bold">{card.limit} сом</p>
                  </div>
                  <div className="absolute bottom-6 right-6">
                    <Icon name="CreditCard" size={40} className="text-white/30" />
                  </div>
                </div>
                <CardTitle className="text-2xl">{card.name}</CardTitle>
                <CardDescription className="text-base">{card.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                  <span className="text-sm text-muted-foreground">Кэшбэк</span>
                  <span className="text-2xl font-bold text-secondary">{card.cashback}</span>
                </div>
                
                <div className="space-y-2">
                  {card.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-accent" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90">
                  Оформить карту
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-8 bg-white rounded-xl border-2 border-accent/20">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <Icon name="ShieldCheck" size={40} className="text-accent mx-auto mb-2" />
              <h3 className="font-semibold mb-1">3D Secure</h3>
              <p className="text-sm text-muted-foreground">Защита онлайн-платежей</p>
            </div>
            <div>
              <Icon name="Fingerprint" size={40} className="text-accent mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Биометрия</h3>
              <p className="text-sm text-muted-foreground">Вход по отпечатку</p>
            </div>
            <div>
              <Icon name="Bell" size={40} className="text-accent mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Уведомления</h3>
              <p className="text-sm text-muted-foreground">Контроль операций</p>
            </div>
            <div>
              <Icon name="Lock" size={40} className="text-accent mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Шифрование</h3>
              <p className="text-sm text-muted-foreground">256-bit SSL</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
