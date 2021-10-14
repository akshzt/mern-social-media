import React from 'react';
import './Profile.css';

import Topbar from "../../components/topbar/Topbar.jsx";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import Feed from "../../components/feed/Feed.jsx";
import Rightbar from "../../components/rightbar/Rightbar.jsx";

function Profile() {

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <>
            <Topbar />
            <div className="profile">
                
                <Sidebar />
                
                <div className="profileRight">

                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src={`${PF}post/3.jpeg`} alt="" className="profileCoverImg" />
                            <img src={`${PF}person/7.jpeg`} alt="" className="profileUserImg" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">John Doe</h4>
                            <span className="profileInfoDesc">hello people</span>
                        </div>
                    </div>
                    
                    <div className="profileRightBottom">
                        <Feed username="matt" />
                        <Rightbar profile /> 
                    </div>

                </div>

            </div>
        </>
    )
}

export default Profile
