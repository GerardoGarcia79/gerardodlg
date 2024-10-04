import { FaUserCheck } from "react-icons/fa6";

const AboutMe = () => {
  return (
    <div id="about-me" className="my-10 md:my-20 lg:my-28">
    <h2 className="text-4xl font-semibold flex mt-5"><FaUserCheck color="#00a8e8" />&nbsp;
    About Me
    </h2>
    <div>
        <div>
            <p className="text-balance my-2 md:text-wrap lg:my-5">My name is Gerardo de León García, and I am a biomedical engineer. I started programming at the age of 17, following a learning path in high school that taught C, C++, and web programming with HTML, CSS, and Wix. In university, I studied C and MATLAB.</p>
            <p className="text-balance mb-2 md:text-wrap lg:mb-0">A year ago, I decided to become a frontend developer because it's the area I'm passionate about—a passion reflected in the enthusiasm and dedication I bring to each project.</p>
            <p className="text-balance mb-2 md:text-wrap lg:mb-0">I currently have one year of experience developing websites and real-world projects. I am available to work and face challenges in a professional environment.</p>
        </div>
        {/* TODO:To add a photo or icon */}
        {/* <div className="flex items-center min-[400px]:w-1/2 min-[400px]:mx-auto md:w-[95%] lg:w-3/4"><img src={gerard} alt="Gerardo's photo" className="rounded-lg" /></div> */}
    </div>
    </div>
  )
}

export default AboutMe