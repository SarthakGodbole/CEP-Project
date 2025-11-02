// ...existing code...
import React, { useState } from "react";
import './Discussions.css';

const initialPosts = [
  { title: "Success with mulching in summer", body: "Tried straw mulching on 1 acre and saw 30% water savings and fewer weeds." },
  { title: "Looking for compost recipe", body: "Any tips on speeding up compost with limited greens in dry season?" },
  { title: "Intercropping groundnut with millets", body: "Share your spacing and yield experience for small farms." },
];

export default function Discussions() {
  const [posts, setPosts] = useState(initialPosts);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const submitPost = e => {
    e.preventDefault();
    setPosts([{ title, body }, ...posts]);
    setTitle("");
    setBody("");
  };

  return (
    <div className="discussions-container">
      <h2>Community Discussion Board</h2>
      <form onSubmit={submitPost}>
        <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Subject" required />
        <textarea value={body} onChange={e => setBody(e.target.value)} placeholder="Ask/Discuss" required />
        <button type="submit">Post</button>
      </form>
      <ul>
        {posts.map((p, idx) => (
          <li key={idx}>
            <strong>{p.title}</strong>: {p.body}
          </li>
        ))}
      </ul>
    </div>
  );
}
// ...existing code...