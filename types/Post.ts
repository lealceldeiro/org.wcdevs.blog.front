export type Post = {
  title: string;
  slug: string;
  excerpt: string;
  body: string;
  publishedBy: string;
  updatedBy: string;
  publishedOn: string;
  updatedOn: string;
  commentsCount: number;
}

export type PostWithoutBody = Omit<Post, 'body'>;