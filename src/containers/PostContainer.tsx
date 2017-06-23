/* Vendor Components */
import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

/* Actions */
import { fetchPost, fetchMedia } from '../actions';

/* Local Components */
import { Loading } from '../components/common';
import { Post } from '../components/wordpress';

interface Props extends RouteComponentProps<any> {
  post: WP.Post;
  images: WP.ImageList;
  fetchPost(slug: string): void;
  fetchMedia(): void;
}

class PostContainer extends React.Component<Props, object> {
  componentDidMount() {
    const { slug } = this.props.match.params;
    this.props.fetchPost(slug);
    this.props.fetchMedia();
  }

  render() {
    const { post, images } = this.props;
    if ( !(post && images) ) { return <Loading />; }
    console.log(post, images);
    return (
      <div>
        <Post
          layout="full"
          post={post}
          images={images}
        />
      </div>
    );
  }
}

function mapStateToProps(state: WP.StoreState, ownProps: Props) {
  const { posts = false, media = false} = state;
  const post = posts[ownProps.match.params.slug];
  let images = {};

  if (post && media[post.featured_media]) {
    images = media[post.featured_media].media_details.sizes;
  }

  return { post, images };
}

export default connect(mapStateToProps, { fetchPost, fetchMedia })(PostContainer);