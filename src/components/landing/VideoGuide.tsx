import { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react";

interface VideoCard {
  title: string;
  description: string;
  videoUrl: string;
  thumbnail: string;
}

const videoCards: VideoCard[] = [
  {
    title: "Visão Geral",
    description: "Conheça o que é o Bancada e como funciona.",
    videoUrl: "https://www.youtube.com/shorts/embed/euXYxlnRmP4?autoplay=1",
    thumbnail: "https://img.youtube.com/vi/euXYxlnRmP4/maxresdefault.jpg",
  },
  {
    title: "Como Registar Conta",
    description: "Aprenda a criar sua conta em poucos passos.",
    videoUrl: "https://www.youtube.com/embed/yN-4MkxOxio?autoplay=1",
    thumbnail: "https://img.youtube.com/vi/yN-4MkxOxio/maxresdefault.jpg",
  },
  {
    title: "Como Entrar como Convidado",
    description: "Descubra como entrar como convidado no sistema.",
    videoUrl: "https://www.youtube.com/embed/Q26ECP2oG5k?autoplay=1",
    thumbnail: "https://img.youtube.com/vi/Q26ECP2oG5k/maxresdefault.jpg",
  },
  {
    title: "Como Renovar e Ativar a Licença",
    description: "Saiba como manter o seu acesso ativo e renovar a sua licença.",
    videoUrl: "https://www.youtube.com/embed/sjkj_n6lEdQ?autoplay=1",
    thumbnail: "https://img.youtube.com/vi/sjkj_n6lEdQ/maxresdefault.jpg",
  },
  {
    title: "Como configurar a impressora",
    description: "Passo a passo para configurar a sua impressora térmica.",
    videoUrl: "https://www.youtube.com/embed/b4Qm93N92kU?autoplay=1",
    thumbnail: "https://img.youtube.com/vi/b4Qm93N92kU/maxresdefault.jpg",
  },
  {
    title: "Como registar categoria",
    description: "Organize os seus artigos criando categorias personalizadas.",
    videoUrl: "https://www.youtube.com/embed/5sDepAsWU-0?autoplay=1",
    thumbnail: "https://img.youtube.com/vi/5sDepAsWU-0/maxresdefault.jpg",
  },
  {
    title: "Como registar artigo",
    description: "Mantenha o seu inventário sempre em dia com este guia.",
    videoUrl: "https://www.youtube.com/embed/7cmYZTUiEqs?autoplay=1",
    thumbnail: "https://img.youtube.com/vi/7cmYZTUiEqs/maxresdefault.jpg",
  },
  {
    title: "Como atualizar o stock",
    description: "Mantenha o seu inventário sempre em dia com este guia.",
    videoUrl: "https://www.youtube.com/embed/9PhCpi0PuPU?autoplay=1",
    thumbnail: "https://img.youtube.com/vi/9PhCpi0PuPU/maxresdefault.jpg",
  },
  {
    title: "Como registar cliente",
    description: "Saiba como cadastrar e gerir a sua base de clientes.",
    videoUrl: "https://www.youtube.com/embed/D9Qa5629L28?autoplay=1",
    thumbnail: "https://img.youtube.com/vi/D9Qa5629L28/maxresdefault.jpg",
  },
  {
    title: "Como emitir uma fatura-recibo",
    description: "Aprenda a emitir faturas-recibo de forma rápida e legal.",
    videoUrl: "https://www.youtube.com/embed/X8uvKB-seS0?autoplay=1",
    thumbnail: "https://img.youtube.com/vi/X8uvKB-seS0/maxresdefault.jpg",
  },
  {
    title: "Como Emitir Faturas e emitir Recibos",
    description: "Aprenda a emitir faturas e recibos de forma rápida e legal.",
    videoUrl: "https://www.youtube.com/embed/4d0fVKQrBuY?autoplay=1",
    thumbnail: "https://img.youtube.com/vi/4d0fVKQrBuY/maxresdefault.jpg",
  },
];

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export const VideoGuide = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollContainer = (direction: "left" | "right") => {
    const container = document.getElementById("video-carousel");
    if (!container) return;

    const cardWidth = container.offsetWidth * 0.85; // Move quase um card por vez
    const scrollAmount = direction === "right" ? cardWidth : -cardWidth;

    container.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });

    // Atualiza índice aproximado
    setCurrentIndex((prev) =>
      direction === "right"
        ? Math.min(prev + 1, videoCards.length - 1)
        : Math.max(prev - 1, 0)
    );
  };

  return (
    <section id="video-guide" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-[3px]">
            GUIA DE UTILIZAÇÃO
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Veja como funciona
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Conheça os principais recursos da Bancada em vídeos curtos e práticos.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scrollContainer("left")}
            className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 bg-background border border-border rounded-full p-3 shadow-lg hover:bg-muted transition-colors hidden md:flex"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => scrollContainer("right")}
            className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 bg-background border border-border rounded-full p-3 shadow-lg hover:bg-muted transition-colors hidden md:flex"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel */}
          <div
            id="video-carousel"
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 -mx-2 px-2"
            style={{ scrollbarWidth: "none" }}
          >
            {videoCards.map((card, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex-shrink-0 w-full max-w-[320px] snap-center"
              >
                {/* Card */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="relative cursor-pointer"
                  onClick={() => setActiveVideo(card.videoUrl)}
                >
                  <div className="relative aspect-[9/16] bg-black rounded-3xl overflow-hidden shadow-xl group">
                    <img
                      src={card.thumbnail}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white/90 hover:bg-white p-5 rounded-full shadow-lg transition-all"
                      >
                        <Play className="w-7 h-7 text-primary fill-primary" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* Text Content */}
                <div className="text-center mt-6 px-2">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
            onClick={() => setActiveVideo(null)}
          >
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              onClick={() => setActiveVideo(null)}
              className="absolute top-6 right-6 text-white hover:text-primary transition-colors bg-white/10 p-2 rounded-full backdrop-blur-md z-10"
            >
              <X className="w-8 h-8" />
            </motion.button>

            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-[380px] aspect-[9/16] bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            >
              <iframe
                src={activeVideo}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};