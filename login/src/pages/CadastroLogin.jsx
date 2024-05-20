import { Helmet, HelmetProvider } from "react-helmet-async"; // titulo da pagina
import CadastroUsuario from "../components/Login/CadastroUsuario";


export default function CadastroLogin() {
  return (
  

   <>
     <HelmetProvider>
        <Helmet title="Cadastro Usuário" />
      </HelmetProvider>


<CadastroUsuario/>

   

   </>
   
    

  )
}
