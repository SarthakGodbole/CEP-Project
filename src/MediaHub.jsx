// ...existing code...
import React, { useState } from "react";
import './MediaHub.css';


const sampleUploads = [
  {
    desc: "Organic Farm Landscape",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    type: "image/jpeg"
  },
  {
    desc: "Farmer Harvesting Crops",
    url: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
    type: "image/jpeg"
  },
  {
    desc: "Compost Pile",
    url: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80",
    type: "image/jpeg"
  },
  {
  desc: "Mulching Organic Field",
  url: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80",
  type: "image/jpeg"
},
{
  desc: "Agroforestry Trees & Crops",
  url: "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=800&q=80",
  type: "image/jpeg"
}

];



export default function MediaHub() {
  const [uploads, setUploads] = useState(sampleUploads);
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);

  const handleUpload = e => {
    e.preventDefault();
    if (file && desc) {
      const url = URL.createObjectURL(file);
      setUploads(prev => [{ desc, url, type: file.type }, ...prev]);
      setDesc("");
      setFile(null);
    }
  };

  const handleImgError = (e) => {
    e.currentTarget.src = "data:image/svg+xml;utf8," +
      encodeURIComponent(
        `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'>
           <rect width='100%' height='100%' fill='#f0faf3'/>
           <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#6aa87a' font-size='28' font-family='Arial, Helvetica, sans-serif'>Image unavailable — Natural Farming</text>
         </svg>`
      );
  };

  return (
    <div className="mediahub-container" aria-live="polite">
      <h2>Photo & Video Uploads</h2>

      <form className="mediahub-form" onSubmit={handleUpload} aria-label="Upload media">
        <input
          type="file"
          accept="image/*,video/*"
          onChange={e => setFile(e.target.files[0] || null)}
          className="file-input"
        />

        <input
          type="text"
          value={desc}
          onChange={e => setDesc(e.target.value)}
          placeholder="Short description"
          aria-label="Description"
        />

        <button type="submit" disabled={!file || !desc} aria-disabled={!file || !desc}>
          Upload
        </button>
      </form>

      <div className="media-gallery" role="list">
        {uploads.length === 0 ? (
          <div className="no-media" role="listitem">No media uploaded yet</div>
        ) : uploads.map((u, idx) => (
          <article key={idx} className="media-item" role="listitem">
            <div className="media-preview">
              {u.type && u.type.startsWith("image") ? (
                <img
                  src={u.url}
                  alt={u.desc || "Uploaded image"}
                  onError={handleImgError}
                  loading="lazy"
                />
              ) : u.type && u.type.startsWith("video") ? (
                <video src={u.url} controls preload="metadata" />
              ) : (
                <img src={u.url} alt={u.desc || "Media"} onError={handleImgError} loading="lazy" />
              )}
            </div>

            <div className="media-meta">
              <div className="media-title">{u.desc}</div>
              <span className={`media-type ${u.type && u.type.startsWith("image") ? 'image' : 'video'}`}>
                {u.type && u.type.startsWith("image") ? 'Image' : 'Video'}
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
// ...existing code...