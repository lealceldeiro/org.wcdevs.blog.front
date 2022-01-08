export type Post = {
    title: string;
    slug: string;
    excerpt: string;
    commentsCount: number;
}

export type PostInfo = {
    title: string;
    slug: string;
    body: string;
    excerpt: string;
    publishedOn: string;
    updatedOn: string;
    publishedBy: string;
    updatedBy: string;
}