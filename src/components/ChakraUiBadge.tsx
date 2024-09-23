import chakraUi from "../assets/icons/chakra-ui.svg";

const ChakraUiBadge = () => {
  return (
    <div className="flex py-1 px-1 pl-2 items-center rounded-full bg-[#317f77]">
      <img src={chakraUi} alt="React icon" className="w-4 h-4" />
      <span className="text-white text-sm">Chakra UI</span>
    </div>
  );
};

export default ChakraUiBadge;
