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
                          <Link href="#">
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
  {language === 'es' ? 
  "" :
  "I have knowledge in HTML5 / CSS3 / JavaScript / Reactjs / Nodejs / Nextjs and some other cool libraries and frameworks that give me the ability to create, format and layout websites. "}
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
        <div className="gen-section title">
          <h1>
            {language === 'es' ? "¡Hola! Soy" : "Hi! I'm"} Marta 👋
          </h1>
          <h2>
            {language === 'es' ? "Desarrolladora web frontend" : "Frontend web developer"} 👩‍💻
          </h2>
        </div>
        
        {whatIDo}
      </main>

      <footer className={styles.footer}>
       
      </footer>
      <style jsx global>{globalStyles}</style>
    </div>
  )
}
