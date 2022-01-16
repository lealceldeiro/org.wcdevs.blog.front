import draftToHtml from 'draftjs-to-html';
import Link from 'next/link';
import { Post } from '../../types';

type PostInfoProps = {
    post: Post;
}

export const PostInfo: React.FC<PostInfoProps> = ({ post }) => {
    return (
        <div className='container mt-24'>
            <Link href={`/posts/${post.slug}/edit-post`}>
                <a className="rounded mb-5 text-white bg-blue-500 p-2 cursor-pointer hover:bg-blue-800">Edit post</a>
            </Link>
            <div className='mt-16'>
                <h1 className="mb-5 text-[48px]">{post.title}</h1>
                <div
                    style={{ overflow: 'unset' }}
                    className="rdw-editor-main"
                    dangerouslySetInnerHTML={{ __html: draftToHtml(JSON.parse(post.body)) }}>
                </div>
            </div>
        </div>
    )
}