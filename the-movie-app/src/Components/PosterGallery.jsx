import React, { Component, Fragment } from 'react';

//Components
import PosterCard from './PosterCard';

//Packages
import styled from 'styled-components';
import axios from "axios";
import { Link } from 'react-router-dom';

const CardsContainer = styled.div`
    overflow-x: scroll;
    overflow-y: hidden;
    scrollbar-color: #f3f3f3 white;
    white-space: nowrap;
    margin-left: 15px;
    margin-bottom: 60px;
`

const ButtonContainer = styled.div`
    padding: 12px 16px;
    font-weight: bold;
    color: #b0b0b0;
    margin-left: 15px;
`;

const Button = styled.div`
    display: inline-block;
    margin-right: 18px;
    cursor: pointer;
    padding: 4px 16px;

    background-color: ${(props) => props.isActive ? "#ffdad4" : "#fff"};
    border-radius: ${(props) => props.isActive ? "20px" : "0px"};
    color: ${(props) => props.isActive ? "#ff5833" : ""};
`;

const LoadingContainer = styled.div`
    width: 100%;
    height: 362px;
    margin-left: 44%;
    margin-top: 15%;
`

class PosterGallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trending: [],
            genre: 14,
            isLoaded: false,
            action: true,
            fantasy: false,
            adventure: false,
            family: false
        }
        this.handleClick = this.handleClick.bind(this);
    };

    componentDidMount() {
        const key = "c50cc30cef67c55f99a83b8629561659";
        const genre = this.state.genre;

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genre}`)
            .then(res => {
                this.setState({
                    trending: res.data.results,
                    isLoaded: true
                });
            });
    }

    handleClick = (id) => {
        if (id === 14) {
            this.setState({
                action: true,
                fantasy: false,
                adventure: false,
                family: false
            })
        }
        else if (id === 28) {
            this.setState({
                action: false,
                fantasy: true,
                adventure: false,
                family: false
            })
        }
        else if (id === 12) {
            this.setState({
                action: false,
                fantasy: false,
                adventure: true,
                family: false
            })
        }
        else {
            this.setState({
                action: false,
                fantasy: false,
                adventure: false,
                family: true
            })
        }
        this.setState({
            genre: id
        },
            () => {
                this.componentDidMount();
            }
        )
    }

    render() {

        const { isLoaded, trending, action, fantasy, adventure, family } = this.state;

        if (!isLoaded) {
            return <LoadingContainer>Chargeeeeez !!!</LoadingContainer>;
        }
        else {
            return (
                <Fragment>
                    <ButtonContainer>
                        <Button onClick={() => { this.handleClick(14) }} isActive={action}>Action</Button>
                        <Button onClick={() => { this.handleClick(28) }} isActive={fantasy}>Fantasy</Button>
                        <Button onClick={() => { this.handleClick(12) }} isActive={adventure}>Adventure</Button>
                        <Button onClick={() => { this.handleClick(10751) }} isActive={family}>Family</Button>
                    </ButtonContainer>

                    <CardsContainer>
                        {trending.map((movie, i) => {
                            return (
                                <Link push='true' key={i} to={`movie/${movie.id}`}>
                                <PosterCard
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
                        })}
                    </CardsContainer>
                </Fragment>
            );
        }
    }
}

export default PosterGallery;