import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    background: ${props=>props.theme.body};


   
  }

  html, body, #root {
    height: 100%;
  }
  strong,span{
    color:${props=>props.theme.fontColor}
  }
h2,a{
  color:${props=>props.theme.color}
}

  
`;
