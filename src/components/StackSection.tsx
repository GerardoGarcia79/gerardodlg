import StackFrontend from "./StackFrontend"
import StackLearning from "./StackLearning"
import StackTools from "./StackTools"



const StackSection = () => {
  return (
    <>
    <h2 className="text-4xl font-semibold text-white my-5">Stack</h2>
    <div className="grid grid-cols-1 gap-3 md:gap-5 md:grid-cols-2 lg:grid-cols-3">
        <StackFrontend />
        <StackTools />
        <StackLearning />
    </div>
    </>
  )
}

export default StackSection