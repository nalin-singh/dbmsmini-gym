import Head from 'next/head';
import Image from 'next/image';
import 'tailwindcss/tailwind.css';


//Components
import Navbar from '../components/navbar';
import HeroSection from '../components/landingsection';

export default function Home() {
  return (
    <>
    <div className='container max-w-10 mx-auto flex flex-col '>
      <HeroSection/>
    </div>
    </>
  )
}
