import React, { Component, Fragment } from 'react';

// Packages
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import Home from './Pages/Home';

class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
