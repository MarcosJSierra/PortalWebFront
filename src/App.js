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
        <div className="container">
          <Switch>
            <Route path="/productos">
            </Route>
            <Route path="/">
              <MainPage />
            </Route>
          </Switch>
        </div>
      </div>
    // </BrowserRouter>
  );
}

export default App;
