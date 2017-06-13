import * as React from 'react';
import * as moment from 'moment';
import { connect } from 'react-redux';
import { fetchPost } from '../../actions';
import { RouteComponentProps } from 'react-router-dom';
import { Jumbotron } from 'reactstrap';

import SafeHtml from '../../components/safe-html';
import Loading from '../../components/common/loading/loading';
import Breadcrumbs from '../../components/common/breadcrumbs';
import './post-single.css';

export interface Props extends RouteComponentProps<Params> {
  post: WP.Post;
  postMedia: PostMedia;
  fetchPost(slug: string): void;
}

export interface Params {
  id: number;
  slug: string;
}

export interface PostMedia {
  source_url: string;
}

class PostSingle extends React.Component<Props, object> {
  componentDidMount() {
    const { slug } = this.props.match.params;
    this.props.fetchPost(slug);
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return <Loading />;
    }
    const { better_featured_image: image } = post;

    return (
      <div className="post-single">
        <Breadcrumbs history={this.props.history} />
        <Jumbotron className="post-single__title">
          <h1>
            {post.title.rendered}
          </h1>
          <img 
            src={image.source_url}
            className="rounded post-single__thumbnail"
          />
        </Jumbotron>
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

function mapStateToProps({ posts }: WP.StoreState, ownProps: any) {
  return { post: posts[ownProps.match.params.slug] };
}

export default connect(mapStateToProps, { fetchPost })(PostSingle);