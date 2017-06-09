import * as React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions';
import { StoreState } from '../../types';
import { RouteComponentProps } from 'react-router-dom';
import { Jumbotron } from 'reactstrap';
import './home.css';

import RecentPosts from '../../components/recent-posts/recent-posts';

export interface Props extends RouteComponentProps<{}> {
  posts: object;
  fetchPosts(): void;
}

class PostsIndex extends React.Component<Props, object>  {
  componentDidMount() {
    this.props.fetchPosts();
  }

  recentPosts = (count: number): Array<object> => {
    return Object.keys(this.props.posts)
      .map((key) => this.props.posts[key])
      .slice(0, count);
  }

  render() {
    return (
      <div>
        <Jumbotron className="splash__container">
          <h1 className="splash__title">
            &lt; A Blog About <b>Web Development</b> &gt;
          </h1>
        </Jumbotron>
        <RecentPosts posts={this.recentPosts(3)} />
      </div>
    );
  }
}

function mapStateToProps({ posts }: StoreState) {
  return { posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);