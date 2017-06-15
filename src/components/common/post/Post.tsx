import * as React from 'react';
import SafeHtml from '../SafeHtml';
import './post-list-item.css';

interface Props {
  post: WP.Post;
  onSelectPost(): void;
}

const PostListItem = (props: Props): JSX.Element => (
  <div onClick={() => props.onSelectPost()} className="post-item">
    <h3 className="posts-item__title">
      {props.post.title.rendered}
    </h3>
    <p className="posts-item__content">
      <SafeHtml content={props.post.excerpt.rendered} />
    </p>
  </div>
);

export default PostListItem;