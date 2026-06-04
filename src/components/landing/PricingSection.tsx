import { motion, Variants } from "framer-motion";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { pb } from "@/lib/pocketbase";
import { Button, Icon } from "@chakra-ui/react";

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

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
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
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className={`relative rounded-[2rem] p-8 h-full flex flex-col border transition-all duration-300 group ${
                plan.popular
                  ? "border-primary/50 bg-zinc-950 text-white shadow-2xl shadow-primary/10 order-first md:order-none"
                  : "bg-card border-border/60 hover:border-primary/30 hover:shadow-lg"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-2 bg-primary text-white px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                    <Sparkles className="w-4 h-4" />
                    Mais Popular
                  </div>
                </div>
              )}

              <div className="mb-8">
                <h3 className={`text-xl font-bold mb-2 ${plan.popular ? "text-white" : "text-foreground"}`}>
                  {plan.name}
                </h3>
                <p className={`text-[15px] leading-relaxed min-h-[45px] ${plan.popular ? "text-zinc-400" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl md:text-4xl font-bold tracking-tight">Kz {plan.price}</span>
                  <span className={`text-sm font-medium ${plan.popular ? "text-zinc-500" : "text-muted-foreground"}`}>/mês</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4  flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-[15px]">
                    <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${plan.popular ? "bg-primary/20" : "bg-primary/10"}`}>
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className={plan.popular ? "text-zinc-300" : "text-muted-foreground"}>{feature}</span>
                  </li>
                ))}
              </ul>

             {/*  <Button
                width="full"
                height="56px"
                rounded="2xl"
                colorScheme={plan.popular ? "blue" : "gray"}
                variant={plan.popular ? "solid" : "outline"}
                fontWeight="bold"
              >
                {plan.cta}
                <Icon as={ArrowRight} ml={2} />
              </Button> */}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};