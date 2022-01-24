import draftToHtml from 'draftjs-to-html';
import Image from 'next/image';
import { AiOutlineComment, AiOutlineLike } from "react-icons/ai";

import { NewCommentForm } from '../NewCommentForm';
import { timeAgo } from '../../../helpers';
import { Comment, CreateCommentRequest } from "../../../types";
import { useState } from 'react';
import { CommentList } from '../CommentList';

type CommentItemProps = {
    comment: Comment;
    commentsReply: Comment[];
};

export const CommentItem: React.FC<CommentItemProps> = ({ comment, commentsReply }) => {

    const [showForm, setShowForm] = useState(false);

    const handleCancel = () => {
        setShowForm(false);
    }

    const handleReply = () => {
        setShowForm(value => !value);
    }

    const onSubmitComment = (newComment: CreateCommentRequest) => {
        console.log({ newComment });
    }

    return (
        <div className="flex border-t pt-1">
            <div className="image-container">
                <Image
                    className="rounded-full flex-shrink-0 object-cover object-center"
                    src='/assets/images/avatar.png'
                    alt="avatar"
                    width={48}
                    height={48}
                />
            </div>
            <div className='ml-3 w-full'>
                <div className='flex items-center justify-between'>
                    <h2 className='font-bold inline-block'>{comment.publishedBy}</h2>
                    <span>{timeAgo(comment.lastUpdated)}</span>
                </div>
                <div>
                    {
                        comment.body !== '' && (
                            <div className="text-justify"
                                dangerouslySetInnerHTML={{ __html: draftToHtml(JSON.parse(comment.body)) }}>
                            </div>
                        )
                    }
                </div>
                <div className="buttons flex mt-3 mb-3">
                    <button className='flex border hover:bg-gray-100 px-3 py-2 rounded mr-3'>
                        <AiOutlineLike size={24} className='mr-1' />
                        <span>3 Likes</span>
                    </button>
                    <button
                        onClick={handleReply}
                        className='flex border hover:bg-gray-100 px-3 py-2 rounded'>
                        <AiOutlineComment size={24} className='mr-1' />
                        <span>Reply</span>
                    </button>
                </div>
                <div className={showForm ? 'transition-transform duration-700 block' : 'hidden '}>
                    <NewCommentForm
                        onCancel={handleCancel}
                        onSubmitComment={onSubmitComment}
                    />
                </div>
                <div className="reply-items">
                    {
                        <CommentList
                            comments={commentsReply}
                            commentsReply={[]}
                        />
                    }
                </div>
            </div>
        </div>
    )
}