import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Ваши финансы под надёжной защитой
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Bishkek Bank — современные банковские решения с максимальным уровнем безопасности и конфиденциальности ваших данных
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-white font-semibold"
                onClick={() => scrollToSection('cards')}
              >
                Выбрать карту
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                onClick={() => scrollToSection('contacts')}
              >
                Связаться с нами
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Icon name="Shield" size={32} className="text-secondary" />
                </div>
                <p className="text-sm text-white/80">Защита средств</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Icon name="Lock" size={32} className="text-secondary" />
                </div>
                <p className="text-sm text-white/80">Шифрование данных</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Icon name="Eye" size={32} className="text-secondary" />
                </div>
                <p className="text-sm text-white/80">Конфиденциальность</p>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <Icon name="CreditCard" className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">Баланс</p>
                    <p className="text-white text-2xl font-bold">1 234 567 ₽</p>
                  </div>
                </div>
                <div className="h-px bg-white/20"></div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-white/70 text-xs mb-1">Доходы</p>
                    <p className="text-white text-lg font-semibold">+50 000 ₽</p>
                  </div>
                  <div>
                    <p className="text-white/70 text-xs mb-1">Расходы</p>
                    <p className="text-white text-lg font-semibold">-25 000 ₽</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}