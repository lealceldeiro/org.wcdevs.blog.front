import Image from 'next/image';
import Link from 'next/link';
import { Post } from '../../types';

type PostCardProps = {
    post: Post;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
    return (
        <div className="card">
            <div className="card-image">
                <Image src={post.image.src} alt={post.image.alt} width={70} height={70} />
            </div>
            <div className="card-body">
                <h5 className="card-title">
                    <Link href={`/blogs/${post.id}`}>
                        {post.title}
                    </Link>
                </h5>
                <p className="mb-4">{post.summary}</p>
            </div>
        </div>
    )
}