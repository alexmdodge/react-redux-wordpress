/* Vendor Imports */
import * as React from 'react';
import { connect } from 'react-redux';

/* Local Components */
import { PostList } from '../components/wordpress';

interface Props {
  posts: WP.Post[];
  range?: number;
  layout?: string;
}

class PostListContainer extends React.Component<Props, any> {
  render() {
    const { posts, range } = this.props;
    return (
      <PostList 
        posts={posts}
        range={range}
      />
    );
  }
}

function mapStateToProps({ posts }: WP.StoreState) {
  return { posts };
}

export default connect(mapStateToProps)(PostListContainer) as any;