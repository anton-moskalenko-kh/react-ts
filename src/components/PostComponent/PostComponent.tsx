import React, {FC} from 'react';
import {IPostModel} from "../../models/IPostModel";
import styles from './PostComponent.module.css'

const PostComponent: FC<IPostModel> = ({id, body, userId, title}) => {
    return (
        <div className={styles.postBlock}>
            <h3>{id} - {title}</h3>
            <p>{body}</p>
            <p>UserID: {userId}</p>
        </div>
    );
};

export default PostComponent;