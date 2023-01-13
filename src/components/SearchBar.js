import React, { useState, useEffect } from 'react';
import './SearchBar.css';
import axios from 'axios';

const SearchBar = ({ handleCallback }) => {
    const [movies, setMovies] = useState([]);

    const searchMovies = (query) => {
        const API_KEY = '6c3a2d45';
        const API_URL = `https://www.omdbapi.com/?&apiKey=${API_KEY}&s=${query}`;
        // const API_URL = 'placeholder-movies.json';
    
        axios.get(API_URL)
            .then(response => {
                setMovies(response.data);
            })
            .catch(error => {
                console.log(`Error: ${error}`);
            });
    }

    // fix has to be written for pageload, show initial movies
    useEffect(() => {
        searchMovies('and');
    }, []);

    useEffect(() => {
        handleCallback(movies);
    }, [movies, handleCallback]);

    const handleChange = (e) => {
        if (e.target.value.length >= 3) {
            searchMovies(e.target.value);
        }
    }

    return (
        <section className="search-section">
            <input type="text" placeholder="Search" className="searchbar" onChange={handleChange}/>
        </section>
    );
}

export default SearchBar;