import * as React from 'react';
import { Link } from 'react-router-dom';
import { SafeHtml } from '../../../common';

interface Props {
  post: WP.Post;
}

const PostTitle = (props: Props): JSX.Element => (
  <div className="post__container">
    <Link to={`/blog/${props.post.slug}`} >
      <h3 className="post__title post__title--title">
        <SafeHtml content={props.post.title.rendered} />
      </h3>
    </Link>
  </div>
);

export default PostTitle;