import react from '../assets/icons/react.svg';
import ts from '../assets/icons/typescript.svg';
import js from '../assets/icons/javascript.svg';
import tailwindCss from '../assets/icons/tailwind-css.svg';
import html from '../assets/icons/html5.svg';
import css from '../assets/icons/css.svg'

const StackFrontend = () => {
  return (
    <div className='flex flex-col border-2 border-white/10 rounded-lg p-5 transition ease-out hover:scale-105 hover:border-[#00a8e8]/50 duration-300'>
            <h3 className='flex justify-center text-3xl font-semibold text-[#00a8e8] mb-3'>Frontend</h3>
            {/* row */}
            <div className='grid grid-cols-3 mb-3'>
                <div className='flex flex-col items-center justify-center'>
                    <img src={react} alt="React logo" className='w-12 h-12 rounded-sm' />
                    <p className='text-white text-sm mt-1'>React</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <img src={ts} alt="TypeScript logo" className='w-12 h-12 rounded-sm' />
                    <p className='text-white text-sm mt-1'>TypeScript</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <img src={js} alt="JavaScript logo" className='w-12 h-12 rounded-sm' />
                    <p className='text-white text-sm mt-1'>JavaScript</p>
                </div>
            </div>
            {/* row */}
            <div className='grid grid-cols-3 mb-3'>
                <div className='flex flex-col items-center justify-center'>
                    <img src={tailwindCss} alt="Tailwind CSS logo" className='w-12 h-12 rounded-sm' />
                    <p className='text-white text-sm mt-1'>TailwindCSS</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <img src={html} alt="HTML5 logo" className='w-12 h-12 rounded-sm' />
                    <p className='text-white text-sm mt-1'>HTML5</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <img src={css} alt="CSS3 logo" className='w-12 h-12 rounded-sm' />
                    <p className='text-white text-sm mt-1'>CSS3</p>
                </div>
            </div>
        </div>
  )
}

export default StackFrontend