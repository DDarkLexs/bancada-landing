import { Link } from "react-router-dom";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";

const TermosPolitica = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-24 md:pt-28">
        <div className="container mx-auto max-w-4xl px-4 py-16 space-y-10">
          <header>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Termos de Uso e Política de Privacidade</h1>
            <p className="text-muted-foreground">Última atualização: 04 de maio de 2026.</p>
          </header>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">1. Aceitação dos termos</h2>
            <p className="text-muted-foreground">
              Ao utilizar o aplicativo Bancada, você concorda com estes termos e com esta
              política de privacidade.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">2. Dados coletados</h2>
            <p className="text-muted-foreground">Podemos coletar os seguintes dados:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Nome, e-mail, telefone e informações de autenticação.</li>
              <li>Dados de uso do app para melhoria da experiência.</li>
              <li>Informações necessárias para emissão de faturas e cumprimento legal.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">3. Finalidade do uso dos dados</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Fornecer e manter os serviços do aplicativo.</li>
              <li>Suporte ao cliente e comunicação operacional.</li>
              <li>Segurança, prevenção a fraude e conformidade legal.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">4. Compartilhamento de dados</h2>
            <p className="text-muted-foreground">
              Não vendemos dados pessoais. O compartilhamento ocorre apenas quando necessário
              para operação do serviço, obrigação legal ou proteção de direitos.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">5. Direitos do usuário</h2>
            <p className="text-muted-foreground">Você pode solicitar:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Acesso, correção ou atualização dos seus dados.</li>
              <li>Exclusão da conta e dos dados, conforme política aplicável.</li>
            </ul>
            <p className="text-muted-foreground">
              Para exercer esses direitos, entre em contato pelo e-mail
              <strong> antoniolexis2001@outlook.com</strong>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">6. Contato</h2>
            <p className="text-muted-foreground">
              Em caso de dúvidas, envie e-mail para <strong>antoniolexis2001@outlook.com</strong>.
            </p>
          </section>

          <div className="pt-4 border-t border-border">
            <Link to="/" className="text-primary hover:underline">
              ← Voltar para a página inicial
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermosPolitica;
