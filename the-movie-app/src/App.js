import React, { Component, Fragment } from 'react';

// Packages
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import Home from './Pages/Home';
import Movie from './Pages/Movie';

class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/movie/:id" component={Movie} />
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
