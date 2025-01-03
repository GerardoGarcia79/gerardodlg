import prisma from "../../assets/icons/Prisma_dark.svg";

const PrismaBadge = () => {
  return (
    <div className="inline-flex py-1 px-1 pl-2 mb-2 items-center rounded-full bg-[#262626]">
      <img src={prisma} alt="Prisma icon" className="w-4 h-4" />
      <span className="text-white text-sm">Prisma</span>
    </div>
  );
};

export default PrismaBadge;
