import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";

const Nav = () => {
  return (
    <>
    <FontAwesomeIcon icon={faBars} className="w-9 h-9 md:hidden fixed top-2 right-2 text-white z-10" />
    <div className="bg-[#414141] rounded-full fixed w-fit text-center top-1 left-1/2 -translate-x-1/2 z-10">
        <ul className="flex justify-center text-white text-base md:[&_*]:p-2">
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
    </>
  )
}

export default Nav