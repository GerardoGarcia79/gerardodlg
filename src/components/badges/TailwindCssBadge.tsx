import tailwindCss from "../../assets/icons/tailwind-css.svg";

const TailwindCssBadge = () => {
  return (
    <div className="inline-flex py-1 px-1 pl-2 mb-2 items-center rounded-full bg-[#006c74]">
      <img src={tailwindCss} alt="React icon" className="w-4 h-4" />
      <span className="text-white text-sm">Tailwind CSS</span>
    </div>
  );
};

export default TailwindCssBadge;
