import css from 'styled-jsx/css';

export const globalStyles = css.global`
    :root {
        --clr-pink: #F84791;
        --clr-blue:  #00FFFF;
        --clr-green: #B4F8C8;
        --clr-yellow: #FBE7C6;
        --clr-peach: #F9B8B1;
        --clr-black: #272727;
        --clr-white: #fff;

        --fs-desktop:1.125rem;
        --fs-mobile: 1.25rem;
        --fs-h2: 3rem;
        --fs-h3: 1.5rem;
        --fs-h4: 1.125rem;
        --fs-h2-mobile: 2.25rem;
        --fs-h3-mobile: 1.25rem;
        --fs-h4-mobile: 1rem;
    }

    * {
        margin: 0;
        padding: 0;
    }

    h2 {
        font-size: var(--fs-h2);
        text-align: center;
    }

    .gen-section {
        width: 100%;
        padding: 4rem 2rem;
    }

    .gen-section:nth-child(even) {
        background-color: var(--clr-peach);
        color: var(--clr-black);
    }

    .gen-section .title {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .gen-section .content {
        max-width: 1200px;
        margin: 0 auto;
    }


    /* what I do section */

    #whatIDo .content {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .what-i-do-text {
        width: 60%;
    }
    
    .what-i-do-text h1 {
        font-size: 4rem;
        margin: 0px;
    }

    .what-i-do-text h2 {
        margin: 20px 0;
        padding: 5px;
        font-weight: normal;
        background-color: var(--clr-pink);
        border: 2px solid var(--clr-peach);
    }
    
    .what-i-do-description {
        font-size: var(--fs-h3);
        max-width: 500px;
    }
    
    /* / what I do section */

    /* about section */

    #about .content {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    .gen-section#about .content img {
        border-radius: 50%;
    }

    .about-content {
        width: 50%;
    }

    .about-content h2 {
        margin: 0;
    }

    .about-content h3 {
        font-size: var(--fs-h4);
        border: 1px solid var(--clr-black);
        background-color: var(--clr-pink);
        padding: 5px;
        margin: 10px 0;
    }

    /* / about section */

    /* projects section */

    .projects-sec {
        display: flex;
        max-width: 100%;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .projects-sec h2 {
        font-size: var(--fs-h2);
        text-align: center;
        width: 100%;
        margin-top: 0px;
        padding-bottom: 4rem;
    }

    .project-item-wrapper {
        width: 100%;
        max-width: 33.33%;
        margin-bottom: 20px;
        color: var(--clr-black);
    }

    .project-item {
        display: inline-block;
        background-color: var(--clr-green);
        width: calc(100% - 20px);
        height: 100%;
        padding: 20px;
        margin: 0 10px;
        transition: all .3s;
    }

    .project-item:hover {
        background-color: var(--clr-peach);
        margin: 0 5px;
        padding: 25px;
        transition: all .3s;
    }

    .project-item img,
    .project-item {
        border-radius: 8px;
    }

    .project-item img {
        width: 100%;
        height: 100%;
    }

    .project-item-title {
        font-size: var(--fs-desktop);
        font-weight: bold;
        margin: 10px 0 5px;
    }

    .project-item-technologies {
        margin-top: 10px;
    }

    /* / projects section */
    /* contact section */

    .social-icons {
        display: flex;
        height: 100%;
        min-height: 32px;
    }

    .social-icons a {
        min-height: 37px;
        min-width: 37px;
    }

    .contact-sec {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: var(--fs-h3);
    }

    .email-link {
        margin: 15px 0;
    }

    .email-link:hover {
        transition: all .3s;
        text-decoration: underline;
    }

    .cv-link {
        font-size: var(--fs-h4);
        background-color: var(--clr-blue);
        border: 3px solid var(--clr-pink);
        border-radius: 6px;
        padding: 10px 35px;
        margin: 15px 0; 
        transition: all .3s;
    }

    .cv-link:hover {
        background-color: var(--clr-green);
        cursor: pointer;
        transition: all .3s;
    }

    .social-icons {
        display: flex;
        align-items: center;
        margin: 15px 0 0; 
    }

    .social-icons a + a {
        margin-left: 30px;
    }

    .social-icons a {
        padding: 2px;
        transition: all .3s;
    }

    .social-icons a:hover {
        filter: invert(100%);
        transition: all .3s;
        background-color: var(--clr-white);
        border-radius: 6px;
    }

    /* / contact section */

    @media (max-width: 770px) {

        .gen-section {
            padding: 2rem 1rem;
        }

        h2 {
            font-size: var(--fs-h2-mobile);
        }

        /* what i do */
        #whatIDo .content {
            display: flex;
            flex-direction: column;
        }

        .what-i-do-text {
            width: 100%;
        }

        .what-i-do-text h1 {
            font-size: 3rem;
        }
        
        .what-i-do-description {
            font-size: var(--fs-h3-mobile);
            margin-bottom: 2rem;
        }

        /* about section */

        #about .content {
            display: flex;
            flex-direction: column;
        }

        .about-content {
            width: 100%;
        }

        .about-content h2 {
            margin: 20px 0;
        }

        .about-content h3 {
            font-size: var(--fs-h3-mobile);
            padding: 5px;
        }

        /* projects section */

        .projects-sec {
            display: flex;
            flex-direction: column;
        }

        .project-item {
            max-width: 100%;
        }

        .project-item-wrapper {
            width: 100%;
            max-width: 100%;
            margin-bottom: 20px;
        }
    }
`;

export const navbarStyles = css`
.nav-container {
    height: 60px;
    background-color: var(--clr-white);
    color: var(--clr-black);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 20;
    width: 100%;
}

.nav-fixed {
    position: relative;
}

.favicon {
    border: 1px solid var(--clr-black);
    padding: 2px 5px;
    color: var(--clr-black);
    font-weight: bold;
    background-color: var(--clr-blue);
    z-index: 2;
    margin-bottom: 0.2rem;
}

.favicon-back {
    border: 1px solid black;
    padding: 2px 5px;
    position: absolute;
    width: 46px;
    height: 27px;
    background-color: var(--clr-pink);
    z-index: 1;
    left: 2.5rem;
    bottom: 0.75rem;
}

.hamburger {
    display: none;
}

.nav-text-container {
    display: flex;
    align-items: center;
}

.nav-text a {
    margin: 0 5px;
        transition: all .3s;
}

.nav-text a:hover {
    text-decoration: underline;
    transition: all .3s;
}

.lang-container {
    display: flex;
    align-items: center;
}

.lang-item {
    cursor: pointer;
    margin: 0 5px;
    display: flex;
    align-items: center;
}

@media (max-width: 770px) {
    .nav-text-container, 
    .nav-text {
        display: flex;
        flex-direction: column;
    }

    .hamburger {
        display: inline-block;
    }

    .nav-closed {
        display: none;
    }

    .nav-open {
        position: absolute;
        background-color: var(--clr-green);
        top: 60px;
        left: 0;
        width: 100%;
        height: calc(100vh - 60px);
    }

    .nav-open a {
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .lang-container {
        height: 60px;
    }
}
`;
