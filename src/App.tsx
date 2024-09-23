import "./App.css";
import HeaderSection from "./components/HeaderSection";
import NavBar from "./components/NavBar";
import ProjectsSection from "./components/ProjectsSection";

function App() {
  return (
    <div className="w-full min-h-screen bg-[#161513]">
      <div className=" max-w-[1100px] mx-auto p-4">
        <NavBar />
        <HeaderSection />
        <ProjectsSection />
      </div>
    </div>
  );
}

export default App;
