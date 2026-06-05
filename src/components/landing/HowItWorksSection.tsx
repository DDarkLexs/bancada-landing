import { motion, Variants } from "framer-motion";
import { UserPlus, FileEdit, Send, CreditCard } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Crie o seu Negócio",
    description: "Registe a sua empresa em 2 minutos. Sem cartão de crédito, sem compromisso.",
  },
  {
    icon: CreditCard,
    title: "Efetue o Pagamento",
    description: "Escolha o plano e anexe o comprovativo de pagamento.",
  },
  {
    icon: FileEdit,
    title: "Configure o Negócio",
    description: "Adicione o seu logótipo e dados fiscais.",
  },
  {
    icon: Send,
    title: "Crie e Envie Faturas",
    description: "Preencha os dados do cliente e serviço. Envie com um toque.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-[3px]">
            PROCESSO SIMPLES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Comece a faturar em{" "}
            <span className="text-foreground">4 passos simples</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Da criação da conta à primeira fatura em menos de 5 minutos.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {steps.map((step) => (
            <motion.div
              key={step.title}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="group border border-border/60 rounded-3xl p-8 h-full flex flex-col hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <step.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-[15px] leading-relaxed flex-1">
                {step.description}
              </p>

              {/* Blue Line */}
              <div className="h-0.5 w-10 bg-primary mt-8 rounded-full group-hover:w-16 transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};