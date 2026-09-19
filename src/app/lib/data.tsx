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
    "Estudante de Psicologia (9º período) na UniNassau com formação técnica em Administração. Vivências acadêmicas em estágio clínico supervisionado sob abordagem Fenomenológico-Existencial e práticas de mediação e inclusão escolar.",
};

export const PILLARS: PhilosophyPillar[] = [
  {
    id: "clinica",
    title: "Estágio Clínico Supervisionado",
    subtitle: "Prática acadêmica na clínica-escola sob abordagem fenomenológica",
    description:
      "Prática clínica desenvolvida no contexto da clínica-escola sob rigorosa supervisão docente. A abordagem fenomenológico-existencial orienta uma postura de escuta acolhedora, priorizando a singularidade e o sentido atribuído pela pessoa atendida à sua existência.",
    category: "Estágio Supervisionado",
    points: [
      "Escuta acolhedora orientada pelos princípios éticos da Psicologia",
      "Supervisão clínica acadêmica contínua",
      "Foco na singularidade e autonomia da pessoa atendida",
    ],
  },
  {
    id: "at-inclusao",
    title: "Inclusão & Mediação Escolar",
    subtitle: "Vivências em contexto educacional e neurodiversidade",
    description:
      "Experiência supervisionada em ambiente escolar envolvendo estratégias de acolhimento, mediação pedagógica, promoção da autonomia e fortalecimento das interações entre pares no contexto da inclusão.",
    category: "Inclusão Escolar",
    points: [
      "Mediação ativa no contexto educacional",
      "Estratégias de organização da rotina e promoção da autonomia",
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
      "Compreensão das dinâmicas de trabalho e saúde no trabalho",
      "Planejamento estruturado de intervenções",
      "Comunicação interpessoal assertiva e resolução de problemas",
    ],
  },
  {
    id: "mente-corpo",
    title: "Saúde Integral & Estilo de Vida",
    subtitle: "Sinergia entre saúde mental, prática esportiva e disciplina",
    description:
      "A prática contínua de artes marciais (Jiu-Jitsu), corrida e musculação complementa a compreensão da saúde integral: o corpo e a mente como unidade viva no enfrentamento do estresse e no cultivo do bem-estar.",
    category: "Equilíbrio e Saúde",
    points: [
      "Psicoeducação ética e científica nas redes sociais",
      "Disciplina e resiliência transferidas do esporte à formação",
      "Promoção de hábitos de vida sustentáveis",
    ],
  },
];

export const TRAJECTORY_EVENTS: TrajectoryItem[] = [
  {
    id: "at-tea",
    title: "Experiência em Inclusão Escolar",
    period: "Em andamento • 2025 - Presente",
    subtitle: "Contexto Educacional • Mediação e Autonomia",
    description:
      "Experiência supervisionada em contexto educacional regular, atuando na facilitação da inclusão, mediação de processos de aprendizagem e participação em estratégias de acolhimento e promoção da autonomia.",
    active: true,
    institution: "Contexto Educacional / Mediação Escolar",
    tags: ["Inclusão", "Autonomia", "Psicologia Escolar", "Mediação"],
  },
  {
    id: "clinica-escola",
    title: "Estágio Clínico Supervisionado",
    period: "9º Período • 2025 - 2026",
    subtitle: "Clínica-Escola de Psicologia — UniNassau",
    description:
      "Experiência acadêmica em atendimentos psicoterapêuticos individuais no contexto da Clínica-Escola de Psicologia da UNINASSAU, sob supervisão semanal de professores mestres e doutores, com fundamentação na Fenomenologia Existencial.",
    active: true,
    institution: "UniNassau Aracaju",
    tags: ["Clínica-Escola", "Fenomenologia", "Supervisão", "Ética"],
  },
  {
    id: "projeto-escolar",
    title: "Projeto de Intervenção em Pertencimento Escolar",
    period: "Intervenção Acadêmica • 2024",
    subtitle: "Ensino Fundamental II (9º Ano)",
    description:
      "Elaboração, coordenação e avaliação de oficinas grupais e rodas de conversa voltadas a fortalecer os vínculos de pertencimento e convivência ética entre estudantes em transição escolar.",
    institution: "Escola Pública de Aracaju",
    tags: ["Psicologia Social", "Intervenção Grupal", "Juventude"],
  },
  {
    id: "tecnico-adm",
    title: "Formação Técnica em Administração",
    period: "Formação Concluída • SENAC",
    subtitle: "Gestão, Finanças e Comportamento Organizacional",
    description:
      "Capacitação sólida em gestão de projetos, processos de RH, comunicação corporativa e logística. Alicerce fundamental para compreender as dinâmicas contemporâneas das relações de trabalho.",
    institution: "SENAC Sergipe",
    tags: ["Gestão", "RH", "Processos", "Liderança"],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "estagio-1",
    title: "Estágio Clínico Supervisionado",
    subtitle: "Clínica-Escola UniNassau",
    description: "Atendimento supervisionado focado no respeito à singularidade e na escuta sensível da pessoa atendida.",
    img: "/estagio.jpeg",
    category: "Clínica",
  },
  {
    id: "estagio-2",
    title: "Discussão e Supervisão de Casos",
    subtitle: "Supervisão Docente",
    description: "Alinhamento teórico-metodológico com preceptores, aprofundando o manejo ético e os dilemas existenciais.",
    img: "/estagio2.jpeg",
    category: "Acadêmico",
  },
  {
    id: "estagio-3",
    title: "Inclusão e Mediação Escolar",
    subtitle: "Ambiente Educacional",
    description: "Participação em estratégias de organização da rotina e promoção da autonomia no ambiente escolar.",
    img: "/estagio3.jpeg",
    category: "Prática",
  },
  {
    id: "producao-conteudo",
    title: "Psicoeducação e Divulgação Científica",
    subtitle: "Comunicação Acessível",
    description: "Tradução de temas da psicologia para uma linguagem acessível e humana, orientada por referências científicas.",
    img: "/producao.jpeg",
    category: "Comunicação",
  },
  {
    id: "descoberta-academica",
    title: "Pesquisa & Produção Acadêmica",
    subtitle: "Compromisso Científico",
    description: "Constante atualização bibliográfica em artigos, congressos e literatura especializada em Psicologia.",
    img: "/descoberta.jpeg",
    category: "Pesquisa",
  },
];

export const COURSES_DATA: CourseItem[] = [
  {
    id: "graduacao-psicologia",
    title: "Graduação em Psicologia — em andamento",
    institution: "Centro Universitário Maurício de Nassau (UniNassau)",
    period: "2021 — 2026 (9º Período)",
    status: "Em andamento",
    completed: false,
    highlights: [
      "Ênfase em Psicologia Clínica e Escolar",
      "Prática clínica supervisionada ativa na clínica-escola",
      "Participação em projetos de extensão e intervenção acadêmica",
    ],
  },
  {
    id: "tecnico-adm-senac",
    title: "Técnico em Administração",
    institution: "Serviço Nacional de Aprendizagem Comercial (SENAC)",
    period: "Formação Técnica Concluída",
    status: "Concluído",
    completed: true,
    highlights: [
      "Gestão de pessoas e comportamento organizacional",
      "Administração de rotinas e planejamento estratégico",
      "Habilidades em liderança ética e resolução de problemas",
    ],
  },
];

export const CRP_ETHICS_STATEMENT = {
  title: "Aviso de Compromisso Ético e Acadêmico",
  text:
    "Conforme o Código de Ética Profissional do Psicólogo e as orientações dos Conselhos de Psicologia (CFP/CRP), esclarece-se que Matheus Mendonça Trindade é acadêmico de graduação em Psicologia (9º período). Este portfólio tem caráter estritamente acadêmico e curricular. Todas as práticas clínicas e experiências formativas descritas nesta página são realizadas exclusivamente no âmbito de estágio supervisionado com orientação docente na Clínica-Escola da UNINASSAU e convênios institucionais. Não são realizados atendimentos psicológicos particulares autônomos prévios à conclusão do curso e respectiva inscrição profissional no Conselho Regional de Psicologia.",
};
