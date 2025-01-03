import StackFrontend from "./StackFrontend";
import StackBackend from "./StackBackend";
import StackTools from "./StackTools";
import { HiMiniSquare3Stack3D } from "react-icons/hi2";
import StackLibraries from "./StackLibraries";

const StackSection = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <h2 className="text-4xl font-semibold mt-5 flex">
        <HiMiniSquare3Stack3D color="#00a8e8" />
        &nbsp; Stack
      </h2>
      <div className="grid grid-cols-1 gap-3 md:gap-3 md:grid-cols-2 lg:grid-cols-3">
        <StackFrontend />
        <StackLibraries />
        <StackTools />
        <StackBackend />
      </div>
    </div>
  );
};

export default StackSection;
