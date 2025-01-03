import nextjs from "../../assets/icons/next-js.svg";

const NextjsBadge = () => {
  return (
    <div className="inline-flex py-1 px-1 pl-2 mb-2 items-center rounded-full bg-[#262626]">
      <img src={nextjs} alt="Next.js icon" className="w-4 h-4" />
      <span className="text-white text-sm">Next.js</span>
    </div>
  );
};

export default NextjsBadge;
