import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Main from './pages/main.js';

function App() {
  return (

    <Router>
      <Switch>

        <Route exact path='/'>
          <Main/>
        </Route>

      </Switch>
    </Router>
  )
}

export default App;
