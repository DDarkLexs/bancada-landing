import { Link } from "react-router-dom";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";

const TermosPolitica = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-24 md:pt-28">
        <div className="container mx-auto max-w-4xl px-4 py-16 space-y-12">

          <header>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Termos de Serviço e Política de Privacidade
            </h1>
            <p className="text-muted-foreground">
              Última atualização: 05 de maio de 2026
            </p>
          </header>

          {/* INTRODUÇÃO */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Introdução</h2>
            <p className="text-muted-foreground leading-relaxed">
              Bem-vindo ao sistema de faturação móvel de António Lugogo ("Nós", "Nosso", "Nossa" ou "Empresa"). 
              Estes Termos de Serviço e Política de Privacidade ("Termos") regem o seu acesso e uso do nosso sistema 
              de faturação móvel para dispositivos Android (o "Serviço"). Ao aceder ou usar o Serviço, você concorda 
              em ficar vinculado a estes Termos. Se não concordar com estes Termos, não utilize o Serviço.
            </p>
          </section>

          {/* DEFINIÇÕES */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Definições</h2>
            <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
              <li><strong>Serviço:</strong> Refere-se ao sistema de faturação móvel fornecido pela Empresa para dispositivos Android.</li>
              <li><strong>Utilizador:</strong> Refere-se a qualquer pessoa que aceda ou utilize o Serviço.</li>
              <li><strong>Conta:</strong> Refere-se à conta criada pelo Utilizador para aceder e utilizar o Serviço.</li>
              <li><strong>Dados Pessoais:</strong> Refere-se a qualquer informação que possa identificar direta ou indiretamente um indivíduo.</li>
              <li><strong>Dispositivo Android:</strong> Refere-se a um dispositivo móvel que executa o sistema operativo Android.</li>
            </ul>
          </section>

          {/* ACEITAÇÃO DOS TERMOS */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Aceitação dos Termos</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ao criar uma conta, aceder ou utilizar o Serviço, você reconhece que leu, compreendeu e concordou 
              em ficar vinculado a estes Termos, incluindo a nossa Política de Privacidade.
            </p>
          </section>

          {/* ELEGIBILIDADE */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Elegibilidade</h2>
            <p className="text-muted-foreground leading-relaxed">
              Você deve ter pelo menos 18 anos de idade para utilizar o Serviço. Ao utilizar o Serviço, você declara 
              e garante que tem idade legal para celebrar um contrato vinculativo.
            </p>
          </section>

          {/* CONTAS DE UTILIZADOR */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Contas de Utilizador</h2>
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="font-semibold mb-2">Criação de Conta</h3>
                <p>Para aceder a certas funcionalidades do Serviço, poderá ser necessário criar uma conta. Você concorda em fornecer informações precisas, completas e atualizadas durante o processo de registo.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Segurança da Conta</h3>
                <p>Você é responsável por manter a confidencialidade das suas credenciais de conta e por todas as atividades que ocorram sob a sua conta. Você concorda em notificar-nos imediatamente sobre qualquer uso não autorizado da sua conta.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Encerramento de Conta</h3>
                <p>Podemos suspender ou encerrar a sua conta a qualquer momento, por qualquer motivo, incluindo violação destes Termos. Você pode encerrar a sua conta a qualquer momento, entrando em contacto com o nosso suporte.</p>
              </div>
            </div>
          </section>

          {/* FATURAÇÃO E PAGAMENTOS */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Faturação e Pagamentos</h2>
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="font-semibold mb-2">Preços</h3>
                <p>Os preços dos nossos serviços de faturação serão exibidos dentro da aplicação ou no nosso website. Reservamo-nos o direito de alterar os preços a qualquer momento, com aviso prévio.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Métodos de Pagamento</h3>
                <p>Aceitamos os seguintes métodos de pagamento: IBAN ou Express. Ao fornecer informações de pagamento, você declara e garante que está autorizado a utilizar o método de pagamento selecionado.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Faturação Recorrente</h3>
                <p>Se o seu serviço incluir faturação recorrente, você autoriza-nos a cobrar automaticamente o seu método de pagamento selecionado em intervalos regulares, conforme acordado.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Reembolsos</h3>
                <p>Todas as vendas são finais, a menos que especificado de outra forma. As políticas de reembolso serão detalhadas na aplicação ou no nosso website.</p>
              </div>
            </div>
          </section>

          {/* POLÍTICA DE PRIVACIDADE */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">Política de Privacidade</h2>
            
            <div className="space-y-6 text-muted-foreground">
              <p>A sua privacidade é importante para nós. A nossa Política de Privacidade descreve como recolhemos, usamos e divulgamos as suas informações pessoais.</p>

              <div>
                <h3 className="font-semibold mb-3">Informações Recolhidas</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Informações de Registo:</strong> Nome, endereço de e-mail, número de telefone, informações de pagamento.</li>
                  <li><strong>Dados de Utilização:</strong> Informações sobre como você utiliza o Serviço, incluindo tipo de dispositivo.</li>
                  <li><strong>Dados de Transação:</strong> Detalhes das transações realizadas através do Serviço.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Uso das Informações</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Fornecer e manter o Serviço.</li>
                  <li>Processar transações e enviar notificações relacionadas.</li>
                  <li>Melhorar e personalizar a sua experiência no Serviço.</li>
                  <li>Comunicar consigo sobre o Serviço, incluindo atualizações e ofertas promocionais.</li>
                  <li>Detetar, prevenir e resolver problemas técnicos e de segurança.</li>
                  <li>Cumprir obrigações legais.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Partilha de Informações</h3>
                <p>Não vendemos, trocamos ou alugamos as suas informações pessoais a terceiros. Podemos partilhar informações com:</p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li><strong>Fornecedores de Serviços:</strong> Terceiros que nos ajudam a operar o Serviço (processadores de pagamento, serviços de alojamento, etc.).</li>
                  <li><strong>Requisitos Legais:</strong> Se exigido por lei ou em resposta a um processo legal válido.</li>
                  <li><strong>Transferências de Negócios:</strong> Em conexão com uma fusão, aquisição ou venda de ativos.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Segurança dos Dados</h3>
                <p>Implementamos medidas de segurança razoáveis para proteger as suas informações pessoais. No entanto, nenhum método de transmissão pela Internet ou armazenamento eletrónico é 100% seguro.</p>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Retenção de Dados</h3>
                <p>Reteremos as suas informações pessoais apenas pelo tempo necessário para cumprir os propósitos para os quais foram recolhidas, incluindo obrigações legais, resolução de disputas e aplicação dos nossos acordos.</p>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Os Seus Direitos de Privacidade</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>O direito de aceder e obter uma cópia dos seus dados pessoais.</li>
                  <li>O direito de retificar quaisquer dados pessoais imprecisos.</li>
                  <li>O direito de solicitar a eliminação dos seus dados pessoais.</li>
                  <li>O direito de se opor ao processamento dos seus dados pessoais.</li>
                  <li>O direito de solicitar a restrição do processamento dos seus dados pessoais.</li>
                  <li>O direito à portabilidade dos dados.</li>
                </ul>
                <p className="mt-3">Para exercer estes direitos, entre em contacto connosco através das informações fornecidas na secção "Contacto".</p>
              </div>
            </div>
          </section>

          {/* PROPRIEDADE INTELECTUAL */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Propriedade Intelectual</h2>
            <p className="text-muted-foreground leading-relaxed">
              Todo o conteúdo, funcionalidades e originalidade do Serviço (incluindo software, texto, gráficos, logótipos, ícones, imagens e a sua seleção e arranjo) são propriedade da ANFER TECH ou dos seus licenciadores e são protegidos por leis de direitos autorais, marcas registadas e outras leis de propriedade intelectual.
            </p>
          </section>

          {/* LIMITAÇÃO DE RESPONSABILIDADE */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Limitação de Responsabilidade</h2>
            <p className="text-muted-foreground leading-relaxed">
              Na extensão máxima permitida pela lei aplicável, em nenhum caso a ANFER TECH, os seus diretores, funcionários, parceiros, agentes, fornecedores ou afiliados serão responsáveis por quaisquer danos indiretos, incidentais, especiais, consequenciais ou punitivos, incluindo perda de lucros, dados, uso, boa vontade ou outras perdas intangíveis, resultantes do seu acesso ou uso ou incapacidade de aceder ou usar o Serviço.
            </p>
          </section>

          {/* INDEMNIZAÇÃO */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Indemnização</h2>
            <p className="text-muted-foreground leading-relaxed">
              Você concorda em defender, indemnizar e isentar de responsabilidade a ANFER TECH e os seus licenciados, funcionários, contratados, agentes e diretores contra todas e quaisquer reivindicações, danos, obrigações, perdas, responsabilidades, custos e despesas (incluindo honorários advocatícios) resultantes de:
              <br />(a) seu uso e acesso ao Serviço;
              <br />(b) uma violação destes Termos;
              <br />(c) conteúdo publicado no Serviço.
            </p>
          </section>

          {/* ALTERAÇÕES */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Alterações aos Termos</h2>
            <p className="text-muted-foreground leading-relaxed">
              Reservamo-nos o direito de modificar ou substituir estes Termos a qualquer momento. Se uma revisão for material, faremos esforços razoáveis para fornecer pelo menos 30 dias de aviso antes que os novos termos entrem em vigor.
            </p>
          </section>

          {/* LEI APLICÁVEL */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Lei Aplicável e Jurisdição</h2>
            <p className="text-muted-foreground leading-relaxed">
              Estes Termos serão regidos e interpretados de acordo com as leis de ANFER TECH. Qualquer disputa será submetida à jurisdição exclusiva dos tribunais localizados em ANFER TECH.
            </p>
          </section>

          {/* CONTACTO */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Contacto</h2>
            <p className="text-muted-foreground">
              Se tiver alguma dúvida sobre estes Termos, entre em contacto connosco:
            </p>
            <p className="text-muted-foreground">
              <strong>Email:</strong> antoniolexis2001@outlook.com<br />
              <strong>Website:</strong>{" "}
              <a
                href="https://bancada-landing.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://bancada-landing.vercel.app/
              </a>
            </p>
          </section>

          <div className="pt-8 border-t border-border">
            <Link to="/" className="text-primary hover:underline flex items-center gap-2">
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