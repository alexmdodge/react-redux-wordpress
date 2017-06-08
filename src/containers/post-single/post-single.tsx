import * as React from 'react';
import * as moment from 'moment';
import { connect } from 'react-redux';
import { fetchPost } from '../../actions';
import { Link, RouteComponentProps } from 'react-router-dom';
import { StoreState } from '../../types';

import SafeHtml from '../../components/safe-html';

export interface Props extends RouteComponentProps<{}> {
  post: object;
  fetchPost(id: number): void;
}

export interface Params {
  id: number;
  slug: string;
}

export interface Post {
  title: {
    rendered: string;
  };
  tags: Array<number>;
  date: Date;
  content: {
    rendered: string;
  };
}

class PostSingle extends React.Component<Props, object> {
  componentDidMount() {
    const { id } = this.props.match.params as Params;
    this.props.fetchPost(id);
  }

  render() {
    const post = this.props.post as Post;
    console.log(post);

    if (!post) {
      return <div> Loading . . . </div>;
    }

    return (
      <div className="post-single">
        <Link to="/" className="btn btn-secondary">
          Home
        </Link>
        <div className="post-single__title jumbotron" style={{ marginTop: '30px'}}>
          <h1>
            {post.title.rendered}
          </h1>
        </div>
        <div className="post-single__categories">
          Date: {moment(post.date).format('LL')}
        </div>
        <div className="post-single__content">
          <SafeHtml content={post.content.rendered} />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ posts }: StoreState, ownProps: any) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost })(PostSingle);