import Icon from '@/components/ui/icon';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-accent/20 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <img 
                src="https://cdn.poehali.dev/files/ade5a79b-73f9-45c2-afa3-5013cf91aaf8.jpg" 
                alt="Bishkek Bank" 
                className="h-10 object-contain"
              />
            </div>
            <p className="text-white/70 text-sm">
              Новый банк с большими амбициями
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#cards" className="hover:text-white transition-colors">Карты</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Кредиты</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Вклады</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Переводы</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">О банке</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#about" className="hover:text-white transition-colors">О нас</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Лицензии</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Карьера</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Новости</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <span>+996 312 123 456</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <span>info@bishkekbank.kg</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                <span>г. Бишкек, пр. Чуй 123</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/70">
              © {currentYear} Bishkek Bank. Все права защищены.
            </p>
            <div className="flex items-center gap-4 text-sm text-white/70">
              <Icon name="Shield" size={16} className="text-secondary" />
              <span>Лицензия НБ КР №123</span>
              <span>•</span>
              <span>Член системы гарантирования депозитов</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}