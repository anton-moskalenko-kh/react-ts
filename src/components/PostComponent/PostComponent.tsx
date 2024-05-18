import React, {FC} from 'react';
import {IPostModel} from "../../models/IPostModel";
import styles from './PostComponent.module.css'
import {useNavigate} from "react-router-dom";

interface IPostProps {
    post: IPostModel
}
const PostComponent: FC<IPostProps> = ({post}) => {
    const navigate = useNavigate();

    return (
        <div className={styles.postBlock}>
            <h3>{post.id} - {post.title}</h3>
            <p>{post.body}</p>
            <p>UserID: {post.userId}</p>
            <button onClick={() => {
                navigate(post.id.toString())
            }}>Show comments of post</button>
        </div>
    );
};

export default PostComponent;