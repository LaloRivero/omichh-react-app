import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing/landing";
import About from "./pages/About/about";
// import Participants from "./pages/Participants/participants";
import Documents from "./pages/Documents/Documents";
import Register from "./pages/Register/register";
import NotFound from "./pages/NotFound/NotFound";
// import VerifyAccount from "./pages/VerifyAccount/VerifyAccount";
import "./App.css";
import "./components/Button/button.css"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/about" component={About} />
        {/* <Route exact path="/participants" component={Participants} /> */}
        <Route exact path="/registro" component={Register} />
        <Route exact path="/convocatoria" component={Documents} />
        {/* <Route exact path="/verify/:token" component={VerifyAccount}/> */}
        <Route component={NotFound}></Route>
      </Switch>
    </Router>
  );
}

export default App;
