import React from "react";
import './Navbar.css';
import {  Link} from 'react-router-dom';


function Navbar(){
  return(
      <nav>
      <input type="checkbox" id="check" />
      <label for="check" class="checkbtn">
        <i class="fas fa-bars"></i>
      </label>
      <label class="logo">BShop</label>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/cart">Cart</Link></li>
      <li><Link to="/shop">Shop</Link></li>
      <li><Link to="/sign-in">Sign In</Link></li>
      <li><Link to="/sign-up">Sign Up</Link></li>
      <li><Link to="/Profile">Your Account</Link></li>
    </ul>
      </nav>
    )
}
export default Navbar;