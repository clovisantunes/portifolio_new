import styles from './styles.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        © {new Date().getFullYear()} <a href="https://clovis-antunes.vercel.app/" target="_blank" rel="noopener noreferrer">Clovis Antunes</a> - Dev
      </p>
    </footer>
  );
}