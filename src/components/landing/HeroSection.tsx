import { motion } from "framer-motion";
import { Download, CheckCircle2, Check, Zap, WifiOff, Package, BarChart3, Users, Headset } from "lucide-react";
import { Link } from "react-router-dom";
import { PhoneMockup } from "./PhoneMockup";
import { APP_LINK_URL, CONTACT_LINK_URL } from "@/contants";
import { Button, HStack, Icon, Text, Box, Image } from "@chakra-ui/react";

const benefits = [
  { label: "Faturas rápidas", icon: Zap },
  { label: "Funciona sem internet", icon: WifiOff },
  { label: "Controlo de stock", icon: Package },
  { label: "Relatórios claros", icon: BarChart3 },
  { label: "Gestão de clientes", icon: Users },
  { label: "Suporte dedicado", icon: Headset },
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
              A ferramenta completa para gerir vendas, stock e emitir relatório.
            </p>

            {/* Benefits */}
            <HStack 
              wrap="wrap" 
              justify={{ base: "center", lg: "start" }} 
              gap={6} 
              mb={12}
            >
              {benefits.map((benefit) => (
                <HStack key={benefit.label} gap={2}>
                  <Icon 
                    as={benefit.icon} 
                    color="blue.400" 
                    boxSize={5} 
                  />
                  <Text fontWeight="medium" color="muted.foreground">{benefit.label}</Text>
                </HStack>
              ))}
            </HStack>

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
                       boxShadow="0 4px 14px 0 rgba(59, 130, 246, 0.39)"
                _hover={{
                  transform: "translateY(-1px)",
                  boxShadow: "0 6px 20px rgba(59, 130, 246, 0.23)",
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
                      w="35px"
                      h="35px"
                      alt="WhatsApp"
                      
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