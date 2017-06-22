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
  media: any;
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
    const { post, media } = this.props;
    if ( !(post && media) ) { return <Loading />; }
    console.log(post.featured_media, media[post.featured_media]);
    return (
      <div>
        <Post
          layout="full"
          post={post}
        />
      </div>
    );
  }
}

function mapStateToProps({ posts, media }: WP.StoreState, ownProps: Props) {
  const post = posts[ownProps.match.params.slug];
  // const images = media[post.featured_media].media_details.sizes;
  return { post, media };
}

export default connect(mapStateToProps, { fetchPost, fetchMedia })(PostContainer);