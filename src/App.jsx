import {NavLink,Route,Routes,Link} from 'react-router-dom';

function Home(){
  return <section className="page"><h1>Home</h1></section>
}
function Work(){
  return <section className="page"><h1>Work</h1></section>
}
function About(){
  return <section className="page"><h1>About</h1></section>
}
function Writing(){
  return <section className="page"><h1>Writing</h1></section>
}
function Contact(){
  return <section className="page"><h1>Contact</h1></section>
}

export default function App(){
  return(
    <>
    <header className="bar">
      <Link to="/" className="bar-name">Akanksha</Link>
      <nav aria-label="Main navigation">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/work">Work</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/writing">Writing</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/work" element={<Work/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/writing" element={<Writing/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<section className="page"><h1>404</h1><Link to="/">Go home</Link></section>} />
      </Routes>
    </main>
    </>
  );
}