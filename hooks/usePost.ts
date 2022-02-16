import { useEffect, useState } from "react";
import { getPost } from "../helpers";
import { Post } from "../types/index";

// TODO: remove this after create mock on data Base
export const usePost = (data: Post) => {
    const [postLoaded, setPost] = useState<Post | null>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') { // because windows is not mounted 
            const postFromStorage = getPost(data.slug);
            setPost(postFromStorage ? postFromStorage : data);
        }
    }, [data]);

    return {
        postFromStorage: postLoaded
    }
}