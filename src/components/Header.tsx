import logoWhite from "../assets/logo-white.png";
import HireMeButton from "./buttons/HireMeButton/HireMeButton";

const Header = () => {
  return (
    <div className="hidden md:w-full md:p-4 md:flex md:justify-between md:items-center">
      <img src={logoWhite} alt="Logo" className="w-44 md:w-36" />
      <HireMeButton />
    </div>
  );
};

export default Header;
