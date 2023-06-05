import { useState, useEffect } from 'react'
import { LuGraduationCap } from 'react-icons/lu'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { MdOutlineCake } from 'react-icons/md'
import { GrCode } from 'react-icons/gr'

import '../App.css';


const Details = () => {
  return (
    <div className="flex flex-col w-full bg-white rounded-[20px] shadow-lg p-6">
      <div className="flex flex-row items-center">
        <div className="flex flex-row items-center gap-3">
          <MdOutlineCake style={{ fontSize: '24px' }} />
          <span>26</span>
        </div>
        <hr className="bg-base-300 rounded-[100px] mx-4" style={{ height: '100%', width: '2px' }}></hr>
        <div className="flex flex-row items-center gap-3">
          <HiOutlineLocationMarker style={{ fontSize: '24px' }} />
          <span>Open to relocating</span>
        </div>
        <hr className="bg-base-300 rounded-[100px] mx-4" style={{ height: '100%', width: '2px' }}></hr>
        <div className="flex flex-row items-center gap-3">
          <HiOutlineLocationMarker style={{ fontSize: '24px' }} />
          <span>Open to relocating</span>
        </div>
      </div>
      <hr className="bg-base-300 rounded-[100px] my-4" style={{ height: '2px' }}></hr>
      <div className="flex flex-row items-center gap-3">
        <GrCode style={{ fontSize: '24px' }} />
        <span>Javascript, Typescript, React, HTML5, CSS</span>
      </div>
      {/* <div className="divider"></div> */}
      <hr className="bg-base-300 rounded-[100px] my-4" style={{ height: '2px' }}></hr>
      <div className="flex flex-row items-center gap-3">
        <LuGraduationCap style={{ fontSize: '24px' }} />
        <span>Universtity of Chicago: B.A. Statistics, Linguistics</span>
      </div>
      <hr className="bg-base-300 rounded-[100px] my-4" style={{ height: '2px' }}></hr>
      <div className="flex flex-row items-center gap-3">
        <HiOutlineLocationMarker style={{ fontSize: '24px' }} />
        <span>Houston • Remote • Open to relocating</span>
      </div>

    </div>
  )
}

export default Details;