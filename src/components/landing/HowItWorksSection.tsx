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
    icon: FileEdit,
    number: "02",
    title: "Configure o Negócio",
    description: "Adicione o seu logótipo, dados fiscais e personalize os templates.",
  },
  {
    icon: Send,
    number: "03",
    title: "Crie e Envie Faturas",
    description: "Preencha os dados do cliente e serviço. Envie com um toque.",
  },
  {
    icon: CreditCard,
    number: "04",
    title: "Receba Pagamentos",
    description: "Acompanhe pagamentos e receba notificações em tempo real.",
  },
];

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-secondary/30">
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
            Como Funciona
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Comece a faturar em{" "}
            <span className="text-gradient">4 passos simples</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Da criação da conta à primeira fatura em menos de 5 minutos. Simples assim.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}

              <div className="text-center">
                {/* Number badge */}
                <div className="relative inline-block mb-6">
                  <div className="w-24 h-24 rounded-2xl gradient-primary flex items-center justify-center shadow-glow">
                    <step.icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-foreground text-background text-sm font-bold flex items-center justify-center">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
