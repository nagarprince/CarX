import { useEffect } from "react";

function Logout() {
  useEffect(() => {
    (async () => {
      try {
        await fetch("https://carxserver-production.up.railway.app/logout", {
          method: "POST",
          credentials: "include",
          mode: "cors"
        });
      } catch (err) {
        console.error(err);
      } finally {
        window.location.replace("http://localhost:5173/login");
      }
    })();
  }, []);

  return null;
}

export default Logout;
