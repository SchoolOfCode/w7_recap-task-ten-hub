function Comment({comment}) {
  
  var initials = comment.author.match(/\b(\w)/g).join("");

  return (
    <div className="comment">
    <p>{initials}</p>
    <p>{comment.author}</p>
    <p>{comment.content}</p>
    </div>
    
  );
}

export default Comment;
