import React, {FC} from 'react';
import {ICommentModel} from "../../models/ICommentModel";
import styles from './CommentComponent.module.css'

interface ICommentProps {
    comment: ICommentModel
}
const CommentComponent: FC<ICommentProps> = ({comment}) => {
    return (
        <div className={styles.commentBlock}>
            <h3>{comment.id} - {comment.name}</h3>
            <p>{comment.body}</p>
            <p>Email: {comment.email}</p>
            <p>PostID: {comment.postId}</p>
        </div>
    );
};

export default CommentComponent;