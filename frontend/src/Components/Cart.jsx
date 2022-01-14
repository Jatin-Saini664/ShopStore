import React, {useContext} from 'react';
import {Navbar, Container, Nav, Form, FormControl, NavDropdown, Button} from 'react-bootstrap';
import { AuthContext } from '../Context/AuthProvider';
import { Link } from 'react-router-dom';
import boat1 from './media/boat1.jpeg';

const Cart = () => {
    const {user} = useContext(AuthContext);
    return ( <div>
        {/* <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          style={{width:'35rem'}}
        />
        <Button variant="outline-success"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
        </svg></Button>
      </Form>
    <Nav className="me-auto" >
      <Nav.Link href="#home">Home</Nav.Link>
      {(user === "")?(<div style={{display:"flex"}}><NavDropdown style={{cursor:"pointer"}} title="Login" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">As a Customer</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action4">As a Seller</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="SignUp" style={{cursor:"pointer"}} id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">As a Customer</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action4">As a Seller</NavDropdown.Item>
        </NavDropdown></div>):(
        <div style={{display:"flex"}}>
          <Nav.Link href="#features">Cart</Nav.Link>
          <Nav.Link href="#pricing">Orders</Nav.Link>
          <Nav.Link href="#pricing">Logout</Nav.Link>
        </div>)
      }
    </Nav>
    </Container>

  </Navbar> */}
  <div className="cart-container">
      <div className="cart-title">
          <strong>My Cart</strong>
      </div>
      <div className="cart-products">
          <div className="cart-product">
              <img src={boat1} alt="" />
              <div className="cart-product-name"></div>
              <input type="number" name="" id="" min="1" max="10"/>
              <div className="p-price">
                  <strong></strong>
                  <Link to="/cart">Remove</Link>
              </div>
          </div>
          <div className="cart-product"></div>
          <div className="cart-product"></div>
      </div>
  </div>
    </div> );
}
 
export default Cart;