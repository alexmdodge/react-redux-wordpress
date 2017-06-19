import * as React from 'react';
import { SafeHtml } from '../../../common';

interface Props {
  post: WP.Post;
}

const PostExcerpt = (props: Props): JSX.Element => (
  <div className="post-item__container">
    <h3 className="posts-item__title">
      <SafeHtml content={props.post.title.rendered} />
    </h3>
    <p className="posts-item__content">
      <SafeHtml content={props.post.excerpt.rendered} />
    </p>
  </div>
);

export default PostExcerpt;