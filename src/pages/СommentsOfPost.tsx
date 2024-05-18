import React, {useEffect, useState} from 'react';
import CommentsOfPostComponent from "../components/CommentsOfPostComponent/CommentsOfPostComponent";
import {ICommentModel} from "../models/ICommentModel";
import {useParams} from "react-router-dom";
import {postApiService} from "../services/posts.api.service";

const CommentsOfPost = () => {
    const {id} = useParams();

    const [comments, setComments] = useState<ICommentModel[]>([])

    useEffect(() => {
        if (id) {
            postApiService.getCommentsOfPost(id).then(value => setComments(value.data))
        }
    }, [id]);

    return (
        <div>
            <CommentsOfPostComponent comments={comments}/>
        </div>
    );
};

export default CommentsOfPost;