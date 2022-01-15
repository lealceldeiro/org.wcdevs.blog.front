import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { PostForm } from '../../../../components';
import { Post, PostIdParams } from '../../../../types';
import { mockPosts } from '../../../../mocks';
import { useEffect, useState } from 'react';
import { getPost, savePost } from '../../../../helpers';

type Result = {
    post: Post;
};

type EditPostPageParams = {
    postId: string;
}

export const getStaticProps: GetStaticProps<Result, EditPostPageParams> = (context) => {
    const postId = context.params?.postId || ''
    const postToEdit = mockPosts.find(item => item.slug === postId) as Post;
    // TODO: check What to do if the post is not found
    return {
        props: {
            post: postToEdit
        }
    }
}

export const getStaticPaths: GetStaticPaths<{ postId: string }> = async (context) => {
    // TODO: check if we need to add some of the post pre-rendered here
    const paths: PostIdParams[] = [];
    return {
        paths,
        fallback: 'blocking'
    }
}

type EditPostPageProps = InferGetStaticPropsType<typeof getStaticProps>;

const EditPostPage: NextPage<EditPostPageProps> = ({ post }) => {
    const [ready, setReady] = useState(false);
    const [pp, setPP] = useState(post);

    useEffect(() => {
        if (typeof window !== 'undefined') { // because windows is not mounted 
            const p = getPost(post.slug);
            setPP(p ? p : post);
            setReady(true);
        }
    }, [post]);

    const onEditPost = (postUpdated: Post) => {
        savePost(postUpdated);
        console.log({ postUpdated });
    }

    return (
        <div className="container">
            {ready && <PostForm post={pp} onCreatePost={onEditPost} />}
        </div>
    )
}

export default EditPostPage;