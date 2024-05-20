import axios from "axios";

export const api = axios.create({ baseURL: "http://localhost:3001" });

//metodo que cria a sessao do login

export const createSession = async (email, password) => {
  const url = `/login`;
  return api.post(url, { email: email, password: password });
};

export const createUsuario = async (email, password) => {
  const url = `/user`;
  return api.post(url, { email: email, password: password });
};

export const editarUsuario = async (id,email, password) => {
  const url = `/user/${id}`;
  return api.put(url, { email: email, password: password });
};
export const getUsuario = async (id) => {
  let url = `/user/${id}`;


  console.log("query", url);
  return api.get(url);
};


export const getrepository = async (userId, query) => {
  let url = `/user/${userId}/repositorio/`;
  //let url=`/repo/`

  if (query !== "") {
    url += `?url=${query}`;
  }

  console.log("query", url);
  return api.get(url);
};
// criar
export const createRepository = async (userId, repositorioUrl) => {
  const repositorioName = getrepositoryName(repositorioUrl);
  const url = `/user/${userId}/repositorio`;
  return api.post(url, { name: repositorioName, url: repositorioUrl });
};

//deletar

export const deleteRepository = async (userId, id) => {
  const url = `/user/${userId}/repositorio/${id}`;
  return api.delete(url);
};
//extrarir o nome dentro da url
//regex
//https://ihateregex.io/expr/url/
const getrepositoryName = (url) => {
  const regex =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\\+.~#?&\\/\\/=]*)/;
  //mapea
  const match = url.match(regex);
  console.log("match", match);
  if (match[2]) {
    const values = match[2].split("/");
    console.log(values);
    // 1 parte
    return `${values[1]}/${values[2]}`;
  }
};
