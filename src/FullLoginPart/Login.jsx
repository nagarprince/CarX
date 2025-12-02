import googleImg from "../assets/googleLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

/* fallback path you uploaded */
const fallbackImg = "/mnt/data/88af65de-b7e9-49e6-8e6c-2e2f4936badf.png";

function getCookie(name) {
  const value = `; ${document.cookie || ""}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
}

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checking, setChecking] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    (async () => {
      const jsession = getCookie("JSESSIONID");
      if (!jsession) {
        setChecking(false);
        return;
      }

      try {
        const res = await fetch("http://localhost:8080/api/session", {
          credentials: "include",
          mode: "cors"
        });

        if (res.ok) {
          navigate("/home", { replace: true });
          return;
        }
        setChecking(false);
      } catch (err) {
        console.error("Session verify failed:", err);
        setChecking(false);
      }
    })();
  }, [navigate]);

  async function handlesubmit(e) {
    e.preventDefault();
    if (!email || !password) {
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password })
      });

      const text = await res.text();
      if (res.ok) {
        navigate("/home", { replace: true });
      } else {
        alert("Error: " + text);
      }
    } catch (err) {
      console.error(err);
      alert("Network error — check backend / CORS");
    } finally {
      setSubmitting(false);
    }
  }

  if (checking) {
    return (
      <div className="h-screen flex justify-center items-center">
        <div className="text-center p-6">Checking session…</div>
      </div>
    );
  }

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-tr from-slate-100 via-white to-slate-200 p-4">
      <div className="w-[350px] bg-white/70 backdrop-blur-md shadow-2xl rounded-2xl p-7 border border-white/50">
        <h2 className="text-3xl font-semibold text-slate-800 text-center mb-6 tracking-wide">
          Welcome Back
        </h2>

        <form onSubmit={handlesubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            required
            className="w-full border px-3 py-3 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-300 outline-none"
            onChange={(e) => setEmail(e.target.value)}
            disabled={submitting}
          />

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            required
            className="w-full border px-3 py-3 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-300 outline-none"
            onChange={(e) => setPassword(e.target.value)}
            disabled={submitting}
          />

          <a className="block text-right text-sm text-indigo-600 hover:underline cursor-pointer">
            Forget password?
          </a>

          <button
            type="submit"
            disabled={submitting}
            className="w-full py-3 rounded-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-md hover:scale-[1.02] transition disabled:opacity-60"
          >
            {submitting ? "Logging in…" : "Login"}
          </button>
        </form>

        <a
          href="http://localhost:8080/oauth2/authorization/google"
          className="mt-4 flex items-center justify-center gap-3 w-full py-3 rounded-lg bg-white border text-gray-700 shadow-sm hover:shadow-md transition"
        >
          <img src={googleImg || fallbackImg} alt="google" className="w-6 h-6" />
          <span>Continue with Google</span>
        </a>

        <div className="text-center mt-6">
          <Link to="/register" className="text-indigo-700 text-sm hover:underline">
            New user? Create an account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
