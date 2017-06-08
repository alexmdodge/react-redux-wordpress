import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './header.css';

const Header = () => (
  <nav className="post-nav">
    <Link className="post__new btn btn-default" to="/">
      Home
    </Link>
    <Link className="post__new btn btn-default" to="/blog">
      Blog
    </Link>
    <Link className="post__new btn btn-default" to="/about">
      About
    </Link>
    <Link className="post__new btn btn-default" to="/samples">
      Samples
    </Link>
    <Button bsStyle="primary">
      Test
    </Button>
  </nav>
);

export default Header;