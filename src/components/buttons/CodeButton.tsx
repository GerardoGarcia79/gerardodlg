import { FiGithub } from "react-icons/fi";

interface Props {
  code: string;
}

const CodeButton = ({ code }: Props) => {
  return (
    <a href={code} target="_blank" className="text-lg">
      <button className="bg-[#bfbfbf] dark:bg-[#303030] p-2 rounded-xl hover:bg-[#0081b4] dark:hover:bg-[#0081b4] transition ease-out hover:scale-110 duration-300 flex justify-center items-center border-[1px] border-white/20 hover:border-2 hover:border-white">
        <FiGithub size="25px" />
        <span>Code</span>
      </button>
    </a>
  );
};

export default CodeButton;
