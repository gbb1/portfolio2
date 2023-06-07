import { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Projects from './components/Projects';
import About from './components3/About';
import TopBar from './components/TopBar';
import Survey from './components/Survey';
import Details from './components/Details';
import Footer from './components/Footer';
import HackReactor from './components/HR';

import './App.css';

function App() {
  const [count, setCount] = useState(0)

  const navRef = useRef(null);
  const backgroundRef = useRef(null);

  const scrollToRef = () => {
    if (navRef.current) {
      navRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const scrollToBackground = () => {
    console.log('clicked')
    if (backgroundRef.current) {
      backgroundRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  // useEffect(() => {
  //   console.log(navRef.current);
  // }, [navRef])

  return (
    <div className="w-screen h-screen overflow-x-hidden bg-gradient-to-b from-white to-gray-200">
      <TopBar />
      <div ref={navRef}></div>
      <div className="flex justify-center mt-[12vh] md:mt-[10vh]">
        <div className="flex flex-col justify-center max-w-[600px] w-[90%] md:w-[80%] gap-2 md:gap-4">
          <AboutMe scroller4 = {scrollToBackground}/>
          <Details />
          <div ref={backgroundRef} >
            <Experience />
          </div>
          <HackReactor />
          <Survey />
          <Projects />
          <Footer scroller={scrollToRef} />
        </div>
      </div>
    </div >
  )
}

export default App
