import React, { useState, useEffect } from 'react';
import './SearchBar.css';
import axios from 'axios';

const SearchBar = ({ handleCallback }) => {
    const [movies, setMovies] = useState([]);

    const initMovies = () => {
        const API_KEY = '4a94ef431d4a47daad6f0b508a26c544';
        const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
    
        axios.get(API_URL)
            .then(response => {
                setMovies(response.data.results);
            })
            .catch(error => {
                console.log(`Error: ${error}`);
            });
    }

    useEffect(() => {
        initMovies();
    }, []);

    const searchMovies = (query) => {
        const API_KEY = '4a94ef431d4a47daad6f0b508a26c544';
        const API_URL = `https://api.themoviedb.org/3/search/movie/?api_key=${API_KEY}&query=${query}`;
    
        axios.get(API_URL)
            .then(response => {
                setMovies(response.data.results);
            })
            .catch(error => {
                console.log(`Error: ${error}`);
            });
    }

    useEffect(() => {
        handleCallback(movies);
    }, [movies, handleCallback]);

    const handleChange = (e) => {
        if (e.target.value.length >= 3) {
            searchMovies(e.target.value);
        }

        if (e.target.value.length === 0) {
            initMovies();
        }
    }

    return (
        <section className="search-section">
            <input type="text" placeholder="Search" className="searchbar" onChange={handleChange}/>
        </section>
    );
}

export default SearchBar;