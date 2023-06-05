import { useState, useEffect } from 'react'
import { ImLinkedin } from 'react-icons/im'
import { FaGithub } from 'react-icons/fa'

import '../App.css';

const TopBar = () => {
  return (
    <div className="bg-white flex flex-row w-full justify-center items-center gap-10 min-h-min h-[40px] p-5">
      <div className="scale-[200%] min-h-min border-2">
        <ImLinkedin />
      </div>
      <div className="scale-[200%] min-h-min border-2">
        <FaGithub />
      </div>

      <ul className="menu menu-horizontal bg-white rounded-box">
        <li>
          <a className="rounded-[10000px] w-12 h-12">
            <ImLinkedin />
          </a>
        </li>
        <li>
          <a className="rounded-[10000px] w-12 h-12">
            <FaGithub />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default TopBar;