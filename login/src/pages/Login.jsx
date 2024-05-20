import { Helmet, HelmetProvider } from "react-helmet-async"; // titulo da pagina
import Login from "../components/Login/Login";


export default function Loginelogaut() {
  return (
  

   <>
     <HelmetProvider>
        <Helmet title="Login" />
      </HelmetProvider>

   
<Login/>
   

   </>
   
    

  )
}
