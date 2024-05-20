import React, { useState ,useContext} from "react";
import styles from "./Hearder.module.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Dark from "../dark/dark";
import { AuthContext } from "../../context/auth";

function Hearder() {
  const {user,logout} = useContext(AuthContext)
   
  const handleLogout= ()=>{
    console.log('sair')
    logout();
  }
  
  //mostrar ou nao menu
    const [menu, setMenu] = useState(false);
    // //  mudança de menu
    const click = () => {
      setMenu(!menu);
    };
  return (
    <header className={styles.header}>
        <span>Sistema de Repositorio</span>
      

        <nav className={`${styles.menuSandwich} ${menu ? styles.show : ""} `} onClick={click} >
        <Link  className={styles.a} to="/">Home</Link>
    


    {(user?.email)?
     <Link className={styles.a} to={`/edit/${user?.id}`}>
     Editar Usuario</Link>:
<Link className={styles.a} to={`/cadastro`}>
          Cadastro Usuario</Link>
          }
{/* <Link className={styles.a} to={`/login`}>
         
         
          Login</Link> */}
      </nav>

          
          
      {(user?.email)?
      <h3>Olá {(user?.email)}!</h3>:""}

     {/* botao responsivo */}
   
     <div className={styles.hamburger} onClick={click}>
     
     <FaBars size={20} style={{ color: "black"}} />
   
   </div>
   
   
   {(user?.email)?
   <button className={styles.btn} onClick={handleLogout}>Sair</button>
:
<button className={styles.btn}>
  <Link className="link" to='/login'>
  Login </Link>
  </button>
 
  }

  
   <Dark/>
    </header>
  );
}

export default Hearder;
