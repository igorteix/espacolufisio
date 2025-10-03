import { Button } from "@/components/ui/button";
import { Phone, Instagram, Facebook, MapPin, Clock, Mail } from "lucide-react";

export const Footer = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/5511955560910", "_blank");
  };

  const openInstagram = () => {
    window.open("https://instagram.com/espacolufisio", "_blank");
  };

  const openFacebook = () => {
    window.open("https://www.facebook.com/espacolufisio", "_blank");
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-primary py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo e descrição */}
          <div className="lg:col-span-2">
            <img 
              src="/logo.png" 
              alt="Espaço Lufisio" 
              className="h-16 w-auto mb-6"
            />
            <p className="text-primary-foreground/80 leading-relaxed mb-6 max-w-md">
              Há mais de 10 anos transformando vidas através de cuidados especializados em fisioterapia, 
              pilates, massagens e bem-estar em Jundiaí-SP.
            </p>
            <div className="flex space-x-4">
              <Button 
                onClick={openInstagram}
                variant="outline"
                size="icon"
                className="border-primary-foreground/30 hover:bg-primary-foreground hover:text-primary"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button 
                onClick={openFacebook}
                variant="outline"
                size="icon"
                className="border-primary-foreground/30 hover:bg-primary-foreground hover:text-primary"
              >
                <Facebook className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-primary-foreground">Nossos Serviços</h3>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>Pilates Personalizado</li>
              <li>Fisioterapia</li>
              <li>Massagens</li>
              <li>Cuidados Domiciliares</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-primary-foreground">Contato</h3>
            <div className="space-y-4 ">
              <div className="flex items-center space-x-3 text-primary-foreground/80">
                <MapPin className="h-5 w-5 text-secondary flex-shrink-0" />
                <div>
                  <p className="text-sm">Av. Fernando Arens, 1337</p>
                  <p className="text-sm">ou Rua Santa Catarina, 130</p>
                  <p className="text-sm">Vila Progresso, Jundiaí-SP</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 text-primary-foreground/80">
                <Clock className="h-5 w-5 text-secondary flex-shrink-0" />
                <div>
                  <p className="text-sm">Segunda à Sexta</p>
                  <p className="text-sm">07:00 às 21:00</p>
                </div>
              </div>
              
              <Button 
                onClick={openWhatsApp}
                variant="outline"
                size="sm"
                className="border-primary-foreground/30 hover:bg-primary-foreground hover:text-primary"
              >
                <Phone className="mr-2 h-4 w-4" />
                (11) 9 5556-0910
              </Button>
            </div>
          </div>
        </div>

        {/* Convênios */}
        <div className="text-primary-foreground border-t border-primary-foreground/20 pt-8 mb-8">
          <h3 className="text-lg font-semibold mb-4 text-center">Convênios Aceitos</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["GymPass", "TotalPass", "GuruPass", "Concard"].map((convenio) => (
              <div key={convenio} className="bg-primary-foreground/10 rounded-lg px-4 py-2 text-sm font-medium">
                {convenio}
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} Espaço Lufisio. Todos os direitos reservados.
          </p>
          <p className="text-primary-foreground/60 text-sm mt-2">
            Desenvolvido com ❤️ para promover saúde e bem-estar.
          </p>
        </div>
      </div>
    </footer>
  );
};