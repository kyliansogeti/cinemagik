import React, { useState } from 'react';
import './SearchBar.css';
import axios from 'axios';

const SearchBar = () => {
    const API_TOKEN = '23c99f61-2beb-4bdf-b759-5c89fd6a47cb';
    const [searchQuery, setSearchQuery] = useState('');

    const searchMovies = (query) => {
        const API_URL = `https://www.myapimovies.com/api/v1/movie/search&s=${query}`;
    
        axios.get(API_URL, {
            headers: {
              'Authorization': `Bearer ${API_TOKEN}`
            }
            })
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