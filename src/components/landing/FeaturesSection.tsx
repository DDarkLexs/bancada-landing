import { motion } from "framer-motion";
import {
  FileText,
  Zap,
  Shield,
  Globe,
  BarChart3,
  Users,
  Clock,
  Smartphone,
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Faturas Profissionais",
    description: "Templates personalizáveis com a sua marca. Crie faturas em menos de 30 segundos.",
  },
  {
    icon: Zap,
    title: "Envio Instantâneo",
    description: "Envie por email, WhatsApp ou SMS. O seu cliente recebe na hora.",
  },
/*   {
    icon: Shield,
    title: "Certificado AT",
    description: "100% em conformidade com a Autoridade Tributária portuguesa.",
  }, */
  {
    icon: Globe,
    title: "Multi-moeda",
    description: "Fature em euros ou qualquer outra moeda. Perfeito para clientes internacionais.",
  },
  {
    icon: BarChart3,
    title: "Relatórios Detalhados",
    description: "Acompanhe receitas, despesas e IVA com dashboards intuitivos.",
  },
  {
    icon: Users,
    title: "Gestão de Clientes",
    description: "Base de dados completa com histórico de faturas e pagamentos.",
  },
  {
    icon: Clock,
    title: "Faturas Recorrentes",
    description: "Automatize cobranças mensais e poupe tempo em tarefas repetitivas.",
  },
  {
    icon: Smartphone,
    title: "100% Mobile",
    description: "Fature de qualquer lugar. Tudo o que precisa, no seu bolso.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 md:py-32 bg-background">
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
            Funcionalidades
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Tudo o que precisa para{" "}
            <span className="text-gradient">faturar como um pro</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Funcionalidades poderosas, interface simples. Criado para quem quer focar no negócio, não em papelada.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group relative p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-card"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Hover glow */}
              <div className="absolute inset-0 -z-10 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
