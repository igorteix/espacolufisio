import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Award, Heart } from "lucide-react";

export const TeamSection = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/5511955560910", "_blank");
  };

  return (
    <section id="equipe" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Nossa Equipe
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça as profissionais especializadas que cuidam da sua saúde e bem-estar
            com dedicação, experiência e carinho.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Luciana - Fundadora */}
          <Card className="group hover:shadow-primary transition-all duration-300 border-0 bg-muted/30">
            <CardHeader>
                <img
                  src="/images/lu-fisio.png"
                  alt="Equipamentos modernos do Espaço Lufisio"
                  className="rounded-2xl shadow-primary w-full"
                />
            </CardHeader>
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-secondary flex items-center justify-center mr-6 group-hover:shadow-gold transition-all duration-300">
                  <Award className="h-10 w-10 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary">Luciana das Neves Teixeira</h3>
                  <p className="text-secondary font-semibold">Fundadora e Fisioterapeuta</p>
                </div>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-primary">Prazer, sou Luciana das Neves Teixeira.</strong> Sou fisioterapeuta e fundadora do Espaço LuFisio, criado em 2018 para ser mais do que uma clínica: um lugar onde cada pessoa é acolhida, ouvida e tratada de forma única.
                </p>
                <p>
                  Com mais de 10 anos de experiência, dedico minha vida a ajudar pessoas a recuperar a saúde, prevenir lesões e viver com mais qualidade de vida. Minha paixão pela profissão vai muito além do tratamento físico, acredito que cada paciente carrega uma história e merece ser cuidado com atenção, empatia e técnica de excelência.
                </p>
                <p>
                  Atuo com fisioterapia ortopédica, geriátrica e pós cirúrgica, além de conduzir Pilates clínico e terapias como drenagem linfática, massagem relaxante e liberação miofascial. Cada atendimento é pensado para oferecer resultados reais, aliviar dores, restaurar movimentos e devolver a confiança ao seu corpo.
                </p>
                <p className="text-primary font-semibold italic border-l-4 border-secondary pl-4">
                  "No Espaço LuFisio, você não é apenas mais um paciente, você é parte da nossa história. Cuidar não é só o que faço, é quem eu sou."
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Kamilli */}
          <Card className="group hover:shadow-primary transition-all duration-300 border-0 bg-muted/30">
            <CardHeader>
                <img
                  src="/images/Kamilli.jpeg"
                  alt="Equipamentos modernos do Espaço Lufisio"
                  className="rounded-2xl shadow-primary w-full"
                />
            </CardHeader>
            
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-secondary flex items-center justify-center mr-6 group-hover:shadow-gold transition-all duration-300">
                  <Heart className="h-10 w-10 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary">Kamilli Teixeira</h3>
                  <p className="text-secondary font-semibold">Fisioterapeuta</p>
                </div>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Com mais de 2 anos de experiência dedicada ao Pilates clínico, a fisioterapeuta <strong className="text-primary">Kamili Teixeira</strong>  é reconhecida pelo seu cuidado, atenção e resultados que transformam a vida dos pacientes.
                </p>
                <p>
                  Sua abordagem une técnica, empatia e motivação, criando aulas adaptadas às necessidades individuais e garantindo evolução segura e eficaz. Sempre atenta a cada detalhe, Kamilli acompanha de perto o progresso de cada aluno, celebrando cada conquista ao lado deles.
                </p>
                <p>
                  Querida por todos, ela transforma cada sessão de Pilates em um momento de bem-estar, foco e superação.
                </p>
                <p className="text-primary font-semibold italic border-l-4 border-secondary pl-4">
                  "No Espaço LuFisio, Kamilli é sinônimo de profissionalismo, dedicação e paixão pelo que faz."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <div className="bg-gradient-secondary rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Venha conhecer nossa equipe!
            </h3>
            <p className="text-primary mb-6">
              Agende uma conversa e descubra como podemos ajudar você a alcançar seus objetivos de saúde e bem-estar.
            </p>
            <Button
              onClick={openWhatsApp}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Phone className="mr-2 h-5 w-5" />
              Converse com Nossa Equipe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};