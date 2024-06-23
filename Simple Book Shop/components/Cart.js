import React from 'react';
import './Cart.css';

function Cart({ cartItems }) {
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => {
            const price = parseFloat(item.average_price.replace('$', ''));
            return total + price;
        }, 0).toFixed(2); 
    };

    return (
        <div className="cart-container">
            <h2>Your Shopping Cart</h2>
            <div className="cart-items">
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <ul>
                        {cartItems.map((item, index) => (
                            <li key={index}>
                                <img src={item.image} alt={item.title} />
                                <div>
                                    <h3>{item.title}</h3>
                                    <p>{item.average_price}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            {cartItems.length > 0 && (
                <div className="cart-summary">
                    <h3>Total Cost:</h3>
                    <p>${calculateTotal()}</p>
                    <button className="checkout-button">Proceed to Checkout</button>
                </div>
            )}
        </div>
    );
}

export default Cart;
