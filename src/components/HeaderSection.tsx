import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gerardo from "../assets/face.webp";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons/faSquareGithub";

const HeaderSection = () => {
  return (
    <div className="grid grid-cols-1 gap-y-5 my-6 py-[25px] lg:grid-cols-3 md:gap-y-0 md:py-[100px] lg:py-[250px]">
      <div className="md:col-span-2">
        <h1 className="text-white font-bold text-5xl mb-5">
          Hi, I'm <span className="text-[#00a8e8] ">Gerardo De León, </span>
          Frontend developer based in México.
        </h1>
        <p className="text-white text-xl">
          I love technology, I'm passionate about creating websites, always
          ready to face challenges, and currently available for work
        </p>
        <div className="flex items-center mt-4 [&_*]:mr-2">
          <a
            href="https://www.linkedin.com/in/gerardo-de-le%C3%B3n-garc%C3%ADa/"
            target="_blank"
            className="flex items-center"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-white w-10 h-10 hover:text-[#00a8e8] transition ease-out hover:-translate-y-1 hover:scale-110 duration-300"
            />
          </a>
          <a
            href="https://github.com/GerardoGarcia79"
            target="_blank"
            className="flex items-center"
          >
            <FontAwesomeIcon
              icon={faSquareGithub}
              className="text-white w-10 h-10 hover:text-[#00a8e8] transition ease-out hover:-translate-y-1 hover:scale-110 duration-300"
            />
          </a>
          <button className="text-white h-10 bg-[#00a8e8] rounded-lg px-4 text-lg hover:bg-[#0081b4] transition ease-out hover:-translate-y-1 hover:scale-110 duration-300">
            My resume
          </button>
        </div>
      </div>
      <div className="mx-auto rounded-full overflow-hidden w-60 h-60 md:h-80 md:w-80 md:mt-5 lg:mt-0">
        <img src={gerardo} alt="Gerardo's photo" />
      </div>
    </div>
  );
};

export default HeaderSection;
