import React, {FC} from 'react';
import PostComponent from "../PostComponent/PostComponent";
import {IPostModel} from "../../models/IPostModel";

interface IPostsProps {
    posts: IPostModel[]
}
const PostsOfUserComponent: FC<IPostsProps> = ({posts}) => {
    return (
        <div>
            {posts.map(post => <PostComponent post={post} key={post.id} />)}
        </div>
    );
};

export default PostsOfUserComponent;