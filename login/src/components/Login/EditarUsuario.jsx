import { FaUser, FaLock } from "react-icons/fa";
//import "./Cadastro.css";
import { useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import { Button, Checkbox, Formulario, TelaLogin } from "./styles";

import { useEffect } from "react";
import { editarUsuario, getUsuario } from "../../services/api";
const EditarUsuario = () => {
  const { id } = useParams();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  //enviando o formulario

  const loadData = async () => {
    try {
      const response = await getUsuario(id);
      setValues(response.data);
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    (async () => await loadData())();
  }, []);

  const handleEditar = async (e) => {
    try {
      e.preventDefault();
      const teste = await editarUsuario(id, values.email, values.password);
      navigate("/");
      console.log(teste);
    } catch (err) {
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
      <form onSubmit={handleEditar}>
        <h1>Editar o Usuário</h1>
        <Formulario>
          <input
            type="email"
            placeholder="Digite o Email"
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
          <FaUser className="icon" />
        </Formulario>
        <Formulario>
          <input
            type="password"
            placeholder="Digite a Senha"
            onChange={(e) => setValues({ ...values, password: e.target.value })}
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
    </TelaLogin>
  );
};

export default EditarUsuario;
