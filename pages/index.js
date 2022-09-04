import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import {globalStyles, navbarStyles} from '../styles/general.jsx';

export default function Home() {
  const [language, setLanguage] = useState('es');
  const [navOpen, setNavOpen] = useState(false);
  const [projects, setProjects] = useState([
    {title: "Gluten free Web",
    description: "Have you ever wondered anything about coeliac desease? Did you ever feel alone on this? Do you or some one importante for you just become diagnosed? On this web you will be able to find my life experience and some glutenfree recipes to start your journey with me, you are not alone on this!",
    technologies: "HTML5, CSS3, JavaScript, GitHub",
    image: "/gluten.jpg",
    link:"https://martacamacho.github.io/M1-GlutenFreeWeb/"},
    {title: "I<3Hack",
    description: "I <3 HACK, is the ideal application to find that better half you are looking for to plant your garden of love. An application with the function of finding that person related to you, do not get carried away only by physical appearance but also you will complete a test to find the best possible compatibility with any user of the platform. They say that love is blind ... let's check it then. You also have the events tab available, where the places and the date will appear where you can spend a pleasant evening with a random person for a limited time, on a speed dating format. Your heart is a code, let them hack you.",
    technologies: "HTML5, CSS3, JavaScript, React, NodeJS, Express, MongoDB, Axios, GitHub",
    image: "/ilovehack.jpg",
    link:"https://i-love-hack.herokuapp.com/"},
    {title: "FitLine",
    description: "Fitline was born during the covid restrictions for sport lovers who don't want to leave their sport routine behind. In this App you will find the best home workouts, a filtered search between them and a montly calendar that will help you achieve the perfect body for this summer. Also, you will be able to save the videos you loved on your profile, as well as add videos to the community with your favourite workouts.",
    technologies: "HTML5, CSS3, JavaScript, React, NodeJS, Express, MongoDB, Axios, GitHub",
    image: "/fitline.jpg",
    link:"https://fitline.herokuapp.com/"},
    {title: "Movie Finder",
    description: "Movie finder is the ideal app for finding that movie you are thinking of, save it as favourite and see its details, all in one place!",
    technologies: "HTML5, CSS3, JavaScript, React (with hooks), Fetch, GitHub",
    image: "/movie.jpg",
    link:"https://movie---finder.herokuapp.com/"},
    {title: "Not Yet Website",
    description: "This is a personal website for a comic trio, with youtube and spotify embeded.",
    technologies: "NextJs (with hooks), styled components, JavaScript, CSS3, react scroll, Github, Netlify",
    image: "/notyet.jpg",
    link:"http://www.notyet.es/"},
    {title: "rALo Website",
    description: "This is a simple presentation website I have made for a friend, SEO friendly.",
    technologies: "NextJs (with hooks), JavaScript, CSS3, HTML5, Github",
    image: undefined,
    link:""},
  ]);

  const navLink = (url, spa, eng) => <>
    <Link href={`#${url}`}>
                    <a onClick={() => setNavOpen(false)}>
                      {language === 'es' ? spa : eng}
                    </a>
                  </Link>
    <style jsx>{navbarStyles}</style>
  </>

  const Navbar = <nav className="nav-fixed">
                  <div className="nav-container">
                  <div className="favicon-back"></div>
                    <div className="favicon">
                      MCV
                    </div>
                    <div className="hamburger" onClick={() => setNavOpen(!navOpen)}>
                      <Image
                            src="/hamburger.png"
                            alt="<a href='https://www.flaticon.es/iconos-gratis/lista' title='lista iconos'>Lista iconos creados por Freepik - Flaticon</a>"
                            width={20}
                            height={15}
                          />
                    </div>
                    <div className={`nav-text-container ${navOpen ? "nav-open" : "nav-closed"}`}>
                      <span className="nav-text">
                          {navLink("whatIDo", "Qué hago", "What I do")}
                          {navLink("about", "Sobre mi", "About me")}
                          {navLink("projects", "Proyectos", "Projects")}
                          {navLink("contact", "Contacto", "Contact")}
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
          <h2>
          {language === 'es' ? "Sobre mi" : "About me"}
          </h2>
          <h3>
          {language === 'es' ? "Desarrolladora en Barcelona" : "Developer based in Barcelona"}
          </h3>
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

const projectItem = (title, description, picture, link, index) =>{ 
return <a className="project-item" key={index} href={link} target="_blank" rel="noreferrer">
  <div>
    <Image
      src={picture}
      alt={title}
      layout="responsive"
      width={100}
      height={50}
      />
  </div>
  <div className="project-item-title">{title}</div>
  <div>{description}</div>
</a>}

const projectsSection = <section className="gen-section projects-sec" id="projects">
{projects.map((singleProject, i) => projectItem(singleProject.title, singleProject.description, singleProject.image, singleProject.link, `project${i}`))}
</section>

  return (
    <div>
      <Head>
        <title>Portfolio Marta Camacho</title>
        <meta name="description" content="Marta Camacho's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        {Navbar}
      </header>

      <main className={styles.main}>
        {whatIDo}
        {about}
        {projectsSection}
      </main>

      <footer className={styles.footer}>
      Made with ♥ by <a href="https://www.linkedin.com/in/martacamachovargas/" target="_blank" rel="noopener noreferrer">Marta</a>
      </footer>
      <style jsx global>{globalStyles}</style>
    </div>
  )
}
