import Hero from '../components/Hero.jsx'
import Marquee from '../components/Marquee.jsx'
import {marqueeItems} from '../data.js'
import {Link} from 'react-router-dom'
import ProjectCard from '../components/ProjectCard.jsx'
import {projects} from '../data.js'

export default function Home(){
  return (
    <>
      <Hero />
      <Marquee items={marqueeItems}/>
      <section className="sec stack-sec">
        <h2>Featured projects</h2>
        <div>
          <div className="grid">
            {projects.slice(0,3).map((project)=>(
              <ProjectCard key={project.slug} p={project}/>
            ))}
          </div>
          <Link className="more" to="/work">View all projects ({projects.length})</Link>
        </div>
      </section>
    </>
  );
}
