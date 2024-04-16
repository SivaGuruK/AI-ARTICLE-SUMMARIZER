import { logo1 } from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
          <nav className='flex-justify-between items-center w-full mb-10 pt-3'>
              <img src={logo1} alt='sum-logo' className='w-28 object-contain'/>
          </nav>
          
          <h1 className='head_text'>
              Summarize Articles with <br className='max-md:hidden'/> 
              <span className='orange_gradient'>OpenAI GPT-4</span>
          </h1>
          <h2 className='desc'>
              Transform verbose articles into succinct summaries effortlessly with Summize, an open-source tool designed to streamline your reading experience.
            </h2>
    </header>
  )
}

export default Hero
