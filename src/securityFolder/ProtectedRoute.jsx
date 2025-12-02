import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    let mounted = true;

    async function checkSession() {
      try {
        // Use only this backend endpoint now
        const res = await fetch("http://localhost:8080/api/session", {
          method: "GET",
          credentials: "include",
          mode: "cors",
        });

        if (!mounted) return;

        if (res.ok) setAuthed(true);
        else setAuthed(false);
      } catch (err) {
        console.error("Session check failed:", err);
        if (mounted) setAuthed(false);
      } finally {
        if (mounted) setLoading(false);
      }
    }

    checkSession();
    return () => {
      mounted = false;
    };
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!authed) return <Navigate to="/login" replace />;
  return children;
}
