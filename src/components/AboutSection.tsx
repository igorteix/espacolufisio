import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Heart, Star, Users, Award } from "lucide-react";

export const AboutSection = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/5511955560910", "_blank");
  };

  const values = [
    {
      icon: Heart,
      title: "Atendimento Humanizado",
      description: "Cada paciente é tratado com atenção e respeito, valorizando sua história individual."
    },
    {
      icon: Award,
      title: "Excelência Técnica",
      description: "Fisioterapeutas qualificados com técnicas de ponta para resultados eficazes."
    },
    {
      icon: Users,
      title: "Programas Personalizados",
      description: "Cada programa é adaptado às necessidades e objetivos individuais de cada pessoa."
    },
    {
      icon: Star,
      title: "Ambiente Acolhedor",
      description: "Estrutura moderna e confortável, adaptada para todas as idades."
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Quem Somos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uma história de cuidado, dedicação e transformação de vidas através da saúde e bem-estar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-6">
              Nossa História
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                No <strong className="text-primary">Espaço LuFisio</strong>, acreditamos que cuidar da saúde é muito mais do que tratar sintomas — é olhar para cada pessoa de forma única, valorizando seu bem-estar físico e emocional.
              </p>
              <p>
                <strong className="text-primary">Fundado em 2015</strong> por uma mãe e fisioterapeuta apaixonada por ajudar pessoas, o Espaço LuFisio nasceu do sonho de oferecer um atendimento humanizado e especializado, unindo ciência, experiência e carinho em cada sessão.
              </p>
              <p>
                Com dedicação e amor pela profissão, nossa fundadora transformou um ideal em realidade, criando um ambiente acolhedor onde cada paciente é tratado com atenção e respeito.
              </p>
              <p>
                Ao longo desses <strong className="text-primary">mais de 10 anos</strong>, conquistamos a confiança da comunidade de Jundiaí e região, tornando-nos referência em fisioterapia, Pilates e terapias integradas.
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src="/images/lu-fisio.png"
              alt="Ambiente acolhedor do Espaço Lufisio"
              className="rounded-2xl shadow-primary w-full"
            />
            <div className="absolute inset-0 bg-gradient-hero opacity-20 rounded-2xl"></div>
          </div>
        </div>

        {/* Missão e Valores */}
        <div className="bg-gradient-secondary rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Nossa Missão
            </h3>
            <p className="text-primary leading-relaxed max-w-2xl mx-auto">
              Nossa missão é promover qualidade de vida, prevenir lesões e ajudar na reabilitação, 
              com um olhar atento às necessidades individuais de cada paciente. Aqui, cada conquista sua é também uma vitória nossa.
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-primary font-semibold text-lg mb-6">
              "Mais do que um espaço de saúde, somos uma família que cuida da sua."
            </p>
          </div>
        </div>

        {/* Por que escolher o Espaço LuFisio */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-primary mb-8 text-center">
            Por que escolher o Espaço LuFisio?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 bg-background hover:shadow-primary transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-secondary flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-bold text-primary mb-3">{value.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-background rounded-2xl p-8 max-w-2xl mx-auto border border-primary/20">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Venha Fazer Parte da Nossa História
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Descubra como podemos ajudar você a alcançar seus objetivos de saúde e bem-estar. 
              Agende uma conversa e conheça nossos serviços personalizados.
            </p>
            <Button 
              onClick={openWhatsApp}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Phone className="mr-2 h-5 w-5" />
              Saiba Mais
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};