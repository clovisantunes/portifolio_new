import React, { useState } from 'react';
import styles from './styles.module.scss';
import projeto1 from '../../assets/portifolio/Advocacia.png';
import projeto2 from '../../assets/portifolio/contabilidade.png';
import projeto3 from '../../assets/portifolio/technova.png';
import projeto4 from '../../assets/portifolio/portifoliodandara.png';
import projeto5 from '../../assets/portifolio/devroom.png';
import projeto6 from '../../assets/portifolio/linskpage.png';
import whatsapp from '../../assets/portifolio/whats.png';
import Modal from '../Modal'; // Importe o componente Modal

interface Project {
  name: string;
  description: string;
  fullDescription: string;
  image: string;
  deployLink: string;
}

const projects: Project[] = [
    {
      name: 'DevRoom',
      description: 'Website moderno para uma empresa de desenvolvimento web.',
      fullDescription:
        'Desenvolvemos um website moderno e responsivo para a DevRoom, uma empresa especializada em desenvolvimento web. O site foi projetado para destacar seus serviços, portfólio e cases de sucesso, com foco em uma experiência de usuário intuitiva e atraente.',
      image: projeto5,
      deployLink: 'https://devroom-react.vercel.app/'
    },
    {
      name: 'Página de Links',
      description: 'Página de links para organização e praticidade.',
      fullDescription:
        'Criamos uma página de links personalizada, focada em organização e praticidade. Ideal para profissionais que desejam centralizar seus links importantes em um único lugar, com design clean e navegação simplificada.',
      image: projeto6,
      deployLink: 'https://links-repository-omega.vercel.app/'
    },
    {
      name: 'Portfólio WebDesigner',
      description: 'Portfólio para uma designer focada em apresentação de designs.',
      fullDescription:
        'Desenvolvemos um portfólio online para uma designer, com foco na apresentação de seus trabalhos de forma elegante e profissional. O site inclui galerias organizadas, detalhes de cada projeto e uma seção de contato integrada.',
      image: projeto4,
      deployLink: 'https://portifolio-dandara.vercel.app/'
    },
    {
      name: 'TechNova',
      description: 'Site institucional para uma empresa de tecnologia.',
      fullDescription:
        'Criamos um site institucional para a TechNova, uma empresa de tecnologia. O site apresenta sua missão, visão, serviços e cases de sucesso, com um design moderno e alinhado à identidade visual da marca.',
      image: projeto3,
      deployLink: ''
    },
    {
      name: 'Advocacia',
      description: 'Página profissional para um escritório de advocacia.',
      fullDescription:
        'Desenvolvemos uma página profissional para um escritório de advocacia, com foco em transmitir credibilidade e confiança. O site inclui informações sobre áreas de atuação, equipe e contato, com design sóbrio e elegante.',
      image: projeto1,
      deployLink: ''
    },
    {
      name: 'Contabiliza',
      description: 'Site institucional para uma empresa de contabilidade.',
      fullDescription:
        'Criamos um site institucional para a Contabiliza, uma empresa de contabilidade. O site foi projetado para destacar seus serviços, diferenciais e informações de contato, com um design limpo e de fácil navegação.',
      image: projeto2,
      deployLink: 'https://contabilidade-xi.vercel.app/'
    },
    {
      name: 'WhatsApp HUB',
      description: 'Software para envio de mensagens em massa pelo WhatsApp.',
      fullDescription:
        'Desenvolvemos um software fullstack para envio de mensagens em massa pelo WhatsApp. A solução permite a automação de campanhas, integração com APIs e relatórios de desempenho, otimizando a comunicação com clientes.',
      image: whatsapp,
      deployLink: ''
    },
  ];

const Portifolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <div className={styles.portifolio_container}>
        <div className={styles.portifolio}>
          <h1>Meu trabalho</h1>
          <h2>Veja os projetos em destaque</h2>
        </div>
        <div className={styles.projects}>
          {projects.map((project, index) => (
            <div
              key={index}
              className={styles.project}
              onClick={() => handleProjectClick(project)}
            >
              <img src={project.image} alt={project.name} />
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Modal project={selectedProject} onClose={handleCloseModal} />
    </>
  );
};

export default Portifolio;