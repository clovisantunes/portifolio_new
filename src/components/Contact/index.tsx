import styles from './styles.module.scss';
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa';
import { ImArrowUpRight2 } from "react-icons/im";

export default function Contact() {
  return (
    <div className={styles.contact_container}>
      <div className={styles.titles}>
        <h1>Contato</h1>
        <span>Gostou do meu trabalho? </span>
        <p>Entre em contato ou acompanhe as minhas redes sociais!</p>
      </div>
      <div className={styles.buttonsContact}>
        <a href="https://www.linkedin.com/in/clovis-antunes/" target="_blank" rel="noopener noreferrer" className={styles.button}>
          <FaLinkedin size={24} className={styles.icon} />
          <span className={styles.text}>LinkedIn</span>
          <ImArrowUpRight2 size={16} className={styles.arrow} />
        </a>
        <a href="https://www.instagram.com/clovis_antuness/" target="_blank" rel="noopener noreferrer" className={styles.button}>
          <FaInstagram size={24} className={styles.icon} />
          <span className={styles.text}>Instagram</span>
          <ImArrowUpRight2 size={16} className={styles.arrow} />
        </a>
        <a href="https://github.com/clovisantunes" target="_blank" rel="noopener noreferrer" className={styles.button}>
          <FaGithub size={24} className={styles.icon} />
          <span className={styles.text}>GitHub</span>
          <ImArrowUpRight2 size={16} className={styles.arrow} />
        </a>
        <a href="clovissantannaa@gmail.com" className={styles.button}>
          <FaEnvelope size={24} className={styles.icon} />
          <span className={styles.text}>E-mail</span>
          <ImArrowUpRight2 size={16} className={styles.arrow} />
        </a>
      </div>
    </div>
  );
}