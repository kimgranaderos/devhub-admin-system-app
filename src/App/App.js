import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//Containers
import Layout from '../containers/Layout'

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <Switch>
          <Route path="/" name="Home" render={props => <Layout {...props}/>}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
