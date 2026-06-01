import { motion } from "framer-motion";

const companies = [
  { name: "Empresa 3", logo: "/assets/entities/9b901930_d92c_43b4_825a_8ca33d48db1e_ge5m1vt39e_a9kfzt9swe.jpeg" },
  { name: "Empresa 3", logo: "/assets/entities/5f24a191_cf04_428e_9feb_ca1c37c07ae9_vhndac9xwq_pf8kbsoalm.png" },
  { name: "Empresa 3", logo: "/assets/entities/casa_de_aves.jpeg" },
  { name: "Empresa 3", logo: "/assets/entities/F_P_DALAS.jpeg" },
  { name: "Empresa 3", logo: "/assets/entities/206d289f_3073_449b_9db6_41f8d3568a6d_aadcb1gpzn_5qfrt5xr5i.png" },
  { name: "Empresa 3", logo: "/assets/entities/b23558ea_e3bb_47ee_b184_ba6d3cc443bb_5m877x267s.jpeg" },
];

export const TrustedEntitiesSection = () => {
  return (
    <section className="py-12 bg-secondary/10 border-y border-border/50">
      <div className="container mx-auto px-4">
        <p className="text-center text-lg font-medium text-muted-foreground uppercase tracking-widest mb-10">
          Empresas que confiam na Bancada
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 lg:gap-32">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default"
            >
              {company.logo ? (
                <img src={company.logo} alt={company.name} className="h-16 md:h-24 w-auto object-contain" />
              ) : (
                <span className="text-xl md:text-2xl font-bold text-foreground/80 tracking-tighter italic">
                  {company.name}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};