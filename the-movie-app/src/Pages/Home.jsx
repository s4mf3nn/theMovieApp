import React, { Component } from 'react';

//Components
import MoviesSlide from '../Components/MoviesSlide';
import MoviesHList from '../Components/MoviesHList';

//Package
import styled from 'styled-components';

//ReactStrap
import { Container, Row, Col } from 'reactstrap';

const SideNav = styled(Col)`
    background-color: #fafbfc;
    border-right: 2px solid #f5f5f5;
    height: 100vh;
`
const Main = styled(Col)`
`

class Home extends Component {

    render() {
        return (
            <Container fluid>
                <Row>
                    <SideNav sm="12" md="2">
                        navigation
                </SideNav>
                    <Main sm="12" md="10">
                        <Row>
                            Trending
                            <MoviesSlide />
                        </Row>
                        <Row>
                            Fantastique
                            <MoviesHList />
                        </Row>
                    </Main>
                </Row>
            </Container>
        );
    }
}

export default Home;
