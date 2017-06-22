/* Vendor Imports */
import * as React from 'react';
import { connect } from 'react-redux';

/* Local Imports */
import { PostList, Layout } from '../components/wordpress';
import { Loading } from '../components/common';
import { fetchPosts } from '../actions';

interface Props {
  posts: WP.Post[];
  range?: number;
  layout?: Layout;
  fetchPosts(): void;
}

class PostListContainer extends React.Component<Props, any> {
  componentDidMount() {
    // fetch posts here
    this.props.fetchPosts();
  }
  
  render() {
    const { posts, range, layout } = this.props;
    if (!posts) { return <Loading />; }

    return (
      <PostList 
        posts={posts}
        range={range}
        layout={layout}
      />
    );
  }
}

function mapStateToProps({ posts }: WP.StoreState) {
  return { posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostListContainer) as any;