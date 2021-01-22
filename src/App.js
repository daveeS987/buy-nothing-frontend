import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HomePage from './pages/homepage.js';

function App() {
  return (

    <Router>
      <Switch>

        <Route exact path='/'>
          <HomePage/>
        </Route>

      </Switch>
    </Router>
  )
}

export default App;
