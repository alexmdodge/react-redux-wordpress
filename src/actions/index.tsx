import axios, { AxiosPromise } from 'axios';
import * as constants from '../constants';

export interface FetchPosts {
  type: constants.FETCH_POSTS;
  payload: AxiosPromise;
}

const API_KEY = '?key=adodgetest321';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';

export function fetchPosts(): FetchPosts {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: constants.FETCH_POSTS,
    payload: request, 
  };
}

// export function fetchPost(id) {
//   const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

//   return {
//     type: FETCH_POST,
//     payload: request, 
//   }
// }

// export function createPost(post, callback) {
//   const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, post)
//     .then(() => callback());

//   return {
//     type: CREATE_POST,
//     payload: request, 
//   }
// }

// export const DELETE_POST = 'DELETE_POST';

// export function deletePost(id, callback) {
//   const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
//     .then(() => callback());

//   return {
//     type: DELETE_POST,
//     payload: id,
//   }
// }