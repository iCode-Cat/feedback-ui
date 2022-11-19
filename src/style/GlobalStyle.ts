import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`



    :root {
        --purple: rgba(173, 31, 234, 1);
        --blue: rgba(70, 97, 230, 1);
        --navy: rgba(55, 63, 104, 1);
        --darkNavy: rgba(58, 67, 116, 1);
        --lightNavy: rgba(100, 113, 150, 1);
        --white: #ffffff;
        --lightGray: rgba(242, 244, 255, 1);
        --gray: rgba(247, 248, 253, 1);
        --orange: rgba(244, 159, 133, 1);
        --lightBlue: rgba(98, 188, 250, 1);       
    }

    * {
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    html {
        font-size:62.5%;
    }
    body {
        font-family: 'Roboto', sans-serif;
        font-size:1.6rem;
        background:  #FFF;
   
    }
`;
