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
    features: ["Acesso básico", "Suporte por email"],
    cta: "Começar Grátis",
    popular: false,
  },
  {
    id: "profissional",
    name: "Profissional",
    price: "20.710",
    description: "Para freelancers e pequenos negócios",
    features: ["Tudo do Base", "Suporte prioritário", "Relatórios avançados", "Até 10 usuários"],
    cta: "Experimentar 14 dias grátis",
    popular: true,
  },
  {
    id: "empresarial",
    name: "Empresarial",
    price: "53.410",
    description: "Para equipas e empresas",
    features: ["Tudo do Profissional", "Suporte dedicado", "Integrações avançadas", "Usuários ilimitados"],
    cta: "Falar com Vendas",
    popular: false,
  },
];

const mapPlanToCard = (record: any): Plan => ({
  id: record.id,
  name: record.title || "Plano",
  price: typeof record.price === "number" ? record.price.toLocaleString("pt-PT") : "0",
  description: record.description || "",
  features: [],
  cta: "Escolher Plano",
  popular: (record.title || "").toLowerCase().includes("profissional"),
});

const getPlans = async (): Promise<Plan[]> => {
  if (!pb) return fallbackPlans;

  try {
    const response = await pb.collection("Plan").getFullList({ sort: "price" });
    if (!response.length) return fallbackPlans;
    return response.map(mapPlanToCard);
  } catch (error) {
    console.error("Erro ao buscar planos:", error);
    return fallbackPlans;
  }
};

export const PricingSection = () => {
  const { data: plans = fallbackPlans } = useQuery({
    queryKey: ["pricing-plans"],
    queryFn: getPlans,
  });

  return (
    <section id="pricing" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(at_50%_20%,rgba(59,130,246,0.06),transparent_70%)]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-[3px]">PREÇOS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Planos que <span className="text-gradient">crescem consigo</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comece grátis e escale conforme o seu negócio cresce. Valores em Kwanza.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -12 }}
              className={`relative rounded-3xl p-8 h-full flex flex-col border transition-all duration-300 group ${
                plan.popular
                  ? "border-primary/40 bg-gradient-to-br from-primary to-indigo-600 text-white shadow-2xl shadow-primary/20"
                  : "bg-card border-border hover:border-primary/30 hover:shadow-xl"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded-full text-sm font-semibold shadow-md">
                    <Sparkles className="w-4 h-4" />
                    Mais Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-10">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={`text-sm mb-6 min-h-[48px] ${plan.popular ? "opacity-90" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>

                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold tracking-tighter">Kz {plan.price}</span>
                  <span className={`text-lg ${plan.popular ? "opacity-80" : "text-muted-foreground"}`}>/mês</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.popular ? "text-white" : "text-emerald-500"}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};