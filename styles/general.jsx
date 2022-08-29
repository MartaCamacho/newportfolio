import css from 'styled-jsx/css';

export const globalStyles = css.global`
    .gen-section {
        width: 100%;
        padding: 4rem 2rem;

    }

    .gen-section:nth-child(even) {
        background-color: red;
    }

    .title.gen-section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
`;

export const navbarStyles = css`
.nav-container {
    height: 45px;
    background-color: #fff;
    color: #272727;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    position: relative;
}

.nav-fixed {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
}

.favicon {
    border: 1px solid black;
    padding: 2px 5px;
    color: #272727;
    font-weight: bold;
    background-color: yellow;
    z-index: 2;
    margin-bottom: 0.2rem;
}

.favicon-back {
    border: 1px solid black;
    padding: 2px 5px;
    position: absolute;
    width: 46px;
    height: 27px;
    background-color: pink;
    z-index: 1;
    left: 2.5rem;
    bottom: 0.35rem;
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
