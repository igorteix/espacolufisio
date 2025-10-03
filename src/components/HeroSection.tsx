import { Button } from "@/components/ui/button";
import { Phone, Star, ChevronDown, MessageCircleIcon, MessageSquare } from "lucide-react";

import 'react-social-icons/whatsapp'
import { SocialIcon } from 'react-social-icons'

export const HeroSection = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/5511955560910", "_blank");
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div className="absolute inset-0 bg-[url('/images/mulher-com-instrutor-pratica-ioga.jpg')] bg-cover bg-center opacity-20"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <div className="flex items-center justify-center gap-2 mb-4 mt-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-secondary fill-current" />
              ))}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent text-3xl  md:text-7xl">
                Mais equilíbrio. 
              </span>
            <span className="block bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent text-3xl md:text-7xl">
                Menos estresse.
              </span>
              Mais você.
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed animate-fade-in">
            Oferecemos fisioterapia de alto nível, pilates personalizado, 
            massagens premium e exclusividade para quem busca resultados reais e atendimento diferenciado.
          </p>
          {/* <div className="flex flex-col items-center gap-3 mb-8">
            <div className="flex items-center gap-2 text-primary-foreground/90">
              <span className="text-lg">✔</span>
              <span>Profissionais especializados</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/90">
              <span className="text-lg">✔</span>
              <span>Estrutura moderna e confortável</span>
            </div>
          </div> */}

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button 
              onClick={openWhatsApp}
              size="lg"
              className="bg-gradient-secondary hover:shadow-gold transition-all duration-300 text-lg px-8 py-6"
            >
              <SocialIcon style={{ height: 35, width: 35 }} url="https://wa.me/5511955560910" target="_blank" />
              Marque sua aula experimental
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-2 sm:gap-6 text-center">
            <div className="animate-fade-in">
              <div className="text-2xl sm:text-3xl font-bold text-secondary mb-1 sm:mb-2">10+</div>
              <div className="text-xs sm:text-sm text-primary-foreground/80 leading-tight">Anos de Experiência</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-2xl sm:text-3xl font-bold text-secondary mb-1 sm:mb-2">1000+</div>
              <div className="text-xs sm:text-sm text-primary-foreground/80 leading-tight">Pacientes Atendidos</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-2xl sm:text-3xl font-bold text-secondary mb-1 sm:mb-2">4</div>
              <div className="text-xs sm:text-sm text-primary-foreground/80 leading-tight">Convênios Aceitos</div>
            </div>
          </div>
        </div>
        
        {/* Scroll Arrow */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => {
              const servicesSection = document.getElementById('servicos');
              if (servicesSection) {
                servicesSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group"
          >
            <ChevronDown className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};