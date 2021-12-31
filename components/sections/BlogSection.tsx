import { PostCard } from '../PostCard';
import { Post } from '../../types';

type Props = {
    posts: Post[];
}

export const BlogSection: React.FC<Props> = ({ posts }) => {  
    return (
        <div id="features" className="cards-1">
            <div className="container px-4 sm:px-8 xl:px-4">
                {
                    posts.map(item => <PostCard key={item.id} post={item} />)
                }
            </div>
        </div>
    )
}