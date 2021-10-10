import React from 'react';
import './Rightbar.css';

import Online from '../online/Online';

import { Users } from "../../dummyData";

function Rightbar( {profile} ) {

    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img src="/assets/gift.png" alt="" className="birthdayImg" />
                    <span className="birthdayText">
                        <b>Xi Xang</b> and <b>3 others friends</b> have a birthday today
                    </span>
                </div>

                <img src="/assets/gitAd.jpg" alt="" className="rightbarAd" />

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
                        <span className="rightbarInfoValue">New York</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">Madrid</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoValue">Single</span>
                    </div>

                </div>

                <h4 className="rightbarTitle">User friends</h4>

                <div className="rightbarFollowings">

                    <div className="rightbarFollowing">
                        <img src="/assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John Doe</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="/assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John Doe</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="/assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John Doe</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="/assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John Doe</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="/assets/person/5.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John Doe</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="/assets/person/6.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John Doe</span>
                    </div>

                </div>
            </>
        )
    };

    return (
        <div className="rightbar">
            <div className="rightbarWrapper">

                { profile ? <ProfileRightbar /> : <HomeRightbar /> }

            </div>
        </div>
    )
}

export default Rightbar
