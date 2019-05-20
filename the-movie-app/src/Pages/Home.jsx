// import React, { Component } from 'react';

// //Components
// //import MoviesSlide from '../Components/MoviesSlide';
// import MoviesHList from '../Components/MoviesHList';

// //Package
// import styled from 'styled-components';

// //ReactStrap
// import { Container, Row, Col } from 'reactstrap';

// const SideNav = styled(Col)`
//     background-color: #fafbfc;
//     border-right: 2px solid #f5f5f5;
//     height: 100vh;
// `
// const Main = styled(Col)`
// `

// class Home extends Component {

//     render() {
//         return (
//             <Container fluid>
//                 <Row>
//                     <SideNav sm="12" md="2">
//                         navigation
//                 </SideNav>
//                     <Main sm="12" md="10">
//                         <Row>
//                             <MoviesHList />
//                         </Row>
//                     </Main>
//                 </Row>
//             </Container>
//         );
//     }
// }

// export default Home;

import React from 'react'
import ReactDOM from 'react-dom'
import Avatar from 'react-avatar-edit'

class App extends React.Component {

    constructor(props) {
        super(props)
        const src = './example/einshtein.jpg'
        this.state = {
            preview: null,
            src
        }
        this.onCrop = this.onCrop.bind(this)
        this.onClose = this.onClose.bind(this)
    }

    onClose() {
        this.setState({ preview: null })
    }

    onCrop(preview) {
        this.setState({ preview })
    }

    render() {
        return (
            <div>
                {!this.state.preview ? <Avatar
                    width={400}
                    height={400}
                    onCrop={this.onCrop}
                    onClose={this.onClose}
                    src={this.state.src}
                    shadingColor={this.state.shading}
                    shadingOpacity={this.state.opacity}
                /> : <Avatar
                        onClose={this.onClose}
                    />}
                <img src={this.state.preview} alt="preview" />
            </div>
        )
    }
}

export default App;