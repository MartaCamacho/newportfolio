import Image from 'next/image';
import styles from '../raloStyles/styles';

const Body = ({language}, props) => {
  return (
    <section className="body-section-container">
          <div className="body-section-item">
              <span className="body-section-image">
                <img
                  src="/ralo/poe.png"
                  alt="content"
                  width="300"
                  height="165"
                />
              </span>
              <p className="leading-relaxed text-base">
              {
                language === "spanish" ?
                <>
                Actualmente estoy trabajando para publicar mi primera antología. Más información muy pronto. Mientras tanto <a href="https://arrobaralo.wordpress.com/" target="_blank" rel="noreferrer">haz clic aquí</a> para visitar mi blog de poesía.
                </>
                :
                <>
                I am currently working to publish my first anthology. More information is coming soon. In the meantime, <a href="https://arrobaralo.wordpress.com/" target="_blank" rel="noreferrer">click here</a> to visit my poetry blog.
                </>
              }
              
              </p>
          </div>
          <div className="body-section-item">
              <span className="body-section-image">
                <img
                  src="/ralo/fic.png"
                  alt="content"
                  width="300"
                  height="165"
                />
              </span>
              <p className="leading-relaxed text-base">
              {
                language === "spanish" ?
                <>
              He escrito tres novelas, dos obras de teatro, innumerables guiones para series de televisión y películas, además de muchos relatos cortos y cuentos. En noviembre de 2021 Publiqué <a href="https://www.amazon.es/dp/B09MPGT8PN/ref=sr_1_5?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=francisco+H&qid=1638102472&qsid=259-6801527-8888128&sr=8-5&sres=B08WKKLZCZ%2C8494607081%2C1910994316%2C8474231396%2CB09MPGT8PN%2C1777797853%2C8494339540%2C8897846157%2C8899086966%2C1356176887%2C8897846149%2C8498403464%2C149967788X%2C8498405068%2CB07ZDGCYSQ%2C167803097X%2C8491046518%2C1356033288%2C0976305216%2C8494240684" target="_blank" rel="noreferrer">en Amazon</a> mi primera novela: <span className="italic-text">Las desventuras y añoranzas de Francisco H</span>. También puedes <a href="https://arrobaralo.wordpress.com/2021/10/28/en-verano-la-leche-se-toma-hirviendo/"  target="_blank" rel="noreferrer">pulsar aquí</a> y leer mi relato: <span className="italic-text">{"En verano la leche se toma hirviendo"}</span>.
              </>
              :
              <>
              I have written three novels, two plays, countless TV series and movie scripts, plus lots of short stories and tales. In November 2021 I published my first novel <a href="https://www.amazon.es/dp/B09MPGT8PN/ref=sr_1_5?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=francisco+H&qid=1638102472&qsid=259-6801527-8888128&sr=8-5&sres=B08WKKLZCZ%2C8494607081%2C1910994316%2C8474231396%2CB09MPGT8PN%2C1777797853%2C8494339540%2C8897846157%2C8899086966%2C1356176887%2C8897846149%2C8498403464%2C149967788X%2C8498405068%2CB07ZDGCYSQ%2C167803097X%2C8491046518%2C1356033288%2C0976305216%2C8494240684"  target="_blank" rel="noreferrer">on Amazon</a>: <span className="italic-text">Las desventuras y añoranzas de Francisco H</span>. You can also <a href="https://arrobaralo.wordpress.com/2021/10/28/en-verano-la-leche-se-toma-hirviendo/"  target="_blank" rel="noreferrer">click here</a> to read my tale <span className="italic-text">En verano la leche se toma hirviendo</span>. 
              </>
              }
              </p>
          </div>
          <div className="body-section-item">
              <span className="body-section-image">
                  <img
                    src="/ralo/crea.png"
                    alt="content"
                    width="300"
                    height="165"
                  />
              </span>
              <p className="leading-relaxed text-base">
              {
                language === "spanish" ?
                <>
                Colaboro con el fotógrafo José García <a href="https://www.instagram.com/jose35mm/" target="_blank" rel="noreferrer">(@jose35mm)</a> en el proyecto Fotografía Imperfecta <a href="https://www.instagram.com/foto8rafia_imp/" target="_blank" rel="noreferrer">(@foto8rafia_imp)</a>. Publico Podcast y creo contenido gráfico de humor con NOT YET <a href="https://www.instagram.com/nnnnnotyet/" target="_blank" rel="noreferrer">(@nnnnnotyet)</a>. Haz <a href="http://www.notyet.es" target="_blank" rel="noreferrer">clic aquí</a> para echarte unas risas.
                </>
                :
                <>
                I collaborate with the photographer José García <a href="https://www.instagram.com/jose35mm/" target="_blank" rel="noreferrer">@jose35mm</a> in the Imperfect Photography project <a href="https://www.instagram.com/foto8rafia_imp/" target="_blank" rel="noreferrer">(@foto8rafia_imp)</a>. I am part of the humor collective NOT YET <a href="https://www.instagram.com/nnnnnotyet/" target="_blank" rel="noreferrer">(@nnnnnotyet)</a> where you can find a podcast and graphic content. <a href="http://www.notyet.es" target="_blank" rel="noreferrer">Click here</a> to have a laugh.
                </>
              }
              </p>
          </div>
          <div className="body-section-item">
              <span className="body-section-image">
                <img
                  className=""
                  src="/ralo/preguntas.png"
                  alt="content"
                  width="300"
                  height="165"
                />
              </span>
              <p className="leading-relaxed text-base">
              {
                language === "spanish" ?
              <>
              Cada paso es una pregunta y cada respuesta cerrada y absoluta algo de lo que huír. Me siento cómodo en la incertidumbre y te invito a que hagas lo mismo. Así que pregúntate y cuestiona cada cosa que te rodea y pregúntame a mí si te apetece. Te prometo no resolver tus dudas mas tampoco defraudarte. Haz clic para enviarme un email a mi dirección <a href="mailto:hola@yosoyralo.com">hola@yosoyralo.com</a>
              </> 
              :
              <>
              Each step is a question and each closed and absolute answer is something to flee from. I feel comfortable in the uncertainty and I invite you to do the same. So ask yourself and question everything around you and ask me if you feel like it. I promise not to solve your doubts but neither will I disappoint you. Click to send me an email to my address <a href="mailto:hola@yosoyralo.com">hola@yosoyralo.com</a>
              </>
              }
              </p>
          </div>
          <style jsx>{styles}</style>
    </section>
  );
};

export default Body;
