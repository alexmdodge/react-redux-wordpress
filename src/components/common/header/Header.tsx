import * as React from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import './Header.css';

interface Props extends RouteComponentProps<any> {
  routes: WP.Route[];
  color?: string;
}

class Header extends React.Component<Props, any> {
  renderNavigation = (): any => {
    console.log(this.props.routes);
  }
  render() {
    return (
      <nav className="post-nav">
        {this.renderNavigation()}
        <Link className="post__new btn btn-link" to="/">
          Home
        </Link>
        <Link className="post__new btn btn-link" to="/blog">
          Blog
        </Link>
        <Link className="post__new btn btn-link" to="/about">
          About
        </Link>
        <Link className="post__new btn btn-link" to="/samples">
          Samples
        </Link>
      </nav>
    );
  }
}

export default withRouter<any>(Header);