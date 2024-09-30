import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { useState } from "react";
import { FaDesktop } from "react-icons/fa";


const NavBar = () => {
  const [showSelectTheme, setShowSelectTheme] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false)
  const changeBg = () => window.scrollY >= 50 ? setIsScrolled(true) : setIsScrolled(false)
  window.addEventListener('scroll', changeBg)
  
  return (
    <>
    <FontAwesomeIcon icon={faBars} className="w-9 h-9 md:hidden fixed top-2 right-2 text-white z-10" />
    <div className={`${ isScrolled ? 'bg-[#414141]' : ''} rounded-full fixed w-fit text-center top-4 left-1/2 -translate-x-1/2 z-10`}>
        <div className="flex">
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
            <button onClick={(() => setShowSelectTheme(!showSelectTheme))} className="text-white"><FaDesktop size='20px' /></button>
            <div className={`fixed top-[40px] right-0  w-28 border-[1px] border-white p-1 rounded-lg bg-[#414141] text-start ${showSelectTheme ? '' : 'hidden'}`}>
              <ul className="text-white">
                <li className="hover:bg-[#616161] rounded-md pl-1 cursor-default mb-[2px]">Light</li>
                <li className="hover:bg-[#616161] rounded-md pl-1 cursor-default mb-[2px]">Dark</li>
                <li className="hover:bg-[#616161] rounded-md pl-1 cursor-default">System</li>
              </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default NavBar