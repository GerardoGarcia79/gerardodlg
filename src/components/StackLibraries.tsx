import reactQuery from "../assets/icons/react-query.svg";
import zustand from "../assets/icons/zustand.svg";
import reduxTKL from "../assets/icons/redux.svg";
import Axios from "../assets/icons/Axios.svg";
import testingLibrary from "../assets/icons/testing-library.svg";
import nextAuth from "../assets/icons/next-auth.svg";
import Zod from "../assets/icons/zod.svg";

const StackLibraries = () => {
  return (
    <div className="flex flex-col border-2 border-black/10 dark:border-white/10 rounded-lg p-5 transition ease-out hover:border-[#00a8e8]/50 dark:hover:border-[#00a8e8]/50 duration-300">
      <h3 className="flex justify-center text-3xl font-semibold text-[#00a8e8] mb-3">
        Libraries
      </h3>
      {/* row */}
      <div className="grid grid-cols-3 mb-3">
        <div className="flex flex-col items-center justify-center">
          <img
            src={reactQuery}
            alt="React Query logo"
            className="w-12 h-12 rounded-sm"
          />
          <p className="text-sm mt-1">React Query</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src={zustand}
            alt="Zustand logo"
            className="w-12 h-12 rounded-sm"
          />
          <p className="text-sm mt-1">Zustand</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src={reduxTKL}
            alt="Redux Toolkit logo"
            className="w-12 h-12 rounded-sm"
          />
          <p className="text-sm mt-1">Redux TKL</p>
        </div>
      </div>
      {/* row */}
      <div className="grid grid-cols-3 mb-3">
        <div className="flex flex-col items-center justify-center">
          <img src={Axios} alt="Axios logo" className="w-12 h-12 rounded-sm" />
          <p className="text-sm mt-1">Axios</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src={testingLibrary}
            alt="Testing Library logo"
            className="w-12 h-12 rounded-sm"
          />
          <p className="text-sm mt-1">Testing Library</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src={nextAuth}
            alt="NextAuth.js logo"
            className="w-12 h-12 rounded-sm"
          />
          <p className="text-sm mt-1">NextAuth.js</p>
        </div>
      </div>
      {/* row */}
      <div className="grid grid-cols-3 mb-3">
        <div className="flex flex-col items-center justify-center col-start-2">
          <img src={Zod} alt="Zod logo" className="w-12 h-12 rounded-sm" />
          <p className="text-sm mt-1">Zod</p>
        </div>
      </div>
    </div>
  );
};

export default StackLibraries;
