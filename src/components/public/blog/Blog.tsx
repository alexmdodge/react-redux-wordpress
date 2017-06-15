import * as React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../../actions';
import { RouteComponentProps } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

import { PostFilter, Post, Loading, Breadcrumbs } from '../../common';
import './blog.css';

export interface Props extends RouteComponentProps<{}> {
  posts: WP.Post[];
  postsRange: {
    min: number;
    max: number;
  };
  fetchPosts(): void;
}

class Blog extends React.Component<Props, object> {
  componentDidMount() {
    this.props.fetchPosts();
  }

  onSelectPost = (slug: string): void => {
    this.props.history.push(`/blog/${slug}`);
  }

  /**
   * Return all posts as post list components which were published
   * in the month specified. Will hold future support for two dates
   * if multiple selections are required.
   */
  renderPostsList = (): any => {
    return Object.keys(this.props.posts).filter((key) => {
      const postDate = Date.parse(this.props.posts[key].date);
      const { min, max } = this.props.postsRange;
      return (postDate <= max && postDate >= min);
    }).map((key) => {
      const post = this.props.posts[key];
      return (
        <Post
          onSelectPost={() => this.onSelectPost(post.slug)}
          post={post} 
          key={key}
        />
      );
    });
  }

  render() {
    if (!this.props.posts) { 
      return <Loading />; 
    }
    return (
      <div className="blog">
        <Row>
          <Col xs="12" md="9" className="blog__post-wrapper">
            <h1 className="blog__title">
              All Posts
            </h1>
            <div className="blog__posts">
              {this.renderPostsList()}
            </div>
          </Col>

          <Col xs="12" md="3" className="blog__navigation">
            <h5 className="blog__navigation-title">
              By Date
            </h5>
            <hr/>
            <PostFilter />
          </Col>
        </Row>
        <Breadcrumbs history={this.props.history} />
      </div>
    );
  }
}

function mapStateToProps({ posts, ui }: WP.StoreState) {
  return { 
    posts,
    postsRange: ui.postsFilter.postsRange,
  };
}

export default connect(mapStateToProps, { fetchPosts })(Blog);