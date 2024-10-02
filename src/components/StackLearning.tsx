import nextJs from '../assets/icons/next-js.svg'
import reactQuery from '../assets/icons/react-query.svg';
import zustand from '../assets/icons/zustand.svg';
import chakraUi from '../assets/icons/chakra-ui.svg'



const StackLearning = () => {
  return (
    <div className='flex flex-col border-2 border-black/10 dark:border-white/10 rounded-lg p-5 transition ease-out hover:scale-105 hover:border-[#00a8e8]/50 dark:hover:border-[#00a8e8]/50 duration-300'>
            <h3 className='flex justify-center text-3xl font-semibold text-[#00a8e8] mb-3'>Learning</h3>
            {/* row */}
            <div className='grid grid-cols-3 mb-3'>
                <div className='flex flex-col items-center justify-center'>
                    <img src={nextJs} alt="Next.js logo" className='w-12 h-12 rounded-sm' />
                    <p className='text-sm mt-1'>Next.js</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <img src={reactQuery} alt="React Query logo" className='w-12 h-12 rounded-sm' />
                    <p className='text-sm mt-1'>React Query</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <img src={zustand} alt="Zustand logo" className='w-12 h-12 rounded-sm' />
                    <p className='text-sm mt-1'>Zustand</p>
                </div>
            </div>
            {/* row */}
            <div className='grid grid-cols-3 mb-3'>
                <div className='flex flex-col items-center justify-center'>
                    <img src={chakraUi} alt="Chakra UI logo" className='w-12 h-12 rounded-sm' />
                    <p className='text-sm mt-1'>Chakra UI</p>
                </div>
            </div>
        </div>
  )
}

export default StackLearning