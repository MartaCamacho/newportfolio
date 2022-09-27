
import Link from 'next/link';
import { navbarStyles } from '../styles/general';
import { useState } from 'react';

const Navbar = ({language, setLanguage}) => {
    const [navOpen, setNavOpen] = useState(false);

  const navLink = (url, spa, eng) => <>
    <Link href={`#${url}`}>
                    <a onClick={() => setNavOpen(false)}>
                      {language === 'es' ? spa : eng}
                    </a>
                  </Link>
    <style jsx>{navbarStyles}</style>
  </>

  return (
    <nav className="nav-fixed">
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
  )
}

export default Navbar