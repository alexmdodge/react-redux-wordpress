import axios from 'axios';
const OAuth = require('oauth-1.0a');
const qs = require('qs');
import * as Base64 from 'crypto-js/enc-base64';
import * as crypto from 'crypto-js';
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
  const { BASE_URL, CLIENT_KEY, CLIENT_SECRET } = Constants;

  let oauth = OAuth({
    consumer: {
      key: CLIENT_KEY,
      secret: CLIENT_SECRET,
    },
    signature_method: 'HMAC-SHA1',
    hash_function: function(baseString: string, key: string) {
      return Base64.stringify(crypto.HmacSHA1(baseString, key));
    }
  });

  const requestData = {
    url: `${BASE_URL}/oauth1/request`,
    method: 'post',
    data: {
      status: 'Test data here',
    }
  };

  const request = axios.post(`${BASE_URL}/oauth1/request`, qs.stringify({
    'form': oauth.authorize(requestData, CLIENT_KEY),
  }));

  return {
    type: Actions.GET_REQUEST_TOKEN,
    payload: request,
  };
}