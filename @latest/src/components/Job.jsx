import { useState, useEffect } from 'react'

import '../App.css';
import Facebook from '../assets/facebook.png'

const Job = () => {
  return (
    <div className="border-2 flex flex-row gap-6 p-4 rounded-lg">
      <img className="w-[10%]" src={Facebook} />
      <div className="flex flex-col">
        <div className="font-bold text-lg">Meta (Facebook)</div>
        <div className="flex flex-row gap-2 ">
          <div className="flex">Content Designer</div>
          <div className="flex">2019 - 2021</div>
        </div>
      </div>
    </div>
  )
}

export default Job;