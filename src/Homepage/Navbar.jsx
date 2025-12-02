import bodypart from "../assets/skoda.png";
import "../index.css";
import { useNavigate } from "react-router-dom";
function HomeDec() {
  const navigate = useNavigate();
    return (
        <>
        <div className="bg-black">
           <nav className=" w-full h-[70px] flex items-center px-6">


  <div className="flex items-center mr-10">
    <img
      src="/mnt/data/f46ee6c9-b4ce-4739-b68d-00a03111de12.png"
      alt="Logo"
      className="h-[40px] w-auto"
    />
  </div>

  <ul className="flex gap-10 text-white text-[18px] font-medium">
    <li className="navbarStyle" onClick={()=> {navigate('/')}}>
        HOME
    </li>
    <li className="navbarStyle">
      BUY CARS
    </li>

    <li className="navbarStyle">
      SELL CARS
    </li>
    <li className="navbarStyle">
        Products Site
    </li>
  </ul>
  <div className="ml-auto flex items-center gap-6">

    <div className="group flex items-center backdrop-blur-md bg-white/10 border border-white/20 
rounded-xl px-4 py-2 w-[320px] transition-all duration-300 
hover:bg-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.25)]">

  <input
    type="text"
    placeholder="Search"
    className="w-full bg-transparent text-white placeholder-gray-300 outline-none"
  />

  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" viewBox="0 0 24 24" 
    strokeWidth={2} stroke="currentColor"
    className="w-6 h-6 text-white transition-all duration-300 
               group-hover:text-amber-400 group-hover:scale-125 
               group-hover:drop-shadow-[0_0_10px_#fbbf24]"
  >
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 10-10.61 0 7.5 7.5 0 0010.61 0z" />
  </svg>

</div>


    <div className="flex gap-5 text-white">
      <svg  
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth={1.5}
  stroke="currentColor"
  className="w-7 h-7 hover:cursor-pointer text-white transition-all duration-300 hover:scale-125 hover:text-amber-400 hover:drop-shadow-[0_0_10px_#fbbf24]"
>
  <path strokeLinecap="round" strokeLinejoin="round"
    d="M12 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" />
  <path strokeLinecap="round" strokeLinejoin="round"
    d="M19.5 10.5c0 7.142-7.5 12-7.5 12s-7.5-4.858-7.5-12a7.5 7.5 0 1115 0z" />
</svg>

      <svg xmlns="http://www.w3.org/2000/svg" 
           fill="none" viewBox="0 0 24 24" 
           strokeWidth={1.5} stroke="currentColor"
           className="-7 h-7 text-white cursor-pointer transition-all duration-300 hover:scale-125 hover:text-amber-400 hover:drop-shadow-[0_0_10px_#fbbf24]">
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M4.5 20.25a8.25 8.25 0 0115 0" />
      </svg>

    </div>
  </div>

</nav>



            </div>
        </>
    );
}

export default HomeDec;
