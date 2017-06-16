import * as React from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import './Header.css';

interface Props extends RouteComponentProps<any> {
  routes: WP.Route[];
  color?: string;
  className?: string;
  style?: { [key: string]: object };
}

class Header extends React.Component<Props, any> {
  renderNavigation = (): any => {
    const { routes, location } = this.props;
    return routes.filter(route => !(route.isAdmin || route.isChild || route.isHidden))
      .map((route, i) => {
        let buttonType = '';
        let path = (!route.path || route.path === '/') ? '#' : route.path.substring(1);

        // Check for parent path existence. Supports future nested nav menu items
        if (location.pathname.length === 1 && path.length === 1 ) {
          buttonType = 'main-header__link--active';
        } else if (location.pathname.indexOf(path) > -1) {
          buttonType = 'main-header__link--active';
        }

        return (
          <Link
            key={i}
            className={`main-header__link ${buttonType}`} 
            to={route.path || '/'}
          >
            {route.label}
          </Link>
        );
      });
  }
  render() {
    return (
      <nav
        style={{
          ...this.props.style,
          backgroundColor: 'rgba(73, 122, 156, 0.9)',
          borderBottom: '4px solid rgba(73, 122, 156, 1)',
        }}
        className={`main-header ${this.props.className}`}
      >
        {this.renderNavigation()}
      </nav>
    );
  }
}

export default withRouter<any>(Header);