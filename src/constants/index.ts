// Fetching
export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post';
export const FETCH_RECENT_POSTS = 'fetch_recent_posts';
export const FETCH_MEDIA = 'fetch_media';
export const FETCH_MEDIA_ERROR = 'fetch_media_error';

// Creation
export const CREATE_POST = 'create_post';

// Updating
export const UPDATE_POSTS_RANGE = 'update_post_range';
export const UPDATE_VALID_MONTHS = 'update_valid_months';

// Authentication
export const GET_REQUEST_TOKEN = 'fetch_request_token';

// Typing For Actions
export type FETCH_POSTS = typeof FETCH_POSTS;
export type FETCH_POST = typeof FETCH_POST;
export type FETCH_RECENT_POSTS = typeof FETCH_RECENT_POSTS;
export type FETCH_MEDIA = typeof FETCH_MEDIA;
export type FETCH_MEDIA_ERROR = typeof FETCH_MEDIA_ERROR;

export type CREATE_POST = typeof CREATE_POST;

export type UPDATE_POSTS_RANGE = typeof UPDATE_POSTS_RANGE;
export type UPDATE_VALID_MONTHS = typeof UPDATE_VALID_MONTHS;

export type GET_REQUEST_TOKEN = typeof GET_REQUEST_TOKEN;

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
  payload: string;
}

export interface DispatchUpdateValidMonths {
  type: UPDATE_VALID_MONTHS;
  payload: number;
}

// API URL Options
export const REST_URL = 'https://api.alexdodge.ca/wp-json/wp/v2';
export const BASE_URL = 'https://api2.alexdodge.ca';

export const CLIENT_KEY = 'b7n0uLOpFSZf';
export const CLIENT_SECRET = 'w2ymKx0gDWEtaiEvCl5hAtNvHPtkuAa8GaT8cKGmD1ilpwij';