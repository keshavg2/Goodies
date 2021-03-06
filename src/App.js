import logo from './logo.svg';
import './App.css';
import Paytm from './Component/Paytm';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Thanks from './Component/Thanks';

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <Paytm />
          </Route>
          <Route path="/Thanks">
            <Thanks />
          </Route>
      </Switch>   
    </Router>
  );
}
export default App;
