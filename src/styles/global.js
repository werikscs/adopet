import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    outline: 0;
}
:root{
    --color-background: #fff;
    --color-footer: #32373C;
//=========================================//
    --input-background-color-primary: #FF8E15;
    --input-background-color-secondary: #FFC64A;
    --input-background-color-tertiary: #fff;
//=========================================//
    --color-first: #FF8E15;
    --color-second: #FFEBC5;
    --color-third: #FF6853;
    --color-fourth: #ffffff;
    --color-fifth: #C4C4C4;
    --color-six: #257CFF;
    --color-seven: #FFF9F2;
//=========================================//
    --color-icons: #FFA115;
    --color-icon-male: #3a0ca3 ;
    --color-icon-female: #b5179e;
//=========================================//
    --color-title: #333437;
    --color-text: #606060;
//=========================================//
body, input, button{
    font-family: 'Hind', sans-serif;
    font-size: 1rem;
}
h1, h2, h3, h4, h5, h6{
    font-family: 'Baloo Chettan 2', cursive;
    font-weight: 700;
    
}
button{
    cursor: pointer;
}
button:hover{
    filter: brightness(90%);
}
}
`;
