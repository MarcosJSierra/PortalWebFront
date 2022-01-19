import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header } from './components/Headr/header';
import { MainPage } from './components/';
import { DistribuidoresMain } from './components/distribuidores';
import { ProductosMain } from './components/productos';
import { CanalesAutorizadosMain } from './components/canales-autorizados';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Header />
      <div className="container-xxl">
        <Switch>
          
          <Route path="/distribuidores">
            <DistribuidoresMain />
          </Route >
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route  path="/productos">
            <ProductosMain />
          </Route>
          <Route  paht="/canalesautorizados">
            <CanalesAutorizadosMain />
          </Route>
        </Switch>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
