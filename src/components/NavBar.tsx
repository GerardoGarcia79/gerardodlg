import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoWhite from "../assets/logo-white.png";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";

const NavBar = () => {
  return (
    <div className="fixed top-0 left-0 w-full p-4 flex justify-between items-center">
      <img src={logoWhite} alt="Logo" className="w-44 md:w-36" />
      <ul className="flex text-white text-lg md:[&_*]:ml-4">
        <li>
          <FontAwesomeIcon icon={faBars} className="w-8 h-8 md:hidden" />
        </li>
        <li className="hidden md:list-item">
          <a href="#header">Home</a>
        </li>
        <li className="hidden md:list-item">
          <a href="#projects">Projects</a>
        </li>
        <li className="hidden md:list-item">
          <a href="#about-me">About Me</a>
        </li>
        <li className="hidden md:list-item">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
