import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import {globalStyles, navbarStyles} from '../styles/general.jsx';

export default function Home() {
  const [language, setLanguage] = useState('es');

  const Navbar = <nav className="nav-fixed">
                  <div className="nav-container">
                  <div className="favicon-back"></div>
                    <div className="favicon">
                      MCV
                    </div>
                    <div className="nav-text-container">
                      <span className="nav-text">
                      <Link href="#whatIDo">
                            <a>
                              {language === 'es' ? "Qué hago" : "What I do"}
                            </a>
                          </Link>
                          <Link href="#about">
                            <a>
                              {language === 'es' ? "Sobre mi" : "About me"}
                            </a>
                          </Link>
                          <Link href="#">
                            <a>
                              {language === 'es' ? "Proyectos" : "Projects"}
                            </a>
                          </Link>
                          <Link href="#">
                            <a>
                              {language === 'es' ? "Contacto" : "Contact"}
                            </a>
                          </Link>
                      </span>
                      <span className="lang-container">
                        <span className="lang-item" onClick={() => setLanguage('es')}>
                          <Image
                            src="/spain.png"
                            alt="Spanish flag"
                            width={20}
                            height={15}
                          />
                        </span>
                        <span className="lang-item" onClick={() => setLanguage('uk')}>
                          <Image
                            src="/UK.png"
                            alt="UK flag"
                            width={20}
                            height={15}
                          />
                        </span>
                      </span>
                    </div>
                  </div>
                    
                  <style jsx>{navbarStyles}</style>
                  </nav>

const whatIDo = <section className="gen-section" id="whatIDo">
  <div className="content">
    <span className="what-i-do-text">
        <div className="title">
          <h1>
            {language === 'es' ? "¡Hola! Soy" : "Hi! I'm"} Marta 👋
          </h1>
          <h2>
            {language === 'es' ? "Desarrolladora web frontend" : "Frontend web developer"} 👩‍💻
          </h2>
        </div>
        <div className="what-i-do-description">
          {language === 'es' ? 
          "Tengo conocimientos en HTML5 / CSS3 / JavaScript / Reactjs / Nodejs / Nextjs y otras librerías y frameworks muy guays que me dan la habilidad de crear, dar formato y componer sitios web." :
          "I have knowledge in HTML5 / CSS3 / JavaScript / Reactjs / Nodejs / Nextjs and some other cool libraries and frameworks that give me the ability to create, format and layout websites. "}
        </div>
      </span>
      <Image
        src="/undraw_programmer.svg"
        alt="programmer"
        width={250}
        height={250}
      />
  </div>
</section>

const about = <section className="gen-section" id="about">
  <div className="content">
      <Image
        src="/about.svg"
        alt="programmer"
        width={250}
        height={250}
      />
      <div className="about-content">
          <h3>
          {language === 'es' ? "Sobre mi" : "About me"}
          </h3>
          <h4>
          {language === 'es' ? "Desarrolladora en Barcelona" : "Developer based in Barcelona"}
          </h4>
          <div>
            <p>{language === 'es' ? 
            "Nacida y crecida en Granada, me mudé a Barcelona en 2013 para conseguir mi sueño de trabajar en la industria del turismo y me enamoré de la ciudad. Me considero una persona exigente, perseverante y entusiasta, que trabaja cada día para conseguir sus objetivos." : 
            "Born and raised in Granada, I moved to Barcelona in 2013 to accomplish my dream of working on the tourism industry and fell in love with the city. I consider myself a demanding, perseverant and enthusiastic person, who works every day to accomplish her goals."}</p>
            <p>{language === 'es' ? 
            "Tras 7 años en la industria del turismo, he trabajado en diferentes posiciones que me han dado nuevas habilidades (como trabajar bajo presión, atención al cliente, habilidades comerciales, habilidades de negociación y trabajo en equipo, entre otras) y, sobre todo, a entender mejor cómo funcionan las cosas que dependen de otros departamentos (y que muchas veces no tenemos en cuenta cuando algo no se entrega correctamente/a tiempo)." : 
            "After 7 years on hospitality, I have worked on different positions that gave me new abilities (such as working under pressure, customer care, commercial skills, negotiating skills and team work, among others) and, above all, to understand better how things that depend of another department work (and that many times we do not take into account when something is not delivered correctly/on time)."}</p>
            <p>{language === 'es' ? 
            "En 2020 decidí hacer un cambio de carrera, me paré a pensar qué es lo que quiero ahora y me di cuenta de que me encanta programar y me veo haciéndolo en el futuro, así que decidí hacer un bootcamp y adquitir los conocimientos necesarios para empezar mi camino como desarrolladora full stack 🚀" : 
            "On 2020 I decided to do a career change, I have stopped and thought about what I wanted now, and I realized that I love developing and I see myself doing this in the future, so I decided to do a bootcamp and acquire the necessary knowledge to begin my path as a full stack developer 🚀"}</p>
            <p>{language === 'es' ? 
            "Hoy en día trabajo como desarrolladora frontend desde febrero 2021, ¡y me encanta!" : 
            "Nowadays I am working as a frontend developer since February 2021, and I love it!"}</p>
          </div>
      </div>
  </div>
</section>

  return (
    <div>
      <Head>
        <title>Portfolio Marta Camacho</title>
        <meta name="description" content="Marta Camacho's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {Navbar}

      <main className={styles.main}>
        {whatIDo}
        {about}
      </main>

      <footer className={styles.footer}>
       
      </footer>
      <style jsx global>{globalStyles}</style>
    </div>
  )
}
