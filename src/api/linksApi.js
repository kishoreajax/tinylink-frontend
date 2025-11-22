const BASE = "https://tinylink-backend-qng1.onrender.com/api/links";

export async function getAllLinks() {
  try {
    const res = await fetch(BASE);
    return await res.json();
  } catch (err) {
    console.error("Error fetching links:", err);
    return [];
  }
}

export async function createLink(url, code) {
  try {
    const res = await fetch(BASE, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url, code }),
    });

    return await res.json();
  } catch (err) {
    console.error("Error creating link:", err);
    return { error: "Network error" };
  }
}

export async function getLinkByCode(code) {
  try {
    const res = await fetch(`${BASE}/${code}`);
    if (!res.ok) return null;
    return await res.json();
  } catch (err) {
    console.error("Error fetching link:", err);
    return null;
  }
}

export async function deleteLink(code) {
  try {
    const res = await fetch(`${BASE}/${code}`, {
      method: "DELETE"
    });

    return res.status === 204
      ? { deleted: true }
      : { deleted: false, error: "Could not delete" };

  } catch (err) {
    console.error("Error deleting link:", err);
    return { deleted: false, error: "Network error" };
  }
}
