import React, { Component, Fragment } from 'react';

// Styled components
import styled from 'styled-components';
import axios from "axios";

const BackroundMovie = styled.img`
    width: 100%;
    position: absolute;
    filter: blur(5px);
    z-index: 1;
`

const Layer = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    background-color: #020140;
    opacity: .6;
    z-index: 10000;
`

const ContentContainer = styled.div`
    display: flex;
`

const ContentLeft = styled.div`
    display: flex;
    width: 50%;
    z-index: 10000;
`

const ContentRight = styled.div`
    display: flex;
    width: 50%;
`
const Poster = styled.img`
    width: 300px;
    z-index: 10000;
    margin-top: 20%;
    margin-left: 10%;
    border-radius: 20px;
    box-shadow: 4px 5px 25px 0px rgba(0,0,0,0.75);
`

class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            poster: null,
            title: null,
            release: null,
            genre: null,
            rating: null,
            vote: null
        }
    };

    componentDidMount() {
        const id = this.props.match.params.id;
        const key = "c50cc30cef67c55f99a83b8629561659";

        axios.get(` https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`)
            .then(res => {
                this.setState({
                    poster: res.data.poster_path,
                    title: res.data.title,
                    release: res.data.release_date,
                    genre: res.data.genres[0].id,
                    rating: res.data.vote_average,
                    vote: res.data.vote_count
                });
            });
    }

    render() {
        return (
            <Fragment>
                <BackroundMovie src={"https://image.tmdb.org/t/p/w500_and_h282_face" + this.state.poster} alt={this.state.title} />
                <Layer />
                <ContentContainer>
                    <ContentLeft>
                        {this.state.title}
                    </ContentLeft>
                    <ContentRight>
                        <Poster src={"https://image.tmdb.org/t/p/w600_and_h900_bestv2" + this.state.poster} />
                    </ContentRight>
                </ContentContainer>
            </Fragment>
        )
    }
}

export default Movie;