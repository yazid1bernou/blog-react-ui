import React from "react";
import './topbar.css';
import { Link } from "react-router-dom";
export default function Topbar () {
    const user = false ;
    return (
        <div className="top">
                <div className="topLeft">
                    <i className="topIcon fa-brands fa-square-facebook"></i>
                    <i className="topIcon fa-brands fa-square-twitter"></i>
                    <i className="topIcon fa-brands fa-square-pinterest"></i>
                    <i className="topIcon fa-brands fa-square-instagram"></i>
                </div>
                <div className="topCenter">
                    <ul className="topList">
                        <li className="topListItem">
                           <Link to={'/'} className='link'> HOME</Link>  
                        </li>
                        <li className="topListItem">ABOUT</li>
                        <li className="topListItem">CONTACT</li>
                        <li className="topListItem">WRITE</li>
                        <li className="topListItem">LOGOUT</li>
                    </ul>
                </div>
                <div className="topRight">
                   <img className="topImage" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                   <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
                   
                </div>
                    
              
        </div>
    )
}