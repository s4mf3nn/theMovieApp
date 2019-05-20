import React, { Component } from 'react';

//Packages
import styled from 'styled-components';

const Item = styled.div`
    padding: 8px;
    margin: 8px;
    display: inline-block;
    float: none;
`

const LandscapePoster = styled.img`
    width: 480px;
    border-radius: 10px;
`

const MovieInfo = styled.div`
  display: block;
`;

const genres = [
    {
        "id": 28,
        "name": "Action"
    },
    {
        "id": 12,
        "name": "Adventure"
    },
    {
        "id": 16,
        "name": "Animation"
    },
    {
        "id": 35,
        "name": "Comedy"
    },
    {
        "id": 80,
        "name": "Crime"
    },
    {
        "id": 99,
        "name": "Documentary"
    },
    {
        "id": 18,
        "name": "Drama"
    },
    {
        "id": 10751,
        "name": "Family"
    },
    {
        "id": 14,
        "name": "Fantasy"
    },
    {
        "id": 36,
        "name": "History"
    },
    {
        "id": 27,
        "name": "Horror"
    },
    {
        "id": 10402,
        "name": "Music"
    },
    {
        "id": 9648,
        "name": "Mystery"
    },
    {
        "id": 10749,
        "name": "Romance"
    },
    {
        "id": 878,
        "name": "Science Fiction"
    },
    {
        "id": 10770,
        "name": "TV Movie"
    },
    {
        "id": 53,
        "name": "Thriller"
    },
    {
        "id": 10752,
        "name": "War"
    },
    {
        "id": 37,
        "name": "Western"
    }
]

class SlideCard extends Component {

    render() {
        const { poster, title, release, genre } = this.props;

        return (
            <Item>
                <LandscapePoster src={"https://image.tmdb.org/t/p/w500_and_h282_face" + poster} />
                <MovieInfo>
                    {title}
                    {release} · {genres.map((res) => {
                        return res.id === genre && res.name;
                    })}
                </MovieInfo>
            </Item>
        );
    }
}

export default SlideCard;