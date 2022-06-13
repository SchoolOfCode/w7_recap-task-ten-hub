import React from "react";
//import{useState} from "react";

function CommentForm({input,handleSubmit,handleChange}) {

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <label for="comment-author">Author:</label>
      <input type="text" id="comment-author" value={input.author} name="author" 
      onChange={handleChange} required/><br/>
      <label for="comment-content">Comment:</label>
      <input type="text" id="comment-content" value={input.content} name="content"
      onChange={handleChange} required/><br/>
      <input type="submit" value="Submit"/>
    </form>
  );
}

export default CommentForm;
