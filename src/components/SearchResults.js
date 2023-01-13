import React, { useEffect, useState } from 'react';
import Movie from './Movie';
import './SearchResults.css';

const SearchResults = ({ movies }) => {
    const [results, setResults] = useState(null);

    useEffect(() => {
        setResults(movies);
    }, [movies]);

    return (
        <section className="search-results">
            {results && results.slice(0, 5).map((movie, index) => {
                return (
                    <Movie key={index} details={movie} />
                );
            })}
            {results && results.length === 0 ? <div className="no-results">We couldn't find any movies 🤷‍♂️</div> : null}
        </section>
    );
}

export default SearchResults;