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
      <div className="home">
        <Jumbotron className="splash__container">
          <h1 className="splash__title">
            &lt; A Blog About <b>Web Development</b> &gt;
          </h1>
        </Jumbotron>
        <RecentPosts posts={this.recentPosts(3)} />

        <div className="callout">
          <h1 className="callout__title">
            What I do
          </h1>
          <p className="callout__body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Maecenas tempor a magna at imperdiet. Aliquam sed sollicitudin 
            nibh. Fusce et libero consequat, sodales lectus ut, tempus diam. 
            Nam eget convallis ipsum, et maximus orci. Suspendisse maximus 
            placerat orci sit amet dignissim. Suspendisse eu tempor orci. 
            Quisque rhoncus ut lacus sed congue. Integer ac pellentesque felis, 
            nec porttitor risus. Proin lacus sem, lacinia sit amet velit id, 
            convallis imperdiet orci. Vestibulum porta bibendum ipsum eget 
            ullamcorper. Aenean ac pulvinar orci, id mattis orci. Mauris nec 
            suscipit ligula, a semper nibh. Cras ultricies sem et feugiat 
            maximus. Suspendisse potenti. Integer mollis augue vulputate 
            libero blandit, ac condimentum metus bibendum. Duis facilisis 
            ultricies molestie.
          </p>
        </div>
        
      </div>
    );
  }
}

function mapStateToProps({ posts }: StoreState) {
  return { posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);