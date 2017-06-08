// Action Types
export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post';

export const FETCH_MEDIA = 'fetch_media';
export const FETCH_MEDIA_ERROR = 'fetch_media_error';
export const CREATE_POST = 'create_post';

export type FETCH_POSTS = typeof FETCH_POSTS;
export type FETCH_POST = typeof FETCH_POST;

export type FETCH_MEDIA = typeof FETCH_MEDIA;
export type FETCH_MEDIA_ERROR = typeof FETCH_MEDIA_ERROR;
export type CREATE_POST = typeof CREATE_POST;

// API URL Options
export const ROOT_URL = 'https://api.alexdodge.ca/wp-json/wp/v2';
