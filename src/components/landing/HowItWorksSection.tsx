import { motion } from "framer-motion";
import { UserPlus, FileEdit, Send, CreditCard } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    number: "01",
    title: "Crie a sua Conta",
    description: "Registe-se em 2 minutos. Sem cartão de crédito, sem compromisso.",
  },
  {
    icon: CreditCard,
    number: "02",
    title: "Efetue o Pagamento",
    description: "Escolha o plano e anexe o comprovativo de pagamento.",
  },
  {
    icon: FileEdit,
    number: "03",
    title: "Configure o Negócio",
    description: "Adicione o seu logótipo e dados fiscais.",
  },
  {
    icon: Send,
    number: "04",
    title: "Crie e Envie Faturas",
    description: "Preencha os dados do cliente e serviço. Envie com um toque.",
  },
];

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
          className="text-center max-w-3xl mx-auto mb-20"
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

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-card border border-border rounded-3xl p-8 h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:border-primary/20"
            >
              {/* Number Indicator */}
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center text-2xl font-bold text-muted-foreground group-hover:text-primary transition-colors">
                  {step.number}
                </div>
                <step.icon className="w-9 h-9 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-4 leading-tight">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-[15px]">
                  {step.description}
                </p>
              </div>

              {/* Subtle bottom accent */}
              <div className="h-1 w-12 bg-primary/10 group-hover:bg-primary/40 rounded-full mt-8 transition-all" />
            </motion.div>
          ))}
        </div>

        {/* Optional connector line for large screens */}
        <div className="hidden lg:block absolute left-1/2 top-[42%] w-4/5 h-px bg-gradient-to-r from-transparent via-border to-transparent -z-10" />
      </div>
    </section>
  );
};