/* Vendor Components */
import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

/* Actions and Utilities */
import { fetchPost, fetchMedia } from '../actions';
import { stateGroupIsLoading } from '../reducers/utilities';

/* Local Components */
import { Loading } from '../components/common';
import { Post } from '../components/wordpress';

interface Props extends RouteComponentProps<any> {
  post: WP.Post;
  images: WP.ImageMap;
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
    if ( stateGroupIsLoading(post, images) ) { return <Loading />; }

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