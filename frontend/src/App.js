import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import CreateShop from './Components/CreateShop';
import Base from './Components/Base';
import { AuthProvider } from './Context/AuthProvider';
import Default from './Components/Default';
import Product from './Components/Product';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/" component={Default} exact></Route>
          <Route path="/shop" component={Base} exact></Route>
          <Route path="/shop/register" component={Base}></Route>
          <Route path="/shop/create" component={CreateShop}></Route>
          <Route path="/shop/about" component={Base}></Route>
          <Route path="/shop/profile" component={Base}></Route>
          <Route path="/shop/login" component={Base}></Route>
          <Route path="/product" component={Product}></Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
