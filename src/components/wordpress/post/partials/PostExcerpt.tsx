import * as React from 'react';
import { Link } from 'react-router-dom';
import { SafeHtml, ImageBlock } from '../../../common';

interface Props {
  post: WP.Post;
}

const PostExcerpt = (props: Props): JSX.Element => (
  <div className="post__container post__container--excerpt">
    <ImageBlock >
      <Link
        to={`/blog/${props.post.slug}`}
        className="block-link"
      >
        <h3 className="post__title post__title--excerpt">
          <SafeHtml content={props.post.title.rendered} />
        </h3>
        <p className="post__content post__content--excerpt">
          <SafeHtml content={props.post.excerpt.rendered} />
        </p>
      </Link>
    </ImageBlock>
  </div>
);

export default PostExcerpt;