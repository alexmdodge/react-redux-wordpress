import * as React from 'react';
import * as moment from 'moment';

/* Local Components */
import { SafeHtml, ImageBlock } from '../../../common';

interface Props {
  post: WP.Post;
  image?: string;
}

class PostFull extends React.Component<Props, object> {
  render() {
    const { post, image} = this.props;

    return (
      <div className="post__container--full">
        <ImageBlock
          opacity={0.7}
          image={image}
          isSingle={true}
          isStretched={true}
          className="post__header"
          size="medium"
        >
          <h1 className="post__title post__title--full">
            <SafeHtml content={post.title.rendered} />
          </h1>
          <div className="post__info">
            <h3 className="post__author">
              by Alex Dodge
            </h3>
            <span className="vertical-bar" />
            <h3 className="post__date">
              {moment(post.date).format('LL')}
            </h3>
          </div>

        </ImageBlock>
        <div className="container">
          <div className="post__content post__content--full">
            <SafeHtml content={post.content.rendered} />
          </div>
        </div>
      </div>
    );
  }
}

export default PostFull;