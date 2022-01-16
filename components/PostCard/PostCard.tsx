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

// TODO: rename and move this component to another place
export const PostCard2: React.FC<PostCardProps> = ({ post }) => {
    return (
        <div className="p-2 md:p-5 lg:p-12 md:w-1/2 lg:w-1/3 flex flex-col items-start">
            <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">CATEGORY</span>
            <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                <Link href={`/posts/${post.slug}`}>
                    {post.title}
                </Link>
            </h2>
            <p className="leading-relaxed mb-8 text-justify">
                {post.excerpt}
            </p>
            <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                <Link href={`/posts/${post.slug}`}>
                    <a className="text-indigo-500 inline-flex items-center">
                        <span className="mr-3">Read more</span> <AiOutlineArrowRight />
                    </a>
                </Link>
                <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <AiOutlineEye size={24} className="mr-3" /> 1.2K
                </span>
                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                    <AiOutlineComment className="mr-3" size={24} /> {post.commentsCount}
                </span>
            </div>
            <a className="inline-flex items-center">
                <img alt="avatar" src="https://dummyimage.com/68x68" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">Holden Caulfield</span>
                    <span className="text-gray-400 text-xs tracking-widest mt-0.5">UI DEVELOPER</span>
                </span>
            </a>
        </div>
    )
}