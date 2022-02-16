import { useState } from "react";
import { AiOutlineComment } from "react-icons/ai";
import { mockCommentsReply } from "../../mocks";
import { Comment, CreateCommentRequest, Post } from "../../types/index";
import { CommentList } from "./CommentList";
import { NewCommentForm } from "./NewCommentForm";

type CommentsSessionProps = {
    post: Post;
    comments: Comment[];
}

export const CommentsSession: React.FC<CommentsSessionProps> = (props) => {

    const handleCancel = () => {
        // TODO: check what to do in this case
    }

    const handleSubmitComment = (newComment: CreateCommentRequest) => {
        // TODO: call the API to create the comment
    }

    return (
        <div>
            <div>
                <hr className='pt-5' />
                <div className='flex justify-between items-center'>
                    <h2 className='font-bold text-xl'>Comments(3)</h2>
                    <button className='cursor-pointer rounded border py-3 px-2 hover:bg-gray-100'>
                        <span>Leave your comment</span> <AiOutlineComment className='inline' size={24} />
                    </button>
                </div>
            </div>
            <div className="mb-3 mt-3">
                <NewCommentForm
                    onCancel={handleCancel}
                    onSubmitComment={handleSubmitComment}
                />
            </div>
            <div>
                <CommentList
                    comments={props.comments}
                    commentsReply={mockCommentsReply}
                />
            </div>
        </div>
    )
}