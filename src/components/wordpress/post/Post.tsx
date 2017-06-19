import * as React from 'react';
import { SafeHtml } from '../../common';
import './Post.css';

interface Props {
  post: WP.Post;
  children?: object;
  onSelectPost(): void;
}

interface State {

}

class Post extends React.Component<Props, State> {
  render() {

    return(
      <div className="post-item">
        <h3 className="posts-item__title">
          <SafeHtml content={this.props.post.title.rendered} />
        </h3>
        <p className="posts-item__content">
          <SafeHtml content={this.props.post.excerpt.rendered} />
        </p>
        {this.props.children}
      </div>
    );
  }
}

export default Post;