import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Shield, Settings, Sparkles, CheckCircle } from "lucide-react";

export const EquipmentSection = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/5511955560910", "_blank");
  };

  const features = [
    {
      icon: Settings,
      title: "Manutenção Constante",
      description: "Cada equipamento recebe manutenção rigorosa e ajustes precisos."
    },
    {
      icon: Sparkles,
      title: "Higienização Rigorosa", 
      description: "Limpeza e desinfecção após cada uso para sua segurança total."
    },
    {
      icon: Shield,
      title: "Segurança Total",
      description: "Equipamentos sempre prontos, seguros e confortáveis."
    },
    {
      icon: CheckCircle,
      title: "Resultados Eficazes",
      description: "Exercícios mais eficazes e adaptados ao seu corpo."
    }
  ];

  return (
    <section id="equipamentos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Equipamentos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            No Espaço LuFisio, cada equipamento de Pilates é tratado com o mesmo cuidado 
            que temos com nossos pacientes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-6">
              Equipamentos de Qualidade
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                <strong className="text-primary">Manutenção constante</strong>, higienização rigorosa e ajustes precisos garantem que você treine em aparelhos sempre prontos, seguros e confortáveis.
              </p>
              <p>
                Nossos equipamentos de Pilates passam por inspeção diária e manutenção preventiva para garantir que cada movimento seja executado com máxima segurança e eficiência.
              </p>
            </div>

            <div className="bg-gradient-secondary rounded-xl p-6 mb-8">
              <h4 className="text-xl font-bold text-primary mb-4">O que isso significa para você?</h4>
              <ul className="space-y-3">
                <li className="flex items-start text-primary">
                  <CheckCircle className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Exercícios mais eficazes e adaptados ao seu corpo</span>
                </li>
                <li className="flex items-start text-primary">
                  <CheckCircle className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Segurança total em cada movimento</span>
                </li>
                <li className="flex items-start text-primary">
                  <CheckCircle className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Conforto e higiene impecáveis em todas as sessões</span>
                </li>
                <li className="flex items-start text-primary">
                  <CheckCircle className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Resultados melhores, sem riscos desnecessários</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <img
              src="/images/fotos-lufisio2-10.jpg"
              alt="Equipamentos modernos do Espaço Lufisio"
              className="rounded-2xl shadow-primary w-full"
            />
            <div className="absolute inset-0 bg-gradient-hero opacity-10 rounded-2xl"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center border-0 bg-background hover:shadow-primary transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-gradient-secondary flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-lg font-bold text-primary mb-3">{feature.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-background rounded-2xl p-8 max-w-2xl mx-auto border border-primary/20">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Ambiente Preparado Para Você
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Aqui, você encontra mais do que aparelhos de Pilates: encontra um ambiente preparado 
              para que sua experiência seja eficiente, segura e inesquecível.
            </p>
            <p className="text-primary font-semibold mb-6">
              Venha sentir a diferença de treinar com quem cuida de cada detalhe para cuidar de você.
            </p>
            <Button 
              onClick={openWhatsApp}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Phone className="mr-2 h-5 w-5" />
              Conheça Nossos Equipamentos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};