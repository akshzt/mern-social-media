import React, { useState, useEffect } from 'react';
import './Feed.css';
import axios from 'axios';

import Share from '../share/Share';
import Post from '../post/Post';

// import { Posts } from '../../dummyData';

function Feed( {username} ) {

    const [posts, setPosts] = useState([])
    // axios.defaults.baseURL = "http://localhost:8000/api";

    useEffect( () => {

        const fetchPosts = async () => {
            const res = username 
            ? await axios.get("/posts/profile/"+username)
            : await axios.get("posts/timeline/6120b0e07ea0361eb4982b1c");
            setPosts(res.data);
        };

        fetchPosts();
    }, [username]);

    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                {
                    posts.map( curPost => (
                        <Post key={curPost._id} post={curPost} />
                    ))
                }
            </div>
        </div>
    )
}

export default Feed
