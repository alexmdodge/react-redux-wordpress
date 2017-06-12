// Action Types
export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post';
export const FETCH_RECENT_POSTS = 'fetch_recent_posts';

export const FETCH_MEDIA = 'fetch_media';
export const FETCH_MEDIA_ERROR = 'fetch_media_error';
export const CREATE_POST = 'create_post';

export const UPDATE_POSTS_RANGE = 'update_post_range';

export type FETCH_POSTS = typeof FETCH_POSTS;
export type FETCH_POST = typeof FETCH_POST;
export type FETCH_RECENT_POSTS = typeof FETCH_RECENT_POSTS;

export type FETCH_MEDIA = typeof FETCH_MEDIA;
export type FETCH_MEDIA_ERROR = typeof FETCH_MEDIA_ERROR;
export type CREATE_POST = typeof CREATE_POST;

export type UPDATE_POSTS_RANGE = typeof UPDATE_POSTS_RANGE;

export interface DispatchFetchPosts {
  type: FETCH_POSTS;
  payload: Promise<any>;
}
export interface DispatchFetchRecentPost {
  type: FETCH_RECENT_POSTS;
  payload: Promise<any>;
}
export interface DispatchFetchPost {
  type: FETCH_POST;
  payload: Promise<any>;
}

export interface DispatchUpdatePostsRange {
  type: UPDATE_POSTS_RANGE;
  payload: number;
}