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
    better_featured_image: {
      source_url: string;
    };
    tags: Array<number>;
    date: Date;
    content: {
      rendered: string;
    };
  }
}
