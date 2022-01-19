import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Header } from './components/Headr/header';
import { MainPage } from './components/';
function App() {
  return (
    // <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/">
            <MainPage />
          </Route>
          <Route path="/productos">
            <h1>cambio</h1>
          </Route>
        </Switch>
      </div>
    // </BrowserRouter>
  );
}

export default App;
