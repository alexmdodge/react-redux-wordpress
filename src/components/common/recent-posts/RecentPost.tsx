import * as React from 'react';
import * as lodash from 'lodash';
import { Link } from 'react-router-dom';
import { Card, CardText, CardBlock,
  CardTitle, Col, Row } from 'reactstrap';
import SafeHtml from '../safe-html';
import './recent-posts.css';

export interface Props {
  posts: WP.Post[];
}

export default class RecentPosts extends React.Component<Props, object> {
  renderPostsList(post: any) {
    return (
      <Col key={post.id} xs="12" sm="12" md="6" lg="4">
        <Card className="recent-posts__card">
          <div className="recent-posts__image-wrapper card-img-top">
            <img 
              className="recent-posts__image"
              src={post.better_featured_image.media_details.sizes['card-header'].source_url}
            />
          </div>
          <CardBlock>
            <CardTitle>
              {post.title.rendered}
            </CardTitle>
            <CardText>
              <SafeHtml content={post.excerpt.rendered} />
            </CardText>
            <Link
              to={`/blog/${post.slug}`}
              className="btn btn-secondary recent-posts__button"
            >
              View Post
            </Link>
          </CardBlock>
        </Card>
      </Col>
    );
  }

  render() {
    return (
      <div className="recent-posts">
        <h1 className="recent-posts__title">
          Recent Posts
        </h1>
        <Row>
          {lodash.map(this.props.posts, this.renderPostsList)}
        </Row>
      </div>
    );
  }
}
