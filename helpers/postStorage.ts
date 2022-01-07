import { Post } from "../types";

export const getPost = (postId: string): Post | null => {
    const foundPost = localStorage.getItem(postId);
    if (foundPost) {
        return JSON.parse(foundPost) as Post;
    }
    return null;
}

export const savePost = (post: Post) => {
    const foundPost = localStorage.getItem(post.id);
    if (foundPost) {
        localStorage.setItem(post.id, JSON.stringify(post));
    } else {
        localStorage.setItem(post.id, JSON.stringify(post));
    }
}