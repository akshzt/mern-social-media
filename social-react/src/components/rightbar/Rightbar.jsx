import React from 'react';
import './Rightbar.css';

import Online from '../online/Online';

import { Users } from "../../dummyData";

function Rightbar( {user} ) {

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const HomeRightbar = () => {

        return (
            <>
                <div className="birthdayContainer">
                    <img src={`${PF}gift.png`} alt="" className="birthdayImg" />
                    <span className="birthdayText">
                        <b>Xi Xang</b> and <b>3 others friends</b> have a birthday today
                    </span>
                </div>

                <img src={`${PF}gitAd.jpg`} alt="" className="rightbarAd" />

                <h4 className="rightbarTitle">Online Friends</h4>

                <ul className="rightbarFriendList">
                    {
                        Users.map( user => (
                            <Online key = {user.id }user = {user} />
                        ))
                    }
                </ul>
            </>
        )
    };

    const ProfileRightbar = () => {
        return (
            <>
                <h4 className="rightbarTitle">User information</h4>
                
                <div className="rightbarInfo">
                    
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">{user.city}</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">{user.from}</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoValue">
                            {user.relationshipStatus === 1 ? "Single" :
                             user.relationshipStatus === 2 ? "Married" : "NA"}
                        </span>
                    </div>

                </div>

                <h4 className="rightbarTitle">User friends</h4>

                <div className="rightbarFollowings">

                    <div className="rightbarFollowing">
                        <img src={`${PF}person/1.jpeg`} alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John Doe</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src={`${PF}person/2.jpeg`} alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John Doe</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src={`${PF}person/3.jpeg`} alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John Doe</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src={`${PF}person/4.jpeg`} alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John Doe</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src={`${PF}person/5.jpeg`} alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John Doe</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src={`${PF}person/6.jpeg`} alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John Doe</span>
                    </div>

                </div>
            </>
        )
    };

    return (
        <div className="rightbar">
            <div className="rightbarWrapper">

                { user ? <ProfileRightbar /> : <HomeRightbar /> }

            </div>
        </div>
    )
}

export default Rightbar
