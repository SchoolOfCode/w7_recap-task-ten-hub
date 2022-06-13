import React from "react";
import{useState} from "react";

function CommentForm() {

  const [form,setForm]=useState({author:"Anon Author", content:""});
  

  function handleChange(e) {
    setForm(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(form.author)
  }

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <label for="comment-author">Author:</label>
      <input type="text" id="comment-author" value={form.author} name="author" 
      onChange={handleChange} required/><br/>
      <label for="comment-content">Comment:</label>
      <input type="text" id="comment-content" value={form.content} name="content"
      onChange={handleChange} required/><br/>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default CommentForm;
