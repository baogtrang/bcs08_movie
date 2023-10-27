import React, { useState, useEffect } from "react";
import { fetchMovies } from "../../api/ticketBuyingAPI";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space, message, Menu } from 'antd';

const MovieDropdown = () => {
    const [movieDetails, setMovieDetails] = useState(null);
    const [movies, setMovies] = useState([]); // To store the list of movies

    useEffect(() => {
        // Fetch initial list of movies when the component mounts
        const fetchInitialMovies = async () => {
            // Example: Fetch the first 3 movies
            const movie1 = await fetchMovies(1);
            const movie2 = await fetchMovies(2);
            const movie3 = await fetchMovies(3);
            setMovies([movie1, movie2, movie3]);
        };
        fetchInitialMovies();
    }, []);

    const handleMovieSelect = async (movieID) => {
        const details = await fetchMovies(movieID);
        setMovieDetails(details);
    };

    const onClick = ({ key }) => {
        message.info(`Selected movie with ID: ${key}`);
        handleMovieSelect(key);
    };

    const menu = (
        <Menu onClick={onClick}>
            {movies.map(movie => (
                <Menu.Item key={movie.id}>
                    {movie.title}
                </Menu.Item>
            ))}
        </Menu>
    );

    return (
        <Dropdown overlay={menu}>
            <a onClick={(e) => e.preventDefault()}>
                <Space>
                    Select a movie
                    <DownOutlined />
                </Space>
            </a>
        </Dropdown>
    );
};

export default MovieDropdown;
