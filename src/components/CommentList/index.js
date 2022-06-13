import Comment from "../Comment";

function CommentList({arr}) {
  
  return arr.map(
    (e) => {
      return <Comment key={e.id} comment={e.author,e.comment}/>
    }
  )
}

export default CommentList;
