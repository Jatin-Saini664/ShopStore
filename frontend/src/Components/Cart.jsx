import React, {useContext, useState} from 'react';
// import {Navbar, Container, Nav, Form, FormControl, NavDropdown, Button} from 'react-bootstrap';
import { AuthContext } from '../Context/AuthProvider';
import { Link } from 'react-router-dom';
import boat1 from './media/boat1.jpeg';
import * as p from './CSS/cart.module.css';
import {FaRupeeSign} from 'react-icons/fa';

const Cart = () => {
    const {user} = useContext(AuthContext);
    const [pname, setPname] = useState("Fire-Boltt SPO2 Full Touch 1.4 inch Smart Watch 8 Days Battery Life Compatible with Android and iOS IPX7 with Heart Rate, BP, Fitness and Sports Tracking (Gold)");
    const [value, setValue] = useState(1);
    return ( <div className={p['container']}>
  <div className={p["cart-container"]}>
      <div className={p["cart-title"]}
      >
          <strong>My Cart</strong>
      </div>
      <div className={p["cart-products"]}>
          <div className={p["cart-product-header"]}>
            <div className={p['img']}>Product Image</div>
            <div className={p["cart-product-name"]}>Product Name</div>
            <div className={p['quantity']}>Quantity</div>
            <div className={p["price"]}>Price</div>
            <div className={p["price"]}>Remove</div>
          </div>
          <div className={p["cart-product"]}>
              <img className={p['img']} src={boat1} alt="" />
              <div className={p["cart-product-name"]}>{pname
                    .substring(0, 26)
                    .concat(
                      pname.substring(
                        26,
                        pname.length
                      ).length > 0
                        ? "..."
                        : ""
                    )}</div>
              <strong className={p['quantity']}>{value}</strong>
              <div className={p["price"]}>
                  <strong><span style={{fontSize:"1rem", display:"flex", justifyContent:"center", alignItems:"center", color:"black"}}><FaRupeeSign/>13500&nbsp;</span></strong>
              </div>
              <Link className={p['remove']} to="/cart">Remove</Link>
          </div>
          <div className="cart-product"></div>
          <div className="cart-product"></div>
      </div>
  </div>
    </div> );
}
 
export default Cart;