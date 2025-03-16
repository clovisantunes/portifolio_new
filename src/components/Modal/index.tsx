import React from 'react';
import styles from './styles.module.scss';

interface Project {
  name: string;
  description: string;
  fullDescription: string;
  image: string;
}

interface ModalProps {
  project: Project | null;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  // Função para redirecionar para o WhatsApp
  const handleContactClick = () => {
    const phoneNumber = '555181399275'; // Substitua pelo seu número
    const message = `Olá, vi seu portfólio e gostaria de mais informações sobre seus serviços.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className={styles.modal_overlay}>
      <div className={styles.modal_content}>
        <button className={styles.close_button} onClick={onClose}>
          X
        </button>
        <img src={project.image} alt={project.name} />
        <h3>{project.name}</h3>
        <span>{project.fullDescription}</span>
        <button className={styles.contact_button} onClick={handleContactClick}>
          Entrar em Contato
        </button>
      </div>
    </div>
  );
};

export default Modal;