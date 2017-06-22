declare namespace WP {
  interface StoreState {
    posts: object;
    media: object;
    ui: any;
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
