import { Resend } from "resend";
import { NextResponse } from "next/server";

// Lazy initialization to avoid build errors
const getResend = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new Resend(apiKey);
};

const situacoesMap: Record<string, string> = {
  "primeiro-lancamento": "Primeiro grande lançamento vertical",
  "transicao": "Empresa em transição (pequeno → médio porte)",
  "reposicionamento": "Reposicionamento de empreendimento",
  "novo-projeto": "Novo projeto em planejamento",
  "outro": "Outro",
};

const cargosMap: Record<string, string> = {
  "ceo-diretor-geral": "CEO / Diretor Geral",
  "diretor-comercial": "Diretor Comercial",
  "diretor-marketing": "Diretor de Marketing",
  "diretor-incorporacao": "Diretor de Incorporação",
  "diretor-operacoes": "Diretor de Operações",
  "gerente-comercial": "Gerente Comercial",
  "gerente-marketing": "Gerente de Marketing",
  "gerente-vendas": "Gerente de Vendas",
  "gerente-projetos": "Gerente de Projetos",
  "gerente-lancamentos": "Gerente de Lançamentos",
  "coordenador-marketing": "Coordenador de Marketing",
  "coordenador-vendas": "Coordenador de Vendas",
  "coordenador-comercial": "Coordenador Comercial",
  "analista-marketing": "Analista de Marketing",
  "analista-inteligencia": "Analista de Inteligência de Mercado",
  "especialista-midia": "Especialista em Mídia",
  "corretor-imoveis": "Corretor de Imóveis",
  "proprietario-imobiliaria": "Proprietário de Imobiliária",
  "gerente-imobiliaria": "Gerente de Imobiliária",
  "socio-proprietario": "Sócio / Proprietário",
  "investidor": "Investidor",
  "consultor-imobiliario": "Consultor Imobiliário",
  "outro": "Outro",
};

const funcionariosMap: Record<string, string> = {
  "1-10": "1-10 funcionários",
  "11-50": "11-50 funcionários",
  "51-200": "51-200 funcionários",
  "201-500": "201-500 funcionários",
  "500+": "Mais de 500 funcionários",
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, cargo, company, funcionarios, situacao, message } = body;

    // Validação básica
    if (!name || !email || !phone || !cargo || !company || !funcionarios || !message) {
      return NextResponse.json(
        { error: "Campos obrigatórios faltando" },
        { status: 400 }
      );
    }

    const situacaoLabel = situacoesMap[situacao] || situacao || "Não informado";
    const cargoLabel = cargosMap[cargo] || cargo || "Não informado";
    const funcionariosLabel = funcionariosMap[funcionarios] || funcionarios || "Não informado";

    const resend = getResend();

    // Se não há API key, retorna sucesso mas loga o lead
    if (!resend) {
      console.log("Lead recebido (Resend não configurado):", { name, email, phone, cargo, company, funcionarios, situacao, message });
      return NextResponse.json({ success: true, message: "Lead registrado (email não configurado)" });
    }

    // Email para você (notificação de novo lead)
    await resend.emails.send({
      from: "Agência RPK <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      subject: `Novo Lead: ${name} - ${company}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #7c3aed; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">Novo Lead Recebido</h1>
          </div>

          <div style="padding: 30px; background: #f9fafb;">
            <h2 style="color: #7c3aed; margin-top: 0;">Informações do Contato</h2>

            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; width: 140px;">Nome:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Email:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
                  <a href="mailto:${email}" style="color: #7c3aed;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold;">WhatsApp:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
                  <a href="https://wa.me/55${phone.replace(/\D/g, "")}" style="color: #7c3aed;">${phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Cargo:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${cargoLabel}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Empresa:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${company}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Funcionários:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${funcionariosLabel}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Situação:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${situacaoLabel}</td>
              </tr>
            </table>

            <h3 style="color: #7c3aed; margin-top: 25px;">Mensagem:</h3>
            <div style="background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #7c3aed;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>

          <div style="padding: 20px; text-align: center; color: #6b7280; font-size: 14px;">
            <p>Este email foi enviado através do formulário de contato do site da Agência RPK.</p>
          </div>
        </div>
      `,
    });

    // Email de confirmação para o cliente
    await resend.emails.send({
      from: "Agência RPK <onboarding@resend.dev>",
      to: email,
      subject: "Recebemos seu contato - Agência RPK",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #7c3aed; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">Agência RPK</h1>
          </div>

          <div style="padding: 30px; background: #f9fafb;">
            <h2 style="color: #1f2937; margin-top: 0;">Olá, ${name.split(" ")[0]}!</h2>

            <p style="color: #4b5563; line-height: 1.6;">
              Recebemos sua mensagem e ficamos felizes pelo seu interesse em conversar conosco.
            </p>

            <p style="color: #4b5563; line-height: 1.6;">
              Nossa equipe vai analisar sua situação e entraremos em contato em até <strong>2 horas</strong>
              durante horário comercial (Seg-Sex, 9h-18h).
            </p>

            <div style="background: white; padding: 20px; border-radius: 8px; margin: 25px 0; border: 1px solid #e5e7eb;">
              <p style="margin: 0; color: #6b7280; font-size: 14px;">
                <strong>Precisa de uma resposta mais rápida?</strong><br>
                Fale diretamente pelo WhatsApp:
              </p>
              <a href="https://wa.me/5511978826684"
                 style="display: inline-block; margin-top: 10px; background: #25D366; color: white; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: bold;">
                Chamar no WhatsApp
              </a>
            </div>

            <p style="color: #4b5563; line-height: 1.6;">
              Até breve!<br>
              <strong>Equipe Agência RPK</strong>
            </p>
          </div>

          <div style="padding: 20px; text-align: center; color: #6b7280; font-size: 12px;">
            <p>Marketing Imobiliário Estratégico para Construtoras em Transição</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return NextResponse.json(
      { error: "Erro ao enviar mensagem" },
      { status: 500 }
    );
  }
}
