import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState("todos");

  const categories = [
    { id: "todos", label: "Todos" },
    { id: "fisioterapia", label: "Fisioterapia" },
    { id: "pilates", label: "Pilates" },
    { id: "massagens", label: "Massagens" },
    { id: "instalacoes", label: "Instalações" }
  ];

  const galleryImages = [
    {
      id: 1,
      src: "/images/Fisio1.jpg",
      alt: "Sessão de fisioterapia",
      category: "fisioterapia"
    },
     {
      id: 2,
      src: "/images/Fisio2.jpg",
      alt: "Sessão de fisioterapia",
      category: "fisioterapia"
    },
    {
      id: 3,
      src: "/images/fotos-lufisio-58.jpg",
      alt: "Aula de pilates",
      category: "pilates"
    },
    {
      id: 4,
      src: "/images/fotos-lufisio-69.jpg",
      alt: "Aula de pilates",
      category: "pilates"
    },
    {
      id: 5,
      src: "/images/fotos-lufisio-144.jpg",
      alt: "Aula de pilates",
      category: "pilates"
    },
    {
      id: 6,
      src: "/images/massagem1.jpg",
      alt: "Sessão de massagem relaxante",
      category: "massagens"
    },
    {
      id: 7,
      src: "/images/massagem2.jpg",
      alt: "Sessão de massagem relaxante",
      category: "massagens"
    },
    {
      id: 8,
      src: "/images/fotos-lufisio2-5.jpg",
      alt: "Instalações modernas",
      category: "instalacoes"
    },
    {
      id: 9,
      src: "/images/fotos-lufisio2-11.jpg",
      alt: "Instalações modernas",
      category: "instalacoes"
    },
    {
      id: 10,
      src: "/images/fotos-lufisio2-4.jpg",
      alt: "Instalações modernas",
      category: "instalacoes"
    }
  ];

  const filteredImages = activeCategory === "todos" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section id="galeria" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Galeria de Fotos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Conheça nossos espaços modernos e acolhedores, equipamentos de última geração 
            e o ambiente perfeito para sua jornada de bem-estar.
          </p>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={activeCategory === category.id 
                  ? "bg-gradient-secondary hover:shadow-gold" 
                  : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <Card key={image.id} className="overflow-hidden border-0 shadow-lg hover:shadow-primary transition-all duration-300 group">
              <CardContent className="p-0">
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-primary-foreground font-semibold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {image.alt}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">
              Nenhuma imagem encontrada para esta categoria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};