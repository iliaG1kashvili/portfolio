import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Cart from './components/Cart';
import Shop from './components/Shop';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Data from './components/Data.json';
import Profile from './components/Profile';
import ContectForm from './components/ContectForm';

function App() {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/cart" element={<Cart cartItems={cartItems} />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path='/profile' element={<Profile/>}/>
                <Route path="/contact" element={<ContectForm />} />
                <Route path="/product/:title" element={<Product addToCart={addToCart} />} />
            </Routes>
        </Router>
    );
}

export default App;
