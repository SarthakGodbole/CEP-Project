// ...existing code...
import React, { useState } from "react";
import './ExpertQnA.css';

const initialQA = [
  { q: "How to prepare Jeevamrutha?", a: "Mix cow dung, cow urine, jaggery, gram flour and soil with water and ferment for 7–10 days; use as microbial inoculant." },
  { q: "Which cover crop fixes nitrogen quickly?", a: "Sesbania and sunn hemp are fast-growing legumes commonly used as green manure." },
  { q: "How to control stem borers naturally?", a: "Use pheromone traps, release Trichogramma wasps and apply neem-based sprays when needed." },
];

export default function ExpertQnA() {
  const [questions, setQuestions] = useState(initialQA);
  const [qText, setQText] = useState("");
  const [aText, setAText] = useState("");

  // For demonstration, anyone can answer
  const submitQ = e => {
    e.preventDefault();
    setQuestions([...questions, { q: qText, a: "" }]);
    setQText("");
  };

  const submitA = (idx, answer) => {
    const updated = questions.slice();
    updated[idx].a = answer;
    setQuestions(updated);
    setAText("");
  };

  return (
    <div className="expertqna-container">
      <h2>Expert Q&A</h2>
      <form onSubmit={submitQ}>
        <input value={qText} onChange={e => setQText(e.target.value)} placeholder="Ask an expert" required />
        <button type="submit">Submit Question</button>
      </form>
      <ul>
        {questions.map((q, idx) => (
          <li key={idx}>
            <strong>Q:</strong> {q.q}
            <br />
            <strong>A:</strong> {q.a || (
              <form onSubmit={e => { e.preventDefault(); submitA(idx, aText); }}>
                <input value={aText} onChange={e => setAText(e.target.value)} placeholder="Answer here" />
                <button type="submit">Answer</button>
              </form>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
// ...existing code...