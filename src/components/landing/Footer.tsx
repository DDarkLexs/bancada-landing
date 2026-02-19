import { Smartphone, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  produto: [
    { name: "Funcionalidades", href: "#features" },
    { name: "Preços", href: "#pricing" },
    { name: "Integrações", href: "#" },
    { name: "Atualizações", href: "#" },
  ],
  empresa: [
    { name: "Sobre Nós", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Carreiras", href: "#" },
    { name: "Contacto", href: "#contact" },
  ],
  recursos: [
    { name: "Central de Ajuda", href: "#" },
    { name: "Documentação API", href: "#" },
    { name: "Guias de Faturação", href: "#" },
    { name: "Webinars", href: "#" },
  ],
  legal: [
    { name: "Termos de Serviço", href: "#" },
    { name: "Política de Privacidade", href: "#" },
    { name: "RGPD", href: "#" },
    { name: "Cookies", href: "#" },
  ],
};

export const Footer = () => {
  return (
    <footer id="contact" className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-20 h-20 rounded-xl  flex items-center justify-center">
                <img src="/icon.png" className="text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">Bancada</span>
            </a>
            <p className="text-muted-foreground mb-6 max-w-xs">
              A forma mais simples de criar e enviar faturas profissionais diretamente do seu telemóvel.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <span>antoniolexis2001@outlook.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span>+244 957 195 382</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Luanda, Angola</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Produto</h4>
            <ul className="space-y-3">
              {footerLinks.produto.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Recursos</h4>
            <ul className="space-y-3">
              {footerLinks.recursos.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2026 Bancada. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-muted-foreground px-3 py-1 rounded-full bg-secondary">
              Made in Angola
            </span>
            {/* <span className="text-xs text-muted-foreground px-3 py-1 rounded-full bg-success/10 text-success">
              ✓ Certificado AT
            </span> */}
          </div>
        </div>
      </div>
    </footer>
  );
};
