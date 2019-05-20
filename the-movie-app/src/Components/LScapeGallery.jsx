import React, { Component } from 'react';

//Components
import LScapeCard from './LScapeCard';

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

class LScapeGallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trending: []
        }
    };

    componentDidMount() {
        axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=c50cc30cef67c55f99a83b8629561659`)
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
                            <LScapeCard
                                key={i}
                                poster={movie.poster_path}
                                title={movie.title}
                                release={movie.release_date}
                                genre={movie.genre_ids[0]}
                            />)
                    })
                    }
                </CardsContainer>
            </Container>
        );
    }
}

export default LScapeGallery;