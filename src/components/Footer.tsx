import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin"
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons/faSquareGithub"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = () => {
  return (
    <div className="border-t-black/50 dark:border-t-white/50 border-t-2 mt-10">
        <div className="py-5 md:flex md:justify-between md:py-8">
            <p className="flex items-center mb-2 md:mb-0">©Gerardo de León García. Almost all rights reserved. </p>
            <div className="flex">
            <a href="mailto:gerardodlg.dev@gmail.com" className="flex items-center mr-5 bg-[#00a8e8] rounded-lg p-1 hover:bg-[#0081b4] transition ease-out hover:-translate-y-1 hover:scale-110 duration-300">Contact</a>
            <a
            href="https://www.linkedin.com/in/gerardo-de-leon-garcia/"
            target="_blank"
            className="flex items-center mr-3"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-black dark:text-white w-7 h-7 hover:text-[#00a8e8] dark:hover:text-[#00a8e8] transition ease-out hover:-translate-y-1 hover:scale-110 duration-300"
            />
          </a>
          <a
            href="https://github.com/GerardoGarcia79"
            target="_blank"
            className="flex items-center"
          >
            <FontAwesomeIcon
              icon={faSquareGithub}
              className="text-black dark:text-white w-7 h-7 hover:text-[#00a8e8] dark:hover:text-[#00a8e8] transition ease-out hover:-translate-y-1 hover:scale-110 duration-300"
            />
          </a>
            </div>
        </div>
    </div>
  )
}

export default Footer