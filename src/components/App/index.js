import React from "react";
import { useState } from "react";
import BlogPost from "../BlogPost";
import blog from "../../data/blogs";
import CommentList from "../CommentList";
import CommentForm from "../CommentForm";
import comments from "../../data/comments";



function App() {

  const[comment,setComment]=useState(comments)
  const [form,setForm]=useState({author:"Anon Author", content:""});
  
  function handleChange(e) {
    setForm({[e.target.name]:e.target.value});
    
  }

  function handleSubmit(e) {
    //e.preventDefault();
    console.log(form);
    let id = Math.random().toString(36).substring(2, 15)
    setComment([...comments,{id,...form}])
  }

  return (
    <main>
    <BlogPost blog={blog}/>
    <CommentList arr={comment}/>
    <CommentForm input={form} handleSubmit={handleSubmit} handleChange={handleChange}/>
    </main>
  );
}


export default App;
