import { NextPage } from 'next';
import { PostForm } from '../../../components';
import { createEmptyPost } from '../../../helpers';
import { Post } from '../../../types';

type NewPostProps = {

}

const NewPostPage: NextPage<NewPostProps> = () => {
    const post = createEmptyPost();

    const onCreatePost = (newPost: Post) => {
        console.log({ newPost });
    }

    return <PostForm post={post} onCreatePost={onCreatePost} />
}

export default NewPostPage;