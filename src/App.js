import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import ScrollToTop from './components/common/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Switch>
            <Route exact path="/">
              <div>Welcome home</div>
            </Route>
            <Route exact path="/signin">
              <SignIn />
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
          </Switch>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
