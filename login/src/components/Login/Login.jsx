import { FaUser, FaLock } from "react-icons/fa";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth";
import { Button, Checkbox, Formulario, TelaLogin } from "./styles";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handlLogin = async (e) => {
    try {
      //não recarrega a pagina
      e.preventDefault();
      await login(email, password);
    } catch (err) {
      console.error(err);
      if (err.response) {
        setMessage(err.response.data.message);
      }
    }
  };

  return (
    <>
      <TelaLogin>
        {message ? <h1>{message}</h1> : ""}
        <form>
          <h1>Acesse o Sistema</h1>

          <Formulario>
            <input
              type="email"
              placeholder="Digite o Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FaUser className="icon" />
          </Formulario>

          <Formulario>
            <input
              type="password"
              placeholder="Digite a Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaLock className="icon" />
          </Formulario>
          <Checkbox>
            <label>
              <input type="checkbox" />
              Lembre de mim{" "}
            </label>
            <Link to={"#"}>Esqueceu sua senha?</Link>
          </Checkbox>

          <Button className="cadastrar" onClick={handlLogin}>
            Entrar
          </Button>
          <Checkbox>
            <p>
              Não tem uma conta? <Link to="/cadastro">Crie uma conta</Link>{" "}
            </p>
          </Checkbox>
        </form>
        {/* </div> */}
      </TelaLogin>
    </>
  );
};

export default Login;
