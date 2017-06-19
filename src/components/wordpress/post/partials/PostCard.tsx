import * as React from 'react';
import { SafeHtml } from '../../../common';

interface Props {
  post: WP.Post;
}

const PostCard = (props: Props): JSX.Element => (
  <div className="post-item__container">
    <h3 className="posts-item__title">
      <SafeHtml content={props.post.title.rendered} />
    </h3>
    <p className="posts-item__content">
      Post Card
    </p>
  </div>
);

export default PostCard;