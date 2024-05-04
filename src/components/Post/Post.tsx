import React, {FC} from 'react';
import {IPostModel} from "../../models/IPostModel";

interface IProps {
    post: IPostModel
}

const Post: FC<IProps> = ({post}) => {

    return (
        <li>{post.body}</li>
    );
};

export default Post;