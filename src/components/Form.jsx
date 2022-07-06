import React from "react";
import "../css/Form.css";

const Form= ()=>{
    return(
            <>
            <div className="form_container">
            <div className="add_blog">Add Blog</div>
            <form action="#">
                <div className="blog-deatils">
                <div className="input-box">
                    <span className="details">Blog Title</span> <br />
                    <input type="text" placeholder="Name" required="" />
                </div>
                <div className="input-box">
                    <span className="details">Author Name</span> <br />
                    <input type="text" placeholder="Author Name" required="" />
                </div>
                <div className="box">
                    <span className="details">Description</span> <br />
                    <input
                    type="text"
                    placeholder="Write here"
                    id="desc"
                    required=""
                    />
                </div>
                <div className="Add Image">
                    {/* <input type="file" id="file"> */}
                    <label htmlFor="file" id="uploadBtn">
                    {" "}
                    + Add Image
                    </label>
                </div>
                <div className="row">
                    <div className="Date">
                    Date
                    <br />
                    <input type="date" />
                    </div>
                    <div className="Read-Time">
                    Read Time
                    <br />
                    <input type="time" />
                    </div>
                </div>
                <div className="input-box tag">
                    <span className="details">Add tag</span> <br />
                    <select id="Add-tag">
                    <option value="Add tag">Select tag</option>
                    <option value="Data Structures and Algorithms">
                        Data Structures and Algorithms
                    </option>
                    <option value="Interview Preperation">
                        Interview Preperation
                    </option>
                    <option value="Competitive Programming">
                        Competitive Programming
                    </option>
                    <option value="Time and Space Complexities ">
                        Time and Space Complexities{" "}
                    </option>
                    <option value="Student Experience">Student Experience</option>
                    <option value="About Us">About Us</option>
                    </select>
                </div>
                </div>
            </form>
            </div>
            <div className="button">
            <input type="submit" defaultValue="Publish" />
            </div>
        </>    
    );
}

export default Form;