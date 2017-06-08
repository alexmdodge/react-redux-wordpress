import * as React from 'react';
import * as moment from 'moment';
import { connect } from 'react-redux';
import { fetchPost } from '../../actions';
import { RouteComponentProps } from 'react-router-dom';
import { StoreState } from '../../types';

import SafeHtml from '../../components/safe-html';

export interface Props extends RouteComponentProps<{}> {
  post: Post;
  postMedia: PostMedia;
  fetchPost(slug: string): void;
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

export interface PostMedia {
  url: string;
}

class PostSingle extends React.Component<Props, object> {
  componentDidMount() {
    const { slug } = this.props.match.params as Params;
    this.props.fetchPost(slug);
  }

  render() {
    const { post, postMedia } = this.props;
    console.log(post, postMedia);

    if (!post && !postMedia) {
      return <div> Loading . . . </div>;
    }

    return (
      <div className="post-single">
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

function mapStateToProps({ posts, media }: StoreState, ownProps: any) {
  const { slug } = ownProps.match.params;
  return { 
    post: posts[slug],
    postMedia: media[slug],
  };
}

export default connect(mapStateToProps, { fetchPost })(PostSingle);