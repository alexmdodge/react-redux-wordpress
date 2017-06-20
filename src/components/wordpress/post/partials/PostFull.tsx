import * as React from 'react';
import * as moment from 'moment';

/* Local Components */
import { SafeHtml, ImageBlock } from '../../../common';

interface Props {
  post: WP.Post;
}

const PostFull = ({ post }: Props): JSX.Element => (
  <div className="post-item__container--full">
    <ImageBlock
      className="post-item__header"
      size="medium"
    >
      <h1 className="post-item__title post-item__title--full">
        <SafeHtml content={post.title.rendered} />
      </h1>
      <div className="post-item__info">
        <h3 className="post-item__author">
          by Alex Dodge
        </h3>
        <span className="vertical-bar" />
        <h3 className="post-item__date">
          {moment(post.date).format('LL')}
        </h3>
      </div>

    </ImageBlock>
    <div className="container">
      <div className="post-item__content post-item__content--full">
        <SafeHtml content={post.content.rendered} />
      </div>
    </div>
  </div>
);

export default PostFull;