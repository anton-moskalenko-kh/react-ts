import React, {useEffect, useState} from 'react';
import PostsOfUserComponent from "../components/PostsOfUserComponent/PostsOfUserComponent";
import {useParams} from "react-router-dom";
import {userApiService} from "../services/users.api.services";
import {IPostModel} from "../models/IPostModel";

const PostsOfUser = () => {
    const {id} = useParams()
    const [posts, setPosts] = useState<IPostModel[]>([])

    useEffect(() => {
        if (id) {
            userApiService.getPostsOfUser(id).then(value => setPosts(value.data))
        }
    }, [id]);

    return (
        <div>
            <PostsOfUserComponent posts={posts}/>
        </div>
    );
};

export default PostsOfUser;