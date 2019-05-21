import React, { Component } from 'react';

//Packages
import styled from 'styled-components';
import { Star } from 'react-feather';

const Item = styled.div`
    padding: 8px;
    margin: 8px;
    display: inline-block;
    float: none;
`

const Poster = styled.img`
    width: 160px;
    border-radius: 10px;

    &:hover {
        transform: scale(1.1);
    }
`

const MovieInfo = styled.div`
    display: block;
    max-width: 150px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`;

const TitleBig = styled.h1`
    margin-top: 20px;
    font-weight: bold;
    font-size: 19px;
    display: block;
    max-width: 330px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`
const SubTitleBig = styled.h2`
    font-weight: bold;
    font-size: 13px;
    color: #b0b0b0;
    margin-top: 15px;
`

const Rating = styled.div`
    margin-left: 5px;
    font-weight: bold;
    color: #b0b0b0;
    margin-top: 13px;
    font-size: 13px;
`

const StarIcon = styled(Star)`
    color: #ff8e1f;
    fill: currentColor;
    margin-top: -4px;
    margin-right: 6px;
    margin-left: -5px;
`

class PosterCard extends Component {

    render() {
        const { poster, title, release, rating, vote } = this.props;

        return (
            <Item>
                <Poster src={"https://image.tmdb.org/t/p/w600_and_h900_bestv2" + poster} />
                <MovieInfo>
                    <TitleBig>
                        {title}
                    </TitleBig>
                    <SubTitleBig>
                        {release}
                    </SubTitleBig>
                    <Rating>
                        <StarIcon size="18" />{rating} ({vote})
                    </Rating>
                </MovieInfo>
            </Item>
        );
    }
}

export default PosterCard;