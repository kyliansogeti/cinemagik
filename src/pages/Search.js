import React, { useState } from 'react';
import './Search.css';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';

const Search = () => {
    const [movies, setMovies] = useState([]);

    const handleCallback = movies => {
        setMovies(movies);
    }

    return (
        <div>
            <SearchBar handleCallback={handleCallback} />
            {movies.Search && <SearchResults movies={movies} />}
        </div>
    );
}

export default Search;