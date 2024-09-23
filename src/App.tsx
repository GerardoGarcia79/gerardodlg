import "./App.css";
import HeaderSection from "./components/HeaderSection";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="w-full min-h-screen bg-[#161513]">
      <div className=" max-w-[1100px] mx-auto p-4">
        <NavBar />
        <HeaderSection />
        <h2 className="text-4xl text-white">About Me</h2>
      </div>
    </div>
  );
}

export default App;
