import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Admin from './Components/Admin';
import Shop from './Components/Shop';
import Register from './Components/Register';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/admin" component={Admin} exact></Route>
        <Route path="/" component={Shop} exact></Route>
        <Route path="/register" component={Register} exact></Route>
      </Switch>
    </Router>
    // <div className="App">
    // </div>
  );
}

export default App;
