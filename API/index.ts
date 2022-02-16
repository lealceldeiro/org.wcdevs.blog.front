import axios from './api-config';
import {
    CreateCommentRequest,
    CreatePostResponse,
    GetPostsResponse,
    GetPostResponse,
    ReplyCommentResponse,
    UpdatePostResponse,
    ReplyCommentRequest,
    CreateOrUpdatePostRequest,
    CreateCommentResponse,
    UpdateCommentRequest,
    UpdateCommentResponse,
    GetCommentListResponse,
    GetChildCommentsResponse,
    Comment,
} from '../types/index';

// TODO: handle errors with an interceptor
// https://github.com/axios/axios#interceptors

export const BLOG_API = {
    createPost: async (newPost: CreateOrUpdatePostRequest) => {
        const response = await axios.post<CreatePostResponse>('/post', newPost);
        return response.data;
    },
    updatePost: async (postSlug: string, post: CreateOrUpdatePostRequest) => {
        const response = await axios.patch<UpdatePostResponse>(`/post/${postSlug}`, post);
        return response.data;
    },   
    getPosts: async () => {
        const response = await axios.get<GetPostsResponse>(`/post`);
        return response.data;
    },
    getPost: async (postSlug: string) => {
        const response = await axios.get<GetPostResponse>(`/post/${postSlug}`);
        return response.data;
    },
    deletePost: async (postSlug: string) => {
        await axios.delete(`/post/${postSlug}`);
    },
    createComment: async (postSlug: string, newComment: CreateCommentRequest) => {
        const response = await axios.post<CreateCommentResponse>(`post/${postSlug}/comment`, newComment);
        return response.data;
    },
    replyComment: async (postSlug: string, newComment: ReplyCommentRequest) => {
        const response = await axios.post<ReplyCommentResponse>(`post/${postSlug}/comment`, newComment);
        return response.data;
    },
    updateComment: async (commentAnchor: string, comment: UpdateCommentRequest) => {
        const response = await axios.put<UpdateCommentResponse>(`/comment/${commentAnchor}`, comment);
        return response.data;
    },
    getComments: async (postSlug: string) => {
        const response = await axios.get<GetCommentListResponse>(`/post/${postSlug}/comment/all`);
        return response.data;
    },
    getRootComments: async (postSlug: string) => {
        const response = await axios.get<GetCommentListResponse>(`/post/${postSlug}/comment/root`);
        return response.data;
    },
    getChildComments: async (parentAnchor: string) => {
        const response = await axios.get<GetChildCommentsResponse>(`/comment/children/${parentAnchor}`);
        return response.data;
    },
    getComment: async (commentAnchor: string) => {
        const response = await axios.get<Comment>(`/comment/${commentAnchor}`);
        return response.data;
    },
    deleteComment: async (commentAnchor: string) => {
        await axios.delete(`/comment/${commentAnchor}`);
    }
}