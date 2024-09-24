import { IoIosLink } from "react-icons/io";

interface Props {
  demo: string;
}

const DemoButton = ({ demo }: Props) => {
  return (
    <a href={demo} target="_blank" className="text-lg text-white">
      <button className="bg-[#303030] p-2 rounded-xl hover:bg-[#0081b4] transition ease-out hover:scale-110 duration-300 flex justify-center items-center border-[1px] border-white/20 hover:border-2 hover:border-white">
        <IoIosLink />
        <span className="ml-2">Demo</span>
      </button>
    </a>
  );
};

export default DemoButton;
