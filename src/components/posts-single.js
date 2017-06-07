import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';
import { Link } from 'react-router-dom';

class PostsSingle extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  onDeleteClick = () => {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return <div> Loading . . . </div>
    }

    return (
      <div className="post-single">
        <Link to="/" className="btn btn-secondary">
          Home
        </Link>
        <button 
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick}
        >
          Delete Post
        </button>
        <div className="page-header" style={{ marginTop: '30px'}}>
          <h1>
            {post.title}
          </h1>
        </div>
        <div className="post-single__categories">
          Categories: {post.categories}
        </div>
        <div className="post-single__content">
          {post.content}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] }
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostsSingle);