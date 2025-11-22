import { Link } from "react-router-dom";
import { useState } from "react";
import { deleteLink } from "../api/linksApi";

export default function LinksTable({ links, loading, onDelete }) {
  const [copiedCode, setCopiedCode] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState("");

  if (loading) return <p>Loading links...</p>;
  if (!links.length) return <p>No links created yet.</p>;

  function copyToClipboard(fullUrl, code) {
    navigator.clipboard.writeText(fullUrl);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 1500);
  }

  async function handleDelete(code) {
    setDeleteLoading(code);
    const res = await deleteLink(code);
    setDeleteLoading("");
    if (res.deleted) onDelete(); // Refresh list
  }

  return (
    <div className="card">
      <h2>Your Links</h2>

      <table className="links-table">
        <thead>
          <tr>
            <th>Code</th>
            <th>URL</th>
            <th>Clicks</th>
            <th>Last Click</th>
            <th></th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {links.map((link) => {
            const shortUrl = `${window.location.origin}/${link.code}`;
            return (
              <tr key={link.code}>
                <td>
                  <Link to={`/code/${link.code}`}>{link.code}</Link>
                </td>
                <td className="url-cell">{link.url}</td>
                <td>{link.clicks}</td>
                <td>{link.last_clicked || "—"}</td>

                <td>
                  <button onClick={() => copyToClipboard(shortUrl, link.code)}>
                    {copiedCode === link.code ? "Copied!" : "Copy"}
                  </button>
                </td>

                <td>
                  <button
                    onClick={() => handleDelete(link.code)}
                    style={{ background: "#e03131" }}
                    disabled={deleteLoading === link.code}
                  >
                    {deleteLoading === link.code ? "Deleting..." : "Delete"}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
