import React, { Component, Fragment } from 'react';

// Packages
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import Home from './Pages/Home';
import Movie from './Pages/Movie.jsx'
import MissingPage from './Pages/MissingPage';

class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/explore" component={Movie} />
            <Route component={MissingPage} />
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
