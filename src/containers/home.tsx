import * as React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import { StoreState } from '../types';
import { RouteComponentProps } from 'react-router-dom';

import RecentPosts from '../components/recent-posts/recent-posts';

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
        <RecentPosts posts={this.props.posts} />
      </div>
    );
  }
}

function mapStateToProps({ posts }: StoreState): StoreState {
  return { posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);