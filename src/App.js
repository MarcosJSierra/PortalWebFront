import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header } from './components/Headr/header';
import { MainPage } from './components/';
import { DistribuidoresMain } from './components/distribuidores';
import { ProductosMain } from './components/productos';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Header />
      <div className="container-fluid">
        <Switch>
          <Route path="/distribuidores">
            <DistribuidoresMain />
          </Route >
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route exact paht="/productos">
            <ProductosMain />
          </Route>
        </Switch>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
