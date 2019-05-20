import React, { Component } from 'react';

//Components
import PosterCard from './PosterCard';

//Packages
import styled from 'styled-components';
import axios from "axios";

//ReactStrap
import { Container } from 'reactstrap';

const CardsContainer = styled.div`
    overflow-x: scroll;
    overflow-y: hidden;
    scrollbar-color: #f3f3f3 white;
    white-space: nowrap;
`

class PosterGallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trending: [],
        }
    };

    componentDidMount() {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=c50cc30cef67c55f99a83b8629561659&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=14`)
            .then(res => {
                this.setState({
                    trending: res.data.results
                });
            });
    }

    render() {
        return (
            <Container fluid>
                <CardsContainer>
                    {this.state.trending.map((movie, i) => {
                        return (
                            <PosterCard
                                key={i}
                                poster={movie.poster_path}
                                title={movie.title}
                            />)
                    })}
                </CardsContainer>
            </Container>
        );
    }
}

export default PosterGallery;