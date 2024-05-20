// import "../App.css";

import Hearder from "../../components/Hearder/Hearder";
import { Container } from "./styles";

export default function Error() {
  
  const handleLogout=()=>{
    console.log('logout')
  }
  return (
    <>
       
       <Hearder onLogout={handleLogout}/>
       <Container>   
      
  <span >
  404

  </span>
  <strong >
          Página Não Localizada!
        </strong>
       

     
 
        </Container>

  

    </>
  );
}
