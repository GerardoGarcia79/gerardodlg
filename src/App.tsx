import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HeaderSection from "./components/HeaderSection";
import NavBar from "./components/NavBar";
import ProjectsSection from "./components/ProjectsSection";
import StackSection from "./components/StackSection";

function App() {
  return (
    <div className="w-full min-h-screen bg-[#161513]">
      <div className=" max-w-[1100px] mx-auto p-4">
        <NavBar />
        <HeaderSection />
        <ProjectsSection />
        <StackSection />
        <AboutMe />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
