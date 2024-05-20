import React, { useState } from 'react'
import {MdDarkMode} from "react-icons/md"
import { BsFillLightbulbFill } from "react-icons/bs";
import {ThemeProvider} from 'styled-components'

import {lightTheme,darkTheme
   }from './styles'
import GlobalStyle from "../../styles/global";
 function Dark() {
const[theme,setTheme]= useState("light")
const themeToggler=()=>{
  theme==="light"?setTheme('dark'):setTheme('light')
} 


return (
    <ThemeProvider theme={theme==='light'? lightTheme:darkTheme}>
    
{/* tela fundo branco ou preto */}
    {theme==="light"? (<MdDarkMode size={30} cursor={'pointer'} onClick={()=>themeToggler()} />):(
    <    BsFillLightbulbFill color='white' size={30} cursor={'pointer'} onClick={()=>themeToggler()} />)

      }
          
<GlobalStyle/>
        
       </ThemeProvider>



  )
}
export default Dark