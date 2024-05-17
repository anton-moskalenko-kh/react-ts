import React, {useEffect, useState} from 'react';
import {ICommentModel} from "../../models/ICommentModel";
import {commentApiService} from "../../services/api.services";
import CommentComponent from "../CommentComponent/CommentComponent";

const CommentsComponent = () => {

    const [comments, setComments] = useState<ICommentModel[]>([])

    useEffect(() => {
        commentApiService.getAllComments().then(value => setComments(value.data))
    }, []);

    return (
        <div>
            {comments.map(comment => <CommentComponent
                                                        key={comment.id}
                                                        id={comment.id}
                                                        name={comment.name}
                                                        body={comment.body}
                                                        email={comment.email}
                                                        postId={comment.postId} />)}
        </div>
    );
};

export default CommentsComponent;