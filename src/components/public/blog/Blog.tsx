import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

import { Breadcrumbs } from '../../common';
import { PostFilter } from '../../wordpress';
import { PostListContainer } from '../../../containers';
import './blog.css';

export interface Props extends RouteComponentProps<{}> {
  posts: WP.Post[];
}

class Blog extends React.Component<Props, object> {
  render() {
    return (
      <div className="blog">
        <Row>
          <Col xs="12" md="9" className="blog__post-wrapper">
            <h1 className="blog__title">
              All Posts
            </h1>
            <div className="blog__posts">
              <PostListContainer />
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

export default Blog;