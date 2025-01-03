import nextAuth from "../../assets/icons/next-auth.svg";

const NextAuthjsBadge = () => {
  return (
    <div className="inline-flex py-1 px-1 pl-2 mb-2 items-center rounded-full bg-gradient-to-r from-[#31dddc] to-[#8e38e2]">
      <img src={nextAuth} alt="Next.js icon" className="w-4 h-4" />
      <span className="text-white text-sm">NextAuth.js</span>
    </div>
  );
};

export default NextAuthjsBadge;
