import { Link } from "react-router-dom";

function BlogPost({ id, title, content, author, date }) {
  return (
    <article className="blog-post">
      <h2>{title}</h2>
      <p>{content}</p>

      <div className="post-info">
        <p><strong>Author:</strong> {author}</p>
        <p><strong>Date:</strong> {date}</p>
      </div>

      <Link to={`/post/${id}`} className="read-more-btn">
        Read More
      </Link>
    </article>
  );
}

export default BlogPost;