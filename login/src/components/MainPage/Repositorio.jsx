import React, { useState } from "react";

import { Link } from "react-router-dom";
import { BsTrash3 } from "react-icons/bs";
import { Cadastrar, Lista, Listar } from "./styles";

//pesquisa
//lista vem de fora repositorio
// onDeleteRepo deleta e onNewRepo cadastra
const Repositorio = ({ repositores, onDeleteRepo, onNewRepo }) => {
  const [newRepo, setNewRepo] = useState("");

  return (
    <>
      <Listar>
        <h2 className="title">Repositórios</h2>

        <Lista>
          {repositores.map((repositorio) => (
            <li key={repositorio.id} className="item">
              <div className="info">
                {/* so aparece antes da barra  */}

                <div className="owner">
                  {repositorio.name.substring(0, repositorio.name.indexOf("/"))}
                </div>
                {/* so aparece depois da barra  */}
                {/* <div className="owner">{repositorio.name.substring(repositorio.name.indexOf('/')+1)}
                </div> */}
                <div className="name">
                  {repositorio.url}

                  {/* {repositorio.url} */}
                </div>
              </div>
              {/* o repositorio espesifico */}
              {/* name.id */}
              <Link onClick={() => onDeleteRepo(repositorio)}>
                <BsTrash3
                  color="black"
                  size={30}
                  cursor="pointer"
                  className="icone"
                />
              </Link>
            </li>
          ))}
        </Lista>
      </Listar>

      <Cadastrar>
        {/* <div className="new"> */}
        <label htmlFor="new-repo">Novo Repositório</label>
        <input
          type="url"
          name="new-repo"
          id="new-repo"
          placeholder="Digite a Url do Repositorio"
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
        />

        {/* adicionar qual repositorio esta adicionando */}
        <button onClick={() => onNewRepo(newRepo)}>Adicionar</button>

        {/* </div> */}
      </Cadastrar>
    </>
  );
};
export default Repositorio;
