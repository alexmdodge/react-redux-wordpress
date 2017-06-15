import * as React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Header.css';

// interface Props {
//   color?: string;
// }

class Header extends React.Component<any, any> {
  render() {
    console.log(this.props);
    return (
      <nav className="post-nav">
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

export default withRouter(Header);