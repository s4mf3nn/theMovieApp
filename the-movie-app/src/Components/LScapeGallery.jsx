import React, { Component, Fragment } from 'react';

//Components
import LScapeCard from './LScapeCard';

//Packages
import styled from 'styled-components';
import axios from "axios";
import { Link } from 'react-router-dom';

const LoadingContainer = styled.div`
    width: 100%;
    height: 362px;
    padding-left: 44%;
    padding-top: 15%;
`

class LScapeGallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trending: [],
            isLoaded: false
        }
    };

    componentDidMount() {
        const key = "c50cc30cef67c55f99a83b8629561659";

        axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${key}`)
            .then(res => {
                this.setState({
                    trending: res.data.results,
                    isLoaded: true
                });
            });
    }

    render() {

        const { isLoaded, trending } = this.state;

        if (!isLoaded) {
            return <LoadingContainer>Chargeeeeez !!!</LoadingContainer>;
        }
        else {
            return (
                <Fragment>
                    {trending.map((movie, i) => {
                        return (
                            <Link push='true' key={i} to={`movie/${movie.id}`}>
                                <LScapeCard
                                    key={i}
                                    poster={movie.poster_path}
                                    title={movie.title}
                                    release={movie.release_date}
                                    genre={movie.genre_ids[0]}
                                    rating={movie.vote_average}
                                    vote={movie.vote_count}
                                />
                            </Link>
                        )
                    })
                    }
                </Fragment>
            );
        }
    }
}

export default LScapeGallery;