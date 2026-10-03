import {useRef} from 'react'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'

export default function Marquee({items}){
    const marqueeRef=useRef(null)
    const distance=useRef(null)
    const trackRef = useRef(null)

    useGSAP(()=>{
        const track=trackRef.current 
        const distance=track.scrollWidth/2 
        const animation=gsap.to(track,{
            x:-distance,
            duration:25,
            ease:'none',
            repeat:-1,
        })

        const marquee=marqueeRef.current
        const slowDown=()=>animation.timeScale(0.3)
        const speedUp=()=>animation.timeScale(1)

        marquee.addEventListener('mouseenter',slowDown)
        marquee.addEventListener('mouseleave',speedUp)

        // Cleanup: When the component is removed, remove the event listeners too.
        return ()=>{
            marquee.removeEventListener('mouseenter',slowDown)
            marquee.removeEventListener('mouseleave',speedUp)
        }
    },{scope:marqueeRef})

    const repeatedItems=[...items,...items]

    return(
        <section className="marquee" ref={marqueeRef}>
            <div className="track" ref={trackRef}>
                {repeatedItems.map((item,index)=>(
                    <span key={`${item}-${index}`}>{item}</span>
                ))}
            </div>
        </section>
    )
}