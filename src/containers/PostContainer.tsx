/* Vendor Components */
import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

/* Actions */
import { fetchPost } from '../actions';

/* Local Components */
import { Loading } from '../components/common';
import { Post } from '../components/wordpress';

interface Props extends RouteComponentProps<any> {
  post: WP.Post;
  fetchPost(slug: string): void;
}

class PostContainer extends React.Component<Props, object> {
  componentDidMount() {
    const { slug } = this.props.match.params;
    this.props.fetchPost(slug);
  }

  render() {
    const { post } = this.props;
    if ( !post ) { return <Loading />; }
    console.log(post);
    return (
      <Post
        layout="full"
        post={post}
      />
    );
  }
}

function mapStateToProps({ posts }: WP.StoreState, ownProps: Props) {
  return { post: posts[ownProps.match.params.slug] };
}

export default connect(mapStateToProps, { fetchPost })(PostContainer);