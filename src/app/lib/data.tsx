export interface InterestItem {
  id: string;
  label: string;
  description: string;
  tag: string;
}

export interface PhilosophyPillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  points: string[];
}

export interface TrajectoryItem {
  id: string;
  title: string;
  period: string;
  subtitle: string;
  description: string;
  active?: boolean;
  institution?: string;
  tags: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  img: string;
  category: string;
}

export interface CourseItem {
  id: string;
  title: string;
  institution: string;
  period: string;
  status: "Em andamento" | "Concluído";
  completed: boolean;
  highlights: string[];
}

export const PERSONAL_INFO = {
  name: "Matheus Mendonça Trindade",
  shortName: "Matheus Mendonça",
  role: "Estudante de Psicologia",
  period: "9º Período",
  institution: "UniNassau",
  location: "Aracaju, Sergipe",
  email: "matheusmt33@hotmail.com",
  phoneDisplay: "(79) 98800-593",
  whatsappUrl: "https://wa.me/557998800593",
  linkedinUrl: "https://www.linkedin.com/in/matheusadmpsic/",
  instagramUrl: "https://www.instagram.com/matheusmt_bjj?igsh=MXBoaXMyYmI1NjYxNA==",
  heroHeadline: "Compreender o ser humano com escuta atenta, ética e rigor acadêmico.",
  heroSubheadline:
    "Graduando em Psicologia (9º período) na UniNassau com formação técnica em Administração. Atuação prática em clínica-escola sob abordagem Fenomenológico-Existencial e Acompanhamento Terapêutico (AT) escolar com foco em neurodiversidade (TEA).",
};

export const PILLARS: PhilosophyPillar[] = [
  {
    id: "clinica",
    title: "Clínica & Escuta Fenomenológica",
    subtitle: "Atendimento supervisionado focado na experiência singular",
    description:
      "Prática clínica desenvolvida na clínica-escola sob rigorosa supervisão docente. A abordagem fenomenológico-existencial orienta uma postura de escuta sem julgamentos prévios, priorizando o sentido atribuído pelo próprio sujeito à sua existência.",
    category: "Prática Clínica",
    points: [
      "Escuta acolhedora e postura ética intransigente",
      "Supervisão clínica acadêmica contínua",
      "Foco no sentido e na autonomia do paciente",
    ],
  },
  {
    id: "at-inclusao",
    title: "Acompanhamento Terapêutico (AT)",
    subtitle: "Inclusão escolar e desenvolvimento no TEA",
    description:
      "Atuação diária no ambiente escolar junto a estudante com Transtorno do Espectro Autista. Mediação pedagógica, manejo de regulação emocional e fomento de interações sociais saudáveis entre pares.",
    category: "Neurodiversidade",
    points: [
      "Mediação ativa no contexto educacional",
      "Estratégias individualizadas de inclusão e rotina",
      "Trabalho colaborativo com equipe pedagógica e família",
    ],
  },
  {
    id: "visao-adm",
    title: "Estrutura & Visão Organizacional",
    subtitle: "Formação técnica prévia pelo SENAC",
    description:
      "A base em Administração confere rigor metodológico na condução de projetos, organização de rotinas e leitura aprofundada da relação entre indivíduo, produtividade e saúde mental nas organizações.",
    category: "Gestão e Processos",
    points: [
      "Compreensão das dinâmicas de trabalho e estresse",
      "Planejamento estratégico de intervenções",
      "Comunicação interpessoal assertiva e resolução de problemas",
    ],
  },
  {
    id: "mente-corpo",
    title: "Saúde Integral & Estilo de Vida",
    subtitle: "Sinergia entre saúde mental, jiu-jitsu e disciplina física",
    description:
      "A prática contínua de artes marciais (Jiu-Jitsu), corrida e musculação complementa a compreensão da saúde integral: o corpo e a mente como unidade viva indivisível no enfrentamento da ansiedade e no cultivo do bem-estar.",
    category: "Equilíbrio e Saúde",
    points: [
      "Psicoeducação ética nas redes sociais",
      "Disciplina e resiliência transferidas do esporte à clínica",
      "Promoção de hábitos de vida sustentáveis",
    ],
  },
];

export const TRAJECTORY_EVENTS: TrajectoryItem[] = [
  {
    id: "at-tea",
    title: "Acompanhamento Terapêutico (AT) Escolar",
    period: "Em andamento • 2025 - Presente",
    subtitle: "Ambiente Escolar • Criança com TEA",
    description:
      "Atuação na facilitação do processo de aprendizagem e inclusão social de criança no espectro autista em ambiente escolar regular. Aplicação de técnicas de acolhimento, manejo comportamental e estímulo à autonomia.",
    active: true,
    institution: "Colégio Particular / Acompanhamento Individualizado",
    tags: ["Inclusão", "TEA", "Psicologia Escolar", "Mediação"],
  },
  {
    id: "clinica-escola",
    title: "Estágio Clínico Supervisionado",
    period: "9º Período • 2025 - 2026",
    subtitle: "Clínica-Escola de Psicologia — UniNassau",
    description:
      "Atendimento psicoterapêutico individual a adultos sob supervisão semanal rigorosa de professores mestres e doutores. Elaboração de prontuários, estudos de caso e condução de processo clínico fundamentado na fenomenologia existencial.",
    active: true,
    institution: "UniNassau Aracaju",
    tags: ["Clínica", "Fenomenologia", "Supervisão", "Ética"],
  },
  {
    id: "projeto-escolar",
    title: "Projeto de Intervenção em Pertencimento Escolar",
    period: "Intervenção Acadêmica • 2024",
    subtitle: "Ensino Fundamental II (9º Ano)",
    description:
      "Elaboração, coordenação e avaliação de oficinas grupais e rodas de conversa voltadas a fortalecer os vínculos de pertencimento e reduzir conflitos de convivência entre adolescentes em transição escolar.",
    institution: "Escola Pública de Aracaju",
    tags: ["Psicologia Social", "Intervenção Grupal", "Juventude"],
  },
  {
    id: "tecnico-adm",
    title: "Formação Técnica em Administração",
    period: "Formação Concluída • SENAC",
    subtitle: "Gestão, Finanças e Comportamento Organizacional",
    description:
      "Capacitação sólida em gestão de projetos, processos de RH, comunicação corporativa e logística. Alicerce fundamental para compreender as dores e dinâmicas contemporâneas do trabalhador.",
    institution: "SENAC Sergipe",
    tags: ["Gestão", "RH", "Processos", "Liderança"],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "estagio-1",
    title: "Prática Clínica & Acolhimento",
    subtitle: "Clínica-Escola UniNassau",
    description: "Atendimento supervisionado focado no respeito à singularidade e na escuta sensível do paciente.",
    img: "/estagio.jpeg",
    category: "Clínica",
  },
  {
    id: "estagio-2",
    title: "Manejo e Discussão de Casos",
    subtitle: "Supervisão Profissional",
    description: "Alinhamento teórico com preceptores, aprofundando o manejo ético e os dilemas existenciais.",
    img: "/estagio2.jpeg",
    category: "Acadêmico",
  },
  {
    id: "estagio-3",
    title: "Rotina e Vivência Prática",
    subtitle: "Ambiente de Aprendizado",
    description: "Estruturação de intervenções e acompanhamento sistemático de desenvolvimento socioemocional.",
    img: "/estagio3.jpeg",
    category: "Prática",
  },
  {
    id: "producao-conteudo",
    title: "Psicoeducação Responsável",
    subtitle: "Comunicação Acessível",
    description: "Tradução de temas da psicologia para uma linguagem humana, combatendo desinformação sobre saúde mental.",
    img: "/producao.jpeg",
    category: "Comunicação",
  },
  {
    id: "descoberta-academica",
    title: "Pesquisa & Vivência Acadêmica",
    subtitle: "Compromisso Científico",
    description: "Constante atualização bibliográfica em artigos, congressos e literatura especializada.",
    img: "/descoberta.jpeg",
    category: "Pesquisa",
  },
];

export const COURSES_DATA: CourseItem[] = [
  {
    id: "graduacao-psicologia",
    title: "Bacharelado em Psicologia",
    institution: "Centro Universitário Maurício de Nassau (UniNassau)",
    period: "2021 — 2026 (9º Período)",
    status: "Em andamento",
    completed: false,
    highlights: [
      "Ênfase em Psicologia Clínica e Escolar",
      "Prática clínica supervisionada ativa",
      "Bolsista e participante de projetos integradores",
    ],
  },
  {
    id: "tecnico-adm-senac",
    title: "Técnico em Administração",
    institution: "Serviço Nacional de Aprendizagem Comercial (SENAC)",
    period: "Concluído com distinção",
    status: "Concluído",
    completed: true,
    highlights: [
      "Gestão de pessoas e comportamento organizacional",
      "Administração de rotinas e planejamento estratégico",
      "Habilidades em liderança e resolução de problemas",
    ],
  },
];

export const CRP_ETHICS_STATEMENT = {
  title: "Aviso de Compromisso Ético e Acadêmico",
  text:
    "Conforme o Código de Ética Profissional do Psicólogo e as normas do Conselho Federal de Psicologia (CFP / CRP-19), esclarece-se que Matheus Mendonça Trindade é acadêmico de graduação em Psicologia. Todas as práticas clínicas e de estágio ocorrem estritamente sob supervisão docente qualificada no âmbito da clínica-escola e termos de compromisso de estágio curricular. Não são realizados atendimentos clínicos particulares autônomos prévios à colação de grau e obtenção do registro profissional definitivo.",
};
