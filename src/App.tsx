/* Vendor Imports */
import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

/* Application Components */
import Login from './components/admin/login/Login';
import Home from './components/public/home/Home';
import Blog from './components/public/blog/Blog';
import About from './components/public/about/About';
import Header from './components/common/header/Header';
import Samples from './components/public/samples/Samples';
import SinglePost from './components/common/post-single/SinglePost';
import ScrollToTop from './components/common/ScrollToTop';

/**
 * The entry point of the application. Contains the header, routing, and 
 * a component to ensure routing always sets the window to the top.
 * 
 * Note: The generic structure for the React.Component is <Props, State>
 */
const App = () => (
  <div className="container">
    <BrowserRouter>
      <ScrollToTop>
        <Header />
        <Switch>
          {/* Login path for acquiring authentication */}
          <Route path="/login" component={Login} />
          {/* Private routes requiring authentication */}
          <Route path="/admin/:authKey" component={Admin} />
          <Route path="/admin/post-manager/:authKey" component={PostManager} />
          {/* Public Routes without Authentication */}
          <Route path="/about" component={About} />
          <Route path="/samples" component={Samples} />
          <Route path="/admin/login" component={Login} />
          <Route path="/blog/:slug" component={SinglePost} />
          <Route path="/blog" component={Blog} />
          <Route path="/" component={Home} />
        </Switch>
      </ScrollToTop>
    </BrowserRouter>
  </div>
);

export default App;
