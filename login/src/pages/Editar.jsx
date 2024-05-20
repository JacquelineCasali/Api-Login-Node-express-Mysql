import { Helmet, HelmetProvider } from "react-helmet-async"; // titulo da pagina
import EditarUsuario from "../components/Login/EditarUsuario";


export default function Editar() {
  return (
  

   <>
     <HelmetProvider>
        <Helmet title="Cadastro Usuário" />
      </HelmetProvider>


<EditarUsuario/>
   

   </>
   
    

  )
}
