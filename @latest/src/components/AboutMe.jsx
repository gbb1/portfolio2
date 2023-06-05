import { useState, useEffect } from 'react'

import '../App.css';


const AboutMe = () => {
  return (
    <div className="flex flex-col gap-2 pt-2">
      <div className="font-bold text-4xl">
        Hi! I'm Gabe.
      </div>
      <div className="font-normal text-1xl mb-2">
        I'm a fullstack engineer with a background in Stats and Linguistics, and professional experience in UX design and marketing.
      </div>
      <div className="rounded-[20px] bg-black h-[400px]">
        <img />
      </div>

    </div>
  )
}

export default AboutMe;