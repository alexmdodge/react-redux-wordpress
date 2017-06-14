/* Vendor Imports */
import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

/* Application Components */
import ScrollToTop from './components/common/scroll-to-top';
import Header from './components/public/header/header';
import Home from './containers/home/home';
import Blog from './containers/blog/blog';
import About from './components/public/about/about';
import Samples from './components/public/samples/samples';
import PostSingle from './containers/post-single/post-single';

/* Other Imports */
import './App.css';

/**
 * The entry point of the application. Contains the header, routing, and 
 * a component to ensure routing always sets the window to the top.
 * 
 * Note: The generic structure for the React.Component is <Props, State>
 * 
 * @class App
 * @extends {React.Component<{}, null>}
 */
class App extends React.Component<{}, null> {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <ScrollToTop>
            <Header />
            <Switch>
              <Route path="/blog" component={Blog} />
              <Route path="/about" component={About} />
              <Route path="/samples" component={Samples} />
              <Route path="/blog/:slug" component={PostSingle} />
              <Route path="/" component={Home} />
            </Switch>
          </ScrollToTop>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
