import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {Provider} from 'react-redux';

import store from './store';
import Auth from './context/auth/auth.js';
import LoginContext from './context/auth/context.js';
import Main from './pages/main.js';
import Signup from './pages/signup/signup.js';

import Welcome from './pages/welcome.js';

function App() {
  return (

    <LoginContext>
      <Provider store={store}>
        <Router>
            <Switch>

              <Route exact path='/'>
                <Auth capability="read">
                  <h1>Will this show</h1>
                </Auth>
                <Main/>
              </Route>

              <Route exact path='/welcome'>
                <Welcome />
              </Route>

              <Route exact path='/signup'>
                <Signup />
              </Route>

            </Switch>
        </Router>
      </Provider>
    </LoginContext>
  )
}

export default App;
