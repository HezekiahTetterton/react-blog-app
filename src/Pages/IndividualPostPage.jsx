import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function IndividualPostPage() {
  const { id } = useParams();

  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);
  const [comments, setComments] = useState([]);

  // Fetch post
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => setPost(res.data));
  }, [id]);

  // Fetch user
  useEffect(() => {
    if (post) {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
        .then((res) => setUser(res.data));
    }
  }, [post]);

  // Fetch comments
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((res) => setComments(res.data));
  }, [id]);

  if (!post) return <h2 className="main-content">Loading...</h2>;

  return (
    <main className="main-content">
      <article className="blog-post">
        <h2>{post.title}</h2>
        <p>{post.body}</p>

        {user && (
          <p>
            <strong>Author:</strong> {user.name} ({user.email})
          </p>
        )}

        <h3>Comments</h3>

        {comments.length === 0 ? (
          <p>No comments yet. Be the first to comment!</p>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="comment-item">
              <p><strong>{comment.name}</strong></p>
              <p>{comment.body}</p>
            </div>
          ))
        )}
      </article>
    </main>
  );
}

export default IndividualPostPage;