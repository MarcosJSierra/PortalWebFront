import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Header } from './components/Headr/header';
import { MainPage } from './components/';
import { DistribuidoresMain } from './components/distribuidores';

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
        </Switch>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
