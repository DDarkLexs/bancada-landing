import { motion, Variants } from "framer-motion";
import {
  FileText,
  Zap,
  Globe,
  BarChart3,
  Users,
  Smartphone,
  Package,
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Faturas Profissionais",
    description: "Crie faturas em menos de 30 segundos. Design moderno e profissional.",
  },
  {
    icon: Globe,
    title: "Multi-moeda",
    description: "Fature em euros ou qualquer outra moeda. Ideal para clientes internacionais.",
  },
  {
    icon: Package,
    title: "Gestão de Stock",
    description: "Controle de inventário integrado. Atualização automática ao faturar.",
  },
  {
    icon: BarChart3,
    title: "Relatórios Detalhados",
    description: "Acompanhe receitas, despesas e IVA com dashboards intuitivos.",
  },
  {
    icon: Users,
    title: "Gestão de Clientes",
    description: "Registo rápido de clientes para emissão ágil de faturas.",
  },
  {
    icon: Smartphone,
    title: "100% Mobile",
    description: "Fature de qualquer lugar. Interface otimizada para telemóvel.",
  },
  {
    icon: Zap,
    title: "Envio Instantâneo",
    description: "Envie por email, WhatsApp ou SMS. O cliente recebe na hora.",
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

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 md:py-32 bg-background">
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
            FUNCIONALIDADES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Tudo o que precisa para faturar como um pro
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Ferramentas poderosas, interface limpa e intuitiva.
          </p>
        </motion.div>

        {/* Features Grid - Estilo semelhante à imagem */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="group  border border-border/60 rounded-3xl p-8 h-full flex flex-col hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              {/* Icon - Estilo da imagem */}
              <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-[15px] leading-relaxed flex-1">
                {feature.description}
              </p>

              {/* Blue Line - Como na imagem */}
              <div className="h-0.5 w-10 bg-primary mt-8 rounded-full group-hover:w-16 transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};