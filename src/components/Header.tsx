import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";

interface HeaderProps {
  onNavigate: (section: string) => void;
}

export const Header = ({ onNavigate }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.8; // Assume hero takes ~80% of viewport
      setIsScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: "inicio", label: "Início" },
    { id: "servicos", label: "Nossos Serviços" },
    { id: "galeria", label: "Galeria" },
    { id: "equipe", label: "Nossa Equipe" },
    { id: "equipamentos", label: "Equipamentos" },
    { id: "sobre", label: "Quem Somos" },
    { id: "localizacao", label: "Localização" },
  ];

  const handleNavigate = (section: string) => {
    onNavigate(section);
    setIsOpen(false);
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/5511955560910", "_blank");
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300 border-b border-border/20 ${
      isScrolled 
        ? 'bg-primary/95 shadow-lg' 
        : 'bg-gradient-subtle'
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex items-center space-x-4">
          <img 
            src="/logo.png" 
            alt="Espaço Lufisio" 
            className="w-auto h-12 drop-shadow-sm"
          />
        </div>

        <div className="flex items-center space-x-4">
          <Button 
            onClick={openWhatsApp}
            className="hidden md:flex items-center gap-2 bg-gradient-secondary hover:shadow-gold transition-all duration-300 shadow-sm"
          >
            <Phone className="h-4 w-4" />
            WhatsApp
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="outline" 
                size="icon" 
                className="border-primary/30 bg-background/80 hover:bg-primary hover:text-primary-foreground hover:border-primary shadow-sm backdrop-blur-sm"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-background">
              <div className="flex flex-col h-full">
                <div className="py-6">
                  <img 
                    src="/logo.png" 
                    alt="Espaço Lufisio" 
                    className="h-16 w-auto mx-auto mb-8"
                  />
                  <nav className="space-y-4">
                    {menuItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleNavigate(item.id)}
                        className="block w-full text-left py-3 px-4 rounded-lg hover:bg-muted transition-colors text-lg font-medium text-foreground"
                      >
                        {item.label}
                      </button>
                    ))}
                  </nav>
                </div>
                <div className="mt-auto pb-6">
                  <Button 
                    onClick={openWhatsApp}
                    className="w-full bg-gradient-secondary hover:shadow-gold transition-all duration-300"
                    size="lg"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Marque sua aula experimental
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};