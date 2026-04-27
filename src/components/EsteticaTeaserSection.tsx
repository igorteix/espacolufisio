import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";

export default function EsteticaTeaserSection() {

  const openWhatsApp = () => {
    const message = "Olá! Vim pelo site da Lufisio e quero entrar na lista VIP de estética";
    const phone = "5511955560910"; // 👉 ajustar aqui
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section className="py-12 px-6 bg-muted/50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">

        {/* TEXTO */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ✨ Um novo nível de cuidado está chegando
          </h2>

          <p className="text-muted-foreground mb-4">
            Em breve, tratamentos avançados de estética facial e corporal com tecnologia de ponta.
            Resultados visíveis com segurança e sofisticação.
          </p>

          <p className="mb-6 font-medium">
            🎁 Condições especiais para quem entrar na lista antecipada.
          </p>

          {/* BOTÃO PADRÃO DO SITE */}
          <div className="mt-auto pb-6">
            <Button 
            onClick={openWhatsApp}
            className="w-full flex items-center justify-center gap-3 
                        bg-gradient-secondary 
                        text-white font-medium
                        py-6 rounded-xl
                        hover:opacity-90 transition-all duration-300"
            >
            <div className="bg-[#25D366] p-2 rounded-full flex items-center justify-center">
                <FaWhatsapp className="text-white text-lg" />
            </div>

            Quero entrar na lista VIP
            </Button>
          </div>
        </div>

        {/* IMAGEM */}
        <div className="relative h-[220px] md:h-[260px] rounded-2xl overflow-hidden">
          <img
            src="https://cdn.dooca.store/1464/files/img-9994-1-1.jpg?auto=format&fit=crop&w=1200&q=80"
            alt="Tratamento estético corporal moderno"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

      </div>
    </section>
  );
}