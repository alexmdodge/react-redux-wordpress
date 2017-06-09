import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './containers/home/home';
import Header from './components/header/header';
import PostSingle from './containers/post-single/post-single';
import './App.css';

class App extends React.Component<{}, null> {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route path="/blog/posts/:slug" component={PostSingle} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
