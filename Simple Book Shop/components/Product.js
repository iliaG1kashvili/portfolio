import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Data from './Data.json';
import './Product.css';
import Cart from './Cart';

function Product({ addToCart }) {
    const { title } = useParams();
    const book = Data.find(item => item.title === decodeURIComponent(title));

    const handleAddToCart = () => {
        addToCart(book);
    };

    if (!book) {
        return <div>Book not found</div>;
    }

    return (
        <div className="ProductPage">
            <div className="ProductContainer">
                <img src={book.image} alt={book.title} className="ProductImage" />
                <div className="ProductDetails">
                    <h1>{book.title}</h1>
                    <h2>by {book.author}</h2>
                    <p><strong>Genre:</strong> {book.genre}</p>
                    <p><strong>Year of Release:</strong> {book.year_of_release}</p>
                    <p><strong>Average Price:</strong> {book.average_price}</p>
                    <p>{book.description}</p>
                </div>
                <button className='AddToCart' onClick={handleAddToCart}>add to cart</button>
            </div>
        </div>
    );
}

export default Product;
