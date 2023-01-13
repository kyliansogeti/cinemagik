import React, { useState, useEffect } from 'react';
import './Movie.css';

const Movie = ({ details }) => {
    console.log(details);

    const [loading, setLoading] = useState(true);
    const [src, setSrc] = useState(null);

    useEffect(() => {
        setLoading(true);
        setSrc('');
        setTimeout(() => {
            if(details.poster_path !== null){
                setSrc(`https://image.tmdb.org/t/p/w500/${details.poster_path}`);
            }
        }, 0);
      }, [details]);

    const handleClick = (e) => {
        e.stopPropagation();
        e.currentTarget.classList.toggle('reading-less');
    }

 return (
    <div className="movie-container reading-less" onClick={handleClick}>
        {/* Loading animatie nog ff vervangen met iets cools */}
        {loading && <div className="loading-animation">Loading...</div>}
        {src && <img alt="Movie poster" className="movie-poster" src={src} onLoad={() => setLoading(false)} />}
        <div className="movie-details">
            <h2 className="movie-details-title">{details.title}</h2>
            <p className="movie-details-body">{details.overview}</p>
            <p className="read-more-btn">*Click to read more*</p>
        </div>
    </div>
 );
}

export default Movie;