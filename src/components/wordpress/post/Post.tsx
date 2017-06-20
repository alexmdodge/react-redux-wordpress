import * as React from 'react';
import { PostFull, PostExcerpt, PostCard, PostTitle } from './partials';
import './Post.css';

interface Props {
  post: WP.Post;
  children?: object;
  layout?: 'full' | 'card' | 'excerpt' | 'title';
  className?: string;
}

class Post extends React.Component<Props, null> {
  renderPostLayout() {
    let layout = this.props.layout || 'excerpt';
    switch (layout.toLowerCase()) {
      case 'full':
        return <PostFull post={this.props.post} />;
      case 'card':
        return <PostCard post={this.props.post} />;
      case 'title':
        return <PostTitle post={this.props.post} />;
      default:
        return <PostExcerpt post={this.props.post} />;
    }
  }
  
  render() {
    const { layout } = this.props;
    let layoutClass = layout ? `post--${layout}` : 'post--excerpt';
    return(
      <div className={`post ${layoutClass} ${this.props.className || ''}`}>
        {this.renderPostLayout()}
        {this.props.children}
      </div>
    );
  }
}

export default Post;