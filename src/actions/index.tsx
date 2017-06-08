import axios from 'axios';
import * as constants from '../constants';

export function fetchPosts() {
  const request = axios.get(`${constants.ROOT_URL}/posts`);

  return {
    type: constants.FETCH_POSTS,
    payload: request, 
  };
}

export function fetchPost(slug: string) {
  const request = axios.get(`${constants.ROOT_URL}/posts?slug=${slug}`);
  return (dispatch: any) => {
    return request
      .then(post => {
        dispatch({
          type: constants.FETCH_POST,
          payload: post,
        });

        /* Dispatch Second Request */
        const data = post.data[0];
        return getMedia(data.featured_media)
          .then((media: object) => {
            dispatch({
              type: constants.FETCH_MEDIA,
              payload: {
                id: data.id,
                media
              },
            });
          })
          .then((error: object) => {
            dispatch({
              type: constants.FETCH_MEDIA_ERROR,
              payload: error,
            });
          });
      });
  };
}

/* Support Functions for Nesting */
function getMedia(id: number): any {
  return axios.get(`${constants.ROOT_URL}/media/${id}`);
}