import { Route, BrowserRouter as Router, Switch, Redirect, Link } from 'react-router-dom';
import { Provider } from 'react-redux';


import store from './store';

import NavBar from './components/NavBar';
import Home from './scenes/Home';
import ClientForm from './scenes/ClientForm';
import DeveloperForm from './scenes/DeveloperForm';
import DeveloperResponses from './scenes/DeveloperResponses';
import ClientResponses from './scenes/ClientResponses';
import ClientMatches from './scenes/ClientMatches';

import './App.css';

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/client-form" component={ClientForm} />
            <Route path="/developer-form" component={DeveloperForm} />
            <Route path="/developer-responses" component={DeveloperResponses} />
            <Route path="/client-responses" component={ClientResponses} />
            <Route path="/client-matches" component={ClientMatches} />
            <Redirect path="/" to="/" />
          </Switch>
        </Router>
      </Provider>

    </div>
  );
}

export default App;
