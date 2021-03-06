import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NavigationBar } from "./components/navigationBar";
import { Contacts } from "./view/contacts";
import { Home } from "./view/home";
import { Dashboard } from "./view/dashboard";

function App() {
  return (
    <>
      <NavigationBar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard/:vin" component={Dashboard} />
          <Route exact path="/contacts" component={Contacts} />
          <Route path="/" render={() => <>Add 404 Page Component Here!</>} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
