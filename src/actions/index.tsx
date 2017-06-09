import axios from 'axios';
import * as Actions from '../constants/constants-actions';
import * as Constants from '../constants';

export function fetchPosts(): Actions.DispatchFetchPosts {
  const request = axios.get(`${Constants.ROOT_URL}/posts`);

  return {
    type: Actions.FETCH_POSTS,
    payload: request, 
  };
}

export function fetchRecentPosts(count: number): Actions.DispatchFetchRecentPost {
  const request = axios.get(`${Constants.ROOT_URL}/posts?per_page=${count}`);

  return {
    type: Actions.FETCH_RECENT_POSTS,
    payload: request, 
  };
}

export function fetchPost(slug: string): Actions.DispatchFetchPost {
  const request = axios.get(`${Constants.ROOT_URL}/posts?slug=${slug}`);
  return (dispatch: any) => {
    return request
      .then(post => {
        dispatch({
          type: Actions.FETCH_POST,
          payload: post,
        });

        /* Dispatch Second Request */
        const { featured_media } = post.data[0];
        return getMedia(featured_media)
          .then((media: object) => {
            dispatch({
              type: Actions.FETCH_MEDIA,
              payload: { slug, media },
            });
          })
          .then((error: object) => {
            dispatch({
              type: Actions.FETCH_MEDIA_ERROR,
              payload: error,
            });
          });
      });
  };
}

/* Support Functions for Nesting */
function getMedia(id: number): any {
  return axios.get(`${Constants.ROOT_URL}/media/${id}`);
}