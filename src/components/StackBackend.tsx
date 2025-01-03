import { useEffect, useState } from "react";
import mysql from "../assets/icons/mysql.svg";
import prismaDark from "../assets/icons/Prisma_dark.svg";
import prismaLight from "../assets/icons/Prisma_light.svg";

const StackBackend = () => {
  const [theme, setTheme] = useState(false);
  const htmlElement = document.documentElement;
  useEffect(() => {
    setTheme(htmlElement.classList.contains("dark"));
  }, [htmlElement.classList]);

  return (
    <div className="lg:col-start-2 flex flex-col border-2 border-black/10 dark:border-white/10 rounded-lg p-5 transition ease-out hover:border-[#00a8e8]/50 dark:hover:border-[#00a8e8]/50 duration-300">
      <h3 className="flex justify-center text-3xl font-semibold text-[#00a8e8] mb-3">
        Backend
      </h3>
      {/* row */}
      <div className="grid grid-cols-2 mb-3 h-full">
        <div className="flex flex-col items-center justify-center">
          <img src={mysql} alt="MySQL logo" className="w-12 h-12 rounded-sm" />
          <p className="text-sm mt-1">MySQL</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src={theme ? prismaDark : prismaLight}
            alt="Prisma logo"
            className="w-12 h-12 rounded-sm"
          />
          <p className="text-sm mt-1">Prisma</p>
        </div>
      </div>
    </div>
  );
};

export default StackBackend;
