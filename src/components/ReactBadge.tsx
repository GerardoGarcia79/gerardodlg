import react from "../assets/icons/react.svg";

const ReactBadge = () => {
  return (
    <div className="flex py-1 px-1 pl-2 items-center rounded-full bg-[#006c82]">
      <img src={react} alt="React icon" className="w-4 h-4" />
      <span className="text-white text-sm">React</span>
    </div>
  );
};

export default ReactBadge;
