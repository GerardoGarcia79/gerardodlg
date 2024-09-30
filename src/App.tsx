import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeaderSection from "./components/MainSection";
import NavBar from "./components/NavBar";
import ProjectsSection from "./components/ProjectsSection";
import StackSection from "./components/StackSection";

function App() {
  return (
    <div className="w-full min-h-screen dark:bg-[#161513]">
      <Header />
        <NavBar />
      <div className=" max-w-[1100px] mx-auto p-4">
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
