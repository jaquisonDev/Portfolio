import jaquisonProfileImg from "../assets/images/jaquison_profile_1789864321566.jpg";
import developerCodingImg from "../assets/images/developer_coding_1789864333215.jpg";
import laptopCodeMugImg from "../assets/images/laptop_code_mug_1789864342936.jpg";
import projectTasksImg from "../assets/images/project_tasks_mobile_1789864353165.jpg";
import projectEcommerceImg from "../assets/images/project_ecommerce_1789864362633.jpg";
import projectDashboardImg from "../assets/images/project_dashboard_1789864374684.jpg";
import { ProjectData, SkillCategory } from "../types";

export const developerInfo = {
  name: "Jaquison Souza",
  brand: "JaquisonDev",
  role: "Desenvolvedor Fullstack",
  roleLine1: "Desenvolvedor",
  roleLine2: "Fullstack",
  tagline:
    "Desenvolvedor de software apaixonado por criar soluções que geram impacto.",
  education: [
    "Formado na faculdade Uniasselvi, em Análise e Desenvolvimento de Sistemas, cursando pós graduação em Arquitetura de Sistemas e Engenharia de Software.",
    "Atuação em todas as etapas do desenvolvimento: da análise à entrega e evolução de produtos.",
    "Foco em código limpo, boas práticas no Frontend, quanto no backend.",
    "Amo estar sempre em crescente aprendizagem.",
  ],
  contact: {
    email: "jaquison1000@gmail.com",
    phone: "(73) 9 88416705",
    phoneClean: "5573988416705",
    linkedin: "linkedin.com/in/seuperfil",
    linkedinUrl: "https://www.linkedin.com/in/seuperfil",
    github: "github.com/jaquison1000",
    githubUrl: "https://github.com/jaquison1000",
    location: "Bahia, Brasil",
  },
  images: {
    profile: jaquisonProfileImg,
    coding: developerCodingImg,
    laptopMug: laptopCodeMugImg,
  },
};

export const skillsExercised: string[] = [
  "Desenvolvimento web (frontend e backend)",
  "Programação orientada a objetos",
  "Banco de dados e modelagem",
  "Segurança e boas práticas de código",
];

export const techStack: SkillCategory[] = [
  {
    category: "LINGUAGENS",
    items: ["Javascript", "SQL"],
  },
  {
    category: "FRAMEWORKS",
    items: ["React", "Node.js", "Next.js"],
  },
  {
    category: "BANCO DE DADOS",
    items: ["MySQL", "MongoDB"],
  },
  {
    category: "FERRAMENTAS",
    items: ["Git", "Github"],
  },
];

export const projectsList: ProjectData[] = [
  {
    id: "mobile-tasks",
    number: "01",
    title: "aplicativo móvel para gerenciamento de tarefas",
    description:
      "Aplicativo intuitivo que ajuda equipes a organizar tarefas e aumentar a produtividade no dia a dia.",
    image: projectTasksImg,
    category: "Mobile / Produtividade",
    tags: ["React Native", "Node.js", "UI/UX", "REST API"],
    features: [
      "Dashboard com gráficos circulares de produtividade e status de tarefas",
      "Listagem categorizada com prioridades, etiquetas e prazos de entrega",
      "Visão detalhada de tarefas com cronômetro integrado e histórico de atividades",
      "Sincronização em tempo real e modo offline resiliente",
    ],
    metrics: "+45% de foco e organização nas rotinas diárias das equipes",
  },
  {
    id: "web-ecommerce",
    number: "02",
    title: "plataforma web para e-commerce",
    description:
      "Plataforma completa com catálogo de produtos, carrinho, pagamentos e painel administrativo.",
    image: projectEcommerceImg,
    category: "Web / E-commerce",
    tags: ["React", "Next.js", "Node.js", "MySQL", "Stripe"],
    features: [
      "Catálogo interativo com busca preditiva, filtros dinâmicos e variações",
      "Fluxo de checkout otimizado com cálculo de frete e múltiplos métodos de pagamento",
      "Painel administrativo para controle em tempo real de estoque, pedidos e clientes",
      "Arquitetura responsiva com SEO avançado e carregamento ultra veloz",
    ],
    metrics: "Carregamento sub-segundo e conversão otimizada",
  },
  {
    id: "automacao-empresarial",
    number: "03",
    title: "sistema interno de automação empresarial",
    description:
      "Solução que automatiza processos internos, reduzindo erros e otimizando tempo operacional.",
    image: projectDashboardImg,
    category: "SaaS / Enterprise",
    tags: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS", "Docker"],
    features: [
      "Automação de fluxos de trabalho operacionais e geração de relatórios",
      "Dashboard analítico com métricas em tempo real (taxas de sucesso, execuções)",
      "Controle de permissões baseado em funções (RBAC) com auditoria de acessos",
      "Notificações instantâneas e integração com ferramentas de comunicação",
    ],
    metrics: "Redução de até 70% no retrabalho operacional",
  },
];
