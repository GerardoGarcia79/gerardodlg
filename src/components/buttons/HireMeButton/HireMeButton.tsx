import './hireMe.css'

const HireMeButton = () => {
  return (
    <div className='z-10'><button className=" hire-me relative rounded-full bg-[#dcfce7] dark:bg-[#1f2937] py-1 px-2 text-lg after:content-[''] after:absolute after:h-[120%] after:w-[109%] after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:-z-10 after:rounded-full before:content-[''] before:absolute before:h-[118%] before:w-[109%] before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:-z-10 before:rounded-full before:blur-lg before:opacity-75"><a href="mailto:gerardodlg.dev@gmail.com">Hire Me</a></button></div>
  )
}

export default HireMeButton