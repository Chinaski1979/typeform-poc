import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import Home from './scenes/Home';
import ClientForm from './scenes/ClientForm';
import DeveloperForm from './scenes/DeveloperForm';
import DeveloperResponses from './scenes/DeveloperResponses';

import './App.css';

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/client-form" component={ClientForm} />
          <Route path="/developer-form" component={DeveloperForm} />
          <Route path="/developer-responses" component={DeveloperResponses} />
          <Redirect path="/" to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
