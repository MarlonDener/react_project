import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
html {
    font-size:62.5%;
    scroll-behavior: smooth;
    overflow-x: hidden;
}

html::-webkit-scrollbar{
    width:10px;
}

html::-webkit-scrollbar-track{
    background: #e3e3e3;
}

html::-webkit-scrollbar-thumb{
    background: #dc143c;
}


body{
    font-family: 'Open Sans', sans-serif;
    font-size:1.6rem;
    overflow-x: hidden;
}
h1, h2, h3, h4, h5, h6{
    font-family: 'Montserrat', sans-serif;
    }

p{
    font-size: 19px;
    margin: 10px 0;
}
strong{
    font-family: 'Montserrat', sans-serif;
    font-size: 40px;
    display: block;
}
@media (max-width: 700px) {
    strong{ font-size: 30px;}
    p{font-size:17px,
      width: 100%,
    };
}
`;
