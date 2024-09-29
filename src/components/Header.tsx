
import logoWhite from "../assets/logo-white.png";

const Header = () => {
  return (
    <div className="hidden md:w-full md:p-4 md:flex md:justify-between md:items-center">
      <img src={logoWhite} alt="Logo" className="w-44 md:w-36" />
      
      <a href="mailto:gerardodlg.dev@gmail.com"  type="submit"><button className="rounded-full bg-[#00a8e8] py-1 px-2 text-lg text-white hover:bg-[#0081b4] transition ease-out hover:scale-110 duration-300">Hire Me</button></a>
    </div>
  );
};

export default Header;
