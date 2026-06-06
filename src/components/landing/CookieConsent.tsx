import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Text,
  Stack,
  Card,
  CloseButton,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent-accepted");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent-accepted", "true");
    setIsVisible(false);
  };

  const handleReject = () => {
    // Opcional: podes guardar que o user rejeitou
    localStorage.setItem("cookie-consent-accepted", "false");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <Box
      position="fixed"
      bottom={{ base: "4", md: "6" }}
      left={{ base: "50%", md: "auto" }}
      right={{ base: "auto", md: "6" }}
      transform={{ base: "translateX(-50%)", md: "none" }}
      zIndex="9999"
      w="full"
      maxW="420px"
      px={4}
      className="animate-in  fade-in slide-in-from-bottom-4 duration-500"
    >
      <Card.Root
        boxShadow="2xl"
        border="1px solid"
        borderColor="border"
        bg="zinc.400"
        borderRadius="xl"
        overflow="hidden"
      >
        <Card.Body p={5}>
          <VStack align="stretch" gap={4}>
            {/* Cabeçalho */}
            <HStack justify="space-between">
              <Text fontWeight="semibold" fontSize="lg" color="foreground">
                🍪 Cookies
              </Text>
              <CloseButton
                size="sm"
                onClick={handleReject}
                aria-label="Fechar banner de cookies"
              />
            </HStack>

            {/* Conteúdo */}
            <Text fontSize="sm" color="muted.foreground" lineHeight="relaxed">
              Utilizamos cookies para melhorar a sua experiência, analisar o
              tráfego e personalizar conteúdo. Ao continuar a navegar, aceita a
              nossa{" "}
              <Box
                as={Link}
                {...({ to: "/termos-e-politica" })}
                color="blue.500"
                textDecoration="underline"
                _hover={{ color: "blue.600" }}
                fontWeight="medium"
              >
                Política de Privacidade
              </Box>
              .
            </Text>

            {/* Botões */}
            <Stack direction={{ base: "column", sm: "row" }} gap={3} pt={2}>
              <Button
                variant="outline"
                colorScheme="gray"
                size="sm"
                onClick={handleReject}
                flex={1}
                className="hover:bg-gray-100 dark:hover:bg-zinc-800"
              >
                Recusar
              </Button>

              <Button
                colorScheme="blue"
                size="sm"
                onClick={handleAccept}
                flex={1}
                fontWeight="semibold"
              >
                Aceitar Todos
              </Button>
            </Stack>
          </VStack>
        </Card.Body>
      </Card.Root>
    </Box>
  );
};