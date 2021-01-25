import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {Provider} from 'react-redux';

import Main from './pages/main.js';
import store from './store';

function App() {
  return (

    <Provider store={store}>
      <Router>
          <Switch>

            <Route exact path='/'>
              <Main/>
            </Route>

          </Switch>
      </Router>
    </Provider>
  )
}

export default App;
