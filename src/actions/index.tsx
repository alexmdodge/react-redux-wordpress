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

  return {
    type: Actions.FETCH_POST,
    payload: request,
  };
}

export function updatePostRange(date: number): Actions.DispatchUpdatePostsRange {
  return {
    type: Actions.UPDATE_POSTS_RANGE,
    payload: date,
  };
}