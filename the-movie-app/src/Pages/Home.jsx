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

class Home extends Component {

    render() {
        return (
            <Fluid fluid>
                <Row>
                    Trending
                    <LScapeGallery />
                </Row>
                <Row>
                    Fantastique
                    <PosterGallery />
                </Row>
            </Fluid>
        );
    }
}

export default Home;
