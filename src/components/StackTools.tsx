import git from '../assets/icons/git.svg';
import github from '../assets/icons/github_light.svg';
import figma from '../assets/icons/figma.svg';
import vite from '../assets/icons/vitejs.svg';
import npm from '../assets/icons/npm.svg';

const StackTools = () => {
  return (
    <div className='flex flex-col border-2 border-black/10 dark:border-white/10 rounded-lg p-5 transition ease-out hover:scale-105 hover:border-[#00a8e8]/50 dark:hover:border-[#00a8e8]/50 duration-300'>
            <h3 className='flex justify-center text-3xl font-semibold text-[#00a8e8] mb-3'>Tools</h3>
            {/* row */}
            <div className='grid grid-cols-3 mb-3'>
                <div className='flex flex-col items-center justify-center'>
                    <img src={git} alt="Git logo" className='w-12 h-12 rounded-sm' />
                    <p className='text-sm mt-1'>Git</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <img src={github} alt="Github logo" className='w-12 h-12 rounded-sm' />
                    <p className='text-sm mt-1'>Github</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <img src={figma} alt="Figma logo" className='w-12 h-12 rounded-sm' />
                    <p className='text-sm mt-1'>Figma</p>
                </div>
            </div>
            {/* row */}
            <div className='grid grid-cols-3 mb-3'>
                <div className='flex flex-col items-center justify-center'>
                    <img src={vite} alt="Vite logo" className='w-12 h-12 rounded-sm' />
                    <p className='text-sm mt-1'>Vite</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <img src={npm} alt="npm logo" className='w-12 h-12 rounded-sm' />
                    <p className='text-sm mt-1'>npm</p>
                </div>
            </div>
        </div>
  )
}

export default StackTools