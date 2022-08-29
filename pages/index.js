import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import {globalStyles, navbarStyles} from '../styles/general.jsx';

export default function Home() {
  const [language, setLanguage] = useState('es');

  const Navbar = <nav className="nav-container">
                    <div className="favicon">
                      MCV
                      <div className="favicon-back"></div>
                    </div>
                    <div className="nav-text-container">
                      <span className="nav-text">
                        {language === 'es' ? <>
                          <Link href="#"><a>Qué hago</a></Link>
                          <Link href="#"><a>Sobre mi</a></Link>
                          <Link href="#"><a>Proyectos</a></Link>
                          <Link href="#"><a>Contacto</a></Link>
                        </> : <>
                          <Link href="#"><a>What I do</a></Link>
                          <Link href="#"><a>About me</a></Link>
                          <Link href="#"><a>Projects</a></Link>
                          <Link href="#"><a>Contact</a></Link>
                        </>}
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
                  <style jsx>{navbarStyles}</style>
                  </nav>


  return (
    <div>
      <Head>
        <title>Portfolio Marta Camacho</title>
        <meta name="description" content="Marta Camacho's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {Navbar}

      <main className={styles.main}>
        <h1 className={styles.title}>
          Holi
        </h1>
      </main>

      <footer className={styles.footer}>
       
      </footer>
      <style jsx global>{globalStyles}</style>
    </div>
  )
}
