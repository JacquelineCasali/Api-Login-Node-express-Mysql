
import { Helmet, HelmetProvider } from "react-helmet-async"; // titulo da pagina

import React from "react";
import Repo from "../components/Repo";
//import { useNavigate } from "react-router-dom";


export default function Repos() {
  
  return (
  
   
   <>
     <HelmetProvider>
        <Helmet title="Sistema de Repositorios" />
      </HelmetProvider>


 <Repo/>

 

   </>
   
    

  )
}
