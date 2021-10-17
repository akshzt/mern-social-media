import React, {useState, useEffect} from 'react';
import './Profile.css';
import axios from "axios";
import { useParams } from "react-router";

import Topbar from "../../components/topbar/Topbar.jsx";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import Feed from "../../components/feed/Feed.jsx";
import Rightbar from "../../components/rightbar/Rightbar.jsx";

function Profile() {

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user, setUser] = useState({});
    const username = useParams().username;

    useEffect( () => {
        const fetchUser = async () => {
            const res = await axios.get(`/users?username=${username}`);
            setUser(res.data);
        };
        fetchUser();
    }, [username]);

    return (
        <>
            <Topbar />
            <div className="profile">
                
                <Sidebar />
                
                <div className="profileRight">

                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src={user.coverPicture || PF+"noCover.jpg"} alt="" className="profileCoverImg" />
                            <img src={user.profilePicture || PF+"noAvatar.png"} alt="" className="profileUserImg" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">{user.username}</h4>
                            <span className="profileInfoDesc">{user.desc}</span>
                        </div>
                    </div>
                    
                    <div className="profileRightBottom">
                        <Feed username={username} />
                        <Rightbar user={user} /> 
                    </div>

                </div>

            </div>
        </>
    )
}

export default Profile
