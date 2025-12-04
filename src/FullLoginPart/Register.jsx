// RegisterWithVerify.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterWithVerify() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // verification input/modal
  const [showVerify, setShowVerify] = useState(false);
  const [verifyCode, setVerifyCode] = useState("");

  // messages / modals
  const [serverMsg, setServerMsg] = useState(""); 
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleInitiate = async (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      setErrorMsg("Please fill all fields");
      setShowError(true);
      return;
    }

    try {
      const res = await fetch("https://carxserver-production.up.railway.app/register/init", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
        credentials: "include",
      });
      const text = await res.text();
      if (res.ok) {
        setShowVerify(true);
        setServerMsg("Verification code sent to " + email);
      } else {
        setErrorMsg(text || "Server error while initiating");
        setShowError(true);
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("Network error — check backend / CORS");
      setShowError(true);
    }
  };

  const handleConfirm = async () => {
    if (!verifyCode) {
      setErrorMsg("Enter the 4-digit code sent to your email");
      setShowError(true);
      return;
    }
    try {
      const res = await fetch("https://carxserver-production.up.railway.app/register/confirm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code: verifyCode }),
        credentials: "include",
      });
      const text = await res.text();
      if (res.ok) {
        setShowSuccess(true);
        setShowVerify(false);
        setServerMsg("");
      } else {
        setErrorMsg(text || "Verification failed");
        setShowError(true);
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("Network error during confirm");
      setShowError(true);
    }
  };

  const finishAndGoHome = () => {
    setShowSuccess(false);
    setUsername("");
    setEmail("");
    setPassword("");
    setVerifyCode("");
    setServerMsg("");
    navigate("/");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-b from-slate-100 to-slate-50 p-6">
      <div className="w-[380px] bg-white p-6 rounded-2xl shadow-xl ring-1 ring-slate-200">
        <h2 className="text-2xl font-semibold mb-4 text-slate-800">Create account</h2>

        <form onSubmit={handleInitiate}>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border p-3 w-full rounded-lg mb-3 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            placeholder="Username"
            required
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-3 w-full rounded-lg mb-3 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            placeholder="Email"
            type="email"
            required
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-3 w-full rounded-lg mb-4 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            placeholder="Password"
            type="password"
            required
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 w-full rounded-lg shadow-md hover:scale-[1.01] transition"
          >
            Submit & Send Code
          </button>
        </form>

        {serverMsg && <p className="mt-3 text-sm text-green-700">{serverMsg}</p>}
      </div>

      {/* Verification modal */}
      {showVerify && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40">
          <div className="bg-white p-6 rounded-xl w-[360px] shadow-2xl ring-1 ring-slate-200">
            <h3 className="text-xl font-medium mb-2 text-slate-800">Enter verification code</h3>
            <p className="text-sm mb-4 text-slate-600">We sent a 4-digit code to <b>{email}</b></p>

            <input
              value={verifyCode}
              onChange={(e) => setVerifyCode(e.target.value.replace(/\D/g, "").slice(0, 4))}
              placeholder="1234"
              className="border p-3 w-full rounded-md mb-4 text-center tracking-widest text-xl"
              inputMode="numeric"
            />

            <div className="flex gap-3">
              <button
                onClick={handleConfirm}
                className="flex-1 bg-emerald-500 text-white py-2 rounded-lg shadow"
              >
                Verify
              </button>
              <button
                onClick={() => {
                  setShowVerify(false);
                  setVerifyCode("");
                }}
                className="flex-1 bg-slate-200 py-2 rounded-lg"
              >
                Cancel
              </button>
            </div>

            <p className="text-xs text-slate-500 mt-3">Didn't receive? check spam or try again after some seconds.</p>
          </div>
        </div>
      )}

      {/* Success modal (hidden until verification success) */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/35">
          <div className="bg-white rounded-2xl p-6 w-[380px] shadow-2xl ring-1 ring-slate-200 text-center">
            <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 flex items-center justify-center mb-4 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-slate-800">Verification Successful</h3>
            <p className="text-sm text-slate-600 mb-5">Your account has been created and verified successfully.</p>

            <div className="flex gap-3">
              <button onClick={finishAndGoHome} className="flex-1 bg-indigo-600 text-white py-2 rounded-lg">
                Go to Login
              </button>
              <button onClick={() => setShowSuccess(false)} className="flex-1 bg-slate-100 py-2 rounded-lg">
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Error modal */}
      {showError && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <div className="bg-white p-5 rounded-xl w-[360px] shadow-xl ring-1 ring-slate-200">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800">Something went wrong</h4>
                <p className="text-sm text-slate-600 mt-1">{errorMsg}</p>
                <div className="mt-4 flex gap-2">
                  <button onClick={() => setShowError(false)} className="ml-auto bg-slate-100 py-2 px-3 rounded-lg">
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RegisterWithVerify;
