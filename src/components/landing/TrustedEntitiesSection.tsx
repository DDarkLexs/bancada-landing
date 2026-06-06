import { motion } from "framer-motion";
import { Box, Container, Heading, Text, Flex, Image } from "@chakra-ui/react";

const companies = [
  { name: "Empresa 1", logo: "/assets/entities/9b901930_d92c_43b4_825a_8ca33d48db1e_ge5m1vt39e_a9kfzt9swe.jpeg" },
  { name: "Empresa 2", logo: "/assets/entities/5f24a191_cf04_428e_9feb_ca1c37c07ae9_vhndac9xwq_pf8kbsoalm.png" },
  { name: "Casa de Aves", logo: "/assets/entities/casa_de_aves.jpeg" },
  { name: "F. P. Dalas", logo: "/assets/entities/F_P_DALAS.jpeg" },
  { name: "EMPRESA 4", logo: "/assets/entities/1f411006_882d_40ad_81f5_34f4e333d915_mnlc9en571_ui9ulg3nth.jpeg" },
  { name: "Empresa 5", logo: "/assets/entities/206d289f_3073_449b_9db6_41f8d3568a6d_aadcb1gpzn_5qfrt5xr5i.png" },
  { name: "Empresa 6", logo: "/assets/entities/b23558ea_e3bb_47ee_b184_ba6d3cc443bb_5m877x267s.jpeg" },
];

export const TrustedEntitiesSection = () => {
  return (
    <Box as="section" className="py-16 bg-background border-y border-border/50">
      <Container maxW="container.xl" px={4}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Box textAlign="center" mb={12}>
            <Text className="text-primary font-semibold text-sm uppercase tracking-widest">
              CONFIANÇA
            </Text>
            <Heading as="h2" className="text-3xl md:text-4xl font-bold text-foreground mt-3">
              Empresas que já confiam na Bancada
            </Heading>
          </Box>
        </motion.div>

        {/* Logos */}
        <Flex className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10 md:gap-x-20 lg:gap-x-24">
          {companies.map((company, index) => (
            <motion.div
              key={`${company.name}-${index}`}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.08,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              whileHover={{ 
                scale: 1.08, 
                y: -4,
                transition: { duration: 0.3 }
              }}
            >
              <Box className="group" display="flex" alignItems="center" justifyContent="center">
                <Image
                  src={company.logo}
                  alt={company.name}
                  h={{ base: "12", md: "16", lg: "28" }}
                  w="auto"
                  objectFit="contain"
                  filter="grayscale(100%)"
                  opacity={0.75}
                  transition="all 0.5s ease"
                  _groupHover={{
                    filter: "grayscale(0%)",
                    opacity: 1
                  }}
                />
              </Box>
            </motion.div>
          ))}
        </Flex>

        <Text className="text-center text-muted-foreground text-sm mt-12">
          E muitas outras empresas
        </Text>
      </Container>
    </Box>
  );
};