/* Vendor Imports */
import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

/* Public Application Components */
import {Header, SinglePost, ScrollToTop} from './components/common';
import {Home, Blog, About, Samples} from './components/public';

/* Admin Application Components */
import {Dashboard, Login, PostManager} from './components/admin';

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
          <Route path="/admin/:authKey" component={Dashboard} />
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
