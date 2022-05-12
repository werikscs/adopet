import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Cadastro from "../pages/Cadastro";
import Home from "../pages/Home";
import Login from "../pages/Login";

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
      <Route path="/Adote"></Route>
      <Route path="/Doe-um-pet"></Route>
      <Route path="/Pet/:name"></Route>
      <Route path="/Dashboard"></Route>
    </Switch>
  );
};

export default Routers;
