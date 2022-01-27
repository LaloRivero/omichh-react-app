import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing/landing';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Landing}/>
      </Switch>
    </Router>
  );
}

export default App;
