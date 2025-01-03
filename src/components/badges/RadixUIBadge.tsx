import radixUIDark from "../../assets/icons/RadixUI-dark.svg";

const RadixUIBadge = () => {
  return (
    <div className="inline-flex py-1 px-1 pl-2 mb-2 items-center rounded-full bg-[#262626] text-nowrap">
      <img src={radixUIDark} alt="Radix UI icon" className="w-4 h-4" />
      <span className="text-white text-sm">Radix UI</span>
    </div>
  );
};

export default RadixUIBadge;
