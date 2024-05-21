import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/auth";
import { Cadastrar } from "../MainPage/styles";
import { useNavigate } from "react-router-dom";
import axios from "axios";


//const userId='4'

export default function Repo() {
   
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    url: "",

  });

  const [message, setMessage] = useState("");
  const { user } = useContext(AuthContext);
  const handleSubmit = async (e) => {
    
    e.preventDefault();
    axios
      .post(`https://api-login-node-express-mysql.onrender.com/user/${user?.id}/repositorio`, values
             )
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        if (err.response) {
          setMessage(err.response.data.message);
        } else {
          setMessage("Erro tente Novemante! Banco não conectado");
        }
      });
    //alert("Enviando os dados:" + email + " - " + senha);
  };

  return (
    <>
      <Cadastrar>
        {/* <div className="new"> */}
        {message ? <h1>{message}</h1> : ""}
        <form onSubmit={handleSubmit}>
          <label htmlFor="repo">Name</label>
          <input
            type="text"
            className="repos"
            name="repo"
            id="repo"
            placeholder="Digite a Url do Repositorio"
            onChange={(e) => setValues({ ...values, name: e.target.value })}
        
        />
          <label htmlFor="new-repo">Novo Repositório</label>
          <input
            type="url"
            name="new-repo"
            id="new-repo"
            placeholder="Digite a Url do Repositorio"
            onChange={(e) => setValues({ ...values, url: e.target.value })}
           
          />

          {/* adicionar qual repositorio esta adicionando */}
          <button >Adicionar</button>

          {/* </div> */}
        </form>
      </Cadastrar>
    </>
  );
}
