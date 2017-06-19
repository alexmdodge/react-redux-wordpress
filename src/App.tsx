/* Vendor Imports */
import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

/* Public Application Components */
import { PostList, Post } from './components/wordpress';
import {Header, ScrollToTop, NoPage} from './components/common';
import {Home, Blog, About, Samples} from './components/public';

/* Admin Application Components */
import {Dashboard, Login, PostManager} from './components/admin';

/** 
 * Route Configuration
 * component -> The component to be rendered to the page
 * path  -> The path matched when navigation occurs, order is sensitive
 * title -> Title of page to be reflected in the header title
 * label -> Label to be applied in navigation components like the header or sidebars
 * exact -> No partial matching for the route (/blog won't match /blog/sub-page)
 * isAdmin -> Will only render in header in admin pages
 * isChild -> Is a nested route of another route component
 * isHidden -> Does not exist in any navigation
 */
const routes: WP.Route[] = [
  { path: '/', title: 'RRW | Home', label: 'Home', exact: true, component: Home },
  { path: '/blog/:slug', title: 'RRW', component: PostListContainer, isChild: true },
  { path: '/blog', title: 'RRW | Blog', label: 'Blog', component: Blog },
  { path: '/about', title: 'RRW | About', label: 'About', component: About },
  { path: '/samples', title: 'RRW | Samples', label: 'Samples',  component: Samples },
  { path: '/login', title: 'RRW | Login', label: 'Login',  component: Login, isAdmin: true },
  { path: '/admin/post-manager', title: 'RRW | Post Manager', component: PostManager, isAdmin: true, isChild: true },
  { path: '/admin', title: 'RRW | Admin', label: 'Dashboard',  component: Dashboard, isAdmin: true },
  { title: 'RRW | 404 Error', component: NoPage, isHidden: true }
];

/**
 * Handles dynamic rendering of routes with all sub-routes being passed as props to child
 * components.
 */
const RouteWithSubRoutes = (route: WP.Route) => (
  <Route
    path={route.path}
    render={props => ( <route.component {...props} routes={route.routes}/> )}
  />
);

/**
 * The entry point of the application. Contains the header, routing, and
 * a component to ensure routing always sets the window to the top. The routing
 * is configured above to allow for dynamic configuration of routes later in the app.
 *
 * Note: The generic structure for the React.Component is <Props, State>
 */
const App = () => (
  <BrowserRouter>
    <ScrollToTop>
      <Header routes={routes} />
      <div className="nav__container">
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </div>
    </ScrollToTop>
  </BrowserRouter>
);

export default App;
