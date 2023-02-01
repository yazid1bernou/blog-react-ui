import React from "react";
import './write.css';
export default function Write () {
    return (
        <div className="write">
             <img className="writeImg" src="https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
             <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                       <i className="writeIcon fa-regular fa-plus"></i>
                    </label>
                    <input type="file"  id="fileInput" style={{display:"none"}} />
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
                    
                </div>
                <div className="writeFormGroup">
                    <textarea 
                      placeholder="Tell you story..."
                      type="text"
                      className="writeInput writeText "
                   
                    ></textarea>
                    <button className="writeSubmit">Publish</button>

                </div>
             </form>
        </div>
    )
}