import React,{useState} from "react";
import {BrowserRouter,Route, Switch} from "react-router-dom";
import Login from "../pages/Login";
import Empleado from "../pages/Empleado";
import Admin from "../pages/Admin";

function Routes() {
  const [info,setInfo] = new useState();

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/empleado" component={Empleado}/>
        <Route exact path="/admin" component={Admin}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
