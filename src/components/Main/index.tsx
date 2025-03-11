import React from "react";
import styles from './styles.module.scss';
import vector from '../../assets/vector.png';
import { FaGithub, FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import {
  SiTypescript,
  SiNextdotjs,
  SiStyledcomponents,
  SiPostgresql,
  SiExpress,
  SiAxios,
  SiScrumalliance,
  SiPrisma,
} from 'react-icons/si';

export default function Main() {
  const technologies = [
    { icon: <FaHtml5 />, name: 'HTML', color: '#E44D26' },
    { icon: <FaCss3 />, name: 'CSS', color: '#264DE4' },
    { icon: <FaJs />, name: 'JavaScript', color: '#F7DF1E' },
    { icon: <SiTypescript />, name: 'TypeScript', color: '#3178C6' },
    { icon: <FaReact />, name: 'React.js', color: '#61DAFB' },
    { icon: <SiNextdotjs />, name: 'Next.js', color: '#000000' },
    { icon: <FaReact />, name: 'React Native', color: '#61DAFB' },
    { icon: <SiStyledcomponents />, name: 'Styled Components', color: '#DB7093' },
    { icon: <FaNodeJs />, name: 'Node.js', color: '#68A063' },
    { icon: <SiPostgresql />, name: 'PostgreSQL', color: '#336791' },
    { icon: <FaGithub />, name: 'GitHub', color: '#333' },
    { icon: <SiExpress />, name: 'Express', color: '#000000' },
    { icon: <SiAxios />, name: 'Axios', color: '#5A29E4' },
    { icon: <SiScrumalliance />, name: 'Scrum', color: '#009688' },
    { icon: <SiPrisma />, name: 'Prisma', color: '#2D3748' },
  ];

  return (
    <>
      <div className={styles.main_container}>
        <div className={styles.logo}>
          <img src={vector} alt='Vector' />
        </div>
        <div className={styles.presentation}>
          <h1>Hello World! Meu nome é <p>Clovis Antunes</p> e eu sou</h1>
          <h2>Desenvolvedor Fullstack</h2>
        </div>
        <div className={styles.subApresentation}>
          <p>
            Transformo necessidades em aplicações reais, envolventes e funcionais. Desenvolvo sistemas através da minha paixão pela tecnologia, contribuindo com soluções inovadoras e eficazes para desafios complexos.
          </p>
        </div>

        <div className={styles.techs}>
          <ul>
            {technologies.map((tech, index) => (
              <li key={index}>
                {React.cloneElement(tech.icon, { style: { color: tech.color } })}
                <span>{tech.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.arrowDown}>
          <MdKeyboardDoubleArrowDown size={50} color='#878EA1' />
        </div>
      </div>
    </>
  );
}