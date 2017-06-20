import * as React from 'react';
import { Post } from '../';
import './PostList.css';

interface Props {
  posts: WP.Post[];
  range?: number;
}

export default class PostList extends React.Component<Props, null> {
  renderPostList() {
    const { range = 10, posts } = this.props;
    return Object.keys(posts).map(key => (
      <Post
        className="post-list__item"
        layout={'card'}
        post={posts[key]}
      />
    )).slice(0, range);
  }
  
  render() {
    return (
      <div className="post-list">
        {this.renderPostList()}
      </div>
    );
  }
}
