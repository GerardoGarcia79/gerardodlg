import StackFrontend from "./StackFrontend"
import StackLearning from "./StackLearning"
import StackTools from "./StackTools"
import { HiMiniSquare3Stack3D } from "react-icons/hi2";



const StackSection = () => {
  return (
    <>
    <h2 className="text-4xl font-semibold my-5 flex"><HiMiniSquare3Stack3D color="#00a8e8"/>
    &nbsp;
    Stack</h2>
    <div className="grid grid-cols-1 gap-3 md:gap-5 md:grid-cols-2 lg:grid-cols-3">
        <StackFrontend />
        <StackTools />
        <StackLearning />
    </div>
    </>
  )
}

export default StackSection