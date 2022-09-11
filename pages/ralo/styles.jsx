import css from 'styled-jsx/css';

export const raloStyles = css`

@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;0,700;1,400&display=swap');

html {
  height: 100%;
}

body {
  margin: 0;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 16px;
  max-width: 100vw;
}

a {
  color: #1156cc;
}

p {
  margin: 0;
  padding: 0;
}

.italic-text {
  font-family: 'Source Sans Pro', sans-serif;
  font-style: italic;
}

.bg {
  animation: slide 33s ease-in-out infinite alternate;
  background-image: linear-gradient(-60deg, #fff 50%, #931b2f 50%);
  bottom: 0;
  left: -50%;
  opacity: 0.5;
  position: fixed;
  right: -50%;
  top: 0;
  z-index: -1;
}

.bg2 {
  animation-direction: alternate-reverse;
  animation-duration: 34s;
}

.bg3 {
  animation-duration: 25s;
}

.content {
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 0.25em;
  box-shadow: 0 0 0.25em rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  left: 50%;
  padding: 10vmin;
  position: fixed;
  text-align: center;
  top: 50%;
  transform: translate(-50%, -50%);
}

@keyframes slide {
  0% {
    transform: translateX(-25%);
  }
  100% {
    transform: translateX(25%);
  }
}


.top-image {
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  background-color: #fff;
  background-image: url(../ralo/1200x500.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}
.top-image img {
  width: auto;
  height: 300px;
  margin: 0 auto;
}

.top-image div:first-child {
  margin: 0 auto;
}

.top-section-container {
  position: relative;
}

.top-flag-spain-image,
.top-flag-uk-image {
  position: absolute;
  top: 10px;
  cursor: pointer;
}

.top-flag-spain-image {
  right: 40px;
}

.top-flag-uk-image {
  right: 10px;
}

.top-text-container {
  display: flex;
  flex-direction: row;
  margin: 10px auto;
  background-color: rgba(255, 255, 255, 0.322);
  max-width: 90vw;
  width: 1240px;
  border-radius: 6px;
  padding: 10px 0;
}

.top-text-left-side {
  width: 100%;
  text-align: center;
  padding: 20px 20px 20px 0;
  border-right: 1px solid black;
}

.top-text-left-side h2 {
  color: #931b2f;
  margin-top: 0;
  margin-bottom: 10px;
}

.ralo-logo-rounded {
    border-radius: 50%;
}

.top-text-right-side {
  padding: 20px;
  display: flex;
  align-items: center;
}

/* body section */
.body-section-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 20px auto 40px;
}

.body-section-item {
  width: 350px;
  max-width: 20%;
  border-radius: 6px;
  background-color: rgba(224, 221, 221, 0.932);
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-top: 10px;
}

.body-section-image {
  margin: 0 auto;
}

.body-section-image img {
  border-radius: 6px;
}

/* / body section */

/* footer */

.footer-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background-color: #fff;
  padding: 0 20px;
  box-shadow: 0 0 0.25em rgba(0, 0, 0, 0.158);
}

.footer-element {
  width: 33.33%;
}

.footer-left-side {
  display: flex;
  align-items: center;
}

.footer-left-side img {
  width: 45px;
  height: 45px;
}

.footer-left-side span:not(:first-child) {
  margin: 0 20px 0 5px;
  padding: 0 20px 0 5px;
  border-right: 1px solid black;
  height: 20px;
  display: flex;
  align-items: center;
}

.footer-social {
  display: flex;
  justify-content: flex-end;
}

.marta-signature {
  display: flex;
  align-items: center;
  justify-content: center;
}

.marta-signature a {
  margin-left: 3px;
  color: black;
}

.marta-signature-bottom {
  display: none;
}

.footer-social a {
  width: 25px;
  height: 25px;
  color: #B4B8BF;
}

.footer-social a + a {
  margin-left: 10px;
}

@media (max-width: 1000px) {
  .body-section-item {
    min-width: 35vw;
    max-width: 49%;
    padding: 20px;
  }
}

@media (max-width: 770px) {
  body,
  html {
    max-width: 100vw;
    overflow-x: hidden;
  }

  .top-image {
    background-size: cover;
  }
  .top-text-container {
    display: flex;
    flex-direction: column;
  }

  .top-text-left-side {
    border-right: 0px;
  }

  .body-section-item {
    min-width: 95vw;
    max-width: 95vw;
    flex-direction: column;
    border-radius: 0px;
  }


  .body-section-image img {
    width: 90vw;
    height: auto;
  }

  .footer-left-side span {
    margin-right: 10px;
    padding-right: 10px;
  }

  .footer-container {
    padding: 0 10px;
  }

  .footer-left-side span:not(:first-child) {
    padding: 0 10px 0 3px;
    margin: 0 10px 0 3px;
  }

  .marta-signature {
    display: none;
  }

  .marta-signature-bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    background-color: #fff;
    padding-bottom: 15px;
  }

  .marta-signature-bottom a {
    color: black;
    margin-left: 3px;
  }

  .footer-element {
    width: auto;
  }
}

`;