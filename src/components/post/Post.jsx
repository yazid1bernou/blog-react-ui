import React from "react";
import './post.css';

export default function Post () {
    return (
        <div className="post">
              <img className="postImage" src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <div className="postInfo">
                     <div className="postCats">
                         <span className="postCat"> Life </span>
                         <span className="postCat"> Music </span>
                     </div>
                     <span className="postTitle">
                        Lorem ipsum dolor sit
                     </span>
                     <hr />
                     <span className="postDate">1 hour ago</span>
              </div>
              <p className="postDesc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit 
                temporibus minima ducimus, cumque praesentium dolore eaque quae dolorum omnis tempore
                 deserunt illo nobis eum voluptatum aliquid fugit laborum ipsa. Magni?
                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit 
                temporibus minima ducimus, cumque praesentium dolore eaque quae dolorum omnis tempore
                 deserunt illo nobis eum voluptatum aliquid fugit laborum ipsa. Magni?
                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit 
                temporibus minima ducimus, cumque praesentium dolore eaque quae dolorum omnis tempore
                 deserunt illo nobis eum voluptatum aliquid fugit laborum ipsa. Magni?
              </p>
        </div>
    )
}
