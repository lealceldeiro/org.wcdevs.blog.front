import draftToHtml from 'draftjs-to-html';
import Image from 'next/image';
import Link from 'next/link';
import { Post } from '../../types';
import classes from './PostDetails.module.css';

type PostDetailsProps = {
    post: Post;
}

export const PostDetails: React.FC<PostDetailsProps> = ({ post }) => {
    return (
        <div className='mt-20 lg:mt-48 my-24 container sm:px-4 lg:px-8'>
            <div className='flex flex-col lg:flex-row'>
                <div className='lg:w-4/6'>
                    <h1 className="mb-5 text-2xl lg:text-5xl">{post.title}</h1>
                    {
                        post.body !== '' && (
                            <div
                                // style={{ overflow: 'unset' }}
                                className="rdw-editor-main text-justify pr-4"
                                dangerouslySetInnerHTML={{ __html: draftToHtml(JSON.parse(post.body)) }}>
                            </div>
                        )
                    }
                </div>
                <div className="flex-auto">
                    <div className={classes.card_details}>
                        <div className="flex flex-row gap-4">
                            <div className=''>
                                <Image
                                    className=" rounded"
                                    src='/assets/images/avatar.png'
                                    alt="avatar"
                                    width={112}
                                    height={112}
                                />
                            </div>
                            <div className='flex flex-col flex-auto'>
                                <div className='mb-3'>
                                    <h2 className='text-2xl'>John Jackson</h2>
                                    <p className='text-gray-300 text-sm'>FullStack dev</p>
                                </div>

                                <div className='flex justify-around items-center bg-blue-100 rounded p-1'>
                                    <div className=''>
                                        <p className='text-gray-400'>Articles</p>
                                        <p className='font-bold text-black'>18</p>
                                    </div>
                                    <div className=''>
                                        <p className='text-gray-400'>Followers</p>
                                        <p className='font-bold text-black'>487</p>
                                    </div>
                                    <div className=''>
                                        <p className='text-gray-400'>Rating</p>
                                        <p className='font-bold text-black'>8.1k</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between mt-6">
                            <Link href={`/posts/${post.slug}/edit-post`}>
                                <a className="rounded text-white bg-indigo-500 px-5 py-3 cursor-pointer hover:bg-blue-800">Edit post</a>
                            </Link>
                            <button className='text-white rounded bg-indigo-500 px-8 py-3'>
                                Follow
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}