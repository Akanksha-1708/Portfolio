import {useRef} from 'react'
import {Link} from 'react-router-dom'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import {profile} from '../data.js'

export default function Hero(){
    const heroRef=useRef(null)
    useGSAP(()=>{
        const elements=heroRef.current.querySelectorAll(
            '.hero-reveal'
        )
        gsap.fromTo(
            elements,
            {y:35,opacity:0},
            {y:0,opacity:1,duration:0.8,stagger:0.15,ease:'power3.out',}
        );
    },{scope:heroRef});

    return(
        <section className="hero" ref={heroRef}>
            {profile.status&&(
                <div className="pill hero-reveal">
                    <span className="pill-dot"></span>
                    {profile.status}
                </div>
            )}
            <p className="hello hero-reveal">Hello, I am</p> 
            <h1 className="hero-title hero-reveal">{profile.name}</h1> 
            <p className="hero-sub hero-reveal">{profile.role}</p>
            <p className="hero-sub hero-reveal">{profile.description}</p>

            <div className="cta hero-reveal">
                <Link to="/work" className="btn">Explore My Work</Link>
                <Link to="/contact" className="btn ghost">Get In Touch</Link>

            <a href={profile.github} target="_blank" rel="noreferrer" className="text-link">GitHub ↗</a>
            </div>
        </section>
    );
}