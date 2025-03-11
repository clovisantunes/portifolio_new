import Contact from './components/Contact';
import Footer from './components/Footer';
import Main from './components/Main';
import Portifolio from './components/Portifolio';
import Services from './components/Services';
import styles from './styles.module.scss';

const App = () => {
  return (
    <div className={styles.app_container}>
      <Main />
      <Portifolio />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;