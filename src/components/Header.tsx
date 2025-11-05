import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src="https://cdn.poehali.dev/files/ade5a79b-73f9-45c2-afa3-5013cf91aaf8.jpg" 
              alt="Bishkek Bank" 
              className="h-12 object-contain"
            />
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Главная
            </button>
            <button
              onClick={() => scrollToSection('cards')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Карты
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              О банке
            </button>
            <button
              onClick={() => scrollToSection('contacts')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Контакты
            </button>
            <Button className="bg-secondary hover:bg-secondary/90">
              Личный кабинет
            </Button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 animate-fade-in">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Главная
            </button>
            <button
              onClick={() => scrollToSection('cards')}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Карты
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              О банке
            </button>
            <button
              onClick={() => scrollToSection('contacts')}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Контакты
            </button>
            <Button className="w-full bg-secondary hover:bg-secondary/90">
              Личный кабинет
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
}