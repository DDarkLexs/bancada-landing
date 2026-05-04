import { Link } from "react-router-dom";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";

const ExclusaoConta = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-24 md:pt-28">
        <div className="container mx-auto max-w-4xl px-4 py-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Exclusão de Conta e Dados</h1>
          <p className="text-muted-foreground mb-8">
            Esta página descreve como solicitar a exclusão da sua conta do aplicativo Bancada,
            conforme exigido pela Google Play.
          </p>

          <section className="space-y-4 mb-10">
            <h2 className="text-xl font-semibold">Como pedir a exclusão</h2>
            <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
              <li>Envie um e-mail para <strong>antoniolexis2001@outlook.com</strong>.</li>
              <li>No assunto, utilize: <strong>"Exclusão de Conta - Bancada"</strong>.</li>
              <li>
                Informe no corpo do e-mail o número de telefone/e-mail cadastrado para
                identificarmos a conta correta.
              </li>
            </ol>
          </section>

          <section className="space-y-4 mb-10">
            <h2 className="text-xl font-semibold">O que será excluído</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Conta de acesso ao aplicativo.</li>
              <li>Dados pessoais associados à conta.</li>
              <li>Registros e preferências vinculados ao usuário.</li>
            </ul>
          </section>

          <section className="space-y-4 mb-10">
            <h2 className="text-xl font-semibold">Prazo de processamento</h2>
            <p className="text-muted-foreground">
              Após confirmação da identidade do titular, a solicitação é processada em até
              <strong> 15 dias úteis</strong>.
            </p>
          </section>

          <section className="space-y-4 mb-10">
            <h2 className="text-xl font-semibold">Retenção legal</h2>
            <p className="text-muted-foreground">
              Alguns dados podem ser mantidos pelo período exigido por lei para cumprimento de
              obrigações fiscais, regulatórias, prevenção a fraude e defesa de direitos.
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

export default ExclusaoConta;
