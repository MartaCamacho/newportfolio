import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css';
import {globalStyles, navbarStyles} from '../styles/general.jsx';

export default function Home() {
  const [language, setLanguage] = useState('es');
  const [navOpen, setNavOpen] = useState(false);
  const [projects, setProjects] = useState([
    {title: "Gluten free Web",
    description: "Have you ever wondered anything about coeliac desease? Did you ever feel alone on this? Do you or some one important for you just become diagnosed? On this web you will be able to find my life experience and some glutenfree recipes to start your journey with me, you are not alone on this!",
    descripcion: "¿Alguna vez te has preguntado algo sobre celiaquía? ¿Te has sentido sol@ en esto? ¿Tú o alguien importante para ti acaba de ser diagnosticado? En esta web encontrarás mi experiencia y algunas recetas sin gluten para empezar tu viaje conmigo, ¡no estás sol@ en esto!",
    technologies: "HTML5, CSS3, JavaScript, GitHub",
    image: "/gluten.jpg",
    link:"https://martacamacho.github.io/M1-GlutenFreeWeb/"},
    {title: "I<3Hack",
    description: "I <3 HACK, is the ideal application to find that better half you are looking for to plant your garden of love. An application with the function of finding that person related to you, do not get carried away only by physical appearance but also you will complete a test to find the best possible compatibility with any user of the platform. They say that love is blind ... let's check it then. Your heart is a code, let them hack you.",
    descripcion: "I <3 HACK, es la aplicación ideal para encontrar la otra mitad que buscas para plantar tu jardín del amor. Una aplicación con la función de encontrar esa persona afín a ti, no te dejes llevar solo por la apariencia física sino que también completarás un test para encontrar la mejor compatibilidad con cualquier usuario de la plataforma. Dicen que el amor es ciego ... comprobemoslo. Tu corazón es un codígo, déjate hackear.",
    technologies: "HTML5, CSS3, JavaScript, React, NodeJS, Express, MongoDB, Axios, GitHub",
    image: "/ilovehack.jpg",
    link:"https://i-love-hack.herokuapp.com/"},
    {title: "FitLine",
    description: "Fitline was born during the covid restrictions for sport lovers who don't want to leave their sport routine behind. In this App you will find the best home workouts, a filtered search between them and a montly calendar that will help you achieve the perfect body for this summer.",
    descripcion: "Fitline nació durante las restricciones del covid para los amantes del deporte que no quieren dejar su rutina deportiva descuidada. En esta app encontrarás las mejores rutinas para hacer en casa, una búsquerda con filtros y un calendario mensual que te ayudará a conseguir el cuerpo perfecto para este verano.",
    technologies: "HTML5, CSS3, JavaScript, React, NodeJS, Express, MongoDB, Axios, GitHub",
    image: "/fitline.jpg",
    link:"https://fitline.herokuapp.com/"},,
    {title: "My former portfolio",
    description: "The title says everything.",
    descripcion: "El título lo dice todo... Mi anterior portfolio.",
    technologies: "React, CSS3, HTML5, Github",
    image: "/formerportfolio.jpg",
    link:"https://martacamacho.herokuapp.com/"},
    {title: "Movie Finder",
    description: "Movie finder is the ideal app for finding that movie you are thinking of, save it as favourite and see its details, all in one place!",
    descripcion: "Movie finder es la app ideal para encontrar esa película en la que estabas pensando, guardarla como favorita y ver sus detalles, ¡todo en el mismo sitio!",
    technologies: "HTML5, CSS3, JavaScript, React (with hooks), Fetch, GitHub",
    image: "/movie.jpg",
    link:"https://movie---finder.herokuapp.com/"},
    {title: "h8together",
    description: "This is an app made for expressing the things that you hate out loud on the internet.",
    descripcion: "En esta web podrás gritar esas cosas que odias, alto y claro, en internet.",
    technologies: "React (with hooks), Semantic UI, Apollo, GraphQL, CSS3, HTML5, Github",
    image: "/h8together.png",
    link:"https://h8together.netlify.app/"},
    {title: "Not Yet Website",
    description: "This is a personal website for a comic trio, with youtube and spotify embeded.",
    descripcion: "Este proyecto es una web personal para un trío cómico, con Youtube y Spotify integrados",
    technologies: "NextJs (with hooks), styled components, JavaScript, CSS3, react scroll, Github, Netlify",
    image: "/notyet.jpg",
    link:"http://www.notyet.es/"}
  ]);

  const router = useRouter()

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
                      {navOpen ? 
                        <img
                            src="/close.png"
                            alt="<a href='https://www.flaticon.com/free-icons/close' title='close icons'>Close icons created by Fuzzee - Flaticon</a>"
                            width={15}
                            height={15}
                          /> : <img
                            src="/hamburger.png"
                            alt="<a href='https://www.flaticon.es/iconos-gratis/lista' title='lista iconos'>Lista iconos creados por Freepik - Flaticon</a>"
                            width={20}
                            height={15}
                          />}
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
                          <img
                            src="/spain.png"
                            alt="Spanish flag"
                            width={20}
                            height={15}
                          />
                        </span>
                        <span className="lang-item" onClick={() => setLanguage('uk')}>
                          <img
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
      <img
        src="/undraw_programmer.svg"
        alt="programmer"
        width={250}
        height={250}
      />
  </div>
</section>

const about = <section className="gen-section" id="about">
  <div className="content">
      <img
        src="/fotoIH.jpg"
        alt="programmer"
        width={250}
        height={250}
        layout="fixed"
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

const projectItem = (title, description, picture, link, index, technologies) =>{ 
return <div className="project-item-wrapper" key={index}>
          <a className="project-item" href={link} target="_blank" rel="noreferrer">
            <div>
              <img
                src={picture}
                alt={title}
                layout="responsive"
                width={100}
                height={50}
                />
            </div>
            <div className="project-item-title">{title}</div>
            <div>{description}</div>
            <div className="project-item-technologies">{language === 'es' ? "Tecnologías" : "Technologies"}: {technologies}</div>
          </a>
      </div> }

const projectsSection = <section className="gen-section projects-sec" id="projects">
  <h2>
    {language === 'es' ? "Proyectos" : "Projects"}
  </h2>
  <div className="projects-sec">
    {projects.map((singleProject, i) => projectItem(singleProject.title, language === "es" ? singleProject.descripcion : singleProject.description, singleProject.image, singleProject.link, `project${i}`, singleProject.technologies))}
  </div>
</section>

const contactSection = <section className="gen-section contact-sec" id="contact">
  <h2>Contact{language === 'es' ? "o" : ""}</h2>
  <div className="email-link">
    <a href="mailto:contacto@martacamacho.com">
      contacto@martacamacho.com
    </a>
  </div>
  <div className="cv-link">
    <a href="https://drive.google.com/file/d/129EqAOkpVAyGnqkW29vIFLZfc3dhharR/view" target="_blank" rel="noreferrer">
    CV
    </a>
  </div>
  <div className="social-icons">
    <a href="https://github.com/MartaCamacho" target="_blank" rel="noreferrer">
      <img
          src="/github.png"
          alt="Github icon"
          width={42}
          height={42}
          layout="responsive"
        />
    </a>
    <a href="https://www.linkedin.com/in/martacamachovargas/" target="_blank" rel="noreferrer">
      <img
          src="https://img.icons8.com/ios-filled/50/000000/linkedin.png"
          alt="linkedin icon from https://iconos8.es/icons/set/linkedin--white"
          width={45}
          height={45}
          layout="responsive"
        />
    </a>
  </div>
</section>

  return (
    <div>
      <Head>
        <title>Portfolio Marta Camacho</title>
        <meta name="description" content="Marta Camacho's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {router.pathname !== "/ralo" && <header>
        {Navbar}
      </header>}

      <main className={styles.main}>
        {whatIDo}
        {about}
        {projectsSection}
        {contactSection}
      </main>

      {router.pathname !== "/ralo" && <footer className={styles.footer}>
      Made with ♥ by <a href="https://www.linkedin.com/in/martacamachovargas/" target="_blank" rel="noopener noreferrer">Marta</a>
      </footer>}
      <style jsx global>{globalStyles}</style>
    </div>
  )
}
