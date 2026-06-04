import { motion } from "framer-motion";
import { Download, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { PhoneMockup } from "./PhoneMockup";
import { APP_LINK_URL, CONTACT_LINK_URL } from "@/contants";
import { Button, HStack, Icon, Text, Box, Image } from "@chakra-ui/react";

const benefits = [
  "Faturas rápidas",
  "Controlo de stock",
  "Relatórios claros",
  "Gestão de clientes",
  "Suporte dedicado",
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-20 flex mt-5 items-center overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(at_30%_20%,rgba(59,130,246,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(at_70%_60%,rgba(139,92,246,0.06),transparent_60%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[calc(100vh-80px)]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left pt-8 lg:pt-0"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/20 bg-primary/5 mb-8">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">
                Disponível para Android
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tighter text-foreground mb-8">
              Faturação simples.<br />
              Negócio <span className="text-gradient">controlado</span>.
            </h1>

            <p className="text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-10">
              A ferramenta completa para gerir vendas, stock e relatório.
            </p>

            {/* Benefits */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-3 mb-12">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* CTAs - Melhorados com Chakra UI */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <HStack 
                gap={4} 
                justify={{ base: "center", lg: "start" }}
                flexDirection={{ base: "column", sm: "row" }}
              >
                {/* Botão Principal - Download */}
                <Link to={APP_LINK_URL}>
                  <Button
                    size="lg"
                    colorScheme="blue"
                    height="68px"
                    width={{ base: "full", sm: "auto" }}
                    px={10}
                    fontSize="lg"
                    fontWeight="semibold"
                    rounded="2xl"
                    shadow="lg"
                    _hover={{
                      shadow: "xl",
                      transform: "translateY(-2px)",
                    }}
                    transition="all 0.3s ease"
                  >
                    <Icon as={Download} boxSize={5} mr={2} />
                    Descarregar App
                  </Button>
                </Link>

                {/* Botão WhatsApp */}
                <Link to={CONTACT_LINK_URL}>
                  <Button
                    size="lg"
                    height="68px"
                    width={{ base: "full", sm: "auto" }}
                    px={8}
                    fontSize="lg"
                    fontWeight="semibold"
                    rounded="2xl"
                    border="2px solid"
                    borderColor="gray.300"
                    bg="white"
                    color="gray.800"
                    _hover={{
                      bg: "#25D366",
                      color: "white",
                      borderColor: "#25D366",
                      transform: "translateY(-2px)",
                    }}
                    transition="all 0.3s ease"
                  >
                    <Image
                      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                      w="25px"
                      h="25px"
                      alt="WhatsApp"
                      mr={2}
                    />
                    Falar no WhatsApp
                  </Button>
                </Link>
              </HStack>
            </motion.div>
          </motion.div>

          {/* Right Side - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: [0, -20, 0] }}
              transition={{
                  delay: 1.2,
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <PhoneMockup />
              
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1  }}
              
                className="absolute -top-6 -right-6 bg-card border border-border rounded-2xl px-5 py-3 shadow-xl hidden lg:flex items-center gap-3"
              >
                <div className="text-emerald-500">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="text-sm">
                  <p className="font-semibold">Fatura em 28s</p>
                  <p className="text-muted-foreground">Média dos utilizadores</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};