/* Vendor Imports */
import * as React from 'react';
import { connect } from 'react-redux';

/* Local Imports */
import { PostList, Layout } from '../components/wordpress';
import { Loading } from '../components/common';
import { fetchPosts } from '../actions';

interface Props {
  posts: WP.PostsState;
  range?: number;
  layout?: Layout;
  media?: WP.MediaState;
  fetchPosts(): void;
}

class PostListContainer extends React.Component<Props, any> {
  componentDidMount() {
    // fetch posts here
    this.props.fetchPosts();
  }
  
  render() {
    const { posts, range, media, layout } = this.props;
    if (!posts || !media ) { return <Loading />; }

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

export default connect(mapStateToProps, { fetchPosts })(PostListContainer) as any;