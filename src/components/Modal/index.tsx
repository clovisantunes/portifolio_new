import React from 'react';
import styles from './styles.module.scss';

interface Project {
  name: string;
  description: string;
  fullDescription: string;
  image: string;
  deployLink?: string;
}

interface ModalProps {
  project: Project | null;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const handleContactClick = () => {
    const phoneNumber = '555181399275'; 
    const message = `Olá, vi seu portfólio e gostaria de mais informações sobre seus serviços.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  // Verifica se deployLink existe e não é uma string vazia ou apenas espaços
  const hasValidDeployLink = project.deployLink && project.deployLink.trim() !== '';

  return (
    <div className={styles.modal_overlay}>
      <div className={styles.modal_content}>
        <button className={styles.close_button} onClick={onClose}>
          X
        </button>
        <img src={project.image} alt={project.name} />
        <h3>{project.name}</h3>
        <span>{project.fullDescription}</span>

    <div className={styles.buttons_modal}>

        {hasValidDeployLink && (
          <a 
          href={project.deployLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.preview_button}
          >
            Preview
          </a>
        )}

        <button className={styles.contact_button} onClick={handleContactClick}>
          Entrar em Contato
        </button>
      </div>
        </div>
    </div>
  );
};

export default Modal;