import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { PostForm } from '../../../../components';
import { CreateOrUpdatePostRequest, Post, PostIdParams } from '../../../../types/index';
import { mockPosts } from '../../../../mocks';
import { savePost } from '../../../../helpers';
import { usePost } from '../../../../hooks';

type Result = {
    post: Post;
};

type EditPostPageParams = {
    postId: string;
}

export const getStaticProps: GetStaticProps<Result, EditPostPageParams> = (context) => {
    const postId = context.params?.postId || ''
    const postToEdit = mockPosts.find(item => item.slug === postId) as Post;
    
    // FIXME: check how to do this with a middleware to avoid duplicate the same line of code in severals places
    if (!postToEdit) {
        return {
            notFound: true,
        }
    }

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
    const { postFromStorage } = usePost(post);

    const onUpdatePost = (postUpdated: CreateOrUpdatePostRequest) => {

        // TODO: remove the part to populate the post when integrate the API
        if (postFromStorage) {
            const postCreateTemporally: Post = { ...postFromStorage, ...postUpdated };
            savePost(postCreateTemporally);
        }
    }

    return (
        <div className="container">
            {
                postFromStorage && <PostForm post={postFromStorage} onCreateOrUpdatePost={onUpdatePost} />
            }
        </div>
    )
}

export default EditPostPage;