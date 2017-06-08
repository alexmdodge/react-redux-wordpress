// Action Types
export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post';
export const CREATE_POST = 'create_post';

export type FETCH_POSTS = typeof FETCH_POSTS;
export type FETCH_POST = typeof FETCH_POST;
export type CREATE_POST = typeof CREATE_POST;

// API URL Options
export const ROOT_URL = 'https://api.alexdodge.ca/wp-json/wp/v2';
