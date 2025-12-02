// import React, { useEffect, useState } from "react";
// import { Navigate } from "react-router-dom";

// export default function PublicRoute({ children }) {
//   const [loading, setLoading] = useState(true);
//   const [authed, setAuthed] = useState(false);

//   useEffect(() => {
//     let mounted = true;
//     fetch("http://localhost:8080/register/auth/check", {
//       method: "GET",
//       credentials: "include",
//     })
//       .then(res => {
//         if (!mounted) return;
//         setAuthed(res.ok);
//       })
//       .catch(() => {
//         if (mounted) setAuthed(false);
//       })
//       .finally(() => {
//         if (mounted) setLoading(false);
//       });
//     return () => { mounted = false; };
//   }, []);

//   if (loading) return <div className="h-screen flex items-center justify-center">Checking...</div>;
//   if (authed) return <Navigate to="/home" replace />;
//   return children;
// }
