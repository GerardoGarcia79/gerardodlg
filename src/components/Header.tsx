import logoBlue from "../assets/logo.webp";
import HireMeButton from "./buttons/HireMeButton/HireMeButton";

const Header = () => {
  return (
    <div className="hidden md:w-full md:py-3 px-4 md:flex md:justify-between md:items-center">
      <img src={logoBlue} alt="Logo" className="w-10 md:w-12" />
        <HireMeButton />
    </div>
  );
};

export default Header;