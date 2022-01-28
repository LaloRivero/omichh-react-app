import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing/landing';
import About from './pages/About/about';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Landing}/>
        <Route exact path='/about/' component={About}/>
      </Switch>
    </Router>
  );
}

export default App;
