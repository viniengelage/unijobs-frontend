import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body{
        background: #D9D9D9;
        background: #ffffff;
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font: 16px Montserrat, sans-serif;
    }

    /* #root{
        max-width: 960px;
        margin: 0 auto;
        padding: 40px 20px;
    } */

    button{
        cursor: pointer;
    }
`;

export const container = styled.div`
  max-width: 1244px;
  margin: 0 auto;
  padding: 15px;
`;
