import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { useEffect, useState } from "react";
import { FaDesktop } from "react-icons/fa";

const NavBar = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'system')
  const [showSelectTheme, setShowSelectTheme] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false)
  const changeBg = () => window.scrollY >= 50 ? setIsScrolled(true) : setIsScrolled(false)
  window.addEventListener('scroll', changeBg);
  const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
  
  useEffect(() => {
    const onWindowMatch = () => {
      if(
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) && darkQuery.matches)
      ) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }

    switch (theme) {
      case 'dark':
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        break;
      case 'light':
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        break;
      default:
        localStorage.removeItem('theme');
        onWindowMatch()
        break;
    }
  }, [theme, darkQuery.matches])

  return (
    <>
    <FontAwesomeIcon icon={faBars} className="w-9 h-9 md:hidden fixed top-2 right-2 text-white z-10" />
    <div className={`${ isScrolled ? 'bg-[#414141]' : ''} rounded-full fixed w-fit text-center top-4 left-1/2 -translate-x-1/2 z-10`}>
        <div className="flex">
          <ul className="flex justify-center text-white text-base text-nowrap md:[&_*]:p-2">
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
            <button onClick={(() => setShowSelectTheme(!showSelectTheme))} className="text-white p-2"><FaDesktop size='20px' /></button>
            <div className={`fixed top-[40px] right-0  w-28 border-[1px] border-white p-1 rounded-lg bg-[#414141] text-start ${showSelectTheme ? '' : 'hidden'}`}>
              <ul className="text-white">
                <li onClick={() => {
                  setTheme('light');
                  setShowSelectTheme(!showSelectTheme);
                  }} className="hover:bg-[#616161] rounded-md pl-1 cursor-default mb-[2px]">Light</li>
                <li onClick={() => {
                  setTheme('dark');
                  setShowSelectTheme(!showSelectTheme);
                  }} className="hover:bg-[#616161] rounded-md pl-1 cursor-default mb-[2px]">Dark</li>
                <li onClick={() => {
                  setTheme('system');
                  setShowSelectTheme(!showSelectTheme);
                  }} className="hover:bg-[#616161] rounded-md pl-1 cursor-default">System</li>
              </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default NavBar