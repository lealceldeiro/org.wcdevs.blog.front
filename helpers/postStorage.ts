import { Post } from "../types";

export const getPost = (postId: string): Post | null => {
    const foundPost = localStorage.getItem(postId);
    if (foundPost) {
        return JSON.parse(foundPost) as Post;
    }
    return null;
}

export const savePost = (post: Post) => {
    console.log('Post saved', post)
    localStorage.setItem(post.slug, JSON.stringify(post));
}