import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async"; // titulo da pagina
import Card from "../components/MainPage/index";


export default function Home() {

  return (
  
   
   <>
     <HelmetProvider>
        <Helmet title="Sistema de Repositorios" />
      </HelmetProvider>

{/* <Hearder/> */}
    <Card/>

 

   </>
   
    

  )
}
