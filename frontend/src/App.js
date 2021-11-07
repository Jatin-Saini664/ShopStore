import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import CreateShop from './Components/CreateShop';
import Base from './Components/Base';
import { AuthProvider } from './Context/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/" component={Base} exact></Route>
          <Route path="/register" component={Base} exact></Route>
          <Route path="/create" component={CreateShop} exact></Route>
          <Route path="/about" component={Base} exact></Route>
          <Route path="/profile" component={Base} exact></Route>
          <Route path="/login" component={Base} exact></Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
