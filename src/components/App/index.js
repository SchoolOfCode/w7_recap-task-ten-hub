import React from "react";
//import { useState } from "react";
import BlogPost from "../BlogPost";
import blog from "../../data/blogs";
import CommentList from "../CommentList";
import CommentForm from "../CommentForm";
import comments from "../../data/comments";



function App() {

  //const[comment,setComment]=useState("")

  return (
    <main>
    <BlogPost blog={blog}/>
    <CommentList arr={comments}/>
    <CommentForm/>
    </main>
  );
}


export default App;
