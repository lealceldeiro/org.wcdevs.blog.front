import Link from 'next/link';
import {
    AiOutlineArrowRight,
    AiOutlineComment,
    AiOutlineEye,
    AiOutlineUser
} from 'react-icons/ai';
import { BsBookmarkPlus } from 'react-icons/bs';
import { Post } from '../../types';

type PostCardProps = {
    post: Post;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
    return (
        <div className="p-4 lg:w-1/3">
            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <span className="hover:bg-indigo-500 hover:text-white py-1 tracking-widest absolute cursor-pointer px-1
                    right-0 top-0 rounded-bl transition-colors duration-500">
                    <BsBookmarkPlus size={24} />
                </span>

                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY
                </h2>

                <div className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                    <Link href={`/posts/${post.slug}`}>
                        {post.title}
                    </Link>
                </div>

                <p className="leading-relaxed mb-3 text-justify">{post.excerpt}</p>

                <Link href={`/posts/${post.slug}`}>
                    <a className="text-indigo-500 inline-flex items-center">
                        <span className="mr-3">Read more</span> <AiOutlineArrowRight />
                    </a>
                </Link>

                <div className="text-center mt-2 leading-none flex justify-center flex-wrap absolute bottom-0 left-0 w-full py-4">
                    <div className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <AiOutlineUser size={24} /> John Doe
                    </div>
                    <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <AiOutlineEye size={24} className="mr-3" /> 1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                        <AiOutlineComment className="mr-3" size={24} /> {post.commentsCount}
                    </span>
                </div>
            </div>
        </div>
    )
}