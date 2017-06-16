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
    better_featured_image: {
      source_url: string;
    };
    tags: Array<number>;
    date: Date;
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
    isAdmin?: boolean;
    isChild?: boolean;
    routes?: SimpleRoute[];
  }

  interface SimpleRoute {
    path: string;
    component: any;
  }
}
