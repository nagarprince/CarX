import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function RootRedirect() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function check() {
      try {
        const res = await fetch("http://localhost:8080/api/session", {
          credentials: "include",
          mode: "cors",
        });

        if (res.ok) {
          navigate("/home", { replace: true });
        } else {
          navigate("/login", { replace: true });
        }
      } catch (err) {
        navigate("/login", { replace: true });
      } finally {
        setLoading(false);
      }
    }

    check();
  }, [navigate]);

  return <div>Checking session...</div>;
}

export default RootRedirect;
