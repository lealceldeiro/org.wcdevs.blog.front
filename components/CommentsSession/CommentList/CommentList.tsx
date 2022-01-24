import { Comment } from "../../../types";
import { CommentItem } from "../CommentItem";

type CommentListProps = {
    comments: Comment[];
    commentsReply: Comment[];
};

export const CommentList: React.FC<CommentListProps> = ({ comments, commentsReply }) => {
    return (
        <div>{
            comments.map(item => <CommentItem
                key={item.anchor}
                comment={item}
                commentsReply={commentsReply} />
            )
        }
        </div>
    )
}