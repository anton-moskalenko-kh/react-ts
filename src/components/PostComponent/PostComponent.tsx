import React, {FC} from 'react';
import {PostModel} from "../../models/PostModel";
import {useNavigate} from "react-router-dom";
import styles from './Post.module.css';

interface IProps {
    post: PostModel
}
const PostComponent: FC<IProps> = ({post}) => {
    const navigate = useNavigate()

    return (
        <div className={styles.postBlock}>
            <p>{post.title}</p>
            <button onClick={() => {
                navigate(post.id.toString())
            }}>Show full information</button>
        </div>
    );
};

export default PostComponent;