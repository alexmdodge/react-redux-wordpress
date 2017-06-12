import * as React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions';
import { RouteComponentProps } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import PostRangePicker from '../post-range-picker/post-range-picker';

export interface Props extends RouteComponentProps<{}> {
  posts: WP.Post[];
  fetchPosts(): void;
}

class Blog extends React.Component<Props, object> {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPostsList = (): any => {
    return <div> Post List </div>;
  }
  
  render() {
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
            <h3 className="blog__navigation-title">
              By Date
            </h3>
            <PostRangePicker />
          </Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps({ posts }: WP.StoreState, ownProp?: Props) {
  return { posts };
}

export default connect(mapStateToProps, { fetchPosts })(Blog);