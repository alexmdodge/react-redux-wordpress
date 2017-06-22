import * as React from 'react';
import { Post, Layout } from '../';
import './PostList.css';

interface Props {
  posts: WP.Post[];
  range?: number;
  layout?: Layout;
}

export default class PostList extends React.Component<Props, null> {
  renderPostList() {
    const { range = 10, posts, layout } = this.props;
    return Object.keys(posts).map((key, i) => (
      <Post
        key={i}
        className={`post-list__item post-list__item--${layout}`}
        layout={layout}
        post={posts[key]}
      />
    )).slice(0, range);
  }
  
  render() {
    const classes = this.props.layout ? `post-list--${this.props.layout}` : 'post-list--excerpt';
    return (
      <div className={`post-list ${classes}`}>
        {this.renderPostList()}
      </div>
    );
  }
}
