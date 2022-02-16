import { NextPage } from 'next';
import { PostForm } from '../../../components';
import { createEmptyPost } from '../../../helpers';
import { CreateOrUpdatePostRequest } from '../../../types/index';

type NewPostProps = {}

const NewPostPage: NextPage<NewPostProps> = () => {
    const post = createEmptyPost();

    const onCreatePost = (newPost: CreateOrUpdatePostRequest) => {
        console.log({ newPost });
    }

    return <PostForm post={post} onCreateOrUpdatePost={onCreatePost} />
}

export default NewPostPage;