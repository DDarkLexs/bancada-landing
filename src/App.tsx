import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ExclusaoConta from "./pages/ExclusaoConta";
import TermosPolitica from "./pages/TermosPolitica";
import { createSystem, defaultConfig, defineConfig,ChakraProvider } from "@chakra-ui/react";
import { ColorModeProvider } from "@/components/ui/color-mode"

const queryClient = new QueryClient();

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: { value: "#1d57b5" },
        secondary: { value: "#64748b" },
      },
    },
  },
  cssVarsRoot: ":where(:root, :host)",
})

const system = createSystem(defaultConfig, config)


const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
       <ChakraProvider value={system}>
        <ColorModeProvider forcedTheme="dark">
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/exclusao-conta" element={<ExclusaoConta />} />
          <Route path="/termos-e-politica" element={<TermosPolitica />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </ColorModeProvider>
      </ChakraProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
