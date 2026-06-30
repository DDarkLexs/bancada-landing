import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { APP_LINK_URL } from "@/contants";
import { Button, HStack, Box, Image, IconButton, Container } from "@chakra-ui/react";

const navLinks = [
  { name: "Funcionalidades", href: "#features" },
  { name: "Como Funciona", href: "#how-it-works" },
  { name: "Preços", href: "#pricing" },
  { name: "Contacto", href: "#contact" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <Container maxW="container.xl" px={4}>
        <HStack justify="space-between" h={{ base: "16", md: "20" }}>
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <Box 
              w={{ base: "150px", md: "210px" }}
              rounded="md"
              overflow="hidden"
              transition="transform 0.3s ease"
              _groupHover={{ transform: "scale(1.05)" }}
            >
               <Image src="/1.png" alt="Bancada Logo" objectFit="contain" />
            </Box>
            {/* <span className="text-xl font-bold tracking-tight text-foreground">Bancada</span> */}
          </Link>

          {/* Desktop Navigation */}
          <HStack as="nav" gap={8} display={{ base: "none", md: "flex" }}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                </a>
              ))}
          </HStack>

          {/* Desktop CTA */}
          <Box display={{ base: "none", md: "block" }}>
            <Link to={APP_LINK_URL}>
              <Button 
                colorScheme="blue" 
                rounded="xl" 
                px={6}
                fontWeight="bold"
                boxShadow="0 4px 14px 0 rgba(59, 130, 246, 0.39)"
                _hover={{
                  transform: "translateY(-1px)",
                  boxShadow: "0 6px 20px rgba(59, 130, 246, 0.23)",
                }}
              >
                <Download className="w-4 h-4 mr-2" />
                Descarregar
              </Button>
            </Link>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            display={{ base: "flex", md: "none" }}
            variant="ghost"
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </IconButton>
        </HStack>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-b border-border absolute w-full"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-muted-foreground hover:text-primary py-2 border-b border-border/50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                {/* <Button variant="ghost" className="w-full">
                  Entrar
                </Button> */}
              <Link to={APP_LINK_URL}>
                <Button colorScheme="blue" rounded="xl" className="w-full">
                 Descarregar
                </Button>
            </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
