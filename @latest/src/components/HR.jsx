import { useState, useEffect } from 'react'

import '../App.css';
import Job from './Job'
import Facebook from '../assets/facebook.png'
import Koalafi from '../assets/Koalafi.png'
import HR from '../assets/hr.png'

export default function HackReactor() {
  return (
    <div className="flex flex-col w-full bg-white rounded-[20px] shadow-lg p-6 gap-2">
      <div className="font-normal text-2xl mb-2 mt-2">
        That gap in my resume was caused by...
      </div>
      <Job image={HR} company={"Hack Reactor"} descriptions={['Immersive bootcamp', 'AGILE']} title={'Advanced Software Engineering'} dateRange={'2022 - 2023'} />
    </div>
  )
}