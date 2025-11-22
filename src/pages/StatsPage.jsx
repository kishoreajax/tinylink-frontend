import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getLinkByCode } from "../api/linksApi";

export default function StatsPage() {
  const { code } = useParams();
  const [link, setLink] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLink() {
      const data = await getLinkByCode(code);
      setLink(data);
      setLoading(false);
    }
    fetchLink();
  }, [code]);

  if (loading) return <p>Loading…</p>;

  if (!link) {
    return (
      <div className="container card">
        <h2>Link not found</h2>
        <p style={{ marginBottom: "15px" }}>
          The short link you're trying to access does not exist.
        </p>
        <Link to="/" className="back-link">Back to Dashboard</Link>
      </div>
    );
  }

  return (
    <div className="container card">
      <h2 style={{ marginBottom: "15px" }}>Short Link Details</h2>

      <p><strong>Code:</strong> {link.code}</p>
      <p><strong>Destination URL:</strong> {link.url}</p>
      <p><strong>Total Clicks:</strong> {link.clicks}</p>
      <p><strong>Created On:</strong> {link.created_at}</p>
      <p><strong>Last Clicked:</strong> {link.last_clicked || "Not clicked yet"}</p>

      <div style={{ marginTop: "20px" }}>
        <Link to="/" className="back-link">← Back to Dashboard</Link>
      </div>
    </div>
  );
}
