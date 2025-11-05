import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: 'Phone',
    title: 'Телефон',
    value: '+996 312 123 456',
    link: 'tel:+996312123456',
  },
  {
    icon: 'Mail',
    title: 'Email',
    value: 'info@bishkekbank.kg',
    link: 'mailto:info@bishkekbank.kg',
  },
  {
    icon: 'MapPin',
    title: 'Адрес',
    value: 'г. Бишкек, пр. Чуй 123',
    link: '#',
  },
  {
    icon: 'Clock',
    title: 'Режим работы',
    value: 'Пн-Пт: 9:00-18:00',
    link: '#',
  },
];

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Сообщение отправлено',
      description: 'Мы свяжемся с вами в ближайшее время',
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contacts" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-foreground mb-4">Контакты</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Свяжитесь с нами удобным способом. Ваши данные защищены и не передаются третьим лицам
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <Card 
                  key={info.title} 
                  className="hover-scale animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="pb-3">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-2">
                      <Icon name={info.icon as any} size={24} className="text-accent" />
                    </div>
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {info.link.startsWith('#') ? (
                      <p className="text-muted-foreground">{info.value}</p>
                    ) : (
                      <a 
                        href={info.link} 
                        className="text-primary hover:underline font-medium"
                      >
                        {info.value}
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-br from-primary to-accent text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Shield" size={24} />
                  Безопасность данных
                </CardTitle>
                <CardDescription className="text-white/80">
                  Конфиденциальность гарантирована
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <Icon name="Lock" size={18} className="mt-1 flex-shrink-0" />
                  <p className="text-sm">Все данные шифруются по протоколу SSL/TLS</p>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Eye" size={18} className="mt-1 flex-shrink-0" />
                  <p className="text-sm">Информация не передаётся третьим лицам</p>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="ShieldCheck" size={18} className="mt-1 flex-shrink-0" />
                  <p className="text-sm">Соответствие стандартам защиты персональных данных</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <CardTitle>Напишите нам</CardTitle>
              <CardDescription>
                Заполните форму и мы свяжемся с вами в ближайшее время
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Телефон"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Ваше сообщение"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  <Icon name="Send" size={18} className="mr-2" />
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
