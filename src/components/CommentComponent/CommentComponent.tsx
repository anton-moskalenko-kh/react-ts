import React, {FC} from 'react';
import {ICommentModel} from "../../models/ICommentModel";


const CommentComponent: FC<ICommentModel> = ({id, name, postId, email, body}) => {
    return (
        <div>
            <h3>{id} - {name}</h3>
            <p>{body}</p>
            <p>Email: {email}</p>
            <p>PostID: {postId}</p>
        </div>
    );
};

export default CommentComponent;