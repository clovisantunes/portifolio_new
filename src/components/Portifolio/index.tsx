import styles from './styles.module.scss';
import projeto1 from '../../assets/portifolio/Advocacia.png'
import projeto2 from '../../assets/portifolio/contabilidade.png'
import projeto3 from '../../assets/portifolio/technova.png'
import projeto4 from '../../assets/portifolio/portifoliodandara.png'
import projeto5 from '../../assets/portifolio/devroom.png'
import projeto6 from '../../assets/portifolio/linskpage.png'




const projects = [
  {
    name: "DevRoom",
    description: "Projeto de website para empresa de desenvolvimento Web.",
    image: projeto5 
  },
  {
    name: "Pagina de links",
    description: "Pagina de links focada em organização e praticidade para o usuário.",
    image: projeto6 
  },
  {
    name: "Portifolio WebDesigner",
    description: "Portifolio de uma WebDesigner focado na apresentação dos Design's.", 
    image: projeto4 
  },
  {
    name: "TechNova",
    description: "Site institucional para empresa de tecnologia.",
    image: projeto3
  },
  {
    name: "Advocacia",
    description: "Pagina simples para escritório de advocacia.",
    image: projeto1 
  },
  {
    name: "Contabiliza",
    description: "Site institucional para empresa de contabilidade.",
    image: projeto2 
  },
];

export default function Portifolio() {
  return (
    <>
      <div className={styles.portifolio_container}>
        <div className={styles.portifolio}>
          <h1>Meu trabalho</h1>
          <h2>Veja os projetos em destaque</h2>
        </div>
        <div className={styles.projects}>
          {projects.map((project, index) => (
            <div key={index} className={styles.project}>
              <img src={project.image} alt={project.name} />
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}