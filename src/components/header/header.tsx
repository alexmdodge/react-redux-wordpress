import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
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
    <Button color="primary">
      Test
    </Button>
  </nav>
);

export default Header;