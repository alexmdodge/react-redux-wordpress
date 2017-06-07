import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PostsIndex from './containers/posts-index';
import './App.css';

const logo = require('./logo.svg');

class App extends React.Component<{}, null> {
  render() {
    return (
      <div className="container">
      <h2 className="jumbotron post__header" style={{textAlign: 'center'}}> 
        The <b>BEST</b> Blog Ever
        <img src={logo} style={{width: '50px'}}/>
      </h2>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={PostsIndex as any} />
        </Switch>
      </BrowserRouter>
    </div>
    );
  }
}

export default App;
