import React, { Component } from 'react';

// Packages
import { Link } from 'react-router-dom'

// Icons
import { ArrowLeft } from 'react-feather';

// Styled components
import styled from 'styled-components';

const GoBackContainer = styled(Link)`
    margin: 35px;
    z-index: 10000;
    cursor: pointer;
`

const ArrowBack = styled(ArrowLeft)`
    /*margin: 35px -35px -35px 35px;*/
    color: #fff;
    background-color: rgba(255,255,255,0.2);
    border-radius: 40px;
    padding: 12px;
    width: 60px;
    height: 60px;
    z-index: 10000;
`

const GoBack = () => {
    return (
        <GoBackContainer to="/">
            <ArrowBack />
        </GoBackContainer>
    );
}

export default GoBack;