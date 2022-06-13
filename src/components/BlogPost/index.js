function BlogPost({blog}) {
  return (
    <div className="blogpost">
    <h1>{blog.title}</h1>
    <h2>by {blog.author}</h2>
    <p>{blog.datePosted}</p>
    <figure className = "blog-image">
    <img width="100%" src={blog.imageSrc} alt={blog.imageAlt}></img>
    <figcaption>{blog.imageAlt}</figcaption>
    </figure>
    <p>{blog.content}</p>
    </div>
  );
}

export default BlogPost;
