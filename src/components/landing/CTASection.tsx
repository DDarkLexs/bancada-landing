import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { APP_LINK_URL } from "@/contants";
import { Button, Icon, HStack } from "@chakra-ui/react";

export const CTASection = () => {
  return (
    <section className="py-20 md:py-32 bg-zinc-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-violet-500/10 blur-3xl" />
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
            className="w-20 h-20 rounded-2xl  flex items-center justify-center mx-auto mb-8 "
          >
            <img 
              src="/bancada_2.png" 
              alt="Icon" 
              className="w-50 h-50 rounded-3xl" 
            />
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Pronto para simplificar a sua faturação?
          </h2>
          
          <p className="text-lg text-zinc-400 mb-10 max-w-xl mx-auto">
            Descubra o Bancada, o novo sistema de faturação angolano no telemóvel que torna a emissão de faturas simples, rápida e legal para o seu negócio.
          </p>

          <div className="flex justify-center">
            <HStack justify="center" width="full" px={4}>
              <Link to={APP_LINK_URL} className="w-full sm:w-auto">
                <Button
                  size="lg"
                  height="60px"
                  width={{ base: "full", sm: "auto" }}
                  px={{ base: 6, sm: 10 }}
                  bg="white"
                  color="black"
                  fontSize="lg"
                  fontWeight="bold"
                  rounded="xl"
                  _hover={{
                    bg: "white",
                    transform: "translateY(-2px)",
                  }}
                  transition="all 0.3s ease"
                >
                  <Icon as={Download}  />
                  Descarregar App
                </Button>
              </Link>
            </HStack>
          </div>

          <p className="mt-8 text-sm text-zinc-500">
            Configuração em menos de 5 minutos • Suporte dedicado
          </p>
        </motion.div>
      </div>
    </section>
  );
};