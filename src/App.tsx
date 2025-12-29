import Navbar from "./components/Navbar.tsx";
import Sidebar from "./components/Sidebar.tsx";
import "./App.css";

function App() {
  return (
    <div className='bg-zinc-950 h-screen flex'>
      <Sidebar />
      <div className='flex-1 flex flex-col'>
        <Navbar />
        <div className='border border-red-900 h-full text-zinc-500 p-4 flex-1 flex justify-center items-center text-6xl'>
          Fitness Tracker
        </div>
      </div>
    </div>
  );
}

export default App;
