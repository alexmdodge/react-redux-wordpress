import axios, { AxiosPromise } from 'axios';
import * as constants from '../constants';

export interface FetchPosts {
  type: constants.FETCH_POSTS;
  payload: AxiosPromise;
}

export interface FetchPost {
  type: constants.FETCH_POST;
  payload: AxiosPromise;
}

export function fetchPosts(): FetchPosts {
  const request = axios.get(`${constants.ROOT_URL}/posts`);

  return {
    type: constants.FETCH_POSTS,
    payload: request, 
  };
}

export function fetchPost(id: number): FetchPost {
  const request = axios.get(`${constants.ROOT_URL}/posts/${id}`);

  return {
    type: constants.FETCH_POST,
    payload: request, 
  };
}