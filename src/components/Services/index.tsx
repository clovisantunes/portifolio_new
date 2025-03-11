import { JSX } from 'react';
import styles from "./styles.module.scss";
import { FaCode, FaDatabase, FaSearch, FaServer } from 'react-icons/fa'; 

interface Service {
  title: string;
  description: string;
  icon: JSX.Element; 
}

interface Services {
  web: Service;
  api: Service;
  seo: Service;
  support: Service;
}

export default function Services() {
  const services: Services = {
    web: {
      title: 'Desenvolvimento de Sites',
      description: 'Desenvolvo sites responsivos, com design moderno e otimizados para SEO.',
      icon: <FaCode size={40} color="#4CAF50" /> 
    },
    api: {
      title: 'Criação de APIs e Banco de Dados',
      description: 'Desenvolvimento de APIs robustas e banco de dados para aplicações web.',
      icon: <FaDatabase size={40} color="#2196F3" /> 
    },
    seo: {
      title: 'SEO',
      description: 'Otimização de sites para mecanismos de busca, melhorando o posicionamento no Google.',
      icon: <FaSearch size={40} color="#FFC107" /> 
    },
    support: {
      title: 'Suporte Técnico e Infraestrutura',
      description: 'Ofereço suporte técnico especializado, manutenção de hardware, software e administração de servidores e redes corporativas.',
      icon: <FaServer size={40} color="#FF5722" />
    }
  };

  return (
    <>
      <div className={styles.services_container}>
        <div className={styles.title}>
          <h2>Meus serviços</h2>
          <span>Como posso ajudar o seu negócio</span>
        </div>
        <div className={styles.services}>
          {Object.values(services).map((service, index) => (
            <div key={index} className={styles.service}>
              <div className={styles.icon}>
                {service.icon} 
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}