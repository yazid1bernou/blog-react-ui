import React from 'react';
import './sidebar.css';


export default function Sidebar() {
  return (
      <div className='sidebar'>
            <div className='sidebarItem'>
              <span className='sidebarTitle'>ABOUT ME</span>
              <img src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg" alt="" /> 
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum earum repudiandae deserunt 
                assumenda non voluptatem.
              </p>
            </div>

            <div className='sidebarItem'>
               <span className='sidebarTitle'>CATEGORIES</span>
               <ul className='sidebarList'>
                   <li className='sidebarListItem'>Life</li>
                   <li className='sidebarListItem'>Musique</li>
                   <li className='sidebarListItem'>Style</li>
                   <li className='sidebarListItem'>Sport</li>
                   <li className='sidebarListItem'>Tech</li>
                   <li className='sidebarListItem'>Cinema</li>
               </ul>
            </div>
          <div  className='sidebarItem'>
               <span className='sidebarTitle'>FOLLOW US</span> 
               <div className='sidebarSocial'>
                    <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                    <i className="sidebarIcon fa-brands fa-square-twitter"></i>
                    <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
                    <i className="sidebarIcon fa-brands fa-square-instagram"></i>
               </div>
          </div>
      </div>
  )
}


