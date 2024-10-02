import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { ReactNode, useEffect, useRef, useState } from "react";
import { FaDesktop } from "react-icons/fa";
import { faX } from "@fortawesome/free-solid-svg-icons/faX";
import { MdLightMode } from "react-icons/md";
import { FaMoon } from "react-icons/fa";




const NavBar = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'system');
  const [showSelectTheme, setShowSelectTheme] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavBar, setShowNavBar] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const themeMenuRef = useRef<HTMLDivElement>(null);
  const themeButtonRef = useRef<HTMLButtonElement>(null);
  const changeBg = () => window.scrollY >= 50 ? setIsScrolled(true) : setIsScrolled(false);
  window.addEventListener('scroll', changeBg);
  const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
  
  const themes: Record<string, ReactNode> = {
    'light': <MdLightMode size='20px' className="text-black dark:text-white"/>,
    'dark': <FaMoon size='20px' className="text-black dark:text-white"/>,
    'system': <FaDesktop size='20px' className="text-black dark:text-white"/>
  }

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

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if(!menuRef.current?.contains(e.target as Node)) {
        setShowNavBar(false)
      }
    }

    document.addEventListener('mousedown', handler)
  })

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if(!themeMenuRef.current?.contains(e.target as Node) && !themeButtonRef.current?.contains(e.target as Node)) {
        setShowSelectTheme(false);
      }
    }

    document.addEventListener('mousedown', handler);
  })

  return (
    <>
    <FontAwesomeIcon onClick={() => setShowNavBar(true)} icon={faBars} className={`w-9 h-9 fixed top-2 right-2 text-black dark:text-white z-20 cursor-pointer md:hidden ${showNavBar ? 'hidden' : ''}`} />
    <FontAwesomeIcon onClick={() => setShowNavBar(false)} icon={faX} className={`w-9 h-9 fixed top-2 right-2 text-black dark:text-white z-20 cursor-pointer md:hidden ${showNavBar ? '' : 'hidden'}`} />
    <div ref={menuRef} className={`${ isScrolled ? 'md:bg-[#dcd8d9] md:dark:bg-[#414141]' : 'md:bg-inherit'} z-10 ${showNavBar ? 'fixed right-0 top-0 w-60 bg-[#00a8e8] h-full' : 'fixed -right-60 top-0 w-60 bg-[#00a8e8] h-full'} transition-[right] md:h-fit duration-500 ease-in-out md:rounded-full md:fixed md:w-fit md:text-center md:top-4 md:left-1/2 md:-translate-x-1/2 md:z-10`}>
        <div className='py-12 px-5 md:py-0 md:px-0 md:flex'>
          <ul className="text-2xl [&_*]:my-4 md:[&_*]:my-0 md:flex md:justify-center md:text-base md:text-nowrap md:[&_*]:p-2">
              <li className=" md:list-item">
                <a href="#header">Home</a>
              </li>
              <li className=" md:list-item">
                <a href="#projects">Projects</a>
              </li>
              <li className=" md:list-item">
                <a href="#about-me">About Me</a>
              </li>
              <li className=" md:list-item">
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <button ref={themeButtonRef} onClick={(() => setShowSelectTheme(!showSelectTheme))} className=" md:p-2 md:block">{themes[theme!]}</button>
            <div ref={themeMenuRef} className={`md:fixed md:top-[40px] md:right-0 md:w-28 md:border-[1px] md:border-white md:p-1 md:rounded-lg md:bg-[#dcd8d9] md:dark:bg-[#414141] md:text-start ${showSelectTheme ? 'visible opacity-100 transition-all ease-in-out duration-300' : 'invisible opacity-0 transition-all ease-in-out duration-300'}`}>
              <ul>
                <li onClick={() => {
                  setTheme('light');
                  setShowSelectTheme(!showSelectTheme);
                  }} className="hover:bg-[#bfbfbf] dark:hover:bg-[#616161] rounded-md pl-1 cursor-default mb-[2px]">Light</li>
                <li onClick={() => {
                  setTheme('dark');
                  setShowSelectTheme(!showSelectTheme);
                  }} className="hover:bg-[#bfbfbf] dark:hover:bg-[#616161] rounded-md pl-1 cursor-default mb-[2px]">Dark</li>
                <li onClick={() => {
                  setTheme('system');
                  setShowSelectTheme(!showSelectTheme);
                  }} className="hover:bg-[#bfbfbf] dark:hover:bg-[#616161] rounded-md pl-1 cursor-default">System</li>
              </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default NavBar