import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoWhite from "../assets/logo-white.png";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center">
      <img src={logoWhite} alt="Logo" className="w-44 md:w-36" />
      <ul className="flex text-white text-lg [&_*]:ml-4">
        <li>
          <FontAwesomeIcon icon={faBars} className="w-8 h-8 md:hidden" />
        </li>
        <li className="hidden md:list-item">Home</li>
        <li className="hidden md:list-item">About Me</li>
        <li className="hidden md:list-item">Projects</li>
        <li className="hidden md:list-item">Hire Me</li>
      </ul>
    </div>
  );
};

export default NavBar;

// #00a8e8 Primary color
