import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {useParams} from "react-router-dom";
import {postsActions} from "../../redux/slices/postsSlice";
import styles from './PostPage.module.css'

const PostPage = () => {

    const {post} = useAppSelector(state => state.postsSlice)
    const dispatch = useAppDispatch()
    const {id} = useParams()

    useEffect(() => {
        if (id) {
            dispatch(postsActions.loadPostsById(id))
        }
    }, [id]);

    return (
        <div >
            {post &&
                <div className={styles.postPageBlock}>
                    <h3>{post.id} - {post.title}</h3>
                    <p>Body: {post.body}</p>
                </div>
            }
        </div>
    );
};

export default PostPage;