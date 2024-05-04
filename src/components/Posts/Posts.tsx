import React, {FC} from 'react';
import {IPostModel} from "../../models/IPostModel";
import './Posts.css'
import Post from "../Post/Post";

interface IProps {
    posts: IPostModel[],
}

const Posts: FC<IProps> = ({posts}) => {
    return (
        <div className={'postsBlock'}>
            <h2>Comments of User</h2>
            <ul>
                {posts.map((post) => <Post key={post.id} post={post}/>)}
            </ul>
        </div>
    );
};

export default Posts;