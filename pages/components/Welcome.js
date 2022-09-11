import Image from 'next/image';
import {raloStyles} from '../ralo/styles';

const Welcome = ({changeLanguage, language}, props) => {
  return (
    <section className="">
        <div className="top-page-container">
          <div className="top-section-container">
            <div className="top-image"></div>
              <span className="top-flag-spain-image" onClick={() => changeLanguage('spanish')}>
                <Image
                  alt="Ralo background"
                  src="/ralo/spain.png"
                  width="20"
                  height="15"
                />
              </span>
              <span className="top-flag-uk-image" onClick={() => changeLanguage('english')}>
                <Image
                  alt="Ralo background"
                  src="/ralo/uk.webp"
                  width="20"
                  height="15"
                />
              </span>
          </div>
          <div className="top-text-container">
            <div className="top-text-left-side">
              <div>
                <Image
                alt="rALo logo"
                className="ralo-logo-rounded"
                src="/ralo/logo.jpg"
                width="80"
                height="80"
                />
              </div>
              <div>
                <h2>
                rALo
                </h2>
                <div className=""></div>
                <p>
                {
                language === "spanish" ?
                <>
                <div>Poeta - Escritor - Guionista</div>
                <div>Dramaturgo - Director</div>
                <div><span className="italic-text">Story</span>ador</div>
                </>
                :
                <>
                <div>Poet - Writer - Scriptwriter </div>
                <div>Playwriter - Director</div>
                <div><span className="italic-text">Story</span>ador</div>
                </>
                }
                </p>
              </div>
            </div>
            <div className="top-text-right-side">
              <p className="">
              {
                language === "spanish" ?
              "Soy escritor, guionista y poeta, pero no en ese orden. Soy contador de historias. rALo es el pseudónimo con el que firmo mis propuestas creativas. Utilizo pseudónimo porque me ayuda a focalizar y separar esa parte de mi vida del resto. Tanto si te gusta lo que hago como si no, es irrelevante quien sea rALo." 
              :
              "I am a writer, screenwriter and poet, but not in that order. I am a storyteller. rALo is the psudonym I use to sign my creative proposals. I use it because it helps me focus and split that part of my life from the rest. Whether if you like what I do or not, is irrelevant who rALo is."
              }
              </p>
            </div>
          </div>
        </div>
        <style jsx>{raloStyles}</style>
    </section>
  );
};

export default Welcome;
