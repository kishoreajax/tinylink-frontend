import { useEffect, useState } from "react";
import CreateLinkForm from "../components/CreateLinkForm";
import LinksTable from "../components/LinksTable";
import { getAllLinks } from "../api/linksApi";

export default function Dashboard() {
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch links on load
  useEffect(() => {
    async function fetchLinks() {
      setLoading(true);
      const data = await getAllLinks();
      setLinks(data);
      setLoading(false);
    }

    fetchLinks();
  }, []);

  // Refresh list after create or delete
  async function refreshLinks() {
    const data = await getAllLinks();
    setLinks(data);
  }

  return (
    <div className="container">
      <h1 style={{ marginBottom: "5px" }}>TinyLink Dashboard</h1>
      <p style={{ marginTop: 0, marginBottom: "20px", color: "#666" }}>
        Create short URLs and track clicks in real time
      </p>

      {/* Create new short link */}
      <CreateLinkForm onCreated={refreshLinks} />

      {/* List of links (Copy + Delete) */}
      <LinksTable
        links={links}
        loading={loading}
        onDelete={refreshLinks}
      />
    </div>
  );
}
