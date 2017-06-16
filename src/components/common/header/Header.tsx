import * as React from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import './Header.css';

interface Props extends RouteComponentProps<any> {
  routes: WP.Route[];
  color?: string;
}

class Header extends React.Component<Props, any> {
  renderNavigation = (): any => {
    const { routes, location } = this.props;
    return routes.filter(route => !(route.isAdmin || route.isChild || route.isHidden))
      .map((route, i) => {
        let buttonType = 'btn-secondary';
        let path = (!route.path || route.path === '/') ? '#' : route.path.substring(1);
        if (location.pathname.length === 1 && path.length === 1 ) {
          buttonType = 'btn-outline-primary';
        } else if (location.pathname.indexOf(path) > -1) {
          buttonType = 'btn-outline-primary';
        }
        return (
          <Link
            key={i}
            className={`btn ${buttonType}`} 
            to={route.path || '/'}
          >
            {route.label}
          </Link>
        );
      });
  }
  render() {
    return (
      <nav className="post-nav">
        {this.renderNavigation()}
      </nav>
    );
  }
}

export default withRouter<any>(Header);