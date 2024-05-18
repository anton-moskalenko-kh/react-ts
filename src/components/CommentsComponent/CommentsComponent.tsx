import React, {useEffect, useState} from 'react';
import {ICommentModel} from "../../models/ICommentModel";
import {commentApiService} from "../../services/comments.api.service";
import CommentComponent from "../CommentComponent/CommentComponent";

const CommentsComponent = () => {

    const [comments, setComments] = useState<ICommentModel[]>([])

    useEffect(() => {
        commentApiService.getAllComments().then(value => setComments(value.data))
    }, []);

    return (
        <div>
            {comments.map(comment => <CommentComponent key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default CommentsComponent;