import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function RedirectPage() {
  const { code } = useParams();

  useEffect(() => {
    async function redirectNow() {
      // Call backend to record click + redirect to original URL
      const backendUrl = `https://tinylink-backend-qng1.onrender.com/${code}`;
      window.location.href = backendUrl;
    }

    redirectNow();
  }, [code]);

  return <p>Redirecting...</p>;
}
