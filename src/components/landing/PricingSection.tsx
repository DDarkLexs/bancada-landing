import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Base",
    price: "7.000",
    description: "Perfeito para começar",
    features: [
   /*    "Até 10 faturas/mês",
      "1 utilizador",
      "Certificação AT",
      "Envio por email",
      "Suporte por email", */
    ],
    cta: "Começar Grátis",
    popular: false,
  },
  {
    name: "Profissional",
    price: "20.710",
    description: "Para freelancers e pequenos negócios",
    features: [
    /*   "Faturas ilimitadas",
      "3 utilizadores",
      "Certificação AT",
      "Envio por email, SMS e WhatsApp",
      "Relatórios avançados",
      "Faturas recorrentes",
      "Suporte prioritário",
      "Integração bancária", */
    ],
    cta: "Experimentar 14 dias grátis",
    popular: true,
  },
  {
    name: "Empresarial",
    price: "53.410",
    description: "Para equipas e empresas",
    features: [
  /*     "Tudo do Profissional",
      "Utilizadores ilimitados",
      "API completa",
      "Múltiplas empresas",
      "Gestor de conta dedicado",
      "SLA garantido",
      "Onboarding personalizado", */
    ],
    cta: "Falar com Vendas",
    popular: false,
  },
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Preços
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Planos que{" "}
            <span className="text-gradient">crescem consigo</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comece grátis e escale conforme o seu negócio cresce. Valores em Kwanza. Sem surpresas, sem taxas escondidas.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 ${
                plan.popular
                  ? "gradient-primary text-primary-foreground shadow-glow scale-105"
                  : "bg-card border border-border/50"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 px-4 py-1.5 rounded-full bg-foreground text-background text-sm font-semibold">
                    <Sparkles className="w-4 h-4" />
                    Mais Popular
                  </div>
                </div>
              )}

              {/* Plan details */}
              <div className="text-center mb-8">
                <h3 className={`text-xl font-semibold mb-2 ${plan.popular ? "" : "text-foreground"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${plan.popular ? "opacity-80" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold">Kz {plan.price}</span>
                  <span className={`${plan.popular ? "opacity-80" : "text-muted-foreground"}`}>/mês</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? "" : "text-success"}`} />
                    <span className={`text-sm ${plan.popular ? "" : "text-foreground"}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA - descomentei para exemplo completo */}
            {/*   <Button
                variant={plan.popular ? "secondary" : "hero"}
                size="lg"
                className={`w-full ${plan.popular ? "bg-background text-foreground hover:bg-background/90" : ""}`}
              >
                {plan.cta}
              </Button> */}
            </motion.div>
          ))}
        </div>

        {/* Money back guarantee */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-muted-foreground mt-12"
        >
          🔒 Garantia de reembolso de 30 dias. Cancele a qualquer momento.
        </motion.p>
      </div>
    </section>
  );
};