import React from 'react';
import {useAppSelector} from "../../redux/store";
import PostComponent from "../PostComponent/PostComponent";

const PostsComponent = () => {
    const {posts, isLoaded} = useAppSelector(state => state.postsSlice)

    return (
        <div>
            {isLoaded ? posts.map(post => <PostComponent key={post.id} post={post}/>)
                : <p>Data is loading...</p>}
        </div>
    );
};

export default PostsComponent;