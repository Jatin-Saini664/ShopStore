import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import CreateShop from './Components/CreateShop';
// import Base from './Components/Base';
import { AuthProvider } from './Context/AuthProvider';
// import Default from './Components/Default';
import Product from './Components/Product';
import Cart from './Components/Cart';
import Main from './Components/Main';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/" component={Main} exact></Route>
          <Route path="/shop" component={Main} exact></Route>
          <Route path="/shop/register" component={Main}></Route>
          <Route path="/shop/create" component={CreateShop}></Route>
          <Route path="/shop/about" component={Main}></Route>
          <Route path="/shop/profile" component={Main}></Route>
          <Route path="/shop/login" component={Main}></Route>
          <Route path="/shop/customerLogin" component={Main}></Route>
          <Route path="/shop/customerSignup" component={Main}></Route>
          <Route path="/shop/product" component={Main}></Route>
          <Route path="/shop/cart" component={Main}></Route>
          <Route path="/shop/orders" component={Main}></Route>
          <Route path="/shop/addProduct" component={Main}></Route>
          <Route path="/shop/AllProducts" component={Main}></Route>
          <Route path="/shop/product" component={Main}></Route>
          <Route path="/shop/createShop" component={Main}></Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
