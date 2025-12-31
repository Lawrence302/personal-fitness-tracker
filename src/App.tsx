import Navbar from "./components/Navbar.tsx";
import Sidebar from "./components/Sidebar.tsx";
import Home from "./components/Home.tsx";
import Workouts from "./components/Workouts.tsx";

import "./App.css";
import { useState } from "react";

function App() {
  const [display, setDisplay] = useState("Home");
  console.log(display);
  return (
    <div className='bg-zinc-950 h-dvh  flex flex-col md:flex-row-reverse '>
      {/* <Sidebar /> */}
      <div className='bg-zinc-950 flex-1 flex flex-col pb-24 md:pb-0'>
        <Navbar />
        {/* the contents of the main page starts here */}
        <div>
          {display == "Home" && <Home />}
          {display == "Workouts" && <Workouts />}
        </div>
      </div>

      <Sidebar setDisplay={setDisplay} />
    </div>
  );
}

export default App;
