import Image from 'next/image';
import { Blog } from '../../types';

type Props = {
    blog: Blog;
}

export const BlogCard: React.FC<Props> = ({ blog }) => {
    return (
        <div className="card">
            <div className="card-image">
                <Image src={blog.image.src} alt={blog.image.alt} width={70} height={70} />
            </div>
            <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <p className="mb-4">{blog.summary}</p>
            </div>
        </div>
    )
}