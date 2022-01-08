import { Post } from './Post';
import { Comment } from './Comment';

export type CreateOrUpdatePostRequest = {
    title: string;
    slug?: string;
    body: string;
    excerpt?: string;
}

export type CreatePostResponse = Pick<Post, 'slug'>;

export type UpdatePostRequest = CreateOrUpdatePostRequest;

export type UpdatePostResponse = CreatePostResponse;

// TODO: ask for the patch for the post but it looks like is the same
export type SortInfo = {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
}

export type Pageable = {
    sort: SortInfo;
    pageNumber: number;
    pageSize: number;
    offset: number;
    paged: boolean;
    unpaged: boolean;
}

export type PaginationInfo = {
    last: boolean;
    totalPages: number;
    totalElements: number;
    first: boolean;
    number: number;
    numberOfElements: number;
    size: number;
    empty: boolean;
    sort: SortInfo;
}

export type GetPostsResponse = {
    content: Post[];
    pageable: Pageable;
} & PaginationInfo

export type GetPostResponse = {
    title: string;
    slug: string;
    body: string;
    excerpt: string;
    publishedOn: string;
    updatedOn: string;
    publishedBy: string;
    updatedBy: string;
}

export type CreateCommentRequest = {
    body: string;
}

export type CreateCommentResponse = {
    anchor: string;
}

export type ReplyCommentRequest = {
    body: string;
    parentCommentAnchor: string;
};

export type ReplyCommentResponse = {
    anchor: string;
}

export type UpdateCommentRequest = CreateCommentRequest;

export type UpdateCommentResponse = CreateCommentResponse;

export type GetCommentListResponse = {
    content: Comment[];
    pageable: Pageable;
} & PaginationInfo;

export type GetRootCommentsResponse = GetCommentListResponse;

export type GetChildCommentsResponse = GetCommentListResponse;
