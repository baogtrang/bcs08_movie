import React, { useState, useEffect } from "react";
import { getMovieList } from "../../api/api";

const MovieDropdown = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovieList = async () => {
            try {
                const response = getMovieList();
                if (response && response.data) {
                    setMovies(response.data);
                }
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };

        fetchMovieList();
    }, []);

    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Select a movie
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {movies.map(movie => (
                    <a className="dropdown-item" href="" key={movie.maPhim} onClick={(e) => e.preventDefault()}>
                        {movie.tenPhim}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default MovieDropdown;
