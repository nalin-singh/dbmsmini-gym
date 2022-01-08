import trainerPhoto from '../public/images/Training.jpeg';

//components
import Navbar from './navbar';
export default function HeroSection(){
  const headline ="Achieve your training goals with the right plan, not with luck! 🏋️";

    return(
      <main className="flex flex-col h-screen">
        <Navbar/>
        <div className='flex flex-col h-full justify-center items-baseline'>
          <h1 className="font-medium text-8xl max-w-7xl mb-12 align">{headline}</h1>
          {/* <img  className='w-4/12' src={trainerPhoto.src} alt="Mascott"/>  */}
          <button className='border-2 text-xl font-medium py-4 px-8 rounded-md hover:text-white hover:bg-gray-dark'>Get started with your free trial </button>
        </div>
      </main>
    )
}