import Hero from '../components/Hero.jsx'
import Marquee from '../components/Marquee.jsx'
import {marqueeItems} from '../data.js'

export default function Home(){
  return (
    <>
      <Hero />
      <Marquee items={marqueeItems}/>
    </>
  );
}
