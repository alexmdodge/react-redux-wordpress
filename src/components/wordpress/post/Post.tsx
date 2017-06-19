import * as React from 'react';
import { PostFull, PostExcerpt, PostCard, PostTitle } from './partials';
import './Post.css';

const LAYOUTS = {
  FULL: 'full',
  CARD: 'card',
  EXCERPT: 'excerpt',
  TITLE: 'title',
};

interface Props {
  post: WP.Post;
  children?: object;
  layout?: string;
}

class Post extends React.Component<Props, null> {
  renderPostLayout() {
    let layout = this.props.layout || 'excerpt';
    switch (layout.toLowerCase()) {
      case LAYOUTS.FULL:
        return <PostFull post={this.props.post} />;
      case LAYOUTS.CARD:
        return <PostCard post={this.props.post} />;
      case LAYOUTS.TITLE:
        return <PostTitle post={this.props.post} />;
      default:
        return <PostExcerpt post={this.props.post} />;
    }
  }
  
  render() {
    const { layout } = this.props;
    let layoutClass = layout ? `post-item--${layout}` : 'post-item--excerpt';
    return(
      <div className={`post-item ${layoutClass}`}>
        {this.renderPostLayout()}
        {this.props.children}
      </div>
    );
  }
}

export default Post;