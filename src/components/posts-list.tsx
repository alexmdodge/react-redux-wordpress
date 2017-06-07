import * as React from 'react';
import * as lodash from 'lodash';
import { Link } from 'react-router-dom';

export interface Props {
  posts: object;
}

export default class PostsList extends React.Component<Props, object> {
  renderPostsList(post: any) {
    return (
      <li className="list-group-item" key={post.id}>
        <Link 
          to={`/posts/${post.id}`}
          className="post-item__link"
        >
          <h3 className="post-title">
            {post.title}
          </h3>
          <p className="post-body">
            {post.content}
          </p>
          <span className="post-categories">
            {post.categories}
          </span>
        </Link>
      </li>
    );
  }

  render() {
    return (
      <div>
        <ul className="posts-list list-group">
          {lodash.map(this.props.posts, this.renderPostsList)}
        </ul>
      </div>
    );
  }
}
