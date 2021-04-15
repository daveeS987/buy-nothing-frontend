import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import LoginContext from './context/loginContext.js';
import Main from './pages/main.js';
import Welcome from './pages/welcome.js';

function App() {
  return (
    <LoginContext>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/main">
              <Main />
            </Route>

            <Route exact path="/">
              <Welcome />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </LoginContext>
  );
}

export default App;
