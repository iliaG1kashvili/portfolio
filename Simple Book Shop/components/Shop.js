import React, { useState } from 'react';
import './Shop.css';
import { Link } from 'react-router-dom';
import Data from './Data.json';

function Shop() {
    const [search, setSearch] = useState('');
    const [selectedGenre, setSelectedGenre] = useState('');
    const [sortOrder, setSortOrder] = useState('asc'); // 'asc' for ascending, 'desc' for descending

    const handleGenreSelection = (genre) => {
        setSelectedGenre(genre);
    };

    const toggleSortOrder = () => {
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    };

    const sortBooksByPrice = (books) => {
        return books.sort((a, b) => {
            const priceA = parseFloat(a.average_price.replace('$', ''));
            const priceB = parseFloat(b.average_price.replace('$', ''));

            if (sortOrder === 'asc') {
                return priceA - priceB;
            } else {
                return priceB - priceA;
            }
        });
    };

    const filterBooks = () => {
        let filteredBooks = Data.filter(item => {
            const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase());
            const matchesGenre = selectedGenre === '' || item.genre === selectedGenre;
            return matchesSearch && matchesGenre;
        });

        // Sort the filtered books based on price
        filteredBooks = sortBooksByPrice(filteredBooks);

        return filteredBooks;
    };

    return (
        <div className='FullPage'>
            <input onChange={(e) => setSearch(e.target.value)} className='SearchField' placeholder='Search for books...' />
            <div className='Genre'>
                <button onClick={() => handleGenreSelection('')} className='AllGenres'>All Genres</button>
                <button onClick={() => handleGenreSelection('Fiction')} className='Fiction'>Fiction</button>
                <button onClick={() => handleGenreSelection('Mystery and Suspense')} className='MysteryANDSuspense'>Mystery and Suspense</button>
                <button onClick={() => handleGenreSelection('Romance')} className='Romance'>Romance</button>
                <button onClick={() => handleGenreSelection('Fantasy and Sci-Fi')} className='FantasyANDSci-Fi'>Fantasy and Sci-Fi</button>
                <button onClick={() => handleGenreSelection('Non-Fiction')} className='NonFiction'>Non-Fiction</button>
                <button onClick={toggleSortOrder} className='SortByPrice'>Sort by Price {sortOrder === 'asc' ? 'Low to High' : 'High to Low'}</button>
            </div>
            <div className='Image'>
                {filterBooks().map(data => (
                    <div className='Box' key={data.title}>
                        <img src={data.image} alt={data.title} />
                        <li className='BooksBuy'>
                            <Link to={`/product/${encodeURIComponent(data.title)}`}>{data.title}</Link>
                        </li>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Shop;
