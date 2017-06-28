import axios from 'axios';
import * as Actions from '../constants';
import * as Constants from '../constants';

export function fetchPosts() {
  const request = axios.get(`${Constants.REST_URL}/posts`);

  return (dispatch: any) => {
    return request.then(response => {
      dispatch({
        type: Actions.FETCH_POSTS,
        payload: response,
      });
      const minDate = response.data.map((post: any) => Date.parse(post.date)).pop();
      return dispatch(updateValidMonths(minDate));
    });
  };
}

export function fetchRecentPosts(count: number): Actions.DispatchFetchRecentPost {
  return {
    type: Actions.FETCH_RECENT_POSTS,
    payload: axios.get(`${Constants.REST_URL}/posts?per_page=${count}`), 
  };
}

export function fetchPost(slug: string): Actions.DispatchFetchPost {
  return {
    type: Actions.FETCH_POST,
    payload: axios.get(`${Constants.REST_URL}/posts?slug=${slug}`),
  };
}

export function updatePostRange(date: string): Actions.DispatchUpdatePostsRange {
  return {
    type: Actions.UPDATE_POSTS_RANGE,
    payload: date,
  };
}

export function updateValidMonths(date: number): Actions.DispatchUpdateValidMonths {
  return {
    type: Actions.UPDATE_VALID_MONTHS,
    payload: date,
  };
}

export function fetchMedia(): any {
  return {
    type: Actions.FETCH_MEDIA,
    payload: axios.get(`${Constants.REST_URL}/media`),
  };
}

export function getRequestToken(): any {

  return {
    type: Actions.GET_REQUEST_TOKEN,
    payload: axios.request({
      url: 'oauth/request',
      baseURL: Constants.BASE_URL,
      method: 'post',
    }),
  };
}