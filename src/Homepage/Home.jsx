import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeDec from "./Navbar";
import MainPart from "./MainPart";

const fallbackImg = "/mnt/data/88af65de-b7e9-49e6-8e6c-2e2f4936badf.png";

function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("https://carxserver-production.up.railway.app/api/session", {
          credentials: "include",
          mode: "cors"
        });

        if (res.status === 401) {
      
          navigate("/l  ogin", { replace: true });
          return;
        }

        const data = await res.json();
        setUser(data && Object.keys(data).length ? data : null);
      } catch (err) {
        console.error("Failed to fetch session:", err);
        navigate("/login", { replace: true });
      }
    })();
  }, [navigate]);

  return (
    <div className="bg-black">
      <HomeDec />
      <MainPart />
      
    </div>  
   
 
    
  );
}

export default Home;

