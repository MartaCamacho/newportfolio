import Image from 'next/image';
import styles from '../raloStyles/styles';

const Footer = () => {
  return (
    <footer className="footer-container">
        <div className="footer-left-side footer-element">
        <Image
                className="logo"
                src="/ralo/logo.jpg"
                alt="content"
                width="45"
                height="45"
              />
          <span className="">rALo</span>
        <p className="">
          © {new Date().getFullYear()} — 
          <a
            href="https://www.instagram.com/yosoyralo/"
            rel="noopener noreferrer"
            target="_blank"
          >
             @yosoyralo
          </a>
        </p>
        </div>
        <div className="footer-element marta-signature">Made with ♥ by <a href="https://www.linkedin.com/in/martacamachovargas/" rel="noopener noreferrer" target="_blank"><b>Marta</b></a></div>
        <span className="footer-social footer-element">
          <a
            className=""
            href="https://www.instagram.com/yosoyralo/"
            target="_blank" rel="noreferrer"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a
            href="mailto:hola@yosoyralo.com"
            target="_blank" rel="noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          </a>
        </span>
        <style jsx>{styles}</style>
    </footer>
  );
};

export default Footer;
