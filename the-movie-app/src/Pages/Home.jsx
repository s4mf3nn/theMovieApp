// [_] Add a NavBar
// [_] Move the navigation in it own component
// [_] Add a Search Bar component
// [x] Add a "Sort by genre" component

import React, { Component } from 'react';

//Components
import LScapeGallery from '../Components/LScapeGallery';
import PosterGallery from '../Components/PosterGallery';

//Package
import styled from 'styled-components';
import { Film, Shuffle, User } from 'react-feather';

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
    font-size: 25px;
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

const NavCol = styled.div`
  position: fixed;
`

const Logo = styled.div`
  margin: 34px 26px;
  font-size: 20px;
  font-weight: bold;
  color: #fb5732;
  cursor: pointer;
`

const NavItem = styled.div`
    font-size: 18px;
    font-weight: bold;
    margin: 34px 26px;
    color: ${props => props.active ? "#212529" : "#bbb"};
    cursor: pointer;
`

const FilmIcon = styled(Film)`
    padding-right: 6px;
    margin-top: -4px;
`

const ShuffleIcon = styled(Shuffle)`
    padding-right: 6px;
    margin-top: -4px;
`

const UserIcon = styled(User)`
    padding-right: 6px;
    margin-top: -4px;
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
                        <NavCol>
                            <Logo>
                                TheMovieApp
                            </Logo>
                            <NavItem active>
                                <FilmIcon /> Home
                            </NavItem>
                            <NavItem>
                                <ShuffleIcon /> Random
                            </NavItem>
                            <NavItem>
                                <UserIcon /> Profile
                            </NavItem>
                        </NavCol>
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
