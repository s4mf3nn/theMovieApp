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

const ButtonContainer = styled.div`
    padding: 30px 16px;
    font-weight: bold;
    color: #b0b0b0;
`;

const Button = styled.div`
    display: inline-block;
    margin-right: 18px;
    cursor: pointer;
    padding: 4px 16px;
`;

const ButtonSelected = styled.div`
    display: inline-block;
    margin-right: 18px;
    cursor: pointer;
    background-color: #ffdad4;
    border-radius: 20px;
    color: #ff5833;
    padding: 4px 16px;
`

class PosterGallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trending: [],
            genre: 14,
            button1: "selected",
            button2: "",
            button3: "",
            button4: "",
            trueButton: "button1"
        }
        this.style = {
            color: "red",
            fontSize: "10px",
            textAlign: "center"
        };
        this.handleClick = this.handleClick.bind(this);
    };

    componentDidMount() {
        const key = "c50cc30cef67c55f99a83b8629561659";
        const genre = this.state.genre;

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genre}`)
            .then(res => {
                this.setState({
                    trending: res.data.results
                });
            });
    }

    handleClick = (id) => {
        this.setState({
            genre: id
        },
            () => {
                this.componentDidMount();
            }
        )
        console.log(this.state.genre);
    }

    render() {
        return (
            <Container fluid>
                <ButtonContainer>
                    <Button onClick={() => { this.handleClick(14) }}>Action</Button>
                    <Button onClick={() => { this.handleClick(28) }}>Fantasy</Button>
                    <Button onClick={() => { this.handleClick(12) }}>Adventure</Button>
                    <Button onClick={() => { this.handleClick(10751) }}>Family</Button>
                </ButtonContainer>

                <CardsContainer>
                    {this.state.trending.map((movie, i) => {
                        return (
                            <PosterCard
                                key={i}
                                poster={movie.poster_path}
                                title={movie.title}
                                release={movie.release_date}
                                genre={movie.genre_ids[0]}
                                rating={movie.vote_average}
                                vote={movie.vote_count}
                            />)
                    })}
                </CardsContainer>
            </Container>
        );
    }
}

export default PosterGallery;