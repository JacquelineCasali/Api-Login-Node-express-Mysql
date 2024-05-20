import { useState ,useEffect,createContext} from "react";
import {api,createSession} from '../services/api'
import { useNavigate } from "react-router-dom";

//useEffect roda quand o componente inicia na tela

//contexto de autenticaçõ agrupar informação
export const AuthContext= createContext()

//children que vc envolveu com o componente
export const AuthProvider= ({children})=>{
  const [user,setUser]=useState(null)
  //carregamento do login 
  const [loading,setLoading]=useState(true)
  const navigate = useNavigate();
 useEffect(()=>{
  //recuperando o usuario
  //parse STRING EM OBJEOTO
 const user=localStorage.getItem('user')
 const token=localStorage.getItem('token')


 if(user && token){
  setUser(JSON.parse(user))
//api.defaults.headers.Authorization =`${token}`
api.defaults.headers['x-access-token'] =`${token}`

 }
 setLoading(false)
 
},[])
const login =async(email,password)=>{
const response=await createSession(email,password);
//gravando
//stringify tranformando objeto em string 
localStorage.setItem('user',JSON.stringify(response.data.users))
localStorage.setItem('token',response.data.token)
//autenticação do token 
api.defaults.headers['x-access-token'] =`${response.data.token}`
//api.defaults.headers.Authorization =`Bearer ${response.data.token}`


setUser(response.data.users);
navigate("/");
// userAuth 
console.log('login',response.data)



}
const logout =()=>{
  localStorage.removeItem('user') ;
localStorage.removeItem('token')
api.defaults.headers['x-access-token'] =null
//  api.defaults.headers.Authorization=null

  setUser(null)
  navigate("/login");
}


   return(  <AuthContext.Provider 
   value={{
    //se exitir usuario fica true se nao falso
//!! converte para boleano

    authenticated: !!user,
    user,
    loading,
    login,
    logout

    //userId:'123',
   //user:{email:'sa@terra.com'}
   }}>
{children}

   </AuthContext.Provider>)
  
}