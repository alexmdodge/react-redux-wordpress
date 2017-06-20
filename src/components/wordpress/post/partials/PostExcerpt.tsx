import * as React from 'react';
import { SafeHtml, ImageBlock } from '../../../common';

interface Props {
  post: WP.Post;
}

const PostExcerpt = (props: Props): JSX.Element => (
  <div className="post-item__container post-item__container--excerpt">
    <ImageBlock >
      <h3 className="post-item__title post-item__title--excerpt">
        <SafeHtml content={props.post.title.rendered} />
      </h3>
      <p className="post-item__content post-item__content--excerpt">
        <SafeHtml content={props.post.excerpt.rendered} />
      </p>
    </ImageBlock>
  </div>
);

export default PostExcerpt;