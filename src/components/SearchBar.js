import React, { useState } from 'react';
import './SearchBar.css';
import axios from 'axios';

const SearchBar = () => {
    const API_KEY = '6c3a2d45';
    const [searchQuery, setSearchQuery] = useState('');

    const searchMovies = (query) => {
        const API_URL = `https://www.omdbapi.com/?&apiKey=${API_KEY}&s=${query}`;
    
        axios.get(API_URL)
            .then(response => {
                // handle the response here
                // setMovies(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log(`Error: ${error}`);
            });
    }

    return (
        <section>
            <form onSubmit={(e) => {
                e.preventDefault();
                searchMovies(searchQuery);
            }}>
                <input type="text" onChange={(e) => setSearchQuery(e.target.value)}/>
                <button type="submit">Search</button>
            </form>
        </section>
    );
}

export default SearchBar;