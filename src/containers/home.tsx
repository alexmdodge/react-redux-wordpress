import * as React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import { StoreState } from '../types';
import { RouteComponentProps } from 'react-router-dom';

import PostsList from '../components/posts-list';

export interface Props extends RouteComponentProps<{}> {
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
          <h1> Recent Posts </h1>
          <PostsList posts={this.props.posts} />
      </div>
    );
  }
}

function mapStateToProps({ posts }: StoreState): StoreState {
  return { posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);