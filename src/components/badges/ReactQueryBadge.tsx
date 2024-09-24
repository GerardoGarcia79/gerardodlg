import reactQuery from "../../assets/icons/react-query.svg";

const ReactQueryBadge = () => {
  return (
    <div className="inline-flex py-1 px-1 pl-2 items-center rounded-full bg-[#ff4d5e]">
      <img src={reactQuery} alt="React icon" className="w-4 h-4" />
      <span className="text-white text-sm">React Query</span>
    </div>
  );
};

export default ReactQueryBadge;
