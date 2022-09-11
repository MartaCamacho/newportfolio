import React, {useState, useEffect} from "react";
import Head from "next/head";
import Welcome from "../components/Welcome";
import Body from "../components/Body";
import Footer from "../components/Footer";
import {raloStyles} from '../ralo/styles';

export default function IndexPage() {
  const [language, setLanguage] = useState('spanish');
  const [baseUrl, setBaseUrl] = useState("http://www.martacamacho.com/ralo");

  useEffect(() => {
    setBaseUrl(window.location.pathname);
  }, []);
  
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>rALo</title>
        <meta
          key="description"
          name="description"
          content="Poeta -  Escritor - Guionista - Dramaturgo - Director // Storyador"
        />
        <meta charSet="utf-8"/>
        <meta name="keywords" content="ralo, escritor, director, poeta, guionista, dramaturgo"/>
        <meta name="robots" content="index, follow"/>
        <meta property="og:site_name" content="yosoyralo.com"/>
        <meta property="og:title" content="rALo" />
        <meta property="og:description" content="Poeta -  Escritor - Guionista - Dramaturgo - Director // Storyador" />
        <meta content="summary" name="twitter:card"/>
        <meta name="twitter:title" content="rALo"/>
        <meta content="yosoyralo.com" name="twitter:site"/>
        <meta content="rALo" name="twitter:creator"/>
        <meta name="twitter:image" content={baseUrl + "/favicon.ico"}/>
        <meta name="twitter:description" content="Poeta -  Escritor - Guionista - Dramaturgo - Director // Storyador" />
        <link rel="shortcut icon" type="img/png" href={baseUrl + "/favicon.ico"}/>
        <link rel="icon" type="img/png" href={baseUrl + "/favicon.ico"}/>
      </Head>
      <div className="page-container">
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
        <Welcome changeLanguage={setLanguage} language={language}/>
        <Body language={language}/>
        <Footer />
      </div>
      <style jsx>{raloStyles}</style>
    </>
  );
}
