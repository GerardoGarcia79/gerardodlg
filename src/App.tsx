import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import NavBar from "./components/NavBar";
import ProjectsSection from "./components/ProjectsSection";
import StackSection from "./components/StackSection";

function App() {
  return (
    <div className="w-full min-h-screen text-black dark:bg-[#161513] dark:text-white ">
      <Header />
        <NavBar />
      <div className=" max-w-[1100px] mx-auto p-4">
        <MainSection />
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
