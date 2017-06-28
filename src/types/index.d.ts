declare namespace WP {
  interface StoreState {
    posts: PostsState;
    media: MediaState;
    ui: any;
  }

  interface MediaState {
    [key: string]: MediaItem;
  }

  interface PostsState {
    [key: string]: Post;
  }

  interface Post {
    title: {
      rendered: string;
    };
    excerpt: {
      rendered: string;
    };
    featured_media: number;
    tags: Array<number>;
    date: Date;
    slug: string;
    content: {
      rendered: string;
    };
  }

  interface MediaItem {
    author: number;
    date: string;
    id: number;
    slug: string;
    source_url: string;
    media_details: {
      file: string;
      height: number;
      width: number;
      sizes: ImageMap;
    };
  }

  type ImageMap = {
    [key in ImageSizes]: {
      file: string;
      height: number;
      width: number;
      source_url: string;
    }
  }

  type ImageSizes = 'thumbnail' | 'medium' | 'large' | 'full';

  interface Route {
    title?: string;
    component: any;
    label?: string;
    path?: string;
    exact?: boolean;
    routes?: SimpleRoute[];
    isHidden?: boolean;
    isAdmin?: boolean;
    isChild?: boolean;
  }

  interface SimpleRoute {
    path: string;
    component: any;
  }
}
