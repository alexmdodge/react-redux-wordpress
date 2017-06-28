import * as React from 'react';
import { Link } from 'react-router-dom';
import { SafeHtml, ImageBlock } from '../../../common';

interface Props {
  post: WP.Post;
  image?: string;
}

class PostCard extends React.Component<Props, object> {
  render() {
    const {post, image} = this.props;

    return (
      <div className="post__container post__container--card">
        <ImageBlock
          image={image}
          isSingle={true}
          isStretched={true}
          height="200px"
        />
        <div className="post__card-block">
          <h3 className="post__title post__title--card">
            <SafeHtml content={post.title.rendered} />
          </h3>
          <p className="post__content post__content--card">
            <SafeHtml content={post.excerpt.rendered} />
          </p>
        </div>
        <Link 
          to={`/blog/${post.slug}`}
          className="post__card-button btn btn-secondary"
        >
          View Post
        </Link>
      </div>
    );
  }
}

export default PostCard;