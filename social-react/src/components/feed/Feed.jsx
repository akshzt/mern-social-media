import React from 'react';
import './Feed.css';

import Share from '../share/Share';
import Post from '../post/Post';

import { Posts } from '../../dummyData';

function Feed() {
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                {
                    Posts.map( curPost => (
                        <Post key={curPost.id} post={curPost} />
                    ))
                }
            </div>
        </div>
    )
}

export default Feed
