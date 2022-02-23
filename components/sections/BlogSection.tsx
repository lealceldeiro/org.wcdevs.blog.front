import { PostCard } from '../PostCard';
import { Post } from '../../types/index';

type Props = {
    posts: Post[];
}

export const BlogSection: React.FC<Props> = ({ posts }) => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {
                        posts.map(post => <PostCard key={post.slug} post={post} />)
                    }
                </div>
            </div>
        </section>
    )
}