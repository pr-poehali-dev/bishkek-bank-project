import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Cards from '@/components/Cards';
import About from '@/components/About';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Cards />
        <About />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}