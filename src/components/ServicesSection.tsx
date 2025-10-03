import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Dumbbell, Users, Heart, Sparkles, Home } from "lucide-react";

export const ServicesSection = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/5511955560910", "_blank");
  };

  const services = [
    {
      icon: Dumbbell,
      title: "Pilates Personalizado",
      subtitle: "Movimento com Precisão, Corpo com Equilíbrio",
      description: "No Espaço Lufisio, o Pilates vai além do exercício — é uma experiência completa de consciência corporal, força, flexibilidade e bem-estar, guiada por profissionais especializados. Oferecemos aulas 100% personalizadas, com foco nas suas necessidades individuais, sejam elas reabilitação, prevenção de lesões, melhora postural ou performance física.",
      features: [
        "Acompanhamento profissional especializado",
        "Ambiente tranquilo, sofisticado e acolhedor", 
        "Resultados reais com segurança e eficiência",
        "Atendimento individualizado"
      ],
      footer: "Redescubra o controle do seu corpo com precisão, fluidez e equilíbrio. Pilates no Espaço Lufisio: onde saúde e elegância se encontram em movimento."
    },
    {
      icon: Users,
      title: "Fisioterapia",
      subtitle: "Recupere seus movimentos, previna dores e viva com mais qualidade!",
      description: "No Espaço LuFisio, oferecemos tratamentos personalizados para cada fase da vida — do cuidado infantil ao envelhecimento ativo — garantindo resultados reais e duradouros.",
      features: [
        "Fisioterapia Pediátrica – Desenvolva, fortaleça e proteja a saúde das crianças desde cedo",
        "Fisioterapia Geriátrica – Mais equilíbrio, mobilidade e independência para aproveitar cada momento",
        "Reabilitação Ortopédica – Recupere-se de lesões e cirurgias com segurança e eficiência"
      ],
      footer: "Sua saúde merece o melhor cuidado. Aqui, você encontra atendimento humano, especializado e feito para transformar seu bem-estar."
    },
    {
      icon: Sparkles,
      title: "Massagens",
      subtitle: "Relaxe. Renove. Recarregue.",
      description: "Dê ao seu corpo o cuidado que ele merece:",
      features: [
        "Drenagem Linfática – Mais leveza e circulação",
        "Relaxante – Bem-estar imediato", 
        "Liberação Miofascial – Alívio profundo das dores"
      ],
      footer: "Seu corpo merece esse carinho!"
    },
    {
      icon: Home,
      title: "Cuidados Domiciliares",
      subtitle: "Atendimento no conforto da sua casa",
      description: "Se locomover até a clínica nem sempre é fácil, por isso, nós levamos o cuidado até você. No atendimento domiciliar do Espaço LuFisio, você recebe atenção exclusiva, exercícios adaptados e acompanhamento profissional, sem abrir mão da segurança e comodidade. Ideal para quem tem dificuldade de locomoção ou prefere evitar deslocamentos.",
      features: [
        "Reabilitação ortopédica e pós cirúrgica",
        "Fisioterapia geriátrica",
        "Exercícios terapêuticos adaptados",
        "Orientações para prevenção de lesões"
      ],
      footer: "Atendimento humanizado, no seu tempo e no seu espaço."
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos uma ampla gama de serviços especializados para cuidar da sua saúde 
            e promover seu bem-estar de forma integral e personalizada.
          </p>
        </div>

        {/* Featured Services - Pilates e Fisioterapia */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {services.slice(0, 2).map((service, index) => (
            <Card key={index} className="group hover:shadow-primary transition-all duration-300 border-0 bg-background">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-secondary flex items-center justify-center mr-4 group-hover:shadow-gold transition-all duration-300">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-secondary mr-3 mt-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {service.footer && (
                  <p className="text-sm text-primary/80 mb-6 italic border-l-4 border-secondary pl-4">
                    {service.footer}
                  </p>
                )}

                <Button 
                  onClick={openWhatsApp}
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground group-hover:shadow-primary transition-all duration-300"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Outros Serviços - Massagens, Home Care */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.slice(2).map((service, index) => (
            <Card key={index + 2} className="group hover:shadow-primary transition-all duration-300 border-0 bg-background">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-secondary flex items-center justify-center mb-4 group-hover:shadow-gold transition-all duration-300">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{service.title}</h3>
                  <p className="text-xs text-muted-foreground mb-3">{service.subtitle}</p>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-xs text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mr-2 mt-1.5 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {service.footer && (
                  <p className="text-xs text-primary/80 mb-4 italic">
                    {service.footer}
                  </p>
                )}

                <Button 
                  onClick={openWhatsApp}
                  variant="outline" 
                  size="sm"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground group-hover:shadow-primary transition-all duration-300"
                >
                  <Phone className="mr-2 h-3 w-3" />
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-primary text-lg font-semibold mb-6">
            Viva o melhor da saúde com excelência.
          </p>
          <Button 
            onClick={openWhatsApp}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Phone className="mr-2 h-5 w-5" />
            Agende sua avaliação
          </Button>
        </div>
      </div>
    </section>
  );
};