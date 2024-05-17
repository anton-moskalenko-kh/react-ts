import React, {FC} from 'react';
import {IPostModel} from "../../models/IPostModel";

const PostComponent: FC<IPostModel> = ({id, body, userId, title}) => {
    return (
        <div>
            <h3>{id} - {title}</h3>
            <p>{body}</p>
            <p>UserID: {userId}</p>
        </div>
    );
};

export default PostComponent;