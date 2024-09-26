import StackFrontend from "./StackFrontend"



const StackSection = () => {
  return (
    <div className="mt-5 grid grid-cols-1 gap-3 md:gap-5 md:grid-cols-2 lg:grid-cols-3">
        <StackFrontend />
    </div>
  )
}

export default StackSection