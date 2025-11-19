# POC Pix (DaisyUI + TailwindCSS version)

Este projeto é um aplicativo de demonstração de transações Pix, desenvolvido com Next.js e React. Ele foi pensado para desenvolvedores frontend intermediários e avançados, com experiência em Angular e SPAs. O projeto combina formulários multi-step, componentes interativos e animações, permitindo explorar conceitos de SPA, renderização cliente/servidor e boas práticas de componentização em um projeto escalável.

## Next.js e estrutura geral

O Next.js foi escolhido por permitir criar SPAs eficientes, garantindo que a navegação entre páginas use apenas fetch e scripts, sem recarregar o documento; combinando componentes server e client, controlados com `"use client"` para interatividade no cliente; e oferecendo renderização otimizada, organização clara via App Router e pré-carregamento de JS compartilhado, facilitando demonstrações de performance e estrutura para desenvolvedores front-end.

O projeto em si foi estruturado utilizando um tipo de arquitetura vertical conhecida como FDD (Feature Driven Development) inspirada no padrão [BulletProof React](https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md). Componentes e funções globais e compartilhados são colocados na pasta `src/components` e `src/lib`. O projeto tem apenas uma funcionalidade atualmente: Transações. Componentes e tipos relacionados a ela estão situados na pasta `src/features/transactions` e seguem o padrão da pasta `src` de `components`, `lib`, `providers`, `types` e assim por diante. Isso garante que código específico dessa feature esteja condesado em apenas uma localização estruturada e escalável.

## Bibliotecas utilizadas

No projeto, utilizamos algumas bibliotecas que ajudam a construir o aplicativo e a demonstrar conceitos importantes:

| Biblioteca | Uso no projeto | Justificativa |
| --- | --- | --- |
| **DaisyUI + TailwindCSS** | DaisyUI é um *plugin* do Tailwind que fornece componentes e temas prontos usando apenas classes. | Fornece uma base visual consistente e responsiva, permitindo demonstrar conceitos de layout, responsividade e design system sem perder tempo estilizando do zero. |
| **React Hook Form** | Gerenciamento de formulário | Permite demonstrar validação de campos, formulários multi-step e reutilização de lógica de formulário de forma didática. |
| **Framer Motion** | Animações nos formulários e cards | Mostra como animar componentes interativos, transições de passos em formulários e efeitos visuais modernos sem complicações. |
| **Day.js** | Formatação de datas | Simples, leve e permite padronizar a exibição de datas. |
| **Remix Icons** | Ícones | Escolhida por permitir escrita familiar para os alunos que vem do Angular, utilizando o elemento `<i>` |
| **Sonner** | Notificações toast | Permite exibir alertas, sucessos ou erros de forma elegante e didática durante interações do usuário, como criação de transações. |
| **react-imask** | Máscaras de input | Demonstra como aplicar máscaras em campos de formulário, como CPF, CNPJ, ou valores monetários, melhorando a experiência do usuário. |
| **Axios** | Requisições HTTP | Facilita a comunicação com APIs, demonstrando fetch de dados, tratamento de respostas e integração frontend-backend de maneira prática. |

## Proposta

Propomos desenvolver um formulário que simula um fluxo Pix simples e em múltiplos passos, acessível por meio do botão nas tela inicial “Fazer Novo Pix” que leva à uma página com o formulário descrito abaixo.

O componente **CreatePixForm (`src/features/transactions/forms/create-pix-form`)** foi estruturado como um **formulário multi-step**:

- **Divisão em steps**: Cada etapa (`KeyTypeStep`, `KeyStep`, `AmountStep`, `ConfirmStep`) é um componente isolado.
    - Ensina **componentização**, separação de responsabilidades e reutilização de código.
- **Validação incremental**: Cada step valida apenas os campos daquela etapa.
    - Demonstra **validação local vs global** e uso de `trigger` do React Hook Form.
- **Animações com Framer Motion**: Transições entre steps.
    - Permite demonstrar conceitos de **UX e interatividade em SPAs**, como animações condicionais de entrada/saída de componentes.
- **FormProvider**: Todos os steps compartilham o mesmo estado do formulário.
    - Ensina sobre **contextos e estado global** em formulários complexos.

- Adicionalmente podemos construir o contexto do zero para demonstrar como é a criação de um provider no React.

## Questões a serem discutidas (30/10)

1. Escolha e execução da biblioteca DaisyUI.
2. Ícones “inline” com RemixIcons.
3. Uso de `Suspense` no componente `KeyTypeStep.tsx`.
4. Servidor My JSON Server.
5. Output estático com `output: "export"`.
