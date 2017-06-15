import * as React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => (
  <nav className="post-nav">
    <Link className="post__new btn btn-secondary" to="/">
      Home
    </Link>
    <Link className="post__new btn btn-secondary" to="/blog">
      Blog
    </Link>
    <Link className="post__new btn btn-secondary" to="/about">
      About
    </Link>
    <Link className="post__new btn btn-secondary" to="/samples">
      Samples
    </Link>
  </nav>
);

export default Header;