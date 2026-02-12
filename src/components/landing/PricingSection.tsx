import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { pb } from "@/lib/pocketbase";

type Plan = {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
};

const fallbackPlans: Plan[] = [
  {
    id: "base",
    name: "Base",
    price: "7.000",
    description: "Perfeito para começar",
    features: [],
    cta: "Começar Grátis",
    popular: false,
  },
  {
    id: "profissional",
    name: "Profissional",
    price: "20.710",
    description: "Para freelancers e pequenos negócios",
    features: [],
    cta: "Experimentar 14 dias grátis",
    popular: true,
  },
  {
    id: "empresarial",
    name: "Empresarial",
    price: "53.410",
    description: "Para equipas e empresas",
    features: [],
    cta: "Falar com Vendas",
    popular: false,
  },
];

const mapPlanToCard = (record: { id: string; title?: string; price?: number; description?: string }): Plan => ({
  id: record.id,
  name: record.title || "Plano",
  price: typeof record.price === "number" ? record.price.toLocaleString("pt-PT") : "0",
  description: record.description || "",
  features: [],
  cta: "Escolher Plano",
  popular: (record.title || "").toLowerCase() === "profissional",
});

const getPlans = async (): Promise<Plan[]> => {
  if (!pb) {
    return fallbackPlans;
  }

  const response = await pb.collection("Plan").getFullList<{ id: string; title?: string; price?: number; description?: string }>({
    sort: "price",
  });

  if (!response.length) {
    return fallbackPlans;
  }

  return response.map(mapPlanToCard);
};

export const PricingSection = () => {
  const { data: plans = fallbackPlans } = useQuery({
    queryKey: ["pricing-plans"],
    queryFn: getPlans,
  });

  return (
    <section id="pricing" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Preços</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Planos que <span className="text-gradient">crescem consigo</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comece grátis e escale conforme o seu negócio cresce. Valores em Kwanza. Sem surpresas, sem taxas escondidas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 ${
                plan.popular ? "gradient-primary text-primary-foreground shadow-glow scale-105" : "bg-card border border-border/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 px-4 py-1.5 rounded-full bg-foreground text-background text-sm font-semibold">
                    <Sparkles className="w-4 h-4" />
                    Mais Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-xl font-semibold mb-2 ${plan.popular ? "" : "text-foreground"}`}>{plan.name}</h3>
                <p className={`text-sm mb-4 ${plan.popular ? "opacity-80" : "text-muted-foreground"}`}>{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold">Kz {plan.price}</span>
                  <span className={`${plan.popular ? "opacity-80" : "text-muted-foreground"}`}>/mês</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? "" : "text-success"}`} />
                    <span className={`text-sm ${plan.popular ? "" : "text-foreground"}`}>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

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
