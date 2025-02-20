import { ScheduleItem, Track } from './types';

export const locations = {
  auditorio: {
    name: 'Auditório Ruy Hulse - Unesc',
    mapUrl: 'https://maps.app.goo.gl/eQTYHeqnzR3swLyt5'
  },
  crio: {
    name: 'Crio - Centro de Inovação',
    mapUrl: 'https://maps.app.goo.gl/WCu7xZN6FNL7LSda7'
  }
};

export const tracks: Track[] = [
  {
    id: 'main',
    name: 'Palco Principal',
    color: 'bg-blue-500',
  },
  {
    id: 'workshop',
    name: 'Workshops',
    color: 'bg-purple-500',
  },
  {
    id: 'panel',
    name: 'Painéis',
    color: 'bg-green-500',
  },
];

export const schedule: ScheduleItem[] = [
  {
    date: '2025-03-21',
    time: '09:00',
    title: 'Abertura: O Futuro da Tecnologia',
    location: locations.auditorio,
    speakers: [
      {
        name: 'Ana Silva',
        role: 'Diretora de Inovação Digital',
        bio: 'Dra. Ana Silva é uma renomada pesquisadora em Tecnologia Educacional, com mais de 15 anos de experiência no desenvolvimento de soluções inovadoras para o ensino. Atualmente, lidera o departamento de Inovação Digital na Universidade Federal de Tecnologia.',
        social: {
          linkedin: 'https://linkedin.com/in/anasilva',
          github: 'https://github.com/anasilva',
          instagram: 'https://instagram.com/anasilva.tech'
        }
      }
    ],
    track: 'main',
    description: 'Cerimônia de abertura e keynote sobre inovação e tecnologia no contexto educacional',
    details: {
      longDescription: 'Uma exploração profunda sobre as tendências tecnológicas que estão moldando o futuro da educação. Discutiremos como a convergência entre IA, realidade virtual e metodologias inovadoras está transformando a maneira como ensinamos e aprendemos.',
      objectives: [
        'Compreender as principais tendências tecnológicas na educação',
        'Analisar casos de sucesso de implementação de tecnologia em instituições de ensino',
        'Identificar oportunidades de inovação no contexto educacional'
      ]
    }
  },
  {
    date: '2025-03-21',
    time: '10:30',
    title: 'Workshop: IA na Educação',
    location: locations.crio,
    speakers: [
      {
        name: 'Carlos Santos',
        role: 'Especialista em IA Educacional',
        bio: 'Carlos Santos é especialista em Inteligência Artificial aplicada à educação, com mestrado em Computação pela USP. Possui certificações em Machine Learning e Deep Learning, e já desenvolveu diversos projetos de IA para instituições de ensino.',
        social: {
          linkedin: 'https://linkedin.com/in/carlossantos',
          github: 'https://github.com/carlossantos'
        }
      }
    ],
    track: 'workshop',
    description: 'Aplicações práticas de Inteligência Artificial no ambiente acadêmico',
    details: {
      longDescription: 'Workshop hands-on sobre implementação de ferramentas de IA no contexto educacional. Os participantes aprenderão a utilizar e integrar soluções de IA para melhorar o processo de ensino-aprendizagem.',
      prerequisites: [
        'Conhecimento básico de programação',
        'Familiaridade com conceitos de IA',
        'Laptop com Python instalado'
      ],
      materials: [
        'Laptop com acesso à internet',
        'Ambiente Python configurado',
        'Conta no Google Colab'
      ],
      objectives: [
        'Implementar ferramentas básicas de IA no contexto educacional',
        'Desenvolver um projeto prático de IA aplicada à educação',
        'Compreender as melhores práticas de uso de IA no ensino'
      ]
    }
  },
  {
    date: '2025-03-21',
    time: '11:30',
    title: 'Painel: Educação do Futuro',
    location: locations.auditorio,
    speakers: [
      {
        name: 'Maria Oliveira',
        role: 'Professora Titular',
        bio: 'Dra. Maria Oliveira é professora titular de Tecnologia Educacional e pesquisadora em metodologias inovadoras de ensino.',
        social: {
          linkedin: 'https://linkedin.com/in/mariaoliveira',
          twitter: 'https://twitter.com/mariaoliveira'
        }
      },
      {
        name: 'João Silva',
        role: 'Diretor de Inovação',
        bio: 'João Silva é diretor de inovação em uma das maiores edtechs do Brasil, com vasta experiência em transformação digital.',
        social: {
          linkedin: 'https://linkedin.com/in/joaosilva',
          twitter: 'https://twitter.com/joaosilva'
        }
      },
      {
        name: 'Pedro Santos',
        role: 'Especialista em Learning Analytics',
        bio: 'Pedro Santos é especialista em learning analytics e desenvolvimento de currículos adaptativos.',
        social: {
          linkedin: 'https://linkedin.com/in/pedrosantos',
          github: 'https://github.com/pedrosantos'
        }
      },
      {
        name: 'Laura Costa',
        role: 'Consultora Internacional',
        bio: 'Laura Costa é consultora internacional em educação digital e autora de diversos livros sobre o tema.',
        social: {
          linkedin: 'https://linkedin.com/in/lauracosta',
          twitter: 'https://twitter.com/lauracosta'
        }
      }
    ],
    track: 'panel',
    description: 'Discussão sobre as transformações no ensino superior',
    details: {
      longDescription: 'Um painel dinâmico com especialistas renomados discutindo as transformações necessárias no ensino superior para atender às demandas do futuro do trabalho e da sociedade.',
      objectives: [
        'Debater os desafios da educação superior contemporânea',
        'Explorar soluções inovadoras para o ensino',
        'Compartilhar experiências de diferentes instituições'
      ]
    }
  },
  {
    date: '2025-03-21',
    time: '14:00',
    title: 'Inovação no Ensino Superior',
    location: locations.auditorio,
    speakers: [
      {
        name: 'Roberto Martins',
        role: 'Diretor de Transformação Digital',
        bio: 'Prof. Dr. Roberto Martins é diretor de Transformação Digital em uma das principais universidades do país. Com doutorado em Gestão da Inovação, tem vasta experiência em projetos de modernização do ensino superior.',
        social: {
          linkedin: 'https://linkedin.com/in/robertomartins',
          twitter: 'https://twitter.com/robertomartins'
        }
      }
    ],
    track: 'main',
    description: 'Estratégias e tecnologias para modernização do ensino',
    details: {
      longDescription: 'Uma análise aprofundada das estratégias e tecnologias que estão revolucionando o ensino superior, com foco em casos práticos e resultados mensuráveis.',
      objectives: [
        'Apresentar casos de sucesso de inovação no ensino superior',
        'Discutir estratégias de implementação de novas tecnologias',
        'Analisar métricas de sucesso em projetos de inovação educacional'
      ]
    }
  },
  {
    date: '2025-03-21',
    time: '15:30',
    title: 'Workshop: Metodologias Ativas',
    location: locations.crio,
    speakers: [
      {
        name: 'Patricia Lima',
        role: 'Especialista em Metodologias Ativas',
        bio: 'Patricia Lima é mestre em Educação e especialista em Metodologias Ativas. Com mais de uma década de experiência em formação docente, já capacitou mais de 5.000 professores em técnicas inovadoras de ensino.',
        social: {
          linkedin: 'https://linkedin.com/in/patricialima',
          instagram: 'https://instagram.com/patricialima.edu'
        }
      }
    ],
    track: 'workshop',
    description: 'Práticas inovadoras para engajamento dos estudantes',
    details: {
      longDescription: 'Workshop prático sobre implementação de metodologias ativas em sala de aula, com foco em técnicas que promovem maior engajamento e participação dos estudantes.',
      prerequisites: [
        'Experiência em docência',
        'Disposição para atividades práticas'
      ],
      materials: [
        'Notebook ou tablet',
        'Material para anotações'
      ],
      objectives: [
        'Aprender técnicas de metodologias ativas',
        'Desenvolver planos de aula utilizando abordagens ativas',
        'Criar estratégias de avaliação para metodologias ativas'
      ]
    }
  },
  {
    date: '2025-03-22',
    time: '09:00',
    title: 'Keynote: Tendências em EdTech',
    location: locations.auditorio,
    speakers: [
      {
        name: 'Marina Costa',
        role: 'CEO EdTech',
        bio: 'Marina Costa é CEO de uma das principais startups de EdTech do Brasil. Formada em Engenharia de Software com MBA em Gestão de Negócios, ela lidera iniciativas de transformação digital no setor educacional.',
        social: {
          linkedin: 'https://linkedin.com/in/marinacosta',
          twitter: 'https://twitter.com/marinacosta',
          instagram: 'https://instagram.com/marinacosta.tech'
        }
      }
    ],
    track: 'main',
    description: 'Análise das principais tendências em tecnologia educacional para 2025',
    details: {
      longDescription: 'Uma visão abrangente das principais tendências em tecnologia educacional, incluindo análises de mercado, previsões de especialistas e direções futuras do setor.',
      objectives: [
        'Mapear as principais tendências em EdTech',
        'Analisar o impacto das novas tecnologias na educação',
        'Identificar oportunidades de inovação'
      ]
    }
  },
  {
    date: '2025-03-22',
    time: '10:30',
    title: 'Workshop: Realidade Virtual no Ensino',
    location: locations.crio,
    speakers: [
      {
        name: 'Felipe Mendes',
        role: 'Especialista em XR',
        bio: 'Felipe Mendes é pioneiro no uso de Realidade Virtual na educação brasileira. Com formação em Computação Gráfica e especialização em XR (Extended Reality), desenvolve soluções imersivas para educação há mais de 8 anos.',
        social: {
          linkedin: 'https://linkedin.com/in/felipemendes',
          github: 'https://github.com/felipemendes',
          twitter: 'https://twitter.com/felipemendes'
        }
      }
    ],
    track: 'workshop',
    description: 'Experiências práticas com VR em sala de aula',
    details: {
      longDescription: 'Workshop hands-on sobre a utilização de realidade virtual no ensino, incluindo demonstrações práticas e desenvolvimento de conteúdo educacional em VR.',
      prerequisites: [
        'Familiaridade básica com tecnologia',
        'Interesse em realidade virtual'
      ],
      materials: [
        'Smartphone compatível com VR',
        'Óculos de VR (fornecido no workshop)',
        'Laptop com acesso à internet'
      ],
      objectives: [
        'Compreender os fundamentos da VR na educação',
        'Experimentar diferentes aplicações de VR no ensino',
        'Desenvolver um projeto educacional básico em VR'
      ]
    }
  },
  {
    date: '2025-03-22',
    time: '13:30',
    title: 'Painel: Inclusão Digital',
    location: locations.auditorio,
    speakers: [
      {
        name: 'Ana Paula Santos',
        role: 'Especialista em Acessibilidade Digital',
        bio: 'Especialista em acessibilidade digital e inclusão tecnológica',
        social: {
          linkedin: 'https://linkedin.com/in/anapaulasantos',
          twitter: 'https://twitter.com/anapaulasantos'
        }
      },
      {
        name: 'Ricardo Oliveira',
        role: 'Coordenador de Projetos',
        bio: 'Coordenador de projetos de inclusão digital em comunidades vulneráveis',
        social: {
          linkedin: 'https://linkedin.com/in/ricardooliveira',
          instagram: 'https://instagram.com/ricardooliveira.digital'
        }
      },
      {
        name: 'Carla Mendes',
        role: 'Pesquisadora',
        bio: 'Pesquisadora em tecnologias assistivas e educação inclusiva',
        social: {
          linkedin: 'https://linkedin.com/in/carlamendes',
          github: 'https://github.com/carlamendes'
        }
      }
    ],
    track: 'panel',
    description: 'Debatendo estratégias para democratização do acesso à tecnologia',
    details: {
      longDescription: 'Um painel crucial sobre estratégias e iniciativas para promover a inclusão digital e democratizar o acesso à tecnologia no contexto educacional.',
      objectives: [
        'Discutir barreiras à inclusão digital',
        'Apresentar casos de sucesso em inclusão digital',
        'Propor soluções para ampliar o acesso à tecnologia'
      ]
    }
  },
  {
    date: '2025-03-22',
    time: '15:00',
    title: 'Encerramento: Perspectivas Futuras',
    location: locations.auditorio,
    speakers: [
      {
        name: 'João Paulo Silva',
        role: 'Pesquisador e Consultor Internacional',
        bio: 'Dr. João Paulo Silva é pesquisador e consultor internacional em Educação e Tecnologia. Com mais de 20 anos de experiência, é autor de diversos livros sobre inovação educacional e palestrante reconhecido mundialmente.',
        social: {
          linkedin: 'https://linkedin.com/in/joaopaulosilva',
          twitter: 'https://twitter.com/joaopaulosilva',
          instagram: 'https://instagram.com/joaopaulosilva.edu'
        }
      }
    ],
    track: 'main',
    description: 'Cerimônia de encerramento e discussão sobre o futuro da educação tecnológica',
    details: {
      longDescription: 'Sessão de encerramento que sintetiza as principais discussões do evento e apresenta uma visão prospectiva sobre o futuro da educação tecnológica.',
      objectives: [
        'Sintetizar os principais insights do evento',
        'Discutir próximos passos e ações práticas',
        'Apresentar conclusões e recomendações'
      ]
    }
  }
];