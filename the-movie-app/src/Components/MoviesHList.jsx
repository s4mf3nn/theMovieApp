import React, { Component } from 'react';

//Package
import styled from 'styled-components';

//ReactStrap
import { Container } from 'reactstrap';

const CardsContainer = styled.div`
    overflow-x: scroll;
    overflow-y: hidden;
    scrollbar-color: #f3f3f3 white;
    white-space: nowrap;
`

const Card = styled.div`
    background-color: blueviolet;
    border-radius: 20px;
    height: 280px;
    padding: 15px;
    margin: 15px;
    width: 180px;
    display: inline-block;
    float: none;
`

class MoviesHList extends Component {
    render() {
        return (
            <Container fluid>
                <CardsContainer>
                    <Card>

                    </Card>
                    <Card>

                    </Card>
                    <Card>

                    </Card>
                    <Card>

                    </Card>
                    <Card>

                    </Card>
                    <Card>

                    </Card>
                    <Card>

                    </Card>
                    <Card>

                    </Card>
                    <Card>

                    </Card>
                </CardsContainer>
            </Container>
        );
    }
}

export default MoviesHList;