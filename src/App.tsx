import Navbar from "./components/Navbar.tsx";
import Sidebar from "./components/Sidebar.tsx";
import Home from "./components/Home.tsx";

import "./App.css";

function App() {
  return (
    <div className='bg-zinc-950 h-dvh  flex flex-col md:flex-row-reverse '>
      {/* <Sidebar /> */}
      <div className='bg-zinc-950 flex-1 flex flex-col pb-24'>
        <Navbar />
        {/* the contents of the main page starts here */}
        <Home />
      </div>

      <Sidebar />
    </div>
  );
}

export default App;
