import { motion } from "framer-motion";
import { ArrowRight, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="py-20 md:py-32 bg-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-8 shadow-glow"
          >
            <Smartphone className="w-10 h-10 text-primary-foreground" />
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-6">
            Pronto para simplificar a sua faturação?
          </h2>
          <p className="text-lg text-background/70 mb-10 max-w-xl mx-auto">
            Junte-se a milhares de empresas portuguesas que já faturam de forma simples e legal com o FaturaMóvel.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="xl"
              className="bg-background text-foreground hover:bg-background/90 group"
            >
              Descarregar
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="border-background/30 text-background hover:bg-background/10"
            >
              Agendar Demonstração
            </Button>
          </div>

          <p className="mt-8 text-sm text-background/50">
            Configuração em menos de 5 minutos • Sem cartão de crédito • Suporte em português
          </p>
        </motion.div>
      </div>
    </section>
  );
};
