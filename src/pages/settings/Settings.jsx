import React from "react";
import './settings.css';
import Sidebar from "../../components/sidebar/Sidebar";
export default function Settings () {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                 <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Your Account</span>
                 </div>
                 <form className="settingsForm">
                     <label>Profile Picture</label>
                     <div className="settingsPP">
                        <img  className="settingsImg" src="https://images.pexels.com/photos/9074921/pexels-photo-9074921.jpeg" alt="" />
                        <label htmlFor="fileInput">
                           <i className="settingsPPIcon fa-solid fa-circle-user"></i>
                        </label>
                        <input className="" type="file" id="fileInput" style={{display:"none"}} />
                     </div>
                     <label> Username</label>
                     <input type="text" placeholder="YazidDev" />
                     <label> Email</label>
                     <input type="email" placeholder="yaziddev@gmail.com" />
                     <label> Password</label>
                     <input type="password" />
                     <button className="settingsSubmit"> Update</button>
                 </form>
            </div>
            <Sidebar />
        </div>
    )
} 

