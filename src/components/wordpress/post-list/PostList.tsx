import * as React from 'react';
import './PostList.css';

interface Props {
  posts: WP.Post[];
  range?: number;
}

export default class PostList extends React.Component<Props, any> {
  render() {
    return (
      <div className="jumbotron">
        <h1> Admin PostList </h1>
      </div>
    );
  }
}
