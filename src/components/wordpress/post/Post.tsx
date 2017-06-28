import * as React from 'react';
import { PostFull, PostExcerpt, PostCard, PostTitle } from './partials';
import './Post.css';

export type Layout = 'full' | 'card' | 'excerpt' | 'title';

interface Props {
  post: WP.Post;
  images?: WP.ImageMap;
  children?: object;
  layout?: Layout;
  className?: string;
}

class Post extends React.Component<Props, null> {
  renderPostLayout() {
    const { post, images, layout = 'excerpt'} = this.props;

    switch (layout.toLowerCase()) {
      case 'full':
        return (
          <PostFull
            post={post}
            image={images && images.large.source_url}
          />
        );
      case 'card':
        return (
          <PostCard 
            post={post}
            image={images && images.medium.source_url}
          />
        );
      case 'title':
        return (
          <PostTitle post={post} />
        );
      default:
        return (
          <PostExcerpt post={post} />
        );
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