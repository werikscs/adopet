import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Adote from "../pages/Adote";
import Cadastro from "../pages/Cadastro";
import Dashboard from "../pages/Dashboard";
import DoePet from "../pages/DoePet";
import Home from "../pages/Home";
import Login from "../pages/Login";
import PagePet from "../pages/PagePet";

const Routers = () => {
  return (
    <Switch>
      {/* */}
      <Route exact path="/">
        <Home />
      </Route>

      {/*  */}
      <Route path="/cadastro">
        <Cadastro />
      </Route>

      {/*  */}
      <Route path="/login">
        <Login />
      </Route>

      {/* página com a lista de animais */}
      <Route path="/adote">
        <Adote />
      </Route>

      {/* página do detalhe do pet */}
      <Route path="/adote/:id">
        <PagePet />
      </Route>

      {/* página dos pets que o usuário cadastrou na plataforma (somente logado) */}
      <Route path="/user/pets">
        <Dashboard />
      </Route>

      {/* página com tela de cadastro de animal (somente logado) */}
      <Route path="/user/doe">
        <DoePet />
      </Route>
    </Switch>
  );
};

export default Routers;
