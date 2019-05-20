import React, { Component } from 'react';

//Packages
import styled from 'styled-components';

const Item = styled.div`
    padding: 8px;
    margin: 8px;
    display: inline-block;
    float: none;
`

const Poster = styled.img`
    width: 190px;
    border-radius: 10px;
`

const MovieInfo = styled.div`
  display: block;
`;

class PosterCard extends Component {

    render() {
        const { poster, title } = this.props;
        return (
            <Item>
                <Poster src={"https://image.tmdb.org/t/p/w600_and_h900_bestv2" + poster} />
                <MovieInfo>
                    {title}
                </MovieInfo>
            </Item>
        );
    }
}

export default PosterCard;