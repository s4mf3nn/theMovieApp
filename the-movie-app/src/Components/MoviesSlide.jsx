import React, { Component } from 'react';

//Package
import styled from 'styled-components';

//ReactStrap
import { Container } from 'reactstrap';


const SlideCardContainer = styled.div`
    overflow-x: scroll;
    overflow-y: hidden;
    scrollbar-color: #f3f3f3 white;
    white-space: nowrap;
`

const SlideCard = styled.div`
    background-color: blueviolet;
    border-radius: 20px;
    height: 280px;
    padding: 15px;
    margin: 15px;
    width: 510px;
    display: inline-block;
    float: none;
`

class MoviesSlide extends Component {
    render() {
        return (
            <Container fluid>
                <SlideCardContainer>
                    <SlideCard>

                    </SlideCard>
                    <SlideCard>

                    </SlideCard>
                    <SlideCard>

                    </SlideCard>
                    <SlideCard>

                    </SlideCard>
                    <SlideCard>

                    </SlideCard>
                    <SlideCard>

                    </SlideCard>
                </SlideCardContainer>
            </Container>
        );
    }
}

export default MoviesSlide;