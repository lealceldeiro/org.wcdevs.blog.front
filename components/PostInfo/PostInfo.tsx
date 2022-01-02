import { Post } from '../../types';

type PostInfoProps = {
    post: Post;
}

export const PostInfo: React.FC<PostInfoProps> = ({ post }) => {
    return (
        <div className='container mt-16'>
            <h1>{post.title}</h1>
            <p className="mb-4">{post.summary}</p>
        </div>
    )
}