import React, { Component } from 'react';

//Components
import Card from './Card';

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

class MoviesHList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trending: []
        }
    };

    componentDidMount() {
        axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=c50cc30cef67c55f99a83b8629561659`)
            .then(res => {
                console.log(res.data.results);
                this.setState({
                    trending: res.data.results
                });
            });
    }

    render() {
        return (
            <Container fluid>
                <CardsContainer>
                    {Object.keys(this.state.trending)
                        .map((movie, i) => {
                            return (
                                <Card
                                    key={i}
                                    poster={movie.poster_path}
                                    title={movie.original_title}
                                />)
                        })}
                </CardsContainer>
            </Container>
        );
    }
}

export default MoviesHList;