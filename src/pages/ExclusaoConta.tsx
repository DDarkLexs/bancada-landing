import { Link } from "react-router-dom";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";

const ExclusaoConta = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-24 md:pt-28">
        <div className="container mx-auto max-w-4xl px-4 py-16">

          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Exclusão de Conta e Dados – Bancada
          </h1>

          <p className="text-muted-foreground mb-8">
            Esta página descreve como solicitar a exclusão da sua conta do aplicativo
            <strong> Bancada</strong>.
          </p>

          {/* COMO APAGAR NA APP */}
          <section className="space-y-4 mb-10">
            <h2 className="text-xl font-semibold">Como apagar a conta na aplicação</h2>
            <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
              <li>Aceda à app <strong>Bancada</strong></li>
              <li>Vá até à <strong>Menu / Ficha de empresa </strong></li>
              <li>Clique em <strong>“Apagar conta”</strong></li>
              <li>Confirme a eliminação da conta</li>
            </ol>
          </section>

          {/* ALTERNATIVA */}
          <section className="space-y-4 mb-10">
            <h2 className="text-xl font-semibold">Pedido por suporte</h2>
            <p className="text-muted-foreground">
              Em alternativa, pode solicitar a exclusão através do email:
              <strong> antoniolexis2001@outlook.com</strong>
            </p>

            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Assunto: “Exclusão de Conta - Bancada”</li>
              <li>Incluir email ou telefone associado à conta</li>
            </ul>
          </section>

          {/* DADOS */}
          <section className="space-y-4 mb-10">
            <h2 className="text-xl font-semibold">Dados que serão excluídos</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Conta do utilizador</li>
              <li>Dados pessoais (nome, email, telefone)</li>
              <li>Histórico de utilização e preferências</li>
            </ul>
          </section>

          {/* RETENÇÃO */}
          <section className="space-y-4 mb-10">
            <h2 className="text-xl font-semibold">Retenção legal</h2>
            <p className="text-muted-foreground">
              Alguns dados podem ser mantidos pelo período exigido por lei para fins fiscais,
              legais ou prevenção de fraude.
            </p>
          </section>

          {/* PRAZO */}
          <section className="space-y-4 mb-10">
            <h2 className="text-xl font-semibold">Prazo de processamento</h2>
            <p className="text-muted-foreground">
              A exclusão é concluída em até <strong>15 dias úteis</strong> após confirmação da identidade.
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