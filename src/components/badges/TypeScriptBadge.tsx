import ts from "../../assets/icons/typescript.svg";

const TypeScriptBadge = () => {
  return (
    <div className="inline-flex py-1 px-1 pl-2 items-center rounded-full bg-[#205790]">
      <img src={ts} alt="React icon" className="w-4 h-4" />
      <span className="text-white text-sm">TypeScript</span>
    </div>
  );
};

export default TypeScriptBadge;
