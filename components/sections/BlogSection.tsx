import { BlogCard } from '../BlogCard';
import { Blog } from '../../types';

type Props = {
    blogs: Blog[];
}

export const BlogSection: React.FC<Props> = ({ blogs }) => {  
    return (
        <div id="features" className="cards-1">
            <div className="container px-4 sm:px-8 xl:px-4">
                {
                    blogs.map(item => <BlogCard key={item.id} blog={item} />)
                }
            </div>
        </div>
    )
}