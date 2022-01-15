import React, {useContext} from 'react';
// import {Navbar, Container, Nav, Form, FormControl, NavDropdown, Button} from 'react-bootstrap';
import './CSS/product.css';
import img1 from './media/img1.jpg';
import img2 from './media/img2.jpg';
import img3 from './media/img3.jpg';
import img4 from './media/img4.jpg';
import boat1 from './media/boat1.jpeg';
import noise1 from './media/noise1.jpeg';
import realme1 from './media/realme1.jpeg';
import timewear1 from './media/timewear1.jpeg';
import noise2 from './media/wrb-sw-colorfitpro3-std-ros-pnk-android-ios-noise-original-imag2drhshyutzm8.jpeg';
import {FaRupeeSign} from 'react-icons/fa';
import { AuthContext } from '../Context/AuthProvider';

const Product = () => {
    const {user} = useContext(AuthContext);

    function clickCart(e){
      if(user===""){

      }else{
        
      }
    }

    function clickBuy(e){
      if(user===""){

      }else{

      }
    }
    function onClickPhoto(e){
      let mphoto = document.querySelector('.enlarged-photo>img');
      let ophoto = document.querySelector('.p-visible');
      ophoto.classList.remove("p-visible");
      e.target.classList.add("p-visible");
      let allPhotosImg = document.querySelectorAll(".photo>img");
      if(e.target === allPhotosImg[0]){
        mphoto.src=img1;
      }
      else if(e.target === allPhotosImg[1]){
        mphoto.src=img2;
      }
      else if(e.target === allPhotosImg[2]){
        mphoto.src=img3;
      }
      else if(e.target === allPhotosImg[3]){
        mphoto.src=img4;
      }
    }
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
  <div className="product-container">
    <div className="product-photos">
      <div className="enlarged-photo">
        <img src={img1} alt="" />
      </div>
      <div className="photo-container">
        <div className="photo">
          <img onClick={onClickPhoto} src={img1} className="p-visible" alt="" />
        </div>
        <div className="photo">
          <img onClick={onClickPhoto} src={img2} alt="" />
        </div>
        <div className="photo">
          <img onClick={onClickPhoto} src={img3} alt="" />
        </div>
        <div className="photo">
          <img onClick={onClickPhoto} src={img4} alt="" />
        </div>
      </div>
    </div>
    <div className="product-info">
      <div className="product-title">
        <h3>Fire-Boltt SPO2 Full Touch 1.4 inch Smart Watch 8 Days Battery Life Compatible with Android and iOS IPX7 with Heart Rate, BP, Fitness and Sports Tracking (Gold)</h3>
      </div>
      <div className="product-price">
        <div style={{color: 'green'}}>Special Price</div>
        <h3 className="price"><span style={{fontSize:"2.1rem", display:"flex", justifyContent:"center", alignItems:"center", color:"black"}}><FaRupeeSign/>13500&nbsp;</span>
          <span className="cut-price" style={{fontSize:"1.2rem", display:"flex", justifyContent:"center", alignItems:"center", paddingTop:"5px", color:"grey"}}><FaRupeeSign/>15000&nbsp;</span>
          <span style={{ color:"green", fontSize:"1.3rem"}}>10% off</span>
        </h3>
      </div>
      <div className="product-quantity">
        Quantity:&nbsp;&nbsp;&nbsp;
        <input type="number" min="1" max="10" style={{width:"10%"}}/>
      </div>
      <div className="buy-sell">
        <button onClick={clickCart}>Add to Cart</button>
        <button onClick={clickBuy}>Buy</button>
      </div>
      <div className="product-details">
        <strong>About this Item:</strong>
        <div>. 【The First Ever Smart watch featuring SPO2 function】 - Optical Heart rate sensor with real time monitoring of heart rate during exercise. Keep a track of your SPO2 to ensure good & healthy life. Heart Rate, SPO2 Tracking available in this Smart Watch. (If a patient is suffering from Covid 19 please use a medical device prescribed by the Doctor)</div>
        <div>【Full Touch, Sleek & Fashionable Metal Body Intelligent Smart Watch】 - The watch is slim & exquisite, comes with a removable watch strap. It features a Full HD Touch Display & a Wrist Sense that turns on the display
</div>
        <div>【HD Display Clear & Delicate】 - 1.4" colour display and full capacitive touch, supporting taps and swipes, so it is easy to read and operate. Transparent 2.5D curved glass with a resolution of 240*240 pixels. 【POWERFUL BATTERY】 - 8 days battery life to avoid frequent charge and focus on your daily activities. The smart watch has a standby Time of 360 Hours. 【Multiple Watch Faces】 : Unlimited Built in Watch Faces and also multiple Downloadable from the App</div>
        <div>【Track every step, every activity】 - 7 workout modes: walking, running, cycling, skipping, badminton, basketball, football; Count steps, distance, and calories burned in this Smart Watch</div>
        <div>【IPX7 Water Resistant】 - Never remove the watch in any case of sweating or rains or water contact. 【Stay Social Stay Updated】 - Never miss out any message or call or an important notification in any case. All In One Smart Coach - Track your Daily Steps, Fitness, Sports, Heart Rate and SPO2. Make Fitness A Habit with this Smart Watch</div>
      </div>
    </div>
  </div>
  <div className="related-products">
    <div className="related-products-title">
      <strong>Related Products</strong>
    </div>
    <div className="products">
        <div className="product"><img src={boat1} alt="" /></div>
        <div className="product"><img src={noise1} alt="" /></div>
        <div className="product"><img src={realme1} alt="" /></div>
        <div className="product"><img src={timewear1} alt="" /></div>
        <div className="product"><img src={noise2} alt="" /></div>
    </div>
  </div>
    </div>);
}
 
export default Product;