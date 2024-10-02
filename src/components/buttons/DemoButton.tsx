import { IoIosLink } from "react-icons/io";

interface Props {
  demo: string;
}

const DemoButton = ({ demo }: Props) => {
  return (
    <a href={demo} target="_blank" className="text-lg">
      <button className="bg-[#bfbfbf] dark:bg-[#303030] p-2 rounded-xl dark:hover:bg-[#0081b4] hover:bg-[#0081b4] transition ease-out hover:scale-110 duration-300 flex justify-center items-center border-[1px] border-white/20 hover:border-2 hover:border-white">
        <IoIosLink size="25px" />
        <span>Demo</span>
      </button>
    </a>
  );
};

export default DemoButton;
