import { FiGithub } from "react-icons/fi";

interface Props {
  code: string;
}

const CodeButton = ({ code }: Props) => {
  return (
    <a href={code} target="_blank" className="text-lg text-white">
      <button className="bg-[#303030] p-2 rounded-xl hover:bg-[#0081b4] transition ease-out hover:scale-110 duration-300 flex justify-center items-center border-[1px] border-white/20 hover:border-2 hover:border-white">
        <FiGithub />
        <span className="ml-2">Code</span>
      </button>
    </a>
  );
};

export default CodeButton;

// #1f2937
