import Head from 'next/head'
import Image from 'next/image'
import 'tailwindcss/tailwind.css'


//Components
import Navbar from '../components/navbar';
import HeroSection from '../components/landingsection';

export default function Home() {
  return (
    <>
    <Head>
    <link href="https://fonts.googleapis.com/css2?family=Inter&display=optional" rel="stylesheet"/>
    </Head>
    <div className='container mx-auto flex flex-col my-4'>
      <Navbar/>
      <HeroSection/>
    </div>
    </>
  )
}
