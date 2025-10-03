import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Navigation, Phone, Instagram, Facebook } from "lucide-react";

export const LocationSection = () => {
  const openWaze = () => {
    window.open("https://waze.com/ul?q=Rua Santa Catarina, 130, Vila Progresso, Jundiaí-SP", "_blank");
  };

  const openGoogleMaps = () => {
    window.open("https://maps.google.com/?q=Rua Santa Catarina, 130, Vila Progresso, Jundiaí-SP", "_blank");
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/5511955560910", "_blank");
  };

  const openInstagram = () => {
    window.open("https://instagram.com/espacolufisio", "_blank");
  };

  const openFacebook = () => {
    window.open("https://www.facebook.com/espacolufisio", "_blank");
  };

  return (
    <section id="localizacao" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Nossa Localização
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos estrategicamente localizados em Jundiaí-SP, em um espaço moderno 
            e acessível para melhor atendê-lo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Informações de localização */}
          <div className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-secondary flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Endereço</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      <strong>Av. Fernando Arens, 1337</strong><br />
                      <span className="text-sm">ou</span><br />
                      <strong>Rua Santa Catarina, 130</strong><br />
                      Vila Progresso<br />
                      Jundiaí - SP<br />
                      <span className="text-xs text-muted-foreground/60">(Esquina estratégica)</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-gradient-secondary flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Horário de Funcionamento</h3>
                    <p className="text-muted-foreground">
                      Segunda à Sexta: 07:00 às 21:00<br />
                      Sábados e Domingos: Consulte disponibilidade
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={openWaze}
                    className="bg-gradient-secondary hover:shadow-gold transition-all duration-300 flex-1"
                  >
                    <Navigation className="mr-2 h-4 w-4" />
                    Abrir no Waze
                  </Button>
                  <Button 
                    onClick={openGoogleMaps}
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground flex-1"
                  >
                    <MapPin className="mr-2 h-4 w-4" />
                    Google Maps
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contato e Redes Sociais */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6 text-center">
                  Entre em Contato
                </h3>
                
                <div className="space-y-4 mb-8">
                  <Button 
                    onClick={openWhatsApp}
                    className="w-full bg-gradient-secondary hover:shadow-gold transition-all duration-300"
                    size="lg"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    WhatsApp: (11) 9 5556-0910
                  </Button>
                </div>

                <div className="border-t border-border pt-6">
                  <h4 className="text-lg font-semibold text-primary mb-4 text-center">
                    Siga-nos nas Redes Sociais
                  </h4>
                  <div className="flex justify-center gap-4">
                    <Button 
                      onClick={openInstagram}
                      variant="outline"
                      size="icon"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <Instagram className="h-5 w-5" />
                    </Button>
                    <Button 
                      onClick={openFacebook}
                      variant="outline"
                      size="icon"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <Facebook className="h-5 w-5" />
                    </Button>
                  </div>
                  <div className="text-center mt-3 space-y-1">
                    <p className="text-sm text-muted-foreground">@espacolufisio</p>
                    <p className="text-sm text-muted-foreground">facebook.com/espacolufisio</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Mapa */}
          <div className="h-96 lg:h-full min-h-96">
            <Card className="border-0 shadow-lg h-full">
              <CardContent className="p-0 h-full">
                <div className="w-full h-full bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.018594004937!2d-46.86991402490252!3d-23.205992979045618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf267d8de853fb%3A0x3b1f3aac11b6a967!2sEspa%C3%A7o%20Lufisio!5e0!3m2!1spt-BR!2sbr!4v1753806436754!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                    title="Localização do Espaço Lufisio"
                  ></iframe>
                  <div className="absolute inset-0 bg-gradient-hero opacity-10 rounded-lg pointer-events-none"></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};