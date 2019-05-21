import React, { Component } from 'react';

//Components
import LScapeGallery from '../Components/LScapeGallery';
import PosterGallery from '../Components/PosterGallery';

//Package
import styled from 'styled-components';

//ReactStrap
import { Container, Row } from 'reactstrap';

const Fluid = styled(Container)`
    padding-right: 15;
    overflow-x: hidden !important;
`

const SideNav = styled.div`
    background-color: #fafbfc;
    border-right: 2px solid #f5f5f5;
    height: 100vh;
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
    height: inherit;

  @media (max-width: 900px) {
    display: none;
  }
`
const Main = styled.div`
    flex: 0 0 83.333333%;
    max-width: 83.33333%;

    @media (max-width: 900px) {
        max-width: 100%;
  }
`

const BigTitle = styled.h1`
    font-weight: bold;
    font-size: 27px;
    padding-left: 30px;
    padding-top: 30px;
    margin-left: 15px;
`

const MobileInfo = styled.div`
    display: none;

@media (max-width: 900px) {
    z-index: 1000;
    display: block;
    width: 100vw;
    height: 100vh;
    text-align: center;
    padding-top: 60%;
    padding-right: 10px;
    margin-left: -10px !important;
    font-size: 28px;
    font-weight: bold;
    position: fixed;
    background-color: #fff;
}
`

const CardsContainer = styled.div`
    overflow-x: scroll;
    overflow-y: hidden;
    scrollbar-color: #f3f3f3 white;
    white-space: nowrap;
    margin-left: 15px;
`

class Home extends Component {

    render() {
        return (
            <Fluid fluid>
                <MobileInfo>
                    This concept is not available on mobile view, please visit it on desktop
                </MobileInfo>
                <Row>
                    <SideNav>
                        navigation
                    </SideNav>
                    <Main>
                        <Row>
                            <BigTitle>Trending Movies</BigTitle>
                            <Container fluid>
                                <CardsContainer>
                                    <LScapeGallery />
                                </CardsContainer>
                            </Container>
                        </Row>
                        <Row>
                            <BigTitle>Browse by category</BigTitle>
                            <Container fluid>
                                <PosterGallery />
                            </Container>
                        </Row>
                    </Main>
                </Row>
            </Fluid>
        );
    }
}

export default Home;
