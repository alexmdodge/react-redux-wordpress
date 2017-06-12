import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ScrollToTop from './components/scroll-to-top';
import Home from './containers/home/home';
import Header from './components/header/header';
import Blog from './containers/blog/blog';
import PostSingle from './containers/post-single/post-single';
import './App.css';

class App extends React.Component<{}, null> {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <ScrollToTop>
            <Header />
            <Switch>
              <Route path="/blog/:slug" component={PostSingle} />
              <Route path="/blog" component={Blog} />
              <Route path="/" component={Home} />
            </Switch>
          </ScrollToTop>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
