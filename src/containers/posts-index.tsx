import * as React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import { Link } from 'react-router-dom';
import { StoreState } from '../types';

import PostsList from '../components/posts-list';

export interface Props {
  posts: object;
  fetchPosts(): void;
}

class PostsIndex extends React.Component<Props, object>  {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <nav className="post-nav">
          <Link className="post__new btn btn-secondary" to="/">
            New Posts
          </Link>
          <h1> All Posts </h1>
          <PostsList posts={this.props.posts} />
        </nav>
      </div>
    );
  }
}

function mapStateToProps({ posts }: StoreState): StoreState {
  return { posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);