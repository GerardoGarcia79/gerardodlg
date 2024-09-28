
import logoWhite from "../assets/logo-white.png";

const Header = () => {
  return (
    <div className="hidden md:w-full md:p-4 md:flex md:justify-between md:items-center">
      <img src={logoWhite} alt="Logo" className="w-44 md:w-36" />
      
      <button>Hire Me</button>
    </div>
  );
};

export default Header;
