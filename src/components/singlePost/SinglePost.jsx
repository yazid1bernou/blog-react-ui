import React from 'react';
import './singlePost.css';
export default function SinglePost() {
  return (
    <div className='singlePost'>
               <div className='singlePostWrapper'> 
                  <img src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="singlePostImg" />
                  <h1 className="singlePostTitle">
                      Lorem, ipsum dolor sit amet
                      <div className="singlePostEdit">
                          <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                          <i className="singlePostIcon fa-regular fa-trash"></i>
                      </div>
                  </h1>
                  <div className="singlePostInfo">
                      <span className='singlePostAuthor'> Author : <b> Safax</b></span>
                      <span className='singlePostDate'> 1 hour ago </span>
                  </div>
                  <p className='singlePostDesc'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptatibus possimus
                     voluptates? Numquam facilis laudantium explicabo velit sit
                     recusandae reprehenderit sint aliquam nesciunt soluta, nobis officia, dolorem quae, atque facere!
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptatibus possimus
                     voluptates? Numquam facilis laudantium explicabo velit sit
                     recusandae reprehenderit sint aliquam nesciunt soluta, nobis officia, dolorem quae, atque facere!
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptatibus possimus
                     voluptates? Numquam facilis laudantium explicabo velit sit
                     recusandae reprehenderit sint aliquam nesciunt soluta, nobis officia, dolorem quae, atque facere!
                  </p>
               </div>

    </div>
  )
}
