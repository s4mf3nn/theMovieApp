import React, { Component } from 'react';

//Package
import styled from 'styled-components';

//ReactStrap
import { Container, Row, Col } from 'reactstrap';

const Card = styled(Col)`
    background-color: palegreen;
    border-radius: 20px;
    height: 280px;
    width: 100%;
`

class MoviesHList extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col md="2">
                        <Card>

                        </Card>
                    </Col>
                    <Col md="2">
                        <Card>

                        </Card>
                    </Col>
                    <Col md="2">
                        <Card>

                        </Card>
                    </Col>
                    <Col md="2">
                        <Card>

                        </Card>
                    </Col>
                    <Col md="2">
                        <Card>

                        </Card>
                    </Col>
                    <Col md="2">
                        <Card>

                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default MoviesHList;