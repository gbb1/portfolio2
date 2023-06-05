import { useState, useEffect } from 'react'

import '../App.css';
import Job from './Job'

export default function Experience() {
  return (
    <div className="flex flex-col w-full bg-white rounded-[20px] shadow-lg p-6">
      One project
      <Job />
    </div>
  )
}