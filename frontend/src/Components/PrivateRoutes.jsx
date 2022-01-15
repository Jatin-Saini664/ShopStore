import React, { useEffect, useState } from "react";
import Home from "./Home";
import About from "./About";
import Profile from "./Profile";
import Login from "./Login";
import Register from "./Register";
import CustomerLogin from "./CustomerLogin";
import CustomerSignup from "./CustomerSignup";
import Cart from "./Cart";
import CreateShop from "./CreateShop";
import AddProduct from "./AddProduct";
import Orders from "./Orders";
import AllProducts from "./AllProducts";
import Product from "./Product";

const PrivateRoutes = (props) => {
  const [path, setPath] = useState("");
  useEffect(() => {
    setPath(props.values);
  });
  return path === "/shop" ? (
    <Home key="1"></Home>
  ) : path === "/shop/about" ? (
    <About key="2"></About>
  ) : path === "/shop/profile" ? (
    <Profile key="3"></Profile>
  ) : path === "/shop/login" ? (
    <Login key="4"></Login>
  ) : path === "/shop/register" ? (
    <Register key="5"></Register>
  ) : path === "/shop/customerLogin" ? (
    <CustomerLogin key="6"></CustomerLogin>
  ) : path === "/shop/customerSignup" ? (
    <CustomerSignup key="7"></CustomerSignup>
  ) : path === "/shop/cart" ? (
      <Cart key="8"></Cart>
  ) : path === "/shop/orders" ? (
      <Orders key="9"></Orders>
  ) : path === "/shop/addProduct" ? (
      <AddProduct key="10"></AddProduct>
  ) : path === "/shop/createShop" ? (
      <CreateShop key="11"></CreateShop>
  ) : path === "/shop/AllProducts" ? (
    <AllProducts key='12'></AllProducts>
  ) : (
    <Product key='13'></Product>
  );
};

export default PrivateRoutes;
