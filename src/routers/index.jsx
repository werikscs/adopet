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
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/Cadastro">
        <Cadastro />
      </Route>
      <Route path="/Login">
        <Login />
      </Route>
      <Route path="/Adote">
        <Adote />
      </Route>
      <Route path="/Doe-um-pet">
        <DoePet />
      </Route>
      <Route path="/Pet/:name">
        <PagePet />
      </Route>
      <Route path="/Dashboard">
        <Dashboard />
      </Route>
    </Switch>
  );
};

export default Routers;
