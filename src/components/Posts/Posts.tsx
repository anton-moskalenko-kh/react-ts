import React, {FC} from 'react';
import {IPostModel} from "../../models/IPostModel";
import './Posts.css'

interface IProps {
    posts: IPostModel[],
}

const Posts: FC<IProps> = ({posts}) => {

    return (
        <div className={'postsBlock'}>
            <h2>Comments of User</h2>
            <ul>
                {posts.map((post) => <li>{post.body}</li>)}
            </ul>
        </div>
    );
};

export default Posts;