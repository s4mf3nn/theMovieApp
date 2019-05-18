import React, { Component } from 'react';

//Package
import styled from 'styled-components';

//ReactStrap
import { Container, Row, Col } from 'reactstrap';

const SlideCard = styled.div`
    background-color: blueviolet;
    border-radius: 20px;
    height: 280px;
    padding: 15px;
    margin: 15px;
    width: 510px;
`

class MoviesSlide extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <SlideCard>

                    </SlideCard>
                    <SlideCard>

                    </SlideCard>
                </Row>
            </Container>
        );
    }
}

export default MoviesSlide;