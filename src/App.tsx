import React, {useState} from 'react';
import './App.css';
import Users from "./components/Users/Users";
import {IPostModel} from "./models/IPostModel";
import {getPostsOfUser} from "./services/user.api.services";
import Posts from "./components/Posts/Posts";

const App = () => {
    const [posts, setPosts] = useState<IPostModel[]>([])

    const lift = (userId: number) => {
        getPostsOfUser(userId).then(({data}) => setPosts(data.posts))
    }

  return (
      <div className={'commonBlock'}>
            <div className={'users'}>
                <Users lift={lift}/>
            </div>
            <div className={'posts'}>
                <Posts posts={posts}/>
            </div>
      </div>
  );
};

export default App;
