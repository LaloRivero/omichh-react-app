import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing/landing";
import About from "./pages/About/about";
import Participants from "./pages/Participants/participants";
import Register from "./pages/Register/register";
import NotFound from "./pages/NotFound/NotFound";
import VerifyAccount from "./pages/VerifyAccount/VerifyAccount";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/about" component={About} />
        <Route exact path="/participants" component={Participants} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/verify/:token" component={VerifyAccount}/>
        <Route component={NotFound}></Route>
      </Switch>
    </Router>
  );
}

export default App;
