import React, {useEffect, useState} from 'react';
import {IPostModel} from "../../models/IPostModel";
import {postApiService} from "../../services/api.services";
import PostComponent from "../PostComponent/PostComponent";

const PostsComponent = () => {

    const [posts, setPosts] = useState<IPostModel[]>([])

    useEffect(() => {
        postApiService.getAllPosts().then(value => setPosts(value.data))
    }, []);
    return (
        <div>
            {posts.map(post => <PostComponent
                                                    key={post.id}
                                                    id={post.id}
                                                    body={post.body}
                                                    title={post.title}
                                                    userId={post.userId}/>)}
        </div>
    );
};

export default PostsComponent;