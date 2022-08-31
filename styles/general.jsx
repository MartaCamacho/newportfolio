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
    }
    .gen-section {
        width: 100%;
        padding: 4rem 2rem;
    }

    .gen-section:nth-child(even) {
        background-color: var(--clr-blue);
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
        width: 50%;
    }
    
    .what-i-do-text h1 {
        font-size: 50px;
        margin: 0px;
    }

    .what-i-do-text h2 {
        font-size: 35px;
    }
    
    .what-i-do-description {
        font-size: 30px;
    }
    
    /* / what I do section */

    /* about section */

    #about .content {
        display: flex;
        justify-content: space-evenly;
    }

    .about-content {
        width: 50%;
    }

    /* / about section */
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
    position: relative;
    z-index: 20;
}

.nav-fixed {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
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

.nav-text-container {
    display: flex;
    align-items: center;
}

.nav-text a {
    margin: 0 5px;
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
`;
