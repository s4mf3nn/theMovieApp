import React, { Component } from 'react';

//Packages
import styled from 'styled-components';

const Item = styled.div`
    background-color: blueviolet;
    border-radius: 20px;
    height: 280px;
    padding: 15px;
    margin: 15px;
    width: 186px;
    display: inline-block;
    float: none;
`

class Card extends Component {
    render() {
        console.log(this.props.poster);
        return (
            <Item>
                {this.props.poster}
            </Item>
        );
    }
}

export default Card;