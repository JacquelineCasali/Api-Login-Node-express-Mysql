import { FaUser, FaLock } from "react-icons/fa";
//import "./Cadastro.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button, Checkbox, Formulario, TelaLogin } from "./styles";
import { createUsuario } from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CadastroUsuario = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const toastOptions = {
    position: "top-center",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "green",
  };

  const handleValidation = () => {
     if (email === "") {
    //   //campo nao pode ser vazio
     toast.error("Por favor, preencha seu email", toastOptions);
    //   return false;
    } else if (password === "") {
        toast.error("Por favor, preencha a senha", toastOptions);
      return false; 
    }

    return true;

  };



  //enviando o formulario
  const handleCadastro = async (e) => {
    //não recarrega a pagina
    try {
      e.preventDefault();
      if (handleValidation()) {
      const teste = await createUsuario(email, password);
      navigate("/login");
      console.log(teste);
    }} catch (err) {
      console.error(err);
      if (err.response) {
        setMessage(err.response.data.message);
      }
    }
  
  };

  return (
    <TelaLogin>
      {/* imprimir mensagem */}
      {message ? <h1>{message}</h1> : ""}
      <form onSubmit={handleCadastro}>
        <h1>Cadastre o Usuário</h1>
        <Formulario>
          <input
            type="email"
            placeholder="Digite o Email"
            onChange={(e) => setEmail(e.target.value)}
            //  onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
          <FaUser className="icon" />
        </Formulario>
        <Formulario>
          <input
            type="password"
            placeholder="Digite a Senha"
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className="icon" />
        </Formulario>

        <Button className="cadastrar" type="submit">
          Cadastrar
        </Button>

        <Checkbox>
          <p>
            Já tem conta? <Link to="/login"> Clique aqui realize o Login </Link>{" "}
          </p>
        </Checkbox>
      </form>
      <ToastContainer toastStyle={{ backgroundColor: "crimson" }} />

    </TelaLogin>
  );
};

export default CadastroUsuario;
