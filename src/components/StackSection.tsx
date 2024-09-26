import StackFrontend from "./StackFrontend"
import StackTools from "./StackTools"



const StackSection = () => {
  return (
    <div className="mt-5 grid grid-cols-1 gap-3 md:gap-5 md:grid-cols-2 lg:grid-cols-3">
        <StackFrontend />
        <StackTools />
    </div>
  )
}

export default StackSection