import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/Error/Error";
import Loginelogaut from "../pages/Login";

import Hearder from "../components/Hearder/Hearder";
import { Container, Loading } from "../styles/styles";
import { AuthProvider, AuthContext } from "../context/auth";
import { Navigate } from "react-router-dom";
import Repos from "../pages/Repos";
import CadastroLogin from "../pages/CadastroLogin";

import Editar from "../pages/Editar";

const AppRoutes = ({ onLogout }) => {
  //rotas privadas
  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);

    if (loading) {
      return <Loading>Carregando...</Loading>;
    }

    //se nao tiver autenticado navega ate o login
    if (!authenticated) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <Router>
      <AuthProvider>
        <Hearder onClick={onLogout} />

        <Container>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Private>
                  <Home />
                </Private>
              }
            />
            <Route
              exact
              path="/repo"
              element={
                <Private>
                  <Repos />
                </Private>
              }
            />
            <Route exact path="/login" element={<Loginelogaut />} />
            <Route exact path="/cadastro" element={<CadastroLogin />} />
            <Route exact path="/edit/:id" element={
              <Private>
 <Editar />
              </Private>
           } />

            <Route path="*" element={<Error />} />
          </Routes>
        </Container>
      </AuthProvider>
    </Router>
  );
};
export default AppRoutes;
