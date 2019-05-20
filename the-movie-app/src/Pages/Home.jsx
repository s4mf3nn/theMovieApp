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
    font-size: 32px;
    padding-left: 30px;
    padding-top: 50px;
`

class Home extends Component {

    render() {
        return (
            <Fluid fluid>
                <Row>
                    <SideNav>
                        navigation
                    </SideNav>
                    <Main>
                        <Row>
                            <BigTitle>Trending Movies</BigTitle>
                            <LScapeGallery />
                        </Row>
                        <Row>
                            <BigTitle>Browse by category</BigTitle>
                            <PosterGallery />
                        </Row>
                    </Main>
                </Row>
            </Fluid>
        );
    }
}

export default Home;
