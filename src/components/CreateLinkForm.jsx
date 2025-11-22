import { useState } from "react";
import { createLink } from "../api/linksApi";

export default function CreateLinkForm({ onCreated }) {
  const [url, setUrl] = useState("");
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!url.trim()) {
      setMessage("Please enter a valid URL.");
      return;
    }

    setLoading(true);
    const result = await createLink(url, code);
    setLoading(false);

    // 🔥 FIX: backend returns { code, url, shortUrl } (no "ok")
    if (result?.code) {
      setMessage("Short link created successfully!");
      setUrl("");
      setCode("");
      onCreated(); // refresh Dashboard list
    } else {
      setMessage(result.error || "Something went wrong. Try again.");
    }

    // Auto-hide message after a few seconds
    setTimeout(() => setMessage(""), 3000);
  }

  return (
    <div className="card">
      <h2>Create Short Link</h2>

      <form onSubmit={handleSubmit} className="form">
        <label>
          Long URL:
          <input
            type="url"
            value={url}
            placeholder="https://example.com"
            onChange={(e) => setUrl(e.target.value)}
            required
          />
        </label>

        <label>
          Custom Code (optional):
          <input
            type="text"
            value={code}
            placeholder="e.g. mylink123"
            onChange={(e) => setCode(e.target.value)}
          />
        </label>

        <button type="submit" disabled={loading}>
          {loading ? "Creating..." : "Create Link"}
        </button>
      </form>

      {message && <p className="message">{message}</p>}
    </div>
  );
}
