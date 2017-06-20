import * as React from 'react';
import { Link } from 'react-router-dom';
import { SafeHtml, ImageBlock } from '../../../common';

interface Props {
  post: WP.Post;
}

const PostCard = ({ post }: Props): JSX.Element => (
  <div className="post-item__container post-item__container--card">
    <ImageBlock 
      height="200px"
    />
    <div className="post-item__card-block">
      <h3 className="post-item__title">
        <SafeHtml content={post.title.rendered} />
      </h3>
      <p className="post-item__content post-item__content--card">
        <SafeHtml content={post.excerpt.rendered} />
      </p>
    </div>
    <Link 
      to={`/blog/${post.slug}`}
      className="post-item__card-button btn btn-secondary"
    >
      View Post
    </Link>
  </div>
);

export default PostCard;