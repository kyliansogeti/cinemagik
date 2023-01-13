import React, { useState } from 'react';

const SearchResults = ({ movies }) => {
    const searchResults = movies.Search;

    return (
        <section className="search-results">
            {searchResults.map((movie, index) => {
                // Hier API call met imdbID om de bijbehorende data op te halen?
                return (
                    <div key={index}>
                        <p>imdbID: {movie.imdbID}</p>
                        <p>Poster: {movie.Poster}</p>
                        <p>Title: {movie.Title}</p>
                        <p>Type: {movie.Type}</p>
                        <p>Year: {movie.Year}</p>
                    </div>
                );
            })}
        </section>
    );
}

export default SearchResults;