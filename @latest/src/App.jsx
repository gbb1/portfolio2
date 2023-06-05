import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Projects from './components/Projects';
import About from './components3/About';
import TopBar from './components/TopBar';
import Survey from './components/Survey';
import Details from './components/Details';

import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-screen h-screen overflow-x-hidden bg-gradient-to-b from-white to-gray-200">
      <TopBar />
      <div className="flex justify-center">
        <div className="flex flex-col justify-center w-[600px] border-2 gap-4">
          <AboutMe />
          <Details />
          <Experience />
          <Survey />
          <Projects />
          <About />
        </div>
      </div>
    </div >
  )
}

export default App
