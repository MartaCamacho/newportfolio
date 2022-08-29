import css from 'styled-jsx/css';

export const globalStyles = css.global`
    
`;

export const navbarStyles = css`
.favicon {
    border: 1px solid black;
    padding: 2px 5px;
    position: relative;
    color: #fff;
    font-weight: bold;
    background-color: yellow;
    z-index: 2;
}

.favicon-back {
    border: 1px solid black;
    padding: 2px 5px;
    position: absolute;
    width: 46px;
    height: 27px;
    background-color: pink;
    z-index: 1;
}

.nav-container {
    height: 45px;
    background-color: #fff;
    color: #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
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
`