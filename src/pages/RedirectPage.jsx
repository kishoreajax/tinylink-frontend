import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getLinkByCode } from "../api/linksApi";

export default function RedirectPage() {
  const { code } = useParams();

  useEffect(() => {
    async function redirectNow() {
      const data = await getLinkByCode(code);
      if (data && data.url) {
        window.location.href = data.url;
      } else {
        window.location.href = "/";
      }
    }
    redirectNow();
  }, [code]);

  return <p>Redirecting...</p>;
}
