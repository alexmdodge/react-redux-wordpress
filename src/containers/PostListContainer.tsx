/* Vendor Imports */
import * as React from 'react';
import { connect } from 'react-redux';

/* Actions and Utilities */
import { fetchPosts, fetchMedia } from '../actions';
import { stateGroupIsLoading } from '../reducers/utilities';

/* Local Imports */
import { PostList, Layout } from '../components/wordpress';
import { Loading } from '../components/common';

interface Props {
  posts: WP.PostsState;
  media: WP.MediaState;
  range?: number;
  layout?: Layout;
  fetchPosts(): void;
  fetchMedia(): void;
}

class PostListContainer extends React.Component<Props, any> {
  componentDidMount() {
    // fetch posts here
    this.props.fetchPosts();
    this.props.fetchMedia();
  }
  
  render() {
    const { posts, range, media, layout } = this.props;
    if ( stateGroupIsLoading(posts, media) ) { 
      return <Loading />; 
    }

    return (
      <PostList 
        posts={posts}
        media={media}
        range={range}
        layout={layout}
      />
    );
  }
}

function mapStateToProps({posts, media}: WP.StoreState, ownProps: Props) {
  return { posts, media };
}

export default connect(mapStateToProps, { fetchPosts, fetchMedia })(PostListContainer) as any;