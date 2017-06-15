import axios from 'axios';
import * as Actions from '../constants';
import * as Constants from '../constants';

export function fetchPosts() {
  const request = axios.get(`${Constants.ROOT_URL}/posts`);

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
  const request = axios.get(`${Constants.ROOT_URL}/posts?per_page=${count}`);

  return {
    type: Actions.FETCH_RECENT_POSTS,
    payload: request, 
  };
}

export function fetchPost(slug: string): Actions.DispatchFetchPost {
  const request = axios.get(`${Constants.ROOT_URL}/posts?slug=${slug}`);

  return {
    type: Actions.FETCH_POST,
    payload: request,
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