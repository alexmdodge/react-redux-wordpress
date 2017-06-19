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
      <h1 className="post-item__title">
        <SafeHtml content={post.title.rendered} />
      </h1>
      <h3 className="post-item__author">
        by Alex Dodge
      </h3>

    </ImageBlock>
    <div className="container">
      <div className="post-single__date--full">
        Date: {moment(post.date).format('LL')}
      </div>
      <div className="post-single__content">
        <SafeHtml content={post.content.rendered} />
      </div>
    </div>
  </div>
);

export default PostFull;