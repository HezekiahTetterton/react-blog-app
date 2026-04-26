import { useEffect, useState } from "react";
import axios from "axios";
import BlogPost from "../Components/BlogPost";

function BlogPostsPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  return (
    <main className="main-content">
      {posts.slice(0, 10).map((post) => (
        <BlogPost
          key={post.id}
          id={post.id}
          title={post.title}
          content={post.body.substring(0, 100) + "..."}
          author={`User ${post.userId}`}
          date="N/A"
        />
      ))}
    </main>
  );
}

export default BlogPostsPage;