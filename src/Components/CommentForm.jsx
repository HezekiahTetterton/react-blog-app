import { useState } from "react";
import axios from "axios";

function CommentForm({ postId, addComment }) {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !text) return;

    axios
      .post(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, {
        name: name,
        body: text,
      })
      .then((res) => {
        addComment(res.data);
        setName("");
        setText("");
      });
  };

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <textarea
        placeholder="Your comment"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default CommentForm;