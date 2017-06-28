import * as React from 'react';
import { Link } from 'react-router-dom';
import { SafeHtml, ImageBlock } from '../../../common';

interface Props {
  post: WP.Post;
  image?: string;
}

class PostExcerpt extends React.Component<Props, object> {
  render() {
    const {post, image} = this.props;
    return (
      <div className="post__container post__container--excerpt">
        <ImageBlock 
          image={image}
          isSingle={true}
          isStretched={true}
          opacity={0.9}
        >
          <Link
            to={`/blog/${post.slug}`}
            className="block-link"
          >
            <h3 className="post__title post__title--excerpt">
              <SafeHtml content={post.title.rendered} />
            </h3>
            <p className="post__content post__content--excerpt">
              <SafeHtml content={post.excerpt.rendered} />
            </p>
          </Link>
        </ImageBlock>
      </div>
    );
  } 
}

export default PostExcerpt;