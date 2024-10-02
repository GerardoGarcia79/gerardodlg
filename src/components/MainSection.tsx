import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gerardo from "../assets/face.webp";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons/faSquareGithub";
import { MdOutlineFileDownload } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import CvEnglish from '../assets/CV/CV-EN.pdf'

const MainSection = () => {
  const [showResumeLinks, setShowResumeLinks] = useState(false);
  const dropDownListRef = useRef<HTMLDivElement>(null)
  const toggleButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if(!dropDownListRef.current?.contains(e.target as Node) && !toggleButtonRef.current?.contains(e.target as Node)) {
        setShowResumeLinks(false)
      }
    }

    document.addEventListener('mousedown', handler)
  })

  return (
    <div id="header" className="grid grid-cols-1 gap-y-5 my-6 py-[25px] lg:grid-cols-3 md:gap-y-0 md:py-[100px] lg:py-[250px]">
      <div className="md:col-span-2">
        <h1 className="font-bold text-5xl mb-5">
          Hi, I'm <span className="text-[#00a8e8] ">Gerardo de León, </span>
          Frontend developer based in México.
        </h1>
        <p className="text-xl">
          I love technology, I'm passionate about creating websites, always
          ready to face challenges, and currently available for work
        </p>
        <div className="flex items-center mt-4 relative">
          <a
            href="https://www.linkedin.com/in/gerardo-de-le%C3%B3n-garc%C3%ADa/"
            target="_blank"
            className="flex items-center mr-2"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-black dark:text-white w-10 h-10 hover:text-[#00a8e8] dark:hover:text-[#00a8e8] transition ease-out hover:-translate-y-1 hover:scale-110 duration-300"
            />
          </a>
          <a
            href="https://github.com/GerardoGarcia79"
            target="_blank"
            className="flex items-center mr-2"
          >
            <FontAwesomeIcon
              icon={faSquareGithub}
              className="text-black dark:text-white w-10 h-10 hover:text-[#00a8e8] dark:hover:text-[#00a8e8] transition ease-out hover:-translate-y-1 hover:scale-110 duration-300"
            />
          </a>
            <button ref={toggleButtonRef} onClick={() => setShowResumeLinks(!showResumeLinks)} className="flex items-center justify-center text-white h-10 bg-[#00a8e8] rounded-lg px-4 text-lg mr-2">
              My resume
            </button>
            <div ref={dropDownListRef} className={`absolute top-[110%] left-[96px] w-[130.94px] ${showResumeLinks ? 'h-fit visible opacity-100 transition-all ease-in-out duration-300' : 'invisible opacity-0 transition-all ease-in-out duration-300'}`}>
                <ul className="bg-[#bfbfbf] dark:bg-[#616161] rounded-lg border-2 border-white/20">
                <li onClick={() => setShowResumeLinks(false)} className="hover:bg-[#0081b4] rounded-md transition ease-out duration-300 mb-[1px]">
                  <a href={CvEnglish} download className={`flex items-center justify-center h-10 px-1 text-lg `}>
                <MdOutlineFileDownload size='20px' className="mr-[2px]"/>CV-EN
                </a>
                  </li>
                  <li onClick={() => setShowResumeLinks(false)} className="hover:bg-[#0081b4] rounded-md transition ease-out duration-300">
                  <a href={CvEnglish} download className={`flex items-center justify-center h-10 px-1 text-lg `}>
                <MdOutlineFileDownload size='20px' className="mr-[2px]"/>CV-ES
                </a>
                  </li>
                </ul>
            </div>

          </div>
      </div>
      <div className="mx-auto rounded-full overflow-hidden w-60 h-60 md:h-80 md:w-80 md:mt-5 lg:mt-0">
        <img src={gerardo} alt="Gerardo's photo" />
      </div>
    </div>
  );
};

export default MainSection;
