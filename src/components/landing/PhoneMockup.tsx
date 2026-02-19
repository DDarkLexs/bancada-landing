import { motion } from "framer-motion";
import { FileText, TrendingUp, Bell, CheckCircle } from "lucide-react";

export const PhoneMockup = () => {
  return (
    <div className="relative mx-auto"> {/* centraliza se precisar */}
      <a href="#" className="inline-block">
        <img
          src="/pos2.png"
          alt="Phone Mockup"
          className="
            w-64          /* tamanho padrão em mobile (~256px) */
            sm:w-80       /* a partir de sm (~640px) */
            md:w-96       /* a partir de md (~768px) */
            lg:w-[420px]  /* opcional: ainda maior em telas grandes */
            h-auto
            mx-auto       /* centraliza a imagem */
          "
        />
      </a>
    </div>
  );
};
