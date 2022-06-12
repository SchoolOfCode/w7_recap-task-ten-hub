import React from "react";
import { useState } from "react";
import BlogPost from "../BlogPost";
import blog from "../../data/blogs";


function App() {
  return (
    <BlogPost blog={blog}/>
  );
}


export default App;
