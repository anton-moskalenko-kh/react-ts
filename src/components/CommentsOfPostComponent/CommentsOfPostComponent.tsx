import React, {FC} from 'react';
import {ICommentModel} from "../../models/ICommentModel";
import CommentComponent from "../CommentComponent/CommentComponent";

interface IProps {
    comments: ICommentModel[]
}
const CommentsOfPostComponent: FC<IProps> = ({comments}) => {
    return (
        <div>
            {comments.map(comment => <CommentComponent key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default CommentsOfPostComponent;